"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Share2, Globe, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="location" className="section-spacing bg-brand-light relative">
      <div className="container-editorial">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
          {/* Contact Details */}
          <div className="lg:w-1/3">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-accent uppercase tracking-[0.6em] text-[10px] font-black"
            >
              Get in Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif text-brand-primary mt-6 mb-16"
            >
              Visit <span className="text-brand-accent italic">Our Space</span>
            </motion.h2>

            <div className="space-y-12">
              <div className="flex gap-8 items-start group">
                <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-700 ease-out">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-brand-primary font-bold tracking-widest text-[10px] uppercase mb-3">Location</h4>
                  <p className="text-brand-primary/60 text-lg font-light leading-relaxed">Al Khuwair Street, Muscat, <br />Sultanate of Oman</p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-700 ease-out">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-brand-primary font-bold tracking-widest text-[10px] uppercase mb-3">Phone</h4>
                  <p className="text-brand-primary/60 text-lg font-light leading-relaxed">+968 2400 0000</p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-700 ease-out">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-brand-primary font-bold tracking-widest text-[10px] uppercase mb-3">Opening Hours</h4>
                  <p className="text-brand-primary/60 text-lg font-light leading-relaxed">Mon - Sun: 12:00 PM - 12:00 AM</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-brand-primary/10 flex items-center justify-center text-brand-primary/40 hover:text-brand-accent hover:border-brand-accent transition-all duration-500">
                <Share2 size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-brand-primary/10 flex items-center justify-center text-brand-primary/40 hover:text-brand-accent hover:border-brand-accent transition-all duration-500">
                <Globe size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="lg:w-2/3 h-[600px] relative rounded-[40px] overflow-hidden shadow-2xl border border-brand-light grayscale hover:grayscale-0 transition-all duration-1000 group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14629.475141695773!2d58.4231889!3d23.5911466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff60e7e17c8d%3A0x7d6f5f3e5c5c5c5c!2sAl%20Khuwair%2C%20Muscat!5e0!3m2!1sen!2som!4v1650000000000!5m2!1sen!2som" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Editorial Frame Overlay */}
            <div className="absolute inset-0 pointer-events-none border-[30px] border-brand-light/30 md:border-[50px] group-hover:border-transparent transition-all duration-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
