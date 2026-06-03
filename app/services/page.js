import Link from 'next/link';

export const metadata = {
  title: "Services | GOAT Assets | End-to-End Real Estate Solutions",
  description: "Explore our comprehensive suite of real estate advisory services, including Investment, Transactions, Leasing, Valuations, and Asset Management.",
};

export default function Services() {
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
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
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

  return (
    <main>
      <section className="services-section">
        <div className="container">
          {/* Section Header */}
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Services</span>
            <h2 className="section-title">
              End-to-End Solutions.<br />
              <em>Across the Real Estate Lifecycle.</em>
            </h2>
            <p className="section-description" style={{ margin: '0 auto 40px auto' }}>
              We offer a comprehensive range of advisory services tailored to help our clients make informed decisions and achieve their objectives.
            </p>
          </div>

          {/* 8-Card Services Grid */}
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className={`service-card reveal reveal-delay-${index % 4}`}>
                <div>
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

          {/* Custom Requirement Banner */}
          <div className="requirement-cta reveal">
            <h3 className="requirement-text">Have a unique requirement? Let's build a solution that's right for you.</h3>
            <Link href="/contact" className="btn btn-primary">
              Get In Touch 
              <span style={{ fontSize: '14px', marginLeft: '2px' }}>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
