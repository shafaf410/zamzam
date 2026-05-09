"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#location" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-out",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-black/5 py-4 shadow-sm" 
          : "bg-transparent py-8"
      )}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Area */}
        <Link href="/" className="group flex items-center gap-4">
          <div className="relative w-12 h-12">
            <Image
              src="/images/logo_clean.png"
              alt="Zam Zam Logo"
              fill
              className="object-contain grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold text-brand-primary tracking-widest leading-none">
              ZAM ZAM
            </span>
            <span className="text-[8px] font-sans font-black text-brand-accent tracking-[0.5em] mt-1 uppercase">
              The Heritage
            </span>
          </div>
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="link-editorial text-[10px] font-sans font-bold tracking-[0.4em] text-brand-primary/60 hover:text-brand-primary uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-8">
          <Link
            href="https://wa.me/96800000000"
            className="hidden sm:block text-[10px] font-sans font-black tracking-[0.4em] uppercase text-brand-primary border-b-2 border-brand-accent pb-1 hover:border-brand-primary transition-all duration-500"
          >
            Reservations
          </Link>
          
          <button
            className="md:hidden text-brand-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-brand-light flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-24">
               <span className="text-xl font-serif font-bold tracking-widest">ZAM ZAM</span>
               <button onClick={() => setIsMobileMenuOpen(false)}>
                 <X size={32} strokeWidth={1} />
               </button>
            </div>
            <div className="flex flex-col gap-12 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif text-brand-primary hover:text-brand-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://wa.me/96800000000"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-12 text-lg font-sans font-bold tracking-widest border-b-2 border-brand-accent self-center"
              >
                BOOK A TABLE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
