import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { getJobBySlug, getJobSlugs } from "@/lib/jobs";

export function generateStaticParams() {
  return getJobSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) {
    return { title: "Role Not Found | GOAT Assets" };
  }
  return {
    title: `${job.title} | Careers | GOAT Assets`,
    description: job.summary,
    alternates: { canonical: `/careers/${job.slug}` },
  };
}

export default async function JobDetail({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  const applyHref = `mailto:careers@goatassets.com?subject=${encodeURIComponent(
    `Application: ${job.title}`
  )}`;

  const meta = [
    { label: "Department", value: job.department },
    { label: "Location", value: job.location },
    { label: "Type", value: job.type },
    { label: "Experience", value: job.experience },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title={job.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
          { label: job.title },
        ]}
      />

      <section className="job-detail-section">
        <div className="container job-detail-container">
          <div className="job-detail-meta reveal">
            {meta.map((item, i) => (
              <div key={i} className="job-meta-item">
                <span className="job-meta-label">{item.label}</span>
                <span className="job-meta-value">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="job-detail-body reveal reveal-delay-1">
            <h2 className="job-block-title">About the Role</h2>
            <p className="job-detail-summary">{job.summary}</p>

            <h2 className="job-block-title">Responsibilities</h2>
            <ul className="service-list">
              {job.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2 className="job-block-title">Requirements</h2>
            <ul className="service-list">
              {job.requirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="job-apply">
              <a href={applyHref} className="btn btn-primary">
                Apply for This Role
                <span style={{ fontSize: "14px", marginLeft: "2px" }}>→</span>
              </a>
              <Link href="/careers" className="btn btn-outline">
                Back to All Roles
              </Link>
            </div>
            <p className="job-apply-note">
              To apply, email your CV to{" "}
              <a href="mailto:careers@goatassets.com">careers@goatassets.com</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
