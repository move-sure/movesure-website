'use client'

import HeroSection from '@/components/sections/herosection'
import FeaturesSection from '@/components/sections/featuressection'
import BenefitsTestimonialsSection from '@/components/sections/testimonial'
import CTASection from '@/components/sections/cta'

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section>
        <HeroSection />
      </section>

      {/* Features Section */}
      <section>
        <FeaturesSection />
      </section>

      {/* Benefits & Testimonials Section */}
      <section>
        <BenefitsTestimonialsSection />
      </section>

      {/* CTA Section */}
      <section>
        <CTASection />
      </section>

      {/* Clean, Performance-Optimized Styles */}
      <style jsx global>{`
        /* Smooth hover effects without custom cursor */
        .card, .tech-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          will-change: transform;
        }
        
        .card:hover, .tech-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        button {
          transition: all 0.3s ease;
          will-change: transform;
        }
        
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
        }
        
        a {
          transition: color 0.3s ease;
        }
        
        a:hover {
          color: #007bff;
        }
        
        /* Ensure smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Optimize rendering */
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}