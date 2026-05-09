"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const categories = ["All", "Mandi", "Grills", "Juices", "Desserts"];

const menuItems = [
  {
    id: 1,
    category: "Mandi",
    title: "Full Chicken Mandi",
    price: "4.500",
    description: "Premium basmati rice cooked with authentic spices, served with a full fire-roasted chicken.",
    image: "/images/MANDI/FULL CHICKEN MANDI WITH RICE.jpeg",
  },
  {
    id: 2,
    category: "Mandi",
    title: "Half Chicken Shuwa",
    price: "3.500",
    description: "Traditional Omani style slow-cooked chicken in an underground oven, served with rice.",
    image: "/images/MANDI/HALF CHICKEN SHUWA WITH RICE.jpg",
  },
  {
    id: 3,
    category: "Grills",
    title: "Mixed Grill Platter",
    price: "5.500",
    description: "A deluxe selection of lamb chops, chicken kebabs, and shish tawook grilled over charcoal.",
    image: "/images/GRILLS/GRILLS - MIXED GRILL LARGE.png",
  },
  {
    id: 4,
    category: "Grills",
    title: "Lamb Chops",
    price: "6.000",
    description: "Tender Australian lamb chops marinated in our signature herb blend and charcoal grilled.",
    image: "/images/GRILLS/GRILLS - LAMB CHOPS.jpeg",
  },
  {
    id: 5,
    category: "Juices",
    title: "Pomegranate Juice",
    price: "1.500",
    description: "100% fresh pomegranate seeds pressed to order for a refreshing, antioxidant-rich experience.",
    image: "/images/JUICES/POMEGRANATE JUICE.jpeg",
  },
  {
    id: 6,
    category: "Juices",
    title: "Lemon Mint",
    price: "1.200",
    description: "A classic middle-eastern refresher with fresh lemon juice and garden-picked mint.",
    image: "/images/JUICES/LEMON MINT JUICE.jpeg",
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <main className="relative bg-black-pure min-h-screen">
      <LoadingScreen />
      <Navbar />
      
      {/* Background Theme */}
      <div className="bg-site-theme min-h-screen pt-40 pb-24">
        <div className="max-w-[1600px] mx-auto px-10">
          <div className="flex flex-col items-center text-center mb-24 space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold uppercase tracking-[0.6em] text-[10px] font-black"
            >
              The Culinary Legacy
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-luxury text-white"
            >
              Our Full <span className="text-gold italic">Menu</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-white/50 font-light italic"
            >
              "Every dish is a testament to centuries of Arabian tradition, slow-cooked to perfection with our secret heritage spice blends."
            </motion.p>
          </div>

          {/* Luxury Filter Tabs */}
          <div className="flex justify-center flex-wrap gap-4 md:gap-10 mb-20">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-10 py-4 text-[10px] uppercase tracking-[0.4em] font-bold transition-luxury rounded-full border ${
                  activeCategory === cat 
                    ? "text-gold border-gold/40 bg-gold/5 shadow-[0_0_30px_rgba(212,175,55,0.1)]" 
                    : "text-white/30 border-white/5 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Menu Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative bg-black-pure/40 backdrop-blur-md border border-white/5 rounded-[40px] overflow-hidden hover:border-gold/30 transition-luxury"
                >
                  <div className="relative h-[400px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-luxury duration-[2s] group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-pure via-black-pure/20 to-transparent opacity-80" />
                    
                    {/* Price Tag */}
                    <div className="absolute top-8 right-8 w-20 h-20 rounded-full glass-dark flex flex-col items-center justify-center border border-gold/20 shadow-2xl group-hover:scale-110 transition-luxury">
                      <span className="text-[8px] text-gold/60 uppercase font-black tracking-tighter">OMR</span>
                      <span className="text-lg text-white font-bold">{item.price}</span>
                    </div>
                  </div>

                  <div className="p-12 space-y-6">
                    <div className="flex flex-col gap-2">
                      <span className="text-gold/60 text-[8px] uppercase tracking-[0.4em] font-black">{item.category}</span>
                      <h3 className="text-3xl font-luxury text-white group-hover:text-gold transition-colors">{item.title}</h3>
                    </div>
                    <p className="text-white/40 text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                      <button className="text-[9px] font-black uppercase tracking-[0.3em] text-gold hover:text-white transition-colors">
                        Add to Order +
                      </button>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-gold/20" />
                        <div className="w-2 h-2 rounded-full bg-gold/40" />
                        <div className="w-2 h-2 rounded-full bg-gold/60" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
