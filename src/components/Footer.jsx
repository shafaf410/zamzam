"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Globe, Share2, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const Footer = () => {
  const { language, isArabic } = useLanguage();
  const t = translations[language].footer;
  const arabicStyle = isArabic ? { fontFamily: "var(--font-arabic)" } : {};

  return (
    <footer className="bg-black-pure pt-20 md:pt-40 pb-20 border-t border-gold/10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-maroon/5 blur-[150px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-24 mb-16 md:mb-32 ${isArabic ? "text-right" : ""}`}>
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 space-y-12">
            <Link href="/" className="group flex flex-col">
              <span className="text-3xl font-luxury font-bold text-white tracking-[0.3em] leading-none" style={arabicStyle}>
                {isArabic ? "زم زم" : "ZAM ZAM"}
              </span>
              <span className="text-[10px] font-sans font-black text-gold tracking-[0.7em] mt-3" style={arabicStyle}>
                {isArabic ? "المندي" : "MANDI"}
              </span>
            </Link>
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm italic" style={isArabic ? { ...arabicStyle, fontStyle: "normal" } : {}}>
              {t.tagline}
            </p>
            <div className={`flex gap-8 ${isArabic ? "justify-end" : ""}`}>
              {[Globe, Share2, MessageCircle].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="text-white/40 hover:text-gold transition-colors drop-shadow-[0_0_10px_rgba(212,175,55,0)] hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-10">
            <h4 className="text-white font-bold tracking-[0.3em] text-[10px] uppercase" style={isArabic ? { ...arabicStyle, letterSpacing: "0.1em" } : {}}>
              {t.collectionTitle}
            </h4>
            <div className="flex flex-col gap-6">
              {t.links.map((link, i) => (
                <Link key={i} href="#" className="text-white/40 hover:text-gold transition-colors text-sm font-light" style={arabicStyle}>
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-10">
            <h4 className="text-white font-bold tracking-[0.3em] text-[10px] uppercase" style={isArabic ? { ...arabicStyle, letterSpacing: "0.1em" } : {}}>
              {t.contactTitle}
            </h4>
            <div className="space-y-8">
              <div className={`flex items-start gap-4 ${isArabic ? "flex-row-reverse" : ""}`}>
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <p className="text-white/40 text-sm leading-relaxed font-light" style={arabicStyle}>
                  {translations[language].contact.locationAddress}
                </p>
              </div>
              <div className={`flex items-center gap-4 ${isArabic ? "flex-row-reverse" : ""}`}>
                <Phone size={18} className="text-gold flex-shrink-0" />
                <p className="text-white/40 text-sm font-light">
                  <a href="tel:+96890900763" className="hover:text-gold transition-colors">+968 9090 0763</a> / <a href="tel:+96890900764" className="hover:text-gold transition-colors">+968 9090 0764</a>
                </p>
              </div>
              <div className={`flex items-center gap-4 ${isArabic ? "flex-row-reverse" : ""}`}>
                <Mail size={18} className="text-gold flex-shrink-0" />
                <p className="text-white/40 text-sm font-light">
                  <a href="mailto:zamzammandi@gmail.com" className="hover:text-gold transition-colors">zamzammandi@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 ${isArabic ? "md:flex-row-reverse" : ""}`}>
          <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase font-medium" style={isArabic ? { ...arabicStyle, letterSpacing: "0.05em" } : {}}>
            {t.copyright}
          </p>
          <div className="flex gap-12">
            <Link href="#" className="text-white/20 hover:text-gold text-[10px] tracking-[0.2em] uppercase transition-colors" style={isArabic ? { ...arabicStyle, letterSpacing: "0.05em" } : {}}>
              {t.privacy}
            </Link>
            <Link href="#" className="text-white/20 hover:text-gold text-[10px] tracking-[0.2em] uppercase transition-colors" style={isArabic ? { ...arabicStyle, letterSpacing: "0.05em" } : {}}>
              {t.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
