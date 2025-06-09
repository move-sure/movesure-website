'use client'

import { 
  CheckCircle, 
  Star,
  Clock,
  Target,
  Lightbulb,
  Sparkles,
  Zap,
  TrendingUp,
  ArrowRight,
  Users,
  BarChart3,
  Shield,
  Cpu,
  Database,
  Globe,
  Truck,
  Package,
  Route
} from 'lucide-react'

export default function BenefitsTestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Transport Manager",
      company: "LogiCorp",
      content: "MoveSure transformed our logistics operations. The AI insights helped us reduce costs by 45%.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      role: "Operations Director", 
      company: "FreightFlow",
      content: "The automation features saved us countless hours. Best investment we've made for our transport business.",
      rating: 5,
      avatar: "PS"
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Automate repetitive tasks and reduce manual work by up to 80%. Focus on growing your business instead of paperwork.",
      features: ["Automated bilty generation", "Real-time tracking", "Smart notifications"],
      color: "blue",
      stats: "80% faster"
    },
    {
      icon: Target,
      title: "Increase Accuracy", 
      description: "AI-powered validation ensures 99.9% accuracy in bilty management, eliminating costly human errors.",
      features: ["Smart data validation", "Error detection", "Auto-corrections"],
      color: "purple",
      stats: "99.9% accurate"
    },
    {
      icon: Lightbulb,
      title: "Smart Insights",
      description: "Get actionable insights and predictions that help you make data-driven decisions for your business.",
      features: ["Predictive analytics", "Cost optimization", "Performance metrics"],
      color: "emerald",
      stats: "45% cost reduction"
    }
  ]

  const backgroundIcons = [
    { icon: Truck, top: "10%", left: "5%", delay: "0s", size: "w-8 h-8" },
    { icon: Package, top: "20%", right: "10%", delay: "0.5s", size: "w-6 h-6" },
    { icon: Route, top: "15%", left: "85%", delay: "1s", size: "w-10 h-10" },
    { icon: BarChart3, top: "40%", left: "8%", delay: "1.5s", size: "w-7 h-7" },
    { icon: Shield, top: "30%", right: "5%", delay: "2s", size: "w-9 h-9" },
    { icon: Cpu, top: "60%", left: "3%", delay: "2.5s", size: "w-8 h-8" },
    { icon: Database, top: "70%", right: "15%", delay: "3s", size: "w-6 h-6" },
    { icon: Globe, top: "80%", left: "20%", delay: "3.5s", size: "w-10 h-10" },
    { icon: Users, top: "50%", right: "8%", delay: "4s", size: "w-7 h-7" },
    { icon: Zap, top: "85%", right: "25%", delay: "4.5s", size: "w-8 h-8" },
  ]

  return (
    <>
      {/* Benefits Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Animated Background Icons */}
        {backgroundIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.top ? `top-[${item.top}]` : ''} ${item.left ? `left-[${item.left}]` : ''} ${item.right ? `right-[${item.right}]` : ''} text-gray-200 animate-float opacity-30 hover:opacity-60 transition-opacity duration-300`}
            style={{ 
              animationDelay: item.delay,
              top: item.top,
              left: item.left,
              right: item.right
            }}
          >
            <item.icon className={`${item.size}`} />
          </div>
        ))}
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-medium text-sm">AI-Powered Platform</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Why Choose
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> MoveSure?</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Join thousands of transport businesses that have revolutionized their operations with our intelligent platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`group animate-fade-in-up`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2 h-full">
                  
                  {/* Stats Badge */}
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${
                    benefit.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    benefit.color === 'purple' ? 'from-purple-500 to-purple-600' :
                    'from-emerald-500 to-emerald-600'
                  } text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    {benefit.stats}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${
                    benefit.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    benefit.color === 'purple' ? 'from-purple-500 to-purple-600' :
                    'from-emerald-500 to-emerald-600'
                  } rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center space-x-3 group/item"
                      >
                        <CheckCircle className={`w-5 h-5 ${
                          benefit.color === 'blue' ? 'text-blue-500' :
                          benefit.color === 'purple' ? 'text-purple-500' :
                          'text-emerald-500'
                        } group-hover/item:scale-110 transition-transform duration-200`} />
                        <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover arrow */}
                  <div className="flex items-center justify-end mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className={`w-5 h-5 ${
                      benefit.color === 'blue' ? 'text-blue-500' :
                      benefit.color === 'purple' ? 'text-purple-500' :
                      'text-emerald-500'
                    } transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#f8fafc_25%,transparent_25%),linear-gradient(-45deg,#f8fafc_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f8fafc_75%),linear-gradient(-45deg,transparent_75%,#f8fafc_75%)] bg-[size:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-medium text-sm">Success Stories</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Trusted by
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Industry Leaders</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              See how transport businesses across India are transforming their operations with MoveSure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`group animate-fade-in-up`}
                style={{ animationDelay: `${index * 200 + 400}ms` }}
              >
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1 h-full">
                  
                  {/* Quote mark */}
                  <div className="absolute top-6 right-6 text-4xl text-gray-200 font-serif opacity-50">&ldquo;</div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-200" 
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed group-hover:text-gray-800 transition-colors">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.role}
                      </div>
                      <div className="text-purple-600 text-sm font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .delay-200 { animation-delay: 200ms; }
        .delay-400 { animation-delay: 400ms; }
      `}</style>
    </>
  )
}