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
    <section id="philosophy" className="philosophy">
      <div className="container">
        <h2>More Than Beautiful Spaces.</h2>
        <p className="muted">Interior design is a balance of aesthetics, function and comfort. Our approach follows a few guiding principles.</p>

        <div className="principles">
          {principles.map((p, i)=> (
            <motion.div key={p.title} initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
              <div className="principle-index">0{i+1}</div>
              <div><h4>{p.title}</h4><p className="muted small">{p.desc}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
