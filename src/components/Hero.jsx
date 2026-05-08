"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Flame } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/MANDI/FULL CHICKEN MANDI WITH RICE.jpeg",
    "/images/MANDI/HALF CHICKEN SHUWA WITH RICE.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black-pure">
      {/* Dynamic Animated Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-30 bg-gradient-premium mix-blend-overlay" />
      {/* Immersive Background with Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black-pure/40 via-transparent to-black-pure/40 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10" />
        
        {/* Atmospheric Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] z-10 pointer-events-none" />
        
        {/* Decorative SVG Shapes */}
        <div className="absolute inset-0 z-10 opacity-10 pointer-events-none">
          <svg className="absolute top-20 left-20 w-32 h-32 text-gold animate-pulse" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>
          <svg className="absolute bottom-20 right-20 w-48 h-48 text-amber animate-float" viewBox="0 0 100 100">
            <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
          </svg>
        </div>
      </div>

      {/* Floating Spice Dust Particles (Enhanced) */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              background: i % 2 === 0 ? "var(--color-gold)" : "var(--color-orange-premium)",
              boxShadow: "0 0 10px var(--color-gold)",
            }}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0
            }}
            animate={{ 
              y: [null, (Math.random() - 0.5) * 600 + "px"],
              x: [null, (Math.random() - 0.5) * 600 + "px"],
              opacity: [0, 0.6, 0],
              scale: [0, 2, 0]
            }}
            transition={{ 
              duration: Math.random() * 15 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>


      {/* Hero Content: Centered Luxury Layout with Glowing Border */}
      <div className="relative z-30 max-w-6xl mx-auto px-8 text-center pt-20">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.6em" }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="block text-gold font-sans font-bold text-[10px] md:text-xs uppercase mb-14 tracking-[0.6em] text-glow-gold"
          >
            AUTHENTIC ARABIAN DINING
          </motion.span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-luxury font-medium text-white leading-[1.1] mb-8 tracking-tight drop-shadow-2xl">
            Experience the Taste of <br />
            <span className="text-gold italic text-5xl md:text-7xl lg:text-8xl drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] mt-4 block">Zam Zam Mandi</span>
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-sans font-light tracking-wide drop-shadow-lg italic opacity-90">
            "Slow-cooked Arabian mandi and traditional shuwa <br className="hidden md:block" /> crafted with authentic spices and rich flavors."
          </p>

          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
            <Link
              href="#menu"
              className="group relative px-14 py-6 bg-maroon text-white rounded-full font-bold tracking-[0.4em] uppercase text-[10px] overflow-hidden transition-luxury hover:shadow-[0_0_50px_rgba(90,15,28,0.5)] hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">View Menu</span>
              <div className="absolute inset-0 bg-maroon-light translate-y-full group-hover:translate-y-0 transition-luxury" />
            </Link>
            
            <Link
              href="https://wa.me/96800000000"
              className="group px-14 py-6 border border-gold/40 text-gold rounded-full font-bold tracking-[0.4em] uppercase text-[10px] transition-luxury hover:bg-gold/5 hover:border-gold glass-dark hover:-translate-y-1"
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
