import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Terms of Use | GOAT Assets",
  description:
    "The terms and conditions governing your use of the GOAT Assets website and content.",
};

export default function Terms() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
      />

      <section className="legal-section">
        <div className="container legal-content">
          <p className="legal-updated">Last updated: June 2026</p>

          <p className="legal-lead">
            These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of the GOAT Assets
            website. By accessing or using this website, you agree to be bound by these Terms. If you do
            not agree, please do not use the site.
          </p>

          <h2>1. Use of the Website</h2>
          <p>
            You may use this website for lawful purposes only. You agree not to use the site in any way
            that could damage, disable, or impair it, or interfere with any other party&rsquo;s use of
            the site.
          </p>

          <h2>2. No Advisory Relationship</h2>
          <p>
            The content on this website is provided for general information only and does not constitute
            investment, financial, legal, or tax advice. No advisory relationship is created by your use
            of this website. You should seek tailored professional advice before acting on any
            information presented here.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website &mdash; including text, graphics, logos, and images &mdash; is
            the property of GOAT Assets or its licensors and is protected by applicable intellectual
            property laws. You may not reproduce or distribute it without prior written permission.
          </p>

          <h2>4. Market Information &amp; Insights</h2>
          <p>
            Market insights, figures, and projections published on this website are based on sources
            believed to be reliable at the time of publication but are not guaranteed to be accurate or
            complete. Past performance is not indicative of future results.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            This website may contain links to third-party websites. We are not responsible for the
            content, policies, or practices of any third-party sites and provide such links for
            convenience only.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, GOAT Assets shall not be liable for any direct,
            indirect, or consequential loss arising from your use of, or inability to use, this website
            or its content.
          </p>

          <h2>7. Changes to These Terms</h2>
          <p>
            We may revise these Terms at any time. Continued use of the website after changes are posted
            constitutes acceptance of the revised Terms.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            Questions about these Terms may be directed to{" "}
            <a href="mailto:connect@goatassets.com">connect@goatassets.com</a>.
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
