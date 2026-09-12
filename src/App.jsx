import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Philosophy from './components/Philosophy'
import Process from './components/Process'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ConsultationCTA from './components/ConsultationCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App(){
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Philosophy />
        <Process />
        <Stats />
        <Testimonials />
        <FAQ />
        <ConsultationCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
