import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="w-full section-spacing bg-bg">
      <div className="container-responsive">
        {/* Title */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-primary font-playfair text-3xl md:text-5xl leading-tight mb-4">
            Designing spaces that feel uniquely yours.
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Image */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a1b3c4d5e6f7a8b" 
              alt="Design details" 
              loading="lazy"
              className="w-full rounded-xl aspect-square object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <p className="text-muted-text font-inter text-base md:text-lg leading-relaxed mb-12">
              Urban Creation Interior blends thoughtful design, material sensibility, and practical planning to craft spaces that look and live beautifully. We work collaboratively with clients to refine ideas into well-executed spaces.
            </p>

            {/* Highlights Grid */}
            <div className="space-y-8">
              {[
                { num: '01', title: 'Thoughtful Design', desc: 'Design rooted in lifestyle and context.' },
                { num: '02', title: 'Functional Living', desc: 'Plans focused on flow, storage and use.' },
                { num: '03', title: 'Detailed Execution', desc: 'Attention to materials, finishes and craft.' },
              ].map((item) => (
                <div key={item.num} className="flex gap-6 pb-8 border-b border-border last:border-b-0 last:pb-0">
                  <div className="flex-shrink-0">
                    <div className="text-2xl md:text-3xl font-playfair font-bold text-accent">{item.num}</div>
                  </div>
                  <div>
                    <h4 className="text-primary font-playfair text-lg md:text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-text font-inter text-sm md:text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
