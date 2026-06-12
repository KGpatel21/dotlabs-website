# DotLabs — Company Website

Enterprise-grade marketing website built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages statically pre-rendered)
npm start
```

Deploy to Vercel in one click, or any Node host with `npm run build && npm start`.

## Pages

| Route | Purpose |
|---|---|
| `/` | Homepage — hero, trust bar, services, industries, why-us, process, portfolio, tech, team, testimonials, FAQ, blog, CTA, contact |
| `/about` | Story, values, stats, full team |
| `/services` | All 12 service cards + process + tech + FAQ |
| `/industries` | 10 industry cards + case studies |
| `/portfolio` | 6 full case studies (problem / solution / tech / impact) |
| `/technologies` | Full stack by category |
| `/blog`, `/blog/[slug]` | SEO blog layout with Article schema (6 starter posts) |
| `/careers` | Open roles + culture |
| `/contact` | Form, email, phone, WhatsApp, Google Maps |

## SEO already wired in

- Per-page `title`, `description`, `keywords`, canonical URLs
- Open Graph + Twitter Card tags with a branded `/og.png`
- JSON-LD: **Organization + ProfessionalService + LocalBusiness** (root layout), **FAQPage** (home), **BreadcrumbList** (every inner page), **Article** (each blog post)
- `sitemap.xml` and `robots.txt` auto-generated (`app/sitemap.ts`, `app/robots.ts`)
- Semantic HTML, single `h1` per page, proper heading hierarchy
- Static pre-rendering for every route → fast TTFB, crawler-friendly
- `prefers-reduced-motion` respected; visible keyboard focus on CTAs

## Customize in one place

All content lives in **`lib/data.ts`** — company info, stats, services, industries,
portfolio case studies, team, testimonials, 22 FAQs, blog posts, client names.
Edit that file and every section/page updates.

Brand tokens (colors, fonts, shadows, gradients) live in **`tailwind.config.ts`**
and `app/globals.css`.

## Before launch checklist

1. Set your real domain in `lib/data.ts` → `site.url` (drives canonicals, sitemap, schema).
2. Replace phone/email/WhatsApp/address in `lib/data.ts`.
3. Wire the contact form: add an API route or service (Resend, Formspree, your CRM) in
   `components/ContactSection.tsx` where marked.
4. Replace placeholder team names/testimonials with your real ones.
5. Verify the site in Google Search Console and submit `/sitemap.xml`.
6. Swap `public/og.png` / `public/logo.png` with final brand assets if desired.

## Design system

- **Display:** Space Grotesk · **Body:** Inter · **Labels/data:** JetBrains Mono
- **Palette:** Ink `#070C1A`, Paper `#F6F8FB`, Cobalt `#2E5BFF` → Cyan `#2DD4FF` gradient
- **Signature:** the DotLabs "dot" — pulsing dot eyebrows, dot-grid backgrounds,
  an animated dot-constellation hero canvas, and dot-node process timeline.
