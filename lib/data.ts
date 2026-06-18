// ───────────────────────────────────────────────────────────────────────────
// Central content for the DotLabs site. Edit values here and every page updates.
// Items flagged in INFO_NEEDED.md are placeholders to replace before launch.
// ───────────────────────────────────────────────────────────────────────────

export const site = {
  name: "DotLabs",
  tagline: "Transforming Ideas Into Scalable Digital Solutions",
  url: "https://www.dotlabs.dev", // PLACEHOLDER — set real domain
  email: "hello@dotlabs.dev", // PLACEHOLDER
  phone: "+91 98765 43210", // PLACEHOLDER
  whatsapp: "https://wa.me/919876543210", // PLACEHOLDER
  address: "DotLabs HQ, Ahmedabad, Gujarat, India", // PLACEHOLDER
  founded: 2014, // PLACEHOLDER — used in "years in business" copy
  social: {
    linkedin: "https://www.linkedin.com/company/dotlabs", // PLACEHOLDER
    twitter: "https://twitter.com/dotlabs", // PLACEHOLDER
    github: "https://github.com/dotlabs", // PLACEHOLDER
    instagram: "https://instagram.com/dotlabs", // PLACEHOLDER
  },
};

export const stats = [
  { value: 50, suffix: "+", label: "Expert engineers" },
  { value: 153, suffix: "+", label: "Happy clients" },
  { value: 300, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 12, suffix: "+", label: "Industries served" },
];

// Secondary proof points used across deep pages
export const proofPoints = [
  { value: "11+", label: "Years building software" },
  { value: "20+", label: "Countries served" },
  { value: "80%", label: "Clients who return for a 2nd project" },
  { value: "4+ hrs", label: "Daily timezone overlap" },
  { value: "100%", label: "Source code & IP ownership" },
  { value: "< 48 hrs", label: "From enquiry to written proposal" },
];

export const trustBadges = [
  "ISO 27001-aligned security",
  "NDA on every engagement",
  "Agile, sprint-based delivery",
  "24/7 global support",
];

