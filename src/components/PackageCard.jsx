import { useRef, useEffect, useState } from 'react'

export default function PackageCard({ pkg, delay }) {
  const cardRef = useRef(null)
  const priceRef = useRef(null)
  const [animated, setAnimated] = useState(false)

  // 3D tilt + color blob
  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20
    card.style.transform = `translateY(-12px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    card.style.setProperty('--mouse-x', x + 'px')
    card.style.setProperty('--mouse-y', y + 'px')
  }

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ''
  }

  // Price counter
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated) {
        setAnimated(true)
        animatePrice()
      }
    }, { threshold: 0.5 })

    if (priceRef.current) observer.observe(priceRef.current)
    return () => observer.disconnect()
  }, [animated])

  const animatePrice = () => {
    const el = priceRef.current
    if (!el) return
    const target = pkg.price
    let current = 0
    const step = target / (1500 / 16)

    function update() {
      current += step
      if (current >= target) {
        el.innerHTML = `₹${target.toLocaleString('en-IN')} <span class="travel">+ Travel Charges</span>`
        return
      }
      el.innerHTML = `₹${Math.floor(current).toLocaleString('en-IN')} <span class="travel">+ Travel Charges</span>`
      requestAnimationFrame(update)
    }
    update()
  }

  return (
    <div
      ref={cardRef}
      className={`package-card ${pkg.featured ? 'featured' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {pkg.featured && <div className="badge">Most Booked</div>}
      <div className="package-number">{pkg.number}</div>
      <h3>{pkg.name}</h3>
      <div className="price" ref={priceRef}>
        ₹{pkg.price.toLocaleString('en-IN')} <span className="travel">+ Travel Charges</span>
      </div>
      <div className="divider"></div>
      {pkg.description && <p className="package-desc">{pkg.description}</p>}
      <ul>
        {pkg.items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      {pkg.bestFor && (
        <div className="best-for">
          <span className="best-for-label">Best for:</span>
          {pkg.bestFor.map((item, i) => <span key={i} className="best-for-tag">{item}</span>)}
        </div>
      )}
      <a href="#contact" className={`btn ${pkg.featured ? '' : 'btn-outline'}`}
        onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
        Book Now
      </a>
    </div>
  )
}
