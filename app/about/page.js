export const metadata = {
  title: "About Us | GOAT Assets | Built on Insight. Driven by Value.",
  description: "Learn about GOAT Assets, our core values (Integrity, Excellence, Partnership, Impact), and our experienced real estate advisory team.",
};

export default function About() {
  return (
    <main>
      <section style={{ paddingBottom: 0 }}>
        <div className="container">
          {/* Split Top Section */}
          <div className="about-grid">
            {/* Left side content */}
            <div className="reveal">
              <span className="section-label">About Us</span>
              <h2 className="section-title">
                Built on Insight.<br />
                <em>Driven by Value.</em>
              </h2>
              <p className="section-description" style={{ maxWidth: '100%' }}>
                GOAT Assets was founded with a simple belief - real estate decisions should be guided by deep insight, strategic thinking and unwavering integrity.
              </p>
              <p className="section-description" style={{ maxWidth: '100%', marginTop: '-20px' }}>
                We partner with our clients to unlock opportunities, mitigate risks and create lasting value across the real estate lifecycle. Our collaborative approach and technical rigor allow us to structure transactions and recommend strategies that produce superior investment outcomes.
              </p>
            </div>
            
            {/* Right side vertical image */}
            <div className="about-img-container reveal reveal-delay-2">
              <img src="/assets/images/about_building.png" alt="Modern Architecture Office facade" className="about-img" />
            </div>
          </div>

          {/* Values Cards Grid */}
          <div className="features-grid">
            {/* Card 1 */}
            <div className="feature-card reveal">
              <div className="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="feature-card-title">Integrity</h3>
              <p className="feature-card-desc">We act with honesty, transparency and accountability in all client engagements.</p>
            </div>

            {/* Card 2 */}
            <div className="feature-card reveal reveal-delay-1">
              <div className="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="8" r="7" />
                  <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                </svg>
              </div>
              <h3 className="feature-card-title">Excellence</h3>
              <p className="feature-card-desc">We deliver high-quality, research-backed advice supported by rigorous market analysis.</p>
            </div>

            {/* Card 3 */}
            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-1a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3 className="feature-card-title">Partnership</h3>
              <p className="feature-card-desc">We build long-term relationships based on shared goals, trust, and mutual success.</p>
            </div>

            {/* Card 4 */}
            <div className="feature-card reveal reveal-delay-3">
              <div className="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42" />
                </svg>
              </div>
              <h3 className="feature-card-title">Impact</h3>
              <p className="feature-card-desc">We create sustainable value for our clients, their projects, and the wider community.</p>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Strip */}
        <div className="metrics-strip reveal">
          <div className="container">
            <div className="metrics-grid">
              <div className="metrics-card">
                <div className="metrics-number">10+</div>
                <div className="metrics-label">Years of Experience</div>
                <div className="metrics-subtext">Proven track record in advisory</div>
              </div>
              <div className="metrics-card">
                <div className="metrics-number">50+</div>
                <div className="metrics-label">Professionals</div>
                <div className="metrics-subtext">Highly qualified specialists</div>
              </div>
              <div className="metrics-card">
                <div className="metrics-number">8</div>
                <div className="metrics-label">Cities</div>
                <div className="metrics-subtext">Active presence in major hubs</div>
              </div>
              <div className="metrics-card">
                <div className="metrics-number">1</div>
                <div className="metrics-label">Commitment</div>
                <div className="metrics-subtext">To create real, measurable value</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
