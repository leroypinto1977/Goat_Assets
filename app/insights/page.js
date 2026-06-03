import Link from 'next/link';

export const metadata = {
  title: "Market Insights | GOAT Assets | Real Estate Intelligence",
  description: "Read our latest reports and market intelligence on commercial offices, retail spaces, industrial logistics, and capital flows.",
};

export default function Insights() {
  const articles = [
    {
      title: "Indian Office Market Outlook 2024",
      date: "May 15, 2024",
      desc: "Key trends shaping the commercial office market, occupancy ratios, and what to watch out for.",
      img: "/assets/images/insight_office.png"
    },
    {
      title: "Retail Real Estate Reimagined",
      date: "Apr 30, 2024",
      desc: "Evolving consumer behavior patterns and their direct structural impact on retail shopping spaces.",
      img: "/assets/images/insight_retail.png"
    },
    {
      title: "Industrial & Logistics On The Rise",
      date: "Apr 15, 2024",
      desc: "Why India's industrial real estate and warehouses continue to attract institutional investors.",
      img: "/assets/images/insight_industrial.png"
    },
    {
      title: "Capital Flows In Indian Real Estate",
      date: "Mar 25, 2024",
      desc: "A deep dive into cross-border investment trends, financing volumes and capital market developments.",
      img: "/assets/images/insight_capital.png"
    }
  ];

  return (
    <main>
      <section>
        <div className="container">
          {/* Top Split Section */}
          <div className="insights-top-grid">
            {/* Left Content */}
            <div className="reveal">
              <span className="section-label">Market Insights</span>
              <h2 className="section-title">
                Insights Today.<br />
                <em>Better Decisions Tomorrow.</em>
              </h2>
              <p className="section-description" style={{ maxWidth: '100%' }}>
                Stay informed with our perspectives on market trends, opportunities and real estate dynamics. We analyze macro movements and localized data to deliver reports that guide strategic investment.
              </p>
              <Link href="#" className="btn btn-primary">
                View All Insights 
                <span style={{ fontSize: '14px', marginLeft: '2px' }}>→</span>
              </Link>
            </div>

            {/* Right Featured Image */}
            <div className="insights-skyline-container reveal reveal-delay-2">
              <img src="/assets/images/insights_skyline.png" alt="Mumbai Cityscape Skyline Real Estate" className="insights-skyline-img" />
            </div>
          </div>

          {/* 4-Card Article Grid */}
          <div className="insights-grid">
            {articles.map((article, index) => (
              <Link key={index} href="#" className={`insight-card reveal reveal-delay-${index}`}>
                <div className="insight-thumb-container">
                  <img src={article.img} alt={article.title} className="insight-thumb" />
                </div>
                <div className="insight-body">
                  <span className="insight-date">{article.date}</span>
                  <h3 className="insight-card-title">{article.title}</h3>
                  <p className="insight-card-desc">{article.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
