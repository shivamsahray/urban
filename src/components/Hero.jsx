import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section id="hero" className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&s=8f2f9c8f6f7f4b1c" 
          alt="Interior Design" 
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="container-responsive relative z-10 flex flex-col items-start justify-center min-h-[90vh] md:min-h-screen py-16 md:py-0">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 12 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.15 }}
        >
          {/* Eyebrow */}
          <div className="text-white/80 text-xs md:text-sm font-inter font-semibold tracking-[0.25em] uppercase mb-6">
            Interior Design • Space • Lifestyle
          </div>

          {/* Hero Title */}
          <h1 className="text-white font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Spaces Designed<br />Around You.
          </h1>

          {/* Hero Subtitle */}
          <p className="text-white/90 text-base md:text-lg font-inter leading-relaxed mb-8 max-w-xl">
            We create thoughtful interiors that bring together beauty, functionality and your unique way of living.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}
              className="btn-primary"
            >
              Explore Our Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
              className="btn-secondary"
            >
              Book a Consultation
            </button>
          </div>
        </motion.div>

        {/* Floating Tag */}
        <motion.div 
          className="absolute bottom-8 left-5 sm:left-8 md:bottom-16 md:left-12 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-full text-white text-xs md:text-sm font-inter font-medium whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Residential • Commercial • Turnkey
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 right-5 sm:right-8 md:bottom-16 md:right-12 text-white flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-inter uppercase tracking-widest opacity-70">Scroll</span>
          <ChevronDown size={20} className="opacity-70" />
        </motion.div>
      </div>
    </section>
  )
}
