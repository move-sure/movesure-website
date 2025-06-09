'use client'

import { useState, useEffect } from 'react'
import HeroSection from '@/components/sections/herosection'
import FeaturesSection from '@/components/sections/featuressection'
import BenefitsTestimonialsSection from '@/components/sections/testimonial'
import CTASection from '@/components/sections/cta'

// Custom Cursor Component
function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [cursorColor, setCursorColor] = useState('blue')
  const [isClicking, setIsClicking] = useState(false)
  const [hoverType, setHoverType] = useState('default')

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Advanced section detection with color mapping
    const handleSectionHover = () => {
      const sections = document.querySelectorAll('section')
      const scrollY = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top + window.scrollY
        const sectionBottom = sectionTop + rect.height

        if (scrollY >= sectionTop && scrollY <= sectionBottom) {
          switch(index) {
            case 0: setCursorColor('electric-blue'); break    // Hero - Electric Blue
            case 1: setCursorColor('cyber-purple'); break     // Features - Cyber Purple  
            case 2: setCursorColor('ai-emerald'); break       // Benefits - AI Emerald
            case 3: setCursorColor('neon-gradient'); break    // CTA - Neon Gradient
            default: setCursorColor('electric-blue')
          }
        }
      })
    }

    // Enhanced hover detection with element type recognition
    const handleMouseEnter = (e) => {
      const target = e.target.closest('button, a, .card, .tech-card, [role="button"], .hover-target')
      if (target) {
        setIsHovering(true)
        
        // Determine hover type based on element
        if (target.matches('button')) {
          setHoverType('button')
        } else if (target.matches('.card, .tech-card')) {
          setHoverType('card')
        } else if (target.matches('a')) {
          setHoverType('link')
        } else {
          setHoverType('interactive')
        }
      }
    }

    const handleMouseLeave = (e) => {
      const target = e.target.closest('button, a, .card, .tech-card, [role="button"], .hover-target')
      if (target) {
        setIsHovering(false)
        setHoverType('default')
      }
    }

    // Event listeners
    document.addEventListener('mousemove', updateCursor)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('scroll', handleSectionHover)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)

    handleSectionHover()

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('scroll', handleSectionHover)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [])

  const getCursorStyles = () => {
    let baseSize = 20
    let backgroundColor = ''
    let borderColor = ''
    let boxShadow = ''

    // Dynamic sizing based on hover type
    switch(hoverType) {
      case 'button':
        baseSize = 50
        break
      case 'card':
        baseSize = 60
        break
      case 'link':
        baseSize = 35
        break
      case 'interactive':
        baseSize = 40
        break
      default:
        baseSize = 20
    }

    const clickSize = isClicking ? baseSize * 0.7 : baseSize
    
    // AI-themed color schemes
    switch(cursorColor) {
      case 'electric-blue':
        backgroundColor = isHovering ? 'rgba(0, 123, 255, 0.2)' : 'rgba(0, 123, 255, 0.8)'
        borderColor = '#007bff'
        boxShadow = isHovering ? '0 0 30px rgba(0, 123, 255, 0.6), inset 0 0 20px rgba(0, 123, 255, 0.3)' : '0 0 15px rgba(0, 123, 255, 0.4)'
        break
      case 'cyber-purple': 
        backgroundColor = isHovering ? 'rgba(138, 43, 226, 0.2)' : 'rgba(138, 43, 226, 0.8)'
        borderColor = '#8a2be2'
        boxShadow = isHovering ? '0 0 30px rgba(138, 43, 226, 0.6), inset 0 0 20px rgba(138, 43, 226, 0.3)' : '0 0 15px rgba(138, 43, 226, 0.4)'
        break
      case 'ai-emerald':
        backgroundColor = isHovering ? 'rgba(0, 255, 127, 0.2)' : 'rgba(0, 255, 127, 0.8)'
        borderColor = '#00ff7f'
        boxShadow = isHovering ? '0 0 30px rgba(0, 255, 127, 0.6), inset 0 0 20px rgba(0, 255, 127, 0.3)' : '0 0 15px rgba(0, 255, 127, 0.4)'
        break
      case 'neon-gradient':
        backgroundColor = isHovering ? 'rgba(255, 20, 147, 0.2)' : 'rgba(255, 20, 147, 0.8)'
        borderColor = '#ff1493'
        boxShadow = isHovering ? '0 0 30px rgba(255, 20, 147, 0.6), inset 0 0 20px rgba(255, 20, 147, 0.3)' : '0 0 15px rgba(255, 20, 147, 0.4)'
        break
      default:
        backgroundColor = isHovering ? 'rgba(0, 123, 255, 0.2)' : 'rgba(0, 123, 255, 0.8)'
        borderColor = '#007bff'
        boxShadow = '0 0 15px rgba(0, 123, 255, 0.4)'
    }

    return {
      left: cursorPos.x - clickSize / 2,
      top: cursorPos.y - clickSize / 2,
      width: clickSize,
      height: clickSize,
      backgroundColor,
      borderColor,
      borderWidth: isHovering ? '3px' : '2px',
      boxShadow,
      transform: `scale(${isClicking ? 0.6 : 1}) ${isHovering ? 'rotate(45deg)' : 'rotate(0deg)'}`,
    }
  }

  const getTrailColor = () => {
    switch(cursorColor) {
      case 'electric-blue': return '#007bff'
      case 'cyber-purple': return '#8a2be2'
      case 'ai-emerald': return '#00ff7f'
      case 'neon-gradient': return '#ff1493'
      default: return '#007bff'
    }
  }

  return (
    <>
      {/* Main AI Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full border-solid transition-all duration-300 ease-out backdrop-blur-sm"
        style={getCursorStyles()}
      >
        {/* Inner AI core */}
        {isHovering && (
          <div 
            className="absolute inset-2 rounded-full animate-pulse"
            style={{
              background: `radial-gradient(circle, ${getTrailColor()}40, transparent)`,
            }}
          />
        )}
      </div>
      
      {/* AI Particles Trail */}
      <div
        className="fixed pointer-events-none z-[9998] w-3 h-3 rounded-full transition-all duration-700 ease-out animate-pulse"
        style={{
          left: cursorPos.x - 6,
          top: cursorPos.y - 6,
          backgroundColor: getTrailColor(),
          transform: `scale(${isHovering ? 2 : 1})`,
          opacity: isHovering ? 0.8 : 0.5,
        }}
      />
      
      {/* Secondary particle */}
      <div
        className="fixed pointer-events-none z-[9997] w-2 h-2 rounded-full transition-all duration-1000 ease-out"
        style={{
          left: cursorPos.x - 4,
          top: cursorPos.y - 4,
          backgroundColor: getTrailColor(),
          transform: `scale(${isHovering ? 1.5 : 0.8})`,
          opacity: 0.3,
        }}
      />
      
      {/* AI Ring System for Cards */}
      {isHovering && hoverType === 'card' && (
        <>
          <div
            className="fixed pointer-events-none z-[9996] rounded-full border-2 transition-all duration-500 ease-out animate-spin-slow"
            style={{
              left: cursorPos.x - 40,
              top: cursorPos.y - 40,
              width: 80,
              height: 80,
              borderColor: getTrailColor(),
              backgroundColor: 'transparent',
              borderStyle: 'dashed',
            }}
          />
          <div
            className="fixed pointer-events-none z-[9995] rounded-full border transition-all duration-700 ease-out animate-reverse-spin"
            style={{
              left: cursorPos.x - 50,
              top: cursorPos.y - 50,
              width: 100,
              height: 100,
              borderColor: `${getTrailColor()}60`,
              backgroundColor: 'transparent',
              borderStyle: 'dotted',
            }}
          />
        </>
      )}

      {/* Button Hover Effect */}
      {isHovering && hoverType === 'button' && (
        <div
          className="fixed pointer-events-none z-[9996] rounded-full transition-all duration-400 ease-out animate-ping"
          style={{
            left: cursorPos.x - 35,
            top: cursorPos.y - 35,
            width: 70,
            height: 70,
            backgroundColor: `${getTrailColor()}20`,
            border: `2px solid ${getTrailColor()}`,
          }}
        />
      )}

      {/* Data Stream Effect for Links */}
      {isHovering && hoverType === 'link' && (
        <>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="fixed pointer-events-none z-[9995] w-1 h-8 transition-all duration-300 ease-out animate-pulse"
              style={{
                left: cursorPos.x - 15 + (i * 6),
                top: cursorPos.y - 20,
                backgroundColor: getTrailColor(),
                opacity: 0.6 - (i * 0.1),
                transform: `scaleY(${1 - (i * 0.15)}) translateY(${i * 2}px)`,
                borderRadius: '2px',
                animationDelay: `${i * 50}ms`,
              }}
            />
          ))}
        </>
      )}
    </>
  )
}

