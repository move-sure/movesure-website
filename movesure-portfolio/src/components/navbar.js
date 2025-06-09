'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Truck, 
  BarChart3, 
  Users, 
  Settings,
  Bot,
  Sparkles,
  Zap,
  Building,
  FileText,
  Search,
  Shield,
  Cpu,
  ArrowRight,
  TrendingUp,
  Package,
  Globe,
  HeadphonesIcon,
  Briefcase
} from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName)
  }

  const platformItems = [
    {
      icon: <Bot className="w-6 h-6 text-[#7559ff]" />,
      title: "AI Engine",
      description: "Advanced machine learning models for logistics optimization",
      href: "/platform/ai-engine",
      gradient: "from-[#7559ff] to-[#9c88ff]"
    },
    {
      icon: <Truck className="w-6 h-6 text-[#0080fe]" />,
      title: "Transport Management",
      description: "Complete logistics and fleet management solution",
      href: "/platform/transport",
      gradient: "from-[#0080fe] to-[#40a9ff]"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#8239b5]" />,
      title: "Analytics Dashboard",
      description: "Real-time insights and comprehensive reporting",
      href: "/platform/analytics",
      gradient: "from-[#8239b5] to-[#a855f7]"
    },
    {
      icon: <Package className="w-6 h-6 text-[#10b981]" />,
      title: "Inventory Management",
      description: "Smart warehouse and inventory tracking",
      href: "/platform/inventory",
      gradient: "from-[#10b981] to-[#34d399]"
    }
  ]

  const solutionsItems = [
    {
      icon: <Building className="w-6 h-6 text-[#7559ff]" />,
      title: "Enterprise Solutions",
      description: "Large-scale logistics operations and enterprise features",
      href: "/solutions/enterprise",
      gradient: "from-[#7559ff] to-[#9c88ff]"
    },
    {
      icon: <Users className="w-6 h-6 text-[#0080fe]" />,
      title: "Small Business",
      description: "Perfect for growing companies and startups",
      href: "/solutions/small-business",
      gradient: "from-[#0080fe] to-[#40a9ff]"
    },
    {
      icon: <Shield className="w-6 h-6 text-[#8239b5]" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security and regulatory compliance",
      href: "/solutions/security",
      gradient: "from-[#8239b5] to-[#a855f7]"
    },
    {
      icon: <Globe className="w-6 h-6 text-[#f59e0b]" />,
      title: "Global Logistics",
      description: "International shipping and cross-border solutions",
      href: "/solutions/global",
      gradient: "from-[#f59e0b] to-[#fbbf24]"
    }
  ]

  const resourcesItems = [
    {
      icon: <FileText className="w-6 h-6 text-[#7559ff]" />,
      title: "Documentation",
      description: "Complete API guides, tutorials, and best practices",
      href: "/resources/docs",
      gradient: "from-[#7559ff] to-[#9c88ff]"
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#0080fe]" />,
      title: "Developer API",
      description: "RESTful APIs and SDKs for seamless integration",
      href: "/resources/api",
      gradient: "from-[#0080fe] to-[#40a9ff]"
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-[#8239b5]" />,
      title: "Support Center",
      description: "24/7 technical support and customer assistance",
      href: "/resources/support",
      gradient: "from-[#8239b5] to-[#a855f7]"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#10b981]" />,
      title: "Case Studies",
      description: "Success stories and implementation examples",
      href: "/resources/case-studies",
      gradient: "from-[#10b981] to-[#34d399]"
    }
  ]

  const companyItems = [
    { title: "About Us", href: "/company/about", icon: <Building className="w-4 h-4" /> },
    { title: "Careers", href: "/company/careers", icon: <Briefcase className="w-4 h-4" /> },
    { title: "Newsroom", href: "/company/news", icon: <FileText className="w-4 h-4" /> },
    { title: "Contact", href: "/company/contact", icon: <HeadphonesIcon className="w-4 h-4" /> }
  ]

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/30 shadow-sm">
        <div className="w-full px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="w-10 h-10 bg-gradient-to-br from-[#7559ff] via-[#8239b5] to-[#0080fe] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <Sparkles className="w-3 h-3 text-[#0080fe] absolute -top-1 -right-1 animate-pulse opacity-80" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#7559ff] via-[#8239b5] to-[#0080fe] bg-clip-text text-transparent">
                MoveSure
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Platform Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#7559ff] transition-all duration-200 font-medium rounded-lg hover:bg-gray-50/80 relative group">
                  <span>Platform</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7559ff] to-[#8239b5] group-hover:w-full transition-all duration-300"></div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-96 mt-2 p-0 border-0 shadow-2xl rounded-2xl bg-white/95 backdrop-blur-2xl ring-1 ring-black/5">
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#7559ff] to-[#8239b5] rounded-lg flex items-center justify-center">
                        <Cpu className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900">Platform</h3>
                        <p className="text-xs text-gray-500">Powerful tools for modern logistics</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {platformItems.map((item, index) => (
                        <DropdownMenuItem key={index} className="p-0 border-0">
                          <Link href={item.href} className="flex items-start space-x-4 w-full p-4 rounded-xl hover:bg-gray-50/80 cursor-pointer transition-all duration-200 group">
                            <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-200`}>
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 group-hover:text-[#7559ff] transition-colors mb-1">{item.title}</div>
                              <div className="text-sm text-gray-500 leading-relaxed">{item.description}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#7559ff] group-hover:translate-x-1 transition-all duration-200 opacity-0 group-hover:opacity-100" />
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Solutions Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#7559ff] transition-all duration-200 font-medium rounded-lg hover:bg-gray-50/80 relative group">
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7559ff] to-[#8239b5] group-hover:w-full transition-all duration-300"></div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-96 mt-2 p-0 border-0 shadow-2xl rounded-2xl bg-white/95 backdrop-blur-2xl ring-1 ring-black/5">
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#0080fe] to-[#40a9ff] rounded-lg flex items-center justify-center">
                        <Building className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900">Solutions</h3>
                        <p className="text-xs text-gray-500">Tailored for every business size</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {solutionsItems.map((item, index) => (
                        <DropdownMenuItem key={index} className="p-0 border-0">
                          <Link href={item.href} className="flex items-start space-x-4 w-full p-4 rounded-xl hover:bg-gray-50/80 cursor-pointer transition-all duration-200 group">
                            <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-200`}>
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 group-hover:text-[#7559ff] transition-colors mb-1">{item.title}</div>
                              <div className="text-sm text-gray-500 leading-relaxed">{item.description}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#7559ff] group-hover:translate-x-1 transition-all duration-200 opacity-0 group-hover:opacity-100" />
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Research Link */}
              <Link href="/research" className="px-4 py-2 text-gray-700 hover:text-[#7559ff] transition-all duration-200 font-medium rounded-lg hover:bg-gray-50/80 relative group">
                Research
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7559ff] to-[#8239b5] group-hover:w-full transition-all duration-300"></div>
              </Link>

              {/* Resources Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#7559ff] transition-all duration-200 font-medium rounded-lg hover:bg-gray-50/80 relative group">
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7559ff] to-[#8239b5] group-hover:w-full transition-all duration-300"></div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-96 mt-2 p-0 border-0 shadow-2xl rounded-2xl bg-white/95 backdrop-blur-2xl ring-1 ring-black/5">
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#8239b5] to-[#a855f7] rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900">Resources</h3>
                        <p className="text-xs text-gray-500">Everything you need to succeed</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {resourcesItems.map((item, index) => (
                        <DropdownMenuItem key={index} className="p-0 border-0">
                          <Link href={item.href} className="flex items-start space-x-4 w-full p-4 rounded-xl hover:bg-gray-50/80 cursor-pointer transition-all duration-200 group">
                            <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-200`}>
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 group-hover:text-[#7559ff] transition-colors mb-1">{item.title}</div>
                              <div className="text-sm text-gray-500 leading-relaxed">{item.description}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#7559ff] group-hover:translate-x-1 transition-all duration-200 opacity-0 group-hover:opacity-100" />
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Company Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#7559ff] transition-all duration-200 font-medium rounded-lg hover:bg-gray-50/80 relative group">
                  <span>Company</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7559ff] to-[#8239b5] group-hover:w-full transition-all duration-300"></div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 mt-2 p-0 border-0 shadow-2xl rounded-2xl bg-white/95 backdrop-blur-2xl ring-1 ring-black/5">
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#7559ff] to-[#8239b5] rounded-lg flex items-center justify-center">
                        <Building className="w-3 h-3 text-white" />
                      </div>
                      <h3 className="text-sm font-bold text-gray-900">Company</h3>
                    </div>
                    <div className="space-y-1">
                      {companyItems.map((item, index) => (
                        <DropdownMenuItem key={index} className="p-0 border-0">
                          <Link href={item.href} className="flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-gray-50/80 cursor-pointer transition-all duration-200 group font-medium text-gray-700 hover:text-[#7559ff]">
                            <span className="text-gray-400 group-hover:text-[#7559ff] transition-colors">{item.icon}</span>
                            <span>{item.title}</span>
                            <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-[#7559ff] group-hover:translate-x-1 transition-all duration-200 opacity-0 group-hover:opacity-100 ml-auto" />
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button variant="ghost" className="text-gray-700 hover:text-[#7559ff] hover:bg-gray-50/80 font-medium transition-all duration-200">
                Sign in
              </Button>
              <Button className="bg-gradient-to-r from-[#7559ff] to-[#8239b5] hover:from-[#6348ff] hover:to-[#7228a4] text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium px-6 rounded-xl transform hover:scale-105">
                Request a demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button variant="ghost" size="sm" onClick={toggleMenu} className="p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={closeMenu} />
          
          {/* Menu Panel */}
          <div className="fixed inset-0 bg-white/95 backdrop-blur-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200/50 bg-white/90 backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#7559ff] via-[#8239b5] to-[#0080fe] rounded-2xl flex items-center justify-center shadow-lg">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <Sparkles className="w-3 h-3 text-[#0080fe] absolute -top-1 -right-1 animate-pulse opacity-80" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#7559ff] via-[#8239b5] to-[#0080fe] bg-clip-text text-transparent">
                    MoveSure
                  </span>
                </div>
                <Button variant="ghost" size="sm" onClick={closeMenu} className="p-2">
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Menu Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {/* Platform Section */}
                <div className="w-full">
                  <button 
                    onClick={() => toggleDropdown('platform')}
                    className="flex items-center justify-between w-full p-4 text-left font-semibold text-gray-900 hover:text-[#7559ff] transition-colors rounded-xl hover:bg-white/60 backdrop-blur-sm"
                  >
                    <span>Platform</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'platform' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'platform' && (
                    <div className="mt-2 ml-4 p-3 rounded-xl bg-white/80 backdrop-blur-xl shadow-lg border border-gray-100/50">
                      <div className="space-y-2">
                        {platformItems.map((item, index) => (
                          <Link key={index} href={item.href} onClick={closeMenu} className="flex items-start space-x-3 w-full p-3 rounded-lg hover:bg-gray-50/80 transition-all duration-200 group">
                            <div className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200">{item.icon}</div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#7559ff] transition-colors">{item.title}</div>
                              <div className="text-sm text-gray-500">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Solutions Section */}
                <div className="w-full">
                  <button 
                    onClick={() => toggleDropdown('solutions')}
                    className="flex items-center justify-between w-full p-4 text-left font-semibold text-gray-900 hover:text-[#7559ff] transition-colors rounded-xl hover:bg-white/60 backdrop-blur-sm"
                  >
                    <span>Solutions</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'solutions' && (
                    <div className="mt-2 ml-4 p-3 rounded-xl bg-white/80 backdrop-blur-xl shadow-lg border border-gray-100/50">
                      <div className="space-y-2">
                        {solutionsItems.map((item, index) => (
                          <Link key={index} href={item.href} onClick={closeMenu} className="flex items-start space-x-3 w-full p-3 rounded-lg hover:bg-gray-50/80 transition-all duration-200 group">
                            <div className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200">{item.icon}</div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#7559ff] transition-colors">{item.title}</div>
                              <div className="text-sm text-gray-500">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Research Link */}
                <div className="w-full">
                  <Link href="/research" onClick={closeMenu} className="block p-4 font-semibold text-gray-900 hover:text-[#7559ff] transition-colors rounded-xl hover:bg-white/60 backdrop-blur-sm">
                    Research
                  </Link>
                </div>

                {/* Resources Section */}
                <div className="w-full">
                  <button 
                    onClick={() => toggleDropdown('resources')}
                    className="flex items-center justify-between w-full p-4 text-left font-semibold text-gray-900 hover:text-[#7559ff] transition-colors rounded-xl hover:bg-white/60 backdrop-blur-sm"
                  >
                    <span>Resources</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'resources' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'resources' && (
                    <div className="mt-2 ml-4 p-3 rounded-xl bg-white/80 backdrop-blur-xl shadow-lg border border-gray-100/50">
                      <div className="space-y-2">
                        {resourcesItems.map((item, index) => (
                          <Link key={index} href={item.href} onClick={closeMenu} className="flex items-start space-x-3 w-full p-3 rounded-lg hover:bg-gray-50/80 transition-all duration-200 group">
                            <div className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200">{item.icon}</div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#7559ff] transition-colors">{item.title}</div>
                              <div className="text-sm text-gray-500">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Company Section */}
                <div className="w-full">
                  <button 
                    onClick={() => toggleDropdown('company')}
                    className="flex items-center justify-between w-full p-4 text-left font-semibold text-gray-900 hover:text-[#7559ff] transition-colors rounded-xl hover:bg-white/60 backdrop-blur-sm"
                  >
                    <span>Company</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'company' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'company' && (
                    <div className="mt-2 ml-4 p-3 rounded-xl bg-white/80 backdrop-blur-xl shadow-lg border border-gray-100/50">
                      <div className="space-y-2">
                        {companyItems.map((item, index) => (
                          <Link key={index} href={item.href} onClick={closeMenu} className="block p-3 font-medium text-gray-700 hover:text-[#7559ff] transition-colors rounded-lg hover:bg-gray-50/80">
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-gray-200/50 bg-white/90 backdrop-blur-xl">
                <div className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-[#7559ff] hover:bg-white/80 font-medium h-12 transition-all duration-200">
                    Sign in
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-[#7559ff] to-[#8239b5] hover:from-[#6348ff] hover:to-[#7228a4] text-white font-medium h-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Zap className="w-4 h-4 mr-2" />
                    Request a demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}