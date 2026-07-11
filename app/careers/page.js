import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import { jobs } from '@/lib/jobs';

export const metadata = {
  title: "Careers | GOAT Assets | Join Our Advisory Team",
  description: "Explore career opportunities at GOAT Assets. Work with passionate real estate advisors, solve complex cases, and build a rewarding career.",
};

export default function Careers() {
  const benefits = [
    {
      title: "Meaningful Work",
      desc: "Work on landmark real estate advisory projects that shape cityscapes and commercial centers.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      )
    },
    {
      title: "Growth Mindset",
      desc: "Enjoy continuous mentorship, leadership programs, and clear vertical career growth tracks.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      )
    },
    {
      title: "Collaborative Culture",
      desc: "Thrive in a supportive, zero-ego environment built on cooperation and knowledge sharing.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      )
    },
    {
      title: "Merit & Recognition",
      desc: "Experience a performance-driven culture with fair, transparent recognition and compensation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    }
  ];

  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="Build Your Career."
        accent="Create Real Impact."
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />
      <section>
        <div className="container">
          {/* Top Split Section */}
          <div className="careers-grid">
            {/* Left Content */}
            <div className="reveal reveal-left">
              <p className="section-description" style={{ maxWidth: '100%' }}>
                At GOAT Assets, you&rsquo;ll work with passionate professionals, solve complex commercial challenges, and grow in a high-performance advisory environment. We empower our teams to take ownership of projects and think creatively to unlock client value.
              </p>
              <a href="#openings" className="btn btn-primary">
                View Open Roles
                <span style={{ fontSize: '14px', marginLeft: '2px' }}>↓</span>
              </a>
            </div>

            {/* Right Silhouette Image */}
            <div className="careers-img-container reveal reveal-zoom reveal-delay-2">
              <Image src="/assets/images/careers_corporate.png" alt="Corporate Professionals Silhouette" fill sizes="(max-width: 991px) 100vw, 50vw" className="careers-img" />
            </div>
          </div>

          {/* Open Positions */}
          <div id="openings" className="openings-block">
            <div className="reveal" style={{ marginBottom: '40px' }}>
              <span className="section-label">Open Positions</span>
              <h2 className="section-title">
                Current <em>Openings.</em>
              </h2>
              <p className="section-description" style={{ maxWidth: '100%' }}>
                Explore our current opportunities. Don&rsquo;t see a perfect fit? We still want to hear from you.
              </p>
            </div>
            <div className="jobs-list">
              {jobs.map((job, index) => (
                <Link
                  key={job.slug}
                  href={`/careers/${job.slug}`}
                  className={`job-row reveal reveal-delay-${index % 4}`}
                >
                  <div className="job-row-main">
                    <h3 className="job-row-title">{job.title}</h3>
                    <div className="job-row-meta">
                      <span>{job.department}</span>
                      <span className="job-dot">•</span>
                      <span>{job.location}</span>
                      <span className="job-dot">•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <span className="job-row-cta">
                    View Role
                    <span className="job-row-arrow">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* "Why Join Us?" Segment */}
          <div style={{ marginTop: '100px' }}>
            <h3 className="careers-sub-title reveal">Why Join Us?</h3>
            
            <div className="why-join-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className={`join-card reveal reveal-delay-${index}`}>
                  <div className="join-icon">
                    {benefit.icon}
                  </div>
                  <h4 className="join-title">{benefit.title}</h4>
                  <p className="join-desc">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Banner for Talent Pipeline */}
          <div className="careers-cta-banner reveal">
            <div className="careers-cta-text">
              <h4>Don&rsquo;t see the right role?</h4>
              <p>We are always looking for exceptional, values-driven advisory talent.</p>
            </div>
            <Link href="/contact" className="btn btn-outline">
              Share Your Profile 
              <span style={{ fontSize: '14px', marginLeft: '2px' }}>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
