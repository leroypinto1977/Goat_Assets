'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

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

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
            <div style={{ marginTop: '30px' }}>
              <Link href="/contact" className="btn btn-outline">
                Ask A Question 
                <span style={{ fontSize: '14px', marginLeft: '2px' }}>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column (Accordion List) */}
          <div className="faq-accordion reveal reveal-delay-2">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div 
                  key={index} 
                  className={`faq-item ${isOpen ? 'open' : ''}`}
                  onClick={() => toggleFaq(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="faq-question-row">
                    <h3 className="faq-question">{faq.question}</h3>
                    <div className="faq-toggle-icon">
                      <svg 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        style={{
                          width: '18px',
                          height: '18px',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="faq-answer-container">
                    <div className="faq-answer-inner">
                      <p className="faq-answer">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
