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
    <section id="process" className="process">
      <div className="container">
        <h2>From First Idea to Final Space</h2>
        <div className="timeline">
          {steps.map((s, i)=> (
            <motion.div className="step" key={s.title} initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
              <div className="step-index">0{i+1}</div>
              <div><h4>{s.title}</h4><p className="muted small">{s.desc}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
