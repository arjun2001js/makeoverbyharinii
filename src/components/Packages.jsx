import { useEffect, useRef, useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import PackageCard from './PackageCard'

const packages = [
  { number: '01', name: 'Skin Finish', price: 10000, items: ['Makeup', 'Hairstyle', 'Saree Draping', 'Lens & Lashes', 'Hair Extension'], description: 'Enhances your natural beauty with a fresh, radiant, skin-like glow. Seamless, luminous finish — elegant and timeless.', bestFor: ['Traditional weddings', 'Day ceremonies', 'Natural glow lovers'] },
  { number: '02', name: 'HD Makeup', price: 15000, items: ['Makeup', 'Hairdo', 'Saree Draping', 'Lens & Lashes', 'Hair Extension', 'Artificial Flowers'], featured: true, description: 'Flawless, smooth complexion perfect for photography & videography. Medium to full coverage, lightweight feel — lasts 12+ hours.', bestFor: ['Bridal weddings', 'Receptions', 'Photoshoots'] },
  { number: '03', name: 'Glossy/Glass Look', price: 20000, items: ['Makeup', 'Hairdo', 'Saree Draping', 'Lens & Lashes', 'Hair Extension', 'Artificial Flowers'], description: 'Luxurious glass-skin effect with intense hydration and luminous glow. Plump, fresh, radiant — trendy, editorial-inspired bridal look.', bestFor: ['Evening weddings', 'Reception looks', 'Fashion-forward brides'] },
]

export default function Packages() {
  const subtitleRef = useScrollReveal()
  const titleRef = useScrollReveal()
  const gridRef = useScrollReveal()
  const extraRef = useScrollReveal()
  const noteRef = useScrollReveal()

  return (
    <section id="packages" className="packages section-wave">
      <p className="section-subtitle scroll-reveal" ref={subtitleRef}>👰 Bridal Packages</p>
      <h2 className="scroll-reveal" ref={titleRef}>Your Perfect Look Awaits</h2>
      <div className="package-grid scroll-reveal" ref={gridRef}>
        {packages.map((pkg, i) => (
          <PackageCard key={i} pkg={pkg} delay={i * 100} />
        ))}
      </div>

      <div className="extra-packages scroll-reveal" ref={extraRef}>
        <div className="extra-card" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} style={{cursor:'pointer'}}>
          <h4>🤵 Groom Styling</h4>
          <p className="extra-price">₹3,000</p>
          <a href="#contact" className="btn btn-outline extra-btn" onClick={(e) => { e.stopPropagation(); e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>Book Now</a>
        </div>
        <div className="extra-card" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} style={{cursor:'pointer'}}>
          <h4>🌸 Trial Makeup</h4>
          <p className="extra-price">₹3,500 <span className="travel">+ Travel Charges</span></p>
          <p className="extra-note">Makeup & On-the-Spot Saree Draping</p>
          <a href="#contact" className="btn btn-outline extra-btn" onClick={(e) => { e.stopPropagation(); e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>Book Now</a>
        </div>
      </div>

      <div className="booking-note scroll-reveal" ref={noteRef}>
        <p>📅 Reserve your slot at least 2 months before your function date. Bookings are on a first-come, first-priority basis.</p>
        <p style={{marginTop:'0.8rem', color:'var(--magenta)', fontSize:'0.8rem'}}>💡 Combo Offer: Book Groom Styling or Trial Makeup with any bridal package — save ₹500 & no extra travel charges!</p>
      </div>
    </section>
  )
}
