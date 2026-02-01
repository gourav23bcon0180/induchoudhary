function Pricing() {
  const plans = [
    {
      name: 'DIGITAL WEALTH\nACADEMY',
      price: '$497 one-time payment',
      features: [
        'Complete DWA course access',
        'Affiliate program (85% profit)',
        'Private community access',
        'Content vault & marketing materials',
        'Regular live training calls',
        'Lifetime updates & new modules'
      ],
      cta: 'BEGIN YOUR TRANSFORMATION →',
      link: 'https://www.fanbasis.com/agency-checkout/digitalwealthacademy/rkq5k?affiliate=indu9489',
      featured: false
    },
    {
      name: 'DWA BUSINESS\nBUNDLE',
      price: '$597 One-time Payment',
      includes: 'Everything in DWA, plus:',
      features: [
        'Email marketing templates',
        'Kickstart strategy guide',
        'Private Telegram access',
        'Additional done-for-you products'
      ],
      cta: "I'M ALL IN! →",
      link: 'https://www.fanbasis.com/agency-checkout/digitalwealthacademy/PNqY4?affiliate=indu9489',
      featured: true
    },
    {
      name: 'DWA PAYMENT\nPLAN',
      price: '2-Month Payment Plan',
      includes: 'Everything in DWA, plus:',
      features: [
        'Email marketing templates',
        'Kickstart strategy guide',
        'Private Telegram access',
        'Resell DWA AFTER payment plan is completed'
      ],
      cta: 'YES PLEASE! →',
      link: 'https://www.fanbasis.com/agency-checkout/digitalwealthacademy/mZOoG?affiliate=indu9489',
      featured: false
    }
  ]

  const includes = [
    '130,000+ STUDENT COMMUNITY',
    'REGULAR CONTENT UPDATES',
    '24/7 ACCESS TO ALL MATERIALS'
  ]

  return (
    <section id="join" className="pricing-section-new">
      <div className="container">
        <div className="pricing-logo">
          <div className="dwa-logo">DWA</div>
          <p className="logo-subtitle">THE DIGITAL WEALTH ACADEMY</p>
        </div>
        <h2 className="pricing-main-title">JOIN DIGITAL<br />WEALTH ACADEMY</h2>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div className={`pricing-card-new ${plan.featured ? 'featured' : ''}`} key={index}>
              {plan.featured && <div className="featured-badge">MOST POPULAR</div>}
              <h3 className="plan-name">{plan.name.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}</h3>
              <p className="plan-price">{plan.price}</p>
              {plan.includes && <p className="plan-includes">{plan.includes}</p>}
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i> {feature}
                  </li>
                ))}
              </ul>
              <a 
                href={plan.link} 
                className={`plan-cta ${plan.featured ? 'featured-cta' : ''}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {plan.cta}
              </a>
              </a>
            </div>
          ))}
        </div>

        <div className="packages-include">
          <h4>WITH ALL 3 PACKAGES INCLUDE:</h4>
          <div className="include-items">
            {includes.map((item, index) => (
              <div className="include-item" key={index}>
                <i className="fas fa-plus"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
