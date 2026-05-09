"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-full border-[12px] border-maroon/20 p-4"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/MANDI/FULL CHICKEN MANDI WITH RICE_1.jpeg"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-gold/30 rounded-full scale-110"
              />
            </motion.div>
          </div>

          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-gold uppercase tracking-[0.3em] text-sm font-bold"
            >
              Our Heritage
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif font-bold text-white mt-4 mb-8"
            >
              Authenticity in <br /> Every <span className="text-maroon">Grain</span>
            </motion.h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed font-sans">
              Founded with a passion for preserving the true flavors of the Arabian Peninsula, Zam Zam Mandi has become a cornerstone of authentic dining in Oman. We believe that great food takes time, patience, and a deep respect for tradition.
            </p>
            <p className="text-white/70 text-lg mb-10 leading-relaxed font-sans">
              From our custom-built underground ovens to our hand-picked spice blends from the markets of Sana'a, every detail is designed to transport you to the heart of Arabia.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-gold">15+</div>
                <div className="text-xs text-white/50 uppercase tracking-widest">Years of Tradition</div>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-gold">100%</div>
                <div className="text-xs text-white/50 uppercase tracking-widest">Natural Spices</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
