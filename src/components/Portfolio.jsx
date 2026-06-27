import { useState, useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import portfolioImages from '../data/portfolioImages'

const categories = [
  { id: 'skin-finish', label: 'Skin Finish', cover: '/portfolio/skin-finish/Main.jpeg' },
  { id: 'hd-makeup', label: 'HD Makeup', cover: '/portfolio/hd-makeup/Main.png' },
  { id: 'glossy-glass-look', label: 'Glossy/Glass', cover: '/portfolio/glossy-glass-look/Main.png' },
]

export default function Portfolio() {
  const [openCategory, setOpenCategory] = useState(null)
  const [viewImage, setViewImage] = useState(null)
  const [muted, setMuted] = useState(true)
  const videoRef = useRef(null)
  const sectionRef = useScrollReveal()

  const galleryImages = openCategory ? portfolioImages.filter(img => img.category === openCategory) : []
  const categoryLabel = categories.find(c => c.id === openCategory)?.label || ''

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setMuted(!muted)
    }
  }

  // Swipe for single image view
  const touchStart = useRef(0)
  const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    const diff = touchStart.current - e.changedTouches[0].clientX
    const currentIndex = galleryImages.findIndex(img => img.src === viewImage)
    if (diff > 40 && currentIndex < galleryImages.length - 1) setViewImage(galleryImages[currentIndex + 1].src)
    else if (diff < -40 && currentIndex > 0) setViewImage(galleryImages[currentIndex - 1].src)
  }

  return (
    <>
      <section id="portfolio" className="portfolio scroll-reveal" ref={sectionRef}>
        <p className="section-subtitle">Our Work</p>
        <h2>Portfolio</h2>

        <div className="featured-video">
          <video ref={videoRef} src="/portfolio/Bride-look.mp4.MP4" autoPlay loop muted playsInline />
          <button className="mute-btn" onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
            {muted ? '🔇' : '🔊'}
          </button>
          <p className="video-caption">Bridal Look</p>
        </div>

        <div className="portfolio-covers">
          {categories.map(cat => (
            <div className="portfolio-cover-item" key={cat.id} onClick={() => setOpenCategory(cat.id)}>
              <img src={cat.cover} alt={cat.label} loading="lazy" />
              <div className="cover-overlay">
                <span className="cover-label">{cat.label}</span>
                <span className="cover-count">{portfolioImages.filter(i => i.category === cat.id).length} photos</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {openCategory && (
        <div className="gallery-page">
          <div className="gallery-header">
            <button className="gallery-back" onClick={() => setOpenCategory(null)}>← Back</button>
            <h3>{categoryLabel}</h3>
            <span className="gallery-count">{galleryImages.length} photos</span>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div className="gallery-thumb" key={i} onClick={() => setViewImage(img.src)}>
                <img src={img.src} alt={categoryLabel} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      )}

      {viewImage && (
        <div className="image-viewer" onClick={() => setViewImage(null)} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <button className="viewer-close" onClick={() => setViewImage(null)}>✕</button>
          <img src={viewImage} alt="" onClick={(e) => e.stopPropagation()} />
          <div className="viewer-counter">{galleryImages.findIndex(img => img.src === viewImage) + 1} / {galleryImages.length}</div>
        </div>
      )}
    </>
  )
}
