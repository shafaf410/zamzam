"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Hero = ({ onMenuClick }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/MANDI/FULL CHICKEN MANDI WITH RICE.jpeg",
    "/images/MANDI/HALF CHICKEN SHUWA WITH RICE.jpg",
  ];

  useEffect(() => {
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

      {/* Hero Content: Centered Luxury Layout */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 md:px-8 text-center pt-20 md:pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mb-20 md:mb-24"
        >
          {/* Main Cinematic Title: Balanced Cinzel Font */}
          <div className="flex flex-col items-center justify-center mb-10 md:mb-12 relative">
            <div className="flex flex-wrap justify-center overflow-hidden pb-4">
              {"ZAM ZAM MANDI".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, filter: "blur(150px)", scale: 1.2 }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                  transition={{
                    duration: 2.5,
                    delay: 0.5 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className={`text-4xl md:text-7xl lg:text-[9rem] font-cinzel font-black tracking-[0.1em] md:tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-b from-gold via-gold/80 to-gold/40 drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] ${letter === " " ? "mr-6 md:mr-12" : ""}`}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Ambient Glow behind title */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.4, 0.2] }}
              transition={{ duration: 4, delay: 1 }}
              className="absolute inset-0 bg-gold/10 blur-[100px] rounded-full -z-10"
            />

            {/* Tagline: World's Favourite Mandi */}
            <motion.div
              initial={{ opacity: 0, y: 20, letterSpacing: "0.4em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.8em" }}
              transition={{ delay: 2, duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-gold/60 font-sans font-medium text-[10px] md:text-xs uppercase tracking-[0.8em] text-glow-gold mt-6"
            >
              World's Favourite Mandi
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-white/90 text-base md:text-lg mb-14 max-w-2xl mx-auto leading-relaxed font-sans font-light tracking-widest drop-shadow-2xl italic">
            "Slow-cooked Arabian mandi and traditional shuwa <br className="hidden md:block" /> crafted with authentic spices and rich flavors."
          </p>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-center justify-center">
            <button
              onClick={onMenuClick}
              className="w-full sm:w-auto group relative px-12 py-5 bg-maroon text-white rounded-full font-bold tracking-[0.3em] uppercase text-[9px] overflow-hidden transition-luxury hover:bg-maroon-light hover:shadow-[0_0_30px_rgba(90,15,28,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span className="relative z-10">View Menu</span>
              <div className="absolute inset-0 bg-maroon-light translate-y-full group-hover:translate-y-0 transition-luxury" />
            </button>
            
            <Link
              href="https://wa.me/96800000000"
              className="w-full sm:w-auto group px-12 py-5 border border-gold/30 text-gold/90 rounded-full font-bold tracking-[0.3em] uppercase text-[9px] transition-luxury hover:bg-gold/5 hover:border-gold glass-dark hover:scale-105 active:scale-95 text-center"
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
