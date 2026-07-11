import Link from 'next/link';
import Image from 'next/image';
import FaqSection from '@/components/FaqSection';
import LegalDiligence from '@/components/LegalDiligence';
import StatCounter from '@/components/StatCounter';
import ProcessTimeline from '@/components/ProcessTimeline';
import { services } from '@/lib/services';

// The four service lines featured on the homepage; the full list lives at /services.
const FEATURED_SERVICES = [
  'investment-advisory',
  'transactions-advisory',
  'legal-documentation',
  'valuation-advisory',
];

export default function Home() {
  const featuredServices = FEATURED_SERVICES.map((slug) =>
    services.find((service) => service.slug === slug)
  );

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

  const stats = [
    { value: "100+", label: "Projects Advised" },
    { value: "50+", label: "Happy Clients" },
    { value: "₹ 10,000+ Cr", label: "Assets Advised" },
    { value: "One Goal", label: "Maximum Value" },
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
              We partner with India&rsquo;s leading developers to bring you handpicked premium properties — with every legal check and document verified before you commit.
            </p>
            <div className="hero-ctas">
              <Link href="/services" className="btn btn-primary">
                Explore Our Services
                <span style={{ fontSize: '14px', marginLeft: '2px' }}>→</span>
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll-cue" aria-hidden="true">
          <span className="hero-scroll-line"></span>
        </div>
      </section>

      {/* 2. STATS STRIP — animated counters */}
      <div className="stats-strip reveal">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stats-card">
                <div className="stats-number"><StatCounter value={stat.value} /></div>
                <div className="stats-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. ABOUT SECTION */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="reveal reveal-left">
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
                GOAT Assets was founded on a simple belief — real estate decisions should be guided by deep insight, strategic thinking and unwavering integrity. From sourcing the right property through our developer partnerships to verifying every document before you sign, we stay beside you across the entire journey.
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

              <Link href="/about" className="btn btn-outline" style={{ marginTop: '36px' }}>
                More About Us
                <span style={{ fontSize: '14px', marginLeft: '2px' }}>→</span>
              </Link>
            </div>

            <div className="reveal reveal-right">
              <div className="image-frame">
                <div className="image-frame-inner" style={{ height: '520px' }}>
                  <Image src="/assets/images/about_building.png" alt="Modern Office facade" fill sizes="(max-width: 991px) 100vw, 50vw" className="about-img parallax-img" data-speed="-0.08" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LEGAL & DOCUMENTATION — signature differentiator */}
      <LegalDiligence />

      {/* 5. FEATURED ASSETS PORTFOLIO */}
      <section className="assets-portfolio-section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">Portfolio Focus</span>
            <h2 className="section-title">
              <span className="reveal-mask">
                <span className="reveal-text">Prime Real Estate Assets.</span>
              </span>
              <span className="reveal-mask">
                <span className="reveal-text"><em>Curated with Our Partners.</em></span>
              </span>
            </h2>
            <p className="section-description" style={{ margin: '0 auto' }}>
              We represent institutional-grade properties from leading developer partners across the major asset classes.
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
          <span className="marquee-text">Partnered with Leading Developers</span>
          <span className="marquee-text marquee-bullet">•</span>
          <span className="marquee-text">Every Document Verified</span>
          <span className="marquee-text marquee-bullet">•</span>
          <span className="marquee-text">Premium Properties</span>
          <span className="marquee-text marquee-bullet">•</span>
          <span className="marquee-text">End-to-End Advisory</span>
          <span className="marquee-text marquee-bullet">•</span>
          <span className="marquee-text">Insight-Led. Value-Driven.</span>
          <span className="marquee-text marquee-bullet">•</span>

          {/* Double content for seamless looping scroll */}
          <span className="marquee-text">Partnered with Leading Developers</span>
          <span className="marquee-text marquee-bullet">•</span>
          <span className="marquee-text">Every Document Verified</span>
          <span className="marquee-text marquee-bullet">•</span>
          <span className="marquee-text">Premium Properties</span>
          <span className="marquee-text marquee-bullet">•</span>
          <span className="marquee-text">End-to-End Advisory</span>
          <span className="marquee-text marquee-bullet">•</span>
          <span className="marquee-text">Insight-Led. Value-Driven.</span>
          <span className="marquee-text marquee-bullet">•</span>
        </div>
      </div>

      {/* 6. SERVICES SECTION — four featured lines */}
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
              From finding the right asset to closing with clean paperwork — advisory for every step of the journey.
            </p>
          </div>

          <div className="services-grid">
            {featuredServices.map((service, index) => (
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

          <div className="reveal" style={{ textAlign: 'center' }}>
            <Link href="/services" className="btn btn-outline">
              Explore All Services
              <span style={{ fontSize: '14px', marginLeft: '2px' }}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. OUR APPROACH SECTION — scroll-drawn timeline */}
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

          <ProcessTimeline steps={steps} />
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <FaqSection />
    </main>
  );
}
