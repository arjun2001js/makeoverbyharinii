import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const cities = ['Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Salem', 'Tirunelveli', 'Erode', 'Vellore', 'Thanjavur', 'Dindigul', 'Kanchipuram', 'Nagercoil']
const moreCities = ['Tiruppur', 'Thoothukudi', 'Karur', 'Sivakasi', 'Kumbakonam', 'Ramanathapuram', 'Cuddalore', 'Villupuram', 'Nagapattinam', 'Dharmapuri', 'Krishnagiri', 'Namakkal', 'Perambalur', 'Ariyalur', 'Pudukkottai', 'Virudhunagar', 'Theni', 'Nilgiris (Ooty)', 'Hosur', 'Ambur', 'Pollachi', 'Arakkonam', 'Tindivanam', 'Srivilliputhur']

export default function Locations() {
  const [showMore, setShowMore] = useState(false)
  const subRef = useScrollReveal()
  const titleRef = useScrollReveal()
  const descRef = useScrollReveal()
  const tagsRef = useScrollReveal()

  return (
    <section id="locations" className="locations">
      <p className="section-subtitle light scroll-reveal" ref={subRef}>At Your Doorstep</p>
      <h2 className="scroll-reveal" ref={titleRef}>Wherever You Celebrate, We Arrive</h2>
      <p className="locations-desc scroll-reveal" ref={descRef}>
        From intimate gatherings to grand celebrations — our artistry travels across Tamil Nadu, so you never have to compromise on beauty.
      </p>
      <div className="location-tags scroll-reveal" ref={tagsRef}>
        {cities.map(city => <span key={city}>{city}</span>)}
      </div>
      <button className="btn btn-outline light-btn" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'View More Cities'}
      </button>
      {showMore && (
        <div className="location-tags more-cities" style={{ marginTop: '1rem' }}>
          {moreCities.map(city => <span key={city}>{city}</span>)}
        </div>
      )}
    </section>
  )
}
