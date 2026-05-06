"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al-Balushi",
    role: "Local Foodie",
    content: "The most authentic Shuwa I've had in years. The meat literally melts in your mouth, and the ambiance is simply unmatched in Oman.",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "Travel Blogger",
    content: "A cinematic dining experience. From the presentation to the rich spices, Zam Zam Mandi is a must-visit for anyone seeking true Arabian luxury.",
    rating: 5,
  },
  {
    name: "Khalid Al-Said",
    role: "Business Executive",
    content: "Perfect for hosting guests. The hospitality is as premium as the food. Truly the gold standard for Mandi restaurants.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-40 bg-black-pure relative overflow-hidden">
      {/* Decorative Gold Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/10 rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-10 relative z-10">
        <div className="text-center mb-24">
          <Quote className="text-gold w-16 h-16 mx-auto mb-10 opacity-30" />
          <span className="text-gold font-sans font-bold text-[10px] tracking-[0.5em] uppercase block mb-6">Guest Experiences</span>
          <h2 className="text-5xl md:text-7xl font-luxury text-white">Words of <span className="text-gold italic">Distinction</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 1 }}
              className="glass-dark p-12 rounded-3xl relative group hover:border-gold/30 transition-luxury"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-white/70 text-lg md:text-xl font-light italic leading-relaxed mb-12">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-[1px] bg-gold/40" />
                <div>
                  <h4 className="text-white font-bold tracking-[0.2em] text-[10px] uppercase mb-1">{review.name}</h4>
                  <p className="text-gold/60 text-[8px] tracking-widest uppercase">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
