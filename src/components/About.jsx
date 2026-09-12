import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div className="about-media" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a1b3c4d5e6f7a8b" alt="Design details" loading="lazy"/>
          </motion.div>
          <motion.div className="about-content" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2>Designing spaces that feel uniquely yours.</h2>
            <p>Urban Creation Interior blends thoughtful design, material sensibility, and practical planning to craft spaces that look and live beautifully. We work collaboratively with clients to refine ideas into well-executed spaces.</p>

            <div className="highlights">
              <div className="highlight"><div className="num">01</div><div><strong>Thoughtful Design</strong><p>Design rooted in lifestyle and context.</p></div></div>
              <div className="highlight"><div className="num">02</div><div><strong>Functional Living</strong><p>Plans focused on flow, storage and use.</p></div></div>
              <div className="highlight"><div className="num">03</div><div><strong>Detailed Execution</strong><p>Attention to materials, finishes and craft.</p></div></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
