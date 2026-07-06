/**
 * Real estate sectors / asset classes GOAT Assets advises on.
 * Consumed by the homepage portfolio cards, /sectors (index) and /sectors/[slug].
 */

export const sectors = [
  {
    slug: "office",
    name: "Commercial Office",
    tagline: "Grade-A offices, IT parks and co-working hubs.",
    image: "/assets/images/insight_office.png",
    overview:
      "We advise across the full spectrum of commercial office assets — from landmark Grade-A towers and IT parks to flexible co-working hubs — helping owners and occupiers optimise value, occupancy and yield.",
    highlights: [
      "Acquisition and disposition of Grade-A office assets",
      "Office leasing and occupier representation",
      "Asset repositioning and NOI optimisation",
      "Valuation and feasibility for office developments",
    ],
    stats: [
      { value: "₹4,500+ Cr", label: "Office assets advised" },
      { value: "25+", label: "Office mandates" },
      { value: "8", label: "Cities" },
    ],
    related: ["leasing-advisory", "valuation-advisory", "asset-management"],
  },
  {
    slug: "retail",
    name: "Retail",
    tagline: "Malls, high-streets and experiential retail.",
    image: "/assets/images/insight_retail.png",
    overview:
      "From prime high-streets to large-format malls and experiential destinations, we help retail owners and brands position assets, structure tenancies and drive footfall and rental performance.",
    highlights: [
      "Mall and high-street leasing strategy",
      "Tenant-mix planning and repositioning",
      "Retail acquisition and disposition",
      "Footfall, catchment and rental analysis",
    ],
    stats: [
      { value: "95%", label: "Avg. occupancy achieved" },
      { value: "15+", label: "Retail mandates" },
      { value: "1.2M+ sq ft", label: "Leased" },
    ],
    related: ["leasing-advisory", "asset-management", "market-research"],
  },
  {
    slug: "industrial",
    name: "Industrial & Logistics",
    tagline: "Warehousing, logistics parks and build-to-suit.",
    image: "/assets/images/insight_industrial.png",
    overview:
      "We advise across the fast-growing industrial and logistics sector — warehousing, supply-chain hubs and build-to-suit developments — connecting institutional capital with high-performing assets.",
    highlights: [
      "Warehouse and logistics acquisition",
      "Build-to-suit and development advisory",
      "Industrial portfolio dispositions",
      "Investor and occupier representation",
    ],
    stats: [
      { value: "₹2,500+ Cr", label: "Logistics advised" },
      { value: "5M+ sq ft", label: "Industrial space" },
      { value: "12+", label: "Mandates" },
    ],
    related: ["investment-advisory", "transactions-advisory", "project-advisory"],
  },
  {
    slug: "residential",
    name: "Residential",
    tagline: "Premium and mixed-use residential developments.",
    image: "/assets/images/hero_building_complete.png",
    overview:
      "We support developers and investors across premium and mixed-use residential projects — from feasibility and positioning through to structuring and exit — to maximise returns and absorption.",
    highlights: [
      "Residential development feasibility",
      "Highest-and-best-use analysis",
      "Project positioning and pricing strategy",
      "Land and development transactions",
    ],
    stats: [
      { value: "18%", label: "Avg. projected IRR" },
      { value: "10+", label: "Residential schemes" },
      { value: "₹3,000+ Cr", label: "GDV advised" },
    ],
    related: ["project-advisory", "valuation-advisory", "investment-advisory"],
  },
  {
    slug: "capital-markets",
    name: "Capital Markets & Institutional",
    tagline: "Investment-grade assets and structured transactions.",
    image: "/assets/images/insight_capital.png",
    overview:
      "We connect institutional capital to investment-grade real estate — advising on major acquisitions, portfolio transactions, joint ventures and structured deals across every asset class.",
    highlights: [
      "Institutional acquisitions and exits",
      "Portfolio and entity-level transactions",
      "Joint ventures and syndications",
      "Cross-border investment advisory",
    ],
    stats: [
      { value: "₹10,000+ Cr", label: "Assets advised" },
      { value: "₹800+ Cr", label: "Capital raised" },
      { value: "Global", label: "Investor reach" },
    ],
    related: ["capital-markets", "investment-advisory", "transactions-advisory"],
  },
];

export function getSectorSlugs() {
  return sectors.map((s) => s.slug);
}

export function getSectorBySlug(slug) {
  return sectors.find((s) => s.slug === slug);
}
