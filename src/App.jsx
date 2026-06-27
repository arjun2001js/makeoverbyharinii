import { useState, useEffect, useRef } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Portfolio from './components/Portfolio'
import Locations from './components/Locations'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'
import Sparkle from './components/Sparkle'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  // Cursor sparkle
  useEffect(() => {
    const handleMouse = (e) => {
      if (Math.random() > 0.85) {
        const sparkle = document.createElement('div')
        sparkle.className = 'sparkle'
        sparkle.style.left = e.clientX + 'px'
        sparkle.style.top = e.clientY + 'px'
        document.body.appendChild(sparkle)
        setTimeout(() => sparkle.remove(), 800)
      }
    }
    document.addEventListener('mousemove', handleMouse)
    return () => document.removeEventListener('mousemove', handleMouse)
  }, [])

  // Scroll progress bar
  const [scrollProgress, setScrollProgress] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((window.scrollY / total) * 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Loader visible={loading} />
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      <div className="floating-elements">
        <span className="float-dot"></span>
        <span className="float-dot"></span>
        <span className="float-dot"></span>
        <span className="float-dot"></span>
        <span className="float-dot"></span>
      </div>
      <Navbar />
      <Hero />
      <Stats />
      <Packages />
      <Testimonials />
      <Portfolio />
      <Locations />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  )
}

export default App
