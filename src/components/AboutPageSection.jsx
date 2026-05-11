"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Coffee, Map, Award, Users } from "lucide-react";

const features = [
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Daily fresh and always tasty",
    description: "Whether you are dining with family, friends, or on a special occasion, we promise a warm and welcoming atmosphere and a meal that you won't forget."
  },
  {
    icon: <Map className="w-8 h-8" />,
    title: "Our Journey",
    description: "At Zam Zam, our journey began with a passion for bringing the authentic flavors of Yemen to the heart of Dubai."
  }
];

const pillars = [
  {
    icon: "/images/pattern_bg.png", // Use a generic shape, or SVG later
    title: "Authentic Yemeni Taste",
    description: "Traditional recipes passed down through generations, made with love and authenticity."
  },
  {
    icon: "/images/pattern_bg.png",
    title: "Quality Ingredients",
    description: "We use the finest and freshest ingredients to ensure the best taste in every bite."
  },
  {
    icon: "/images/pattern_bg.png",
    title: "Community Focused",
    description: "Proudly serving Dubai with warm hospitality and a true sense of community."
  }
];

export default function AboutPageSection() {
  return (
    <div className="relative w-full bg-maroon overflow-hidden">
      {/* Background Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/images/wall_paper.pdf')", // If converted, else use something else. Let's use CSS pattern or site_bg
          backgroundSize: "400px",
          backgroundRepeat: "repeat"
        }}
      />
      {/* Red/Maroon Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3a060e] via-[#5A0F1C] to-[#2a0409] opacity-90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-gold" />
            <h1 className="text-6xl md:text-8xl font-luxury text-gold">About Us</h1>
            <div className="w-12 h-[1px] bg-gold" />
          </div>
          
          <p className="text-white/90 text-lg md:text-xl font-sans max-w-3xl mx-auto leading-relaxed mb-8">
            ZamZam Mandi restaurant opened its doors in for its first customer in 2009 with the intention of bringing the authentic middle eastern dining experience at affordable prices to the food-lovers.
          </p>
          <p className="text-white text-xl font-serif mb-12">
            We are now in Oman to provide our <br/> <span className="text-gold tracking-widest font-bold">BEST-IN-CLASS</span> services.
          </p>
          
          <div className="flex items-center justify-center gap-3 text-gold text-sm tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold font-serif text-2xl">Our Story</span>
              <div className="w-20 h-[1px] bg-gold/50" />
            </div>
            <h2 className="text-4xl md:text-6xl font-luxury text-white mb-8 leading-tight">
              The Story About <br/> Zam Zam
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              At Zam Zam Mandi Restaurant, we bring you the rich flavors and culinary heritage of Yemen.
            </p>
          </div>
          
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-gold/20">
            <Image
              src="/images/MANDI/FULL CHICKEN MANDI WITH RICE_1.jpeg" // Placeholder for the majlis image
              alt="Zam Zam Story"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex-shrink-0 text-gold">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-serif text-white mb-4">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Three Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-black/20 border border-gold/20 rounded-2xl p-10 text-center hover:bg-black/30 transition-colors">
              <div className="w-16 h-16 mx-auto rounded-full border border-gold flex items-center justify-center mb-6 text-gold">
                {idx === 0 ? <Award /> : idx === 1 ? <Coffee /> : <Users />}
              </div>
              <h4 className="text-xl font-serif text-white mb-4">{pillar.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
