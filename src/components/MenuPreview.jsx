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
    image: "/images/GRILLS/GRILLS - MIXED GRILL LARGE.png",
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
    <section id="menu" className="py-40 bg-transparent relative">
      <div className="max-w-[1600px] mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="space-y-6">
            <span className="text-brand-accent font-sans font-black text-[10px] tracking-[0.6em] uppercase block">
              The Collection
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-brand-primary">
              Savor the <span className="text-brand-accent italic">Flavors</span>
            </h2>
          </div>

          {/* Luxury Tabs */}
          <div className="flex flex-wrap gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-8 py-3 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 ${
                  activeCategory === cat ? "text-brand-primary" : "text-brand-primary/30 hover:text-brand-primary"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-brand-light rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-700"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-[2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-all duration-700" />
                </div>
                <div className="p-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-brand-accent text-[8px] font-black uppercase tracking-widest block mb-2">{item.category}</span>
                      <h3 className="text-2xl font-serif text-brand-primary group-hover:text-brand-accent transition-colors duration-500">{item.title}</h3>
                    </div>
                    <span className="text-brand-primary font-bold text-lg">OMR {item.price}</span>
                  </div>
                  
                  <div className="pt-4 border-t border-brand-muted flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    <span className="text-[9px] font-black tracking-widest text-brand-primary/40 uppercase">Details</span>
                    <button className="text-brand-accent text-[9px] font-black tracking-widest uppercase">Add to Order +</button>
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
