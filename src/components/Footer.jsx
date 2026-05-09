"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Globe, Share2, MessageCircle, ChevronUp, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-light pt-32 pb-16 border-t border-brand-primary/5 relative overflow-hidden">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 lg:gap-32 mb-24">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 space-y-10">
            <Link href="/" className="group flex flex-col">
              <span className="text-4xl font-serif font-bold text-brand-primary tracking-widest leading-none">
                ZAM ZAM
              </span>
              <span className="text-[10px] font-sans font-black text-brand-accent tracking-[0.8em] mt-4 uppercase">
                MANDI
              </span>
            </Link>
            <p className="text-brand-primary/40 text-lg font-light leading-relaxed max-w-sm">
              The most authentic Arabian dining experience in the heart of Oman. Honoring tradition, one plate at a time.
            </p>
            <div className="flex gap-8">
              {[Globe, Share2, MessageCircle].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="text-brand-primary/30 hover:text-brand-accent transition-all duration-500"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter / Subscription */}
          <div className="space-y-10">
            <h4 className="text-brand-primary font-black tracking-[0.4em] text-[10px] uppercase">Join Our Circle</h4>
            <div className="space-y-6">
              <p className="text-brand-primary/40 text-[10px] font-black tracking-widest uppercase leading-relaxed">
                Receive culinary stories from our kitchen.
              </p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white border border-brand-primary/5 rounded-full px-8 py-5 text-[10px] uppercase tracking-widest focus:outline-none focus:border-brand-accent/50 transition-all shadow-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center hover:bg-brand-accent transition-all duration-500">
                  <ArrowRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-10">
            <h4 className="text-brand-primary font-black tracking-[0.4em] text-[10px] uppercase">Contact Us</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin size={18} strokeWidth={1.5} className="text-brand-accent mt-1 flex-shrink-0" />
                <p className="text-brand-primary/60 text-sm leading-relaxed font-light">
                  Al Khuwair Street, <br />Muscat, Oman
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} strokeWidth={1.5} className="text-brand-accent flex-shrink-0" />
                <p className="text-brand-primary/60 text-sm font-light">+968 2400 0000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-brand-primary/5 flex flex-col md:flex-row justify-between items-center gap-8 relative">
          <p className="text-brand-primary/20 text-[10px] tracking-[0.4em] uppercase font-black">
            &copy; 2024 Zam Zam Mandi.
          </p>
          
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -5 }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-brand-primary/5 rounded-full shadow-lg flex items-center justify-center text-brand-primary hover:text-brand-accent transition-all duration-500"
          >
            <ChevronUp size={20} strokeWidth={1.5} />
          </motion.button>

          <div className="flex gap-12">
            <Link href="#" className="text-brand-primary/20 hover:text-brand-accent text-[10px] tracking-[0.4em] uppercase font-black transition-colors">Privacy</Link>
            <Link href="#" className="text-brand-primary/20 hover:text-brand-accent text-[10px] tracking-[0.4em] uppercase font-black transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
