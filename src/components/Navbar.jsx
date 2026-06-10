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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent touch/scroll conflicts
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", type: "button" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#location" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-luxury pointer-events-auto transform-gpu",
        isScrolled 
          ? "bg-black-pure/95 backdrop-blur-2xl border-b border-gold/10 py-3 shadow-2xl" 
          : "bg-transparent py-4"
      )}
      style={{ transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Logo & Branding */}
        <div className="flex-shrink-0">
          <Link href="/" className="group flex items-center gap-2 sm:gap-4">
            <div className="relative w-9 h-9 sm:w-14 sm:h-14">
              <Image
                src="/images/logo_clean.png"
                alt="Zam Zam Mandi Logo"
                fill
                className="object-contain transition-luxury drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col -space-y-0.5">
              <span className="text-base sm:text-2xl font-luxury font-medium text-white tracking-[0.1em] sm:tracking-[0.2em] leading-none uppercase">
                Zam Zam
              </span>
              <span className="text-[4px] sm:text-[6px] font-sans font-black text-gold tracking-[0.4em] sm:tracking-[0.7em] mt-1 uppercase opacity-70">
                The Heritage Mandi
              </span>
            </div>
          </Link>
        </div>

        {/* Right: Links with Improved Hierarchy & Spacing */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              link.type === "button" ? (
                onMenuClick ? (
                  <button
                    key={link.name}
                    onClick={onMenuClick}
                    className="relative text-[10px] md:text-[11px] font-luxury font-medium tracking-[0.4em] text-white/90 hover:text-gold uppercase transition-luxury group/link cursor-pointer"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold/50 transition-all duration-500 group-hover/link:w-full" />
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    href="/?menu=open"
                    className="relative text-[10px] md:text-[11px] font-luxury font-medium tracking-[0.4em] text-white/90 hover:text-gold uppercase transition-luxury group/link"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold/50 transition-all duration-500 group-hover/link:w-full" />
                  </Link>
                )
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-[10px] md:text-[11px] font-luxury font-medium tracking-[0.4em] text-white/90 hover:text-gold uppercase transition-luxury group/link"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold/50 transition-all duration-500 group-hover/link:w-full" />
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-6 ml-6 border-l border-white/10 pl-8">
            <Link
              href="/social"
              className="text-[10px] md:text-[11px] font-luxury font-medium tracking-[0.4em] text-gold/80 hover:text-white uppercase transition-luxury"
            >
              Social
            </Link>
            <Link
              href="https://wa.me/96800000000"
              className="px-10 py-4 bg-maroon text-white rounded-full font-sans font-bold text-[9px] md:text-[10px] tracking-[0.3em] uppercase transition-luxury hover:bg-maroon-light hover:shadow-gold/40 hover:scale-105 active:scale-95 shadow-xl"
            >
              Order
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button - High Contrast */}
        <button
          className="lg:hidden p-2 text-white hover:text-gold transition-colors active:scale-90 pointer-events-auto transform-gpu"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} />
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
              className="fixed inset-0 bg-black-pure/90 backdrop-blur-sm z-[100] pointer-events-auto"
            />
            <motion.div
              key="mobile-menu-full-solid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ backgroundColor: "#000000", opacity: 1 }}
              className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-6 overflow-hidden pointer-events-auto"
            >
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-[0.05] bg-pattern-islamic pointer-events-none" />
              
              {/* Close Button - Forced High Contrast */}
              <button 
                className="absolute top-8 right-8 text-white hover:text-gold active:scale-90 transition-all p-4 z-[10000] pointer-events-auto transform-gpu"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={36} />
              </button>
              
              <div className="relative z-10 flex flex-col gap-8 sm:gap-10 items-center text-center w-full max-w-xs h-full justify-center">
                {/* Branding Top */}
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <span className="text-gold/60 font-luxury text-[12px] tracking-[0.6em] uppercase">Zam Zam Mandi</span>
                </motion.div>

                <div className="flex flex-col gap-6 sm:gap-8 w-full">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="w-full"
                    >
                      {link.type === "button" ? (
                        onMenuClick ? (
                          <button
                            onClick={() => {
                              onMenuClick();
                              setIsMobileMenuOpen(false);
                            }}
                            className="text-3xl sm:text-4xl font-marcellus text-white hover:text-gold transition-colors tracking-[0.2em] uppercase w-full cursor-pointer"
                          >
                            {link.name}
                          </button>
                        ) : (
                          <Link
                            href="/?menu=open"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-3xl sm:text-4xl font-marcellus text-white hover:text-gold transition-colors tracking-[0.2em] uppercase w-full block text-center"
                          >
                            {link.name}
                          </Link>
                        )
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-3xl sm:text-4xl font-marcellus text-white hover:text-gold transition-colors tracking-[0.2em] uppercase w-full block text-center"
                        >
                          {link.name}
                        </Link>
                      )}
                      {/* Subtle Divider */}
                      {i < navLinks.length - 1 && (
                        <div className="h-[1px] w-6 bg-gold/20 mx-auto mt-6" />
                      )}
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-10 w-full"
                >
                  <Link
                    href="https://wa.me/96800000000"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center px-12 py-5 bg-maroon text-white rounded-full font-bold tracking-[0.5em] uppercase text-[10px] shadow-[0_20px_60px_rgba(0,0,0,1)] active:scale-95 transition-all w-full border border-gold/20"
                  >
                    Order Now
                  </Link>
                </motion.div>

                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.6 }}
                   className="mt-10 flex flex-col items-center gap-4 opacity-40"
                >
                  <div className="h-10 w-[1px] bg-gold/40" />
                  <span className="text-gold font-luxury text-sm tracking-[0.8em] uppercase">Oman</span>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
