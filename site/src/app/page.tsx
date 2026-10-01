import Link from "next/link";
import {
  Arrow,
  Orb,
  Reveal,
  SectionIntro,
  Services,
  ProjectCard,
  CTA,
} from "@/components/site";

export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> INDEPENDENT THINKING. EXTRAORDINARY
            OUTCOMES.
          </p>
          <h1>
            Good ideas.
            <br />
            Exceptional
            <br />
            <span className="purple">execution.</span>
          </h1>
          <p className="hero-description">
            We turn your next big idea into a digital experience people can’t
            ignore. Built with intention. Designed for what’s next.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/contact">
              Let’s build something <Arrow />
            </Link>
            <Link className="text-link" href="/work">
              Explore our work <Arrow />
            </Link>
          </div>
          <div className="hero-note">
            <span className="tiny-stars">✦ ✦ ✦</span>
            <span>A little imagination. A lot of possibility.</span>
          </div>
        </div>
        <div className="hero-art">
          <Orb />
          <div className="art-caption">
            <span>
              <span className="status-dot" /> THE FUTURE IS TAKING SHAPE
            </span>
            <span>EB—001 / 2026</span>
          </div>
          <div className="floating-label">
            <span>✦</span> Beyond the expected.
          </div>
        </div>
      </section>
      <div className="brand-strip wrap">
        <span>
          BIG THINKING.
          <br />
          SHARED AMBITION.
        </span>
        <div className="wordmark">Layers</div>
        <div className="wordmark">◈ Spherule</div>
        <div className="wordmark">alt+shift</div>
        <div className="wordmark">✳ Quotient</div>
        <p>Illustrative partner brands</p>
      </div>
      <section className="section wrap">
        <Reveal>
          <SectionIntro
            eyebrow="01 / WHAT WE DO"
            title={
              <>
                The right skills.
                <br />
                All in one orbit.
              </>
            }
            description="Strategy, design, and technology working together. From the first spark to the final detail, we make every piece count."
          />
        </Reveal>
        <Services />
      </section>
      <section className="work-section">
        <div className="wrap section">
          <Reveal>
            <div className="section-heading">
              <SectionIntro
                eyebrow="02 / SELECTED CONCEPTS"
                title={
                  <>
                    Ideas made
                    <br />
                    <span className="purple">impossible to miss.</span>
                  </>
                }
              />
              <Link className="text-link" href="/work">
                View all concepts <Arrow />
              </Link>
            </div>
          </Reveal>
          <div className="project-grid">
            <ProjectCard
              kind="orbit"
              title="Orbit"
              category="FINTECH / PRODUCT DESIGN"
              description="A clearer perspective on personal finance."
            />
            <ProjectCard
              kind="forma"
              title="Forma"
              category="LIFESTYLE / DIGITAL EXPERIENCE"
              description="Space for a more considered way of living."
            />
          </div>
          <p className="demo-note">
            Concept projects created to demonstrate our approach. No client
            results are implied.
          </p>
        </div>
      </section>
      <section className="section wrap philosophy">
        <Reveal>
          <p className="eyebrow">03 / THE EXAMPLE DIFFERENCE</p>
          <h2>
            Small team.
            <br />
            Big-picture thinkers.
            <br />
            <span className="muted">Every detail matters.</span>
          </h2>
        </Reveal>
        <Reveal>
          <p>
            We believe the best work happens when curiosity meets craft. We ask
            better questions, sweat the small stuff, and bring a little
            unexpected to everything we make.
          </p>
          <Link href="/about" className="text-link">
            Meet the mindset <Arrow />
          </Link>
          <div className="principles">
            <div>
              <strong>01</strong>
              <span>Intention over convention</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Craft without compromise</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Built for the real world</span>
            </div>
          </div>
        </Reveal>
      </section>
      <CTA />
    </>
  );
}
