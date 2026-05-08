"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Globe, Share2, MessageCircle, ChevronUp, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black-pure pt-40 pb-20 border-t border-gold/10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-maroon/5 blur-[150px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 space-y-12">
            <Link href="/" className="group flex flex-col">
              <span className="text-4xl font-luxury font-bold text-gradient tracking-[0.3em] leading-none">
                ZAM ZAM
              </span>
              <span className="text-[10px] font-sans font-bold text-gold tracking-[0.8em] mt-4 opacity-70">
                MANDI
              </span>
            </Link>
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm italic">
              "The most authentic Arabian dining experience in the heart of Oman. Honoring tradition, one plate at a time."
            </p>
            <div className="flex gap-8">
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

          {/* Newsletter / Subscription */}
          <div className="space-y-10">
            <h4 className="text-white font-bold tracking-[0.3em] text-[10px] uppercase">Join Our Circle</h4>
            <div className="space-y-6">
              <p className="text-white/40 text-xs font-light leading-relaxed">
                Subscribe to receive exclusive offers and culinary stories from our kitchen.
              </p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-xs focus:outline-none focus:border-gold/30 transition-luxury"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-gold text-black-pure rounded-full flex items-center justify-center hover:scale-110 transition-luxury">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-10">
            <h4 className="text-white font-bold tracking-[0.3em] text-[10px] uppercase">Contact Us</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <p className="text-white/40 text-sm leading-relaxed font-light">
                  Sultan Qaboos St, Muscat, Oman
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <p className="text-white/40 text-sm font-light">+968 24XXXXXX</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <p className="text-white/40 text-sm font-light">hospitality@zamzammandi.om</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 relative">
          <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase font-medium">
            &copy; 2024 Zam Zam Mandi. All Rights Reserved.
          </p>
          
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -5 }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-black-soft border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black-pure transition-luxury shadow-gold"
          >
            <ChevronUp size={20} />
          </motion.button>

          <div className="flex gap-12">
            <Link href="#" className="text-white/20 hover:text-gold text-[10px] tracking-[0.2em] uppercase transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/20 hover:text-gold text-[10px] tracking-[0.2em] uppercase transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
