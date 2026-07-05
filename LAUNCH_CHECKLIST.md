# 🚀 Sparken Technologies — Launch Checklist & To-Do List

This is your single source of truth for going live. Items are grouped by
**who** does them and **when**. Check them off as you go.

Legend: 🔴 blocker (site not truly live without it) · 🟡 do soon · 🟢 nice to have
"✅ done by dev" = already built into the code.

---

## PART 1 — Things only YOU can do (external accounts)

### 🔴 Domain (Vercel)
- [ ] Vercel → your project → **Settings → Domains → Add** `sparkentechnologies.com` and `www.sparkentechnologies.com`.
- [ ] At your domain registrar, add the DNS records Vercel shows you
      (usually an `A` record `76.76.21.21` for the apex, and a `CNAME`
      `cname.vercel-dns.com` for `www`).
- [ ] Wait for "Valid Configuration" — Vercel issues the SSL certificate automatically.
- [ ] Set the primary domain to `www.sparkentechnologies.com` (matches our canonical URLs).

### 🔴 Email — already have the mailboxes ✅, now connect them to the forms
- [ ] Follow **GOOGLE_SHEETS_SETUP.md** → create the sheet + Apps Script + deploy.
- [ ] Add `NEXT_PUBLIC_SHEETS_WEBHOOK` in Vercel env vars → redeploy.
- [ ] Send a test through each form (contact, careers, newsletter) and confirm
      you get the emails at sales@ / careers@ / hello@.

### 🔴 Form spam protection
- [ ] Follow **SECURITY_TURNSTILE.md** → create Turnstile site → add
      `NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY` in Vercel.
      (Forms work without it — honeypot + time-trap are already active — but this is stronger.)

### 🔴 LinkedIn Company Page
- [ ] Create a **LinkedIn Company Page** for "Sparken Technologies" (free; made from
      your personal account — it does NOT conflict with your TatvaSoft employment,
      which stays on your personal profile).
- [ ] Copy the page URL → send it to me (or edit `lib/data.ts` → `site.social.linkedin`).
      Right now it points to a placeholder `/company/sparken-technologies`.

### 🟡 Schedule-a-call
- [ ] Create a free **Calendly** account → get your booking link.
- [ ] Send it to me — I'll wire the "Schedule a call" buttons straight to it.
      (For now they open the contact form pre-set to "Schedule a call".)

### 🟡 Search engines
- [ ] **Google Search Console** → add `sparkentechnologies.com` (DNS TXT verify)
      → submit `https://www.sparkentechnologies.com/sitemap.xml`.
- [ ] **Bing Webmaster Tools** → import from Google Search Console (1 click).
- [ ] Create a **Google Business Profile** (Ahmedabad) — helps "software company Ahmedabad" searches.

### 🟢 Directories (biggest lead source for IT firms)
- [ ] Create profiles on **Clutch**, **GoodFirms**, **DesignRush**.

### 🟢 Content / assets
- [ ] Generate images from **IMAGE_PROMPTS.txt** in Gemini → send them to me to wire in.
- [ ] Replace testimonial *quotes* with real client words (attribution is already generic/safe).
- [ ] Add real team photos later if you want (see "Photos" note below).

---

## PART 2 — Already done by dev ✅ (no action needed)

- ✅ Rebrand to Sparken Technologies (domain, email, schema, OG image, favicon)
- ✅ Real numbers: 100+ projects, 25+ team, 20+ clients, 6+ industries, 5+ countries
- ✅ Removed fabricated client logos and named clients; testimonials now region-based
- ✅ Freelance-since-2019 → incorporated-2026 story in hero, About, and milestones
- ✅ Team: you (Founder & Principal Architect · Architecture · Cloud · AI),
      Smit Desai (Head of Design), Mihir Pithva (Lead Full-Stack Engineer)
- ✅ Map removed from contact; now just "Based in Ahmedabad, India"
- ✅ Contact form: "How can we help?" dropdown routes inquiry type
- ✅ Separate careers apply form (resume LINK) → Applications tab + careers@ email
- ✅ Newsletter box now actually saves subscribers to the sheet
- ✅ Twitter + GitHub removed from footer (LinkedIn only)
- ✅ Spam protection: honeypot + time-trap (Turnstile ready to switch on)
- ✅ "Schedule a call" section on contact
- ✅ Smaller-projects section (static sites, frontend-only, backend-only, bug fixes…)
- ✅ Mega-menu navbar, scroll progress bar, hover animations, highlight sweeps
- ✅ Department emails surfaced (sales@ new business, support@ existing clients)

---

## PART 3 — Still pending in development (I'll do these when you're ready)

- [ ] **Real resume file upload** (currently a link paste). True upload needs a paid
      service like Formspree/Uploadcare — tell me if you want it.
- [ ] **Wire Calendly** once you send the link.
- [ ] **Wire real LinkedIn URL** once the page exists.
- [ ] **Blog**: 6 posts are placeholder content — real posts drive SEO. Send topics
      and I'll draft them.
- [ ] **Individual LinkedIn links** for you/Smit/Mihir on the team cards (send URLs).
- [ ] **Testimonial quotes** — swap in real ones when you have them.

---

## PART 4 — How to handle different types of clients (#17)

You asked how to deal with clients who come with a fixed cost vs. a project idea.
The contact form's **"How can we help?"** dropdown already sorts them for you.
Here's what each one means and how to respond:

**1. "Fixed-scope project (I have defined requirements)"**
   They know what they want and expect a **quote + timeline**.
   → Reply with a short discovery question or two, then a written estimate and
     milestone plan. Bill as a fixed-price project.

**2. "Ongoing / dedicated team"**
   They want continuous help, not a one-off.
   → Offer a monthly dedicated developer or team (your Hire Developers page).
     Bill monthly. Best long-term revenue.

**3. "Hire a specific developer"**
   They want to augment their own team.
   → Point them at the Hire Developers models (hourly / monthly). Share profiles.

**4. "Small task (landing page, bug fix, API)"**
   Quick, low-budget work.
   → Give a fast flat quote. Great for building reviews and referrals early on.

**5. "Schedule a call"** / **"Not sure yet — need advice"**
   They want to talk before committing.
   → Book a 30-min call, understand the need, then steer them into one of the above.

**Golden rule for a new company:** say yes to small work early — each finished
project is a review, a referral, and a testimonial you can actually use.

---

## PART 5 — Photos & professionalism (my honest take)

Professionalism does NOT require photos. What hurts trust is *inconsistent* or
*stock-looking* photos. Options, best to worst:
1. **Initials avatars** (current) — clean, consistent, honest. Totally professional. ✅
2. **Real photos of all 3 of you**, same style/background, good lighting — upgrade
   only if you can get all three matching. Send them and I'll wire them in
   (the team cards are already photo-ready).
3. ❌ Mixed quality / one stock photo / AI faces — skip entirely.

My recommendation: stay on initials for launch; add real matching photos later.
EOF
echo "LAUNCH_CHECKLIST.md created"