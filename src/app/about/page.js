"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MessageCircle, Utensils, Award, Users, Clock } from "lucide-react";
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
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 overflow-hidden">
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
              <p className="text-lg md:text-xl font-light leading-relaxed text-[#F8F3EA]/90 tracking-wide italic">
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

          <div className="absolute bottom-0 left-0 w-full leading-[0] pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24 fill-[#1A0006]/20">
              <path d="M0,0V120H1200V0C1113,66.76,989.49,106.05,887.45,117.55c-34.6,11.5-68.3,23.34-104.45,29.34C711.9,158.69,642.87,151.81,573.6,133.81c-70.66-18.38-144.36-39.62-225.2-30.76-70.47,4.19-136.44,32.13-206.8,37.5C83.59,144.74,27.79,134.77,0,112.57Z"></path>
            </svg>
          </div>
        </section>

        {/* Story Section - Floating Vertical Video Card */}
        <section className="py-32 px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeUp} className="space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[#D4A437] uppercase tracking-[0.4em] text-[10px] font-bold">Our Story</span>
                    <div className="h-[1px] w-12 bg-[#D4A437]/30" />
                  </div>
                  <h2 className="text-5xl md:text-7xl font-marcellus text-[#F8F3EA] leading-[1.1] mb-8">
                    The Story About <br /> <span className="text-[#D4A437] italic">Zam Zam</span>
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-[#D8CFC2] text-xl font-light leading-relaxed max-w-xl italic border-l-2 border-[#D4A437]/20 pl-8">
                    At Zam Zam Mandi Restaurant, we bring you the rich flavors and culinary heritage of Yemen, prepared with ancient secrets and modern passion.
                  </p>
                  <p className="text-[#D8CFC2]/70 text-base font-light leading-relaxed max-w-lg pl-8">
                    Founded with a vision to preserve authentic Arabian hospitality, every grain of rice and every cut of meat tells a story of tradition, slow-cooking, and hand-picked spices.
                  </p>
                </div>

                <div className="pt-6">
                  <Link href="/#experience" className="group relative inline-flex items-center gap-6 px-10 py-5 border border-[#D4A437]/40 text-[#D4A437] rounded-full font-bold tracking-[0.3em] uppercase text-[10px] transition-luxury hover:bg-[#D4A437]/5 hover:border-[#D4A437] overflow-hidden">
                    <span className="relative z-10">Explore Our Journey</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4A437]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex justify-center lg:justify-end"
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative group w-full max-w-[450px]"
                >
                  <div className="absolute -inset-6 bg-[#5A0013]/30 blur-[60px] rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden border border-[#D4A437]/30 shadow-[0_40px_120px_rgba(0,0,0,0.9)] glass-dark">
                    <video
                      key="about-video-mobile"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="absolute inset-0 w-full h-full object-cover block"
                    >
                      <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227e26d2146f49f50f4a7c88b64b1d&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0006]/60 via-transparent to-transparent opacity-40" />
                    <div className="absolute inset-[1px] rounded-[2.4rem] border border-white/5 z-20 pointer-events-none" />
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4A437]/40 to-transparent" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

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
