"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", type: "button" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full transition-luxury pointer-events-auto",
        isMobileMenuOpen ? "z-[9999]" : "z-50",
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

        {/* Right: Desktop Links */}
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

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white hover:text-gold transition-colors active:scale-90 pointer-events-auto"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-black-pure flex flex-col items-center justify-between p-8 overflow-y-auto pointer-events-auto">
          {/* Decorative Pattern Background */}
          <div className="absolute inset-0 opacity-[0.05] bg-pattern-islamic pointer-events-none" />

          {/* Close Trigger */}
          <button
            className="absolute top-8 right-8 text-white hover:text-gold active:scale-90 p-4 z-[10000] cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={36} />
          </button>

          {/* Centered Navigation */}
          <div className="relative z-10 flex flex-col items-center text-center w-full max-w-xs my-auto py-12 gap-8">
            <div className="mb-4">
              <span className="text-gold/60 font-luxury text-[12px] tracking-[0.6em] uppercase">
                Zam Zam Mandi
              </span>
            </div>

            <div className="flex flex-col gap-6 w-full">
              {navLinks.map((link, i) => (
                <div key={link.name} className="w-full">
                  {link.type === "button" ? (
                    onMenuClick ? (
                      <button
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          onMenuClick();
                        }}
                        className="text-2xl sm:text-3xl font-marcellus text-white hover:text-gold transition-colors tracking-[0.2em] uppercase w-full cursor-pointer"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        href="/?menu=open"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl sm:text-3xl font-marcellus text-white hover:text-gold transition-colors tracking-[0.2em] uppercase w-full block text-center"
                      >
                        {link.name}
                      </Link>
                    )
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl sm:text-3xl font-marcellus text-white hover:text-gold transition-colors tracking-[0.2em] uppercase w-full block text-center"
                    >
                      {link.name}
                    </Link>
                  )}
                  {i < navLinks.length - 1 && (
                    <div className="h-[1px] w-6 bg-gold/20 mx-auto mt-4" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 w-full">
              <Link
                href="https://wa.me/96800000000"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center px-12 py-4 bg-maroon text-white rounded-full font-bold tracking-[0.5em] uppercase text-[10px] shadow-[0_20px_60px_rgba(0,0,0,0.8)] active:scale-95 transition-all w-full border border-gold/20"
              >
                Order Now
              </Link>
            </div>

            <div className="mt-6 flex flex-col items-center gap-3 opacity-40">
              <div className="h-8 w-[1px] bg-gold/40" />
              <span className="text-gold font-luxury text-xs tracking-[0.8em] uppercase">
                Oman
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
