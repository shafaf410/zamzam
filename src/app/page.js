"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
<<<<<<< HEAD
import Hero from "@/components/Hero";
import SignatureDishes from "@/components/SignatureDishes";
import Experience from "@/components/Experience";
=======
import HeroV3 from "@/components/HeroV3";
import EditorialStory from "@/components/EditorialStory";
>>>>>>> 603819e4593c9751fc3647914eff3f9d3509f29f
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
        
<<<<<<< HEAD
        <SignatureDishes />
        <SectionDivider type="wave" color="gold" className="-mt-10" />
        
        <Experience />
        <SectionDivider type="line" className="my-0" />
        
        <About />
        <SectionDivider type="wave" color="maroon" className="-mt-10" />
=======
        {/* Gallery Section with Updated Theme */}
>>>>>>> 603819e4593c9751fc3647914eff3f9d3509f29f
        
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
