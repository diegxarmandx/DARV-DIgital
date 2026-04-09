# DARV Digital Website

Modern multi-page agency website built with:

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Run Locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Pages

- `/` Home
- `/services`
- `/portfolio`
- `/pricing`
- `/about`
- `/contact`

## Fast Content Edits

Most business content is centralized in:

- `lib/site-data.ts`

Update here for:

- Services
- Portfolio projects
- Pricing packages
- FAQs
- Contact details

## Brand / Styling Edits

- Core tokens and colors: `tailwind.config.ts`
- Global backgrounds and motion: `app/globals.css`
- Typography setup: `app/layout.tsx`

## Key Reusable Components

- `components/layout/navbar.tsx`
- `components/layout/footer.tsx`
- `components/ui/button.tsx`
- `components/ui/section-header.tsx`
- `components/ui/faq-accordion.tsx`
- `components/forms/contact-form.tsx`

## SEO

- Shared metadata helper: `lib/seo.ts`
- Per-page metadata in each route file
- Sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`
