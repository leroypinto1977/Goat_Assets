import PageHero from "@/components/PageHero";
import ProcessTimeline from "@/components/ProcessTimeline";
import StatCounter from "@/components/StatCounter";

export const metadata = {
  title: "Our Approach | GOAT Assets | A Proven Strategy",
  description: "Discover GOAT Assets' structured 5-step advisory process: Discover, Analyze, Advise, Execute, and Deliver Value.",
};

export default function Approach() {
  const steps = [
    {
      num: 1,
      title: "Discover",
      desc: "We understand your goals, challenges, and core project requirements."
    },
    {
      num: 2,
      title: "Analyze",
      desc: "We conduct in-depth technical research and rigorous market analysis."
    },
    {
      num: 3,
      title: "Advise",
      desc: "We provide strategic and commercial recommendations tailored to your needs."
    },
    {
      num: 4,
      title: "Execute",
      desc: "We support you actively through execution to achieve measurable results."
    },
    {
      num: 5,
      title: "Deliver Value",
      desc: "We stay committed to driving sustainable long-term value and growth."
    }
  ];

  return (
    <main>
      <PageHero
        eyebrow="Our Approach"
        title="A Proven Approach."
        accent="Consistent Outcomes."
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Approach" }]}
      />
      <section style={{ paddingBottom: 0 }}>
        <div className="container">
          {/* Section intro */}
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p className="section-description" style={{ margin: '0 auto' }}>
              Our approach is built on a deep understanding of markets, disciplined analysis and a commitment to execution.
            </p>
          </div>

          {/* 5-Step Process Timeline Flow — line draws itself on scroll */}
          <ProcessTimeline steps={steps} />
        </div>

        {/* Bottom Approach Metrics Strip */}
        <div className="approach-metrics-strip reveal">
          <div className="container approach-metrics-container">
            <div className="approach-metrics-pitch">
              Insight. Strategy. Execution.<br />
              That&rsquo;s how we create real value.
            </div>
            <div className="approach-metrics-values">
              <div className="approach-metric">
                <div className="approach-metric-val"><StatCounter value="100+" /></div>
                <div className="approach-metric-lbl">Projects Delivered</div>
              </div>
              <div className="approach-metric">
                <div className="approach-metric-val"><StatCounter value="₹ 10,000+ Cr" /></div>
                <div className="approach-metric-lbl">Assets Advised</div>
              </div>
              <div className="approach-metric">
                <div className="approach-metric-val"><StatCounter value="50+" /></div>
                <div className="approach-metric-lbl">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
