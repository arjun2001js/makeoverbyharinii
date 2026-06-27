import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', package: '', location: '', date: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)
  const subRef = useScrollReveal()
  const titleRef = useScrollReveal()
  const formRef = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    // Create confetti
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div')
      confetti.className = 'confetti'
      confetti.style.left = Math.random() * 100 + '%'
      confetti.style.animationDelay = Math.random() * 0.5 + 's'
      confetti.style.background = ['#e91e63', '#f8bbd0', '#d4a373', '#e8daef', '#ad1457'][Math.floor(Math.random() * 5)]
      document.querySelector('.contact').appendChild(confetti)
      setTimeout(() => confetti.remove(), 3000)
    }
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', phone: '', email: '', package: '', location: '', date: '', notes: '' })
    }, 4000)
  }

  const handlePhone = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '')
    setForm({ ...form, phone: val })
  }

  return (
    <section id="contact" className="contact">
      <p className="section-subtitle scroll-reveal" ref={subRef}>Reserve Your Date</p>
      <h2 className="scroll-reveal" ref={titleRef}>Begin Your Beauty Journey</h2>
      <form className="contact-form scroll-reveal" ref={formRef} onSubmit={handleSubmit}>
        {submitted ? (
          <div className="success-message">
            <span className="success-icon">🎉</span>
            <h3>Thank You!</h3>
            <p>We'll contact you shortly to confirm your booking.</p>
          </div>
        ) : (
        <>
        <div className="form-group">
          <input type="text" placeholder="Your Name" required aria-label="Your Name"
            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div className="form-group">
          <input type="tel" placeholder="Phone Number" required aria-label="Phone Number"
            pattern="[0-9]{10}" maxLength="10" inputMode="numeric"
            value={form.phone} onChange={handlePhone}
            title="Please enter a valid 10-digit phone number" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" aria-label="Email"
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div className="form-group">
          <select required aria-label="Select Package"
            value={form.package} onChange={(e) => setForm({ ...form, package: e.target.value })}>
            <option value="">Select Package</option>
            <optgroup label="Bridal Packages">
              <option value="skin-finish">Skin Finish - ₹10,000</option>
              <option value="hd-makeup">HD Makeup - ₹15,000</option>
              <option value="glossy-glass">Glossy/Glass Look - ₹20,000</option>
            </optgroup>
            <optgroup label="Combo (Save ₹500 + No travel charges)">
              <option value="skin-finish+groom">Skin Finish + Groom - ₹12,500 (save ₹500)</option>
              <option value="hd-makeup+groom">HD Makeup + Groom - ₹17,500 (save ₹500)</option>
              <option value="glossy-glass+groom">Glossy/Glass + Groom - ₹22,500 (save ₹500)</option>
              <option value="skin-finish+trial">Skin Finish + Trial - ₹13,000 (save ₹500)</option>
              <option value="hd-makeup+trial">HD Makeup + Trial - ₹18,000 (save ₹500)</option>
              <option value="glossy-glass+trial">Glossy/Glass + Trial - ₹23,000 (save ₹500)</option>
            </optgroup>
            <optgroup label="Standalone (+ Travel Charges)">
              <option value="groom-styling">Groom Styling - ₹3,000</option>
              <option value="trial-makeup">Trial Makeup - ₹3,500</option>
            </optgroup>
          </select>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Event Location (City/Town)" required aria-label="Event Location"
            value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
        </div>
        <div className="form-group">
          <input type="date" required aria-label="Event Date"
            value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
        </div>
        <div className="form-group">
          <textarea placeholder="Any special requests?" rows="3" aria-label="Special requests"
            value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}></textarea>
        </div>
        <button type="submit" className="btn">Send Enquiry</button>
        </>
        )}
      </form>
    </section>
  )
}
