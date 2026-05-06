"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Facebook, ArrowLeft, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SocialPage() {
  return (
    <main className="bg-black-pure min-h-screen relative overflow-hidden">
      <Navbar />
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-maroon/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-10 pt-48 pb-32 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-4 rounded-full bg-gold/10 border border-gold/20 mb-8"
          >
            <Share2 className="text-gold w-8 h-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-luxury text-white mb-6"
          >
            Connect To <span className="text-gold italic">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto"
          >
            Follow our journey and stay updated with our latest culinary masterpieces, events, and special offers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Instagram Card */}
          <motion.a
            href="https://instagram.com"
            target="_blank"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="group relative block bg-black-soft border border-white/5 rounded-[2.5rem] p-12 overflow-hidden hover:border-gold/30 transition-luxury shadow-2xl"
          >
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Instagram className="text-white w-10 h-10" />
              </div>
              <h2 className="text-3xl font-luxury text-white mb-4">Instagram</h2>
              <p className="text-white/40 mb-8 leading-relaxed font-light">
                Explore behind-the-scenes moments, our signature dishes gallery, and exclusive stories from our kitchen.
              </p>
              <span className="inline-flex items-center gap-3 text-gold text-[10px] font-bold tracking-[0.3em] uppercase group-hover:gap-6 transition-all">
                Follow Us Now <div className="w-8 h-[1px] bg-gold" />
              </span>
            </div>
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[60px] group-hover:bg-gold/10 transition-colors" />
          </motion.a>

          {/* Facebook Card */}
          <motion.a
            href="https://facebook.com"
            target="_blank"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="group relative block bg-black-soft border border-white/5 rounded-[2.5rem] p-12 overflow-hidden hover:border-gold/30 transition-luxury shadow-2xl"
          >
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-[#1877F2] flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Facebook className="text-white w-10 h-10" />
              </div>
              <h2 className="text-3xl font-luxury text-white mb-4">Facebook</h2>
              <p className="text-white/40 mb-8 leading-relaxed font-light">
                Join our community, check out guest reviews, and stay informed about our latest news and upcoming events.
              </p>
              <span className="inline-flex items-center gap-3 text-gold text-[10px] font-bold tracking-[0.3em] uppercase group-hover:gap-6 transition-all">
                Visit Our Page <div className="w-8 h-[1px] bg-gold" />
              </span>
            </div>
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[60px] group-hover:bg-gold/10 transition-colors" />
          </motion.a>
        </div>

        <div className="mt-32 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-4 text-white/40 hover:text-gold transition-colors text-[10px] font-bold tracking-[0.4em] uppercase"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
