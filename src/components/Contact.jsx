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
              className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-12"
            >
              Visit <span className="text-maroon">Us</span>
            </motion.h2>

            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center text-gold group-hover:bg-maroon group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Location</h4>
                  <p className="text-white/60 leading-relaxed">Al Khuwair Street, Muscat, Sultanate of Oman</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center text-gold group-hover:bg-maroon group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Phone</h4>
                  <p className="text-white/60">+968 2400 0000</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center text-gold group-hover:bg-maroon group-hover:text-white transition-all duration-300">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Opening Hours</h4>
                  <p className="text-white/60">Mon - Sun: 12:00 PM - 12:00 AM</p>
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

          {/* Embedded Map Placeholder */}
          <div className="lg:w-2/3 h-[500px] relative rounded-3xl overflow-hidden border border-gold/10 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Using an iframe with a custom dark theme for the map if possible, but standard is fine */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14629.475141695773!2d58.4231889!3d23.5911466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff60e7e17c8d%3A0x7d6f5f3e5c5c5c5c!2sAl%20Khuwair%2C%20Muscat!5e0!3m2!1sen!2som!4v1650000000000!5m2!1sen!2som" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute inset-0 pointer-events-none border-[20px] border-black-pure/50 md:border-[40px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
