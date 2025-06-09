'use client'

import Link from 'next/link'
import { 
  Bot, 
  Sparkles, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  Truck,
  BarChart3,
  Users,
  Shield,
  Zap,
  Heart,
  Package,
  Route,
  FileText,
  Clock,
  TrendingUp,
  Brain,
  Cpu,
  Database,
  Globe,
  Phone,
  MapPin
} from 'lucide-react'

export default function Footer() {
  // AI and Business related icons for floating animation
  const floatingIcons = [
    { icon: <Bot className="w-4 h-4" />, position: { top: '10%', left: '5%' }, delay: '0s' },
    { icon: <Brain className="w-4 h-4" />, position: { top: '20%', right: '8%' }, delay: '2s' },
    { icon: <Cpu className="w-4 h-4" />, position: { bottom: '30%', left: '10%' }, delay: '4s' },
    { icon: <Database className="w-4 h-4" />, position: { top: '50%', right: '15%' }, delay: '1s' },
    { icon: <Truck className="w-4 h-4" />, position: { bottom: '20%', right: '5%' }, delay: '3s' },
    { icon: <Package className="w-4 h-4" />, position: { top: '70%', left: '3%' }, delay: '5s' }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footer-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7559ff" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-grid)" />
          </svg>
        </div>
        
        {/* Floating AI/Business icons */}
        {floatingIcons.map((item, index) => (
          <div 
            key={index}
            className="absolute text-violet-400/20"
            style={item.position}
          >
            <div 
              className="animate-float-slow"
              style={{ animationDelay: item.delay }}
            >
              {item.icon}
            </div>
          </div>
        ))}
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-violet-600/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-purple-600/10 to-transparent"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <Sparkles className="w-5 h-5 text-blue-400 absolute -top-2 -right-2 animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  MoveSure AI
                </span>
                <div className="flex items-center space-x-1 mt-1">
                  <span className="text-xl">🇮🇳</span>
                  <span className="text-xs text-orange-400 font-semibold">MADE IN INDIA</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionizing logistics with India's first AI-powered transport management solutions. 
              Smart, efficient, and reliable bilty management for the modern business.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-violet-400" />
                <span className="text-sm">Aligarh, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-violet-400" />
                <span className="text-sm">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-violet-400" />
                <span className="text-sm">hello@movesure.ai</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <button className="p-3 bg-gray-800/50 hover:bg-violet-600/20 border border-gray-700 hover:border-violet-500 rounded-xl text-gray-400 hover:text-violet-400 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-3 bg-gray-800/50 hover:bg-violet-600/20 border border-gray-700 hover:border-violet-500 rounded-xl text-gray-400 hover:text-violet-400 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-3 bg-gray-800/50 hover:bg-violet-600/20 border border-gray-700 hover:border-violet-500 rounded-xl text-gray-400 hover:text-violet-400 transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </button>
              <button className="p-3 bg-gray-800/50 hover:bg-violet-600/20 border border-gray-700 hover:border-violet-500 rounded-xl text-gray-400 hover:text-violet-400 transition-all duration-300 hover:scale-110">
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* AI Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center space-x-2">
              <Brain className="w-5 h-5 text-violet-400" />
              <span>AI Solutions</span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/bilty-automation" className="flex items-center space-x-3 text-gray-300 hover:text-violet-400 transition-colors duration-200 group">
                  <Truck className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Smart Bilty Automation</span>
                </Link>
              </li>
              <li>
                <Link href="/ai-analytics" className="flex items-center space-x-3 text-gray-300 hover:text-violet-400 transition-colors duration-200 group">
                  <BarChart3 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>AI Analytics Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="/route-optimization" className="flex items-center space-x-3 text-gray-300 hover:text-violet-400 transition-colors duration-200 group">
                  <Route className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Route Optimization</span>
                </Link>
              </li>
              <li>
                <Link href="/predictive-insights" className="flex items-center space-x-3 text-gray-300 hover:text-violet-400 transition-colors duration-200 group">
                  <TrendingUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Predictive Insights</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Features */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center space-x-2">
              <Package className="w-5 h-5 text-violet-400" />
              <span>Business Features</span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/user-management" className="flex items-center space-x-3 text-gray-300 hover:text-violet-400 transition-colors duration-200 group">
                  <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>User Management</span>
                </Link>
              </li>
              <li>
                <Link href="/document-automation" className="flex items-center space-x-3 text-gray-300 hover:text-violet-400 transition-colors duration-200 group">
                  <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Document Automation</span>
                </Link>
              </li>
              <li>
                <Link href="/real-time-tracking" className="flex items-center space-x-3 text-gray-300 hover:text-violet-400 transition-colors duration-200 group">
                  <Clock className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Real-time Tracking</span>
                </Link>
              </li>
              <li>
                <Link href="/enterprise-security" className="flex items-center space-x-3 text-gray-300 hover:text-violet-400 transition-colors duration-200 group">
                  <Shield className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Enterprise Security</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center space-x-2">
              <Zap className="w-5 h-5 text-violet-400" />
              <span>Support & Resources</span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/help-center" className="text-gray-300 hover:text-violet-400 transition-colors duration-200">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/api-docs" className="text-gray-300 hover:text-violet-400 transition-colors duration-200">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-300 hover:text-violet-400 transition-colors duration-200">
                  Video Tutorials
                </Link>
              </li>
              <li>
                <Link href="/status" className="flex items-center space-x-2 text-gray-300 hover:text-violet-400 transition-colors duration-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>System Status</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-violet-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-violet-400 transition-colors duration-200">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold mb-2 text-white flex items-center justify-center lg:justify-start space-x-2">
                <Sparkles className="w-6 h-6 text-violet-400" />
                <span>Stay Ahead with AI Updates</span>
              </h3>
              <p className="text-gray-300">Get the latest insights on AI-powered logistics and exclusive features.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email for AI updates"
                className="px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 min-w-80 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-gray-700/50 bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <span>© 2025 MoveSure AI. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="hover:text-violet-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-violet-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/security" className="hover:text-violet-400 transition-colors duration-200">
                  Security
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and AI in</span>
              <span className="text-xl">🇮🇳</span>
              <Bot className="w-4 h-4 text-violet-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(3deg);
          }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}