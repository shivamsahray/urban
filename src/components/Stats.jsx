import { companyStats } from '../config/company'

export default function Stats(){
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {companyStats.map(s => (
            <div key={s.label} className="stat">
              <div className="value">{s.value}</div>
              <div className="label muted">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="trust">
          <div>Thoughtful Design</div>
          <div>Personalized Solutions</div>
          <div>End-to-End Support</div>
          <div>Attention to Detail</div>
        </div>
      </div>
    </section>
  )
}
