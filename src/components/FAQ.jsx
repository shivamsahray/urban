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
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-header">
          <div className="eyebrow">FAQ</div>
          <h2>Frequently Asked Questions</h2>
          <p className="faq-subtitle">Everything you need to know before you get started.</p>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <motion.span
                    className="faq-icon"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="faq-answer">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}