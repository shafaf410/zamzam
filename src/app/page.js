"use client";

import { useState, useEffect } from "react";
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <main className="relative bg-black-pure">
      <LoadingScreen />
      <Navbar onMenuClick={toggleMenu} />
      <Hero onMenuClick={toggleMenu} />
      
      <div className="bg-site-theme">
        <Experience />
        <About />
        <Reviews />
        <Contact />
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
          >
            {/* Close Button Overlay */}
            <div className="sticky top-0 w-full z-[110] px-6 py-6 flex justify-end pointer-events-none">
              <button
                onClick={toggleMenu}
                className="pointer-events-auto p-4 bg-brand-primary text-white rounded-full hover:bg-brand-accent transition-all duration-500 shadow-2xl hover:scale-110 active:scale-95 group"
              >
                <X size={32} className="group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            <div className="-mt-20">
               <MenuSection />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
