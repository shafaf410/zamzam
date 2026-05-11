import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPageSection from "@/components/AboutPageSection";

export const metadata = {
  title: "About Us | Zam Zam Mandi",
  description: "Learn about the history and heritage of Zam Zam Mandi restaurant.",
};

export default function AboutPage() {
  return (
    <main className="relative bg-black-pure min-h-screen">
      <Navbar />
      <div className="pt-24">
        <AboutPageSection />
      </div>
      <Footer />
    </main>
  );
}
