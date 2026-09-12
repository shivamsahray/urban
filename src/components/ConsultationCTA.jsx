export default function ConsultationCTA(){
  return (
    <section className="consult">
      <div className="container">
        <div className="consult-inner">
          <div>
            <h2>Have a space in mind?</h2>
            <p className="muted">Let's turn your ideas into a space that feels completely yours.</p>
          </div>
          <div className="consult-actions">
            <button className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>Start Your Project</button>
            <a className="btn btn-outline" href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '91XXXXXXXXXX'}?text=${encodeURIComponent('Hello Urban Creation Interior, I would like to discuss an interior design project.')}`} target="_blank">Talk on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  )
}
