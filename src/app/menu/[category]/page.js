"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { menuData } from "@/data/menuData";

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params?.category;
  const category = categoryId ? menuData[categoryId] : null;

  if (!category) {
    return (
      <div className="min-h-screen bg-maroon-dark flex flex-col items-center justify-center text-beige font-sans">
        <h1 className="text-4xl font-marcellus mb-6">Category Not Found</h1>
        <Link href="/" className="px-8 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-black-pure transition-colors">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen font-sans selection:bg-[#C5A059] selection:text-[#1A0006] bg-black-pure">
      
      {/* Fixed Parallax Hero Background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={category.coverImage}
            alt={category.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-black-pure/20 transition-opacity duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-black-pure/90 via-black-pure/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black-pure/80 via-transparent to-transparent opacity-80" />
      </div>

      {/* Back Navigation */}
      <div className="fixed top-8 left-6 sm:top-12 sm:left-12 z-50">
          <Link href="/?menu=open" className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-xl group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Back to Menu</span>
          </Link>
        </div>

      {/* Spacer for Hero Title (Scrolls naturally) */}
      <section className="relative w-full h-screen flex items-center justify-center z-10 pointer-events-none">
        <div className="relative text-center px-6 mt-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="text-white italic font-luxury text-3xl sm:text-5xl tracking-[0.3em] drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">{category.subtitle}</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl sm:text-8xl md:text-9xl font-marcellus text-white tracking-widest drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          >
            {category.title}
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
            className="h-[2px] w-32 bg-[#C5A059] mx-auto mt-10 shadow-[0_0_20px_rgba(197,160,89,0.8)]"
          />
        </div>
      </section>

      {/* Content Section (Slides over the fixed hero with a glass effect) */}
      <section className="relative z-20 w-full bg-[#1A0006]/85 backdrop-blur-xl min-h-screen pt-24 pb-32 rounded-t-[3rem] border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Premium 3-Column Glassmorphism Grid */}
        <div className="relative z-10 px-6 sm:px-12 md:px-24 max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-14">
          {category.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              {/* Luxury Full-Bleed Dark Cinematic Card */}
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-black-soft shadow-2xl cursor-pointer w-full aspect-[4/5] hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out transform hover:-translate-y-2">
                
                {/* Full-Bleed Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                  />
                </div>

                {/* Dark Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-pure/95 via-black-pure/40 to-transparent group-hover:from-black-pure/90 transition-all duration-500 z-10" />

                {/* Card Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-20">
                  <div className="flex flex-col items-center justify-end text-center">
                    
                    {/* Premium High-Contrast Arabic Badge */}
                    <div className="bg-[#FDFBF7]/90 backdrop-blur-md px-5 py-1.5 rounded-full shadow-lg border border-gold/30 mb-4 transform transition-transform duration-500 group-hover:scale-105">
                      <span className="text-[#1E3A8A] font-bold text-lg sm:text-xl font-luxury block">
                        {item.arabic}
                      </span>
                    </div>

                    {/* Elegant English Title */}
                    <h3 className="text-xl sm:text-2xl font-marcellus text-beige tracking-wider drop-shadow-lg mb-3 group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    
                    {/* Gold Accent Divider */}
                    <div className="w-8 h-[1px] bg-gold/50 mx-auto transition-all duration-500 group-hover:w-20 group-hover:bg-gold mb-3" />

                    {/* Portions/Sizes Badges */}
                    {item.sizes && (
                      <div className="flex flex-wrap justify-center gap-1.5 mt-2">
                        {item.sizes.map((size) => (
                          <span 
                            key={size.name} 
                            className="text-[9px] sm:text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold"
                          >
                            {size.name} <span className="opacity-60 text-[8px]">({size.arabic})</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
