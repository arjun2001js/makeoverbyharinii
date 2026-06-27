import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 250, label: 'Happy Brides', suffix: '+' },
  { number: 30, label: 'Cities Covered', suffix: '+' },
  { number: 5, label: 'Years Experience', suffix: '+' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        let current = 0
        const step = target / (1200 / 16)
        function update() {
          current += step
          if (current >= target) { setCount(target); return }
          setCount(Math.floor(current))
          requestAnimationFrame(update)
        }
        update()
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-item">
            <div className="stat-number"><Counter target={stat.number} suffix={stat.suffix} /></div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
