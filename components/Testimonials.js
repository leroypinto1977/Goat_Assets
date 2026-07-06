// Representative client testimonials — replace names, companies and quotes with real ones.

const testimonials = [
  {
    quote:
      "GOAT Assets brought rigour and clarity to a complex acquisition. Their analysis gave our investment committee the confidence to move decisively.",
    name: "Rahul Desai",
    initials: "RD",
    role: "Managing Director, Meridian Capital",
  },
  {
    quote:
      "From valuation through to negotiation, they were a true partner — sharp, responsive and relentlessly focused on the outcome.",
    name: "Sneha Rao",
    initials: "SR",
    role: "Chief Financial Officer, Altius Developers",
  },
  {
    quote:
      "The market intelligence they provide is genuinely differentiated. It has reshaped how we think about timing and positioning.",
    name: "Vikram Nair",
    initials: "VN",
    role: "Head of Strategy, Northwind Group",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            Trusted by Leaders. <em>Across the Industry.</em>
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            We measure our success by the outcomes we create and the relationships we build.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <figure key={index} className={`testimonial-card reveal reveal-delay-${index}`}>
              <span className="testimonial-mark" aria-hidden="true">&ldquo;</span>
              <blockquote className="testimonial-quote">{t.quote}</blockquote>
              <figcaption className="testimonial-author">
                <span className="testimonial-avatar">{t.initials}</span>
                <span className="testimonial-author-meta">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
