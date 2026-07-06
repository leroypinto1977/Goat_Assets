import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { sectors } from "@/lib/sectors";

export const metadata = {
  title: "Sectors | GOAT Assets | Real Estate Asset Classes",
  description:
    "GOAT Assets advises across commercial office, retail, industrial & logistics, residential, and capital markets & institutional real estate.",
};

export default function Sectors() {
  return (
    <main>
      <PageHero
        eyebrow="Sectors"
        title="Every Asset Class."
        accent="One Standard."
        crumbs={[{ label: "Home", href: "/" }, { label: "Sectors" }]}
      />

      <section className="sectors-index-section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: "680px", marginBottom: "56px" }}>
            <span className="section-label">What We Cover</span>
            <h2 className="section-title">
              Deep Expertise. <em>Across the Market.</em>
            </h2>
            <p className="section-description" style={{ maxWidth: "100%" }}>
              We bring specialist knowledge to every major real estate asset class, pairing
              sector depth with full-lifecycle advisory.
            </p>
          </div>

          <div className="sectors-grid">
            {sectors.map((sector, i) => (
              <Link
                key={sector.slug}
                href={`/sectors/${sector.slug}`}
                className={`sector-card reveal reveal-delay-${i % 3}`}
              >
                <div className="sector-card-image">
                  <Image
                    src={sector.image}
                    alt={sector.name}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                  />
                </div>
                <div className="sector-card-body">
                  <h3 className="sector-card-title">{sector.name}</h3>
                  <p className="sector-card-desc">{sector.tagline}</p>
                  <span className="asset-link">
                    Explore <span style={{ fontSize: "13px" }}>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
