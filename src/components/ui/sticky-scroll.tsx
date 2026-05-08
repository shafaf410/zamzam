'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

const SignatureStickyScroll = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  return (
    <ReactLenis root>
      <div ref={ref}>
          <section className='text-white h-screen w-full bg-black-pure grid place-content-center sticky top-0 overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 bg-[linear-gradient(to_right,#d4af371a_1px,transparent_1px),linear-gradient(to_bottom,#d4af371a_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <div className="relative z-10 text-center space-y-6">
              <span className="text-gold font-sans font-bold text-[10px] tracking-[0.5em] uppercase block mb-4 animate-pulse">
                Culinary Masterpieces
              </span>
              <h1 className='text-5xl md:text-7xl lg:text-8xl font-luxury font-medium text-white tracking-tight leading-[1.1]'>
                Our Signature <br />
                <span className="text-gold italic">Selections</span>
              </h1>
              <p className="text-white/40 text-sm md:text-base tracking-[0.2em] font-light uppercase">
                Scroll to explore our heritage 👇
              </p>
            </div>
          </section>

        <section className='text-white w-full bg-black-pure px-4 md:px-8 pb-32'>
          <div className='grid grid-cols-12 gap-4'>
            {/* Column 1 */}
            <div className='grid gap-4 col-span-12 md:col-span-4'>
              <figure className='w-full group overflow-hidden rounded-2xl border border-white/5 relative'>
                <img
                  src='/images/MANDI/FULL CHICKEN MANDI WITH RICE.jpeg'
                  alt='Authentic Mandi'
                  className='transition-all duration-700 w-full h-[500px] align-bottom object-cover group-hover:scale-110'
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black-pure to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-gold text-xs font-bold tracking-widest uppercase">Traditional Mandi</p>
                </div>
              </figure>
              <figure className='w-full group overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='/images/MANDI/FULL CHICKEN MANDI WITH RICE_1.jpeg'
                  alt='Premium Chicken Mandi'
                  className='transition-all duration-700 w-full h-[400px] align-bottom object-cover group-hover:scale-110'
                />
              </figure>
              <figure className='w-full group overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='/images/spices_mandi.png'
                  alt='Arabian Spices'
                  className='transition-all duration-700 w-full h-[600px] align-bottom object-cover group-hover:scale-110'
                />
              </figure>
              <figure className='w-full group overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='/images/MANDI/HALF CHICKEN MADFOON WITH RICE.jpg'
                  alt='Chicken Madfoon'
                  className='transition-all duration-700 w-full h-[450px] align-bottom object-cover group-hover:scale-110'
                />
              </figure>
            </div>

            {/* Column 2 (Sticky) */}
            <div className='sticky top-0 h-screen w-full col-span-12 md:col-span-4 gap-4 grid grid-rows-3 py-4'>
              <figure className='w-full h-full overflow-hidden rounded-2xl border border-gold/20 shadow-[0_0_30px_rgba(212,175,55,0.1)]'>
                <img
                  src='/images/MANDI/grill_plate_top.png'
                  alt='Signature Mandi Feast'
                  className='transition-all duration-700 h-full w-full align-bottom object-cover group-hover:scale-110'
                />
              </figure>
              <figure className='w-full h-full overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='/images/MANDI/HALF CHICKEN SHUWA WITH RICE.jpg'
                  alt='Traditional Shuwa'
                  className='transition-all duration-700 h-full w-full align-bottom object-cover'
                />
              </figure>
              <figure className='w-full h-full overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='/images/mandi_plate_top.png'
                  alt='Arabic Rice Specialty'
                  className='transition-all duration-700 h-full w-full align-bottom object-cover'
                />
              </figure>
            </div>

            {/* Column 3 */}
            <div className='grid gap-4 col-span-12 md:col-span-4'>
              <figure className='w-full group overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='/images/GRILLS/GRILLS - CHICKEN TIKKA.jpeg'
                  alt='Chicken Tikka'
                  className='transition-all duration-700 w-full h-[450px] align-bottom object-cover group-hover:scale-110'
                />
              </figure>
              <figure className='w-full group overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='/images/MANDI/HALF GRILLED CHICKEN WITH RICE.jpeg'
                  alt='Grilled Chicken'
                  className='transition-all duration-700 w-full h-[550px] align-bottom object-cover group-hover:scale-110'
                />
              </figure>
              <figure className='w-full group overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='/images/GRILLS/GRILLS - MUTTON KEBAB.jpeg'
                  alt='Mutton Kebab'
                  className='transition-all duration-700 w-full h-[400px] align-bottom object-cover group-hover:scale-110'
                />
              </figure>
              <figure className='w-full group overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='/images/grill_plate_top.png'
                  alt='The Feast Platter'
                  className='transition-all duration-700 w-full h-[500px] align-bottom object-cover group-hover:scale-110'
                />
              </figure>
            </div>
          </div>
        </section>

      </div>
    </ReactLenis>
  );
});

SignatureStickyScroll.displayName = 'SignatureStickyScroll';

export default SignatureStickyScroll;
