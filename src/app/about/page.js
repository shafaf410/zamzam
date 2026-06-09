"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MessageCircle, Utensils, Award, Users, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection1 from "@/components/ui/about-section-1";

// Ornaments Components
const KnotOrnament = ({ className }) => (
  <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0 10H20M40 10H60M25 10C25 12.7614 27.2386 15 30 15C32.7614 15 35 12.7614 35 10C35 7.23858 32.7614 5 30 5C27.2386 5 25 7.23858 25 10Z" stroke="#D4A437" strokeWidth="1"/>
    <circle cx="30" cy="10" r="2" fill="#D4A437"/>
  </svg>
);

const AboutPage = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Optimized parallax translation to prevent gapping and excessive cropping
  const videoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <main className="bg-[#1A0006] min-h-screen text-[#F8F3EA] selection:bg-[#D4A437] selection:text-[#1A0006] overflow-x-hidden font-sans relative">
      <Navbar />

      {/* Global Luxury Background Texture */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="/images/pattern_bg_red.jpg" 
          alt="Luxury Theme Background" 
          fill 
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0006]/90 via-[#1A0006]/40 to-[#1A0006]/90" />
      </div>

      <div className="relative z-10">
        {/* Unified Cinematic About Us & Story Section */}
        <section ref={sectionRef} className="pt-40 pb-28 px-6 md:px-12 relative overflow-hidden min-h-screen flex items-center justify-center">
          {/* Parallax Video Backdrop */}
          <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
            <motion.div 
              style={{ y: videoY }}
              className="absolute inset-x-0 -top-[10%] -bottom-[10%] w-full h-[120%]"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover object-center"
              >
                <source src="/videos/about_background.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>

          {/* Premium Dark Burgundy & Gold Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A0006]/95 via-[#1A0006]/85 to-[#1A0006]/95 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,0,19,0.15)_0%,rgba(26,0,6,0.5)_100%)] z-10" />

          {/* Centered Editorial Content */}
          <div className="relative z-20 max-w-4xl mx-auto text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              {/* Breadcrumbs */}
              <div className="flex items-center justify-center gap-2 text-[#D8CFC2] text-xs font-light tracking-[0.2em] uppercase opacity-75">
                <Link href="/" className="hover:text-[#D4A437] transition-colors">Home</Link>
                <span className="opacity-40">/</span>
                <span className="text-[#D4A437]">About Us</span>
              </div>

              {/* Title & Header */}
              <div className="space-y-4 flex flex-col items-center">
                <div className="flex items-center gap-4 justify-center">
                  <div className="h-[1px] w-8 bg-[#D4A437]/30" />
                  <span className="text-[#D4A437] uppercase tracking-[0.4em] text-[10px] font-bold">Our Story</span>
                  <div className="h-[1px] w-8 bg-[#D4A437]/30" />
                </div>
                <h1 className="text-5xl md:text-8xl font-marcellus text-[#F8F3EA] leading-tight">
                  About Us
                </h1>
                <h2 className="text-2xl md:text-3xl font-marcellus text-[#D4A437] tracking-widest italic -mt-2">
                  The Story About Zam Zam
                </h2>
                <KnotOrnament className="mt-4" />
              </div>
              
              {/* Highlight Quote */}
              <div className="max-w-3xl mx-auto">
                <p className="text-[#D4A437] text-2xl md:text-4xl font-light leading-relaxed font-luxury italic">
                  "At Zam Zam Mandi Restaurant, we bring you the rich flavors and culinary heritage of Yemen, prepared with ancient secrets and modern passion."
                </p>
              </div>

              <div className="h-[1px] w-24 bg-[#D4A437]/20 mx-auto" />

              {/* Story Narrative & Callouts */}
              <div className="space-y-8 max-w-3xl mx-auto">
                <p className="text-[#D8CFC2] text-base md:text-xl font-light leading-relaxed">
                  ZamZam Mandi restaurant opened its doors for its first customer in 2009 with the intention of bringing the authentic middle eastern dining experience at affordable prices to the food-lovers.
                </p>
                <p className="text-[#D8CFC2] text-base md:text-xl font-light leading-relaxed">
                  Founded with a vision to preserve authentic Arabian hospitality, every grain of rice and every cut of meat tells a story of tradition, slow-cooking, and hand-picked spices.
                </p>
                
                <div className="pt-6">
                  <p className="text-lg md:text-xl font-light text-[#F8F3EA]/90 leading-relaxed">
                    We are now in Oman to provide our <br />
                    <span className="text-[#D4A437] font-bold tracking-[0.15em] text-2xl md:text-3xl block mt-3 uppercase">BEST-IN-CLASS services.</span>
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

        <AboutSection1 />

        {/* Feature Highlights Section */}
        <section className="py-16 px-6 md:px-12 bg-[#1A0006]/20">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/5 pt-16">
              <motion.div {...fadeUp} className="flex gap-10">
                <div className="shrink-0">
                  <Utensils size={48} className="text-[#D4A437]" strokeWidth={1} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-marcellus text-[#F8F3EA]">Daily fresh and <br /> always tasty</h3>
                  <p className="text-[#D8CFC2] font-light text-sm leading-relaxed max-w-xs">
                    Whether you are dining with family, friends, or on a special occasion, we promise a warm and welcoming atmosphere and a meal that you won't forget.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeUp} className="flex gap-10">
                <div className="shrink-0">
                  <Clock size={48} className="text-[#D4A437]" strokeWidth={1} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-marcellus text-[#F8F3EA]">Our Journey</h3>
                  <p className="text-[#D8CFC2] font-light text-sm leading-relaxed max-w-xs">
                    At Zam Zam, our journey began with a passion for bringing the authentic flavors of Yemen to the heart of Oman.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Authentic Yemeni Taste", icon: Utensils, desc: "Traditional recipes passed down through generations, made with love and authenticity." },
                { title: "Quality Ingredients", icon: Award, desc: "We use the finest and freshest ingredients to ensure the best taste in every bite." },
                { title: "Community Focused", icon: Users, desc: "Proudly serving Oman with warm hospitality and a true sense of community." }
              ].map((card, i) => (
                <motion.div key={i} {...fadeUp} className="bg-[#5A0013]/20 backdrop-blur-md border border-white/5 rounded-3xl p-10 text-center space-y-6 hover:bg-[#5A0013]/40 transition-luxury group">
                  <div className="w-20 h-20 mx-auto rounded-full border border-[#D4A437]/40 flex items-center justify-center text-[#D4A437] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(212,164,55,0.1)]">
                    <card.icon size={36} strokeWidth={1} />
                  </div>
                  <h4 className="text-2xl font-marcellus text-[#F8F3EA]">{card.title}</h4>
                  <p className="text-[#D8CFC2] font-light text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full h-12 relative overflow-hidden bg-pattern-islamic opacity-40 mb-10" />
      </div>

      <Footer />

      <style jsx global>{`
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
