import Link from 'next/link';
import Accordion from '@/components/Accordion';

export default function FaqSection() {
  const faqs = [
    {
      question: "What types of real estate assets do you advise on?",
      answer: "GOAT Assets provides advisory services across commercial offices, retail developments, industrial warehouses, premium residential projects, and mixed-use portfolios."
    },
    {
      question: "What is your typical client engagement lifecycle?",
      answer: "We follow a disciplined 5-step process: (1) Discovering goals, (2) Rigorous market analysis, (3) Tailored strategic recommendation, (4) Direct transaction support, and (5) Delivering long-term assets performance."
    },
    {
      question: "How does your fee structure work for transactions?",
      answer: "Our fees are customized based on the complexity, scale, and specific service lines required. We operate on a retainer, milestone, or performance-aligned basis to ensure mutual success."
    },
    {
      question: "Do you provide valuation reports for financial institutions?",
      answer: "Yes, our valuation advisory is built on rigorous analysis and aligns with international industry standards, providing trusted reports for developers, corporations, and major institutions."
    }
  ];

  return (
    <section className="faq-section" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="faq-grid">
          {/* Left Column */}
          <div className="reveal">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">
              Frequently Asked<br />
              <em>Questions.</em>
            </h2>
            <p className="section-description" style={{ maxWidth: '100%' }}>
              Find answers to common inquiries about our real estate advisory practices, transaction execution, and valuation services.
            </p>
            <div style={{ marginTop: '30px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/faq" className="btn btn-primary">
                View All FAQs
                <span style={{ fontSize: '14px', marginLeft: '2px' }}>→</span>
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Ask A Question
                <span style={{ fontSize: '14px', marginLeft: '2px' }}>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column (Accordion List) */}
          <div className="faq-accordion reveal reveal-delay-2">
            <Accordion items={faqs} idPrefix="home" />
          </div>
        </div>
      </div>
    </section>
  );
}
