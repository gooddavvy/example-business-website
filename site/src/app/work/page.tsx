import type { Metadata } from "next";
import { CTA, PageHero, WorkGallery } from "@/components/site";
export const metadata: Metadata = { title: "Selected Work" };
export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="A COLLECTION OF POSSIBILITIES"
        title={
          <>
            A little unexpected.
            <br />
            <span className="purple">Entirely intentional.</span>
          </>
        }
        description="Explore a collection of original brand and product concepts. Different challenges. One shared commitment to a better digital experience."
      />
      <WorkGallery />
      <CTA />
    </>
  );
}
