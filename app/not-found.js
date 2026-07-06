import Link from "next/link";

export const metadata = {
  title: "Page Not Found | GOAT Assets",
};

export default function NotFound() {
  return (
    <main>
      <section className="notfound-section">
        <div className="container notfound-content">
          <span className="notfound-code">404</span>
          <span className="section-label">Page Not Found</span>
          <h1 className="section-title">
            This page has moved on.<br />
            <em>Let&rsquo;s get you back.</em>
          </h1>
          <p className="section-description" style={{ margin: "0 auto 36px auto" }}>
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have been relocated. Explore our
            advisory services or return to the homepage.
          </p>
          <div className="notfound-actions">
            <Link href="/" className="btn btn-primary">
              Back to Home
              <span style={{ fontSize: "14px", marginLeft: "2px" }}>→</span>
            </Link>
            <Link href="/services" className="btn btn-outline">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
