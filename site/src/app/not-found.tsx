import Link from "next/link";
import { Arrow } from "@/components/site";
export default function NotFound() {
  return (
    <section className="not-found wrap">
      <p className="eyebrow purple">404 / A SMALL DETOUR</p>
      <h1>
        Let’s get you
        <br />
        back in orbit.
      </h1>
      <p>We couldn’t find that page. Your next good idea is still ahead.</p>
      <Link href="/" className="button primary">
        Back to home <Arrow />
      </Link>
    </section>
  );
}
