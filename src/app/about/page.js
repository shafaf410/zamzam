"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Utensils, Award, Users, MessageCircle, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const stagger = {
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="bg-[#1A0006] min-h-screen text-[#F8F3EA] selection:bg-[#D4A437] selection:text-[#1A0006] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-6 overflow-hidden">
        {/* Background Decorative Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5A0013]/20 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 mb-8 text-[#D8CFC2] text-[10px] uppercase tracking-[0.3em]"
          >
            <Link href="/" className="hover:text-[#D4A437] transition-colors">Home</Link>
            <ChevronRight size={10} className="text-[#D4A437]" />
            <span className="text-[#D4A437]">About Us</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex items-center justify-center gap-4 md:gap-8 mb-10"
          >
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-[#D4A437]" />
            <h1 className="text-4xl md:text-7xl font-marcellus text-[#D4A437] tracking-[0.1em] uppercase">About Us</h1>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-[#D4A437]" />
          </motion.div>

          <motion.p 
            {...fadeUp}
            className="text-lg md:text-xl font-light leading-relaxed text-[#F8F3EA] max-w-2xl mx-auto italic"
          >
            “ZamZam Mandi restaurant opened its doors for its first customer in 2009 with the intention of bringing the authentic Middle Eastern dining experience at affordable prices to food lovers.
            <br /><br />
            We are now in Oman to provide our <span className="text-[#D4A437] font-bold">BEST-IN-CLASS</span> services.”
          </motion.p>
        </div>

        {/* Curved Gold Separator */}
        <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full text-[#D4A437]/20 fill-current">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 md:px-12 bg-transparent relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div {...fadeUp} className="space-y-8">
              <div>
                <span className="text-[#D4A437] uppercase tracking-[0.5em] text-[10px] font-bold block mb-4">Our Story</span>
                <h2 className="text-4xl md:text-6xl font-marcellus text-[#F8F3EA] leading-tight mb-8">
                  The Story About <br /> <span className="text-[#D4A437] italic">Zam Zam</span>
                </h2>
                <div className="w-20 h-[1px] bg-[#D4A437] mb-8" />
              </div>
              
              <div className="space-y-6 text-[#D8CFC2] text-lg font-light leading-relaxed">
                <p>
                  Rooted in the rich culinary soil of Yemen, our journey began with a simple yet profound goal: to honor the centuries-old tradition of Mandi and Shuwa. We believe that true luxury lies in authenticity.
                </p>
                <p>
                  Every spice we use is hand-picked, and every dish is prepared in custom underground ovens, just as it has been done for generations in the heart of the Arabian Peninsula. Our move to Oman marks a new chapter in sharing this heritage.
                </p>
              </div>
            </motion.div>

            {/* Right Image Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#D4A437]/30 shadow-[0_0_50px_rgba(212,164,55,0.1)]">
                <Image
                  src="/images/MANDI/MIXED GRILL PLATTER_1.jpeg"
                  alt="Arabic Majlis Atmosphere"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0006] via-transparent to-transparent opacity-60" />
                
                {/* Floating WhatsApp Icon */}
                <motion.a 
                  href="https://wa.me/96800000000"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white z-20"
                >
                  <MessageCircle size={32} />
                </motion.a>

                {/* Glowing Border Reveal */}
                <div className="absolute inset-0 border-[1px] border-[#D4A437]/0 group-hover:border-[#D4A437]/50 transition-all duration-700 pointer-events-none rounded-[2rem]" />
              </div>
              
              {/* Decorative Lantern Light Effect */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4A437]/10 blur-[60px] rounded-full animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-24 px-6 md:px-12 bg-[#5A0013]/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Feature 1 */}
            <motion.div {...fadeUp} className="group p-10 relative overflow-hidden border-b border-[#D4A437]/10">
              <div className="flex gap-8 items-start relative z-10">
                <div className="w-16 h-16 rounded-full border border-[#D4A437]/30 flex items-center justify-center text-[#D4A437] group-hover:bg-[#D4A437] group-hover:text-[#1A0006] transition-luxury">
                  <Utensils size={28} strokeWidth={1} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-marcellus text-[#F8F3EA] mb-4">Daily fresh and always tasty</h3>
                  <p className="text-[#D8CFC2] font-light leading-relaxed">
                    We source our ingredients daily from local Omani markets, ensuring that every mandi platter served is a testament to freshness and flavor excellence.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div {...fadeUp} className="group p-10 relative overflow-hidden border-b border-[#D4A437]/10">
              <div className="flex gap-8 items-start relative z-10">
                <div className="w-16 h-16 rounded-full border border-[#D4A437]/30 flex items-center justify-center text-[#D4A437] group-hover:bg-[#D4A437] group-hover:text-[#1A0006] transition-luxury">
                  <Clock size={28} strokeWidth={1} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-marcellus text-[#F8F3EA] mb-4">Our Journey</h3>
                  <p className="text-[#D8CFC2] font-light leading-relaxed">
                    Over a decade of culinary excellence, evolving from a single door in 2009 to a premium destination for Arabian hospitality in the Sultanate of Oman.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Cards Section */}
      <section className="py-32 px-6 md:px-12 relative">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            {...fadeUp}
            className="text-center mb-20"
          >
            <span className="text-[#D4A437] uppercase tracking-[0.5em] text-[10px] font-bold block mb-4">Our Essence</span>
            <h2 className="text-4xl md:text-5xl font-marcellus text-[#F8F3EA]">The Pillars of <span className="text-[#D4A437]">Zam Zam</span></h2>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Authentic Yemeni Taste", icon: Utensils, desc: "Traditional recipes passed down through generations, cooked in authentic earth ovens." },
              { title: "Quality Ingredients", icon: Award, desc: "Only the finest premium meats and Grade-A long grain Basmati rice make it to our kitchen." },
              { title: "Community Focused", icon: Users, desc: "A place where family and friends gather to share more than just a meal, but a true Arabian experience." }
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative p-12 rounded-[2.5rem] bg-[#5A0013]/10 backdrop-blur-xl border border-[#D4A437]/10 hover:border-[#D4A437]/30 transition-luxury overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A437]/5 blur-[60px] rounded-full group-hover:bg-[#D4A437]/10 transition-colors" />
                
                <div className="relative z-10 text-center space-y-8">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#1A0006] border border-[#D4A437]/20 flex items-center justify-center text-[#D4A437] group-hover:shadow-[0_0_30px_rgba(212,164,55,0.2)] transition-luxury">
                    <value.icon size={36} strokeWidth={1} />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-marcellus text-[#F8F3EA] tracking-wide">{value.title}</h4>
                    <p className="text-[#D8CFC2] font-light leading-relaxed text-sm">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer Decoration Pattern */}
      <div className="relative h-24 overflow-hidden opacity-30">
        <div className="absolute bottom-0 w-full flex justify-center">
          <div className="w-full max-w-[1400px] h-full border-t border-[#D4A437]/20 flex justify-between px-10">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-8 h-8 border border-[#D4A437]/40 rotate-45 -translate-y-1/2 opacity-50" />
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {/* Luxury Styles */}
      <style jsx global>{`
        .bg-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L0 0M50 50L100 0M50 50L100 100M50 50L0 100' stroke='%23D4A437' stroke-width='0.5' fill='none'/%3E%3C/svg%3E");
          background-size: 60px 60px;
        }
      `}</style>
    </main>
  );
};

export default AboutPage;
