import Link from "next/link";
import PageHero from "@/components/PageHero";
import StatCounter from "@/components/StatCounter";

export const metadata = {
  title: "Case Studies | GOAT Assets | Our Track Record",
  description:
    "A representative selection of GOAT Assets engagements across office, retail, industrial, residential, capital markets and valuation mandates.",
};

const caseStudies = [
  {
    sector: "Commercial Office",
    title: "Grade-A Office Acquisition",
    location: "Bandra Kurla Complex, Mumbai",
    metricValue: "₹ 1,200 Cr",
    metricLabel: "Transaction Value",
    summary:
      "Advised an institutional investor on the acquisition of a Grade-A office tower — leading commercial diligence and negotiation to a disciplined, yield-accretive entry.",
    tags: ["Acquisition", "Due Diligence"],
  },
  {
    sector: "Retail",
    title: "Mall Repositioning & Leasing",
    location: "Pune",
    metricValue: "95%",
    metricLabel: "Occupancy Achieved",
    summary:
      "Repositioned an underperforming retail centre with a refreshed tenant mix and leasing strategy, materially lifting occupancy, footfall and rental income.",
    tags: ["Leasing", "Asset Management"],
  },
  {
    sector: "Industrial & Logistics",
    title: "Warehouse Portfolio Sale",
    location: "Delhi NCR",
    metricValue: "₹ 2,500 Cr",
    metricLabel: "Portfolio Exit",
    summary:
      "Structured and executed a multi-city logistics portfolio disposition to a global investor, achieving a competitive premium through a managed process.",
    tags: ["Disposition", "Capital Markets"],
  },
  {
    sector: "Residential",
    title: "Development Feasibility",
    location: "Bengaluru",
    metricValue: "18%",
    metricLabel: "Projected IRR",
    summary:
      "Delivered feasibility and highest-and-best-use analysis for a mixed-use residential scheme, shaping the development strategy and capital plan.",
    tags: ["Feasibility", "Advisory"],
  },
  {
    sector: "Capital Markets",
    title: "Equity Raise & Joint Venture",
    location: "Mumbai",
    metricValue: "₹ 800 Cr",
    metricLabel: "Capital Raised",
    summary:
      "Arranged equity and structured a joint venture for a development platform, matching the right capital to the pipeline on competitive terms.",
    tags: ["Capital Markets", "Joint Venture"],
  },
  {
    sector: "Valuation",
    title: "Portfolio Valuation for Financing",
    location: "Pan-India",
    metricValue: "40+",
    metricLabel: "Assets Valued",
    summary:
      "Provided independent, standards-compliant valuations across a pan-India portfolio to support a major financing round for a leading developer.",
    tags: ["Valuation", "Financing"],
  },
];

const stats = [
  { value: "100+", label: "Projects Advised" },
  { value: "₹ 10,000+ Cr", label: "Assets Advised" },
  { value: "50+", label: "Clients Served" },
  { value: "8", label: "Cities" },
];

export default function CaseStudies() {
  return (
    <main>
      <PageHero
        eyebrow="Track Record"
        title="Proven Outcomes."
        accent="Across the Lifecycle."
        crumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
      />

      <section className="case-section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: "680px", marginBottom: "56px" }}>
            <span className="section-label">Selected Engagements</span>
            <h2 className="section-title">
              Real Mandates. <em>Measurable Results.</em>
            </h2>
            <p className="section-description" style={{ maxWidth: "100%" }}>
              A representative selection of the work we do across asset classes and the real estate
              lifecycle — from acquisition and leasing to capital structuring and valuation.
            </p>
          </div>

          <div className="case-grid">
            {caseStudies.map((cs, index) => (
              <article key={index} className={`case-card reveal reveal-delay-${index % 3}`}>
                <div className="case-card-head">
                  <span className="case-sector">{cs.sector}</span>
                  <div className="case-metric">
                    <span className="case-metric-value">{cs.metricValue}</span>
                    <span className="case-metric-label">{cs.metricLabel}</span>
                  </div>
                </div>
                <h3 className="case-card-title">{cs.title}</h3>
                <p className="case-card-location">{cs.location}</p>
                <p className="case-card-summary">{cs.summary}</p>
                <div className="case-tags">
                  {cs.tags.map((tag, i) => (
                    <span key={i} className="case-tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="case-disclaimer reveal">
            Figures and engagements shown are representative of the nature and scale of our advisory
            work.
          </p>
        </div>
      </section>

      {/* Stats band */}
      <div className="stats-strip reveal">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stats-card">
                <div className="stats-number"><StatCounter value={s.value} /></div>
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
            Have a mandate in mind? Let&rsquo;s create your next success story.
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
