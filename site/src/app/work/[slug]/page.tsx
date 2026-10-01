import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Arrow,
  CTA,
  PageHero,
  ProjectCard,
  Reveal,
  SectionIntro,
} from "@/components/site";

const concepts = {
  orbit: {
    title: "Orbit",
    category: "FINTECH / PRODUCT DESIGN",
    description: "A clearer perspective on personal finance.",
    headline: "Your money. In motion.",
    challenge:
      "Financial tools can overwhelm people with numbers and competing priorities. This concept asks how a product could make the next useful step feel clear and approachable.",
    approach:
      "A calm palette, a focused balance overview, and a simple visual rhythm keep the experience centered on understanding. Violet accents guide attention to the moments that matter.",
    details: [
      "A focused financial overview",
      "A consistent visual system",
      "Clear, approachable product language",
    ],
  },
  forma: {
    title: "Forma",
    category: "LIFESTYLE / DIGITAL EXPERIENCE",
    description: "Space for a more considered way of living.",
    headline: "Less noise. More meaning.",
    challenge:
      "For a considered lifestyle brand, a busy digital experience can undermine the product itself. The challenge is to make space for texture, form, and a slower kind of discovery.",
    approach:
      "Warm neutrals, sculptural forms, and deliberate spacing bring the brand’s point of view to life. The direction uses restrained typography and tactile shapes to create a quiet, memorable identity.",
    details: [
      "An editorial brand direction",
      "A tactile visual language",
      "A deliberate content hierarchy",
    ],
  },
  pulse: {
    title: "Pulse",
    category: "WELLNESS / DIGITAL PRODUCT",
    description: "A little momentum. A healthier everyday.",
    headline: "Move with meaning.",
    challenge:
      "Wellness experiences often ask people to change everything at once. This concept explores a gentler starting point: small actions that feel achievable and worth returning to.",
    approach:
      "Fresh greens, rounded forms, and encouraging language create an optimistic visual direction. The design puts everyday progress ahead of pressure and lets one useful action lead the experience.",
    details: [
      "An encouraging product identity",
      "A clear path to the next action",
      "An optimistic, flexible design system",
    ],
  },
};
type Slug = keyof typeof concepts;
function getConcept(slug: string) {
  return Object.hasOwn(concepts, slug) ? concepts[slug as Slug] : undefined;
}
export function generateStaticParams() {
  return Object.keys(concepts).map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const concept = getConcept(slug);
  return {
    title: concept ? `${concept.title} — Concept` : "Concept not found",
  };
}
export default async function ConceptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) notFound();
  return (
    <>
      <PageHero
        eyebrow={`${concept.category} / CONCEPT STUDY`}
        title={
          <>
            {concept.title}.<br />
            <span className="purple">{concept.headline}</span>
          </>
        }
        description={concept.description}
      />
      <section className="wrap concept-feature">
        <ProjectCard kind={slug} {...concept} previewOnly />
        <p className="demo-note">
          An original visual concept. This is not a live application,
          commissioned project, or claim of client outcomes.
        </p>
      </section>
      <section className="section wrap about-story">
        <Reveal>
          <SectionIntro
            eyebrow="THE CHALLENGE"
            title={<>A better starting point.</>}
          />
        </Reveal>
        <Reveal>
          <p>{concept.challenge}</p>
        </Reveal>
      </section>
      <section className="work-section">
        <div className="section wrap about-story">
          <Reveal>
            <SectionIntro
              eyebrow="THE DESIGN DIRECTION"
              title={<>Thoughtfully connected.</>}
            />
          </Reveal>
          <Reveal>
            <p>{concept.approach}</p>
            <div className="principles">
              {concept.details.map((detail, i) => (
                <div key={detail}>
                  <strong>0{i + 1}</strong>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <div className="section wrap">
        <Link href="/work" className="text-link">
          Explore all concepts <Arrow />
        </Link>
      </div>
      <CTA />
    </>
  );
}
