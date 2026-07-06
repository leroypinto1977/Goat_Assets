/**
 * Open positions for GOAT Assets careers.
 * Consumed by /careers (listing) and /careers/[slug] (detail).
 * Placeholder roles — update titles, locations and descriptions as openings change.
 */

export const jobs = [
  {
    slug: "senior-investment-analyst",
    title: "Senior Investment Analyst",
    department: "Investment Advisory",
    location: "Mumbai",
    type: "Full-time",
    experience: "4–6 years",
    summary:
      "Lead the underwriting and evaluation of real estate investment opportunities, building the analysis that shapes our clients' capital decisions across asset classes.",
    responsibilities: [
      "Build and maintain detailed cash-flow and returns models",
      "Conduct market, comparable and sensitivity analysis to underwrite opportunities",
      "Prepare investment memos and present recommendations to clients",
      "Support diligence and structuring on live transactions",
    ],
    requirements: [
      "4–6 years in real estate investment, private equity or transaction advisory",
      "Advanced financial modelling and valuation skills",
      "Strong command of real estate fundamentals across asset classes",
      "Excellent written and verbal communication",
    ],
  },
  {
    slug: "associate-capital-markets",
    title: "Associate, Capital Markets",
    department: "Capital Markets",
    location: "Mumbai",
    type: "Full-time",
    experience: "2–4 years",
    summary:
      "Support equity and debt raising mandates end to end — from preparing pitch materials to coordinating with investors and lenders through to close.",
    responsibilities: [
      "Prepare investment teasers, information memoranda and financial packages",
      "Maintain investor and lender outreach trackers",
      "Coordinate diligence and data-room management on live raises",
      "Research capital providers and market financing terms",
    ],
    requirements: [
      "2–4 years in capital markets, investment banking or real estate finance",
      "Strong financial modelling and presentation skills",
      "Detail-oriented with the ability to manage multiple workstreams",
      "Comfortable engaging with institutional counterparties",
    ],
  },
  {
    slug: "valuation-manager",
    title: "Valuation Manager",
    department: "Valuation & Research",
    location: "Bengaluru",
    type: "Full-time",
    experience: "6–8 years",
    summary:
      "Own the delivery of independent, standards-compliant valuations across portfolios and asset classes, leading a small team and engaging directly with clients.",
    responsibilities: [
      "Lead valuation engagements from scoping to final report",
      "Review models, evidence and assumptions for accuracy and compliance",
      "Mentor analysts and manage delivery timelines",
      "Present conclusions and methodology to clients and stakeholders",
    ],
    requirements: [
      "6–8 years in real estate valuation or advisory",
      "Relevant professional qualification (e.g. RICS / MRICS preferred)",
      "Deep knowledge of valuation standards and methodologies",
      "Proven team leadership and client management",
    ],
  },
  {
    slug: "leasing-consultant",
    title: "Leasing Consultant",
    department: "Leasing Advisory",
    location: "Delhi NCR",
    type: "Full-time",
    experience: "3–5 years",
    summary:
      "Drive leasing outcomes for landlords and occupiers — sourcing demand, structuring commercial terms and closing transactions across commercial and retail assets.",
    responsibilities: [
      "Build and manage relationships with occupiers and landlords",
      "Position assets and run targeted leasing campaigns",
      "Negotiate heads of terms and support lease execution",
      "Track market rents, incentives and absorption trends",
    ],
    requirements: [
      "3–5 years in commercial or retail leasing",
      "Strong negotiation and relationship-building skills",
      "Local market knowledge across the Delhi NCR region",
      "Results-driven and client-focused",
    ],
  },
  {
    slug: "research-analyst",
    title: "Research Analyst",
    department: "Market Research",
    location: "Mumbai",
    type: "Full-time",
    experience: "1–3 years",
    summary:
      "Power our market intelligence practice — gathering, structuring and analysing data to produce the insights that guide client strategy and firm thought leadership.",
    responsibilities: [
      "Compile and maintain supply, demand and pricing datasets",
      "Build dashboards and analyse market trends",
      "Contribute to research reports and client deliverables",
      "Track transactions, capital flows and macro indicators",
    ],
    requirements: [
      "1–3 years in research, analytics or real estate",
      "Strong data, spreadsheet and analytical skills",
      "Clear written communication and attention to detail",
      "Curiosity about real estate markets and trends",
    ],
  },
];

export function getJobSlugs() {
  return jobs.map((job) => job.slug);
}

export function getJobBySlug(slug) {
  return jobs.find((job) => job.slug === slug);
}
