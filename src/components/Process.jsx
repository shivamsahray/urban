import { motion } from 'framer-motion'

const steps = [
  {title:'Discover', desc:'Understand lifestyle, needs and vision.'},
  {title:'Plan', desc:'Space analysis and layout direction.'},
  {title:'Design', desc:'Layouts, materials and 3D visualisation.'},
  {title:'Refine', desc:'Review and finalize details.'},
  {title:'Execute', desc:'Coordinate execution and finishing.'},
  {title:'Handover', desc:'Deliver a finished space.'}
]

export default function Process(){
  return (
    <section id="process" className="w-full section-spacing bg-white">
      <div className="container-responsive">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-primary font-playfair text-3xl md:text-5xl leading-tight">
            From First Idea to Final Space
          </h2>
        </div>

        {/* Timeline - Desktop Horizontal / Mobile Vertical */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {steps.map((s, i) => (
            <motion.div 
              key={s.title}
              className="relative flex flex-col"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {/* Step Number Circle */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                  <span className="text-lg font-playfair font-bold text-accent">0{i + 1}</span>
                </div>
              </div>

              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-6 w-0.5 h-32 bg-gradient-to-b from-accent/50 to-accent/0"></div>
              )}

              {/* Content */}
              <h4 className="text-primary font-playfair text-xl md:text-2xl font-semibold mb-2">{s.title}</h4>
              <p className="text-muted-text font-inter text-sm md:text-base leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
