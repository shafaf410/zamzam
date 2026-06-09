"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const InstagramIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
  >
    <defs>
      <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#feda75" />
        <stop offset="20%" stopColor="#fa7e1e" />
        <stop offset="45%" stopColor="#d62976" />
        <stop offset="70%" stopColor="#962fbf" />
        <stop offset="100%" stopColor="#4f5bd5" />
      </linearGradient>
    </defs>
    <path
      fill="url(#ig-gradient)"
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
    />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="#1877F2"
      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
    />
  </svg>
);

export default function SocialPage() {
  return (
    <main className="bg-[#1A0006] min-h-screen text-[#F8F3EA] selection:bg-[#D4A437] selection:text-[#1A0006] overflow-x-hidden font-sans relative">
      <Navbar />

      {/* Same Background as About / Other Pages */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="/images/pattern_bg_red.jpg" 
          alt="Luxury Theme Background" 
          fill 
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0006]/90 via-[#1A0006]/40 to-[#1A0006]/90" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 pt-40 md:pt-48 pb-32 flex flex-col items-center justify-center min-h-[80vh]">
        {/* Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-[#F8F3EA]/60 text-xs font-light tracking-[0.2em] uppercase mb-10"
        >
          <Link href="/" className="hover:text-[#D4A437] transition-colors">Home</Link>
          <span className="opacity-40">/</span>
          <span className="text-[#D4A437]">Connect</span>
        </motion.div>

        {/* GooeyText Morphing Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <GooeyText
            texts={["Connect To Us", "Follow Us", "Stay Close"]}
            morphTime={1.5}
            cooldownTime={0.5}
            className="h-[80px] md:h-[120px] w-full"
            textClassName="text-5xl md:text-8xl font-marcellus text-white tracking-wide"
          />
        </motion.div>

        {/* OG Icon Buttons */}
        <div className="flex items-center justify-center gap-10 sm:gap-16">
          {/* Instagram Button */}
          <motion.a
            href="https://www.instagram.com/zamzammandi/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_rgba(214,41,118,0.15)] hover:border-white/25 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
          >
            <InstagramIcon className="w-12 h-12 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />
          </motion.a>

          {/* Facebook Button */}
          <motion.a
            href="https://www.facebook.com/zamzammandii/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_rgba(24,119,242,0.15)] hover:border-white/25 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
          >
            <FacebookIcon className="w-12 h-12 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />
          </motion.a>
        </div>

        {/* Back Link */}
        <div className="mt-32 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-4 text-white/40 hover:text-[#D4A437] transition-colors text-[10px] font-bold tracking-[0.4em] uppercase group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
