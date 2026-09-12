import { motion } from 'framer-motion'

import { useEffect } from 'react'

export default function ProjectModal({project, onClose}){
  useEffect(() => {
    function onKey(e){ if(e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [onClose])

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <motion.div className="modal" initial={{ opacity:0, scale:0.98 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-media">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="modal-body">
          <h3>{project.title}</h3>
          <p className="muted">{project.category} • {project.location}</p>
          <p>{project.description}</p>
        </div>
      </motion.div>
    </div>
  )
}
