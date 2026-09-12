import { useState } from 'react'
import projectsData from '../data/projects'
import { motion } from 'framer-motion'
import ProjectModal from './ProjectModal'

const FILTERS = ['All','Residential','Commercial','Kitchen','Bedroom','Living','Workspace']

export default function Projects(){
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  const list = projectsData.filter(p => filter==='All' ? true : p.category===filter)

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Selected Spaces</h2>
        <p className="muted">A glimpse into the kind of spaces we love to create.</p>

        <div className="filters">
          {FILTERS.map(f => <button key={f} className={f===filter? 'active':''} onClick={()=>setFilter(f)}>{f}</button>)}
        </div>

        <div className="projects-grid">
          {list.map(p => (
            <motion.article key={p.id} className="project-card" whileHover={{ scale:1.02 }} onClick={()=>setActive(p)}>
              <div className="media">
                <img src={p.image} alt={p.title} loading="lazy"/>
                <div className="overlay">
                  <div className="meta"><strong>{p.title}</strong><span>{p.category} • {p.location}</span></div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {active && <ProjectModal project={active} onClose={()=>setActive(null)}/>} 
      </div>
    </section>
  )
}
