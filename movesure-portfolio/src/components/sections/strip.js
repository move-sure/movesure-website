'use client'

import { Truck, Zap, Bot, Shield, FileText, Route, Package } from 'lucide-react'

export default function AnimatedStrip() {
  const stripMessages = [
    "INDIA'S FIRST AI BILL GENERATION SAAS WITH MULTI LINGUAL SUPPORT",
    "SWITCH FROM MANUAL TO AUTOMATED IN LESS THAN COST OF A PRINT", 
    "TRANSFORM YOUR LOGISTICS BUSINESS WITH MOVESURE AI",
    "AI POWERED SMART AUTOMATION FOR MODERN TRANSPORT"
  ]

  const roadIcons = [
    { icon: <Truck className="w-6 h-6" />, delay: '0s' },
    { icon: <Package className="w-5 h-5" />, delay: '2s' },
    { icon: <Route className="w-6 h-6" />, delay: '4s' },
    { icon: <Bot className="w-5 h-5" />, delay: '6s' },
    { icon: <Zap className="w-5 h-5" />, delay: '8s' },
    { icon: <Shield className="w-5 h-5" />, delay: '10s' },
    { icon: <FileText className="w-5 h-5" />, delay: '12s' }
  ]

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-40 sm:h-48">
        {/* Curved Road Background */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 200" preserveAspectRatio="none">
            {/* Main road path */}
            <path 
              d="M0,80 Q350,40 700,60 Q1050,80 1400,50 L1400,200 L0,200 Z" 
              fill="url(#roadGradient)" 
            />
            
            {/* Road center line */}
            <path 
              d="M0,80 Q350,40 700,60 Q1050,80 1400,50" 
              stroke="#fbfaf9" 
              strokeWidth="3" 
              strokeDasharray="20,15" 
              fill="none" 
              className="animate-dash"
            />
            
            {/* Road edges */}
            <path 
              d="M0,65 Q350,25 700,45 Q1050,65 1400,35" 
              stroke="#fbfaf9" 
              strokeWidth="2" 
              fill="none" 
              opacity="0.8"
            />
            <path 
              d="M0,95 Q350,55 700,75 Q1050,95 1400,65" 
              stroke="#fbfaf9" 
              strokeWidth="2" 
              fill="none" 
              opacity="0.8"
            />
            
            <defs>
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7559ff" />
                <stop offset="25%" stopColor="#8239b5" />
                <stop offset="50%" stopColor="#0080fe" />
                <stop offset="75%" stopColor="#8239b5" />
                <stop offset="100%" stopColor="#7559ff" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Moving vehicles/icons on the road */}
        <div className="absolute inset-0">
          {roadIcons.map((item, index) => (
            <div
              key={index}
              className="absolute text-white/90 animate-drive"
              style={{
                animationDelay: item.delay,
                animationDuration: '15s'
              }}
            >
              {item.icon}
            </div>
          ))}
        </div>
        
        {/* Main scrolling text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative w-full">
            <div className="animate-scroll-road whitespace-nowrap">
              {stripMessages.map((message, index) => (
                <span key={index} className="inline-block">
                  <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide px-12 drop-shadow-lg">
                    {message}
                  </span>
                  <span className="text-white/60 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide px-8">
                    •
                  </span>
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {stripMessages.map((message, index) => (
                <span key={`dup-${index}`} className="inline-block">
                  <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide px-12 drop-shadow-lg">
                    {message}
                  </span>
                  <span className="text-white/60 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide px-8">
                    •
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Secondary info strip */}
        <div className="absolute bottom-0 left-0 w-full h-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/20">
            <div className="flex items-center h-full overflow-hidden">
              <div className="animate-scroll-reverse-road whitespace-nowrap">
                <span className="text-white/90 font-semibold text-sm sm:text-base tracking-wider px-8 inline-block drop-shadow">
                  AI POWERED • MULTI LANGUAGE • SMART AUTOMATION • COST EFFECTIVE • DIGITAL TRANSFORMATION
                </span>
                <span className="text-white/60 font-semibold text-sm sm:text-base tracking-wider px-6 inline-block">
                  🚛
                </span>
                <span className="text-white/90 font-semibold text-sm sm:text-base tracking-wider px-8 inline-block drop-shadow">
                  REVOLUTIONIZING LOGISTICS • LESS THAN PRINT COST • AUTOMATED BILLING • SMART ROUTES
                </span>
                <span className="text-white/60 font-semibold text-sm sm:text-base tracking-wider px-6 inline-block">
                  ⚡
                </span>
                {/* Duplicate for seamless loop */}
                <span className="text-white/90 font-semibold text-sm sm:text-base tracking-wider px-8 inline-block drop-shadow">
                  AI POWERED • MULTI LANGUAGE • SMART AUTOMATION • COST EFFECTIVE • DIGITAL TRANSFORMATION
                </span>
                <span className="text-white/60 font-semibold text-sm sm:text-base tracking-wider px-6 inline-block">
                  🚛
                </span>
                <span className="text-white/90 font-semibold text-sm sm:text-base tracking-wider px-8 inline-block drop-shadow">
                  REVOLUTIONIZING LOGISTICS • LESS THAN PRINT COST • AUTOMATED BILLING • SMART ROUTES
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Road side elements */}
        <div className="absolute top-2 left-10 w-3 h-3 bg-white/40 rounded-full animate-pulse" />
        <div className="absolute top-4 right-20 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-16 left-32 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-white/35 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <style jsx>{`
        @keyframes scroll-road {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes scroll-reverse-road {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes drive {
          0% {
            left: -50px;
            top: 85px;
          }
          25% {
            left: 25%;
            top: 45px;
          }
          50% {
            left: 50%;
            top: 65px;
          }
          75% {
            left: 75%;
            top: 85px;
          }
          100% {
            left: 100%;
            top: 55px;
          }
        }
        
        @keyframes dash {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -35;
          }
        }
        
        .animate-scroll-road {
          animation: scroll-road 35s linear infinite;
        }
        
        .animate-scroll-reverse-road {
          animation: scroll-reverse-road 30s linear infinite;
        }
        
        .animate-drive {
          animation: drive 15s ease-in-out infinite;
        }
        
        .animate-dash {
          animation: dash 2s linear infinite;
        }
      `}</style>
    </div>
  )
}