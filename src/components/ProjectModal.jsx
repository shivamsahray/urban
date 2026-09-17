import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

export default function ProjectModal({project, onClose}){
  useEffect(() => {
    function onKey(e){ if(e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { 
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey) 
    }
  }, [onClose])

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <motion.div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close"
        >
          <X size={24} className="text-primary" />
        </button>

        {/* Project Image */}
        <div className="w-full aspect-video md:aspect-[3/2] overflow-hidden bg-gray-200">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Content */}
        <div className="p-6 md:p-8 lg:p-12">
          <div className="mb-8">
            {/* Category & Location */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
              <span className="px-4 py-2 bg-accent/10 text-accent font-inter text-xs md:text-sm font-semibold rounded-full">
                {project.category}
              </span>
              <span className="px-4 py-2 bg-border text-primary font-inter text-xs md:text-sm rounded-full">
                {project.location}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-4">
              {project.title}
            </h3>

            {/* Subtitle */}
            <p className="text-muted-text font-inter text-base md:text-lg">
              {project.category} • {project.location}
            </p>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none">
            <p className="text-primary font-inter text-base md:text-lg leading-relaxed mb-8">
              {project.description}
            </p>
          </div>

          {/* CTA */}
          <div className="pt-8 border-t border-border">
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})
                onClose()
              }}
              className="btn-primary"
            >
              Discuss This Project
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
