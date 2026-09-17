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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-border' 
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex flex-col cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Urban Creation Interior - Home"
          >
            <div className="text-sm md:text-base font-playfair font-bold tracking-[2px] text-primary">URBAN</div>
            <div className="text-[8px] md:text-[10px] font-inter tracking-[3px] text-muted-text">CREATION INTERIOR</div>
          </button>

          {/* Desktop links */}
          <nav className="hidden lg:flex gap-8 items-center">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm font-inter font-medium text-primary/70 hover:text-primary transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <button
              onClick={() => scrollTo('contact')}
              className="hidden md:inline-flex px-6 py-2.5 bg-primary text-white font-inter text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Get a Consultation
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="lg:hidden text-primary p-2 hover:opacity-70 transition-opacity"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile off-canvas menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />

            {/* Mobile menu */}
            <motion.nav
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-xs bg-white z-45 lg:hidden flex flex-col p-8 space-y-8"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            >
              {NAV_LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-base font-inter font-medium text-primary hover:text-accent transition-colors text-left"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollTo('contact')}
                className="mt-4 w-full px-6 py-3 bg-primary text-white font-inter font-semibold rounded-full hover:opacity-90 transition-opacity"
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