import Link from 'next/link';

/**
 * "Every Document. Verified." — the firm's signature differentiator section.
 * Dark band with a sticky pitch on the left and the five legal checks every
 * buyer needs on the right; each check's ring + tick draws itself on scroll.
 */
const checks = [
  {
    title: 'Title & Ownership Verification',
    desc: 'We trace the complete chain of ownership to confirm the seller holds a clear, marketable title.',
  },
  {
    title: 'Encumbrance & Litigation Check',
    desc: 'We confirm the property is free of mortgages, liens, disputes and pending claims.',
  },
  {
    title: 'RERA & Regulatory Compliance',
    desc: 'We verify project registrations, sanctioned plans and every statutory approval.',
  },
  {
    title: 'Land Use & Conversion',
    desc: 'For land purchases, we check zoning, land-use conversion and development permissions on the ground.',
  },
  {
    title: 'Agreement to Registration',
    desc: 'We review every agreement and stand beside you through stamp duty, payment and registration.',
  },
];

export default function LegalDiligence() {
  return (
    <section className="legal-section">
      <div className="container">
        <div className="legal-grid">
          <div className="legal-pitch reveal reveal-left">
            <span className="section-label">Legal &amp; Documentation</span>
            <h2 className="section-title">
              Every Document. <em>Verified.</em>
            </h2>
            <p className="section-description legal-pitch-desc">
              Buying property — especially land — comes with a maze of legal
              paperwork. We verify each critical document before you commit, so
              there are no surprises after you sign.
            </p>
            <Link href="/services/legal-documentation" className="btn btn-gold">
              How We Protect Buyers
              <span style={{ fontSize: '14px', marginLeft: '2px' }}>→</span>
            </Link>
          </div>

          <div className="legal-steps">
            {checks.map((check, index) => (
              <div key={index} className={`legal-step reveal reveal-delay-${index % 3}`}>
                <span className="legal-check" aria-hidden="true">
                  <svg viewBox="0 0 52 52" fill="none" stroke="currentColor">
                    <circle cx="26" cy="26" r="24" strokeWidth="1.5" />
                    <path d="M16 27l7 7 14-16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3 className="legal-step-title">{check.title}</h3>
                  <p className="legal-step-desc">{check.desc}</p>
                </div>
                <span className="legal-step-num" aria-hidden="true">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
