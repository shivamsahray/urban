import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section id="hero" className="hero-section">
      <div className="hero-media" aria-hidden>
        <div className="hero-overlay"></div>
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&s=8f2f9c8f6f7f4b1c" alt="Interior" loading="lazy"/>
      </div>

      <div className="container hero-content">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <div className="eyebrow">INTERIOR DESIGN • SPACE • LIFESTYLE</div>
          <h1 className="hero-title">Spaces Designed<br/>Around You.</h1>
          <p className="hero-lead">We create thoughtful interiors that bring together beauty, functionality and your unique way of living.</p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}>Explore Our Work</button>
            <button className="btn btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>Book a Consultation</button>
          </div>
        </motion.div>

        <div className="hero-floating">Residential • Commercial • Turnkey</div>
        <div className="scroll-indicator" aria-hidden>
          <span></span>
        </div>
      </div>
    </section>
  )
}
