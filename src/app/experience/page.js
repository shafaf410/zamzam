"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

export default function ExperiencePage() {
  return (
    <main className="bg-[#1A0006] min-h-screen text-[#F8F3EA] selection:bg-[#D4A437] selection:text-[#1A0006] overflow-x-hidden font-sans relative">
      <Navbar />

      {/* Global Background Texture */}
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

      {/* Main Content */}
      <div className="relative z-10 pt-24 md:pt-32 pb-16">
        <Experience />
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
