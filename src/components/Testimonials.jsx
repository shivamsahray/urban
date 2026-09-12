import { useState } from 'react'
import { motion } from 'framer-motion'
import testimonials from '../data/testimonials'

export default function Testimonials(){
  const [idx, setIdx] = useState(0)
  const next = ()=> setIdx((i)=> (i+1)%testimonials.length)
  const prev = ()=> setIdx((i)=> (i-1+testimonials.length)%testimonials.length)

  return (
    <section className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="test-wrap">
          <button onClick={prev} aria-label="Previous">‹</button>
          <motion.blockquote key={testimonials[idx].id} initial={{ opacity:0, x:10 }} animate={{ opacity:1, x:0 }} className="testimonial">
            <p>{testimonials[idx].quote}</p>
            <footer className="muted">{testimonials[idx].author}</footer>
          </motion.blockquote>
          <button onClick={next} aria-label="Next">›</button>
        </div>
      </div>
    </section>
  )
}
