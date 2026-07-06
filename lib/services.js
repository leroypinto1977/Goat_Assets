/**
 * Single source of truth for GOAT Assets service lines.
 * Consumed by the homepage, the /services index, and the /services/[slug] detail pages.
 */

export const services = [
  {
    slug: "investment-advisory",
    title: "Investment Advisory",
    tagline:
      "Identify and evaluate high-potential opportunities aligned with your investment goals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
    overview:
      "We help investors deploy capital with conviction. From sourcing off-market opportunities to underwriting returns and structuring entry, our investment advisory practice pairs deep local market intelligence with disciplined financial analysis to build resilient real estate portfolios.",
    scope: [
      "Opportunity sourcing across commercial, residential, industrial and mixed-use assets",
      "Underwriting, cash-flow modelling and risk-adjusted return analysis",
      "Portfolio strategy, diversification and capital allocation planning",
      "Entry and hold structuring aligned to your investment horizon",
    ],
    process: [
      { title: "Define Mandate", desc: "We align on target returns, risk appetite, asset classes and geographies." },
      { title: "Source & Screen", desc: "We surface on- and off-market opportunities and filter for fit." },
      { title: "Underwrite", desc: "We model returns, stress-test assumptions and quantify downside." },
      { title: "Recommend", desc: "We deliver a clear go / no-go view with structuring guidance." },
    ],
    deliverables: [
      "Investment thesis and screening memo",
      "Financial model with sensitivity analysis",
      "Risk register and mitigation plan",
      "Go / no-go recommendation",
    ],
    related: ["transactions-advisory", "capital-markets", "valuation-advisory"],
  },
  {
    slug: "transactions-advisory",
    title: "Transactions Advisory",
    tagline:
      "End-to-end support for acquisitions, dispositions, and strategic joint ventures.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M17 11l2 2 4-4" />
      </svg>
    ),
    overview:
      "We manage transactions end to end so you can move with speed and certainty. Whether acquiring, divesting or forming a joint venture, we coordinate diligence, negotiation and execution to protect value and close on the best possible terms.",
    scope: [
      "Buy-side and sell-side advisory across all asset classes",
      "Commercial, technical and legal due-diligence coordination",
      "Deal structuring, negotiation and term-sheet support",
      "Joint ventures, syndications and partnership formation",
    ],
    process: [
      { title: "Mandate & Prep", desc: "We assemble the data room, marketing materials and target list." },
      { title: "Diligence", desc: "We coordinate commercial, technical and legal due diligence." },
      { title: "Negotiate", desc: "We lead negotiation on price, terms and risk allocation." },
      { title: "Close", desc: "We drive execution to a clean, timely completion." },
    ],
    deliverables: [
      "Information memorandum / acquisition brief",
      "Diligence findings and red-flag report",
      "Negotiation strategy and term sheet",
      "Closing checklist and completion support",
    ],
    related: ["investment-advisory", "capital-markets", "leasing-advisory"],
  },
  {
    slug: "leasing-advisory",
    title: "Leasing Advisory",
    tagline:
      "Strategic leasing solutions to optimize occupancy, rental value and tenant experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    overview:
      "We help landlords and occupiers achieve the right tenancy outcomes. From positioning and pricing to tenant acquisition and lease structuring, we maximise occupancy and rental value while building durable landlord–tenant relationships.",
    scope: [
      "Landlord representation and asset positioning",
      "Tenant representation and site acquisition",
      "Rent benchmarking, pricing and incentive strategy",
      "Lease structuring, renewals and renegotiations",
    ],
    process: [
      { title: "Position", desc: "We assess the asset, demand drivers and competitive set." },
      { title: "Market", desc: "We target and engage the right occupier or space pool." },
      { title: "Structure", desc: "We shape commercial terms that balance value and tenure." },
      { title: "Close", desc: "We support heads of terms through to signed lease." },
    ],
    deliverables: [
      "Leasing strategy and pricing benchmark",
      "Target occupier / space shortlist",
      "Heads of terms and lease commentary",
      "Occupancy and rental performance plan",
    ],
    related: ["asset-management", "market-research", "valuation-advisory"],
  },
  {
    slug: "valuation-advisory",
    title: "Valuation & Advisory",
    tagline:
      "Reliable valuations and feasibility studies to support critical business decisions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12h6M9 16h6" />
      </svg>
    ),
    overview:
      "We deliver independent, defensible valuations grounded in rigorous analysis and aligned with international standards. Our work supports transactions, financing, financial reporting and strategic decisions for developers, corporates and institutions.",
    scope: [
      "Market value, investment value and fair-value assessments",
      "Feasibility and highest-and-best-use studies",
      "Valuations for financing, reporting and litigation support",
      "Portfolio and development appraisal",
    ],
    process: [
      { title: "Scope", desc: "We confirm purpose, basis of value and reporting standard." },
      { title: "Analyse", desc: "We gather evidence and apply appropriate valuation methods." },
      { title: "Validate", desc: "We reconcile approaches and stress-test conclusions." },
      { title: "Report", desc: "We issue a clear, compliant and defensible valuation report." },
    ],
    deliverables: [
      "Compliant valuation report",
      "Feasibility / highest-and-best-use study",
      "Comparable evidence and assumptions log",
      "Value sensitivity analysis",
    ],
    related: ["investment-advisory", "market-research", "project-advisory"],
  },
  {
    slug: "market-research",
    title: "Market Research & Insights",
    tagline:
      "Actionable insights and data-driven market intelligence to help you stay ahead.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
      </svg>
    ),
    overview:
      "We turn data into decisions. Our research practice tracks supply, demand, pricing and capital flows across markets and asset classes, delivering the intelligence you need to time entry, position assets and anticipate change.",
    scope: [
      "Supply, demand and absorption analysis",
      "Rent and capital-value benchmarking",
      "Submarket and micro-market deep dives",
      "Custom research and thematic reports",
    ],
    process: [
      { title: "Frame", desc: "We define the question and the decision it informs." },
      { title: "Gather", desc: "We compile primary and secondary market data." },
      { title: "Analyse", desc: "We model trends, scenarios and inflection points." },
      { title: "Advise", desc: "We translate findings into clear, actionable guidance." },
    ],
    deliverables: [
      "Market intelligence report",
      "Benchmarking dashboard",
      "Scenario and outlook analysis",
      "Decision-ready recommendations",
    ],
    related: ["investment-advisory", "valuation-advisory", "leasing-advisory"],
  },
  {
    slug: "asset-management",
    title: "Asset Management",
    tagline:
      "Maximize asset performance and enhance long-term value through active asset management.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    overview:
      "We manage assets to outperform. Through proactive leasing, cost discipline, capital planning and value-add initiatives, we lift net operating income and protect long-term value across the holding period.",
    scope: [
      "Business-plan setting and performance monitoring",
      "Leasing strategy, NOI optimisation and cost control",
      "Capital expenditure and refurbishment planning",
      "Value-add and repositioning initiatives",
    ],
    process: [
      { title: "Baseline", desc: "We assess current performance against market potential." },
      { title: "Plan", desc: "We build a business plan with clear value levers." },
      { title: "Execute", desc: "We drive leasing, cost and capital initiatives." },
      { title: "Report", desc: "We track KPIs and report performance transparently." },
    ],
    deliverables: [
      "Asset business plan",
      "NOI optimisation roadmap",
      "Capex and refurbishment plan",
      "Quarterly performance reporting",
    ],
    related: ["leasing-advisory", "project-advisory", "investment-advisory"],
  },
  {
    slug: "project-advisory",
    title: "Project Advisory",
    tagline:
      "Strategic guidance across planning, development, risk mitigation, and project execution.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    overview:
      "We guide projects from concept to completion. Our project advisory practice de-risks development through robust planning, feasibility, procurement strategy and execution oversight, keeping schemes on time, on budget and on brief.",
    scope: [
      "Development strategy and concept planning",
      "Feasibility, viability and risk assessment",
      "Procurement and delivery-model advice",
      "Execution oversight and milestone tracking",
    ],
    process: [
      { title: "Concept", desc: "We test the development idea against market and site." },
      { title: "Feasibility", desc: "We model viability, cost and programme." },
      { title: "Structure", desc: "We advise on procurement and delivery model." },
      { title: "Deliver", desc: "We oversee execution against milestones and budget." },
    ],
    deliverables: [
      "Development strategy brief",
      "Feasibility and viability study",
      "Procurement and delivery plan",
      "Execution and risk dashboard",
    ],
    related: ["valuation-advisory", "asset-management", "capital-markets"],
  },
  {
    slug: "capital-markets",
    title: "Capital Markets",
    tagline:
      "Access to capital and financial structuring through tailored investment and debt solutions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
        <line x1="12" y1="10" x2="12" y2="14" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
    overview:
      "We connect real estate to capital. From equity raising to debt structuring and refinancing, we design and execute funding solutions that match the right capital to the right opportunity on competitive terms.",
    scope: [
      "Equity raising and investor introductions",
      "Debt structuring, financing and refinancing",
      "Recapitalisations and structured solutions",
      "Capital strategy and lender / investor relations",
    ],
    process: [
      { title: "Assess", desc: "We evaluate the capital need and optimal structure." },
      { title: "Package", desc: "We prepare a compelling investment / financing case." },
      { title: "Engage", desc: "We approach and negotiate with capital providers." },
      { title: "Close", desc: "We coordinate to funding and completion." },
    ],
    deliverables: [
      "Capital strategy and structure",
      "Investor / lender pitch package",
      "Term comparison and negotiation support",
      "Funding completion coordination",
    ],
    related: ["investment-advisory", "transactions-advisory", "project-advisory"],
  },
];

export function getServiceSlugs() {
  return services.map((service) => service.slug);
}

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}
