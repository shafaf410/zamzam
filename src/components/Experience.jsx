"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const Experience = () => {
  const { language, isArabic } = useLanguage();
  const t = translations[language].experience;
  const arabicStyle = isArabic ? { fontFamily: "var(--font-arabic)" } : {};

  return (
    <section id="experience" className="bg-transparent py-20 md:py-40 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-maroon/20 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          {/* Visual Storytelling (Left) */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/5"
            >
              <Image
                src="/images/MANDI/HALF CHICKEN SHUWA WITH RICE.jpg"
                alt="Traditional Shuwa Cooking"
                fill
                className="object-cover brightness-75 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/40 via-transparent to-transparent mix-blend-overlay" />
              <div className="absolute inset-0 bg-black-pure/20" />
            </motion.div>
          </div>

          {/* Text Storytelling (Right) */}
          <div className={`w-full lg:w-1/2 space-y-12 ${isArabic ? "text-right" : ""}`}>
            <div className="space-y-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-gold font-sans font-bold text-[10px] tracking-[0.5em] uppercase block"
                style={isArabic ? { ...arabicStyle, letterSpacing: "0.2em" } : {}}
              >
                {t.label}
              </motion.span>
              <h2 className="text-4xl md:text-7xl font-luxury text-white leading-tight" style={arabicStyle}>
                {t.title} <br />
                <span className="text-gold italic">{t.titleHighlight}</span>
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl" style={arabicStyle}>
                {t.body}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="w-10 h-[1px] bg-gold" />
                  <h4 className="text-white font-bold tracking-[0.2em] text-[10px] uppercase" style={isArabic ? { ...arabicStyle, letterSpacing: "0.05em" } : {}}>
                    {t.feature1Title}
                  </h4>
                  <p className="text-white/50 text-xs leading-relaxed" style={arabicStyle}>
                    {t.feature1Body}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-[1px] bg-gold" />
                  <h4 className="text-white font-bold tracking-[0.2em] text-[10px] uppercase" style={isArabic ? { ...arabicStyle, letterSpacing: "0.05em" } : {}}>
                    {t.feature2Title}
                  </h4>
                  <p className="text-white/50 text-xs leading-relaxed" style={arabicStyle}>
                    {t.feature2Body}
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ x: isArabic ? -10 : 10 }}
              className="group flex items-center gap-6 text-gold text-xs font-bold tracking-[0.4em] uppercase"
              style={isArabic ? { ...arabicStyle, letterSpacing: "0.1em" } : {}}
            >
              {t.cta}
              <div className="w-16 h-[1px] bg-gold group-hover:w-24 transition-all duration-500" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
