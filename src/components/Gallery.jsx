"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/MANDI/FULL CHICKEN MANDI WITH RICE.jpeg", alt: "Chicken Mandi" },
  { src: "/images/GRILLS/MIXED GRILL.jpeg", alt: "Mixed Grill" },
  { src: "/images/MANDI/HALF CHICKEN SHUWA WITH RICE.jpg", alt: "Mutton Shuwa" },
  { src: "/images/JUICES/MANGO JUICE.jpeg", alt: "Mango Juice" },
  { src: "/images/MANDI/HALF CHICKEN MADFOON WITH RICE.jpg", alt: "Madfoon" },
  { src: "/images/GRILLS/GRILLS - MUTTON TIKKA.jpeg", alt: "Mutton Tikka" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-spacing bg-white">
      <div className="container-editorial">
        <div className="text-center mb-24">
          <span className="text-brand-accent font-sans font-black text-[10px] tracking-[0.6em] uppercase block mb-6">Visual Journey</span>
          <h2 className="text-5xl md:text-7xl font-serif text-brand-primary">Cinematic <span className="text-brand-accent italic">Gallery</span></h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-12 space-y-12">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group overflow-hidden rounded-[40px] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={800}
                  className="w-full object-cover transition-all duration-[2.5s] ease-out group-hover:scale-110"
                />
                {/* Luxury Editorial Overlay */}
                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="text-white font-black text-[10px] tracking-[0.6em] uppercase border border-white/40 px-10 py-4 rounded-full">
                    View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
