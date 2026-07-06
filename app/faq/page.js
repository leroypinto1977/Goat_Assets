import Link from "next/link";
import PageHero from "@/components/PageHero";
import Accordion from "@/components/Accordion";

export const metadata = {
  title: "FAQ | GOAT Assets | Frequently Asked Questions",
  description:
    "Answers to common questions about GOAT Assets' real estate advisory services, engagement process, fees, valuation, and coverage.",
};

const categories = [
  {
    title: "Services & Expertise",
    items: [
      {
        question: "What types of real estate assets do you advise on?",
        answer:
          "We advise across commercial offices, retail developments, industrial and logistics warehouses, premium and mixed-use residential, and institutional-grade portfolios.",
      },
      {
        question: "Which advisory services do you offer?",
        answer:
          "Investment, transactions, leasing, valuation, market research, asset management, project advisory and capital markets — covering the full real estate lifecycle.",
      },
      {
        question: "Do you work with both investors and occupiers?",
        answer:
          "Yes. We represent investors, developers, corporates and institutions, as well as occupiers seeking space — bringing the right perspective to each side of a mandate.",
      },
    ],
  },
  {
    title: "Engagement & Fees",
    items: [
      {
        question: "What is your typical client engagement lifecycle?",
        answer:
          "We follow a disciplined five-step process: discover goals, conduct rigorous market analysis, deliver a tailored recommendation, support execution directly, and drive long-term asset performance.",
      },
      {
        question: "How does your fee structure work?",
        answer:
          "Fees are customised to the complexity, scale and service lines required. We operate on a retainer, milestone, or performance-aligned basis to ensure mutual success.",
      },
      {
        question: "How long does a typical engagement take?",
        answer:
          "It depends on scope — a valuation may take a few weeks, while a complex transaction or development advisory mandate can run over several months. We agree timelines upfront.",
      },
    ],
  },
  {
    title: "Valuation & Research",
    items: [
      {
        question: "Do you provide valuation reports for financial institutions?",
        answer:
          "Yes. Our valuation advisory is built on rigorous analysis and aligns with international standards, providing trusted reports for developers, corporations and major institutions.",
      },
      {
        question: "Do you provide market research and feasibility studies?",
        answer:
          "We deliver data-driven market intelligence, benchmarking, and feasibility and highest-and-best-use studies to support critical investment and development decisions.",
      },
    ],
  },
  {
    title: "Coverage & Getting Started",
    items: [
      {
        question: "Which cities and regions do you cover?",
        answer:
          "We are headquartered in Mumbai with active coverage across major metros and a pan-India advisory footprint, supported by cross-border investor relationships.",
      },
      {
        question: "How do we get started with GOAT Assets?",
        answer:
          "Reach out via our contact page or email connect@goatassets.com. We will arrange an initial consultation to understand your goals and scope the right engagement.",
      },
    ],
  },
];

export default function Faq() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Questions?"
        accent="We Have Answers."
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <section className="faq-page-section">
        <div className="container faq-page-container">
          {categories.map((cat, i) => (
            <div key={i} className="faq-cat reveal">
              <h2 className="faq-cat-title">{cat.title}</h2>
              <div className="faq-accordion">
                <Accordion items={cat.items} idPrefix={`faq-${i}`} />
              </div>
            </div>
          ))}

          <div className="faq-page-cta reveal">
            <p>Still have a question? We&rsquo;re happy to help.</p>
            <Link href="/contact" className="btn btn-primary">
              Ask A Question
              <span style={{ fontSize: "14px", marginLeft: "2px" }}>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
