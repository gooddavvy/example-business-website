import type { Metadata } from "next";
import {
  CTA,
  PageHero,
  Reveal,
  SectionIntro,
  Services,
} from "@/components/site";
export const metadata: Metadata = { title: "Services" };
export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="CAPABILITIES / CONNECTED BY DESIGN"
        title={
          <>
            From a spark of an idea.
            <br />
            <span className="purple">To something exceptional.</span>
          </>
        }
        description="The thinking, the making, and everything in between. A connected set of capabilities for brands ready to take their next step."
      />
      <section className="wrap" style={{ paddingBottom: 80 }}>
        <Services />
      </section>
      <section className="work-section">
        <div className="section wrap">
          <Reveal>
            <SectionIntro
              eyebrow="HOW IT COMES TOGETHER"
              title={
                <>
                  A clear process.
                  <br />
                  Room for possibility.
                </>
              }
              description="No mystery. No unnecessary complexity. Just a thoughtful path from where you are to where you want to be."
            />
          </Reveal>
          <div className="process">
            {[
              [
                "01",
                "Discover the real opportunity",
                "We listen, ask questions, and map the challenge. Together, we define the audience, ambition, and what a successful experience should do.",
              ],
              [
                "02",
                "Find the right direction",
                "We explore concepts and establish a visual and strategic direction. Early ideas become tangible, so feedback can shape the work.",
              ],
              [
                "03",
                "Build with intention",
                "We turn the direction into a responsive, accessible experience. Design and development stay connected through every iteration.",
              ],
              [
                "04",
                "Refine every last detail",
                "We review real journeys, test different screen sizes, and polish the moments that make the experience feel complete.",
              ],
            ].map(([n, title, text]) => (
              <Reveal key={n}>
                <div className="process-row">
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <SectionIntro
          eyebrow="BUILT AROUND YOUR AMBITION"
          title={
            <>
              A fresh start.
              <br />
              Or your next evolution.
            </>
          }
          description="Whether you’re shaping a new identity, improving a digital journey, or building a product from scratch, the starting point is a good conversation."
        />
      </section>
      <CTA />
    </>
  );
}
