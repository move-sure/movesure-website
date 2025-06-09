'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
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
  Heart
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#000000] via-[#1a1a1a] to-[#000000] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-[#7559ff] to-[#8239b5] rounded-xl flex items-center justify-center shadow-lg">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <Sparkles className="w-4 h-4 text-[#0080fe] absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#7559ff] to-[#8239b5] bg-clip-text text-transparent">
                BiltyAI
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionizing transport management with AI-powered solutions. 
              Smart, efficient, and reliable bilty management for the modern logistics industry.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#0080fe] hover:bg-white/10 p-2">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#0080fe] hover:bg-white/10 p-2">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#0080fe] hover:bg-white/10 p-2">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#0080fe] hover:bg-white/10 p-2">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Product</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/features" className="flex items-center space-x-2 text-gray-300 hover:text-[#7559ff] transition-colors duration-200">
                  <Truck className="w-4 h-4" />
                  <span>Bilty Management</span>
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="flex items-center space-x-2 text-gray-300 hover:text-[#7559ff] transition-colors duration-200">
                  <BarChart3 className="w-4 h-4" />
                  <span>Analytics Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="/ai-insights" className="flex items-center space-x-2 text-gray-300 hover:text-[#7559ff] transition-colors duration-200">
                  <Bot className="w-4 h-4" />
                  <span>AI Insights</span>
                </Link>
              </li>
              <li>
                <Link href="/user-management" className="flex items-center space-x-2 text-gray-300 hover:text-[#7559ff] transition-colors duration-200">
                  <Users className="w-4 h-4" />
                  <span>User Management</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#7559ff] transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-[#7559ff] transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#7559ff] transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-300 hover:text-[#7559ff] transition-colors duration-200">
                  Press Kit
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#7559ff] transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-[#7559ff] transition-colors duration-200">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-gray-300 hover:text-[#7559ff] transition-colors duration-200">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-300 hover:text-[#7559ff] transition-colors duration-200">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/status" className="flex items-center space-x-2 text-gray-300 hover:text-[#7559ff] transition-colors duration-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>System Status</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold mb-2 text-white flex items-center justify-center lg:justify-start space-x-2">
                <Zap className="w-5 h-5 text-[#0080fe]" />
                <span>Stay Updated</span>
              </h3>
              <p className="text-gray-300">Get the latest updates about AI-powered logistics solutions.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#7559ff] focus:ring-2 focus:ring-[#7559ff]/20 min-w-72"
              />
              <Button className="bg-gradient-to-r from-[#7559ff] to-[#8239b5] hover:from-[#6348ff] hover:to-[#7228a4] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© 2025 BiltyAI. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-[#7559ff] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#7559ff] transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-[#7559ff] transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and AI</span>
              <Shield className="w-4 h-4 text-[#0080fe]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}