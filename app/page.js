import Link from 'next/link';
import FaqSection from '@/components/FaqSection';

export default function Home() {
  const services = [
    {
      title: "Investment Advisory",
      desc: "Identify and evaluate high-potential opportunities aligned with your investment goals.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
    },
    {
      title: "Transactions Advisory",
      desc: "End-to-end support for acquisitions, dispositions, and strategic joint ventures.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M17 11l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Leasing Advisory",
      desc: "Strategic leasing solutions to optimize occupancy, rental value and tenant experience.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      title: "Valuation & Advisory",
      desc: "Reliable valuations and feasibility studies to support critical business decisions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2" />
          <path d="M9 12h6M9 16h6" />
        </svg>
      )
    },
    {
      title: "Market Research & Insights",
      desc: "Actionable insights and data-driven market intelligence to help you stay ahead.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
        </svg>
      )
    },
    {
      title: "Asset Management",
      desc: "Maximize asset performance and enhance long-term value through active asset management.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: "Project Advisory",
      desc: "Strategic guidance across planning, development, risk mitigation, and project execution.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      title: "Capital Markets",
      desc: "Access to capital and financial structuring through tailored investment and debt solutions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
          <line x1="12" y1="10" x2="12" y2="14" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      )
    }
  ];

  const steps = [
    {
      num: 1,
      title: "Discover",
      desc: "We understand your goals, challenges, and core project requirements."
    },
    {
      num: 2,
      title: "Analyze",
      desc: "We conduct in-depth technical research and rigorous market analysis."
    },
    {
      num: 3,
      title: "Advise",
      desc: "We provide strategic and commercial recommendations tailored to your needs."
    },
    {
      num: 4,
      title: "Execute",
      desc: "We support you actively through execution to achieve measurable results."
    },
    {
      num: 5,
      title: "Deliver Value",
      desc: "We stay committed to driving sustainable long-term value and growth."
    }
  ];

  const articles = [
    {
      title: "Indian Office Market Outlook 2024",
      date: "May 15, 2024",
      desc: "Key trends shaping the commercial office market, occupancy ratios, and what to watch out for.",
      img: "/assets/images/insight_office.png"
    },
    {
      title: "Retail Real Estate Reimagined",
      date: "Apr 30, 2024",
      desc: "Evolving consumer behavior patterns and their direct structural impact on retail shopping spaces.",
      img: "/assets/images/insight_retail.png"
    },
    {
      title: "Industrial & Logistics On The Rise",
      date: "Apr 15, 2024",
      desc: "Why India's industrial real estate and warehouses continue to attract institutional investors.",
      img: "/assets/images/insight_industrial.png"
    },
    {
      title: "Capital Flows In Indian Real Estate",
      date: "Mar 25, 2024",
      desc: "A deep dive into cross-border investment trends, financing volumes and capital market developments.",
      img: "/assets/images/insight_capital.png"
    }
  ];

  return (
    <main>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">
              <span className="reveal-mask">
                <span className="reveal-text">Real Estate</span>
              </span>
              <span className="reveal-mask">
                <span className="reveal-text">Advisory.</span>
              </span>
              <span className="reveal-mask">
                <span className="reveal-text"><em className="text-gold">Real Value.</em></span>
              </span>
            </h1>
            <div className="hero-divider"></div>
            <p className="hero-description">
              GOAT Assets is a real estate advisory firm delivering strategic solutions that create measurable value across the real estate lifecycle.
            </p>
            <Link href="/services" className="btn btn-primary">
              Explore Our Services 
              <span style={{ fontSize: '14px', marginLeft: '2px' }}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="stats-strip reveal">
        <div className="container">
          <div className="stats-grid">
            <div className="stats-card">
              <div className="stats-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 7h1m-1 4h1m-1 4h1m4-8h1m-1 4h1m-1 4h1" />
                </svg>
              </div>
              <div className="stats-number">100+</div>
              <div className="stats-label">Projects Advised</div>
              <div className="stats-desc">Across commercial, residential, industrial &amp; mixed-use sectors.</div>
            </div>
            
            <div className="stats-card">
              <div className="stats-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm14 10v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                </svg>
              </div>
              <div className="stats-number">50+</div>
              <div className="stats-label">Happy Clients</div>
              <div className="stats-desc">Including investors, developers, corporates &amp; institutions.</div>
            </div>
            
            <div className="stats-card">
              <div className="stats-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7-5.3 5.3" />
                </svg>
              </div>
              <div className="stats-number">₹ 10,000+ Cr</div>
              <div className="stats-label">Assets Advised</div>
              <div className="stats-desc">Across acquisitions, dispositions, leasing &amp; valuations.</div>
            </div>
            
            <div className="stats-card">
              <div className="stats-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <div className="stats-number">One Goal</div>
              <div className="stats-label">Maximum Value</div>
              <div className="stats-desc">Insight-led advice. Execution-focused outcomes.</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ABOUT SECTION */}
      <section className="about-section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="about-grid">
            <div className="reveal">
              <span className="section-label">About Us</span>
              <h2 className="section-title">
                <span className="reveal-mask">
                  <span className="reveal-text">Built on Insight.</span>
                </span>
                <span className="reveal-mask">
                  <span className="reveal-text"><em>Driven by Value.</em></span>
                </span>
              </h2>
              <p className="section-description" style={{ maxWidth: '100%' }}>
                GOAT Assets was founded with a simple belief - real estate decisions should be guided by deep insight, strategic thinking and unwavering integrity.
              </p>
              <p className="section-description" style={{ maxWidth: '100%', marginTop: '-20px' }}>
                We partner with our clients to unlock opportunities, mitigate risks and create lasting value across the real estate lifecycle. Our collaborative approach and technical rigor allow us to structure transactions and recommend strategies that produce superior investment outcomes.
              </p>
            </div>
            
            <div className="reveal reveal-delay-2">
              <div className="image-frame">
                <div className="image-frame-inner" style={{ height: '520px' }}>
                  <img src="/assets/images/about_building.png" alt="Modern Office facade" className="about-img parallax-img" data-speed="-0.12" />
                </div>
              </div>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="feature-card-title">Integrity</h3>
              <p className="feature-card-desc">We act with honesty, transparency and accountability in all client engagements.</p>
            </div>

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

      {/* 2b. FEATURED ASSETS PORTFOLIO */}
      <section className="assets-portfolio-section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">Portfolio Focus</span>
            <h2 className="section-title">
              <span className="reveal-mask">
                <span className="reveal-text">Prime Real Estate Assets.</span>
              </span>
              <span className="reveal-mask">
                <span className="reveal-text"><em>Strategic Advisory Showcase.</em></span>
              </span>
            </h2>
            <p className="section-description" style={{ margin: '0 auto' }}>
              We advise on institutional-grade properties across major asset classes, maximizing capital efficiency and yields.
            </p>
          </div>

          <div className="assets-grid">
            <div className="asset-card reveal">
              <div className="asset-image-container">
                <span className="asset-badge">Commercial</span>
                <img src="/assets/images/insight_office.png" alt="Commercial Office Assets" />
              </div>
              <div className="asset-info">
                <div className="asset-meta-group">
                  <span className="asset-metadata">Class A Office Space</span>
                  <h3 className="asset-title">Premium Office Portfolios</h3>
                </div>
                <p className="asset-desc">Advising on prime Grade-A corporate offices, IT parks, and co-working hubs in financial centers.</p>
                <Link href="/services" className="asset-link">
                  Learn More <span style={{ fontSize: '13px' }}>→</span>
                </Link>
              </div>
            </div>

            <div className="asset-card reveal reveal-delay-1">
              <div className="asset-image-container">
                <span className="asset-badge">Retail</span>
                <img src="/assets/images/insight_retail.png" alt="Luxury Retail Spaces" />
              </div>
              <div className="asset-info">
                <div className="asset-meta-group">
                  <span className="asset-metadata">High-Street &amp; Mall</span>
                  <h3 className="asset-title">Luxury Retail Hubs</h3>
                </div>
                <p className="asset-desc">Structuring transactions for prime retail avenues, multi-brand shopping malls, and experiential spaces.</p>
                <Link href="/services" className="asset-link">
                  Learn More <span style={{ fontSize: '13px' }}>→</span>
                </Link>
              </div>
            </div>

            <div className="asset-card reveal reveal-delay-2">
              <div className="asset-image-container">
                <span className="asset-badge">Industrial</span>
                <img src="/assets/images/insight_industrial.png" alt="Logistics Parks" />
              </div>
              <div className="asset-info">
                <div className="asset-meta-group">
                  <span className="asset-metadata">Logistics &amp; Warehouse</span>
                  <h3 className="asset-title">Industrial Logistics Parks</h3>
                </div>
                <p className="asset-desc">Expanding footprint in warehouse hubs, supply-chain centers, and build-to-suit industrial assets.</p>
                <Link href="/services" className="asset-link">
                  Learn More <span style={{ fontSize: '13px' }}>→</span>
                </Link>
              </div>
            </div>

            <div className="asset-card reveal reveal-delay-3">
              <div className="asset-image-container">
                <span className="asset-badge">Capital Markets</span>
                <img src="/assets/images/insight_capital.png" alt="Investment Portfolios" />
              </div>
              <div className="asset-info">
                <div className="asset-meta-group">
                  <span className="asset-metadata">Structured Capital</span>
                  <h3 className="asset-title">Institutional Investments</h3>
                </div>
                <p className="asset-desc">Advising on major cross-border transactions, private equity investments, and joint venture syndicates.</p>
                <Link href="/services" className="asset-link">
                  Learn More <span style={{ fontSize: '13px' }}>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee Ribbon */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-text">Insight-Led Advice</span>
          <span className="marquee-text marquee-bullet">•</span>
          <span className="marquee-text">Execution-Focused Outcomes</span>
          <span className="marquee-text marquee-bullet">•</span>
          <span className="marquee-text">Strategic Advisory</span>
          <span className="marquee-text marquee-bullet">•</span>
          <span className="marquee-text">Client-Centric Trust</span>
          <span className="marquee-text marquee-bullet">•</span>
          <span className="marquee-text">Maximizing Assets Value</span>
          <span className="marquee-text marquee-bullet">•</span>
          
          {/* Double content for seamless looping scroll */}
          <span className="marquee-text">Insight-Led Advice</span>
          <span className="marquee-text marquee-bullet">•</span>
          <span className="marquee-text">Execution-Focused Outcomes</span>
          <span className="marquee-text marquee-bullet">•</span>
          <span className="marquee-text">Strategic Advisory</span>
          <span className="marquee-text marquee-bullet">•</span>
          <span className="marquee-text">Client-Centric Trust</span>
          <span className="marquee-text marquee-bullet">•</span>
          <span className="marquee-text">Maximizing Assets Value</span>
          <span className="marquee-text marquee-bullet">•</span>
        </div>
      </div>

      {/* 3. SERVICES SECTION */}
      <section className="services-section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Services</span>
            <h2 className="section-title">
              <span className="reveal-mask">
                <span className="reveal-text">End-to-End Solutions.</span>
              </span>
              <span className="reveal-mask">
                <span className="reveal-text"><em>Across the Real Estate Lifecycle.</em></span>
              </span>
            </h2>
            <p className="section-description" style={{ margin: '0 auto 40px auto' }}>
              We offer a comprehensive range of advisory services tailored to help our clients make informed decisions and achieve their objectives.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className={`service-card reveal reveal-delay-${index % 4}`}>
                <div>
                  <span className="service-number">{(index + 1).toString().padStart(2, '0')}</span>
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.desc}</p>
                </div>
                <div className="service-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="requirement-cta reveal">
            <h3 className="requirement-text">Have a unique requirement? Let's build a solution that's right for you.</h3>
            <Link href="/contact" className="btn btn-primary">
              Get In Touch 
              <span style={{ fontSize: '14px', marginLeft: '2px' }}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH SECTION */}
      <section className="approach-section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">
              <span className="reveal-mask">
                <span className="reveal-text">A Proven Approach.</span>
              </span>
              <span className="reveal-mask">
                <span className="reveal-text"><em>Consistent Outcomes.</em></span>
              </span>
            </h2>
            <p className="section-description" style={{ margin: '0 auto' }}>
              Our approach is built on a deep understanding of markets, disciplined analysis and a commitment to execution.
            </p>
          </div>

          <div className="approach-flow">
            {steps.map((step, index) => (
              <div key={index} className={`approach-step reveal reveal-delay-${index}`}>
                <div className="step-number">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Animated Circles Widget */}
          <div className="circles-section reveal">
            <div className="circles-container">
              <div className="circle-ring circle-left"></div>
              <div className="circle-ring circle-center"></div>
              <div className="circle-ring circle-right"></div>
              <div className="circle-core">Path to Value</div>
            </div>
          </div>
        </div>

        <div className="approach-metrics-strip reveal">
          <div className="container approach-metrics-container">
            <div className="approach-metrics-pitch">
              Insight. Strategy. Execution.<br />
              That's how we create real value.
            </div>
            <div className="approach-metrics-values">
              <div className="approach-metric">
                <div className="approach-metric-val">100+</div>
                <div className="approach-metric-lbl">Projects Delivered</div>
              </div>
              <div className="approach-metric">
                <div className="approach-metric-val">₹ 10,000+ Cr</div>
                <div className="approach-metric-lbl">Assets Advised</div>
              </div>
              <div className="approach-metric">
                <div className="approach-metric-val">50+</div>
                <div className="approach-metric-lbl">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MARKET INSIGHTS SECTION */}
      <section className="insights-section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="insights-top-grid">
            <div className="reveal">
              <span className="section-label">Market Insights</span>
              <h2 className="section-title">
                <span className="reveal-mask">
                  <span className="reveal-text">Insights Today.</span>
                </span>
                <span className="reveal-mask">
                  <span className="reveal-text"><em>Better Decisions Tomorrow.</em></span>
                </span>
              </h2>
              <p className="section-description" style={{ maxWidth: '100%' }}>
                Stay informed with our perspectives on market trends, opportunities and real estate dynamics. We analyze macro movements and localized data to deliver reports that guide strategic investment.
              </p>
              <Link href="/insights" className="btn btn-primary">
                View All Insights 
                <span style={{ fontSize: '14px', marginLeft: '2px' }}>→</span>
              </Link>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="image-frame">
                <div className="image-frame-inner" style={{ height: '420px' }}>
                  <img src="/assets/images/insights_skyline.png" alt="Cityscape Skyline" className="insights-skyline-img parallax-img" data-speed="-0.1" />
                </div>
              </div>
            </div>
          </div>

          <div className="insights-grid">
            {articles.map((article, index) => (
              <Link key={index} href="/insights" className={`insight-card reveal reveal-delay-${index}`}>
                <div className="insight-thumb-container">
                  <img src={article.img} alt={article.title} className="insight-thumb" />
                </div>
                <div className="insight-body">
                  <span className="insight-date">{article.date}</span>
                  <h3 className="insight-card-title">{article.title}</h3>
                  <p className="insight-card-desc">{article.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <FaqSection />
    </main>
  );
}
