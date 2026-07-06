import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { services, getServiceBySlug, getServiceSlugs } from "@/lib/services";

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Service Not Found | GOAT Assets" };
  }
  return {
    title: `${service.title} | GOAT Assets`,
    description: service.tagline,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = service.related
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter(Boolean);

  const index = services.findIndex((s) => s.slug === service.slug);
  const number = String(index + 1).padStart(2, "0");

  return (
    <main>
      <PageHero
        eyebrow="Services"
        title={service.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Overview */}
      <section className="service-detail-intro">
        <div className="container service-detail-grid">
          <div className="reveal">
            <span className="service-detail-num">{number}</span>
            <div className="service-detail-icon">{service.icon}</div>
            <p className="service-detail-tagline">{service.tagline}</p>
          </div>
          <div className="reveal reveal-delay-1">
            <p className="service-detail-overview">{service.overview}</p>
            <Link href="/contact" className="btn btn-outline" style={{ marginTop: "8px" }}>
              Discuss This Service
              <span style={{ fontSize: "14px", marginLeft: "2px" }}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Scope + Deliverables */}
      <section className="service-detail-section">
        <div className="container">
          <div className="service-cols">
            <div className="reveal">
              <span className="section-label">What We Do</span>
              <h2 className="section-title">
                Scope of <em>Engagement.</em>
              </h2>
              <ul className="service-list">
                {service.scope.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="reveal reveal-delay-1">
              <span className="section-label">Deliverables</span>
              <h2 className="section-title">
                What You <em>Receive.</em>
              </h2>
              <ul className="service-list">
                {service.deliverables.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process-section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
            <span className="section-label">How We Work</span>
            <h2 className="section-title">
              A Disciplined <em>Process.</em>
            </h2>
          </div>
          <div className="service-process-grid">
            {service.process.map((step, i) => (
              <div key={i} className={`service-process-step reveal reveal-delay-${i}`}>
                <div className="step-number">{i + 1}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="service-related-section">
          <div className="container">
            <div className="reveal" style={{ marginBottom: "40px" }}>
              <span className="section-label">Related Services</span>
              <h2 className="section-title">
                Explore <em>More.</em>
              </h2>
            </div>
            <div className="service-related-grid">
              {related.map((r, i) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className={`service-related-card reveal reveal-delay-${i}`}
                >
                  <div className="service-related-icon">{r.icon}</div>
                  <h3 className="service-related-title">{r.title}</h3>
                  <p className="service-related-desc">{r.tagline}</p>
                  <span className="asset-link">
                    Learn More <span style={{ fontSize: "13px" }}>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="service-cta-section">
        <div className="container service-cta-inner reveal">
          <h2 className="service-cta-title">
            Ready to discuss your {service.title.toLowerCase()} needs?
          </h2>
          <Link href="/contact" className="btn btn-primary">
            Get In Touch
            <span style={{ fontSize: "14px", marginLeft: "2px" }}>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
