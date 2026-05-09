"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EditorialStory = () => {
  return (
    <section id="about" className="section-spacing bg-white relative overflow-hidden">
      <div className="container-editorial">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          {/* Visual Side (Overlapping Grid) */}
          <div className="w-full lg:w-1/2 relative min-h-[600px] flex items-center">
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5 }}
               className="relative w-4/5 aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl z-10"
             >
                <Image
                  src="/images/MANDI/HALF CHICKEN MADFOON WITH RICE.jpg"
                  alt="Traditional Cooking"
                  fill
                  className="object-cover"
                />
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, scale: 1.2 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 2, delay: 0.5 }}
               className="absolute top-20 -right-10 w-2/3 aspect-square rounded-[40px] overflow-hidden shadow-xl z-0 border-[10px] border-brand-light"
             >
                <Image
                  src="/images/spices_mandi.png"
                  alt="Authentic Spices"
                  fill
                  className="object-cover"
                />
             </motion.div>
             
             {/* Decorative Flourish */}
             <div className="absolute -bottom-10 -left-10 text-[12vw] font-serif text-brand-muted opacity-20 pointer-events-none select-none z-0">
               Est. 1998
             </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-brand-accent font-sans font-black text-[10px] tracking-[0.6em] uppercase block"
              >
                Our Legacy
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-serif text-brand-primary leading-[1.1] text-balance">
                The Heritage of <br />
                <span className="italic text-brand-accent">Fine Dining</span>
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-brand-primary/60 text-lg font-light leading-relaxed">
                For over two decades, Zam Zam Mandi has been the guardian of authentic Omani culinary traditions. We believe that true flavor is born from patience, hand-selected spices, and ancestral cooking methods.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8">
                <div className="space-y-4">
                  <h4 className="text-brand-primary font-bold tracking-[0.2em] text-[10px] uppercase">Slow-Cooked Mastery</h4>
                  <p className="text-brand-primary/50 text-sm font-light">
                    Our pits are stoked daily with natural fire, slow-cooking Mandi and Shuwa for up to 24 hours to achieve legendary tenderness.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-brand-primary font-bold tracking-[0.2em] text-[10px] uppercase">Hand-Ground Spices</h4>
                  <p className="text-brand-primary/50 text-sm font-light">
                    We source our spices directly from the ancient souks of Oman, blending them by hand to preserve the soul of our recipes.
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="group flex items-center gap-6 text-brand-primary text-[10px] font-black tracking-[0.4em] uppercase"
            >
              Explore Our Story
              <div className="w-16 h-[2px] bg-brand-accent group-hover:w-24 transition-all duration-700" />
            </motion.button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default EditorialStory;
