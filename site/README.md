# Example Business

A futuristic digital studio showcase built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Includes Home, About, Services, Work, Contact, three concept studies, and a custom 404 page.

## Run locally

```powershell
cd site
npm install
npm run dev
```

Open http://localhost:3000. In PowerShell, use `npm.cmd run dev -- --port 3010` to choose another port.

## Validate

```powershell
npm run lint
npm run build
```

`npm run build` exports all pages and assets into `site/out/`. Serve this directory with a static host for production; `next start` does not serve static exports. Avoid building while a development server uses the same build directory.

## Hosting

ChatGPT Sites hosts this export. The repository-root `.openai/hosting.json` records the Sites project and declares `out` as its static directory. The root build script builds this app and copies `site/out` into root `out/` for hosting. The root lint script forwards to this app. The three concept routes are exported at build time; unknown concepts resolve to the static 404 page.

## Features

- Shared sticky header, active navigation, mobile menu with Escape support, and footer.
- Original CSS orbital artwork, animated accents, responsive concept artwork, and scroll reveals that respect reduced motion.
- Keyboard focus styles, a skip link, labeled form fields, and an accessible submission status.
- Project category filtering and dedicated concept study routes.
- Per-page metadata and a custom violet icon.

## Demo behavior

The business, partner wordmarks, and project concepts are illustrative. The enquiry form validates required fields locally and explicitly confirms that nothing was sent. It has no backend, delivery service, analytics, or persistent form storage. All project visuals are CSS artwork. Google Geist fonts are fetched by Next.js during build.
