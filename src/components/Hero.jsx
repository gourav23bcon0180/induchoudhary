function Hero() {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = document.getElementById('header')?.offsetHeight || 0
      const targetPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-badge">
          <i className="fas fa-star"></i>
          <span>Join 130,000+ Learners Worldwide</span>
        </div>
        <h1 className="hero-title">
          Build Real Digital Income<br />
          <span className="highlight">by Learning Skills That Work Online</span>
        </h1>
        <p className="hero-subtitle">
          A beginner-friendly learning path designed for people starting from absolutely zero. Learn how real skills are applied online to create sustainable digital income - not temporary wins or fake promises - so your income can support your life and lifestyle long-term, from anywhere.
        </p>
        <div className="hero-cta-group">
          <a 
            href="#join" 
            className="cta-button-primary"
            onClick={(e) => handleNavClick(e, 'join')}
          >
            <span>Start Your Journey</span>
            <i className="fas fa-arrow-right"></i>
          </a>
          <a href="#story" className="cta-button-secondary" onClick={(e) => handleNavClick(e, 'story')}>
            <i className="fas fa-play-circle"></i>
            <span>Watch My Story</span>
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">130K+</span>
            <span className="stat-label">Active Learners</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">$10K+</span>
            <span className="stat-label">Monthly Earnings</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Community Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
