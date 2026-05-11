"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="bg-transparent py-40 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-maroon/20 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-[1600px] mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          {/* Visual Storytelling (Left) */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/5"
            >
              <Image
                src="/images/MANDI/HALF CHICKEN SHUWA WITH RICE.jpg"
                alt="Traditional Shuwa Cooking"
                fill
                className="object-cover brightness-75 contrast-110"
              />
              {/* Smoke/Fire Atmosphere Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/40 via-transparent to-transparent mix-blend-overlay" />
              <div className="absolute inset-0 bg-black-pure/20" />
            </motion.div>
          </div>

          {/* Text Storytelling (Right) */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-gold font-sans font-bold text-[10px] tracking-[0.5em] uppercase block"
              >
                The Art of Tradition
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-luxury text-white leading-tight">
                Crafted with <br />
                <span className="text-gold italic">Ancient Secrets</span>
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Our Mandi and Shuwa are not just meals; they are a ritual. For generations, we have honored the traditional methods of Omani craftsmanship, using fire, clay, and time.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="w-10 h-[1px] bg-gold" />
                  <h4 className="text-white font-bold tracking-[0.2em] text-[10px] uppercase">Fire-Pit Heritage</h4>
                  <p className="text-white/50 text-xs leading-relaxed">
                    Underground pit roasting that locks in flavor and moisture through 12-24 hours of slow cooking.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-[1px] bg-gold" />
                  <h4 className="text-white font-bold tracking-[0.2em] text-[10px] uppercase">Spice Mastery</h4>
                  <p className="text-white/50 text-xs leading-relaxed">
                    Hand-ground spices sourced from the traditional markets of Oman, blended with ancestral precision.
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="group flex items-center gap-6 text-gold text-xs font-bold tracking-[0.4em] uppercase"
            >
              The Story Behind Zam Zam
              <div className="w-16 h-[1px] bg-gold group-hover:w-24 transition-all duration-500" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
