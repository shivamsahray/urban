import { company } from '../config/company'
import { Mail, Phone, MapPin, MessageCircle, Share2, Users } from 'lucide-react'

export default function Footer(){
  const currentYear = new Date().getFullYear()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="bg-blue-800 text-white">
      {/* Main Footer */}
      <div className="container-responsive py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12 md:mb-16">
          {/* Column 1: About */}
          <div>
            <div className="mb-6">
              <div className="text-lg md:text-xl font-playfair font-bold tracking-[1px]">URBAN CREATION</div>
              <div className="text-xs font-inter tracking-[2px] text-white/60 mt-1">INTERIOR</div>
            </div>
            <p className="text-white/70 font-inter text-sm md:text-base leading-relaxed mb-6">
              Designing thoughtful interiors that bring together beauty, functionality and your unique way of living.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-accent hover:text-primary rounded-lg transition-all duration-300"
                aria-label="Instagram"
              >
                <Share2 size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-accent hover:text-primary rounded-lg transition-all duration-300"
                aria-label="Facebook"
              >
                <Users size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-accent hover:text-primary rounded-lg transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-8">Quick Links</h4>
            <nav className="space-y-4">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Projects', id: 'projects' },
                { label: 'Process', id: 'process' },
                { label: 'Contact', id: 'contact' },
                { label: 'FAQ', id: 'faq' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block text-white/70 font-inter hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-8">Get In Touch</h4>
            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Phone', value: company.phone, href: `tel:${company.phone}` },
                { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
                { icon: MapPin, label: 'Location', value: company.location, href: 'https://share.google/fl3ObXXG9PvSHwyGX'  },
                { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${company.whatsapp}` },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 font-inter text-xs mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : '_self'}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-white font-inter text-sm hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-inter text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 font-inter text-sm text-center md:text-left">
              © {currentYear} Urban Creation Interior. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 font-inter text-sm hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 font-inter text-sm hover:text-accent transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
