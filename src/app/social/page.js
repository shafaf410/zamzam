"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const InstagramIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);


const visualFeed = [
  {
    image: "/images/menu/mutton_haneeth.png",
    title: "Heritage Haneeth",
    category: "Tradition",
    link: "https://instagram.com"
  },
  {
    image: "/images/menu/mix_meat_platter.jpg",
    title: "The Feast Platter",
    category: "Craftsmanship",
    link: "https://instagram.com"
  },
  {
    image: "/images/menu/kunafa.png",
    title: "Golden Kunafa",
    category: "Dessert Artistry",
    link: "https://instagram.com"
  }
];

export default function SocialPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <main className="bg-black-pure min-h-screen text-beige selection:bg-gold selection:text-black-pure overflow-x-hidden font-sans relative">
      <Navbar />
      
      {/* Global Luxury Background Texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-pattern-islamic opacity-[0.02] pointer-events-none" />
        {/* Soft Radial Atmospheric Lights */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-maroon/15 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gold/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-maroon-dark/50 blur-[180px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 pt-40 md:pt-48 pb-32">
        {/* Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-beige-muted text-xs font-light tracking-[0.2em] uppercase opacity-75 mb-10"
        >
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="opacity-40">/</span>
          <span className="text-gold">Connect</span>
        </motion.div>

        {/* Editorial Hero Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 justify-center mb-6"
          >
            <div className="h-[1px] w-8 bg-gold/30" />
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">Social Journals</span>
            <div className="h-[1px] w-8 bg-gold/30" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-marcellus text-white leading-tight tracking-wide mb-6"
          >
            Connect To <span className="text-gold italic font-luxury">Us</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-beige-muted/75 text-base md:text-xl font-light tracking-wide leading-relaxed"
          >
            Follow our journey and stay updated with our latest culinary masterpieces, heritage recipes, and exclusive stories from our kitchen.
          </motion.p>
        </div>

        {/* Immersive Floating Social Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32 max-w-5xl mx-auto">
          {/* Instagram Card */}
          <motion.a
            href="https://www.instagram.com/zamzammandi/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative block bg-gradient-to-b from-maroon-dark/60 via-maroon-dark/40 to-black-pure/80 border border-gold/15 rounded-[2.5rem] p-10 sm:p-12 overflow-hidden hover:border-gold/35 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:shadow-[0_30px_60px_rgba(212,164,55,0.08)] hover:-translate-y-1.5 cursor-pointer"
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                {/* Gold Outline Icon Container */}
                <div className="w-16 h-16 rounded-2xl border border-gold/20 bg-gold/5 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:bg-gold/10 group-hover:border-gold/40 transition-all duration-500">
                  <InstagramIcon className="text-gold w-8 h-8" />
                </div>
                
                <span className="text-[10px] font-bold tracking-[0.3em] text-gold/60 uppercase block mb-2">Visual Stories</span>
                <h2 className="text-3xl sm:text-4xl font-marcellus text-white mb-4 tracking-wider group-hover:text-gold transition-colors duration-500">Instagram</h2>
                <p className="text-beige-muted/60 mb-10 leading-relaxed font-light text-sm sm:text-base">
                  Explore behind-the-scenes moments, our signature dishes gallery, and exclusive live stories directly from the heat of our kitchen.
                </p>
              </div>
              
              <span className="inline-flex items-center gap-3 text-gold text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 group-hover:gap-5">
                Follow Our Gallery <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[50px] group-hover:bg-gold/10 transition-colors pointer-events-none" />
            <div className="absolute -inset-px bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] pointer-events-none" />
          </motion.a>

          {/* Facebook Card */}
          <motion.a
            href="https://www.facebook.com/zamzammandii/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group relative block bg-gradient-to-b from-maroon-dark/60 via-maroon-dark/40 to-black-pure/80 border border-gold/15 rounded-[2.5rem] p-10 sm:p-12 overflow-hidden hover:border-gold/35 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:shadow-[0_30px_60px_rgba(212,164,55,0.08)] hover:-translate-y-1.5 cursor-pointer"
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                {/* Gold Outline Icon Container */}
                <div className="w-16 h-16 rounded-2xl border border-gold/20 bg-gold/5 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:bg-gold/10 group-hover:border-gold/40 transition-all duration-500">
                  <FacebookIcon className="text-gold w-8 h-8" />
                </div>
                
                <span className="text-[10px] font-bold tracking-[0.3em] text-gold/60 uppercase block mb-2">Community & News</span>
                <h2 className="text-3xl sm:text-4xl font-marcellus text-white mb-4 tracking-wider group-hover:text-gold transition-colors duration-500">Facebook</h2>
                <p className="text-beige-muted/60 mb-10 leading-relaxed font-light text-sm sm:text-base">
                  Join our community, read authentic guest reviews, and stay informed about our latest news, seasonal offers, and upcoming events.
                </p>
              </div>
              
              <span className="inline-flex items-center gap-3 text-gold text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 group-hover:gap-5">
                Join The Circle <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[50px] group-hover:bg-gold/10 transition-colors pointer-events-none" />
            <div className="absolute -inset-px bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] pointer-events-none" />
          </motion.a>
        </div>

        {/* Visual Feed Section (Mouth-Watering Culinary Artistry Preview) */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            animate: { transition: { staggerChildren: 0.15 } }
          }}
          className="space-y-12 max-w-5xl mx-auto"
        >
          <div className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
            <div className="space-y-2">
              <span className="text-gold uppercase tracking-[0.3em] text-[9px] font-bold">Visual Journals</span>
              <h2 className="text-3xl sm:text-4xl font-marcellus text-white tracking-wide">The Culinary Gallery</h2>
            </div>
            <p className="text-beige-muted/50 text-sm font-light max-w-sm mt-4 md:mt-0 leading-relaxed">
              A curated look at our traditional slow-cooking process and luxurious dining experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visualFeed.map((post, idx) => (
              <motion.a
                key={idx}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className="group relative block overflow-hidden rounded-[2rem] border border-white/5 bg-black-soft aspect-[4/5] shadow-2xl cursor-pointer"
              >
                <div className="absolute inset-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black-pure/90 via-black-pure/30 to-transparent group-hover:from-black-pure/80 transition-all duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-gold font-sans font-bold text-[8px] tracking-[0.3em] uppercase mb-2 block">
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-marcellus text-beige tracking-wider drop-shadow-lg mb-1 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <div className="h-[1px] w-6 bg-gold/50 transition-all duration-500 group-hover:w-full group-hover:bg-gold mt-2" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Back Link */}
        <div className="mt-32 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-4 text-white/40 hover:text-gold transition-colors text-[10px] font-bold tracking-[0.4em] uppercase group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
