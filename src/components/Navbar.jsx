"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Experience", href: "#experience" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#location" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-700",
        isScrolled 
          ? "bg-black-pure/90 backdrop-blur-3xl border-b border-gold/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent py-5"
      )}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-maroon via-gold to-maroon transition-all duration-100 ease-out" style={{ width: `${scrollProgress}%` }} />
      <div className="w-full pl-2 md:pl-4 pr-4 md:pr-10 flex items-center">
        {/* Left: Logo & Brand */}
        <div className="flex-shrink-0">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-14 h-14 md:w-18 md:h-18">
              <Image
                src="/images/logo_clean.png"
                alt="Zam Zam Mandi Logo"
                fill
                className="object-contain transition-luxury drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:scale-110"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-luxury font-bold text-white tracking-[0.2em] leading-none">
                ZAM ZAM
              </span>
              <span className="text-[7px] font-sans font-bold text-gold tracking-[0.6em] mt-1">
                MANDI
              </span>
            </div>
          </Link>
        </div>

        {/* Center-Left: Main Navigation Links */}
        <div className="hidden lg:flex items-center gap-10 ml-20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-[10px] font-luxury font-medium tracking-[0.4em] text-white/50 hover:text-gold uppercase transition-luxury overflow-hidden py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
          <Link
            href="/social"
            className="text-[10px] font-luxury font-medium tracking-[0.4em] text-gold hover:text-white uppercase transition-luxury border-l border-white/5 pl-10 ml-2"
          >
            Social
          </Link>
        </div>

        {/* Right: CTA & Mobile Menu Button */}
        <div className="ml-auto flex items-center">
          <div className="hidden lg:block">
            <Link
              href="https://wa.me/96800000000"
              className="px-10 py-3.5 bg-maroon/20 hover:bg-maroon text-gold hover:text-white border border-gold/30 hover:border-maroon rounded-full font-bold text-[9px] tracking-[0.3em] uppercase transition-luxury"
            >
              Order Now
            </Link>
          </div>

          <button
            className="lg:hidden text-white/80 hover:text-gold transition-colors ml-4"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black-pure/90 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 35, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-sm z-[101] bg-black-soft border-l border-gold/10 p-12 flex flex-col"
            >
              <button 
                className="self-end text-white/60 hover:text-gold mb-16"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>
              <div className="flex flex-col gap-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-luxury text-white hover:text-gold transition-colors tracking-[0.4em] uppercase"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="https://wa.me/96800000000"
                  className="mt-10 py-5 bg-maroon text-center text-white rounded-full font-bold tracking-[0.4em] uppercase text-[10px]"
                >
                  Order Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
