import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About Us | GOAT Assets | Built on Insight. Driven by Value.",
  description: "Learn about GOAT Assets, our core values (Integrity, Excellence, Partnership, Impact), and our experienced real estate advisory team.",
};

export default function About() {
  // Placeholder leadership — replace names, roles and bios with the real team.
  const team = [
    {
      name: "Aarav Mehta",
      initials: "AM",
      role: "Managing Partner",
      bio: "Leads firm strategy and major investment mandates across asset classes.",
    },
    {
      name: "Priya Sharma",
      initials: "PS",
      role: "Partner — Capital Markets",
      bio: "Structures equity, debt and joint-venture solutions for clients and platforms.",
    },
    {
      name: "Rohan Kapoor",
      initials: "RK",
      role: "Partner — Valuation & Research",
      bio: "Heads independent valuation and the firm's market intelligence practice.",
    },
    {
      name: "Neha Iyer",
      initials: "NI",
      role: "Director — Transactions",
      bio: "Drives acquisitions, dispositions and leasing execution end to end.",
    },
  ];

  // Placeholder milestones & credentials — replace with the firm's real history and memberships.
  const milestones = [
    { year: "2014", text: "Founded in Mumbai with a focus on insight-led advisory." },
    { year: "2017", text: "Expanded coverage to major metros across India." },
    { year: "2020", text: "Crossed ₹5,000 Cr in assets advised." },
    { year: "2023", text: "Delivered our 100th advisory mandate." },
    { year: "2024", text: "₹10,000+ Cr advised across the lifecycle." },
  ];

  const credentials = [
    { name: "RICS", note: "Member firm" },
    { name: "CREDAI", note: "Industry association" },
    { name: "ISO 9001", note: "Quality certified" },
    { name: "Advisory Firm of the Year", note: "Industry recognition, 2023" },
  ];

  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="Built on Insight."
        accent="Driven by Value."
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <section style={{ paddingBottom: 0 }}>
        <div className="container">
          {/* Split Top Section */}
          <div className="about-grid">
            {/* Left side content */}
            <div className="reveal">
              <p className="section-description" style={{ maxWidth: '100%' }}>
                GOAT Assets was founded with a simple belief - real estate decisions should be guided by deep insight, strategic thinking and unwavering integrity.
              </p>
              <p className="section-description" style={{ maxWidth: '100%', marginTop: '-20px' }}>
                We partner with our clients to unlock opportunities, mitigate risks and create lasting value across the real estate lifecycle. Our collaborative approach and technical rigor allow us to structure transactions and recommend strategies that produce superior investment outcomes.
              </p>

              <div className="about-facts">
                <div className="about-fact">
                  <span className="about-fact-label">Established</span>
                  <span className="about-fact-value">2014</span>
                </div>
                <div className="about-fact">
                  <span className="about-fact-label">Headquarters</span>
                  <span className="about-fact-value">Mumbai, India</span>
                </div>
                <div className="about-fact">
                  <span className="about-fact-label">Coverage</span>
                  <span className="about-fact-value">Pan-India &middot; 8 cities</span>
                </div>
                <div className="about-fact">
                  <span className="about-fact-label">Focus</span>
                  <span className="about-fact-value">Full-lifecycle advisory</span>
                </div>
              </div>
            </div>
            
            {/* Right side vertical image */}
            <div className="about-img-container reveal reveal-delay-2">
              <Image src="/assets/images/about_building.png" alt="Modern Architecture Office facade" fill sizes="(max-width: 991px) 100vw, 50vw" className="about-img" />
            </div>
          </div>

          {/* Story + Mission & Vision */}
          <div className="mv-block">
            <div className="reveal" style={{ maxWidth: '720px', marginBottom: '48px' }}>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">
                Founded to Raise <em>the Standard.</em>
              </h2>
              <p className="section-description" style={{ maxWidth: '100%' }}>
                GOAT Assets was established by advisors who believe real estate decisions deserve deeper rigour, sharper insight and genuine partnership. We bring institutional discipline to every mandate &mdash; pairing local market intelligence with technical excellence to help our clients move with confidence.
              </p>
            </div>
            <div className="mv-grid">
              <div className="mv-card reveal">
                <div className="mv-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="mv-card-title">Our Mission</h3>
                <p className="mv-card-desc">
                  To help our clients unlock opportunity, mitigate risk and create measurable, lasting value across the real estate lifecycle.
                </p>
              </div>
              <div className="mv-card reveal reveal-delay-1">
                <div className="mv-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="mv-card-title">Our Vision</h3>
                <p className="mv-card-desc">
                  To be the most trusted real estate advisory partner in the markets we serve &mdash; defined by insight, integrity and outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Values header */}
          <div className="reveal" style={{ marginTop: '100px', marginBottom: '48px' }}>
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">
              Our Core <em>Values.</em>
            </h2>
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

          {/* Leadership */}
          <div className="leadership-block">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
              <span className="section-label">Our Leadership</span>
              <h2 className="section-title">
                Experienced Advisors. <em>Trusted Partners.</em>
              </h2>
              <p className="section-description" style={{ margin: '0 auto' }}>
                Our senior team brings decades of combined experience across investment, transactions, capital markets and valuation.
              </p>
            </div>
            <div className="leadership-grid">
              {team.map((member, index) => (
                <div key={index} className={`leadership-card reveal reveal-delay-${index % 4}`}>
                  <div className="leadership-avatar">{member.initials}</div>
                  <h3 className="leadership-name">{member.name}</h3>
                  <span className="leadership-role">{member.role}</span>
                  <p className="leadership-bio">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Journey timeline */}
          <div className="journey-block">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
              <span className="section-label">Our Journey</span>
              <h2 className="section-title">
                A Decade of <em>Growth.</em>
              </h2>
            </div>
            <div className="journey-timeline">
              {milestones.map((m, index) => (
                <div key={index} className={`journey-item reveal reveal-delay-${index % 4}`}>
                  <span className="journey-year">{m.year}</span>
                  <span className="journey-dot" aria-hidden="true"></span>
                  <p className="journey-text">{m.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials & Affiliations */}
          <div className="credentials-block">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="section-label">Credentials &amp; Affiliations</span>
              <h2 className="section-title">
                Recognised. <em>Trusted.</em>
              </h2>
            </div>
            <div className="credentials-grid">
              {credentials.map((c, index) => (
                <div key={index} className="credential-item reveal">
                  <span className="credential-name">{c.name}</span>
                  <span className="credential-note">{c.note}</span>
                </div>
              ))}
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
