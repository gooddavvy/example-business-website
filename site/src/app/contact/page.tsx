import type { Metadata } from "next";
import { ContactForm, PageHero } from "@/components/site";
export const metadata: Metadata = { title: "Let’s Talk" };
export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="EVERY GREAT THING STARTS SOMEWHERE"
        title={
          <>
            Big idea?
            <br />
            <span className="purple">We’re all ears.</span>
          </>
        }
        description="A fresh perspective, a new possibility, or something you haven’t quite put into words yet. Start exploring it here."
      />
      <section className="contact-layout wrap">
        <aside className="contact-aside">
          <p className="eyebrow">LET’S IMAGINE WHAT’S NEXT</p>
          <h3>No perfect brief required.</h3>
          <p>
            The best conversations start with an idea and a little curiosity.
            Try this demo to see how an enquiry experience could feel.
          </p>
          <ul>
            <li>Share your ambition</li>
            <li>Choose a starting point</li>
            <li>Try the demo experience</li>
          </ul>
          <p>
            This is a showcase website for an illustrative business. No enquiry
            is delivered and no response will be sent.
          </p>
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
