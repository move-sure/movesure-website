'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  ArrowRight, 
  Bot, 
  Truck, 
  Zap, 
  Sparkles, 
  Play,
  Shield,
  TrendingUp,
  FileText,
  Route,
  Package,
  BarChart3,
  Clock,
  Users
} from 'lucide-react'
import AnimatedStrip from './strip'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  // Configuration Objects
  const stats = [
    { number: "10K+", label: "Bills Processed", icon: <Truck className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime", icon: <Shield className="w-5 h-5" /> },
    { number: "80%", label: "Cost Reduction", icon: <TrendingUp className="w-5 h-5" /> },
    { number: "24/7", label: "AI Support", icon: <Bot className="w-5 h-5" /> }
  ]

  // Business icons for floating animation
  const businessIcons = [
    { icon: <Truck className="w-6 h-6" />, position: { top: '15%', left: '8%' }, delay: '0s' },
    { icon: <Bot className="w-5 h-5" />, position: { top: '25%', right: '12%' }, delay: '2s' },
    { icon: <Package className="w-7 h-7" />, position: { bottom: '30%', left: '15%' }, delay: '4s' },
    { icon: <FileText className="w-5 h-5" />, position: { top: '45%', right: '20%' }, delay: '1s' },
    { icon: <BarChart3 className="w-6 h-6" />, position: { bottom: '20%', right: '10%' }, delay: '3s' },
    { icon: <Route className="w-6 h-6" />, position: { top: '60%', left: '5%' }, delay: '5s' },
    { icon: <Clock className="w-5 h-5" />, position: { top: '70%', right: '8%' }, delay: '1.5s' },
    { icon: <Users className="w-6 h-6" />, position: { bottom: '50%', right: '25%' }, delay: '2.5s' }
  ]

  // Mouse tracking for subtle effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        })
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/20 pt-16 pb-0 min-h-screen"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Subtle geometric mesh - more visible */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#7559ff" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Business floating icons */}
        {businessIcons.map((item, index) => (
          <div 
            key={index}
            className="absolute text-violet-400/30"
            style={item.position}
          >
            <div 
              className="animate-float"
              style={{ animationDelay: item.delay }}
            >
              {item.icon}
            </div>
          </div>
        ))}
        
        {/* Subtle cursor glow */}
        <div 
          className="absolute w-60 h-60 rounded-full opacity-5 transition-all duration-1000 ease-out blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #7559ff, #8239b5, transparent)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center">
          
          {/* Made in India Badge - Top */}
          <div className="mb-6">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-50 to-white border border-orange-200 rounded-full px-6 py-3 mb-4 shadow-sm">
              <span className="text-2xl">🇮🇳</span>
              <span className="text-orange-700 font-bold text-sm">MADE IN INDIA</span>
            </div>
            
            {/* India's First Badge - Separate line */}
            <div className="block">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-50 to-blue-50 border border-violet-200 rounded-full px-6 py-3 shadow-md text-sm hover:shadow-lg transition-all duration-300">
                <Sparkles className="w-4 h-4 text-violet-600" />
                <span className="text-violet-700 font-bold">INDIA'S FIRST AI STARTUP FOR LOGISTICS & BILLING SOFTWARE</span>
                <Zap className="w-4 h-4 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6 leading-tight">
            <span className="block animate-fade-in-up">Transform Your Business</span>
            <span className="block animate-fade-in-up delay-100">with</span>
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up delay-200 hover:scale-105 transition-transform duration-500">
              MoveSure AI
            </span>
          </h1>

          {/* Simple Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Switch from manual billing to fully automated AI in less than the cost of a print
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in-up delay-400">
            <button className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-12 py-5 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 min-w-[200px]">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center">
                <Zap className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                Start Free Trial
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            
            <button className="group relative overflow-hidden border-2 border-violet-600 text-violet-700 hover:bg-violet-600 hover:text-white px-12 py-5 text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105 bg-white shadow-lg min-w-[200px]">
              <div className="absolute inset-0 bg-violet-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="relative flex items-center justify-center">
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Watch Demo
              </div>
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in-up delay-500">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer border border-transparent hover:border-violet-200">
                <div className="flex justify-center mb-3 text-violet-600 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 group-hover:text-violet-700 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Strip Component */}
      <AnimatedStrip />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(5deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </section>
  )
}