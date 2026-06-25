// ─── Hire Developers — engagement models, roles, process, FAQs ───────────────
// Indicative "from" rates are illustrative starting points; real quotes depend
// on seniority, stack and engagement length. See INFO_NEEDED.md.

export const hiringModels = [
  {
    name: "Hourly",
    icon: "gauge",
    tagline: "Pay only for the hours you use",
    bestFor: "Short-term tasks, urgent fixes, experiments, and changing scope",
    billing: "Billed per hour",
    commitment: "No minimum commitment",
    points: [
      "Spin a developer up for days, not months",
      "Ideal for bug fixes, audits, and feature spikes",
      "Weekly timesheets with full visibility",
    ],
  },
  {
    name: "Monthly Dedicated",
    icon: "bot",
    tagline: "A full-time engineer, exclusively yours",
    bestFor: "Long-term product development and steady, ongoing work",
    billing: "Fixed monthly fee",
    commitment: "From 1 month · discounts for 6–12 months",
    points: [
      "160 hours/month focused only on your product",
      "Builds deep context in your codebase and domain",
      "Predictable budgeting with no hidden costs",
    ],
    featured: true,
  },
  {
    name: "Team Extension",
    icon: "scale",
    tagline: "Scale your in-house team on demand",
    bestFor: "Adding vetted specialists under your own direction",
    billing: "Per-developer monthly fee",
    commitment: "Flexible — scale up or down monthly",
    points: [
      "Engineers work inside your process and tools",
      "You manage day-to-day; we handle HR and retention",
      "Grow or shrink the pod as priorities change",
    ],
  },
];

export const hireRoles = [
  {
    role: "Backend Developers",
    icon: "database",
    from: "$22/hr",
    stack: ["Java / Spring Boot", "Node.js", ".NET", "Python", "Microservices"],
  },
  {
    role: "Frontend Developers",
    icon: "code",
    from: "$20/hr",
    stack: ["React", "Next.js", "Angular", "Vue", "TypeScript"],
  },
  {
    role: "Full-Stack Developers",
    icon: "layers",
    from: "$24/hr",
    stack: ["MERN", "MEAN", "Java + React", "Next.js + Node"],
  },
  {
    role: "Mobile Developers",
    icon: "phone",
    from: "$22/hr",
    stack: ["React Native", "Flutter", "iOS / Swift", "Android / Kotlin"],
  },
  {
    role: "AI / ML Engineers",
    icon: "bot",
    from: "$30/hr",
    stack: ["LLMs & RAG", "Computer Vision", "Data Science", "MLOps"],
  },
  {
    role: "DevOps & Cloud",
    icon: "refresh",
    from: "$26/hr",
    stack: ["AWS", "Azure", "Kubernetes", "CI/CD", "Terraform"],
  },
  {
    role: "QA & Automation",
    icon: "search",
    from: "$18/hr",
    stack: ["Manual QA", "Selenium", "Cypress", "Playwright", "API testing"],
  },
  {
    role: "UI / UX Designers",
    icon: "target",
    from: "$20/hr",
    stack: ["Product Design", "Design Systems", "Figma", "Prototyping"],
  },
];

export const hireProcess = [
  {
    step: "01",
    title: "Share your requirements",
    desc: "Tell us the role, tech stack, seniority, and timeline. A 30-minute call is usually enough to scope the right profile.",
  },
  {
    step: "02",
    title: "Get matched in 48 hours",
    desc: "We hand-pick pre-vetted engineers from our bench and send you profiles — no trawling through job boards.",
  },
  {
    step: "03",
    title: "Interview & validate",
    desc: "Run your own technical interview or a short paid trial task. You approve every person before they join.",
  },
  {
    step: "04",
    title: "Start risk-free",
    desc: "Onboard in days with a 2-week no-risk trial. If it isn't a fit, you don't pay for the trial and we re-match.",
  },
  {
    step: "05",
    title: "Scale up or down",
    desc: "Add or release developers on monthly cycles as your roadmap changes. No long lock-ins, no rehiring overhead.",
  },
];

export const whyHire = [
  { icon: "check", title: "Pre-vetted senior talent", desc: "Every engineer clears a structured technical assessment before reaching your shortlist." },
  { icon: "bot", title: "Employees, not freelancers", desc: "Full-time DotLabs engineers with no divided focus and a team behind them." },
  { icon: "gauge", title: "48-hour shortlists", desc: "Profiles in two days and onboarding in days — not the weeks in-house hiring takes." },
  { icon: "refresh", title: "Replacement guarantee", desc: "If a developer leaves or isn't working out, we replace them within 48 hours with full knowledge transfer." },
  { icon: "lock", title: "Your IP, your control", desc: "You own all code and IP. An NDA is signed on every engagement, and you direct the day-to-day work." },
  { icon: "scale", title: "Transparent pricing", desc: "Clear monthly or hourly rates that include tooling, infrastructure, and management — no surprise invoices." },
];

export const whatsIncluded = [
  "Developer compensation & benefits",
  "Infrastructure, licences & tooling",
  "Project management & delivery support",
  "HR, payroll & local administration",
  "Overlap hours for daily collaboration",
  "Knowledge-transfer & replacement cover",
];

export const hireFaqs = [
  {
    q: "Are these freelancers or full-time employees?",
    a: "Full-time DotLabs engineers. They work exclusively on your project for the duration of the engagement, with the accountability and continuity that freelancers can't offer.",
  },
  {
    q: "What's the minimum engagement?",
    a: "Hourly hiring has no minimum. Monthly dedicated engagements typically start at one month, with lower rates for 6- and 12-month commitments.",
  },
  {
    q: "How fast can a developer start?",
    a: "We share matched profiles within 48 hours of understanding your needs, and approved developers usually onboard within a few days.",
  },
  {
    q: "Is there a trial period?",
    a: "Yes — a 2-week no-risk trial. If the developer isn't the right fit, you don't pay for the trial and we re-match at no cost.",
  },
  {
    q: "What if a developer leaves or underperforms?",
    a: "We provide a replacement within 48 hours, including a structured handover of sprint items, architecture, and open decisions so momentum isn't lost.",
  },
  {
    q: "Who manages the developers day to day?",
    a: "With Hourly and Team Extension you direct the work inside your own process. With Monthly Dedicated you can manage them directly or let our delivery lead run the engagement — your call.",
  },
  {
    q: "How do you handle time zones?",
    a: "We agree fixed overlap hours up front so there's real-time collaboration during your working day, backed by clear written updates and standups.",
  },
  {
    q: "Who owns the code and IP?",
    a: "You do — completely. All intellectual property is assigned to you, and every engagement is covered by an NDA.",
  },
];
