import Link from 'next/link';

/**
 * Reusable page-title band shown directly below the sticky header on inner pages.
 *
 * Props:
 *  - eyebrow:  small uppercase gold label (e.g. "About Us")
 *  - title:    main serif heading (string)
 *  - accent:   optional second line rendered in italic gold (e.g. "Driven by Value.")
 *  - subtitle: optional supporting line of copy
 *  - crumbs:   breadcrumb trail, array of { label, href? }. The last item is the current page.
 */
export default function PageHero({ eyebrow, title, accent, subtitle, crumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="container">
        {crumbs.length > 0 && (
          <nav className="page-hero-crumbs" aria-label="Breadcrumb">
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1;
              return (
                <span key={index} className="page-hero-crumb">
                  {crumb.href && !isLast ? (
                    <Link href={crumb.href}>{crumb.label}</Link>
                  ) : (
                    <span aria-current="page">{crumb.label}</span>
                  )}
                  {!isLast && <span className="page-hero-crumb-sep">/</span>}
                </span>
              );
            })}
          </nav>
        )}

        {eyebrow && <span className="page-hero-eyebrow">{eyebrow}</span>}

        <h1 className="page-hero-title">
          {title}
          {accent && (
            <>
              <br />
              <em>{accent}</em>
            </>
          )}
        </h1>

        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
