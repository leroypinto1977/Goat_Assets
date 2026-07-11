import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { services } from '@/lib/services';

export const metadata = {
  title: "Services | GOAT Assets | End-to-End Real Estate Solutions",
  description: "Explore our comprehensive suite of real estate advisory services, including Investment, Transactions, Leasing, Valuations, and Asset Management.",
};

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="End-to-End Solutions."
        accent="Across the Real Estate Lifecycle."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <section className="services-section">
        <div className="container">
          {/* Section intro */}
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p className="section-description" style={{ margin: '0 auto 40px auto' }}>
              We offer a comprehensive range of advisory services tailored to help our clients make informed decisions and achieve their objectives.
            </p>
          </div>

          {/* Services Grid — 3×3 */}
          <div className="services-grid cols-3">
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

          {/* Custom Requirement Banner */}
          <div className="requirement-cta reveal">
            <h3 className="requirement-text">Have a unique requirement? Let&rsquo;s build a solution that&rsquo;s right for you.</h3>
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
