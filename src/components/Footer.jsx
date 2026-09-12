import { company } from '../config/company'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-footer">URBAN CREATION INTERIOR</div>
          <div className="tagline muted">Designing Spaces. Creating Experiences.</div>
        </div>

        <div className="footer-nav muted">
          <a onClick={()=>document.getElementById('hero')?.scrollIntoView({behavior:'smooth'})}>Home</a>
          <a onClick={()=>document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}>About</a>
          <a onClick={()=>document.getElementById('services')?.scrollIntoView({behavior:'smooth'})}>Services</a>
          <a onClick={()=>document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}>Projects</a>
          <a onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>Contact</a>
        </div>

        <div className="footer-contact muted">
          <div>{company.phone}</div>
          <div>{company.email}</div>
          <div>{company.location}</div>
        </div>
      </div>
      <div className="copyright">© 2026 Urban Creation Interior. All rights reserved.</div>
    </footer>
  )
}
