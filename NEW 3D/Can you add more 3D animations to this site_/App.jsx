import React from 'react';
import FloatingSpices3D from './components/FloatingSpices3D';
import Card3DTilt from './components/Card3DTilt';
import RotatingPlate3D from './components/RotatingPlate3D';
import Text3D from './components/Text3D';
import ParallaxScroll from './components/ParallaxScroll';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-600 bg-clip-text text-transparent">
            🔥 Zam Zam Mandi - 3D Animations Showcase
          </h1>
          <p className="text-gray-400 mt-2">Advanced 3D effects for your restaurant website</p>
        </div>
      </header>

      {/* Hero Section with 3D Text */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ParallaxScroll offset={50}>
            <div className="mb-12">
              <Text3D text="AUTHENTIC ARABIAN" />
            </div>
          </ParallaxScroll>
        </div>
      </section>

      {/* Floating Spices Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-950/20 to-amber-950/20 border-y border-orange-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">🌶️ Floating Spices Animation</h2>
            <p className="text-gray-400 text-lg">
              Interactive 3D spices floating in space. Perfect for the heritage section of your website.
            </p>
          </div>
          <ParallaxScroll offset={100}>
            <FloatingSpices3D />
          </ParallaxScroll>
          <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-orange-500/20">
            <h3 className="font-bold text-orange-400 mb-2">Use Case:</h3>
            <p className="text-gray-300">
              Add this to your "Spice Mastery" or heritage section. The rotating spices represent the authentic 
              hand-ground spices sourced from traditional markets of Oman.
            </p>
          </div>
        </div>
      </section>

      {/* 3D Tilting Cards Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">🎴 3D Tilting Cards</h2>
            <p className="text-gray-400 text-lg">
              Interactive cards that tilt and shine based on mouse position. Great for menu items and dishes.
            </p>
          </div>
          <ParallaxScroll offset={80}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card3DTilt className="h-80">
                <div className="bg-gradient-to-br from-orange-600 to-amber-700 rounded-lg p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Chicken Mandi</h3>
                    <p className="text-orange-100 text-sm">Slow-cooked Arabian rice with fire-roasted chicken</p>
                  </div>
                  <div className="text-3xl font-bold text-amber-300">OMR 4.500</div>
                </div>
              </Card3DTilt>

              <Card3DTilt className="h-80">
                <div className="bg-gradient-to-br from-red-700 to-orange-700 rounded-lg p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Mutton Shuwa</h3>
                    <p className="text-red-100 text-sm">Authentic Omani lamb slow-cooked in underground clay oven</p>
                  </div>
                  <div className="text-3xl font-bold text-amber-300">OMR 6.500</div>
                </div>
              </Card3DTilt>

              <Card3DTilt className="h-80">
                <div className="bg-gradient-to-br from-amber-700 to-yellow-700 rounded-lg p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Mixed BBQ Platter</h3>
                    <p className="text-amber-100 text-sm">Premium selection of grilled lamb, chicken, and kababs</p>
                  </div>
                  <div className="text-3xl font-bold text-amber-300">OMR 8.000</div>
                </div>
              </Card3DTilt>
            </div>
          </ParallaxScroll>
          <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-orange-500/20">
            <h3 className="font-bold text-orange-400 mb-2">Use Case:</h3>
            <p className="text-gray-300">
              Replace your current menu item cards with these 3D tilting cards. The interactive effect engages 
              users and makes the menu items feel more premium and interactive.
            </p>
          </div>
        </div>
      </section>

      {/* Rotating Plate Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-950/20 to-orange-950/20 border-y border-orange-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">🍽️ Rotating Plate Animation</h2>
            <p className="text-gray-400 text-lg">
              A beautiful 3D rotating plate with metallic finish and decorative patterns.
            </p>
          </div>
          <ParallaxScroll offset={100}>
            <RotatingPlate3D />
          </ParallaxScroll>
          <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-orange-500/20">
            <h3 className="font-bold text-orange-400 mb-2">Use Case:</h3>
            <p className="text-gray-300">
              Perfect for your hero section or as a background element. The rotating plate symbolizes the 
              traditional serving of mandi and shuwa, adding visual interest to your homepage.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">📋 Implementation Guide</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 border border-orange-500/20 rounded-lg p-8">
              <h3 className="text-xl font-bold text-orange-400 mb-4">1. Install Dependencies</h3>
              <pre className="bg-black/50 p-4 rounded text-sm text-green-400 overflow-x-auto">
{`npm install three framer-motion gsap
npm install @react-three/fiber
npm install @react-three/drei`}
              </pre>
            </div>

            <div className="bg-gray-900/50 border border-orange-500/20 rounded-lg p-8">
              <h3 className="text-xl font-bold text-orange-400 mb-4">2. Import Components</h3>
              <pre className="bg-black/50 p-4 rounded text-sm text-green-400 overflow-x-auto">
{`import FloatingSpices3D from 
  './components/FloatingSpices3D'
import Card3DTilt from 
  './components/Card3DTilt'
import RotatingPlate3D from 
  './components/RotatingPlate3D'`}
              </pre>
            </div>

            <div className="bg-gray-900/50 border border-orange-500/20 rounded-lg p-8">
              <h3 className="text-xl font-bold text-orange-400 mb-4">3. Use in Your Pages</h3>
              <pre className="bg-black/50 p-4 rounded text-sm text-green-400 overflow-x-auto">
{`<FloatingSpices3D />

<Card3DTilt>
  {/* Your content */}
</Card3DTilt>

<RotatingPlate3D />`}
              </pre>
            </div>

            <div className="bg-gray-900/50 border border-orange-500/20 rounded-lg p-8">
              <h3 className="text-xl font-bold text-orange-400 mb-4">4. Customize</h3>
              <pre className="bg-black/50 p-4 rounded text-sm text-green-400 overflow-x-auto">
{`// Change colors, speeds, sizes
// Adjust animations timing
// Add your own spices/items
// Modify text content`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features Summary */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-950/20 to-amber-950/20 border-y border-orange-500/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">✨ Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Interactive',
                desc: 'Mouse-driven interactions that engage users'
              },
              {
                icon: '⚡',
                title: 'Performance',
                desc: 'Optimized for smooth 60fps animations'
              },
              {
                icon: '🎨',
                title: 'Customizable',
                desc: 'Easy to modify colors, speeds, and effects'
              },
              {
                icon: '📱',
                title: 'Responsive',
                desc: 'Works on desktop, tablet, and mobile'
              },
              {
                icon: '🔧',
                title: 'Reusable',
                desc: 'Component-based architecture'
              },
              {
                icon: '🚀',
                title: 'Modern',
                desc: 'Built with latest React and Three.js'
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-900/50 border border-orange-500/20 rounded-lg p-6">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-orange-400 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-orange-500/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p className="mb-4">Ready to enhance your Zam Zam Mandi website?</p>
          <p className="text-sm">Copy these components to your project and customize them to match your brand</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