// ─── Services ────────────────────────────────────────────────────────────────
export const services = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    icon: "code",
    blurb:
      "Purpose-built software engineered around your workflows — not the other way around. From discovery to deployment, we own the full lifecycle.",
    benefits: ["Full-cycle delivery", "Scalable architecture", "Source code ownership"],
    detail:
      "Off-the-shelf tools force your business to bend around their assumptions. We build software that models how your business actually works — and that you fully own. Every engagement starts with a discovery phase that maps your goals, users, and constraints before a line of code is written, so what we ship solves the real problem, integrates cleanly with your existing systems, and is documented well enough for any team to maintain after us.",
    includes: [
      "Discovery, requirements analysis, and a fixed, milestone-based estimate",
      "System architecture designed for scale, security, and maintainability",
      "Full-stack engineering with code review on every merge",
      "Automated testing, CI/CD, and zero-downtime deployment",
      "Complete source code, IP ownership, and handover documentation",
      "SLA-backed support and a roadmap for what comes next",
    ],
    idealFor: "Companies whose processes are too specific for packaged software, or who need to replace brittle spreadsheets and legacy tools with one coherent system.",
  },
  {
    slug: "web-development",
    title: "Web Development",
    icon: "globe",
    blurb:
      "High-performance web platforms built with React, Next.js, and modern backend stacks — fast, accessible, and built to rank.",
    benefits: ["Core Web Vitals 95+", "SEO-first architecture", "Pixel-perfect UI"],
    detail:
      "We build web applications and corporate platforms that load fast, rank well, and feel effortless on every device. Server-side rendering and a SEO-first architecture mean your pages are crawlable and quick out of the box; a component-driven front end keeps the experience pixel-perfect from a 320px phone to a 4K display. From marketing sites to complex dashboards and customer portals, we engineer for Core Web Vitals, accessibility, and conversion.",
    includes: [
      "Responsive, accessible UI across mobile, tablet, and desktop",
      "Server-side rendering / static generation for speed and SEO",
      "Headless CMS integration so your team can edit content",
      "Analytics, structured data, and Core Web Vitals optimization",
      "Secure REST / GraphQL APIs and third-party integrations",
    ],
    idealFor: "Businesses that need a fast, search-friendly web presence or a web app that has to stay responsive and reliable as traffic grows.",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: "smartphone",
    blurb:
      "Native and cross-platform apps for iOS and Android with the polish users expect and the reliability businesses demand.",
    benefits: ["iOS & Android", "Offline-first design", "App Store launch support"],
    detail:
      "We design and ship mobile apps that feel native, work offline, and survive real-world conditions — flaky networks, low-end devices, and demanding app-store review. Whether it's a single cross-platform codebase for speed to market or fully native builds for performance-critical features, we handle the full journey from prototype through store submission and post-launch iteration.",
    includes: [
      "Native (iOS / Android) or cross-platform (React Native / Flutter) builds",
      "Offline-first data sync and push notifications",
      "Secure authentication, payments, and device-feature integration",
      "App Store and Google Play submission and release management",
      "Crash reporting, analytics, and ongoing version support",
    ],
    idealFor: "Companies launching a new mobile product, or extending an existing platform with a polished, reliable app users keep on their home screen.",
  },
  {
    slug: "saas-development",
    title: "SaaS Product Development",
    icon: "layers",
    blurb:
      "From MVP to multi-tenant scale: subscription billing, role-based access, analytics, and infrastructure that grows with revenue.",
    benefits: ["Multi-tenant architecture", "Billing & subscriptions", "MVP in 8–12 weeks"],
    detail:
      "We help founders go from idea to a SaaS product paying for itself — without over-building. A focused MVP ships in 8–12 weeks with the foundations that matter: multi-tenant architecture, subscription billing, role-based access, and the analytics you need to learn from real users. As you grow, the same architecture scales to thousands of tenants without a rewrite. We've shipped SaaS platforms processing millions of events a month at 99.9%+ uptime.",
    includes: [
      "Lean MVP scoping that protects your runway",
      "Multi-tenant architecture with tenant isolation and RBAC",
      "Subscription billing, usage metering, and tiered plans",
      "Admin dashboards, product analytics, and audit logging",
      "Scalable cloud infrastructure with CI/CD and observability",
    ],
    idealFor: "Founders validating a SaaS idea on a budget, and growing products that need to scale past their first architecture.",
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions & AI Agents",
    icon: "sparkles",
    blurb:
      "LLM-powered copilots, autonomous agents, and RAG systems that plug into your data and remove hours of manual work every day.",
    benefits: ["Custom AI agents", "RAG over your data", "OpenAI & LangChain"],
    detail:
      "We build practical AI that earns its place in your business — not demos. That means autonomous agents that reason and act across your workflows, retrieval-augmented (RAG) systems grounded in your private data so answers are accurate and current, and AI features embedded directly into your existing software. Every system ships with guardrails, evaluation, and security built in, and we'll tell you honestly where AI helps and where it doesn't.",
    includes: [
      "AI strategy: identifying where AI delivers real ROI (and where it won't)",
      "Custom AI agents that automate multi-step workflows",
      "RAG pipelines over your documents, databases, and tools",
      "LLM features embedded into your existing apps and products",
      "Guardrails, evaluation harnesses, and human-in-the-loop controls",
      "Secure deployment — your data stays in your environment",
    ],
    idealFor: "Teams losing hours to repetitive knowledge work, or products that need an AI capability customers can actually trust.",
  },
  {
    slug: "enterprise-software",
    title: "Enterprise, ERP & CRM",
    icon: "building",
    blurb:
      "Mission-critical enterprise systems, ERP modules, and CRM platforms with the security, auditability, and uptime large teams require.",
    benefits: ["Role-based security", "Legacy modernization", "System integration"],
    detail:
      "Enterprise software has to satisfy procurement, security, and the people who use it every day. We build ERP modules, CRM platforms, and internal systems with role-based access, audit logging, and high availability — and we integrate them with the tools you already run rather than forcing a rip-and-replace. When a full rebuild isn't justified, we extend and modernize what you have, incrementally, so the business keeps running underneath.",
    includes: [
      "Custom ERP / CRM modules tailored to your processes",
      "Role-based access control and detailed audit trails",
      "Integration with existing ERPs, CRMs, and third-party systems",
      "Incremental legacy modernization with no big-bang cutover",
      "High-availability architecture and documented SLAs",
    ],
    idealFor: "Established organizations that need software to pass procurement review, integrate with legacy systems, and scale across teams.",
  },
  {
    slug: "fintech-solutions",
    title: "FinTech Solutions",
    icon: "banknote",
    blurb:
      "Banking middleware, payments, lending, and trading platforms built with compliance-grade security and audit trails from day one.",
    benefits: ["PCI-aware engineering", "Core banking integrations", "Real-time processing"],
    detail:
      "FinTech is where a bug is a compliance incident, not an inconvenience. Our team cut its teeth building banking middleware for regulated markets, and that discipline shapes everything: idempotent transactions, end-to-end audit trails, encryption, and integrations with core banking, identity, and reporting systems. We build payments, lending, trading, and middleware platforms that pass audit on first submission.",
    includes: [
      "Core banking, payment gateway, and identity integrations",
      "Idempotent, auditable transaction processing",
      "PCI-aware engineering and encryption at rest and in transit",
      "Real-time data pipelines and regulatory reporting",
      "Security reviews and compliance-ready documentation",
    ],
    idealFor: "Banks, lenders, trading desks, and FinTech startups that need compliance-grade engineering and integrations done right the first time.",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    icon: "cloud",
    blurb:
      "AWS, Azure, and GCP architecture with CI/CD, containerization, and observability — ship faster with infrastructure that never blocks you.",
    benefits: ["Kubernetes & Docker", "CI/CD pipelines", "Cost-optimized cloud"],
    detail:
      "Infrastructure should accelerate your team, not block it. We design cloud architecture on AWS, Azure, and GCP with automated CI/CD, containerization, and observability so releases are routine and rollbacks are one click. We also right-size what you're already running — most cloud bills have meaningful savings hiding in over-provisioned resources.",
    includes: [
      "Cloud architecture and infrastructure-as-code (Terraform)",
      "CI/CD pipelines with automated testing and safe rollouts",
      "Containerization and orchestration (Docker, Kubernetes)",
      "Monitoring, logging, and alerting for real observability",
      "Cloud cost optimization and security hardening",
    ],
    idealFor: "Teams whose deployments are slow or fragile, and businesses that want lower cloud bills without sacrificing reliability.",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Product Design",
    icon: "pen",
    blurb:
      "Research-driven product design that converts: design systems, prototypes, and interfaces users genuinely enjoy using.",
    benefits: ["Design systems", "Conversion-focused UX", "Rapid prototyping"],
    detail:
      "Good design is how software earns adoption. We start with research — who the users are and what they're trying to do — then move through wireframes and high-fidelity prototypes that are validated before engineering begins. The result is interfaces that convert, design systems that keep your product consistent as it grows, and far fewer expensive changes late in development.",
    includes: [
      "UX research, user flows, and information architecture",
      "Wireframes and interactive, testable prototypes",
      "High-fidelity UI design and a reusable design system",
      "Accessibility (WCAG) and conversion-focused refinement",
      "Design-to-development handoff your engineers can build from",
    ],
    idealFor: "Products that need to feel effortless and convert, and teams that want a design system to scale consistently.",
  },
  {
    slug: "dedicated-teams",
    title: "Dedicated Teams & Staff Augmentation",
    icon: "users",
    blurb:
      "Vetted senior engineers who integrate with your team in days, not months — with transparent reporting and flexible scaling.",
    benefits: ["Onboard in 1–2 weeks", "Your tools, your process", "Scale up or down monthly"],
    detail:
      "When you need engineering capacity fast, we place vetted senior engineers directly into your team — working in your tools, your process, and your timezone overlap. You keep full control of priorities; we handle hiring, retention, and the management layer behind each engineer. Scale the team up or down monthly as your roadmap changes, with transparent reporting throughout.",
    includes: [
      "Pre-vetted senior engineers matched to your stack",
      "Onboarding in 1–2 weeks, working in your tools and process",
      "Flexible monthly scaling — grow or shrink as you need",
      "Transparent reporting and a single point of accountability",
      "Optional team lead / delivery manager layer",
    ],
    idealFor: "Companies that need to scale engineering quickly without months of recruitment, or specific expertise (AI, DevOps) on demand.",
  },
  {
    slug: "api-integration",
    title: "API Development & System Integration",
    icon: "plug",
    blurb:
      "Robust REST and event-driven APIs that connect your products, partners, and internal systems into one coherent platform.",
    benefits: ["REST & event-driven", "Third-party integrations", "Versioned & documented"],
    detail:
      "Most businesses run a dozen tools that don't talk to each other. We build the APIs and integrations that connect them — clean REST and event-driven services, third-party integrations (payments, CRMs, ERPs, logistics, data providers), and the middleware that ties internal systems together. Everything is versioned, documented, and built to fail gracefully.",
    includes: [
      "REST and event-driven (webhooks / queues) API design",
      "Third-party integrations: payments, CRM, ERP, logistics, data",
      "Middleware connecting internal and legacy systems",
      "Versioning, rate limiting, and developer documentation",
      "Monitoring and resilient error handling",
    ],
    idealFor: "Businesses with disconnected tools and data silos, or platforms that need to expose a reliable API to partners.",
  },
  {
    slug: "qa-testing",
    title: "Quality Assurance & Testing",
    icon: "shield-check",
    blurb:
      "Automated and manual QA woven into every sprint — so releases are boring, predictable, and bug-free where it matters.",
    benefits: ["Test automation", "Performance testing", "Security reviews"],
    detail:
      "Quality isn't a phase at the end — it's built into every sprint. Dedicated QA engineers write automated test suites that run in CI on every change, and run functional, regression, performance, and security testing before anything reaches production. The payoff is releases that are predictable and uneventful, even on complex systems.",
    includes: [
      "Test automation integrated into CI/CD",
      "Functional and regression testing every sprint",
      "Performance and load testing for scale",
      "Security reviews and vulnerability scanning",
      "Clear, reproducible defect reporting",
    ],
    idealFor: "Teams shipping critical software that can't afford regressions, and products preparing for a high-stakes launch or scale event.",
  },
];

