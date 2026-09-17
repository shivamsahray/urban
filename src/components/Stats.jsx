import { companyStats } from '../config/company'
import { motion } from 'framer-motion'

export default function Stats(){
  return (
    <section className="w-full section-spacing bg-white border-y border-border">
      <div className="container-responsive">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-24">
          {companyStats.map((s, idx) => (
            <motion.div 
              key={s.label}
              className="text-center"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-accent mb-3">
                {s.value}
              </div>
              <p className="text-muted-text font-inter text-sm md:text-base tracking-wide uppercase">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            'Thoughtful Design',
            'Personalized Solutions',
            'End-to-End Support',
            'Attention to Detail',
          ].map((item, idx) => (
            <motion.div
              key={item}
              className="bg-bg rounded-lg p-6 md:p-8 border border-border hover:border-accent transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <p className="text-primary font-inter font-semibold text-base md:text-lg">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
