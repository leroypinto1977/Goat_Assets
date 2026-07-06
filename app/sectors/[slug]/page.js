import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { getSectorBySlug, getSectorSlugs } from "@/lib/sectors";
import { getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return getSectorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) {
    return { title: "Sector Not Found | GOAT Assets" };
  }
  return {
    title: `${sector.name} | Sectors | GOAT Assets`,
    description: sector.tagline,
    alternates: { canonical: `/sectors/${sector.slug}` },
  };
}

export default async function SectorDetail({ params }) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const related = sector.related
    .map((s) => getServiceBySlug(s))
    .filter(Boolean);

  return (
    <main>
      <PageHero
        eyebrow="Sectors"
        title={sector.name}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors" },
          { label: sector.name },
        ]}
      />

      {/* Overview */}
      <section className="sector-intro-section">
        <div className="container sector-intro-grid">
          <div className="reveal">
            <p className="sector-tagline">{sector.tagline}</p>
            <p className="sector-overview">{sector.overview}</p>
            <span className="section-label" style={{ marginTop: "32px" }}>
              What We Advise On
            </span>
            <ul className="service-list">
              {sector.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: "32px" }}>
              Discuss This Sector
              <span style={{ fontSize: "14px", marginLeft: "2px" }}>→</span>
            </Link>
          </div>
          <div className="reveal reveal-delay-1">
            <div className="sector-image">
              <Image
                src={sector.image}
                alt={sector.name}
                fill
                sizes="(max-width: 991px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <div className="stats-strip reveal">
        <div className="container">
          <div className="stats-grid sector-stats-grid">
            {sector.stats.map((s, i) => (
              <div key={i} className="stats-card">
                <div className="stats-number">{s.value}</div>
                <div className="stats-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related services */}
      {related.length > 0 && (
        <section className="service-related-section">
          <div className="container">
            <div className="reveal" style={{ marginBottom: "40px" }}>
              <span className="section-label">How We Help</span>
              <h2 className="section-title">
                Related <em>Services.</em>
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
            Advising on {sector.name.toLowerCase()}? Let&rsquo;s talk.
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
