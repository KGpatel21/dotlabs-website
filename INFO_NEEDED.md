# INFO_NEEDED — What to Replace Before Going Live

This site is **fully built and deployable**, but a number of values are **placeholders** written to make DotLabs read like an established 50+ person firm. Nothing below blocks the site from running — but you should replace these before pointing a real domain at it or sharing it with clients.

Everything is organized by priority. **Almost all of it lives in one file: [`lib/data.ts`](lib/data.ts).** Search for the word `PLACEHOLDER` in that file to jump straight to the editable values.

---

## 🔴 PRIORITY 1 — Legal / contact / factual (fix before any public launch)

These appear in the footer, contact page, SEO metadata, and structured data (Google reads them). Wrong values here look unprofessional or could mislead clients.

| What | Current placeholder | Where | Notes |
|------|--------------------|-------|-------|
| **Domain / URL** | `https://www.dotlabs.dev` | `lib/data.ts` → `site.url` | Drives canonical URLs, sitemap, OG tags. Must be your real domain. |
| **Email** | `hello@dotlabs.dev` | `site.email` | Shown in footer + contact page + schema. |
| **Phone** | `+91 98765 43210` | `site.phone` | Footer + contact. Use a real reachable number or remove. |
| **WhatsApp** | `wa.me/919876543210` | `site.whatsapp` | Same number as phone, in `wa.me` link format. |
| **Office address** | `DotLabs HQ, Ahmedabad, Gujarat, India` | `site.address` | Vague on purpose. Add real street address or keep city-level if you prefer. |
| **Social links** | `/dotlabs` handles on LinkedIn, Twitter/X, GitHub, Instagram | `site.social` | All four are guesses. Replace with real profiles or delete the ones you don't have (footer renders whatever's present). |

> ⚠️ **Honesty note:** The company is positioned as founded in **2014** with **50+ engineers**. That's the fictional framing you asked for. Just be aware these specific numbers show up publicly (see Priority 2) — if a real client asks, the site is making concrete claims.

---

## 🟠 PRIORITY 2 — Headline numbers (fabricated stats)

You explicitly asked to present the company at scale. These are the invented figures doing that. They're internally consistent (e.g. "founded 2014" ≈ "11+ years"), so if you change one, sweep the others.

**Main stat counters** (`lib/data.ts` → `stats`), shown on the homepage + About page:
- `50+` expert engineers
- `153+` happy clients
- `300+` projects delivered
- `98%` client satisfaction
- `12+` industries served

**Secondary proof points** (`lib/data.ts` → `proofPoints`), shown on Services/Portfolio strips:
- `11+` years building software
- `20+` countries served
- `80%` clients who return for a 2nd project
- `4+ hrs` daily timezone overlap
- `100%` source code & IP ownership
- `< 48 hrs` from enquiry to written proposal

Also referenced in body copy on the About page (`app/about/page.tsx`) and various section subtitles — if you change the headline numbers, grep the repo for `50+`, `153+`, `300+`, `12+` to catch the prose mentions too.

---

## 🟠 PRIORITY 3 — People, clients & testimonials (invented)

These present real-looking humans and companies. **This is the most sensitive placeholder category** — fake testimonials attributed to named people/companies can be a real problem if a visitor recognizes them. Replace with real ones, or soften to anonymized/representative before launch.

- **Team** (`lib/data.ts` → `team`): 12 people. Includes founder **"Krutarth Patel"** (you) plus **11 invented colleagues** with names, roles, and bios. Replace with real team members, or trim the array to just the people who actually exist.
- **Testimonials** (`lib/data.ts` → `testimonials`): 6 quotes attributed to invented clients with names, titles, and companies. **Do not keep these live as-is.** Replace with real quotes (with permission) or remove the section.
- **Clients / logos** (`lib/data.ts` → `clients`): 12 invented company names rendered in the logo marquee. Swap for real client names/logos or remove.
- **Portfolio / case studies** (`lib/data.ts` → `portfolio`): 6 case studies. These are **loosely based on your real projects** (banking middleware, trading bot, SaaS, etc.) but written as DotLabs company work with invented metrics. Verify every number and claim, and confirm you're allowed to reference each client/project publicly.

