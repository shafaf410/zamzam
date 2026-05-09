import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureDishes from "@/components/SignatureDishes";
import Experience from "@/components/Experience";
import MenuPreview from "@/components/MenuPreview";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";
import SectionDivider from "@/components/SectionDivider";
import { OrnamentalPattern, FloatingShape } from "@/components/DecorativeElements";

export default function Home() {
  return (
    <main className="relative bg-black-pure">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <div className="bg-site-theme relative">
        <OrnamentalPattern className="opacity-10" />
        <FloatingShape type="circle" color="gold" delay={0} className="top-1/4 left-10" />
        <FloatingShape type="square" color="maroon" delay={2} className="top-3/4 right-10" />
        
        <SignatureDishes />
        <SectionDivider type="wave" color="gold" className="-mt-10" />
        
        <Experience />
        <SectionDivider type="line" className="my-0" />
        
        <About />
        <SectionDivider type="wave" color="maroon" className="-mt-10" />
        
        <MenuPreview />
        <SectionDivider type="line" className="my-0" />
        
        <Gallery />
        <SectionDivider type="wave" color="gold" className="-mt-10" />
        
        <Reviews />
        <SectionDivider type="line" className="my-0" />
        
        <Contact />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
