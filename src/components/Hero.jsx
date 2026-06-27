export default function Hero() {
  const handleClick = (e) => {
    e.preventDefault()
    document.querySelector('#packages')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-subtitle">— Tamil Nadu's Trusted Makeup Artist —</p>
        <h1>The Art of Timeless Beauty</h1>
        <p className="hero-desc">
          A bespoke makeup experience crafted with precision, passion, and the finest products — delivered exclusively to you, anywhere in Tamil Nadu.
        </p>
        <a href="#packages" className="btn" onClick={handleClick}>Discover Our Craft</a>
      </div>
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  )
}
