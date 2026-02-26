import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">&#x1F3C6; Scranton&apos;s #1 Paper Company Since 2005</div>
          <h1>
            Limitless <span>Paper</span> in a<br />Paperless World
          </h1>
          <p className="hero-tagline">
            Providing Northeast Pennsylvania with premium paper products,
            unmatched customer service, and an unforgettable office culture.
          </p>
          <Link to="/team" className="hero-cta">
            Meet Our Team &#8594;
          </Link>
        </div>
      </section>

      <div className="stats">
        <div className="stat-card">
          <div className="stat-number">20+</div>
          <div className="stat-label">Years in Business</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">500+</div>
          <div className="stat-label">Loyal Clients</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">60</div>
          <div className="stat-label">Paper Varieties</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">&#8734;</div>
          <div className="stat-label">Birthday Parties</div>
        </div>
      </div>

      <section className="section">
        <div className="section-header">
          <h2>Why Choose Dunder Mifflin?</h2>
          <p>We put the &ldquo;fun&rdquo; in &ldquo;fundamental business supplies.&rdquo;</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">&#x1F4C4;</div>
            <h3>Premium Paper</h3>
            <p>
              From 20lb copy to 110lb cardstock, our paper practically sells itself.
              And when it doesn&apos;t, we have Michael.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1F91D;</div>
            <h3>Personal Touch</h3>
            <p>
              Unlike big-box retailers, we visit every client personally.
              Whether they want us to or not.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1F69A;</div>
            <h3>Fast Delivery</h3>
            <p>
              Our warehouse team, led by Darryl, gets your paper there on time.
              Most of the time. Okay, eventually.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1F3C6;</div>
            <h3>Award Winning</h3>
            <p>
              Winner of the Dundies &ldquo;Best Paper Company&rdquo; award
              every year since we made the award up.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x2665;&#xFE0F;</div>
            <h3>Family Culture</h3>
            <p>
              We&apos;re not just coworkers, we&apos;re a family.
              A sometimes dysfunctional, always entertaining family.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1F30D;</div>
            <h3>Going Global</h3>
            <p>
              With our new European Paper Diplomat on staff,
              world domination is only a ream away.
            </p>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-box">
          <p className="quote-text">
            &ldquo;Would I rather be feared or loved? Easy. Both. I want people
            to be afraid of how much they love me.&rdquo;
          </p>
          <p className="quote-author">Michael Scott</p>
          <p className="quote-role">Regional Manager</p>
        </div>
      </section>
    </>
  )
}

export default Home
