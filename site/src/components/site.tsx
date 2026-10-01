"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function Logo() {
  return (
    <>
      <span className="logo-symbol" aria-hidden="true">
        ✳
      </span>
      <span>
        example<span className="logo-sub">BUSINESS</span>
      </span>
    </>
  );
}
const nav = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/work", "Work"],
];
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="header">
      <div className="wrap header-inner">
        <Link
          className="logo"
          href="/"
          aria-label="Example Business home"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href="/contact">
          Let’s talk <Arrow diagonal />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            "✕"
          ) : (
            <>
              <span />
              <span />
            </>
          )}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {[...nav, ["/contact", "Let’s talk"]].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
              <Arrow />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer wrap">
      <div className="footer-main">
        <div>
          <Link href="/" className="logo" aria-label="Example Business home">
            <Logo />
          </Link>
          <p>
            Thoughtfully designed.
            <br />
            Exceptionally built.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <span>EXPLORE</span>
            {nav.map(([href, label]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
          <div>
            <span>MAKE A CONNECTION</span>
            <Link href="/contact">
              Start a conversation <Arrow diagonal />
            </Link>
            <p>Good ideas start here.</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Example Business</span>
        <span>A showcase of what’s possible. This is a demo website.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (
      !element ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    element.classList.add("will-reveal");
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
export function Orb() {
  return (
    <div className="orb-scene" aria-hidden="true">
      <div className="scene-grid" />
      <div className="orbit-track track-one" />
      <div className="orbit-track track-two" />
      <div className="orbit-track track-three" />
      <div className="orb">
        <div className="orb-core" />
        <div className="orb-lines" />
      </div>
      <span className="satellite satellite-one" />
      <span className="satellite satellite-two" />
      <span className="cross cross-one">+</span>
      <span className="cross cross-two">+</span>
      <span className="scene-coordinate">
        35.6895° N<br />
        139.6917° E
      </span>
    </div>
  );
}
export function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="section-intro">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
const services = [
  {
    number: "01",
    icon: "◈",
    title: "Strategy & direction",
    text: "A clear vision. A confident next step. We connect your ambition with a plan that makes sense.",
    tags: "Discovery · Positioning · Roadmaps",
  },
  {
    number: "02",
    icon: "✳",
    title: "Brand & experience",
    text: "Distinctive identities and intuitive interfaces. Designed to feel right, and impossible to forget.",
    tags: "Identity · UX / UI · Design systems",
  },
  {
    number: "03",
    icon: "⌘",
    title: "Digital development",
    text: "Beautiful on the outside. Thoughtful underneath. Fast, accessible products built to go further.",
    tags: "Websites · Applications · Integrations",
  },
];
export function Services() {
  return (
    <div className="service-grid">
      {services.map((service) => (
        <Reveal key={service.number}>
          <Link className="service-card" href="/services">
            <div className="service-card-top">
              <span className="service-icon">{service.icon}</span>
              <span>{service.number}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <div className="service-card-bottom">
              <span>{service.tags}</span>
              <Arrow diagonal />
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
export function ProjectCard({
  kind,
  title,
  category,
  description,
  previewOnly = false,
}: {
  kind: string;
  title: string;
  category: string;
  description: string;
  previewOnly?: boolean;
}) {
  const content = (
    <>
      <div className={`project-art ${kind}`} aria-hidden="true">
        <span className="project-art-label">
          {title.toLowerCase()}
          <span>®</span>
        </span>
        {kind === "orbit" ? (
          <div className="finance-ui">
            <div className="finance-top">
              Your money. In motion. <span>↗</span>
            </div>
            <span className="finance-label">TOTAL BALANCE</span>
            <strong>
              $24,680<span>.00</span>
            </strong>
            <div className="finance-chart">
              {[24, 38, 30, 49, 42, 66, 56, 72, 63, 83, 76, 96].map(
                (height, i) => (
                  <i key={i} style={{ height: `${height}%` }} />
                ),
              )}
            </div>
            <div className="finance-bottom">
              <span>↗ A clearer financial future</span>
              <span>+12.8%</span>
            </div>
          </div>
        ) : kind === "forma" ? (
          <div className="forma-sculpture">
            <div />
            <div />
            <div />
            <span>
              Objects for
              <br />a life well lived.
            </span>
          </div>
        ) : (
          <div className="pulse-art">
            <span />
            <span />
            <span />
            <strong>
              Move with
              <br />
              meaning.
            </strong>
          </div>
        )}
        {!previewOnly && (
          <span className="project-open">
            <Arrow diagonal />
          </span>
        )}
      </div>
      <div className="project-meta">
        <div>
          <p className="eyebrow">{category}</p>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <Arrow diagonal />
      </div>
    </>
  );
  return (
    <Reveal>
      {previewOnly ? (
        <div
          className="project-card"
          role="img"
          aria-label={`${title} visual concept: ${description}`}
        >
          {content}
        </div>
      ) : (
        <Link href={`/work/${kind}`} className="project-card">
          {content}
        </Link>
      )}
    </Reveal>
  );
}
export function CTA() {
  return (
    <section className="cta-section wrap">
      <Reveal>
        <div className="cta-inner">
          <div>
            <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
            <h2>
              Let’s make
              <br />
              <span>something matter.</span>
            </h2>
          </div>
          <Link className="button light" href="/contact">
            Tell us your idea <Arrow diagonal />
          </Link>
          <span className="cta-star" aria-hidden="true">
            ✳
          </span>
        </div>
      </Reveal>
    </section>
  );
}
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <section className="page-hero wrap">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-description">{description}</p>
    </section>
  );
}
export function WorkGallery() {
  const [filter, setFilter] = useState("All concepts");
  const projects = [
    {
      kind: "orbit",
      title: "Orbit",
      category: "FINTECH / PRODUCT DESIGN",
      description: "A clearer perspective on personal finance.",
      filter: "Digital products",
    },
    {
      kind: "forma",
      title: "Forma",
      category: "LIFESTYLE / DIGITAL EXPERIENCE",
      description: "Space for a more considered way of living.",
      filter: "Brand experiences",
    },
    {
      kind: "pulse",
      title: "Pulse",
      category: "WELLNESS / DIGITAL PRODUCT",
      description: "A little momentum. A healthier everyday.",
      filter: "Digital products",
    },
  ];
  return (
    <section className="wrap gallery">
      <div className="filter-row" aria-label="Filter project concepts">
        {["All concepts", "Digital products", "Brand experiences"].map(
          (label) => (
            <button
              key={label}
              aria-pressed={label === filter}
              onClick={() => setFilter(label)}
            >
              {label}
            </button>
          ),
        )}
      </div>
      <div className="project-grid">
        {projects
          .filter((p) => filter === "All concepts" || p.filter === filter)
          .map((p) => (
            <div id={p.kind} key={p.kind} className="project-anchor">
              <ProjectCard {...p} />
            </div>
          ))}
      </div>
      <p className="demo-note">
        These are illustrative design concepts, not commissioned client work or
        live products.
      </p>
    </section>
  );
}
const subscribeToHydration = () => () => {};
const getHydratedSnapshot = () => true;
const getServerSnapshot = () => false;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    getHydratedSnapshot,
    getServerSnapshot,
  );
  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="form-heading">
        <h2>Tell us a little about it.</h2>
        <p>
          This is a demo form. Your details stay in this page and are never sent
          or saved by this site.
        </p>
      </div>
      <div className="form-row">
        <label>
          Your name
          <input
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Alex Taylor"
          />
        </label>
        <label>
          Email address
          <input
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="alex@example.com"
          />
        </label>
      </div>
      <label>
        What do you have in mind?
        <select required defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          <option>Strategy & direction</option>
          <option>Brand & experience</option>
          <option>Digital development</option>
          <option>A bit of everything</option>
        </select>
      </label>
      <label>
        A little about your idea
        <textarea
          required
          maxLength={3000}
          rows={5}
          placeholder="The ambition, the challenge, the big what-if…"
        />
      </label>
      <button type="submit" className="button primary" disabled={!hydrated}>
        Try the demo enquiry <Arrow diagonal />
      </button>
      <noscript>
        <p className="demo-note">
          Enable JavaScript to try this local demo. Nothing can be submitted
          from this form.
        </p>
      </noscript>
      <div
        role="status"
        aria-live="polite"
        className={submitted ? "form-success" : ""}
      >
        {submitted && (
          <>
            <strong>Demo complete. Nothing was sent.</strong>
            <p>
              This is a fake enquiry form. Your message hasn’t been sent to
              anyone, and this website hasn’t saved your details.
            </p>
          </>
        )}
      </div>
    </form>
  );
}
