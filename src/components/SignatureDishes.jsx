"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const dishes = [
  {
    id: 1,
    title: "Chicken Mandi",
    label: "SIGNATURE DISH",
    description: "Slow-cooked Arabian rice with fire-roasted chicken.",
    price: "OMR 4.500",
    image: "/images/MANDI/FULL CHICKEN MANDI WITH RICE.jpeg",
  },
  {
    id: 2,
    title: "Mutton Shuwa",
    label: "HERITAGE CHOICE",
    description: "Authentic Omani lamb slow-cooked in underground clay oven.",
    price: "OMR 6.500",
    image: "/images/MANDI/HALF CHICKEN SHUWA WITH RICE.jpg",
  },
  {
    id: 3,
    title: "Mixed BBQ Platter",
    label: "LUXURY GRILLS",
    description: "A premium selection of grilled lamb, chicken, and kababs.",
    price: "OMR 8.000",
    image: "/images/GRILLS/GRILLS - MIXED GRILL LARGE.png",
  },
];

const SignatureDishes = () => {
  return (
    <section id="signature" className="py-32 bg-black-pure relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="max-w-[1600px] mx-auto px-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-sans font-bold text-[10px] tracking-[0.5em] uppercase block mb-6"
          >
            Culinary Masterpieces
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-luxury text-white tracking-tight">
            Our Signature <span className="text-gold italic">Selections</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 1 }}
              whileHover={{ y: -15 }}
              className="group relative bg-black-soft border border-white/5 rounded-2xl overflow-hidden transition-luxury hover:border-gold/30 hover:shadow-gold"
            >
              {/* Image Container */}
              <div className="relative h-[450px] overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.title}
                  fill
                  className="object-cover transition-luxury duration-[2s] group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-soft via-transparent to-transparent opacity-80" />
                
                {/* Price Tag Overlay */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-black-pure/80 backdrop-blur-md border border-gold/20 rounded-full">
                  <span className="text-gold font-bold text-xs tracking-wider">{dish.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 relative">
                <span className="text-gold/60 font-sans font-bold text-[8px] tracking-[0.4em] uppercase block mb-4">
                  {dish.label}
                </span>
                <h3 className="text-3xl font-luxury text-white mb-4 group-hover:text-gold transition-colors">
                  {dish.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8 font-light">
                  {dish.description}
                </p>
                
                <button className="flex items-center gap-3 text-gold text-[10px] font-bold tracking-[0.3em] uppercase group/btn">
                  Explore Details
                  <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>

              {/* Gold Illumination Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-luxury pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
