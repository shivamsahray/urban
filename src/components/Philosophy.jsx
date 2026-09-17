import { motion } from 'framer-motion'

export default function Philosophy(){
  const principles = [
    {title:'Personalized Design', desc:'Designs tailored to you.'},
    {title:'Smart Space Planning', desc:'Efficient layouts and storage.'},
    {title:'Material & Detail', desc:'Careful selection of finishes.'},
    {title:'Transparent Process', desc:'Clear communication and milestones.'},
    {title:'Quality Execution', desc:'Focus on finishing and craft.'}
  ]

  return (
    <section id="philosophy" className="w-full section-spacing bg-bg">
      <div className="container-responsive">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <h2 className="text-primary font-playfair text-3xl md:text-5xl leading-tight mb-4">
            More Than Beautiful Spaces.
          </h2>
          <p className="text-muted-text font-inter text-base md:text-lg">
            Interior design is a balance of aesthetics, function and comfort. Our approach follows a few guiding principles.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-white rounded-lg p-6 md:p-8 border border-border hover:border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {/* Index */}
              <div className="text-3xl font-playfair font-bold text-accent/30 mb-4">
                0{i + 1}
              </div>

              {/* Content */}
              <h4 className="text-primary font-playfair text-lg font-semibold mb-2">{p.title}</h4>
              <p className="text-muted-text font-inter text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
