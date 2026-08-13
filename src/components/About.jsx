"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const About = () => {
  const { language, isArabic } = useLanguage();
  const t = translations[language].about;
  const arabicStyle = isArabic ? { fontFamily: "var(--font-arabic)" } : {};

  return (
    <section id="about" className="py-16 sm:py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 sm:gap-16 lg:gap-20">
          <div className="w-full lg:flex-1 relative mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-full border-[12px] border-maroon/20 p-4"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/MANDI/FULL CHICKEN MANDI WITH RICE_1.jpeg"
                  alt="Our Story"
                  fill
                  className="object-cover object-[center_35%] scale-[1.4]"
                />
              </div>

              {/* Decorative Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-gold/30 rounded-full scale-110"
              />
            </motion.div>
          </div>

          <div className={`w-full lg:flex-1 text-center lg:text-left ${isArabic ? "lg:text-right" : ""}`}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-gold uppercase tracking-[0.3em] text-[10px] sm:text-sm font-bold"
              style={isArabic ? { ...arabicStyle, letterSpacing: "0.15em" } : {}}
            >
              {t.label}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-marcellus text-white mt-4 mb-6 sm:mb-8 leading-tight"
              style={arabicStyle}
            >
              {t.title} <br className="hidden sm:block" />
              <span className="text-gold">{t.titleHighlight}</span>
            </motion.h2>
            <p className="text-white/70 text-[14px] sm:text-lg mb-6 sm:mb-8 leading-relaxed font-sans font-light px-2 sm:px-0" style={arabicStyle}>
              {t.body1}
            </p>
            <p className="text-white/70 text-[14px] sm:text-lg mb-8 sm:mb-10 leading-relaxed font-sans font-light px-2 sm:px-0" style={arabicStyle}>
              {t.body2}
            </p>

            <div className={`flex items-center justify-center gap-4 sm:gap-10 ${isArabic ? "lg:justify-end" : "lg:justify-start"}`}>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-marcellus text-gold">{t.stat1Value}</div>
                <div className="text-[8px] sm:text-xs text-white/50 uppercase tracking-[0.2em] mt-1" style={isArabic ? { ...arabicStyle, letterSpacing: "0.05em" } : {}}>
                  {t.stat1Label}
                </div>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-marcellus text-gold">{t.stat2Value}</div>
                <div className="text-[8px] sm:text-xs text-white/50 uppercase tracking-[0.2em] mt-1" style={isArabic ? { ...arabicStyle, letterSpacing: "0.05em" } : {}}>
                  {t.stat2Label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
