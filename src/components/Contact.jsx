import { useState } from 'react'
import { sendContact } from '../services/contactService'
import { company } from '../config/company'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

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
    <section id="contact" className="w-full section-spacing bg-white">
      <div className="container-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-primary font-playfair text-3xl md:text-5xl leading-tight mb-6">
              Let's create something beautiful.
            </h2>
            <p className="text-muted-text font-inter text-base md:text-lg mb-12">
              Reach out to start a conversation about your space.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Phone, label: 'Phone', value: company.phone, href: `tel:${company.phone}` },
                { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
                { icon: MapPin, label: 'Location', value: company.location, href: null },
                { icon: MessageCircle, label: 'WhatsApp', value: company.whatsapp, href: `https://wa.me/${company.whatsapp}` },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-muted-text font-inter text-sm font-medium mb-1">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-primary font-inter font-semibold hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-primary font-inter font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Form */}
          <form className="flex flex-col justify-center space-y-6" onSubmit={submit} noValidate>
            {/* Name */}
            <div>
              <label className="block text-primary font-inter font-semibold text-sm mb-3">
                Name *
              </label>
              <input 
                name="name" 
                value={form.name} 
                onChange={update} 
                required
                placeholder="Your full name"
                className="w-full px-5 py-3 bg-white border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 font-inter transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-primary font-inter font-semibold text-sm mb-3">
                Phone *
              </label>
              <input 
                name="phone" 
                value={form.phone} 
                onChange={update} 
                required
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-5 py-3 bg-white border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 font-inter transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-primary font-inter font-semibold text-sm mb-3">
                Email
              </label>
              <input 
                name="email" 
                value={form.email} 
                onChange={update}
                type="email"
                placeholder="your@email.com"
                className="w-full px-5 py-3 bg-white border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 font-inter transition-all"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-primary font-inter font-semibold text-sm mb-3">
                Project Type
              </label>
              <select 
                name="project" 
                value={form.project} 
                onChange={update}
                className="w-full px-5 py-3 bg-white border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 font-inter transition-all text-primary"
              >
                <option>Residential</option>
                <option>Commercial</option>
                <option>Renovation</option>
                <option>Kitchen</option>
                <option>Bedroom</option>
                <option>Living Room</option>
                <option>Office</option>
                <option>Other</option>
              </select>
            </div>

            {/* Budget Range */}
            <div>
              <label className="block text-primary font-inter font-semibold text-sm mb-3">
                Budget Range
              </label>
              <select 
                name="budget" 
                value={form.budget} 
                onChange={update}
                className="w-full px-5 py-3 bg-white border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 font-inter transition-all text-primary"
              >
                <option value="">Select Budget</option>
                <option>Under ₹5L</option>
                <option>₹5L - ₹15L</option>
                <option>₹15L - ₹50L</option>
                <option>₹50L+</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-primary font-inter font-semibold text-sm mb-3">
                Message *
              </label>
              <textarea 
                name="message" 
                value={form.message} 
                onChange={update} 
                required 
                rows={5}
                placeholder="Tell us about your space and project..."
                className="w-full px-5 py-3 bg-white border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 font-inter transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading}
              className="btn-primary w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Request Consultation'}
            </button>

            {/* Status Messages */}
            {status?.error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 font-inter text-sm">{status.error}</p>
              </div>
            )}
            {status?.ok && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 font-inter text-sm font-semibold">{status.ok}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
