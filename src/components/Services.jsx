import services from '../data/services'
import { motion } from 'framer-motion'

export default function Services(){
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Our Expertise</h2>
        <p className="muted">A selection of services crafted for thoughtful living and working spaces.</p>

        <div className="services-grid">
          {services.map((s, idx) => (
            <motion.div key={s.id} className="service" whileHover={{ scale: 1.02 }} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once:true }} transition={{ delay: idx * 0.05 }}>
              <div className="service-index">0{idx+1}</div>
              <div className="service-body">
                <h3>{s.title}</h3>
                <p className="muted small">{s.subtitle}</p>
                <p className="desc">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
