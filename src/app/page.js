"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";
import { X } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const toggleExperience = () => {
    setIsExperienceOpen(!isExperienceOpen);
    if (!isExperienceOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
    if (!isContactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  // Cleanup on unmount & check query params to reopen modals
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("menu") === "open") {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
    if (params.get("experience") === "open") {
      setIsExperienceOpen(true);
      document.body.style.overflow = "hidden";
    }
    if (params.get("contact") === "open") {
      setIsContactOpen(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <main className="relative bg-black-pure">
      <LoadingScreen />
      
      <Navbar 
        onMenuClick={toggleMenu} 
        onExperienceClick={toggleExperience}
        onContactClick={toggleContact}
      />
      
      <Hero onMenuClick={toggleMenu} />
      
      <div className="relative bg-maroon-dark overflow-hidden">
        {/* Uploaded Pattern Background for content below Hero */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image src="/images/pattern_bg_red.jpg" alt="Background" fill className="object-cover mix-blend-multiply opacity-60" />
        </div>
        <div className="relative z-10">
          <Experience />
          <About />
          <Reviews />
          <Contact />
        </div>
      </div>

      {/* Menu Modal Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-maroon-dark overflow-y-auto"
          >
            {/* Close Button Overlay */}
            <div className="sticky top-0 w-full z-[110] px-6 py-6 flex justify-end pointer-events-none">
              <button
                onClick={toggleMenu}
                className="pointer-events-auto p-4 bg-gold text-black-pure rounded-full hover:bg-gold-light transition-all duration-500 shadow-2xl hover:scale-110 active:scale-95 group cursor-pointer"
              >
                <X size={32} className="group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            <div className="pt-4">
               <MenuSection />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Experience Modal Drawer */}
      <AnimatePresence>
        {isExperienceOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-maroon-dark overflow-y-auto"
          >
            {/* Close Button Overlay */}
            <div className="sticky top-0 w-full z-[110] px-6 py-6 flex justify-end pointer-events-none">
              <button
                onClick={toggleExperience}
                className="pointer-events-auto p-4 bg-gold text-black-pure rounded-full hover:bg-gold-light transition-all duration-500 shadow-2xl hover:scale-110 active:scale-95 group cursor-pointer"
              >
                <X size={32} className="group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            <div className="py-12 relative">
              <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
                <Image src="/images/pattern_bg_red.jpg" alt="Background" fill className="object-cover mix-blend-multiply" />
              </div>
              <div className="relative z-10">
                <Experience />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal Drawer */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-maroon-dark overflow-y-auto"
          >
            {/* Close Button Overlay */}
            <div className="sticky top-0 w-full z-[110] px-6 py-6 flex justify-end pointer-events-none">
              <button
                onClick={toggleContact}
                className="pointer-events-auto p-4 bg-gold text-black-pure rounded-full hover:bg-gold-light transition-all duration-500 shadow-2xl hover:scale-110 active:scale-95 group cursor-pointer"
              >
                <X size={32} className="group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            <div className="py-12 relative">
              <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
                <Image src="/images/pattern_bg_red.jpg" alt="Background" fill className="object-cover mix-blend-multiply" />
              </div>
              <div className="relative z-10">
                <Contact />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
