"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Share2, Globe, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="location" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Details */}
          <div className="lg:w-1/3">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold uppercase tracking-[0.3em] text-sm font-bold"
            >
              Get in Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-luxury font-bold text-white mt-4 mb-12"
            >
              Visit <span className="text-gold">Us</span>
            </motion.h2>

            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <a 
                  href="https://www.google.com/maps/place/ZamZam+Mandi+Restaurant+Ruwi+%D9%85%D8%B7%D8%B9%D9%85+%D8%B2%D9%85%D8%B2%D9%85+%D8%A7%D9%84%D9%85%D9%86%D8%AF%D9%8I+%D8%B1%D9%88%D9%8I%E2%80%AD/@23.5946661,58.550766,17z/data=!3m1!4b1!4m6!3m5!1s0x3e91f9e8a89a0a69:0x49105cb7f0575bd3!8m2!3d23.5946661!4d58.550766!16s%2Fg%2F11j1hblb7k!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass-dark flex items-center justify-center text-gold group-hover:bg-maroon group-hover:text-white transition-all duration-300 flex-shrink-0 cursor-pointer"
                >
                  <MapPin size={24} />
                </a>
                <div>
                  <h4 className="text-white font-bold mb-2">Location</h4>
                  <a 
                    href="https://www.google.com/maps/place/ZamZam+Mandi+Restaurant+Ruwi+%D9%85%D8%B7%D8%B9%D9%85+%D8%B2%D9%85%D8%B2%D9%85+%D8%A7%D9%84%D9%85%D9%86%D8%AF%D9%8I+%D8%B1%D9%88%D9%8I%E2%80%AD/@23.5946661,58.550766,17z/data=!3m1!4b1!4m6!3m5!1s0x3e91f9e8a89a0a69:0x49105cb7f0575bd3!8m2!3d23.5946661!4d58.550766!16s%2Fg%2F11j1hblb7k!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 leading-relaxed hover:text-gold transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-gold"
                  >
                    Ruwi MBD, Way No 3505, Opp Oman Development Bank
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center text-gold group-hover:bg-maroon group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Phone</h4>
                  <p className="text-white/60 flex flex-col sm:flex-row gap-1 sm:gap-3">
                    <a href="tel:+96890900763" className="hover:text-gold transition-colors">+968 9090 0763</a>
                    <span className="hidden sm:inline opacity-30">|</span>
                    <a href="tel:+96890900764" className="hover:text-gold transition-colors">+968 9090 0764</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center text-gold group-hover:bg-maroon group-hover:text-white transition-all duration-300">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Opening Hours</h4>
                  <p className="text-white/60">Sunday to Saturday: 11:00 AM - 12:00 AM</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center text-gold group-hover:bg-maroon group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Email</h4>
                  <a href="mailto:zamzammandi@gmail.com" className="text-white/60 hover:text-gold transition-colors duration-300">
                    zamzammandi@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-all">
                <Share2 size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-all">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Embedded Map Container - Clickable Rectangle */}
          <a 
            href="https://www.google.com/maps/place/ZamZam+Mandi+Restaurant+Ruwi+%D9%85%D8%B7%D8%B9%D9%85+%D8%B2%D9%85%D8%B2%D9%85+%D8%A7%D9%84%D9%85%D9%86%D8%AF%D9%8I+%D8%B1%D9%88%D9%8I%E2%80%AD/@23.5946661,58.550766,17z/data=!3m1!4b1!4m6!3m5!1s0x3e91f9e8a89a0a69:0x49105cb7f0575bd3!8m2!3d23.5946661!4d58.550766!16s%2Fg%2F11j1hblb7k!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:w-2/3 h-[300px] md:h-[500px] relative rounded-3xl overflow-hidden border border-gold/10 grayscale hover:grayscale-0 transition-all duration-700 block cursor-pointer"
          >
            <iframe 
              src="https://maps.google.com/maps?q=ZamZam%20Mandi%20Restaurant%20Ruwi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, pointerEvents: "none" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute inset-0 pointer-events-none border-[10px] md:border-[40px] border-black-pure/50" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
