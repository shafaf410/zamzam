"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <defs>
      <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#feda75" />
        <stop offset="20%" stopColor="#fa7e1e" />
        <stop offset="45%" stopColor="#d62976" />
        <stop offset="70%" stopColor="#962fbf" />
        <stop offset="100%" stopColor="#4f5bd5" />
      </linearGradient>
    </defs>
    <path fill="url(#ig-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

/* Dining Collection Data */
const diningCollection = [
  { image: "/images/menu/mutton_haneeth.png", title: "Mutton Haneeth", tag: "Heritage" },
  { image: "/images/menu/mutton_shuwa.png", title: "Mutton Shuwa", tag: "Slow Cooked" },
  { image: "/images/menu/mutton_mandi.jpg", title: "Mutton Mandi", tag: "Signature" },
  { image: "/images/menu/CHICKEN MANDI HALF.jpeg", title: "Chicken Mandi", tag: "Classic" },
  { image: "/images/menu/beef_haneeth.jpg", title: "Beef Haneeth", tag: "Premium" },
  { image: "/images/menu/mix_meat_platter.jpg", title: "Mix Meat Platter", tag: "Grand Feast" },
  { image: "/images/menu/CHICKEN DUM BIRYANI 1.jpg", title: "Dum Biryani", tag: "Aromatic" },
  { image: "/images/menu/kunafa.png", title: "Kunafa", tag: "Dessert" },
  { image: "/images/menu/mutton_madfoon.jpg", title: "Mutton Madfoon", tag: "Traditional" },
  { image: "/images/menu/mixed_grill_large.jpg", title: "Mixed Grill", tag: "From the Flame" },
];

/* Infinite Sliding Row */
function SlidingRow({ items, direction = "left", speed = 40 }) {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationId;
    let pos = 0;
    const totalWidth = el.scrollWidth / 2;

    function step() {
      if (!isHovered) {
        pos += direction === "left" ? 0.5 : -0.5;
        if (direction === "left" && pos >= totalWidth) pos = 0;
        if (direction === "right" && pos <= -totalWidth) pos = 0;
      }
      el.style.transform = `translateX(${direction === "left" ? -pos : pos}px)`;
      animationId = requestAnimationFrame(step);
    }
    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [direction, isHovered]);

  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={scrollRef} className="flex gap-6 w-max will-change-transform">
        {doubled.map((item, idx) => (
          <div
            key={idx}
            className="group relative w-[280px] sm:w-[320px] h-[380px] sm:h-[420px] rounded-[1.5rem] overflow-hidden border border-white/5 bg-[#1A0006] shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(212,164,55,0.08)] hover:-translate-y-1 transition-all duration-500 flex-shrink-0 cursor-pointer"
          >
            <div className="absolute inset-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0004] via-[#0D0004]/40 to-transparent group-hover:from-[#0D0004]/90 transition-all duration-500" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="text-[#D4A437] text-[9px] font-bold tracking-[0.3em] uppercase block mb-2">
                {item.tag}
              </span>
              <h3 className="text-[#F8F3EA] text-xl sm:text-2xl font-marcellus tracking-wider group-hover:text-[#D4A437] transition-colors duration-500">
                {item.title}
              </h3>
              <div className="h-[1px] w-6 bg-[#D4A437]/40 mt-3 transition-all duration-500 group-hover:w-full group-hover:bg-[#D4A437]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SocialPage() {
  const topHalf = diningCollection.slice(0, 5);
  const bottomHalf = diningCollection.slice(5, 10);

  return (
    <main className="bg-[#1A0006] min-h-screen text-[#F8F3EA] selection:bg-[#D4A437] selection:text-[#1A0006] overflow-x-hidden font-sans relative">
      <Navbar />

      {/* Background */}
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

      {/* ─── Hero Section: Social Connect ─── */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 sm:px-12">
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-[#F8F3EA]/60 text-xs font-light tracking-[0.2em] uppercase mb-12"
        >
          <Link href="/" className="hover:text-[#D4A437] transition-colors">Home</Link>
          <span className="opacity-40">/</span>
          <span className="text-[#D4A437]">Connect</span>
        </motion.div>

        {/* GooeyText Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <GooeyText
            texts={["Connect To Us", "Follow Us", "Stay Close"]}
            morphTime={1.5}
            cooldownTime={0.5}
            className="h-[60px] md:h-[100px] w-full"
            textClassName="text-5xl md:text-8xl font-marcellus text-white tracking-wide"
          />
        </motion.div>

        {/* OG Icon Buttons */}
        <div className="flex items-center justify-center gap-10 sm:gap-16">
          <motion.a
            href="https://www.instagram.com/zamzammandi/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_rgba(214,41,118,0.15)] hover:border-white/25 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
          >
            <InstagramIcon className="w-12 h-12 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />
          </motion.a>

          <motion.a
            href="https://www.facebook.com/zamzammandii/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_rgba(24,119,242,0.15)] hover:border-white/25 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
          >
            <FacebookIcon className="w-12 h-12 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />
          </motion.a>
        </div>
      </section>

      {/* ─── The Dining Collection ─── */}
      <section className="relative z-10 py-28 sm:py-36">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-20 px-6"
        >
          <div className="flex items-center gap-4 justify-center mb-5">
            <div className="h-[1px] w-10 bg-[#D4A437]/30" />
            <span className="text-[#D4A437] uppercase tracking-[0.4em] text-[9px] font-bold">Culinary Artistry</span>
            <div className="h-[1px] w-10 bg-[#D4A437]/30" />
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-marcellus text-white tracking-wide">
            The Dining <span className="text-[#D4A437] italic">Collection</span>
          </h2>
        </motion.div>

        {/* Sliding Rows */}
        <div className="space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <SlidingRow items={topHalf} direction="left" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <SlidingRow items={bottomHalf} direction="right" />
          </motion.div>
        </div>
      </section>

      {/* ─── Back Link ─── */}
      <div className="relative z-10 pb-20 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-4 text-white/40 hover:text-[#D4A437] transition-colors text-[10px] font-bold tracking-[0.4em] uppercase group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>

      {/* ─── Footer ─── */}
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
