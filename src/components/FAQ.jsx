import { useState } from 'react'
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'What interior design services do you provide?', a: 'We provide end-to-end interior design and execution services for residential and commercial projects.' },
  { q: 'Do you handle turnkey execution?', a: 'Yes — design, procurement and execution can be coordinated as part of turnkey services.' },
  { q: 'Do you provide 3D designs?', a: 'We offer 3D visualisations to help you preview the final space.' },
  { q: 'Can I customize the design according to my budget?', a: 'Designs are developed to match your brief and budget. We work to present options and value-engineering where needed.' },
  { q: 'How does the consultation process work?', a: 'Initial consultation captures requirements, after which a proposal and scope can be prepared.' },
  { q: 'How long does an interior project take?', a: 'Project timelines depend on scope, finishes and approvals; we discuss timelines during planning.' },
  { q: 'Do you handle renovation projects?', a: 'Yes, we undertake renovation and refurbishment works.' },
  { q: 'Do you work on residential and commercial projects?', a: 'We work across residential and commercial interiors.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="w-full section-spacing bg-white" id="faq">
      <div className="container-responsive">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <div className="text-accent text-xs md:text-sm font-inter font-semibold tracking-[0.25em] uppercase mb-4">FAQ</div>
          <h2 className="text-primary font-playfair text-3xl md:text-5xl leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-text font-inter text-base md:text-lg">
            Everything you need to know before you get started.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                className="bg-bg rounded-xl border border-border hover:border-accent transition-all duration-300"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 md:px-8 py-5 md:py-6 text-left hover:bg-white transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-inter font-semibold text-primary pr-4">
                    {f.q}
                  </span>
                  <motion.div
                    className="flex-shrink-0"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <Plus size={20} className="text-accent" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-5 md:pb-6 border-t border-border/50">
                        <p className="text-muted-text font-inter text-base leading-relaxed">
                          {f.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}