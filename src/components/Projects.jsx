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
    <section id="projects" className="w-full section-spacing bg-bg">
      <div className="container-responsive">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-primary font-playfair text-3xl md:text-5xl leading-tight mb-4">Selected Spaces</h2>
          <p className="text-muted-text font-inter text-base md:text-lg">
            A glimpse into the kind of spaces we love to create.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 md:mb-16 flex flex-wrap gap-3 md:gap-4">
          {FILTERS.map(f => (
            <button 
              key={f} 
              onClick={()=>setFilter(f)}
              className={`px-4 md:px-6 py-2 md:py-2.5 font-inter text-sm md:text-base font-medium rounded-full transition-all duration-300 border ${
                f === filter 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white text-primary border-border hover:border-accent'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {list.map(p => (
            <motion.article 
              key={p.id} 
              className="group cursor-pointer rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }} 
              onClick={()=>setActive(p)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-200">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <strong className="text-white font-playfair text-lg md:text-xl block mb-1">{p.title}</strong>
                    <span className="text-white/80 font-inter text-sm">{p.category} • {p.location}</span>
                  </div>
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
