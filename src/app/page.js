"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroV3 from "@/components/HeroV3";
import EditorialStory from "@/components/EditorialStory";
import MenuPreview from "@/components/MenuPreview";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// The SignatureStickyScroll is kept but will be updated to match the light theme

export default function Home() {
  return (
    <main className="relative bg-brand-light">
      <LoadingScreen />
      <Navbar />
      
      {/* Home Section - Initially standalone */}
      <HeroV3 />
      
      {/* Editorial Content Sections */}
      <div className="relative z-10 bg-brand-light">
        <EditorialStory />
        
        {/* Gallery Section with Updated Theme */}
        
        {/* Other Sections */}
        <MenuPreview />
        <Gallery />
        <Contact />
        <Footer />
      </div>

      <WhatsAppButton />
    </main>
  );
}
