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
    <section id="gallery" className="py-40 bg-transparent">
      <div className="max-w-[1600px] mx-auto px-10">
        <div className="text-center mb-24">
          <span className="text-gold font-sans font-bold text-[10px] tracking-[0.5em] uppercase block mb-6">Visual Journey</span>
          <h2 className="text-5xl md:text-7xl font-luxury text-white">Cinematic <span className="text-gold italic">Gallery</span></h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-10">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="relative group overflow-hidden rounded-3xl cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={800}
                  className="w-full object-cover transition-luxury duration-[2s] group-hover:scale-110 group-hover:brightness-75"
                />
                {/* Luxury Overlay */}
                <div className="absolute inset-0 bg-black-pure/40 opacity-0 group-hover:opacity-100 transition-luxury flex items-center justify-center">
                  <span className="text-gold font-bold text-[10px] tracking-[0.5em] uppercase border border-gold/40 px-6 py-2 rounded-full">
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
