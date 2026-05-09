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

export default function Home() {
  return (
    <main className="relative bg-black-pure">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <div className="bg-site-theme">
        <SignatureDishes />
        <Experience />
        <About />
        <MenuPreview />
        <Gallery />
        <Reviews />
        <Contact />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
