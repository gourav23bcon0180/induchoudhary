import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    document.body.style.overflow = ''
    
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : ''
  }

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={(e) => handleNavClick(e, 'home')}>
            <span className="logo-text">Indu Choudhary</span>
          </a>
          <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#story" 
                className={`nav-link ${activeSection === 'story' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'story')}
              >
                My Story
              </a>
            </li>
            <li>
              <a 
                href="#transformation" 
                className={`nav-link ${activeSection === 'transformation' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'transformation')}
              >
                Transformation
              </a>
            </li>
            <li>
              <a 
                href="#testimonials" 
                className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'testimonials')}
              >
                Results
              </a>
            </li>
            <li>
              <a 
                href="#courses" 
                className={`nav-link ${activeSection === 'courses' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'courses')}
              >
                Courses
              </a>
            </li>
            <li>
              <a 
                href="#join" 
                className="cta-button nav-cta"
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
                Join Now
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
