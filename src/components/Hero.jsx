"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Hero = ({ onMenuClick }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const images = [
    "/images/MANDI/FULL CHICKEN MANDI WITH RICE.jpeg",
    "/images/MANDI/HALF CHICKEN SHUWA WITH RICE.jpg",
  ];

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 12000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black-pure">
      {/* Immersive Background with Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.div
              animate={{ scale: [1, 1.1] }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
              className="relative w-full h-full"
            >
              <Image
                src={images[currentImage]}
                alt="Zam Zam Mandi Luxury"
                fill
                className="object-cover brightness-110 contrast-110"
                priority
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        {/* Advanced Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black-pure/60 via-transparent to-black-pure/60 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.8)_100%)] z-10" />
        
        {/* Atmospheric Vignette & Soft Blur */}
        <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.9)] z-10 pointer-events-none" />
      </div>

      {/* Floating Spice Dust Particles */}
      {isMounted && (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-gold/30 rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0
              }}
              animate={{ 
                y: [null, (Math.random() - 0.5) * 400 + "px"],
                x: [null, (Math.random() - 0.5) * 400 + "px"],
                opacity: [0, 0.4, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{ 
                duration: Math.random() * 12 + 10, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      )}

      {/* Hero Content: Centered Luxury Layout */}
      <div className="relative z-30 w-full max-w-6xl mx-auto px-5 sm:px-8 text-center pt-12 sm:pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mb-8 sm:mb-12"
        >
          {/* Main Cinematic Title */}
          <div className="flex flex-col items-center justify-center mb-8 sm:mb-16 relative">
            {/* Row 1: ZAM ZAM */}
            <div className="flex justify-center overflow-hidden">
              {"ZAM ZAM".split("").map((letter, i) => (
                <motion.span
                  key={`line1-${i}`}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 1.5,
                    delay: 0.3 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className={`text-4xl sm:text-6xl md:text-8xl lg:text-[8.5rem] font-marcellus tracking-[0.05em] sm:tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-b from-gold via-gold/90 to-gold/50 drop-shadow-2xl ${letter === " " ? "mr-1 sm:mr-3" : ""}`}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Row 2: MANDI */}
            <div className="flex justify-center overflow-hidden -mt-1 sm:mt-2">
              {"MANDI".split("").map((letter, i) => (
                <motion.span
                  key={`line2-${i}`}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 1.5,
                    delay: 1 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="text-2xl sm:text-4xl md:text-6xl lg:text-[5.5rem] font-marcellus tracking-[0.2em] sm:tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-b from-gold/80 via-gold/60 to-gold/30 drop-shadow-2xl"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1.5 }}
              className="text-gold/50 font-sans font-medium text-[8px] sm:text-xs uppercase tracking-[0.5em] sm:tracking-[0.8em] mt-4 sm:mt-8"
            >
              World's Favourite Mandi
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-white/90 text-[13px] sm:text-base md:text-lg mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed font-sans font-light tracking-[0.1em] sm:tracking-widest drop-shadow-2xl italic px-4">
            "Slow-cooked Arabian mandi and traditional shuwa <br className="hidden sm:block" /> crafted with authentic spices and rich flavors."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center px-6">
            <button
              onClick={onMenuClick}
              className="w-full sm:w-auto group relative px-10 sm:px-14 py-4 sm:py-5 bg-maroon text-white rounded-full font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[9px] sm:text-[10px] overflow-hidden transition-luxury hover:bg-maroon-light shadow-2xl active:scale-95"
            >
              <span className="relative z-10">View Menu</span>
              <div className="absolute inset-0 bg-maroon-light translate-y-full group-hover:translate-y-0 transition-luxury" />
            </button>
            
            <Link
              href="https://wa.me/96800000000"
              className="w-full sm:w-auto group px-10 sm:px-14 py-4 sm:py-5 border border-gold/30 text-gold/90 rounded-full font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[9px] sm:text-[10px] transition-luxury hover:bg-gold/5 glass-dark active:scale-95 text-center shadow-xl"
            >
              Order Now
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Cinematic Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gold/30 flex flex-col items-center gap-3 cursor-pointer z-30"
      >
        <span className="text-[9px] uppercase tracking-[0.5em]">Discover More</span>
        <ChevronDown size={24} className="animate-pulse" />
      </motion.div>
    </section>
  );
};

export default Hero;
