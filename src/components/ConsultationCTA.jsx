import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function ConsultationCTA(){
  return (
    <section className="w-full section-spacing bg-blue-400 text-white">
      <div className="container-responsive">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-4">
              Have a space in mind?
            </h2>
            <p className="font-inter text-lg text-white/80">
              Let's turn your ideas into a space that feels completely yours.
            </p>
          </div>

          {/* Right Actions */}
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 w-full md:w-auto">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
              className="px-8 py-3 md:py-4 bg-accent text-primary font-inter font-semibold rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Start Your Project
            </button>
            <a
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '91XXXXXXXXXX'}?text=${encodeURIComponent('Hello Urban Creation Interior, I would like to discuss an interior design project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 md:py-4 border-2 border-white text-white font-inter font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              <MessageCircle size={20} />
              <span className="whitespace-nowrap">Talk on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
