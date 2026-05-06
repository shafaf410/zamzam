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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        "fixed top-0 left-0 w-full z-50 transition-luxury",
        isScrolled 
          ? "bg-black-pure/95 backdrop-blur-2xl border-b border-gold/10 py-3 shadow-2xl" 
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-[1600px] mx-auto px-10 md:px-20 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="group flex items-center gap-4">
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <Image
                src="/LOGO.jpeg"
                alt="Zam Zam Mandi Logo"
                fill
                className="object-contain rounded-full border-2 border-gold/40 group-hover:border-gold transition-luxury bg-maroon p-1 shadow-[0_0_15px_rgba(90,15,28,0.4)]"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-luxury font-bold text-white tracking-[0.2em] leading-none">
                ZAM ZAM
              </span>
              <span className="text-[8px] font-sans font-bold text-gold tracking-[0.6em] mt-1">
                MANDI
              </span>
            </div>
          </Link>
        </div>

        {/* Right: Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold tracking-[0.3em] text-white/70 hover:text-gold uppercase transition-luxury"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/social"
            className="text-[10px] font-bold tracking-[0.3em] text-gold hover:text-white uppercase transition-luxury border-l border-gold/20 pl-10"
          >
            Social
          </Link>
          <Link
            href="https://wa.me/96800000000"
            className="px-8 py-3 bg-maroon text-white rounded-full font-bold text-[8px] tracking-[0.2em] uppercase transition-luxury hover:bg-maroon-light ml-4"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white/80 hover:text-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
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
                    className="text-2xl font-luxury text-white hover:text-gold transition-colors tracking-[0.2em] uppercase"
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
