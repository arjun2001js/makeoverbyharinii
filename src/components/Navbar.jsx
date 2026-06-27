import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header style={{
      background: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'blur(5px)',
    }}>
      <nav>
        <div className="logo">Makeoverbyharinii</div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => handleNav(e, '#home')}>Home</a></li>
          <li><a href="#packages" onClick={(e) => handleNav(e, '#packages')}>Packages</a></li>
          <li><a href="#portfolio" onClick={(e) => handleNav(e, '#portfolio')}>Portfolio</a></li>
          <li><a href="#locations" onClick={(e) => handleNav(e, '#locations')}>Locations</a></li>
          <li><a href="#contact" onClick={(e) => handleNav(e, '#contact')}>Book Now</a></li>
        </ul>
        <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
  )
}
