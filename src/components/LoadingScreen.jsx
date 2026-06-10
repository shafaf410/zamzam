"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

// Generate static config for luxury drifting particles
const particles = Array.from({ length: 22 }).map((_, i) => ({
  id: i,
  x: `${Math.random() * 100}%`,
  yStart: `${Math.random() * 50 + 50}%`,
  yEnd: `${Math.random() * 20 + 10}%`,
  size: Math.random() * 2 + 1.5,
  delay: Math.random() * 1,
  duration: Math.random() * 2.5 + 2,
}));

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("zamzam_loaded");
    if (hasLoaded) {
      setLoading(false);
      setIsFirstLoad(false);
      return;
    }
    
    sessionStorage.setItem("zamzam_loaded", "true");
    // Duration set to 2.4 seconds for a quick yet cinematic build
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  if (!isFirstLoad && !loading) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* 1. Cinematic Ambient Background (Blurs & Warm Lantern Bokeh) */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.15, scale: 1.0 }}
            transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 z-0 select-none pointer-events-none"
          >
            <Image
              src="/images/pattern_bg_red.jpg"
              alt="Cinematic Background"
              fill
              className="object-cover blur-md scale-105"
              priority
            />
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black" />
          </motion.div>

          {/* 2. Subtle Maroon Base Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ delay: 0.4, duration: 1.0 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-maroon)_0%,_transparent_65%)] z-0 mix-blend-screen pointer-events-none"
          />

          {/* 3. Islamic Geometric Motif Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ delay: 0.2, duration: 1.2 }}
            className="absolute inset-0 bg-pattern-islamic z-0 pointer-events-none"
          />

          {/* 4. Luxury Golden Light Sweep */}
          <motion.div
            initial={{ left: "-60%" }}
            animate={{ left: "140%" }}
            transition={{ delay: 0.3, duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-gold/15 to-transparent skew-x-12 z-10 pointer-events-none"
          />

          {/* 5. Floating Luxury Golden Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: p.yStart, x: p.x }}
                animate={{ opacity: [0, 0.7, 0], y: p.yEnd }}
                transition={{
                  delay: p.delay,
                  duration: p.duration,
                  ease: "easeInOut",
                  repeat: 0,
                }}
                className="absolute rounded-full bg-gradient-to-b from-gold to-gold-light"
                style={{
                  width: p.size,
                  height: p.size,
                  boxShadow: "0 0 8px rgba(212, 164, 55, 0.4)",
                }}
              />
            ))}
          </div>

          {/* 6. Central Brand Presentation */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            {/* Clean Logo Image Reveal */}
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "brightness(0.7) blur(2px)" }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  filter: "brightness(1) blur(0px)",
                  boxShadow: "0 0 30px rgba(212, 164, 55, 0.15)"
                }}
                transition={{ 
                  delay: 0.7, 
                  duration: 1.0, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="w-full h-full relative"
              >
                <Image
                  src="/images/logo_clean.png"
                  alt="Zam Zam Mandi Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* Restaurant Title text with Gold Glow Sweep */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
              className="text-2xl sm:text-4xl font-marcellus tracking-[0.2em] text-white text-center font-medium drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            >
              ZAM ZAM <span className="gold-gradient-text">MANDI</span>
            </motion.h1>

            {/* Premium Subtitle tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
              className="text-gold text-[9px] sm:text-xs uppercase tracking-[0.6em] mt-3 font-luxury font-bold text-center"
            >
              The heritage mandi
            </motion.p>
          </div>

          {/* Subtle Progress Bar Indication */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-36 h-[1px] bg-white/5 overflow-hidden rounded-full">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ delay: 0.4, duration: 1.8, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