// ─── AI capability spotlight ─────────────────────────────────────────────────
export const aiCapabilities = [
  {
    title: "Autonomous AI Agents",
    icon: "bot",
    desc: "Agents that reason across multiple steps and act inside your workflows — triaging support, reviewing code, processing documents, and handling back-office tasks end to end, with human-in-the-loop checkpoints where they matter.",
  },
  {
    title: "RAG Over Your Data",
    icon: "database",
    desc: "Retrieval-augmented systems grounded in your private documents, databases, and tools — so answers are accurate, current, and cite their sources, instead of hallucinating.",
  },
  {
    title: "Generative AI Features",
    icon: "sparkles",
    desc: "Drafting, summarization, classification, and content generation embedded directly into your product or internal apps, with prompts and guardrails tuned to your domain.",
  },
  {
    title: "Custom LLM Applications",
    icon: "code",
    desc: "Enterprise-grade applications built on large language models that securely handle your datasets — contracts, records, knowledge bases — for smarter search and decision support.",
  },
  {
    title: "AI Strategy & Consulting",
    icon: "target",
    desc: "An honest assessment of where AI delivers real ROI in your business and where it doesn't — with a roadmap, the right model choices, and a secure path to production.",
  },
  {
    title: "Secure, Integrated Deployment",
    icon: "lock",
    desc: "AI that integrates with your existing stack (including SAP, Oracle, and legacy systems) and keeps your data in your environment, with encryption, access controls, and evaluation built in.",
  },
];

// ─── Industries ──────────────────────────────────────────────────────────────
export const industries = [
  {
    name: "FinTech",
    desc: "Payments, lending, trading, and banking middleware with compliance built in.",
    icon: "banknote",
    long: "We build regulated financial software where audit trails, idempotency, and security aren't optional. From core-banking middleware to payment processing, lending platforms, and algorithmic trading systems, our FinTech work is engineered to pass audit on first submission.",
    build: ["Banking & core-system middleware", "Payment & wallet platforms", "Lending & underwriting systems", "Trading & risk dashboards"],
    note: "Compliance-aware engineering, encryption, and full audit trails from day one.",
  },
  {
    name: "Healthcare",
    desc: "Patient portals, telehealth, and clinical workflow systems with privacy by design.",
    icon: "heart-pulse",
    long: "Healthcare software has to be private, interoperable, and reliable. We build patient portals, telehealth apps, and clinical workflow tools with privacy designed in and standards-based integration to the systems hospitals already run.",
    build: ["Patient portals & telehealth apps", "Clinical & practice workflow systems", "Remote monitoring & wearable integration", "Healthcare data & analytics dashboards"],
    note: "Privacy-by-design with HL7 / FHIR-standard interoperability.",
  },
  {
    name: "Real Estate",
    desc: "Property platforms, RERA reporting tools, listing portals, and CRM for brokers.",
    icon: "home",
    long: "We build the platforms that move property deals: listing portals, broker CRMs, buyer-facing apps, and compliance reporting tools tuned to local regulation like RERA — understood better than vendors twice our size.",
    build: ["Listing & marketplace portals", "Broker & developer CRM", "RERA / compliance reporting tools", "Buyer-facing property apps"],
    note: "Local-regulation aware, including RERA reporting workflows.",
  },
  {
    name: "Education",
    desc: "LMS platforms, assessment engines, and student information systems.",
    icon: "graduation",
    long: "From learning platforms to assessment engines and student information systems, we build EdTech that scales to thousands of concurrent learners and keeps administrators, teachers, and students in sync.",
    build: ["Learning management systems (LMS)", "Online assessment & proctoring", "Student information systems", "Course marketplaces & cohort tools"],
    note: "Built to scale for high-concurrency exam and enrollment peaks.",
  },
  {
    name: "E-commerce",
    desc: "Storefronts, marketplaces, inventory, and order management at scale.",
    icon: "cart",
    long: "We build storefronts and marketplaces that convert and stay fast under load, with the inventory, order-management, and payment infrastructure to run a serious commerce operation.",
    build: ["Custom storefronts & marketplaces", "Inventory & order management", "Payment & checkout optimization", "Headless commerce integrations"],
    note: "Performance-tuned checkout and resilient order processing at scale.",
  },
  {
    name: "Logistics",
    desc: "Fleet tracking, route optimization, and warehouse management systems.",
    icon: "truck",
    long: "Logistics runs on real-time data. We build fleet tracking, route optimization, and warehouse management systems that give operations a live, accurate picture and cut waste out of the supply chain.",
    build: ["Fleet & shipment tracking", "Route & delivery optimization", "Warehouse management systems", "Supply-chain visibility dashboards"],
    note: "Real-time tracking with event-driven, low-latency updates.",
  },
  {
    name: "Manufacturing",
    desc: "Production planning, IoT dashboards, and ERP integrations for the shop floor.",
    icon: "factory",
    long: "We connect the shop floor to the back office with production planning tools, IoT dashboards, and ERP integrations that turn machine data into decisions and reduce downtime.",
    build: ["Production planning & MES tools", "IoT & equipment dashboards", "ERP / SCM integrations", "Asset & maintenance management"],
    note: "IIoT integration and ERP connectivity for the shop floor.",
  },
  {
    name: "Agriculture",
    desc: "AgriTech platforms for supply chain, crop analytics, and farmer marketplaces.",
    icon: "leaf",
    long: "We build AgriTech platforms that connect farmers to markets and turn field data into insight — supply-chain tools, crop analytics, and marketplaces that work even where connectivity is unreliable.",
    build: ["Farmer & produce marketplaces", "Crop & yield analytics", "AgriTech supply-chain tools", "Offline-first field apps"],
    note: "Offline-first design for low-connectivity rural conditions.",
  },
  {
    name: "Travel & Hospitality",
    desc: "Booking engines, channel managers, and guest experience apps.",
    icon: "plane",
    long: "We build booking engines, channel managers, and guest-experience apps that handle real-world travel complexity — availability, pricing, and integrations across providers — without breaking under demand.",
    build: ["Booking & reservation engines", "Channel managers & aggregators", "Guest experience & loyalty apps", "Travel provider integrations"],
    note: "Resilient availability and pricing integrations across providers.",
  },
  {
    name: "Pharma",
    desc: "Regulatory-aware systems for trials, distribution, and pharmacovigilance.",
    icon: "pill",
    long: "Pharma software lives under regulation. We build regulatory-aware systems for trials, distribution, and pharmacovigilance with the traceability and documentation that compliance demands.",
    build: ["Clinical trial & study management", "Distribution & cold-chain tracking", "Pharmacovigilance systems", "Regulatory reporting & audit tools"],
    note: "Traceability and documentation built for regulatory audit.",
  },
];

