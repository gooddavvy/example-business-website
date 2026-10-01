import type { Metadata } from "next";
import { CTA, Orb, PageHero, Reveal, SectionIntro } from "@/components/site";
export const metadata: Metadata = { title: "About" };
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="A LITTLE ABOUT US"
        title={
          <>
            Curiosity is our compass.
            <br />
            <span className="purple">Craft is our signature.</span>
          </>
        }
        description="Example Business is a demonstration of a simple belief: ambitious ideas deserve thoughtful design and exceptional execution."
      />
      <div className="wrap about-banner">
        <Orb />
        <span className="banner-copy">
          A DIFFERENT PERSPECTIVE CHANGES EVERYTHING.
        </span>
      </div>
      <section className="section wrap about-story">
        <Reveal>
          <SectionIntro
            eyebrow="OUR MINDSET"
            title={
              <>
                The possibility
                <br />
                in every what-if.
              </>
            }
          />
        </Reveal>
        <Reveal>
          <p>
            What if a website felt as good as it worked? What if the smallest
            interaction could make someone’s day easier? What if we made the
            complicated feel simple?
          </p>
          <p>
            Those are the questions that drive this studio concept. We bring
            strategy, design, and development into one conversation, so the end
            result feels considered from every angle.
          </p>
          <p>
            This site is a working showcase of that approach. The business,
            brands, and projects are illustrative; the attention to detail is
            real.
          </p>
        </Reveal>
      </section>
      <section className="work-section">
        <div className="section wrap">
          <Reveal>
            <SectionIntro
              eyebrow="WHAT WE STAND FOR"
              title={
                <>
                  Great work starts
                  <br />
                  with good principles.
                </>
              }
            />
          </Reveal>
          <div className="values-grid">
            {[
              [
                "01",
                "Stay curious.",
                "Ask why. Then ask what if. Better questions open doors to better ideas.",
              ],
              [
                "02",
                "Make it matter.",
                "Every choice should serve a purpose. Beautiful design is even better when it’s useful.",
              ],
              [
                "03",
                "Care for the details.",
                "From the first impression to the last interaction, the small things make the whole experience.",
              ],
            ].map(([n, title, text]) => (
              <Reveal key={n}>
                <p className="eyebrow">{n} / OUR PRINCIPLES</p>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <div className="section wrap">
        <SectionIntro
          eyebrow="ONE CONNECTED APPROACH"
          title={
            <>
              Different disciplines.
              <br />
              Shared ambition.
            </>
          }
          description="We think like strategists, see like designers, and build like engineers. It’s how an interesting idea becomes a coherent experience."
        />
      </div>
      <CTA />
    </>
  );
}
