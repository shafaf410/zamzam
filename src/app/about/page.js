"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Ornaments Components
const KnotOrnament = ({ className }) => (
  <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0 10H20M40 10H60M25 10C25 12.7614 27.2386 15 30 15C32.7614 15 35 12.7614 35 10C35 7.23858 32.7614 5 30 5C27.2386 5 25 7.23858 25 10Z" stroke="#D4A437" strokeWidth="1"/>
    <circle cx="30" cy="10" r="2" fill="#D4A437"/>
  </svg>
);

const AboutPage = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <main className="bg-[#1A0006] min-h-screen text-[#F8F3EA] selection:bg-[#D4A437] selection:text-[#1A0006] overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Section - Matching Reference */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 overflow-hidden bg-[#5A0013]">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 opacity-10 bg-repeat bg-center mix-blend-overlay pointer-events-none bg-pattern-damask" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-6 mb-8"
          >
            <KnotOrnament className="hidden md:block" />
            <h1 className="text-5xl md:text-8xl font-marcellus text-[#D4A437] tracking-[0.05em]">About Us</h1>
            <KnotOrnament className="hidden md:block" />
          </motion.div>

          <motion.div 
            {...fadeUp}
            className="space-y-8 max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl font-light leading-relaxed text-[#F8F3EA]/90 tracking-wide">
              ZamZam Mandi restaurant opened its doors for its first customer in 2009 with the intention of bringing the authentic middle eastern dining experience at affordable prices to the food-lovers.
            </p>
            <p className="text-lg md:text-xl font-light text-[#F8F3EA]/90">
              We are now in Oman to provide our <br />
              <span className="text-[#D4A437] font-bold tracking-[0.1em] text-2xl md:text-3xl block mt-2 uppercase">BEST-IN-CLASS services.</span>
            </p>

            <div className="flex items-center justify-center gap-2 pt-8 text-[#D8CFC2] text-sm md:text-base font-light tracking-[0.1em]">
              <Link href="/" className="hover:text-[#D4A437] transition-colors">Home</Link>
              <span className="opacity-40">/</span>
              <span className="text-[#D4A437]">About Us</span>
            </div>
          </motion.div>
        </div>

        {/* Swoosh/Curve Separator */}
        <div className="absolute bottom-0 left-0 w-full leading-[0] pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24 fill-[#1A0006]">
            <path d="M0,0V120H1200V0C1113,66.76,989.49,106.05,887.45,117.55c-34.6,11.5-68.3,23.34-104.45,29.34C711.9,158.69,642.87,151.81,573.6,133.81c-70.66-18.38-144.36-39.62-225.2-30.76-70.47,4.19-136.44,32.13-206.8,37.5C83.59,144.74,27.79,134.77,0,112.57Z"></path>
          </svg>
        </div>
      </section>

      {/* Story & Image Section - Exact Grid Layout */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <motion.div {...fadeUp} className="space-y-6 lg:pt-10">
              <div className="flex items-center gap-4">
                <span className="text-[#D4A437] uppercase tracking-[0.2em] text-xs font-bold">Our Story</span>
                <div className="h-[1px] w-16 bg-[#D4A437]/30" />
                <KnotOrnament className="w-10 opacity-50" />
              </div>
              
              <h2 className="text-4xl md:text-6xl font-marcellus text-[#F8F3EA] leading-tight mb-8">
                The Story About <br /> Zam Zam
              </h2>
              
              <p className="text-[#D8CFC2] text-lg font-light leading-relaxed max-w-lg">
                At Zam Zam Mandi Restaurant, we bring you the rich flavors and culinary heritage of Yemen.
              </p>
            </motion.div>

            {/* Right Image Card - Matching Reference Styling */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="relative"
            >
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-[#D4A437]/30 group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/arabic_majlis_mandi_platter_1778503963357.png"
                  alt="Arabic Majlis Dining"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating WhatsApp Button Positioned exactly as image */}
                <div className="absolute bottom-6 right-6">
                  <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <MessageCircle size={24} className="text-white fill-white" />
                  </div>
                </div>

                {/* Internal Thin Glow Frame */}
                <div className="absolute inset-4 border border-white/5 rounded-[2rem] pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section - With Specific Icons */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/5 pt-16">
            {/* Feature 1 */}
            <motion.div {...fadeUp} className="flex gap-10">
              <div className="shrink-0">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-[#D4A437]">
                  <path d="M12 40C12 40 16 34 32 34C48 34 52 40 52 40V44H12V40Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M32 34V30M32 26C32 26 26 24 26 20C26 16 28.6863 14 32 14C35.3137 14 38 16 38 20C38 24 32 26 32 26Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M20 44H44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-marcellus text-[#F8F3EA]">Daily fresh and <br /> always tasty</h3>
                <p className="text-[#D8CFC2] font-light text-sm leading-relaxed max-w-xs">
                  Whether you are dining with family, friends, or on a special occasion, we promise a warm and welcoming atmosphere and a meal that you won't forget.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div {...fadeUp} className="flex gap-10">
              <div className="shrink-0">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-[#D4A437]">
                  <path d="M14 50L24 36L34 44L50 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M44 20H50V26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 54H54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-marcellus text-[#F8F3EA]">Our Journey</h3>
                <p className="text-[#D8CFC2] font-light text-sm leading-relaxed max-w-xs">
                  At Zam Zam, our journey began with a passion for bringing the authentic flavors of Yemen to the heart of Dubai.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars Section - Matching Reference Card Styling */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Authentic Yemeni Taste", 
                desc: "Traditional recipes passed down through generations, made with love and authenticity.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              { 
                title: "Quality Ingredients", 
                desc: "We use the finest and freshest ingredients to ensure the best taste in every bite.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
                    <path d="M8 12L11 15L16 9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              { 
                title: "Community Focused", 
                desc: "Proudly serving Dubai with warm hospitality and a true sense of community.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10">
                    <path d="M17 21V19C17 17.9391 16.5786 17.0217 15.8284 16.2716C15.0783 15.5214 14.1609 15.1 13.1 15.1H10.9C9.83913 15.1 8.92172 15.5214 8.17157 16.2716C7.42143 17.0217 7 17.9391 7 19V21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" strokeWidth="1.5"/>
                  </svg>
                )
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                className="bg-[#5A0013]/20 border border-white/5 rounded-3xl p-10 text-center space-y-6 hover:bg-[#5A0013]/40 transition-luxury group"
              >
                <div className="w-20 h-20 mx-auto rounded-full border border-[#D4A437]/40 flex items-center justify-center text-[#D4A437] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(212,164,55,0.1)]">
                  {card.icon}
                </div>
                <h4 className="text-2xl font-marcellus text-[#F8F3EA]">{card.title}</h4>
                <p className="text-[#D8CFC2] font-light text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Pattern Bottom Border - Matching Reference */}
      <div className="w-full h-12 relative overflow-hidden bg-pattern-islamic opacity-40 mb-10" />

      <Footer />

      {/* Luxury Global Styles */}
      <style jsx global>{`
        .bg-pattern-damask {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40L50 0Z' fill='%23D4A437' fill-opacity='0.1'/%3E%3C/svg%3E");
        }
        .bg-pattern-islamic {
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20L20 0L40 20L20 40L0 20ZM5 20L20 5L35 20L20 35L5 20Z' stroke='%23D4A437' stroke-width='0.5' fill='none'/%3E%3C/svg%3E");
          background-repeat: repeat-x;
          background-size: contain;
        }
      `}</style>
    </main>
  );
};

export default AboutPage;