// ─── Why DotLabs ─────────────────────────────────────────────────────────────
export const whyUs = [
  { title: "Senior, accountable team", desc: "Every project is staffed with engineers who have shipped production systems — and a single point of contact who answers for outcomes." },
  { title: "Agile, visible delivery", desc: "Two-week sprints, demo every Friday, and a live project board you can open any time. No black boxes." },
  { title: "Transparent communication", desc: "Daily standups in your timezone overlap, written status reports, and honest estimates — including the bad news, early." },
  { title: "Enterprise-grade quality", desc: "Code review on every merge, automated test suites, and architecture documented well enough to survive any handover." },
  { title: "Security first", desc: "Least-privilege access, encrypted secrets, dependency scanning, and NDAs signed before the first call." },
  { title: "You own everything", desc: "Full source code and IP transfer to you on payment. No vendor lock-in, no per-seat licensing, no hostage situations." },
  { title: "Long-term partnership", desc: "We stay after launch: SLAs, monitoring, and a roadmap partner — 80% of our clients return for a second project." },
  { title: "Cost-effective, not cheap", desc: "Offshore economics with onshore standards. You pay for senior output, not bench time or bloated teams." },
];

// ─── How we work ─────────────────────────────────────────────────────────────
export const process = [
  { step: "Discovery", desc: "We map your goals, users, and constraints into a clear problem statement and success metrics — before a line of code.", duration: "Week 1" },
  { step: "Planning", desc: "Scope, architecture, milestones, and a transparent estimate — signed off before development begins.", duration: "Week 2" },
  { step: "Design", desc: "Wireframes to high-fidelity prototypes, validated with real user flows before development.", duration: "Weeks 2–4" },
  { step: "Development", desc: "Sprint-based engineering with weekly demos, code review, and CI/CD from the first commit.", duration: "Weeks 4–12" },
  { step: "Testing", desc: "Automated, manual, performance, and security testing — release candidates, not surprises.", duration: "Continuous" },
  { step: "Deployment", desc: "Zero-downtime releases with rollback plans, monitoring, and launch support.", duration: "Launch week" },
  { step: "Support", desc: "SLA-backed maintenance, observability, and a roadmap for what comes next.", duration: "Ongoing" },
];

// ─── Engagement models ───────────────────────────────────────────────────────
export const engagementModels = [
  {
    name: "Fixed-Price Project",
    icon: "target",
    tagline: "Defined scope, fixed budget, predictable delivery.",
    bestFor: "Well-defined projects where you want budget certainty and a clear deliverable.",
    includes: ["Fixed milestone-based pricing", "Defined scope and timeline", "Dedicated project lead", "Demo at every milestone"],
  },
  {
    name: "Dedicated Team",
    icon: "users",
    tagline: "Your own engineering team, managed by us.",
    bestFor: "Evolving products and long-term roadmaps that need consistent, scalable capacity.",
    includes: ["Hand-picked senior engineers", "Works as an extension of your team", "Scale up or down monthly", "Optional delivery manager"],
  },
  {
    name: "Staff Augmentation",
    icon: "scale",
    tagline: "Specific skills, plugged into your team, fast.",
    bestFor: "Teams that need extra senior capacity or niche expertise (AI, DevOps) on demand.",
    includes: ["Pre-vetted specialists", "Onboard in 1–2 weeks", "Your tools and process", "Flexible monthly terms"],
  },
];

