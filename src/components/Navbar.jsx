// import { useEffect, useState } from 'react'
// import { Menu, X } from 'lucide-react'
// import { motion } from 'framer-motion'
// import { company } from '../config/company'

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     function onScroll() {
//       setScrolled(window.scrollY > 40)
//     }
//     onScroll()
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   function scrollTo(id) {
//     const el = document.getElementById(id)
//     if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
//     setOpen(false)
//   }

//   return (
//     <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`} aria-label="Main navigation">
//       <div className="container nav-inner">
//         <div className="brand" onClick={() => scrollTo('hero')}>
//           <div className="brand-title">URBAN</div>
//           <div className="brand-sub">CREATION INTERIOR</div>
//         </div>

//         <nav className={`links ${open ? 'open' : ''}`}>
//           <button className="nav-close" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
//           <a onClick={() => scrollTo('hero')}>Home</a>
//           <a onClick={() => scrollTo('about')}>About</a>
//           <a onClick={() => scrollTo('services')}>Services</a>
//           <a onClick={() => scrollTo('projects')}>Projects</a>
//           <a onClick={() => scrollTo('process')}>Process</a>
//           <a onClick={() => scrollTo('contact')}>Contact</a>
//         </nav>

//         <div className="nav-actions">
//           <button className="cta" onClick={() => scrollTo('contact')}>Get a Consultation</button>
//           <button className="hamburger" onClick={() => setOpen((v) => !v)} aria-label="Open menu">
//             <Menu />
//           </button>
//         </div>
//       </div>
//     </header>
//   )
// }

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { company } from '../config/company'

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open, and close on ESC
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--menu-open' : ''}`} aria-label="Main navigation">
      <div className="container nav-inner">
        <div className="brand" onClick={() => scrollTo('hero')}>
          <div className="brand-title">URBAN</div>
          <div className="brand-sub">CREATION INTERIOR</div>
        </div>

        {/* Desktop links */}
        <nav className="links links--desktop">
          {NAV_LINKS.map((l) => (
            <a key={l.id} onClick={() => scrollTo(l.id)}>{l.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="cta cta--desktop" onClick={() => scrollTo('contact')}>Get a Consultation</button>

          {/* Single toggle button — icon swaps between menu / close */}
          <button
            className="hamburger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile off-canvas menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="links links--mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            >
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.button
                className="cta cta--mobile"
                onClick={() => scrollTo('contact')}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + NAV_LINKS.length * 0.05 }}
              >
                Get a Consultation
              </motion.button>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}