"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Globe, Share2, MessageCircle } from "lucide-react";

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
              <span className="text-3xl font-luxury font-bold text-white tracking-[0.3em] leading-none">
                ZAM ZAM
              </span>
              <span className="text-[10px] font-sans font-bold text-gold tracking-[0.7em] mt-3">
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

          {/* Quick Links */}
          <div className="space-y-10">
            <h4 className="text-white font-bold tracking-[0.3em] text-[10px] uppercase">The Collection</h4>
            <div className="flex flex-col gap-6">
              {["Signature Dishes", "Full Menu", "Experience", "Private Dining", "Gallery"].map((link) => (
                <Link key={link} href="#" className="text-white/40 hover:text-gold transition-colors text-sm font-light">
                  {link}
                </Link>
              ))}
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
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase font-medium">
            &copy; 2024 Zam Zam Mandi. All Rights Reserved.
          </p>
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
