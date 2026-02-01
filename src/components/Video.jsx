function Video() {
  return (
    <section id="video" className="video-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Watch and Learn</span>
          <h2 className="section-title">My Presentation Video</h2>
          <p className="section-subtitle">See how I built my digital income journey and how you can too.</p>
        </div>
        
        <div className="video-wrapper">
          <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
            <iframe
              src="https://www.youtube.com/embed/lB06s5L6vYo"
              title="Presentation Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            ></iframe>
          </div>
          <div className="video-cta">
            <a 
              href="#join" 
              className="cta-button-primary"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('join')
                if (element) {
                  const headerHeight = document.getElementById('header')?.offsetHeight || 0
                  const targetPosition = element.offsetTop - headerHeight
                  window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                  })
                }
              }}
            >
              <span>Start Your Journey Today</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Video
