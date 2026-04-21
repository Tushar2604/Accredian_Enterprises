# Accredian Enterprise — Next.js Clone


---

## Live Demo

🔗 **[Deployed on Vercel →](#)** _(https://accredian-enterprises.vercel.app/)_

---

## Screenshots

| Section | Preview |
|---------|---------|
| Hero | _(Add screenshot)_ |
| Stats + Features | _(Add screenshot)_ |
| How It Works | _(Add screenshot)_ |
| Testimonials | _(Add screenshot)_ |
| Lead Form | _(Add screenshot)_ |

---

## Tech Stack

| Technology | Version | Rationale |
|------------|---------|-----------|
| **Next.js** | 14.2 | App Router for RSC-first architecture; built-in API routes; Vercel-native |
| **TypeScript** | 5.5 | Strict mode throughout; eliminates entire classes of runtime errors |
| **Tailwind CSS** | 3.4 | Utility-first; co-located styles; zero unused CSS in production |
| **Framer Motion** | 11 | Best-in-class React animation library; declarative, performant |
| **React Hook Form** | 7 | Minimal re-renders on validation; uncontrolled form performance |
| **Zod** | 3 | Schema-first validation shared between client and API route |
| **Sonner** | 1.5 | Lightweight, beautiful toast library; no overhead |
| **Lucide React** | 0.414 | Tree-shakeable icon library; consistent design system |

**Why no database?** The lead API route persists to `leads.json` for local development and logs to console in production (Vercel's filesystem is ephemeral). A real deployment would swap in Prisma + Postgres or a CRM webhook. That swap is a one-file change in `route.ts`.

---

## Local Setup

```bash
# 1. Clone
git clone <repo-url>
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Copy env (no vars required for basic dev)
cp .env.example .env.local

# 4. Start dev server
npm run dev
# → http://localhost:3000

# 5. Type check
npm run type-check

# 6. Production build
npm run build && npm start
```

**Node.js requirement:** v18.17+ (LTS)

---

## Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout: metadata, fonts (Sora + DM Sans via next/font)
│   ├── page.tsx            # Page assembler — all sections composed here
│   ├── globals.css         # Tailwind directives + custom utilities
│   └── api/
│       └── leads/
│           └── route.ts    # POST /api/leads — validates, logs, persists lead
│
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Animated hero with dashboard illustration
│   │   ├── Stats.tsx       # Scroll-triggered counter animation bar
│   │   ├── Features.tsx    # Feature card grid with hover lift
│   │   ├── HowItWorks.tsx  # Desktop timeline / mobile vertical stack
│   │   ├── Testimonials.tsx # Auto-play carousel (pause on hover)
│   │   ├── Partners.tsx    # CSS marquee + partner callout card
│   │   ├── LeadForm.tsx    # RHF + Zod form → POST /api/leads
│   │   └── Footer.tsx      # Links, social icons, copyright
│   └── ui/
│       ├── Navbar.tsx      # Sticky header, active section highlight, mobile drawer
│       ├── AnimatedSection.tsx # Reusable scroll-triggered fade-up wrapper
│       ├── CounterCard.tsx # Animated stat card (IntersectionObserver + rAF)
│       ├── FeatureCard.tsx # Icon + hover lift card
│       └── TestimonialCard.tsx # Quote card with star rating
│
├── data/                   # All hardcoded content as typed TS arrays
│   ├── features.ts
│   ├── stats.ts
│   ├── steps.ts
│   ├── testimonials.ts
│   ├── partners.ts
│   └── navigation.ts
│
├── hooks/
│   ├── useCounterAnimation.ts  # rAF-based eased count-up
│   └── useScrollTrigger.ts     # IntersectionObserver hook + useActiveSection
│
├── lib/
│   ├── types.ts            # Shared TypeScript interfaces
│   ├── validations.ts      # Zod schemas (shared client/server)
│   └── utils.ts            # cn() helper, formatNumber
│
├── tailwind.config.ts      # Custom colors, fonts, animations
├── vercel.json             # Deployment config
└── .env.example            # Environment variable template
```

---

## Architecture Decisions

### 1. App Router with RSC-first design
Sections that don't need client state (Footer, Partners header, HowItWorks) are Server Components by default. The `"use client"` directive is applied only at the boundary where interactivity begins — Navbar, Hero animations, CounterCard, Carousel, Form. This minimizes the JS bundle shipped to the browser.

### 2. Data layer separation
All content (testimonials, features, stats, etc.) lives in `/data/` as typed TypeScript arrays — no hardcoded JSX data. This means swapping in a CMS (Contentlayer, Sanity, Strapi) requires only updating the data files, not touching component code.

### 3. Animation strategy
- **Page load:** Framer Motion `motion.div` with stagger on the Hero — creates a cinematic reveal without layout shift.
- **Scroll-triggered:** A reusable `<AnimatedSection>` wrapper uses IntersectionObserver internally. Each section fades up on entry.
- **Counter animation:** Custom `useCounterAnimation` hook uses `requestAnimationFrame` + easeOutExpo for natural deceleration. Triggered once via `useScrollTrigger`.
- **Marquee:** Pure CSS `@keyframes` — zero JS cost.

### 4. Form architecture
`LeadForm` is fully client-side validated with React Hook Form + Zod resolver. The same Zod schema is imported by the API route for server-side re-validation. This "single source of truth" pattern means validation logic never drifts between layers.

### 5. Responsive strategy
Mobile-first Tailwind classes throughout. No `@media` queries in CSS — all breakpoints use Tailwind's `sm:`, `md:`, `lg:` prefixes. Key responsive decisions:
- Hero: stacked on mobile, side-by-side on `lg:`
- HowItWorks: vertical stack on mobile, horizontal timeline on `lg:`
- Testimonials: 1-col / 2-col / 3-col grid responsive

---

## AI Usage (Honest Accounting)

This project was built with Claude (Anthropic) as a pair programmer. Here's exactly what was AI-generated vs. manually refined:

| Component | AI-generated | Manually refined |
|-----------|-------------|-----------------|
| Component scaffolding | ✅ Full drafts | Minor naming cleanup |
| Tailwind config | ✅ Color system, animations | Verified all tokens work |
| Zod schemas | ✅ Initial schema | Added work-email validation refinement |
| API route | ✅ Full route | Verified error handling |
| Animation variants | ✅ Framer Motion variants | Tuned easing values |
| Data files | ✅ Content generated | Verified factual accuracy of Accredian claims |
| README | ✅ This document | Architecture section expanded by hand |

**What I'd write differently without AI:** The same architecture and component structure, but the initial scaffolding would take 3-4× longer. The AI saved mechanical typing time; the design decisions (RSC boundary placement, data layer separation, single-schema validation) were deliberate human choices.

---

## What I'd Improve With More Time

1. **Real database**: Replace `leads.json` with Prisma + PlanetScale (MySQL). One-file swap in `route.ts`. Would add Zod → Prisma type inference.

2. **CMS integration**: Connect `/data/` files to Contentlayer or Sanity for non-developer content editing. The data interface is already abstracted for this.

3. **Auth + Admin dashboard**: Add NextAuth.js with Google OAuth. Build an `/admin/leads` page using TanStack Table to browse, filter, and export lead submissions.

4. **Email notifications**: Wire Resend (transactional email) into the API route. Send confirmation email to the lead and a Slack webhook to the sales team.

5. **A/B testing**: Add Vercel Edge Config for feature flags on CTA copy. Measure conversion impact with PostHog.

6. **Testing**: Vitest unit tests for hooks and validations. Playwright E2E for the form submission flow. Currently zero test coverage — unacceptable for production.

7. **Image optimization**: Real hero images with `next/image` + Cloudinary CDN. Currently using SVG illustrations to avoid image hosting dependencies.

8. **i18n**: Add `next-intl` for multi-language support. Accredian operates globally and Hindi/regional language support would expand reach.

9. **Accessibility audit**: Full axe-core scan. Ensure all interactive elements have proper ARIA labels, focus rings, and keyboard navigation. Form errors need `aria-describedby` wiring.

10. **Performance budget**: Add `@next/bundle-analyzer` and enforce a JS budget. Framer Motion is ~35KB gzipped — evaluate if `motion.div` wrappers can be replaced with CSS animations in some cases.

---

## API Reference

### `POST /api/leads`

Submit an enterprise inquiry.

**Request body:**
```json
{
  "fullName": "Priya Sharma",
  "workEmail": "priya@company.com",
  "companyName": "Acme Corp",
  "teamSize": "51-200",
  "message": "Looking to upskill our data team"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Thank you! Our enterprise team will reach out within 24 hours.",
  "id": "lead_1720000000000_abc123"
}
```

**Validation errors (400):**
```json
{
  "success": false,
  "message": "Please use your work email address"
}
```

---

## License

MIT © 2024 — Built as a hiring evaluation project.
