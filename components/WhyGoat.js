const reasons = [
  {
    title: "Insight-Led",
    desc: "Every recommendation is grounded in rigorous research and hard market data.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
      </svg>
    ),
  },
  {
    title: "Senior-Led Teams",
    desc: "Direct access to experienced advisors on every mandate — no hand-offs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Full-Lifecycle",
    desc: "From acquisition to exit, we advise across the entire real estate journey.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M23 4v6h-6M1 20v-6h6" />
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
      </svg>
    ),
  },
  {
    title: "Aligned Interests",
    desc: "Independent, conflict-free advice focused squarely on your outcomes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function WhyGoat() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="section-label">Why GOAT Assets</span>
          <h2 className="section-title">
            The Difference Is <em>In the Detail.</em>
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            What sets our advisory apart on every engagement.
          </p>
        </div>
        <div className="why-grid">
          {reasons.map((r, i) => (
            <div key={i} className={`why-card reveal reveal-delay-${i % 4}`}>
              <div className="why-icon">{r.icon}</div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
