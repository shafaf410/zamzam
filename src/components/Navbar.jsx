"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = ({ onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", type: "button" },
    { name: "Experience", href: "#experience" },
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
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="group flex items-center gap-6">
            <div className="relative w-14 h-14 md:w-18 md:h-18">
              <Image
                src="/images/logo_clean.png"
                alt="Zam Zam Mandi Logo"
                fill
                className="object-contain transition-luxury drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-luxury font-medium text-white tracking-[0.3em] leading-none uppercase">
                Zam Zam
              </span>
              <span className="text-[7px] font-sans font-black text-gold tracking-[0.8em] mt-1.5 uppercase opacity-80">
                The Heritage Mandi
              </span>
            </div>
          </Link>
        </div>

        {/* Right: Links */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              link.type === "button" ? (
                <button
                  key={link.name}
                  onClick={onMenuClick}
                  className="relative text-[9px] font-luxury font-medium tracking-[0.4em] text-white/60 hover:text-gold uppercase transition-luxury group/link cursor-pointer"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold/50 transition-all duration-500 group-hover/link:w-full" />
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-[9px] font-luxury font-medium tracking-[0.4em] text-white/60 hover:text-gold uppercase transition-luxury group/link"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold/50 transition-all duration-500 group-hover/link:w-full" />
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-8 ml-8 border-l border-white/10 pl-8">
            <Link
              href="/social"
              className="text-[9px] font-luxury font-medium tracking-[0.4em] text-gold hover:text-white uppercase transition-luxury"
            >
              Social
            </Link>
            <Link
              href="https://wa.me/96800000000"
              className="px-10 py-3.5 bg-maroon text-white rounded-full font-sans font-bold text-[8px] tracking-[0.3em] uppercase transition-luxury hover:bg-maroon-light hover:shadow-gold/20 hover:shadow-2xl"
            >
              Reserve Table
            </Link>
          </div>
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
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm z-[101] bg-black-pure border-l border-gold/10 p-12 flex flex-col justify-center"
            >
              <button 
                className="absolute top-10 right-10 text-white/40 hover:text-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>
              
              <div className="flex flex-col gap-12 items-center text-center">
                {navLinks.map((link) => (
                  link.type === "button" ? (
                    <button
                      key={link.name}
                      onClick={() => {
                        onMenuClick();
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-3xl font-luxury text-white/80 hover:text-gold transition-colors tracking-[0.3em] uppercase cursor-pointer"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-luxury text-white/80 hover:text-gold transition-colors tracking-[0.3em] uppercase"
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                
                <Link
                  href="https://wa.me/96800000000"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-12 px-16 py-6 bg-maroon text-white rounded-full font-bold tracking-[0.5em] uppercase text-[10px] hover:bg-maroon-light"
                >
                  Reserve Table
                </Link>
              </div>

              {/* Mobile Branding */}
              <div className="absolute bottom-20 left-0 w-full text-center opacity-20">
                <span className="text-gold font-luxury text-xl tracking-[0.5em] uppercase">Zam Zam</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
