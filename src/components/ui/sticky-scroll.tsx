'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

const SignatureStickyScroll = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  return (
    <ReactLenis root>
      <main className='bg-black-pure' ref={ref}>
        <div className='wrapper'>
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
        </div>

        <section className='text-white w-full bg-black-pure px-4 md:px-8 pb-32'>
          <div className='grid grid-cols-12 gap-4'>
            {/* Column 1 */}
            <div className='grid gap-4 col-span-12 md:col-span-4'>
              <figure className='w-full group overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800&auto=format&fit=crop'
                  alt='Authentic Mandi'
                  className='transition-all duration-700 w-full h-[500px] align-bottom object-cover group-hover:scale-110'
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black-pure to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-gold text-xs font-bold tracking-widest uppercase">Traditional Mandi</p>
                </div>
              </figure>
              <figure className='w-full group overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop'
                  alt='Roasted Chicken'
                  className='transition-all duration-700 w-full h-[400px] align-bottom object-cover group-hover:scale-110'
                />
              </figure>
              <figure className='w-full group overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800&auto=format&fit=crop'
                  alt='Arabian Spices'
                  className='transition-all duration-700 w-full h-[600px] align-bottom object-cover group-hover:scale-110'
                />
              </figure>
              <figure className='w-full group overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='https://images.unsplash.com/photo-1626700051175-656868edfb95?w=800&auto=format&fit=crop'
                  alt='Mutton Specialties'
                  className='transition-all duration-700 w-full h-[450px] align-bottom object-cover group-hover:scale-110'
                />
              </figure>
            </div>

            {/* Column 2 (Sticky) */}
            <div className='sticky top-0 h-screen w-full col-span-12 md:col-span-4 gap-4 grid grid-rows-3 py-4'>
              <figure className='w-full h-full overflow-hidden rounded-2xl border border-gold/20 shadow-[0_0_30px_rgba(212,175,55,0.1)]'>
                <img
                  src='https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop'
                  alt='Signature Platter'
                  className='transition-all duration-700 h-full w-full align-bottom object-cover group-hover:scale-110'
                />
              </figure>
              <figure className='w-full h-full overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='https://images.unsplash.com/photo-1541518763669-279f00eddc9e?w=800&auto=format&fit=crop'
                  alt='Traditional Dining'
                  className='transition-all duration-700 h-full w-full align-bottom object-cover'
                />
              </figure>
              <figure className='w-full h-full overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='https://images.unsplash.com/photo-1601315379734-225510467b43?w=800&auto=format&fit=crop'
                  alt='Arabic Dips'
                  className='transition-all duration-700 h-full w-full align-bottom object-cover'
                />
              </figure>
            </div>

            {/* Column 3 */}
            <div className='grid gap-4 col-span-12 md:col-span-4'>
              <figure className='w-full group overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?w=800&auto=format&fit=crop'
                  alt='Premium BBQ'
                  className='transition-all duration-700 w-full h-[450px] align-bottom object-cover group-hover:scale-110'
                />
              </figure>
              <figure className='w-full group overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&auto=format&fit=crop'
                  alt='Chef at Work'
                  className='transition-all duration-700 w-full h-[550px] align-bottom object-cover group-hover:scale-110'
                />
              </figure>
              <figure className='w-full group overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&auto=format&fit=crop'
                  alt='Aromatic Rice'
                  className='transition-all duration-700 w-full h-[400px] align-bottom object-cover group-hover:scale-110'
                />
              </figure>
              <figure className='w-full group overflow-hidden rounded-2xl border border-white/5'>
                <img
                  src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop'
                  alt='The Feast'
                  className='transition-all duration-700 w-full h-[500px] align-bottom object-cover group-hover:scale-110'
                />
              </figure>
            </div>
          </div>
        </section>

        <footer className='group bg-black-pure border-t border-gold/10'>
          <h1 className='text-[14vw] leading-[100%] uppercase font-luxury font-bold text-center bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent transition-all ease-linear opacity-20 group-hover:opacity-40 duration-700 py-10'>
            ZAM ZAM
          </h1>
          <div className='bg-black-pure h-20 relative z-10 grid place-content-center rounded-tr-[100px] rounded-tl-[100px] border-t border-gold/5'>
             <span className="text-gold/30 text-[10px] tracking-[1em] uppercase font-bold">Experience the Heritage</span>
          </div>
        </footer>
      </main>
    </ReactLenis>
  );
});

SignatureStickyScroll.displayName = 'SignatureStickyScroll';

export default SignatureStickyScroll;
