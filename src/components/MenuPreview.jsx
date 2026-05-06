"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Mandi", "Grills", "Juices"];

const menuItems = [
  {
    id: 1,
    category: "Mandi",
    title: "Full Chicken Mandi",
    price: "4.500",
    image: "/images/MANDI/FULL CHICKEN MANDI WITH RICE.jpeg",
  },
  {
    id: 2,
    category: "Mandi",
    title: "Half Chicken Shuwa",
    price: "3.500",
    image: "/images/MANDI/HALF CHICKEN SHUWA WITH RICE.jpg",
  },
  {
    id: 3,
    category: "Grills",
    title: "Mixed Grill Platter",
    price: "5.500",
    image: "/images/GRILLS/MIXED GRILL.jpeg",
  },
  {
    id: 4,
    category: "Grills",
    title: "Lamb Chops",
    price: "6.000",
    image: "/images/GRILLS/GRILLS - LAMB CHOPS.jpeg",
  },
  {
    id: 5,
    category: "Juices",
    title: "Pomegranate Juice",
    price: "1.500",
    image: "/images/JUICES/POMEGRANATE JUICE.jpeg",
  },
  {
    id: 6,
    category: "Juices",
    title: "Lemon Mint",
    price: "1.200",
    image: "/images/JUICES/LEMON MINT JUICE.jpeg",
  },
];

const MenuPreview = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-40 bg-black-soft relative">
      <div className="max-w-[1600px] mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="space-y-6">
            <span className="text-gold font-sans font-bold text-[10px] tracking-[0.5em] uppercase">
              The Collection
            </span>
            <h2 className="text-5xl md:text-7xl font-luxury text-white">
              Savor the <span className="text-gold italic">Flavors</span>
            </h2>
          </div>

          {/* Luxury Tabs */}
          <div className="flex flex-wrap gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-8 py-3 text-[10px] uppercase tracking-[0.3em] font-bold transition-luxury ${
                  activeCategory === cat ? "text-gold" : "text-white/40 hover:text-white"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="group bg-black-pure border border-white/5 rounded-2xl overflow-hidden hover:border-gold/20 transition-luxury"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-luxury duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black-pure/20 group-hover:bg-transparent transition-luxury" />
                </div>
                <div className="p-8 flex justify-between items-center">
                  <div>
                    <span className="text-gold/40 text-[8px] uppercase tracking-widest block mb-2">{item.category}</span>
                    <h3 className="text-xl font-luxury text-white group-hover:text-gold transition-colors">{item.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-gold font-bold text-lg">OMR {item.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuPreview;