export default function HomePage() {
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const isTouch = 'ontouchstart' in window
      setShowCursor(!isMobile && !isTouch && window.innerWidth > 768)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return (
    <div className="min-h-screen relative" style={{ cursor: showCursor ? 'none' : 'auto' }}>
      {/* Custom AI Cursor */}
      {showCursor && <CustomCursor />}
      
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

      {/* Enhanced Global Styles for AI Cursor */}
      <style jsx global>{`
        * {
          cursor: ${showCursor ? 'none !important' : 'auto'};
        }
        
        /* Enhanced Card Animations */
        .card, .tech-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        
        .card:hover, .tech-card:hover {
          transform: ${showCursor ? 'translateY(-8px) scale(1.02)' : 'translateY(-4px)'};
          box-shadow: 0 20px 40px rgba(0, 123, 255, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        /* AI Glow Effect for Cards */
        .card:hover::before, .tech-card:hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 123, 255, 0.1), transparent);
          animation: shimmer 1.5s infinite;
          z-index: 1;
        }
        
        /* Button Enhancements */
        button {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }
        
        button:hover {
          transform: ${showCursor ? 'translateY(-3px) scale(1.05)' : 'translateY(-2px)'};
          box-shadow: 0 10px 25px rgba(0, 123, 255, 0.2);
        }
        
        button:hover::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);
          transition: all 0.6s ease-out;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          z-index: 0;
        }
        
        /* Link Animations */
        a {
          transition: all 0.3s ease;
          position: relative;
        }
        
        a:hover {
          transform: ${showCursor ? 'translateX(5px)' : 'translateX(2px)'};
        }
        
        /* AI Data Flow Animation */
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 4s linear infinite;
        }
        
        /* Testimonial Card Special Effects */
        .testimonial-card:hover {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(138, 43, 226, 0.05));
          border: 1px solid rgba(0, 123, 255, 0.2);
        }
        
        /* Feature Card Tech Effect */
        .feature-card:hover {
          background: linear-gradient(145deg, rgba(0, 255, 127, 0.03), rgba(0, 123, 255, 0.03));
          box-shadow: 
            0 0 30px rgba(0, 123, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  )
}