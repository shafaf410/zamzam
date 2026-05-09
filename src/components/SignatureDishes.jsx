"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, Award } from "lucide-react";
import Card3DTilt from "./Card3DTilt";

const dishes = [
  {
    id: 1,
    title: "Chicken Mandi",
    label: "SIGNATURE DISH",
    description: "Slow-cooked Arabian rice with fire-roasted chicken.",
    price: "4.500",
    currency: "OMR",
    image: "/images/MANDI/FULL CHICKEN MANDI WITH RICE.jpeg",
    stars: 5,
    popular: true,
  },
  {
    id: 2,
    title: "Mutton Shuwa",
    label: "HERITAGE CHOICE",
    description: "Authentic Omani lamb slow-cooked in underground clay oven.",
    price: "6.500",
    currency: "OMR",
    image: "/images/MANDI/HALF CHICKEN SHUWA WITH RICE.jpg",
    stars: 5,
    popular: false,
  },
  {
    id: 3,
    title: "Mixed BBQ Platter",
    label: "LUXURY GRILLS",
    description: "A premium selection of grilled lamb, chicken, and kababs.",
    price: "8.000",
    currency: "OMR",
    image: "/images/GRILLS/GRILLS - MIXED GRILL LARGE.png",
    stars: 4,
    popular: true,
  },
];

const SignatureDishes = () => {
  return (
    <section id="signature" className="py-32 bg-transparent relative overflow-hidden">
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
            Our Signature <span className="text-gradient italic">Selections</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 1 }}
              className="group"
            >
              <Card3DTilt className="h-full">
                <div className="relative bg-black-soft/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden transition-luxury hover:border-gold/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] h-full">
                  {/* Luxury Badge */}
                  {dish.popular && (
                    <div className="absolute top-6 left-6 z-20 px-4 py-1.5 bg-gold text-black-pure rounded-full flex items-center gap-2 shadow-lg">
                      <Award size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Best Seller</span>
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="relative h-[450px] overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      fill
                      className="object-cover transition-all duration-[2s] group-hover:scale-115 group-hover:brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-pure via-transparent to-transparent opacity-80" />
                    
                    {/* Animated Price Tag */}
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-6 right-6 px-5 py-2.5 bg-maroon/90 backdrop-blur-md border border-gold/30 rounded-full z-20"
                    >
                      <span className="text-white font-sans font-medium text-[8px] tracking-widest mr-1 opacity-60 uppercase">{dish.currency}</span>
                      <span className="text-gold font-bold text-sm tracking-wider">{dish.price}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-10 relative">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gold/60 font-sans font-bold text-[8px] tracking-[0.4em] uppercase">
                        {dish.label}
                      </span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={10} fill={i < dish.stars ? "var(--color-gold)" : "none"} className={i < dish.stars ? "text-gold" : "text-white/10"} />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-luxury text-white mb-4 group-hover:text-gold transition-colors">
                      {dish.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-8 font-light italic">
                      "{dish.description}"
                    </p>
                    
                    <button className="flex items-center gap-3 text-gold text-[10px] font-bold tracking-[0.3em] uppercase group/btn py-2 border-b border-transparent hover:border-gold/30 transition-all">
                      Explore Details
                      <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>

                  {/* Gold Illumination Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-luxury pointer-events-none" />
                </div>
              </Card3DTilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
