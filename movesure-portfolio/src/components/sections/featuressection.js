'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  Bot, 
  Truck, 
  BarChart3, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Zap,
  Play
} from 'lucide-react'

export default function FeaturesSection() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)
  
  const features = [
    {
      icon: <Bot className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "AI-Powered Intelligence",
      subtitle: "Smart Decision Making",
      description: "Advanced machine learning algorithms analyze patterns and optimize routes in real-time, reducing costs by up to 30%.",
      metrics: "30% Cost Reduction",
      color: "from-violet-500 to-purple-600",
      bgColor: "from-violet-50 to-purple-50",
      demoText: "Watch AI optimize routes in real-time"
    },
    {
      icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Smart Fleet Management",
      subtitle: "Complete Visibility",
      description: "Real-time tracking, automated dispatch, and intelligent maintenance scheduling for maximum efficiency.",
      metrics: "99.9% Uptime",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      demoText: "Track your entire fleet from one dashboard"
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Predictive Analytics",
      subtitle: "Data-Driven Insights",
      description: "Comprehensive dashboards with predictive modeling to forecast demand and optimize operations.",
      metrics: "40% Efficiency Boost",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      demoText: "See future trends with predictive analytics"
    }
  ]

  const benefits = [
    "Real-time tracking across all vehicles",
    "Automated route optimization",
    "Predictive maintenance alerts",
    "Cost reduction analytics"
  ]

  useEffect(() => {
    setIsVisible(true)
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, isMobile ? 4000 : 5000)

    // Mouse tracking for enhanced background effects
    const handleMouseMove = (e) => {
      if (sectionRef.current && !isMobile) {
        const rect = sectionRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        
        setMousePosition({ x, y })
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', checkMobile)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isMobile, features.length])

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Enhanced Background with Visible Mesh and Moving Blur */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary mesh gradient - More visible */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 58, 237, 0.25) 0%, transparent 40%),
              radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.25) 0%, transparent 40%),
              radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.20) 0%, transparent 40%),
              radial-gradient(circle at 60% 80%, rgba(147, 51, 234, 0.20) 0%, transparent 40%)
            `
          }}
        />
        
        {/* Enhanced moving blur effect */}
        <div 
          className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full opacity-40 transition-all duration-500 ease-out blur-3xl pointer-events-none z-10"
          style={{
            background: 'radial-gradient(circle, rgba(120, 58, 237, 0.6), rgba(59, 130, 246, 0.4), rgba(16, 185, 129, 0.3), transparent)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(40px)'
          }}
        />
        
        {/* Secondary moving blur */}
        <div 
          className="absolute w-60 h-60 rounded-full opacity-30 transition-all duration-700 ease-out blur-2xl pointer-events-none z-10"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.5), rgba(79, 70, 229, 0.3), transparent)',
            left: `${100 - mousePosition.x}%`,
            top: `${100 - mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(30px)'
          }}
        />
        
        {/* Visible grid mesh pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(120, 58, 237, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120, 58, 237, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Diagonal mesh overlay */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(147, 51, 234, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Animated dot pattern */}
        <div 
          className="absolute inset-0 opacity-25 animate-pulse"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(120, 58, 237, 0.4) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 15px 15px'
          }}
        />
        
        {/* More visible floating orbs */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-violet-400/40 rounded-full animate-float shadow-lg" style={{ filter: 'blur(2px)' }} />
        <div className="absolute top-40 right-20 w-8 h-8 bg-blue-400/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '1s', filter: 'blur(2px)' }} />
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-emerald-400/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '2s', filter: 'blur(2px)' }} />
        <div className="absolute bottom-20 right-10 w-7 h-7 bg-purple-400/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '0.5s', filter: 'blur(2px)' }} />
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-violet-300/20 to-purple-300/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-violet-100 px-4 py-2 rounded-full mb-6 shadow-lg">
            <Zap className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-semibold text-violet-700">Powered by Advanced AI</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Transport Operations
            </span>
          </h2>
          <p className="font-body text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionary AI technology that makes complex logistics simple, efficient, and profitable. 
            Join thousands of companies already transforming their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
          {/* Features List */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] ${
                  currentFeature === index
                    ? `border-transparent bg-gradient-to-r ${feature.bgColor} shadow-2xl shadow-violet-500/20`
                    : 'border-gray-200 hover:border-violet-300 bg-white/70 backdrop-blur-sm hover:shadow-xl'
                }`}
                onClick={() => setCurrentFeature(index)}
              >
                {currentFeature === index && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 animate-pulse" />
                )}
                
                <div className="relative flex items-start space-x-4">
                  <div className={`p-3 rounded-xl transition-all duration-300 flex-shrink-0 ${
                    currentFeature === index 
                      ? `bg-gradient-to-r ${feature.color} text-white shadow-lg` 
                      : 'bg-gray-100 group-hover:bg-gray-200'
                  }`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-heading text-xl font-bold text-gray-900">{feature.title}</h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        currentFeature === index 
                          ? 'bg-violet-100 text-violet-700' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {feature.metrics}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-violet-600 mb-2">{feature.subtitle}</p>
                    <p className="font-body text-base text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-all duration-300 flex-shrink-0 ${
                    currentFeature === index ? 'text-violet-600 translate-x-1' : 'text-gray-400'
                  }`} />
                </div>
              </div>
            ))}

            {/* Benefits List */}
            <div className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg">
              <h4 className="font-heading text-lg font-semibold text-gray-900 mb-4">Key Benefits</h4>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-1"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-base text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Demo Section */}
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 rounded-3xl transform rotate-3 scale-105 opacity-60" />
              
              {/* Main demo container - Mobile Optimized */}
              <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-6 lg:p-8 border border-gray-200 shadow-2xl">
                
                {/* Mobile-Friendly Demo Content */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${features[currentFeature].color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl transform transition-all duration-500 hover:scale-110`}>
                      <div className="text-white text-2xl">
                        {features[currentFeature].icon}
                      </div>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                      {features[currentFeature].title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {features[currentFeature].demoText}
                    </p>
                  </div>

                  {/* Mobile-Optimized Visual Demo */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 min-h-[200px] flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, ${features[currentFeature].color.includes('violet') ? '#7c3aed' : features[currentFeature].color.includes('blue') ? '#3b82f6' : '#10b981'} 0%, transparent 50%)`,
                        animation: 'pulse 3s ease-in-out infinite'
                      }} />
                    </div>
                    
                    {/* Demo Content */}
                    <div className="relative z-10 text-center">
                      <div className="mb-4">
                        <Play className="w-12 h-12 text-violet-600 mx-auto mb-2 animate-bounce" />
                        <p className="text-sm text-gray-600">Interactive Demo</p>
                      </div>
                      
                      {/* Progress Indicators */}
                      <div className="flex justify-center space-x-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-8 rounded-full transition-all duration-300 ${
                              i <= currentFeature ? `bg-gradient-to-t ${features[currentFeature].color}` : 'bg-gray-200'
                            }`}
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                      
                      <div className="text-lg font-bold text-gray-900 mb-1">
                        {features[currentFeature].metrics}
                      </div>
                      <div className="text-sm text-gray-600">
                        Performance Improvement
                      </div>
                    </div>
                  </div>

                  {/* Feature Navigation Dots */}
                  <div className="flex justify-center space-x-3">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentFeature(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentFeature === index 
                            ? `bg-gradient-to-r ${features[index].color} w-8` 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`View feature ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Stats Card */}
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {features[currentFeature].metrics}
                      </div>
                      <div className="text-sm text-violet-600 font-medium">
                        {features[currentFeature].subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-violet-500 animate-bounce" />
              <Sparkles className="absolute -bottom-4 -left-4 w-6 h-6 text-purple-500 animate-bounce" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-pulse" />
              <div className="absolute top-1/4 -right-3 w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes mesh-move {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-mesh {
          animation: mesh-move 10s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(120, 58, 237, 0.1) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          .mobile-optimized {
            min-height: auto;
            padding: 1rem;
          }
          
          .touch-friendly {
            min-height: 44px;
            min-width: 44px;
            touch-action: manipulation;
          }
        }
        
        /* Smooth backdrop blur */
        .backdrop-blur-custom {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      `}</style>
    </section>
  )
}