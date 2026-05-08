# 🎯 Implementation Examples for Zam Zam Mandi

This guide provides ready-to-use code examples for integrating 3D animations into your website sections.

---

## 1️⃣ Hero Section with Rotating Plate

```jsx
import RotatingPlate3D from './components/RotatingPlate3D';
import ParallaxScroll from './components/ParallaxScroll';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <RotatingPlate3D />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <ParallaxScroll offset={50}>
          <div>
            <p className="text-orange-400 text-lg mb-4">AUTHENTIC ARABIAN DINING</p>
            <h1 className="text-6xl font-bold text-white mb-6">
              Experience the Taste of<br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-600 bg-clip-text text-transparent">
                Zam Zam Mandi
              </span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
              Slow-cooked Arabian mandi and traditional shuwa crafted with authentic spices and rich flavors.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold">
                VIEW MENU
              </button>
              <button className="px-8 py-3 border-2 border-orange-600 text-orange-400 hover:bg-orange-600/10 rounded-lg font-bold">
                ORDER NOW
              </button>
            </div>
          </div>
        </ParallaxScroll>
      </div>
    </section>
  );
}
```

---

## 2️⃣ Menu Cards Section with 3D Tilt

```jsx
import Card3DTilt from './components/Card3DTilt';
import ParallaxScroll from './components/ParallaxScroll';

export default function MenuSection() {
  const dishes = [
    {
      name: 'Chicken Mandi',
      description: 'Slow-cooked Arabian rice with fire-roasted chicken',
      price: '4.500',
      gradient: 'from-orange-600 to-amber-700',
      category: 'SIGNATURE DISH'
    },
    {
      name: 'Mutton Shuwa',
      description: 'Authentic Omani lamb slow-cooked in underground clay oven',
      price: '6.500',
      gradient: 'from-red-700 to-orange-700',
      category: 'HERITAGE CHOICE'
    },
    {
      name: 'Mixed BBQ Platter',
      description: 'Premium selection of grilled lamb, chicken, and kababs',
      price: '8.000',
      gradient: 'from-amber-700 to-yellow-700',
      category: 'LUXURY GRILLS'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-orange-950/20 to-amber-950/20 border-y border-orange-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Signature Selections</h2>
          <p className="text-gray-400 text-lg">
            Culinary masterpieces crafted with tradition and passion
          </p>
        </div>

        <ParallaxScroll offset={80}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dishes.map((dish, idx) => (
              <Card3DTilt key={idx} className="h-80">
                <div className={`bg-gradient-to-br ${dish.gradient} rounded-lg p-8 h-full flex flex-col justify-between`}>
                  <div>
                    <p className="text-sm font-bold text-orange-200 mb-2">{dish.category}</p>
                    <h3 className="text-2xl font-bold mb-2">{dish.name}</h3>
                    <p className="text-orange-100 text-sm">{dish.description}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-3xl font-bold text-amber-300">OMR {dish.price}</div>
                    <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white font-bold transition">
                      →
                    </button>
                  </div>
                </div>
              </Card3DTilt>
            ))}
          </div>
        </ParallaxScroll>
      </div>
    </section>
  );
}
```

---

## 3️⃣ Heritage Section with Floating Spices

```jsx
import FloatingSpices3D from './components/FloatingSpices3D';
import ParallaxScroll from './components/ParallaxScroll';

export default function HeritageSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: 3D Spices */}
          <ParallaxScroll offset={100}>
            <div className="h-96 rounded-lg overflow-hidden shadow-2xl">
              <FloatingSpices3D />
            </div>
          </ParallaxScroll>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Crafted with<br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-600 bg-clip-text text-transparent">
                Ancient Secrets
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8">
              Our Mandi and Shuwa are not just meals; they are a ritual. For generations, we have honored the traditional methods of Omani craftsmanship, using fire, clay, and time.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-600/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fire-Pit Heritage</h3>
                  <p className="text-gray-400">
                    Underground pit roasting that locks in flavor and moisture through 12-24 hours of slow cooking.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-600/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌶️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Spice Mastery</h3>
                  <p className="text-gray-400">
                    Hand-ground spices sourced from the traditional markets of Oman, blended with ancestral precision.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-8 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold transition">
              Learn More About Our Heritage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 4️⃣ About Section with 3D Text

```jsx
import Text3D from './components/Text3D';
import ParallaxScroll from './components/ParallaxScroll';

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <ParallaxScroll offset={50}>
          <div className="mb-12">
            <Text3D text="AUTHENTICITY IN EVERY GRAIN" />
          </div>
        </ParallaxScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Heritage</h2>
            <p className="text-gray-300 text-lg mb-6">
              Founded with a passion for preserving the true flavors of the Arabian Peninsula, Zam Zam Mandi has become a cornerstone of authentic dining in Oman.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              We believe that great food takes time, patience, and a deep respect for tradition. From our custom-built underground ovens to our hand-picked spice blends from the markets of Sana'a, every detail is designed to transport you to the heart of Arabia.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-orange-600/10 border border-orange-500/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
                <p className="text-gray-300">Years of Tradition</p>
              </div>
              <div className="bg-orange-600/10 border border-orange-500/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                <p className="text-gray-300">Natural Spices</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-lg p-12 border border-orange-500/20">
            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-orange-400 text-xl">✓</span>
                <span className="text-gray-300">Authentic recipes passed down through generations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 text-xl">✓</span>
                <span className="text-gray-300">Premium quality ingredients from local markets</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 text-xl">✓</span>
                <span className="text-gray-300">Traditional cooking methods and techniques</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 text-xl">✓</span>
                <span className="text-gray-300">Exceptional hospitality and service</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 5️⃣ Gallery Section with Parallax

