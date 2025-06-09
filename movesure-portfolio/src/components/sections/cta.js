'use client'

import { 
  ArrowRight,
  Users,
  Zap,
  CheckCircle,
  Star,
  Shield,
  Clock,
  Award,
  Truck,
  BarChart3,
  Globe,
  Target
} from 'lucide-react'

export default function CTASection() {
  const features = [
    { icon: CheckCircle, text: "Free 14-day trial" },
    { icon: Shield, text: "No credit card required" },
    { icon: Clock, text: "24/7 premium support" },
    { icon: Award, text: "99.9% uptime guarantee" }
  ]

  const floatingElements = [
    { icon: Truck, top: "10%", left: "8%", delay: "0s", size: "w-6 h-6" },
    { icon: BarChart3, top: "15%", right: "12%", delay: "1s", size: "w-8 h-8" },
    { icon: Globe, top: "70%", left: "5%", delay: "2s", size: "w-7 h-7" },
    { icon: Target, top: "75%", right: "8%", delay: "1.5s", size: "w-6 h-6" },
    { icon: Star, top: "25%", left: "85%", delay: "0.5s", size: "w-5 h-5" },
    { icon: Star, top: "60%", left: "90%", delay: "2.5s", size: "w-4 h-4" }
  ]

  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-white/20 to-purple-300/20 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-white/20 rounded-full blur-3xl animate-float-delayed opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-300/15 to-blue-300/15 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
        
        {/* Floating icons */}
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute text-white/20 animate-float hover:text-white/40 transition-colors duration-300`}
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
              animationDelay: element.delay,
              animationDuration: '6s'
            }}
          >
            <element.icon className={element.size} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-yellow-300" />
            <span className="text-white font-medium">Transform Your Business Today</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
            Ready to 
            <span className="block bg-gradient-to-r from-yellow-300 via-white to-blue-200 bg-clip-text text-transparent">
              Transform Your
            </span>
            Transport Business?
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-up delay-200">
            Join <span className="font-bold text-yellow-300">10,000+</span> businesses already using MoveSure to streamline their logistics operations. 
            Start your journey towards automated excellence today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up delay-300">
            <button className="group relative bg-white text-blue-600 hover:bg-gray-50 px-10 py-4 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20">
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-3 group-hover:text-yellow-500 transition-colors" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" />
              </div>
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </button>

            <button className="group relative border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-4 text-lg font-bold rounded-2xl transition-all duration-300 hover:border-white/50 hover:shadow-xl">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Schedule Demo
              </div>
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up delay-400">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group flex items-center justify-center sm:justify-start space-x-3 text-white/90 hover:text-white transition-colors duration-300"
              >
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300 group-hover:scale-110 transform">
                  <feature.icon className="w-4 h-4" />
                </div>
                <span className="font-medium text-sm md:text-base">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20 animate-fade-in-up delay-500">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 text-white/80">
              
              {/* Rating */}
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                  ))}
                </div>
                <span className="font-medium">4.9/5 rating</span>
              </div>

              {/* Users */}
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    +
                  </div>
                </div>
                <span className="font-medium">10,000+ active users</span>
              </div>

              {/* Security */}
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-300" />
                <span className="font-medium">Enterprise security</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-3deg);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>
    </section>
  )
}