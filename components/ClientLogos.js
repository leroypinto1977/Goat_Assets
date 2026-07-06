// Placeholder client names styled as wordmark "logos" — replace with real client logos.
const clients = [
  "Meridian Capital",
  "Altius Developers",
  "Northwind Group",
  "Vantage REIT",
  "Apex Holdings",
  "Crestline",
];

export default function ClientLogos() {
  return (
    <section className="clients-section">
      <div className="container">
        <p className="clients-eyebrow reveal">
          Trusted by leading investors, developers and institutions
        </p>
        <div className="clients-row reveal">
          {clients.map((name, i) => (
            <span key={i} className="client-logo">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