// ─── Portfolio / case studies ────────────────────────────────────────────────
export const portfolio = [
  {
    title: "Neo Banking Middleware",
    industry: "FinTech · KSA",
    problem: "A Saudi digital bank needed compliant middleware connecting core banking with national credit and identity services.",
    solution: "We built a Spring Boot microservices layer with Keycloak-secured APIs integrating SIMAH, Nafith, IBAN validation, and SAMA reporting.",
    tech: ["Java 21", "Spring Boot", "Keycloak", "PostgreSQL", "AWS"],
    impact: "Cut customer onboarding from 2 days to under 9 minutes and passed regulatory audit on first submission.",
  },
  {
    title: "Cold Outreach SaaS Platform",
    industry: "SaaS · Global",
    problem: "A sales-tech startup needed an email outreach platform to compete with established players — on a startup budget.",
    solution: "Multi-tenant SaaS with campaign sequencing, inbox rotation, deliverability tooling, and usage-based billing on a three-tier model.",
    tech: ["Next.js", "TypeScript", "Spring Boot 3", "Redis", "Hetzner"],
    impact: "Launched in 14 weeks; processing 1M+ emails/month within the first quarter at 99.95% uptime.",
  },
  {
    title: "Airport Flight Information System",
    industry: "Aviation · Japan",
    problem: "A logistics leader needed real-time flight information displays synchronized across terminals with zero tolerance for stale data.",
    solution: "Event-driven backend with sub-second propagation, failover display controllers, and an operations dashboard for staff.",
    tech: ["Java", "Spring Boot", "WebSockets", "MySQL", "Docker"],
    impact: "99.99% display uptime across terminals and a 40% drop in passenger information desk queries.",
  },
  {
    title: "Algorithmic Trading Dashboard",
    industry: "Capital Markets · India",
    problem: "A proprietary trading desk needed automated execution with strict risk controls across NIFTY, BANKNIFTY, and SENSEX.",
    solution: "Broker-integrated bot with SL/TP automation, Bollinger-band strategies, partial profit booking, and a real-time React dashboard.",
    tech: ["Python", "React", "AWS Lightsail", "Dhan API", "Netlify"],
    impact: "Reduced manual order handling to zero and enforced 100% of risk rules automatically across every session.",
  },
  {
    title: "AI Code Review Agent",
    industry: "DevTools · Global",
    problem: "Engineering teams were losing senior hours to repetitive pull-request review and inconsistent standards.",
    solution: "An LLM-powered agent that reviews diffs against team conventions, flags security issues, and drafts fix suggestions inline.",
    tech: ["OpenAI", "LangChain", "Node.js", "GitHub API", "RAG"],
    impact: "Cut median review turnaround by 60% and caught 3x more convention violations than manual review alone.",
  },
  {
    title: "Multi-Vertical Corporate Platform",
    industry: "Conglomerate · India",
    problem: "A diversified group spanning petroleum, exports, real estate, and education needed one credible digital presence.",
    solution: "An enterprise corporate platform with vertical-specific sections, investor-grade design language, and a headless CMS.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    impact: "Unified seven business verticals under one brand and doubled inbound partnership inquiries in 90 days.",
  },
];

// ─── Technology stack (used by homepage chips) ───────────────────────────────
export const techStack: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "Angular", "Vue", "TypeScript", "Tailwind CSS"],
  Backend: ["Java", "Spring Boot", "Node.js", ".NET", "Python", "Microservices"],
  Database: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
  Cloud: ["AWS", "Azure", "Google Cloud", "Vercel", "Hetzner"],
  DevOps: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"],
  "AI & Data": ["OpenAI", "LangChain", "AI Agents", "RAG Systems", "Vector DBs"],
};

