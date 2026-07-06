'use client';

import { useState } from 'react';

// Accessible accordion. Renders a list of .faq-item elements; wrap in a
// .faq-accordion container. Each item is { question, answer }.
export default function Accordion({ items, idPrefix = 'faq' }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <h3 className="faq-question-heading">
              <button
                type="button"
                className="faq-question-row"
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-answer-${index}`}
                id={`${idPrefix}-question-${index}`}
                onClick={() => toggle(index)}
              >
                <span className="faq-question">{item.question}</span>
                <span className="faq-toggle-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                      width: '18px',
                      height: '18px',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
            </h3>
            <div
              className="faq-answer-container"
              id={`${idPrefix}-answer-${index}`}
              role="region"
              aria-labelledby={`${idPrefix}-question-${index}`}
            >
              <div className="faq-answer-inner">
                <p className="faq-answer">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
