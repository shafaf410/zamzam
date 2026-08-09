"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

// Pseudo-random generator for consistent server/client hydration
const seededRandom = (seed) => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

// Generate static config for luxury drifting particles
const particles = Array.from({ length: 22 }).map((_, i) => ({
  id: i,
  x: `${seededRandom(i * 10) * 100}%`,
  yStart: `${seededRandom(i * 10 + 1) * 50 + 50}%`,
  yEnd: `${seededRandom(i * 10 + 2) * 20 + 10}%`,
  size: seededRandom(i * 10 + 3) * 2 + 1.5,
  delay: seededRandom(i * 10 + 4) * 1,
  duration: seededRandom(i * 10 + 5) * 2.5 + 2,
}));

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasLoaded = sessionStorage.getItem("zamzam_loaded");
    if (hasLoaded) {
      setLoading(false);
      setIsFirstLoad(false);
      return;
    }
    
    sessionStorage.setItem("zamzam_loaded", "true");
    // Show loading video while page loads in background, transitioning after ~2.5s or on video completion
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;
  if (!isFirstLoad && !loading) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden pointer-events-auto"
        >
          {/* Fullscreen Video Animation without Sound */}
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              autoPlay
              muted
              playsInline
              onEnded={() => setLoading(false)}
              className="w-full h-full object-contain sm:object-cover max-w-4xl mx-auto"
            >
              <source src="/videos/loading_video.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