// ─── Technology categories with rationale (used by /technologies) ────────────
export const techCategories = [
  {
    group: "Frontend",
    icon: "globe",
    why: "We standardize on React and Next.js for their massive talent pools and long-term support — your product never becomes a hiring problem. Server rendering keeps things fast and search-friendly.",
    items: ["React", "Next.js", "Angular", "Vue", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "Backend",
    icon: "code",
    why: "Java and Spring Boot anchor our backend work for regulated, high-reliability systems; Node.js and .NET cover the rest. We design around clean service boundaries so systems stay maintainable as they grow.",
    items: ["Java", "Spring Boot", "Node.js", ".NET", "Python", "Microservices"],
  },
  {
    group: "Database",
    icon: "database",
    why: "We pick the right store for the job — relational for integrity, document for flexibility, in-memory for speed, search for discovery — rather than forcing one database to do everything.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    group: "Cloud",
    icon: "cloud",
    why: "AWS, Azure, and GCP, deployed as infrastructure-as-code so environments are reproducible and auditable. We architect for scale and right-size for cost.",
    items: ["AWS", "Azure", "Google Cloud", "Vercel", "Hetzner"],
  },
  {
    group: "DevOps",
    icon: "refresh",
    why: "Automated CI/CD, containerization, and observability make releases routine and rollbacks one click — so shipping is boring and predictable, even on complex systems.",
    items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"],
  },
  {
    group: "AI & Data",
    icon: "sparkles",
    why: "We build on OpenAI and LangChain with RAG and vector databases to ground AI in your data — accurate, secure, and evaluated, not just impressive in a demo.",
    items: ["OpenAI", "LangChain", "AI Agents", "RAG Systems", "Vector DBs"],
  },
];

// ─── Architecture / engineering principles (used by /technologies) ───────────
export const techPrinciples = [
  { title: "Boring on purpose", icon: "shield-check", desc: "We choose proven technologies with ten-year futures and deep talent pools over whatever's trending — so your product is easy to hire for and cheap to maintain." },
  { title: "Built to scale, sized for now", icon: "gauge", desc: "Architecture that handles growth without over-engineering the first version. You don't pay for scale you don't have yet, and you don't hit a wall when you do." },
  { title: "Documented and testable", icon: "code", desc: "Code is read far more than it's written. Every system ships with automated tests and documentation good enough for any team to take over." },
  { title: "Secure by default", icon: "lock", desc: "Least-privilege access, encrypted secrets, dependency scanning, and security reviews are part of the build — not a bolt-on afterthought." },
];

// ─── Team ────────────────────────────────────────────────────────────────────
export const team = [
  { name: "Krutarth Patel", role: "Founder & Principal Engineer", area: "Architecture · FinTech · AI", initials: "KP" },
  { name: "Aarav Mehta", role: "Solutions Architect", area: "Microservices · Cloud", initials: "AM" },
  { name: "Priya Sharma", role: "Engineering Lead, Backend", area: "Java · Spring Boot", initials: "PS" },
  { name: "Rohan Desai", role: "Engineering Lead, Frontend", area: "React · Next.js", initials: "RD" },
  { name: "Sneha Iyer", role: "Head of Product Design", area: "UX Research · Design Systems", initials: "SI" },
  { name: "Vikram Joshi", role: "DevOps Lead", area: "Kubernetes · AWS", initials: "VJ" },
  { name: "Ananya Rao", role: "AI Engineering Lead", area: "LLMs · RAG · Agents", initials: "AR" },
  { name: "Kunal Shah", role: "QA Lead", area: "Automation · Performance", initials: "KS" },
  { name: "Meera Nair", role: "Senior Mobile Engineer", area: "iOS · Android · Flutter", initials: "MN" },
  { name: "Devansh Gupta", role: "Senior Backend Engineer", area: "Node.js · PostgreSQL", initials: "DG" },
  { name: "Ishita Verma", role: "Senior Product Designer", area: "UI · Prototyping", initials: "IV" },
  { name: "Arjun Pillai", role: "Data Engineer", area: "Pipelines · Analytics", initials: "AP" },
];

// ─── Company story & milestones (used by /about) ─────────────────────────────
export const aboutStory = [
  "DotLabs began with a small team building banking middleware for regulated markets — systems where a bug isn't an inconvenience, it's a compliance incident. That environment shaped everything about how we work: rigorous reviews, automated testing, and documentation that survives audits.",
  "Today we're 50+ engineers, designers, and architects serving 153+ clients across 12+ industries, from venture-backed SaaS startups to enterprise groups spanning multiple verticals. The fintech discipline never left — it just got applied to everything we build.",
  "We stay deliberately mid-sized. Large enough to staff full product teams with 24/7 support; small enough that the founder still reviews architecture on every major engagement. That's the balance our clients tell us they can't find elsewhere — the rigor of a big firm without the layers, and the responsiveness of a small one without the risk.",
];

export const aboutApproach = [
  { title: "We start with the problem, not the tech", icon: "search", desc: "Every engagement opens with discovery — your goals, users, and constraints — so we build the right thing before we build it right." },
  { title: "We behave like a partner, not a vendor", icon: "users", desc: "Honest estimates, early bad news, and proactive suggestions that save you money — even when it costs us the upsell." },
  { title: "We hand you the keys", icon: "lock", desc: "Full source code, IP, and documentation are yours. No lock-in, no hostage situations — just software you own outright." },
];

export const milestones = [
  { year: "2014", label: "Founded", desc: "Started as a small team building banking middleware for regulated markets." },
  { year: "2017", label: "Went global", desc: "First international clients across the Gulf, Europe, and Asia-Pacific." },
  { year: "2020", label: "Scaled delivery", desc: "Grew to multi-team delivery with dedicated QA, DevOps, and design practices." },
  { year: "2023", label: "AI practice launched", desc: "Stood up a dedicated AI team building agents, RAG systems, and LLM applications." },
  { year: "Today", label: "50+ and growing", desc: "300+ projects delivered across 12+ industries, with 80% of clients returning." },
];

// ─── Testimonials ────────────────────────────────────────────────────────────
export const testimonials = [
  {
    quote: "DotLabs rebuilt our core platform without a single day of downtime. Their engineers think like owners — they pushed back on requirements when it saved us money.",
    name: "Faisal Al-Rashid",
    role: "CTO",
    company: "Gulf Digital Bank",
    rating: 5,
  },
  {
    quote: "We interviewed five agencies. DotLabs was the only one that asked about our unit economics before quoting. Fourteen weeks later we had a SaaS product paying for itself.",
    name: "Emily Carter",
    role: "Co-founder",
    company: "OutreachIQ",
    rating: 5,
  },
  {
    quote: "Their dedicated team integrated with ours so seamlessly that our investors assumed we'd hired in-house. Communication is their superpower.",
    name: "Hiroshi Tanaka",
    role: "VP Engineering",
    company: "Kansai Logistics Systems",
    rating: 5,
  },
  {
    quote: "The AI agent DotLabs built reviews every pull request before a human sees it. Our senior engineers got roughly a day a week back. ROI was obvious within a month.",
    name: "Sarah Mitchell",
    role: "Director of Engineering",
    company: "Forge DevTools",
    rating: 5,
  },
  {
    quote: "From RERA compliance reporting to the buyer-facing portal, they understood Indian real estate better than vendors twice their size.",
    name: "Rajesh Agarwal",
    role: "Managing Director",
    company: "Skyline Estates Group",
    rating: 5,
  },
  {
    quote: "Honest estimates, weekly demos, and zero surprises at invoice time. DotLabs is the first vendor we've renewed three years running.",
    name: "Laura Hoffmann",
    role: "Head of Digital",
    company: "MedCare Europe",
    rating: 5,
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const faqs = [
  { q: "What does a software development company like DotLabs actually do?", a: "DotLabs designs, builds, and maintains custom software — web platforms, mobile apps, SaaS products, AI solutions, and enterprise systems. We handle everything from discovery and UI/UX design through development, QA, deployment, and long-term support." },
  { q: "How much does custom software development cost?", a: "Most DotLabs projects range from $10,000 for a focused MVP to $150,000+ for enterprise platforms. After a free discovery call we provide a fixed, milestone-based estimate so you know the full cost before development begins." },
  { q: "How long does it take to build a custom software product?", a: "A typical MVP ships in 8–12 weeks. Larger enterprise or SaaS platforms run 4–9 months. We work in two-week sprints with weekly demos, so you see working software from the first month." },
  { q: "Why should I hire a software development company instead of freelancers?", a: "A company gives you a full team — architects, developers, designers, QA, and DevOps — plus continuity, code review, documented processes, and accountability under contract. With freelancers, a single departure can stall your entire product." },
  { q: "What is a dedicated development team and when do I need one?", a: "A dedicated development team is a group of vetted engineers who work exclusively on your product under your direction, with DotLabs handling hiring, payroll, and retention. It suits companies that need to scale engineering fast without months of recruitment." },
  { q: "Does DotLabs offer staff augmentation services?", a: "Yes. We place senior React, Next.js, Java, Spring Boot, Node.js, and AI engineers directly into your existing team, usually within one to two weeks, on flexible monthly terms." },
  { q: "Which industries does DotLabs serve?", a: "We've delivered software across 12+ industries including FinTech, healthcare, real estate, e-commerce, logistics, education, manufacturing, agriculture, travel, and pharma — each with its own compliance and workflow requirements." },
  { q: "Can DotLabs build AI agents and LLM-powered applications?", a: "Yes. We build custom AI agents, RAG systems over your private data, AI copilots, and workflow automation using OpenAI, LangChain, and modern vector databases — with guardrails and evaluation built in." },
  { q: "What is SaaS development and can DotLabs build a SaaS product?", a: "SaaS development means building subscription software delivered over the web — multi-tenant architecture, billing, roles, and analytics. DotLabs has shipped SaaS platforms end to end, including email outreach and automation products processing millions of events monthly." },
  { q: "Which technologies does DotLabs specialize in?", a: "Our core stack is React, Next.js, and TypeScript on the frontend; Java, Spring Boot, Node.js, and .NET on the backend; PostgreSQL, MySQL, and MongoDB for data; AWS, Azure, and GCP for cloud; and Docker plus Kubernetes for DevOps." },
  { q: "Is DotLabs a good choice for enterprise software development?", a: "Yes. We build enterprise systems with role-based security, audit logging, high availability, and integration with existing ERPs and CRMs — backed by documentation and SLAs that pass procurement review." },
  { q: "Does DotLabs provide ERP and CRM development?", a: "We build custom ERP modules and CRM platforms tailored to your processes, and we also extend or integrate existing systems when a full rebuild isn't justified." },
  { q: "How does DotLabs ensure software quality?", a: "Every merge passes peer code review and automated tests in CI. Dedicated QA engineers run functional, regression, performance, and security testing before any release reaches production." },
  { q: "How does DotLabs keep my data and intellectual property secure?", a: "We sign NDAs before discovery, enforce least-privilege access, encrypt secrets, scan dependencies, and transfer full IP and source code ownership to you on payment. Security practices align with ISO 27001 principles." },
  { q: "Can DotLabs work with my existing in-house development team?", a: "Absolutely. Many engagements are hybrid: your team owns the product vision while DotLabs supplies additional senior capacity, specific expertise like AI or DevOps, or an independent delivery stream." },
  { q: "Does DotLabs offer software outsourcing for companies outside India?", a: "Yes — our client base spans the US, Europe, the Gulf, and Asia-Pacific. We maintain 4+ hours of timezone overlap, communicate in fluent English, and run all coordination in your tools." },
  { q: "What does the software development process at DotLabs look like?", a: "Seven stages: discovery, planning, design, development, testing, deployment, and support. You get a named project lead, two-week sprints, Friday demos, and a live board showing exactly where every feature stands." },
  { q: "Does DotLabs provide post-launch support and maintenance?", a: "Yes. We offer SLA-backed maintenance plans covering monitoring, bug fixes, security patches, performance tuning, and feature roadmap work — with 24/7 coverage available for critical systems." },
  { q: "Can DotLabs modernize or rescue a legacy application?", a: "Yes. We audit the existing codebase, stabilize what's critical, and migrate incrementally to a modern stack — so the business keeps running while the platform improves underneath it." },
  { q: "How do I start a project with DotLabs?", a: "Book a free consultation through our contact form. Within 48 hours you'll get a discovery call with an engineer (not a salesperson), followed by a written proposal with scope, timeline, and a fixed estimate." },
  { q: "What engagement models does DotLabs offer?", a: "Three models: fixed-price for well-defined scopes, time-and-materials for evolving products, and dedicated teams for long-term capacity. We'll recommend the one that minimizes your risk." },
  { q: "Does DotLabs build mobile apps for both iOS and Android?", a: "Yes. We ship native and cross-platform apps, handle App Store and Play Store submission, and design offline-first experiences where connectivity is unreliable." },
];

// ─── Blog posts (full bodies render on /blog/[slug]) ─────────────────────────
export const posts = [
  {
    slug: "saas-mvp-in-12-weeks",
    title: "How to Ship a SaaS MVP in 12 Weeks Without Cutting Corners",
    excerpt: "The scoping framework we use to get founders from idea to paying users in one quarter — and the features we deliberately leave out.",
    date: "2026-05-18",
    category: "SaaS Development",
    readTime: "8 min read",
    body: [
      { heading: "The 12-week constraint is a feature, not a limitation", paras: [
        "A 12-week timeline forces the hardest and most valuable decision in product development: what not to build. Most MVPs fail not because they're missing features, but because they shipped too many — burning runway on functionality nobody asked for before learning whether the core idea works at all.",
        "When we scope a SaaS MVP, we start from the single workflow that delivers the product's core promise, and we protect that workflow ruthlessly. Everything else is a candidate for the cut list.",
      ]},
      { heading: "What goes in the first 12 weeks", paras: [
        "The non-negotiable foundations: multi-tenant architecture (retrofitting tenancy later is painful), authentication and role-based access, the one core workflow done well, subscription billing, and enough product analytics to learn from real usage.",
        "These are the things that are expensive to add later or that you need from day one to charge money and learn. Everything here earns its place.",
      ]},
      { heading: "What we deliberately leave out", paras: [
        "Admin panels you can replace with database queries for the first month. Granular permissions beyond the two or three roles you actually have. Integrations nobody has asked for yet. A settings page for preferences users haven't requested. Custom reporting before you know what people want to measure.",
        "None of this is gone forever — it's deferred until real users tell you it matters. That's the difference between cutting scope and cutting corners.",
      ]},
      { heading: "The result", paras: [
        "Founders who follow this framework reach paying users in a quarter with a codebase that scales rather than a prototype they have to throw away. The MVP isn't a smaller, worse version of the product — it's the same product with a smaller surface area, built on architecture that grows.",
      ]},
    ],
  },
  {
    slug: "ai-agents-for-business-automation",
    title: "AI Agents in Production: What Actually Works in 2026",
    excerpt: "Beyond the demos: how real companies use AI agents for code review, support triage, and back-office automation — with honest failure modes.",
    date: "2026-04-29",
    category: "AI Solutions",
    readTime: "11 min read",
    body: [
      { heading: "The gap between demo and production", paras: [
        "AI agent demos are dazzling and AI agents in production are humbling. The demo handles the happy path; production has to handle the edge cases, the ambiguous inputs, the moments where the agent should stop and ask a human. Closing that gap is most of the work.",
        "The companies getting real value from agents in 2026 aren't the ones with the flashiest demos — they're the ones who scoped agents to bounded, well-defined tasks and built the guardrails to make them safe.",
      ]},
      { heading: "Where agents are working", paras: [
        "Code review: agents that check pull requests against team conventions and flag security issues before a human looks, saving senior engineers hours a week. Support triage: agents that categorize, route, and draft responses to incoming tickets. Document processing: agents that extract, validate, and route information from invoices, contracts, and forms.",
        "The common thread: these are repetitive, high-volume tasks with clear success criteria and a human in the loop for anything uncertain.",
      ]},
      { heading: "The failure modes nobody mentions", paras: [
        "Agents are confidently wrong. Without retrieval grounding, they hallucinate; without evaluation, you don't notice until a customer does. They're also expensive to run at scale if you don't manage context and model selection, and they drift as your data and prompts change unless you monitor them.",
        "Every agent we ship comes with an evaluation harness, retrieval grounding over real data, and explicit human checkpoints. That's not optional infrastructure — it's what separates an agent that helps from one that quietly creates work.",
      ]},
      { heading: "How to start", paras: [
        "Pick one painful, repetitive task with a clear definition of done. Ground the agent in your real data with RAG. Keep a human in the loop. Measure before and after. Expand only once the first agent is earning its keep. Boring discipline beats ambitious scope every time.",
      ]},
    ],
  },
  {
    slug: "choosing-a-software-development-company",
    title: "How to Choose a Software Development Company: A CTO's Checklist",
    excerpt: "Twelve questions that separate serious engineering partners from body shops — including the ones vendors hope you won't ask.",
    date: "2026-04-10",
    category: "Outsourcing",
    readTime: "9 min read",
    body: [
      { heading: "Why the obvious questions don't help", paras: [
        "Every vendor will tell you they write clean code, follow agile, and care about quality. Those answers are free and meaningless. The questions that actually separate serious partners from body shops are the uncomfortable ones — the ones that have a real cost to answer honestly.",
      ]},
      { heading: "Questions about ownership and risk", paras: [
        "Who owns the source code and IP, and when? (The answer should be: you, on payment, no exceptions.) What happens if we part ways mid-project? Is there vendor lock-in in the architecture? Will you sign an NDA before discovery? A partner confident in their work has clean answers to all of these.",
      ]},
      { heading: "Questions about how they actually work", paras: [
        "Who will I talk to — a salesperson or an engineer? Will I see working software every week, or just at the end? How do you estimate, and what happens when an estimate is wrong? Can I see a live project board? The right partner makes delivery visible; a body shop keeps it in a black box.",
      ]},
      { heading: "Questions about people and seniority", paras: [
        "Who exactly will work on my project, and how senior are they? Is the team you're pitching the team I'll get? How do you handle code review and testing? Will you push back on my requirements if they're wrong? You want a partner who tells you the bad news early, not one who agrees with everything to close the deal.",
      ]},
    ],
  },
  {
    slug: "spring-boot-microservices-fintech",
    title: "Designing Spring Boot Microservices for FinTech Compliance",
    excerpt: "Lessons from building banking middleware in regulated markets: audit trails, idempotency, and the integrations nobody warns you about.",
    date: "2026-03-22",
    category: "Engineering",
    readTime: "13 min read",
    body: [
      { heading: "In FinTech, a bug is a compliance incident", paras: [
        "Building software for regulated financial markets is a different discipline from building a typical web app. A lost transaction isn't a glitch — it's a reportable event. A missing audit trail isn't a gap — it's a failed audit. That reality shapes every architectural decision you make.",
      ]},
      { heading: "Idempotency is non-negotiable", paras: [
        "Networks fail, clients retry, and in a financial system a duplicate transaction is a serious problem. Every state-changing operation needs an idempotency key so that retrying a request produces the same result rather than a second charge. We design this in from the first endpoint, not as a patch after the first incident.",
      ]},
      { heading: "Audit trails as a first-class concern", paras: [
        "Every meaningful action — who did what, when, with what data, and what the system decided — needs to be captured immutably. Auditors will ask, and 'we don't log that' is not an acceptable answer. We treat the audit log as a core domain object, not an afterthought bolted onto application logs.",
      ]},
      { heading: "The integrations nobody warns you about", paras: [
        "National credit bureaus, identity services, IBAN validation, and regulatory reporting systems each have their own quirks, downtime windows, and undocumented behaviors. Building resilient integrations — with timeouts, retries, circuit breakers, and graceful degradation — is most of the real work, and it's where inexperienced teams get stuck. Plan for these systems to be slow and occasionally unavailable, and design so your platform stays up when they don't.",
      ]},
    ],
  },
  {
    slug: "nextjs-seo-for-business-websites",
    title: "Next.js SEO: How We Hit 100 Lighthouse SEO Scores on Client Sites",
    excerpt: "Server rendering, structured data, and the Core Web Vitals playbook behind sites that rank — with the exact schema we ship.",
    date: "2026-03-05",
    category: "Web Development",
    readTime: "10 min read",
    body: [
      { heading: "SEO is an engineering problem first", paras: [
        "A lot of SEO advice is about content and keywords, but for a modern web app the foundation is technical: can search engines crawl your pages quickly, render them correctly, and understand what they're about? Get the engineering right and content does its job; get it wrong and the best content in the world stays invisible.",
      ]},
      { heading: "Server rendering by default", paras: [
        "Client-side-only rendering makes crawlers work harder and slows the first paint. We render pages on the server or generate them statically so content is in the HTML on first request — fast for users, trivial for crawlers. Next.js makes this the default path rather than a special case.",
      ]},
      { heading: "Structured data, shipped on every page", paras: [
        "We ship JSON-LD structured data — Organization, Breadcrumb, FAQ, and Article schema — so search engines can render rich results and understand the relationships between pages. This is the difference between a plain blue link and a result with ratings, FAQs, and breadcrumbs attached.",
      ]},
      { heading: "Core Web Vitals as a budget", paras: [
        "We treat performance as a budget, not an aspiration: optimized images, minimal client JavaScript, and careful font loading keep Largest Contentful Paint and Cumulative Layout Shift in the green. The payoff is sites that score 95+ on Core Web Vitals and rank because they genuinely deserve to.",
      ]},
    ],
  },
  {
    slug: "dedicated-team-vs-project-outsourcing",
    title: "Dedicated Team vs. Project Outsourcing: Which Model Fits You?",
    excerpt: "A cost and risk comparison of the two dominant engagement models, with the break-even math for when a dedicated team pays off.",
    date: "2026-02-14",
    category: "Outsourcing",
    readTime: "7 min read",
    body: [
      { heading: "Two models, two very different fits", paras: [
        "Fixed-price project outsourcing and dedicated teams solve different problems, and choosing the wrong one is a common, expensive mistake. The right choice depends on how well you can define your scope and how long you'll need the capacity.",
      ]},
      { heading: "When fixed-price projects win", paras: [
        "If your scope is well-defined and unlikely to change much, a fixed-price project gives you budget certainty and a clear deliverable. You're paying for an outcome, and the risk of estimation sits with the vendor. This is ideal for a bounded build — a specific feature, a defined platform, a clear integration.",
      ]},
      { heading: "When a dedicated team wins", paras: [
        "If your product is evolving, your roadmap is long, or your requirements will shift as you learn from users, a dedicated team gives you consistent capacity that adapts. You direct the priorities sprint by sprint; the team accumulates deep context that a project-by-project arrangement keeps losing.",
      ]},
      { heading: "The break-even math", paras: [
        "As a rule of thumb, once an engagement runs past roughly four to six months of continuous work, a dedicated team usually costs less per unit of output than a series of fixed-price projects — because you stop paying the re-onboarding and re-scoping tax every time. Below that threshold, the predictability of fixed-price often wins. We'll tell you honestly which side of the line you're on.",
      ]},
    ],
  },
];

export const clients = [
  "Gulf Digital Bank", "OutreachIQ", "Kansai Logistics", "Skyline Estates",
  "MedCare Europe", "Forge DevTools", "AgroChain", "Voyagio",
  "PharmaTrack", "EduSphere", "RetailOS", "FleetIQ",
];
