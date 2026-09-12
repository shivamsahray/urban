import { useState } from 'react'
import { sendContact } from '../services/contactService'
import { company } from '../config/company'

export default function Contact(){
  const [form, setForm] = useState({name:'', phone:'', email:'', project:'Residential', budget:'', message:''})
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  function update(e){
    const {name, value} = e.target
    setForm(f=> ({...f, [name]: value}))
  }

  async function submit(e){
    e.preventDefault()
    // basic validation
    if(!form.name || !form.phone){ setStatus({error:'Please provide name and phone.'}); return }
    if(!/^\+?[0-9\s-]{6,}$/.test(form.phone)){ setStatus({error:'Please provide a valid phone.'}); return }
    if(form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)){ setStatus({error:'Please provide a valid email.'}); return }

    setLoading(true); setStatus(null)
    try{
      const res = await sendContact(form)
      if(res.ok){ setStatus({ok: 'Request sent — demo mode.'}); setForm({name:'', phone:'', email:'', project:'Residential', budget:'', message:''}) }
      else setStatus({error: res.message || 'Submission failed'})
    }catch(err){ setStatus({error: err.message || 'Submission failed'}) }
    setLoading(false)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left">
            <h2>Let's create something beautiful.</h2>
            <p className="muted">Reach out to start a conversation about your space.</p>
            <ul className="contact-list muted">
              <li>Phone: {company.phone}</li>
              <li>Email: {company.email}</li>
              <li>Location: {company.location}</li>
              <li>WhatsApp: {company.whatsapp}</li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={submit} noValidate>
            <label>Name*
              <input name="name" value={form.name} onChange={update} required />
            </label>
            <label>Phone*
              <input name="phone" value={form.phone} onChange={update} required />
            </label>
            <label>Email
              <input name="email" value={form.email} onChange={update} />
            </label>
            <label>Project Type
              <select name="project" value={form.project} onChange={update}>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Renovation</option>
                <option>Kitchen</option>
                <option>Bedroom</option>
                <option>Living Room</option>
                <option>Office</option>
                <option>Other</option>
              </select>
            </label>
            <label>Budget Range
              <select name="budget" value={form.budget} onChange={update}>
                <option value="">Select</option>
                <option>Under ₹5L</option>
                <option>₹5L - ₹15L</option>
                <option>₹15L - ₹50L</option>
                <option>₹50L+</option>
              </select>
            </label>
            <label>Message*
              <textarea name="message" value={form.message} onChange={update} required rows={5} />
            </label>

            <div className="form-actions">
              <button className="btn btn-primary" type="submit" disabled={loading}>{loading? 'Sending...':'Request Consultation'}</button>
            </div>

            {status?.error && <div className="form-error">{status.error}</div>}
            {status?.ok && <div className="form-ok">{status.ok}</div>}
          </form>
        </div>
      </div>
    </section>
  )
}
