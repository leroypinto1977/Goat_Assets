import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy | GOAT Assets",
  description:
    "How GOAT Assets collects, uses, and protects personal information across our real estate advisory services and website.",
};

export default function Privacy() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="legal-section">
        <div className="container legal-content">
          <p className="legal-updated">Last updated: June 2026</p>

          <p className="legal-lead">
            GOAT Assets (&ldquo;GOAT Assets&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) is
            committed to protecting your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website or engage our advisory
            services. Please review it carefully.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect information you provide directly to us &mdash; such as your name, email
            address, phone number, company, and the contents of any enquiry submitted through our
            contact forms. We also collect limited technical information automatically, including IP
            address, browser type, and pages visited, to operate and improve the site.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to enquiries, provide and improve our
            advisory services, send relevant market insights where you have requested them, comply
            with legal obligations, and maintain the security of our website.
          </p>

          <h2>3. Cookies &amp; Analytics</h2>
          <p>
            Our website may use cookies and similar technologies to remember your preferences and
            understand how the site is used. You can control cookies through your browser settings.
            Disabling cookies may affect certain features of the site.
          </p>

          <h2>4. Sharing &amp; Disclosure</h2>
          <p>
            We do not sell your personal information. We may share information with trusted service
            providers who support our operations, or where required by law, regulation, or legal
            process. Any such parties are bound by appropriate confidentiality obligations.
          </p>

          <h2>5. Data Security &amp; Retention</h2>
          <p>
            We implement reasonable technical and organisational measures to protect your information.
            We retain personal data only for as long as necessary to fulfil the purposes described in
            this policy or as required by applicable law.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Subject to applicable law, you may have the right to access, correct, or request deletion
            of your personal information, and to object to or restrict certain processing. To exercise
            these rights, please contact us using the details below.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date
            above reflects the most recent revision. Material changes will be posted on this page.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            For any questions about this Privacy Policy or our handling of your information, contact us
            at{" "}
            <a href="mailto:connect@goatassets.com">connect@goatassets.com</a> or One BKC, Bandra Kurla
            Complex, Mumbai &ndash; 400051, India.
          </p>

          <p className="legal-note">
            This document is a template provided for website completeness and should be reviewed by
            qualified legal counsel before publication.
          </p>
        </div>
      </section>
    </main>
  );
}
