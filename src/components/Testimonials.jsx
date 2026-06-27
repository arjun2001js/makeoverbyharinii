import { useEffect, useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const testimonials = [
  { name: 'Gaayathridevi Ravi', location: 'Chennai', text: 'Very good finishing. Maintained professionalism and taken care of Reception Makeup properly. No smudge, stayed well. Much Recommended!' },
  { name: 'Sindhuja Ayyappan', location: 'Srirangam', text: 'Booked her for my wedding. Absolutely the best. She calmly listened to how I want to look for my big day and dolled me up perfectly. She was punctual in reaching the venue as well as getting me ready.' },
  { name: 'Madhumitha G.', location: 'Neyveli', text: 'I really loved the makeup and hairdo. Everything was done very neatly and it looked simple and natural. The saree draping was also perfect. Everything stayed nicely in place till the end. Glad to have chosen you for my big day!' },
  { name: 'Arun', location: 'Madurai', text: 'She did an amazing job on my cousin\'s makeup. It looked so natural, elegant, and beautiful. She was professional, patient, and really understood what suited her best. Highly recommend her work!' },
  { name: 'Akshaya Rengarajan', location: 'Coimbatore', text: 'For the reception, you gave me a beautiful skin-finish look — so natural, glowing, and elegant. And the HD makeup was simply marvellous! It looked flawless, felt light, and stayed perfect all day long.' },
]

export default function Testimonials() {
  const sectionRef = useScrollReveal()
  const scrollRef = useRef(null)

  // Auto scroll every 5 seconds
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    let index = 0

    const timer = setInterval(() => {
      index = (index + 1) % testimonials.length
      const card = container.children[index]
      if (card) {
        container.scrollTo({ left: card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2, behavior: 'smooth' })
      }
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="testimonials scroll-reveal" ref={sectionRef}>
      <p className="section-subtitle">Happy Brides</p>
      <h2>What They Say</h2>
      <div className="testimonial-track" ref={scrollRef}>
        {testimonials.map((t, i) => (
          <div className="testimonial-snap-card" key={i}>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <strong>{t.name}</strong>
              <span>{t.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