---

## 🟡 PRIORITY 4 — Brand assets (generic placeholders)

- **Logo** — `public/logo.png` is a generic placeholder. Replace with your real logo (keep the same filename/path, or update references in `components/Logo.tsx`).
- **Open Graph / social share image** — `public/og.png` is generic. This is what shows when the site is shared on LinkedIn/Twitter/WhatsApp. Replace with a branded 1200×630 image.
- **Favicon** — check `app/` for icon files; update to your brand mark.

---

## 🟡 PRIORITY 5 — Functional wiring (works visually, not connected yet)

These render and behave correctly in the browser, but **aren't connected to a backend** — so no data actually goes anywhere yet.

- **Contact form** (`components/ContactSection.tsx`): captures input and shows a success state, but does **not** send anywhere. There's a marked comment (`// TODO: wire to API/CRM`) showing where to POST. Hook it to an email service (Resend, SendGrid), a form backend (Formspree, Web3Forms), or your CRM.
- **Newsletter signup** (`components/Footer.tsx`): the "Subscribe" button is `type="button"` and not wired. Connect to your email list provider (Mailchimp, ConvertKit, Buttondown) or remove if unused.
- **Blog content** (`lib/data.ts` → `posts`): all 6 posts now have **full written bodies** and render at `/blog/[slug]`. They're genuine, useful articles but generic to a software firm — review/personalize the voice, and add real posts over time. (Layout, SEO, Article schema, and breadcrumbs are all already wired.)

---

## 🟢 PRIORITY 6 — Content review (optional polish)

- **Tagline**: currently *"Transforming Ideas Into Scalable Digital Solutions"* (`site.tagline`). Generic-but-safe; swap if you have something sharper.
- **Service descriptions** (`lib/data.ts` → `services`, 12 entries): detailed and professional, but written generically. Tune to emphasize the work you most want to sell (you mentioned AI, Java, automation, AI agents).
- **Milestones** (`lib/data.ts` → `milestones`): the 2014→Today timeline years are illustrative. Adjust to match whatever founding story you settle on.
- **FAQs** (`lib/data.ts` → `faqs`, 22 entries): review answers for anything you'd phrase differently; they feed FAQ schema too.

---

## Quick-start checklist

```
[ ] Replace all Priority 1 contact/legal values in lib/data.ts
[ ] Decide on final headline numbers (Priority 2) and sweep prose mentions
[ ] Replace or remove invented team/testimonials/clients (Priority 3) ← most important for credibility
[ ] Verify every portfolio case study is real & cleared for public use
[ ] Drop in real logo.png + og.png (Priority 4)
[ ] Wire the contact form + newsletter to a real backend (Priority 5)
[ ] Review blog/service/FAQ copy for voice (Priority 6)
[ ] Re-run `npm run build` to confirm everything still compiles
```

**Tip:** the fastest way to find everything is a single search across the repo for `PLACEHOLDER` (all the critical config values are tagged) and a second search for `TODO` (functional wiring points).

---

## Hire Developers page (added) — placeholders to confirm

- **Indicative hourly rates** in `lib/hire.ts` (e.g. "from $22/hr") are illustrative starting points. Replace with your real published rates, or keep as "from" anchors and rely on "request a quote."
- **Claims to verify before publishing**: "profiles in 48 hours", "2-week no-risk trial", "replacement within 48 hours", "160 hours/month". These are standard industry promises — make sure you can actually honour them.
- **WhatsApp / phone** used in CTAs (`wa.me/919876543210`, etc.) are still placeholders (see contact section).
- Engagement-model names/terms can be tuned to how you actually sell (e.g. rename "Team Extension" → "Staff Augmentation" if preferred).
