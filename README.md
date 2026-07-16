# Portfolio

Personal portfolio and freelance services site — built with Next.js (App
Router), TypeScript and Tailwind CSS.

Sections: Header, Hero, Services, Projects, About, Contact.

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)

## Running locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Pages
auto-update as you edit files under `app/` and `components/`.

Other useful scripts:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # run ESLint
```

## Project structure

```
app/
  layout.tsx      # root layout, fonts, SEO metadata
  page.tsx         # assembles the page sections
  globals.css      # Tailwind entry point + theme tokens
components/
  Header.tsx
  Hero.tsx
  Services.tsx
  Projects.tsx
  About.tsx
  Contact.tsx
  Footer.tsx
```

## Content to customize

- `components/Contact.tsx` — update the `EMAIL` and `LINKEDIN_URL`
  constants with your real contact details.
- `components/Projects.tsx` — replace the placeholder project entries with
  real links/descriptions as they become available.
- `app/layout.tsx` — update the `siteUrl` constant once a production
  domain is set, and adjust the SEO metadata if needed.

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the
   repository.
3. Vercel auto-detects the Next.js framework — no configuration is
   required. Click **Deploy**.
4. Every push to the main branch triggers a new deployment automatically.

No environment variables, database, or backend services are required —
this is a fully static informational site.
