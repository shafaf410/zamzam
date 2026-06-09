"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories } from "@/data/menuData";

const tabLinks = [
  { id: "all", title: "All", href: "/#menu" },
  ...menuCategories.map(c => ({ id: c.id, title: c.title, href: `/menu/${c.id}` }))
];

const MenuSection = () => {
  // activeTab is forced to "All" since this component only lives on the home page.
  // Clicking other tabs navigates away.
  const activeTab = "All";

  const filteredCategories = menuCategories;

  return (
    <section id="menu" className="relative py-20 px-4 md:px-12 lg:px-24 bg-maroon-dark overflow-hidden min-h-screen font-sans">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-pattern-islamic" />

      {/* Floating Light Elements */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0], 
          y: [0, 20, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-64 h-64 bg-gold rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold mb-3 block"
          >
            Culinary Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-marcellus text-beige mb-6 leading-tight"
          >
            The ZamZam <span className="italic font-luxury text-gold">Experience</span>
          </motion.h2>
        </div>

        {/* Sticky Category Navigation */}
        <div className="sticky top-20 z-40 bg-maroon-dark/95 backdrop-blur-md py-3 sm:py-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-6 sm:rounded-full border-y sm:border border-white/5 shadow-2xl">
          <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
            {tabLinks.map((tab) => (
              <li key={tab.id} className="relative">
                <Link
                  href={tab.href}
                  className={`block text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border transition-all duration-300 ${
                    activeTab === tab.title 
                      ? "text-gold border-gold/40 bg-gold/10 shadow-[0_2px_10px_rgba(212,164,55,0.15)]" 
                      : "text-beige-muted/60 border-transparent hover:text-beige hover:border-white/10"
                  }`}
                >
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Uniform Symmetric Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, index) => (
              <Link key={category.id} href={`/menu/${category.id}`} className="col-span-1">
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-black-soft shadow-2xl cursor-pointer w-full h-full aspect-[4/5]"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Dark Luxury Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black-pure/95 via-black-pure/50 to-transparent group-hover:from-black-pure/90 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/60 via-transparent to-transparent opacity-80" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                    <div className="flex flex-col h-full justify-between">
                      {/* Top Label */}
                      <div className="self-start px-3 py-1.5 rounded-full bg-black-pure/60 backdrop-blur-md border border-gold/30">
                        <span className="text-gold font-sans font-bold text-[8px] sm:text-[10px] tracking-[0.3em] uppercase block">
                          {category.label}
                        </span>
                      </div>

                      {/* Bottom Info */}
                      <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                        <span className="text-gold/40 font-luxury text-2xl sm:text-3xl block mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute -top-10">
                          {category.subtitle}
                        </span>
                        <h3 className="text-3xl sm:text-4xl font-marcellus text-beige tracking-wider drop-shadow-lg mb-2">
                          {category.title}
                        </h3>
                        <div className="h-[1px] w-12 bg-gold/50 mb-4 transition-all duration-500 group-hover:w-full group-hover:bg-gold" />
                        
                        <div className="flex items-center gap-2 text-gold text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                          Explore Menu
                          <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default MenuSection;
