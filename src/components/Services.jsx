import services from '../data/services'
import { motion } from 'framer-motion'

export default function Services(){
  return (
    <section id="services" className="w-full section-spacing bg-white">
      <div className="container-responsive">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-primary font-playfair text-3xl md:text-5xl leading-tight mb-4">Our Expertise</h2>
          <p className="text-muted-text font-inter text-base md:text-lg max-w-3xl">
            A selection of services crafted for thoughtful living and working spaces.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, idx) => (
            <motion.div 
              key={s.id} 
              className="group bg-bg rounded-lg p-6 md:p-8 border border-border hover:border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.02 }} 
              initial={{ opacity: 0, y: 8 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.05 }}
            >
              {/* Index */}
              <div className="text-3xl md:text-4xl font-playfair font-bold text-accent/20 group-hover:text-accent/30 transition-colors mb-4">
                0{idx + 1}
              </div>

              {/* Content */}
              <h3 className="text-primary font-playfair text-lg md:text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-text font-inter text-xs md:text-sm tracking-wide uppercase mb-4">{s.subtitle}</p>
              <p className="text-primary font-inter text-sm md:text-base leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
