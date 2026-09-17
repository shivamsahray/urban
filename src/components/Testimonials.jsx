import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import testimonials from '../data/testimonials'

export default function Testimonials(){
  const [idx, setIdx] = useState(0)
  const next = ()=> setIdx((i)=> (i+1)%testimonials.length)
  const prev = ()=> setIdx((i)=> (i-1+testimonials.length)%testimonials.length)

  return (
    <section className="w-full section-spacing bg-bg">
      <div className="container-responsive">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-primary font-playfair text-3xl md:text-5xl leading-tight">Testimonials</h2>
        </div>

        {/* Carousel */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {/* Previous Button */}
          <button
            onClick={prev}
            className="flex-shrink-0 p-3 md:p-4 rounded-full bg-white border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-primary" />
          </button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[idx].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 w-full max-w-2xl"
            >
              <div className="bg-white rounded-xl p-8 md:p-12 border border-border shadow-sm">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-primary font-inter text-lg md:text-xl leading-relaxed mb-6 italic">
                  "{testimonials[idx].quote}"
                </p>

                {/* Author */}
                <footer className="text-muted-text font-inter font-semibold">
                  — {testimonials[idx].author}
                </footer>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <button
            onClick={next}
            className="flex-shrink-0 p-3 md:p-4 rounded-full bg-white border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-primary" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === idx
                  ? 'w-8 bg-accent'
                  : 'w-2 bg-border hover:bg-muted-text'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
