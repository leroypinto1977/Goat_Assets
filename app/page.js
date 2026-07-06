import Link from 'next/link';
import Image from 'next/image';
import FaqSection from '@/components/FaqSection';
import Testimonials from '@/components/Testimonials';
import ClientLogos from '@/components/ClientLogos';
import WhyGoat from '@/components/WhyGoat';
import { services } from '@/lib/services';

export default function Home() {
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

      {/* Client Logos Strip */}
      <ClientLogos />

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
                  <Image src="/assets/images/about_building.png" alt="Modern Office facade" fill sizes="(max-width: 991px) 100vw, 50vw" className="about-img parallax-img" data-speed="-0.12" />
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

      {/* Why GOAT differentiators */}
      <WhyGoat />

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
                <Image src="/assets/images/insight_office.png" alt="Commercial Office Assets" fill sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 25vw" />
              </div>
              <div className="asset-info">
                <div className="asset-meta-group">
                  <span className="asset-metadata">Class A Office Space</span>
                  <h3 className="asset-title">Premium Office Portfolios</h3>
                </div>
                <p className="asset-desc">Advising on prime Grade-A corporate offices, IT parks, and co-working hubs in financial centers.</p>
                <Link href="/sectors/office" className="asset-link">
                  Learn More <span style={{ fontSize: '13px' }}>→</span>
                </Link>
              </div>
            </div>

            <div className="asset-card reveal reveal-delay-1">
              <div className="asset-image-container">
                <span className="asset-badge">Retail</span>
                <Image src="/assets/images/insight_retail.png" alt="Luxury Retail Spaces" fill sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 25vw" />
              </div>
              <div className="asset-info">
                <div className="asset-meta-group">
                  <span className="asset-metadata">High-Street &amp; Mall</span>
                  <h3 className="asset-title">Luxury Retail Hubs</h3>
                </div>
                <p className="asset-desc">Structuring transactions for prime retail avenues, multi-brand shopping malls, and experiential spaces.</p>
                <Link href="/sectors/retail" className="asset-link">
                  Learn More <span style={{ fontSize: '13px' }}>→</span>
                </Link>
              </div>
            </div>

            <div className="asset-card reveal reveal-delay-2">
              <div className="asset-image-container">
                <span className="asset-badge">Industrial</span>
                <Image src="/assets/images/insight_industrial.png" alt="Logistics Parks" fill sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 25vw" />
              </div>
              <div className="asset-info">
                <div className="asset-meta-group">
                  <span className="asset-metadata">Logistics &amp; Warehouse</span>
                  <h3 className="asset-title">Industrial Logistics Parks</h3>
                </div>
                <p className="asset-desc">Expanding footprint in warehouse hubs, supply-chain centers, and build-to-suit industrial assets.</p>
                <Link href="/sectors/industrial" className="asset-link">
                  Learn More <span style={{ fontSize: '13px' }}>→</span>
                </Link>
              </div>
            </div>

            <div className="asset-card reveal reveal-delay-3">
              <div className="asset-image-container">
                <span className="asset-badge">Capital Markets</span>
                <Image src="/assets/images/insight_capital.png" alt="Investment Portfolios" fill sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 25vw" />
              </div>
              <div className="asset-info">
                <div className="asset-meta-group">
                  <span className="asset-metadata">Structured Capital</span>
                  <h3 className="asset-title">Institutional Investments</h3>
                </div>
                <p className="asset-desc">Advising on major cross-border transactions, private equity investments, and joint venture syndicates.</p>
                <Link href="/sectors/capital-markets" className="asset-link">
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
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`service-card reveal reveal-delay-${index % 4}`}
              >
                <div>
                  <span className="service-number">{(index + 1).toString().padStart(2, '0')}</span>
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.tagline}</p>
                </div>
                <div className="service-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="requirement-cta reveal">
            <h3 className="requirement-text">Have a unique requirement? Let&rsquo;s build a solution that&rsquo;s right for you.</h3>
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
              That&rsquo;s how we create real value.
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


      {/* 6. TESTIMONIALS SECTION */}
      <Testimonials />

      {/* 7. FAQ SECTION */}
      <FaqSection />
    </main>
  );
}