```jsx
import ParallaxScroll from './components/ParallaxScroll';

export default function GallerySection() {
  const galleryItems = [
    { id: 1, title: 'Signature Mandi', image: '/images/mandi-1.jpg' },
    { id: 2, title: 'Grilled Specialties', image: '/images/grill-1.jpg' },
    { id: 3, title: 'Ambiance', image: '/images/ambiance-1.jpg' },
    { id: 4, title: 'Preparation', image: '/images/prep-1.jpg' },
    { id: 5, title: 'Plating', image: '/images/plate-1.jpg' },
    { id: 6, title: 'Dining Experience', image: '/images/dining-1.jpg' },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-orange-950/20 to-amber-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Visual Journey</h2>
          <p className="text-gray-400 text-lg">
            Cinematic gallery showcasing our culinary artistry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <ParallaxScroll key={item.id} offset={50 + idx * 10}>
              <div className="group relative overflow-hidden rounded-lg h-64 cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </ParallaxScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 6️⃣ Testimonials Section

```jsx
import Card3DTilt from './components/Card3DTilt';
import ParallaxScroll from './components/ParallaxScroll';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Ahmed Al-Balushi',
      title: 'Local Foodie',
      quote: 'The most authentic Shuwa I\'ve had in years. The meat literally melts in your mouth, and the ambiance is simply unmatched in Oman.',
      rating: 5
    },
    {
      name: 'Sarah Jenkins',
      title: 'Travel Blogger',
      quote: 'A cinematic dining experience. From the presentation to the rich spices, Zam Zam Mandi is a must-visit for anyone seeking true Arabian luxury.',
      rating: 5
    },
    {
      name: 'Khalid Al-Said',
      title: 'Business Executive',
      quote: 'Perfect for hosting guests. The hospitality is as premium as the food. Truly the gold standard for Mandi restaurants.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Guest Experiences</h2>
          <p className="text-gray-400 text-lg">
            Words of distinction from our valued guests
          </p>
        </div>

        <ParallaxScroll offset={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card3DTilt key={idx} className="h-auto">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 border border-orange-500/20">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-orange-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-orange-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </Card3DTilt>
            ))}
          </div>
        </ParallaxScroll>
      </div>
    </section>
  );
}
```

---

## 7️⃣ Complete Page Example

```jsx
import HeroSection from './sections/HeroSection';
import MenuSection from './sections/MenuSection';
import HeritageSection from './sections/HeritageSection';
import AboutSection from './sections/AboutSection';
import GallerySection from './sections/GallerySection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection />
      <MenuSection />
      <HeritageSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
```

---

## 🎨 Styling Tips

### Gradient Backgrounds
```jsx
className="bg-gradient-to-r from-orange-950/20 to-amber-950/20"
```

### Hover Effects
```jsx
className="hover:scale-110 transition duration-500"
```

### Border Styling
```jsx
className="border border-orange-500/20"
```

### Text Gradients
```jsx
className="bg-gradient-to-r from-orange-400 to-amber-600 bg-clip-text text-transparent"
```

---

## 🚀 Performance Tips

1. **Lazy load sections:**
```jsx
import { lazy, Suspense } from 'react';

const MenuSection = lazy(() => import('./sections/MenuSection'));

<Suspense fallback={<div>Loading...</div>}>
  <MenuSection />
</Suspense>
```

2. **Use React.memo for static components:**
```jsx
export default React.memo(HeritageSection);
```

3. **Optimize images:**
```jsx
<img src={image} alt="description" loading="lazy" />
```

---

Ready to implement? Start with the Hero Section and gradually add other components! 🚀
