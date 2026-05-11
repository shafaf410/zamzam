"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const HeroV3 = ({ onMenuClick }) => {
  return (
    <section id="home" className="relative h-screen w-full bg-brand-light overflow-hidden flex items-center justify-center px-6 md:px-12">
      <div className="container-editorial relative h-full w-full flex flex-col md:flex-row items-center justify-between py-24 md:py-32">
        
        {/* Text Area (Asymmetrical) */}
        <div className="w-full md:w-1/2 z-10 flex flex-col items-start space-y-10 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-sans font-black tracking-[0.8em] text-brand-accent uppercase block mb-6">
              Establishment 1998
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] text-brand-primary mb-8 text-balance">
              The Art <br />
              <span className="italic text-brand-accent">of Feast</span>
            </h1>
            <p className="text-brand-primary/60 max-w-md text-lg font-light leading-relaxed mb-12">
              Experience the authentic heritage of Arabian cuisine. A sensory journey through time, spice, and tradition.
            </p>
            
            <div className="flex items-center gap-10">
              <button
                onClick={onMenuClick}
                className="group relative overflow-hidden px-12 py-5 bg-brand-primary text-white rounded-full transition-all duration-700 cursor-pointer"
              >
                <span className="relative z-10 text-[10px] font-bold tracking-[0.3em] uppercase">The Collection</span>
                <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              </button>
              
              <Link
                href="#about"
                className="text-[10px] font-bold tracking-[0.3em] text-brand-primary uppercase border-b border-brand-primary/20 pb-1 hover:border-brand-accent transition-all"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Hero Image (Large, Editorial) */}
        <div className="w-full md:w-3/5 h-[50vh] md:h-[80vh] relative z-0 order-1 md:order-2 md:-mr-24 lg:-mr-32">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative rounded-2xl md:rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)]"
          >
            <Image
              src="/images/MANDI/FULL CHICKEN MANDI WITH RICE.jpeg"
              alt="Signature Mandi Platter"
              fill
              className="object-cover brightness-95"
              priority
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent" />
          </motion.div>
          
          {/* Decorative Float Element */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-48 h-48 bg-white p-4 rounded-3xl shadow-2xl hidden lg:block"
          >
             <div className="w-full h-full relative rounded-2xl overflow-hidden border border-brand-muted">
                <Image
                  src="/images/MANDI/HALF CHICKEN SHUWA WITH RICE.jpg"
                  alt="Traditional Shuwa"
                  fill
                  className="object-cover"
                />
             </div>
          </motion.div>
        </div>
      </div>

      {/* Side Scroll Indicator */}
      <div className="absolute right-12 bottom-12 hidden lg:flex flex-col items-center gap-12">
        <span className="text-[10px] font-bold tracking-[0.5em] text-brand-primary/30 rotate-90 origin-right whitespace-nowrap">
          SCROLL TO DISCOVER
        </span>
        <div className="w-[1px] h-24 bg-brand-muted relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-brand-accent"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroV3;
