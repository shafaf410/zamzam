"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const menuImages = [
  "FULL CHICKEN MANDI WITH RICE_1.jpeg",
  "GRILLS - CHICKEN KEBAB.jpeg",
  "GRILLS - CHICKEN TIKKA.jpeg",
  "GRILLS - LAMB CHOPS.jpeg",
  "GRILLS - MIXED GRILL LARGE.png",
  "GRILLS - MIXED GRILL MEDIUM.png",
  "GRILLS - MIXED GRILL SMALL.png",
  "HALF CHICKEN MADFOON WITH RICE.jpg",
  "HALF CHICKEN SHUWA WITH RICE.jpg",
  "HALF GRILLED CHICKEN WITH RICE.jpeg",
  "LEMON MINT JUICE.jpeg",
  "MANGO JUICE.jpeg",
  "POMEGRANATE JUICE.jpeg"
];

const formatTitle = (filename) => {
  // Remove extension
  const baseName = filename.split('.').slice(0, -1).join('.');
  // Replace underscores and dashes with spaces
  return baseName.replace(/[_-]/g, ' ').toUpperCase();
};

const MenuSection = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#FDFBF7] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="arabicPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="#C5A059" strokeWidth="1"/>
            <circle cx="50" cy="50" r="10" fill="none" stroke="#C5A059" strokeWidth="1"/>
            <path d="M0 0 L20 20 M80 80 L100 100 M100 0 L80 20 M20 80 L0 100" stroke="#C5A059" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#arabicPattern)" />
        </svg>
      </div>

      {/* Floating Light Elements */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, 30, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C5A059] rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 50, 0],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#E5D5B5] rounded-full blur-[150px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
          >
            Experience Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-luxury text-[#4A3728] mb-6"
          >
            Our Signature <span className="italic font-serif">Menu</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="h-[1px] bg-[#C5A059] mx-auto"
          />
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {menuImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl transition-all duration-700 group-hover:shadow-[0_20px_50px_rgba(197,160,89,0.2)]">
                {/* Image Container */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={`/images/food/${image}`}
                    alt={formatTitle(image)}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                </div>

                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-[#C5A059]/5" />
                  <div className="absolute inset-0 border-[1px] border-[#C5A059]/20 rounded-[2rem]" />
                </div>
              </div>

              {/* Title */}
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-xl md:text-2xl font-luxury text-[#4A3728] tracking-wide transition-colors duration-300 group-hover:text-[#C5A059]">
                  {formatTitle(image)}
                </h3>
                <div className="mt-2 w-0 h-[1px] bg-[#C5A059]/40 mx-auto transition-all duration-500 group-hover:w-12" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .font-luxury {
          font-family: var(--font-cormorant), serif;
        }
      `}</style>
    </section>
  );
};

export default MenuSection;
