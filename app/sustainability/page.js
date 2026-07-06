import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Sustainability | GOAT Assets | ESG in Real Estate",
  description:
    "How GOAT Assets embeds environmental, social and governance (ESG) considerations into real estate advisory — from asset selection to development and management.",
};

const pillars = [
  {
    title: "Environmental",
    desc: "Energy efficiency, green certification and climate resilience across the assets we advise on.",
    points: [
      "Green-building certification guidance",
      "Energy and carbon assessment",
      "Climate-risk screening",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6" />
      </svg>
    ),
  },
  {
    title: "Social",
    desc: "Spaces and communities that serve people — health, wellbeing, accessibility and inclusion.",
    points: [
      "Occupant wellbeing and amenity",
      "Positive community impact",
      "Inclusive, accessible design",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Governance",
    desc: "Transparency, integrity and rigour in every mandate, recommendation and report.",
    points: [
      "Transparent, conflict-free advice",
      "Ethical, standards-aligned practice",
      "Robust due diligence",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const commitments = [
  "Screen every mandate for material ESG risks and opportunities",
  "Advise on green certification, energy and carbon performance",
  "Factor climate resilience into valuation and feasibility",
  "Uphold transparent, independent and ethical advisory standards",
];

const stats = [
  { value: "5M+ sq ft", label: "Green-certified space advised" },
  { value: "100%", label: "Mandates with ESG screening" },
  { value: "Net-Zero", label: "Aligned advisory approach" },
];

export default function Sustainability() {
  return (
    <main>
      <PageHero
        eyebrow="Sustainability"
        title="Responsible by Design."
        accent="Built to Last."
        crumbs={[{ label: "Home", href: "/" }, { label: "Sustainability" }]}
      />

      <section className="esg-section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: "680px", marginBottom: "56px" }}>
            <span className="section-label">Our Commitment</span>
            <h2 className="section-title">
              Sustainable Value. <em>For the Long Term.</em>
            </h2>
            <p className="section-description" style={{ maxWidth: "100%" }}>
              Sustainability is integral to long-term real estate value. We help our clients
              embed environmental, social and governance considerations into every decision —
              from asset selection through development to management.
            </p>
          </div>

          <div className="esg-grid">
            {pillars.map((pillar, i) => (
              <div key={i} className={`esg-card reveal reveal-delay-${i}`}>
                <div className="esg-icon">{pillar.icon}</div>
                <h3 className="esg-title">{pillar.title}</h3>
                <p className="esg-desc">{pillar.desc}</p>
                <ul className="esg-list">
                  {pillar.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="esg-commit-section">
        <div className="container esg-commit-grid">
          <div className="reveal">
            <span className="section-label">How We Embed ESG</span>
            <h2 className="section-title">
              From Principle <em>to Practice.</em>
            </h2>
            <p className="section-description" style={{ maxWidth: "100%" }}>
              We translate sustainability principles into concrete advice on every engagement.
            </p>
          </div>
          <div className="reveal reveal-delay-1">
            <ul className="service-list">
              {commitments.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <div className="stats-strip reveal">
        <div className="container">
          <div className="stats-grid sector-stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stats-card">
                <div className="stats-number">{s.value}</div>
                <div className="stats-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="service-cta-section">
        <div className="container service-cta-inner reveal">
          <h2 className="service-cta-title">
            Embedding ESG into your real estate strategy? Let&rsquo;s talk.
          </h2>
          <Link href="/contact" className="btn btn-primary">
            Get In Touch
            <span style={{ fontSize: "14px", marginLeft: "2px" }}>→</span>
          </Link>
        </div>
      </section>

      <p className="esg-disclaimer container reveal">
        ESG figures and commitments shown are representative of our advisory approach.
      </p>
    </main>
  );
}
