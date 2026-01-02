# handyman
I NEED A VERY DETAILED TECHNICAL PLAN FOR COPILOT IN VS CODE TO BUILT VERY DETAILED PLAN  FOR HANDYMAN WEBSITE FOR MAINTENANCE COMPANY BASED IN NORTH LONDON COMPANY BASED HAMSPTEAD MAINTENANCE. THE WEBSITE MUST MATCH THE HIGHEST AND TOP WEBSITES OFFERING SIMILAR SERVICES. THE WEBSITE WILL BE DEPLOYED TO VERCEL USING NEXT JS. ALL THE PRICES HANDYMAN OFFER MUST MATCH THE PRICES HANDYMAN SERVICE OFFER IN NORTH LONDON

Below is a very detailed, technical build plan you can follow in VS Code with GitHub Copilot to create a top-tier, “best-in-class” North London handyman / property maintenance website for Hampstead Maintenance (based at 250 Finchley Road, NW3 6DN), built with Next.js and deployed on Vercel.

I’m going to treat the website as a lead-generation machine first (calls + quote requests + emergency jobs), while still looking and behaving like the most premium London competitors.

0) Reality check on “prices must match North London”
I can’t pull live competitor price lists in real time from the internet in this chat. So I can’t truthfully guarantee “these exact prices match all North London handyman sites today”.

What I can do (and what you should do to meet your requirement properly):

Build the website so pricing is data-driven (CMS/JSON) and easy to update.
Implement a pricing research workflow (spreadsheet + monthly review).
Provide a North London market pricing baseline (typical ranges) so you’re not starting from zero.
Use wording that keeps you compliant: “from” prices / typical prices / subject to survey, and show minimum charges, VAT, and emergency uplift clearly.
I’ll include:

a recommended pricing data model
a pricing page UX spec like top competitors
a research method to get exact North London price parity
a starter benchmark rate card you can adjust
1) What “top websites offering similar services” do (UX + conversion patterns)
To match the best London maintenance / plumbing / handyman / locksmith sites, the website must nail:

A. Instant trust (first 3 seconds)
Clear headline: “Hampstead & North London property maintenance—same-day available”
Prominent phone number + 24/7 emergency CTA
Trust proof near the top:
“12 in-house teams (no subcontractors)”
“Fully insured”
“DBS checked / vetted” (only if true)
Trade memberships (only if true: NICEIC, Gas Safe, etc.)
Google reviews displayed (embed + schema)
B. Fast conversion (mobile-first)
Sticky bottom bar on mobile: Call / WhatsApp / Get Quote
Emergency flows reduce friction:
Emergency Locksmith page has a big “Call now” button
Short form: postcode + issue + callback time
“Get a quote” form supports photo upload (huge conversion lift)
C. Premium visuals
Real photos > stock (especially for high-end NW3/NW6/NW11)
Before/after gallery
Brand style: simple, calm, premium (not “cheap trades” vibes)
D. Local SEO dominance
Dedicated pages for:
each service (handyman, locksmith, plumbing, electrical…)
each area (Hampstead, Belsize Park, Highgate, West Hampstead…)
each service+area combination (careful: must be unique, not thin)
E. “Any job value” positioning
Separate funnel sections:
“Small jobs” (mounting, fittings, repairs)
“Ongoing property maintenance” packages (landlords/agents)
“Larger refurb & renovations” (optional expansion)
2) Site goals, KPIs, and conversion architecture
Primary KPIs
Phone calls (especially emergency)
Quote form submissions
WhatsApp clicks
“Book a visit” submissions
Repeat maintenance contracts (landlords/agents)
Funnel design (what pages should do)
Emergency pages: convert to call within 1–2 taps.
Service pages: convert to quote request + show trust + show price anchors.
Area pages: rank for “[service] in [area/postcode]” and funnel into service pages.
Pricing page: reduce objections and stop “price shoppers” bouncing.
Landlord/agent page: convert to contract / account enquiries.
3) Information architecture (sitemap) for Hampstead Maintenance
You want a clean, premium nav that still covers all services.

Top-level navigation (recommended)
Services
Emergency 24/7
Pricing
Areas Covered
Reviews
About
Contact / Book
Key pages (minimum)
Core
/ Home
/services (hub)
/services/handyman
/services/locksmith (emergency-focused)
/services/plumbing
/services/electrical
/services/painting-decorating
/services/carpentry-joinery
/services/tiling
/services/plastering
/services/bathroom-repairs
/services/kitchen-repairs
/services/property-maintenance (ongoing / managed)
/emergency (hub)
/emergency/locksmith
/emergency/plumber
/pricing
/areas (hub)
/areas/hampstead-nw3
/areas/belsize-park-nw3
/areas/west-hampstead-nw6
/areas/swiss-cottage-nw3
/areas/highgate-n6
/areas/finchley-n3-n12 (optional)
/reviews
/projects (case studies)
/about
/contact
/privacy
/cookies
/terms
Area targeting (prestigious North / North West)
Prioritise first:

NW3 (Hampstead, Belsize Park, Swiss Cottage, Finchley Road)
NW6 (West Hampstead, Kilburn edges)
NW8 (St John’s Wood)
NW11 (Golders Green / Hampstead Garden Suburb)
N6 (Highgate)
N2 (East Finchley)
N1 (Canonbury/Islington edges) if you cover
N10 (Muswell Hill) if you cover
N19 (Dartmouth Park / Kentish Town) if you cover
NW1 (Camden / Primrose Hill) if you cover
4) Tech stack (Next.js on Vercel) — “premium & maintainable”
Core stack
Next.js (App Router) + TypeScript
Tailwind CSS
shadcn/ui components (premium, consistent, fast to build)
Framer Motion (subtle animation only)
next/image for performance
Content + editing
Choose one:

Option A (recommended): Sanity CMS
Best if you want non-dev editing of services/areas/pricing/blog.

Service pages, area pages, FAQs, pricing tables editable.
Works great with Next.js.
Option B: MDX + Contentlayer
Best if you want everything in repo and simple. Less friendly for non-dev.

Leads & data
You need:

store leads
email notifications
spam protection
optional CRM integration
Recommended:

Supabase Postgres (leads, quote requests, file metadata)
Resend (emails) or SendGrid
Cloudflare Turnstile (spam protection; less annoying than reCAPTCHA)
Optional: HubSpot CRM sync / Pipedrive
Analytics & tracking
GA4 + Google Tag Manager
Call tracking: ResponseTap or CallRail (UK-friendly)
Microsoft Clarity or Hotjar (recordings) — must be cookie-consented
Booking
Phase 1 (fast): “Request a visit” with time windows
Phase 2 (advanced): live scheduling (Calendly / custom calendar)

5) Data model you should build (so Copilot can implement cleanly)
Content types
Service
title (e.g., “Handyman Services”)
slug (handyman)
summary
heroImage
serviceCategories (repairs, installations, etc.)
features (in-house teams, insured, same-day)
faq[] (question/answer)
pricingCategoryRef (links into pricing)
relatedServices[]
gallery[] (before/after)
areasServed[] (optional)
Area
title (e.g., “Hampstead (NW3)”)
slug (hampstead-nw3)
postcodePrefixes (["NW3"])
intro
landmarks (Hampstead Heath, etc.)
serviceHighlights[] (links to services)
reviews[] (filtered)
mapEmbedUrl
PriceItem
This is key to your “match North London pricing” requirement.

Fields:

category (Handyman, Plumbing, Locksmith, Electrical, Decorating)
name (e.g., “Standard handyman hourly rate”)
unit (hour, half-day, day, call-out, from)
price (number) OR priceFrom + priceTo
vatIncluded (boolean)
minimumChargeNotes
emergencyUpliftPercent (optional)
lastVerifiedDate
internalSources[] (URLs or notes to where you verified market pricing)
Lead
type (quote, emergency, callback, landlord_enquiry)
serviceSlug
areaSlug
postcode
name, phone, email
urgency (emergency, today, this-week)
description
photoUploads[]
preferredContactMethod
createdAt
gclid / utm_* fields
6) Pricing strategy + pricing UX (to match market expectations)
A) How to actually “match North London prices” (process)
Create a spreadsheet with columns:

Service category (handyman/locksmith/etc.)
Competitor name
URL screenshot (evidence)
Rate type (hourly / call-out / emergency)
Price
VAT included? (yes/no)
Minimum charge
Date checked
Target: at least 10 competitor sources across:

local NW3/NW6 handyman sites
locksmith emergency sites in North London
Checkatrade / TrustATrader profiles (some display rates)
TaskRabbit going rates (as a sanity check)
MyBuilder cost guides (broad, but useful)
Then set your website pricing as:

Median of market for standard work
Transparent emergency uplift
Clear minimum charge to stop time-wasters
B) Pricing page structure (what top sites do)
On /pricing you want:

Quick headline: “Transparent North London pricing”
A small set of anchor prices (the ones customers care about):
“Handyman from £X/hr”
“Emergency call-out from £Y”
“Locksmith emergency from £Z”
Expandable pricing table by category
“What’s included” and “What affects price”
FAQ about VAT, parking, congestion (if applicable), materials
CTA: “Send photos for fixed quote”
C) Starter benchmark rate card (NOT live-verified)
Use these only as initial placeholders until you do the spreadsheet verification:

Handyman (North London typical)

Standard hourly: £65–£95/hr
Minimum charge: 1 hour
Half-day (up to 4h): £260–£360
Full day (up to 8h): £480–£720
Extra pair of hands (mate): +£35–£55/hr
Emergency / out-of-hours uplift

Evening/weekend uplift: +25% to +50%
Night emergency uplift: +50% to +100%
Locksmith (very variable)

Emergency call-out (day): £95–£150
Emergency call-out (night): £150–£250
Lock replacement: from £85–£220 + parts (You must be careful here—lock types vary massively.)
Important compliance note: show prices as “from” and “typical”, and clarify “parts/materials extra” where relevant.

7) Next.js architecture (App Router) — recommended structure
Use a structure that supports marketing pages + dynamic CMS content + fast performance.

Project structure (suggested)
/app
  /(marketing)
    layout.tsx
    page.tsx
    services/
      page.tsx
      [slug]/
        page.tsx
    areas/
      page.tsx
      [slug]/
        page.tsx
    pricing/
      page.tsx
    emergency/
      page.tsx
      locksmith/
        page.tsx
      plumber/
        page.tsx
    reviews/
      page.tsx
    projects/
      page.tsx
      [slug]/
        page.tsx
    about/
      page.tsx
    contact/
      page.tsx
    privacy/
      page.tsx
    cookies/
      page.tsx

  /api
    lead/
      route.ts
    upload/
      route.ts

/components
  /layout (Header, Footer, StickyCTA)
  /sections (Hero, TrustBar, ServiceCards, Reviews)
  /forms (QuoteForm, EmergencyForm, LandlordForm)
  /pricing (PricingTable, PricingCard)
  /seo (JsonLd, Breadcrumbs)

/lib
  cms.ts
  supabase.ts
  validations.ts
  schema.ts
  tracking.ts
  pricing.ts

/styles
  globals.css

/content (optional if MDX route)
8) The “must-have” components (premium conversion)
Layout essentials
Header: logo, nav, phone number, “Get quote” button
Sticky mobile CTA bar: Call / WhatsApp / Quote
Footer: NAP (name/address/phone), opening hours, areas, services, social links
Conversion sections
HeroSection with:
service + area keyword
2 CTAs: “Call now” and “Get a quote”
“Same-day / 24-7 / in-house teams” chips
TrustBar:
Google rating
Insurance
“12 in-house teams”
ServiceGrid
AreaCoverage (map + list)
ReviewCarousel (real Google reviews)
FAQAccordion
PhotoQuoteCTA (upload photos)
9) Lead capture system (forms, storage, notifications)
Forms you need
Quick quote form (general)
Emergency callback form (minimal fields)
Landlord/Agent enquiry form (more structured)
Optional: “Book a visit” request
Technical approach
Next.js Route Handlers (app/api/lead/route.ts)
Validate with zod
Spam protection with Turnstile
Store to Supabase
Email notification via Resend
Optional SMS via Twilio (for emergency lead alerts)
Quote form fields (high-converting)
Service category (dropdown)
Urgency (Emergency / Today / This week / Flexible)
Postcode
Property type (flat/house)
Description
Upload photos
Name + mobile
Preferred contact method (call/WhatsApp/email)
10) Local SEO engineering (this is where you beat competitors)
A) On-page SEO system
Every service and area page should have:

unique title tag
unique H1
strong intro copy mentioning:
Hampstead / NW3 base
response times
key services
internal links to:
pricing
emergency
nearby areas
related services
B) Schema (structured data) — essential
Implement JSON-LD:

LocalBusiness / HomeAndConstructionBusiness
Service schema for service pages
FAQPage schema where FAQs exist
BreadcrumbList schema
C) Programmatic area pages (do it safely)
You can template pages, but must add unique value:

landmarks
building types (period homes, mansion blocks)
parking / access notes
local testimonials
photos from that area (if possible)
11) Vercel deployment plan (production-ready)
Environments
production: live domain
preview: auto-deploy per branch
Environment variables (example)
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_GA_ID
TURNSTILE_SITE_KEY
TURNSTILE_SECRET_KEY
SUPABASE_URL
SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY (server only)
RESEND_API_KEY
LEADS_NOTIFY_EMAIL
Vercel settings
Enable Vercel Analytics (optional)
Use Image Optimization defaults
Add sitemap.xml generation (build-time)
12) The Copilot-in-VS-Code workflow (how to actually build this fast)
Copilot works best when you give it:

a stable spec
a consistent file structure
small tasks with acceptance criteria
Step 1 — Create a “single source of truth” spec file
In your repo, create:

/docs/PRODUCT_SPEC.md

Include:

brand name + address
target areas (NW3, NW6, NW11, N6…)
services list
conversion goals
tone of voice (premium, calm, professional)
pricing rules (min charge, emergency uplift, VAT wording)
design requirements (mobile sticky bar, trust bar, etc.)
Copilot prompt (create the spec)
In VS Code Copilot Chat:

Create a detailed PRODUCT_SPEC.md for a premium North London handyman/property maintenance website called “Hampstead Maintenance”, based at 250 Finchley Road, NW3 6DN. Include target postcodes, primary services including 24/7 emergency locksmith, brand tone, conversion goals, required pages, and pricing rules (from prices, min charge, emergency uplift). Format as a structured markdown spec.

Step 2 — Add Copilot repository instructions
Create:

.github/copilot-instructions.md

Put strict rules so Copilot generates consistent code.

Example instructions you should add:

Use Next.js App Router + TypeScript
Tailwind + shadcn/ui
Server components by default; client only when needed
zod validation for all form inputs
Must be accessible (ARIA, labels)
Must include SEO metadata + JSON-LD
No placeholder “lorem ipsum” on production pages
Copilot prompt (generate instructions file)
Generate .github/copilot-instructions.md for a Next.js App Router TypeScript project deployed on Vercel. We use Tailwind + shadcn/ui, zod validation, Supabase for lead storage, Resend for emails, Turnstile captcha. Default to server components, add accessibility and SEO best practices. Avoid lorem ipsum. Follow a clean folder structure under /app, /components, /lib.

Step 3 — Scaffold the Next.js project
Run:

npx create-next-app@latest hampstead-maintenance \
  --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
Then add:

npx shadcn@latest init
Add dependencies:

npm i zod @supabase/supabase-js resend
npm i -D prettier eslint-config-prettier
Step 4 — Make Copilot build in small vertical slices
Do NOT ask Copilot “build the whole site”.
Instead, work like this:

Slice 1: Global layout + header/footer + mobile sticky CTA
Acceptance criteria:

header has phone + quote CTA
sticky mobile bar appears on mobile
consistent NAP in footer
Copilot prompt:

Implement the marketing layout in src/app/(marketing)/layout.tsx with a Header, Footer, and a StickyMobileCTA component. Header must show phone number (tel: link), “Get a quote” button, and nav links. StickyMobileCTA should have Call, WhatsApp, and Quote buttons and be visible on small screens. Use Tailwind and shadcn/ui patterns.

Slice 2: Homepage sections
Acceptance criteria:

hero with service + location
trust bar
services grid
reviews preview
CTA with photo upload
Copilot prompt:

Create src/app/(marketing)/page.tsx for the homepage with sections: HeroSection, TrustBar (12 in-house teams, insured, 24/7 emergency locksmith), ServicesGrid, AreasCovered teaser, Reviews teaser, and a “Send photos for a fast quote” CTA. Use server components where possible.

Slice 3: Service pages (dynamic)
Acceptance criteria:

/services/[slug] routes render from CMS/data
SEO metadata set per service
service schema + FAQ schema output
Copilot prompt:

Implement dynamic service pages at src/app/(marketing)/services/[slug]/page.tsx. Create a Service type, mock data in src/lib/services.ts (later replace with CMS). Render hero, description, pricing teaser, FAQs, related services, and CTAs. Add generateMetadata() with title/description and add JSON-LD Service + FAQPage schema.

Slice 4: Area pages (dynamic)
Acceptance criteria:

/areas/[slug]
local copy blocks
internal linking to services
LocalBusiness schema on key pages
Copilot prompt:

Implement dynamic area pages at src/app/(marketing)/areas/[slug]/page.tsx using mock area data in src/lib/areas.ts. Each page should highlight key services, show a map embed placeholder, include FAQs, and link to service pages. Add BreadcrumbList schema and area-specific metadata.

Slice 5: Pricing page (data-driven)
Acceptance criteria:

Pricing items grouped by category
includes min charge + emergency uplift explanation
easy to update data source
Copilot prompt:

Build src/app/(marketing)/pricing/page.tsx with a PricingTable component that reads from src/lib/pricing.ts. Pricing should be grouped by categories: Handyman, Locksmith, Plumbing, Electrical, Decorating. Show “from” and ranges, specify minimum charge and emergency uplift rules. Include a disclaimer section and FAQ accordion.

Slice 6: Lead API + Supabase + Resend
Acceptance criteria:

POST /api/lead stores lead + sends email
zod validated
Turnstile verification
returns success/failure JSON
Copilot prompt:

Create src/app/api/lead/route.ts that accepts JSON from the quote form. Validate with zod, verify Cloudflare Turnstile token, store lead in Supabase (table leads), and send an email notification via Resend. Include robust error handling and never expose secret keys to the client. Provide the SQL schema for the leads table.

Slice 7: Quote form UX
Acceptance criteria:

upload photos (phase 1 can be optional)
clear error handling
after submit shows confirmation + calls to action
Copilot prompt:

Implement a QuoteForm component in src/components/forms/QuoteForm.tsx using shadcn/ui form patterns. Fields: service, urgency, postcode, description, name, phone, email, preferredContactMethod, and a Turnstile widget token. Submit to /api/lead. Add client-side zod validation and accessible error messages.

13) Premium “details” checklist (the stuff that makes it feel expensive)
Visual polish
consistent spacing system (Tailwind scale)
restrained animations
real photography, not generic tools
typography: use a premium font pairing (e.g., Inter + a tasteful serif for headings)
Copy blocks you should include everywhere
“In-house team” reassurance (no random subcontractors)
“We protect your home” (dust sheets, tidy finish)
“Transparent pricing” statement
“Same-day availability in NW3/NW6/NW11/N6” (only if true)
Trust assets
insurance certificate summary (do not upload sensitive docs)
team photos (even a group shot helps massively)
review acquisition workflow
14) What I need from you to finalise pricing + exact service list (so the site matches reality)
To truly satisfy “prices must match North London handyman pricing”, send me:

Your current internal price list (even if rough)
Whether prices include VAT
Minimum charge rules
Emergency call-out rules (time windows + uplift)
Locksmith specifics (call-out, lock types, supply/fit rules)
Your top 10 most common jobs (TV mounting, shelves, dripping tap, etc.)
Service area boundaries (exact postcodes you’ll take)
Then I can help you turn it into:

a clean pricing table
“fixed-price job menu” (where appropriate)
a quote calculator (optional)
If you want, I can generate the exact repo starter pack text
I can produce:

docs/PRODUCT_SPEC.md (ready to paste)
.github/copilot-instructions.md
/lib/pricing.ts with your final price items
page copy outlines for NW3/NW6/NW11/N6
the Copilot prompt sequence as a step-by-step “build script”
Tell me:

Do you want Sanity CMS or keep everything in repo (MDX/TS)?
What’s your main phone number and do you use WhatsApp for emergencies?
Are you VAT registered (prices shown inc or ex VAT)?
No file chosenNo file chosen
Unit 3, Palace Court
250 Finchley Road
Hampstead, London
NW3 6DN  PHONE WHATSAPP: +447459 345456 , EMAIL: CONTACT@HAMPSTEADMAINTENANCE.CO.UK

Use the following details as your single source of truth across the whole site (header, footer, schema, contact page, SEO citations, email templates, quote confirmations):

Business (NAP)

Name: Hampstead Maintenance
Address: Unit 3, Palace Court, 250 Finchley Road, Hampstead, London, NW3 6DN
Phone / WhatsApp: +44 7459 345456
Email: contact@hampsteadmaintenance.co.uk
Below is the very detailed technical plan for using GitHub Copilot in VS Code to build a premium, conversion-focused handyman/property maintenance website in Next.js (App Router) and deploy to Vercel, matching the highest-tier North London competitor UX.

1) First: lock the business details into code (prevents inconsistency)
Create src/lib/business.ts
This ensures your phone/address/email is identical everywhere (SEO and trust).

// src/lib/business.ts
export const BUSINESS = {
  name: "Hampstead Maintenance",
  legalName: "Hampstead Maintenance",
  tagline: "Premium property maintenance & handyman services in Hampstead and North London",
  address: {
    line1: "Unit 3, Palace Court",
    line2: "250 Finchley Road",
    area: "Hampstead",
    city: "London",
    postcode: "NW3 6DN",
    country: "GB",
    full: "Unit 3, Palace Court, 250 Finchley Road, Hampstead, London, NW3 6DN",
  },
  phone: {
    display: "+44 7459 345456",
    e164: "+447459345456",
    telHref: "tel:+447459345456",
  },
  whatsapp: {
    display: "+44 7459 345456",
    // WhatsApp requires no + and no spaces
    waNumber: "447459345456",
    waHref: "https://wa.me/447459345456",
    // Build a prefilled WhatsApp message in UI where needed
  },
  email: {
    display: "contact@hampsteadmaintenance.co.uk",
    mailtoHref: "mailto:contact@hampsteadmaintenance.co.uk",
  },
  geo: {
    // Add correct lat/lng later from Google Business Profile / Maps.
    // Keep null until verified to avoid incorrect schema.
    latitude: null as number | null,
    longitude: null as number | null,
  },
  serviceArea: {
    // Keep this tight and prestigious to match your targeting
    primaryPostcodes: ["NW3", "NW6", "NW8", "NW11", "N6", "N2", "NW1", "N1", "N19"],
  },
} as const;

export function buildWhatsAppQuoteLink(params: {
  service?: string;
  postcode?: string;
  urgency?: string;
}) {
  const base = `https://wa.me/${BUSINESS.whatsapp.waNumber}`;
  const msg = [
    `Hi ${BUSINESS.name}, please can I get a quote?`,
    params.service ? `Service: ${params.service}` : null,
    params.postcode ? `Postcode: ${params.postcode}` : null,
    params.urgency ? `Urgency: ${params.urgency}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return `${base}?text=${encodeURIComponent(msg)}`;
}
Why this matters for “top-tier” sites: premium competitors never show mismatching phone formats or inconsistent address punctuation. It harms trust and local SEO.

2) Copilot setup inside VS Code (so it builds like a senior dev)
Add .github/copilot-instructions.md
This is the “rules of the repo” so Copilot outputs consistent, production-quality code.

# Copilot Instructions — Hampstead Maintenance

You are generating code for a premium UK property maintenance / handyman website.

## Stack
- Next.js App Router (src/app) + TypeScript
- Tailwind CSS + shadcn/ui components
- Server Components by default; use "use client" only when needed
- zod validation for all user inputs
- Vercel deployment

## Key business details
- Name: Hampstead Maintenance
- Address: Unit 3, Palace Court, 250 Finchley Road, Hampstead, London, NW3 6DN
- Phone/WhatsApp: +447459345456
- Email: contact@hampsteadmaintenance.co.uk
- Target postcodes: NW3, NW6, NW8, NW11, N6, N2, NW1, N1, N19
- Services include 24/7 emergency locksmith

## Quality requirements
- Mobile-first UX with sticky call-to-action bar (Call / WhatsApp / Get Quote)
- Accessibility: semantic HTML, labels, aria attributes
- SEO: per-page metadata, canonical URLs, JSON-LD (LocalBusiness, Service, FAQ, Breadcrumb)
- No “lorem ipsum”. Write real UK English copy in a premium, professional tone.
- Performance: use next/image, avoid heavy JS, keep animations subtle.

## Data rules
- Use src/lib/business.ts for NAP (name/address/phone/email) everywhere.
- Pricing must be data-driven (src/lib/pricing.ts or CMS). Display prices as “from” unless explicitly fixed.
- Emergency/out-of-hours pricing must include disclaimers + transparent uplift notes.

## Forms / leads
- Validate with zod on client and server
- Protect endpoints with Cloudflare Turnstile
- Store leads (Supabase) and email notify (Resend) in server route handlers
- Never expose secret keys to client.
3) Project scaffold (Next.js + Tailwind + shadcn/ui)
Run:

npx create-next-app@latest hampstead-maintenance \
  --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd hampstead-maintenance
npx shadcn@latest init
Install core packages:

npm i zod
npm i @supabase/supabase-js resend
npm i next-sitemap
Optional but recommended:

npm i clsx tailwind-merge
npm i lucide-react
4) Define the “premium competitor” UX requirements (as acceptance criteria)
Add: docs/PRODUCT_SPEC.md

Paste this (Copilot will follow it when generating pages):

# Hampstead Maintenance — Website Product Spec

## Brand
Hampstead Maintenance — premium property maintenance and handyman services in Hampstead and North London.
Address: Unit 3, Palace Court, 250 Finchley Road, Hampstead, London, NW3 6DN
Phone/WhatsApp: +44 7459 345456
Email: contact@hampsteadmaintenance.co.uk

## Target areas (priority)
NW3 (Hampstead, Belsize Park, Swiss Cottage, Finchley Road)
NW6 (West Hampstead)
NW8 (St John’s Wood)
NW11 (Hampstead Garden Suburb / Golders Green)
N6 (Highgate)
N2 (East Finchley)
NW1 (Primrose Hill / Camden edges)
N1 (Islington edges)
N19 (Dartmouth Park / Kentish Town)

## Services (must be easy to find)
- Handyman
- Property maintenance (ongoing)
- 24/7 emergency locksmith
- Plumbing (incl emergency)
- Electrical
- Painting & decorating
- Carpentry / joinery
- Plastering
- Tiling
- Bathroom and kitchen repairs
- General repairs / make-good / snagging
- Landlord / letting agent maintenance

## Conversion goals
1. Phone calls (especially emergency)
2. WhatsApp messages with photos
3. Quote form submissions
4. Landlord/agent contract enquiries

## Must-have UX patterns
- Sticky mobile bar: Call / WhatsApp / Get Quote
- “Emergency 24/7 locksmith” always visible (header + emergency pages)
- Photo upload on quote form (phase 2 can add uploads if needed)
- Trust bar: in-house teams, insured, vetted
- Reviews: show Google reviews + schema
- Local SEO: service pages + area pages + service+area internal links

## Pricing rules
- Pricing must be data-driven.
- Display “from” prices unless fixed and confirmed.
- Show minimum charge and emergency out-of-hours uplift logic clearly.
- Must align with North London market pricing (maintained by monthly review).

## Tone
Premium, clear, professional, polite. UK English. No pushy sales language.
5) Site architecture (App Router) you should build
Recommended folder layout:

src/app
  (marketing)
    layout.tsx
    page.tsx
    services/
      page.tsx
      [slug]/page.tsx
    areas/
      page.tsx
      [slug]/page.tsx
    pricing/page.tsx
    emergency/
      page.tsx
      locksmith/page.tsx
    reviews/page.tsx
    about/page.tsx
    contact/page.tsx
    privacy/page.tsx
    cookies/page.tsx

  api/
    lead/route.ts

src/components
  layout/Header.tsx
  layout/Footer.tsx
  layout/StickyMobileCTA.tsx
  sections/Hero.tsx
  sections/TrustBar.tsx
  sections/ServiceGrid.tsx
  sections/AreaGrid.tsx
  sections/ReviewsPreview.tsx
  forms/QuoteForm.tsx
  seo/JsonLd.tsx

src/lib
  business.ts
  services.ts
  areas.ts
  pricing.ts
  seo.ts
  validators.ts
6) Implement the premium layout (Header / Footer / Sticky CTA)
A) Header requirements (premium)
Phone number with tel: link
“Emergency 24/7 Locksmith” link
“Get a quote” button
Clean nav with Services, Areas, Pricing, Reviews, Contact
Copilot prompt (do this in Copilot Chat)
Create a premium responsive Header component in src/components/layout/Header.tsx using Tailwind and shadcn/ui patterns. Use BUSINESS from src/lib/business.ts for phone/email/address. Include nav links, a prominent click-to-call phone number, and an “Emergency 24/7” link to /emergency/locksmith. Add a “Get a quote” button linking to /contact#quote.

B) Sticky mobile CTA (this is what top competitor sites do)
This should show Call, WhatsApp, Quote on mobile only.

Create src/components/layout/StickyMobileCTA.tsx:

"use client";

import Link from "next/link";
import { BUSINESS, buildWhatsAppQuoteLink } from "@/lib/business";

export function StickyMobileCTA() {
  const wa = buildWhatsAppQuoteLink({});

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-2 p-2">
        <a
          href={BUSINESS.phone.telHref}
          className="inline-flex items-center justify-center rounded-md bg-slate-900 px-3 py-3 text-sm font-semibold text-white"
        >
          Call
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-3 py-3 text-sm font-semibold text-white"
        >
          WhatsApp
        </a>
        <Link
          href="/contact#quote"
          className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-900"
        >
          Quote
        </Link>
      </div>
    </div>
  );
}
C) Footer requirements (local SEO)
Footer should include:

Full address exactly as provided
Phone + email
Areas covered list (NW3, NW6, NW11…)
Services list
Operating hours (if you provide them)
Links to privacy/cookies
Copilot prompt
Create a Footer component in src/components/layout/Footer.tsx. Include BUSINESS full address, click-to-call phone, and mailto email. Add two columns: Services and Areas Covered (use BUSINESS.serviceArea.primaryPostcodes). Add links to /services, /areas, /pricing, /reviews, /contact, /privacy, /cookies. Use premium styling and small-print disclaimers.

7) SEO + LocalBusiness schema (critical for NW3/NW6 rankings)
A) Create a JSON-LD helper
src/lib/seo.ts:

import { BUSINESS } from "./business";

export function getLocalBusinessJsonLd(params: {
  siteUrl: string;
  pageUrl: string;
  description: string;
}) {
  const { siteUrl, pageUrl, description } = params;

  const jsonLd: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: siteUrl,
    telephone: BUSINESS.phone.e164,
    email: BUSINESS.email.display,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS.address.line1}, ${BUSINESS.address.line2}`,
      addressLocality: BUSINESS.address.city,
      postalCode: BUSINESS.address.postcode,
      addressCountry: "GB",
    },
    description,
    areaServed: BUSINESS.serviceArea.primaryPostcodes.map((pc) => ({
      "@type": "PostalAddress",
      postalCode: pc,
      addressCountry: "GB",
    })),
    sameAs: [
      // Add Google Business Profile URL and socials when you have them
    ],
  };

  if (BUSINESS.geo.latitude && BUSINESS.geo.longitude) {
    jsonLd.geo = {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    };
  }

  // Optional: Add hasOfferCatalog for services later.

  return jsonLd;
}
B) Render JSON-LD in pages
Create src/components/seo/JsonLd.tsx:

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
Copilot prompt
Add LocalBusiness JSON-LD support for the homepage and contact page. Use getLocalBusinessJsonLd() and render it with <JsonLd />. Also add BreadcrumbList schema for service and area pages.

8) Pages that generate leads (build order + Copilot prompts)
You will build in vertical slices. Each slice results in deployable progress.

Slice 1 — Marketing layout
Files
src/app/(marketing)/layout.tsx
imports Header, Footer, StickyMobileCTA
Acceptance criteria
Works on mobile
Sticky CTA doesn’t overlap content (add bottom padding in layout)
Copilot prompt
Implement src/app/(marketing)/layout.tsx that wraps all marketing pages with Header, main content area, Footer, and StickyMobileCTA. Add bottom padding on mobile so content isn’t hidden behind sticky CTA.

Slice 2 — Homepage (premium, NW3-focused)
Homepage sections (in order):

Hero: “Property Maintenance & Handyman in Hampstead (NW3)”
CTAs: Call / WhatsApp / Quote
Trust bar: “12 in-house teams”, “Insured”, “Same-day available”, “Emergency locksmith 24/7”
Services grid
Areas covered
Reviews preview
Quote CTA with photo option messaging
Copilot prompt
Create the homepage at src/app/(marketing)/page.tsx using components in src/components/sections. Make the hero NW3-focused and premium. Add clear CTAs for Call, WhatsApp, and Quote. Include trust signals and an “Emergency 24/7 locksmith” callout.

Slice 3 — Emergency Locksmith landing page (highest-converting)
This page should be built like a PPC landing page:

Big phone CTA above the fold
“Locked out? Call now”
Typical response time statement (only if true)
Areas: NW3, NW6, NW8, NW11, N6
FAQs: “Can you open without damage?”, “What about night call-outs?”
Copilot prompt
Create src/app/(marketing)/emergency/locksmith/page.tsx as a high-converting emergency landing page. Above the fold: headline, click-to-call button, WhatsApp button with prefilled message, and trust bar. Add FAQs with FAQPage schema. Keep copy premium and reassuring.

Slice 4 — Services hub + individual service pages
You want /services/[slug] pages for SEO and conversion.

Data file: src/lib/services.ts (mock first)
Include at least:

handyman
property-maintenance
locksmith
plumbing
electrical
painting-decorating
carpentry-joinery
Copilot prompt
Create src/lib/services.ts exporting an array of Service objects (title, slug, summary, bullets, faqs, emergencySupported boolean). Then implement /services page listing services and /services/[slug] dynamic page rendering service detail with CTAs (call/whatsapp/quote), pricing teaser, and FAQs. Add generateMetadata() and Service schema JSON-LD.

Slice 5 — Areas hub + area pages (NW3/NW6/NW11/N6)
Area pages are how you win organic leads in prestigious postcodes.

Data file: src/lib/areas.ts
Include:

Hampstead (NW3)
Belsize Park (NW3)
Swiss Cottage (NW3)
West Hampstead (NW6)
St John’s Wood (NW8)
Hampstead Garden Suburb (NW11)
Highgate (N6)
East Finchley (N2)
Copilot prompt
Create src/lib/areas.ts exporting Area objects (title, slug, postcodePrefix, landmarks, intro, serviceHighlights). Implement /areas page listing them and /areas/[slug] page with unique local copy, landmarks, services links, and CTAs. Add BreadcrumbList schema and area-specific metadata.

9) Contact page (must feel premium + fast)
Requirements
Show:
Address (exact)
Phone / WhatsApp / email
Map embed (Google)
Quote form (below)
Emergency strip “Locked out? Call 24/7”
Copilot prompt
Create src/app/(marketing)/contact/page.tsx. Include contact details from BUSINESS, a map embed section (placeholder iframe with a TODO for Google maps embed URL), and a QuoteForm section with anchor id="quote". Add LocalBusiness JSON-LD and premium styling.

10) The Quote Form + lead capture (production-grade)
Recommended form behaviour (what the best sites do)
Minimal friction
Works perfectly on mobile
“Upload photos for faster quote” (phase 2 upload if needed)
After submit: success message + immediate call/WhatsApp buttons
Form fields (high-performing)
Service (dropdown)
Urgency (Emergency / Today / This week / Flexible)
Postcode
Description
Name
Phone
Email (optional but recommended)
Preferred contact method (Call/WhatsApp/Email)
Server route: POST /api/lead
Should:

Validate with zod
Verify Turnstile token
Store lead (Supabase)
Email notify (Resend) to contact@hampsteadmaintenance.co.uk
Return JSON
Copilot prompt
Build QuoteForm (client component) and /api/lead route handler. Use zod schemas shared in src/lib/validators.ts. Verify Cloudflare Turnstile server-side. Store in Supabase table leads. Send notification email via Resend to contact@hampsteadmaintenance.co.uk. Return { ok: true } JSON on success and structured errors on failure.

11) Pricing requirement (“must match North London”) — implement it properly
You can satisfy this requirement by implementing:

A) Pricing as a data source (not hard-coded in components)
Create src/lib/pricing.ts:

Categories (Handyman, Locksmith, Plumbing, Electrical, Decorating)
Items with from, range, call-out, emergency uplift, min charge
lastVerifiedDate fields
Copilot prompt
Create src/lib/pricing.ts with PricingCategory and PriceItem types, including lastVerifiedDate and notes. Build a PricingTable component and a /pricing page that groups items by category, shows “from” pricing, minimum charge notes, and emergency uplift disclaimers.

B) Your pricing verification workflow (non-negotiable)
Create a document:

docs/PRICING_RESEARCH.md with:
a table template
instructions to update monthly
rule: update lastVerifiedDate when changed
If you want, I can generate that document text next.

12) Vercel deployment details (so nothing breaks)
Environment variables (Vercel Project Settings)
You’ll likely need:

Public

NEXT_PUBLIC_SITE_URL=https://hampsteadmaintenance.co.uk (or your domain)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=...
NEXT_PUBLIC_GA_ID=... (optional)
Server

TURNSTILE_SECRET_KEY=...
SUPABASE_URL=...
SUPABASE_ANON_KEY=... (client-safe)
SUPABASE_SERVICE_ROLE_KEY=... (server only)
RESEND_API_KEY=...
LEADS_NOTIFY_EMAIL=contact@hampsteadmaintenance.co.uk
13) Immediate next questions (I need these to finish the “top-tier” spec)
You’ve provided the most important contact details. To lock in the rest:

What domain will you use on Vercel? (e.g. hampsteadmaintenance.co.uk)
Are you VAT registered? Should pricing display inc VAT or ex VAT?
Is your 24/7 coverage:
locksmith only, or
locksmith + emergency plumbing/electrical too?
Do you want a CMS (Sanity) or keep content in repo (TS/MDX)?
Do you already have a Google Business Profile link? (So we can embed reviews + map properly.)
14) If you answer the 5 questions above, I will produce (ready-to-paste)
docs/PRODUCT_SPEC.md final version (with services, areas, tone, CTAs)
docs/PRICING_RESEARCH.md + pricing model
src/lib/pricing.ts starter rate card structure
Full set of Copilot prompts in the exact order to build:
homepage
emergency pages
services + area SEO pages
pricing page
contact + quote form
schema + sitemap + robots
lead capture pipeline
Send your domain + VAT status + which services are 24/7, and I’ll generate the full build pack.

No file chosenNo file chosen
hampsteadmaintenance.co.uk , PRICES INCLUDING VAT,  YES 24/7, KEEP CONENT IN REPO, NO GGOOGLE LINK

## Confirmed build requirements (locked)

- **Domain:** `hampsteadmaintenance.co.uk`

- **Pricing display:** **Prices include VAT**

- **Availability:** **24/7 (all services)** + emergency emphasis

- **Content management:** **Keep content in repo** (no external CMS)

- **Google reviews link:** **None yet** (we’ll build the site so it’s ready, and add an upgrade path)



**NAP (must be identical everywhere):**

- **Hampstead Maintenance**

- **Unit 3, Palace Court, 250 Finchley Road, Hampstead, London, NW3 6DN**

- **Phone/WhatsApp:** +44 7459 345456

- **Email:** contact@hampsteadmaintenance.co.uk



---



# A) The “Copilot build system” (so it outputs exactly what you want)



## A1) Create these 2 repo “control files” first (critical)

These make Copilot behave like a senior engineer and keep the brand consistent.



### 1) `.github/copilot-instructions.md`

Create this file and paste:



```md

# Copilot Instructions — Hampstead Maintenance



## Project goal

Build a premium, conversion-led UK property maintenance/handyman website for Hampstead Maintenance (NW3),

using Next.js App Router + TypeScript, deployed on Vercel.



## Brand / NAP (must match everywhere)

- Business name: Hampstead Maintenance

- Address: Unit 3, Palace Court, 250 Finchley Road, Hampstead, London, NW3 6DN

- Phone / WhatsApp: +447459345456

- Email: contact@hampsteadmaintenance.co.uk

- Domain: https://hampsteadmaintenance.co.uk



## Key positioning

- Premium North London maintenance + handyman

- 12 in-house teams (no subcontractors)

- All services, 24/7 availability (including emergency locksmith)

- Jobs of any value accepted



## Stack rules

- Next.js App Router (src/app) + TypeScript

- Tailwind CSS + shadcn/ui components

- Server Components by default; "use client" only when needed

- zod validation for any user input (client + server)

- Use shared constants from src/lib/business.ts everywhere for phone/email/address

- Pricing must be data-driven (src/content/pricing.ts). Prices shown include VAT.



## UX rules (match top competitor sites)

- Mobile-first layout

- Sticky mobile CTA bar: Call / WhatsApp / Quote

- Emergency pages are ultra-short and focused on “Call now”

- Quote form must be frictionless and accessible

- Premium tone in UK English; no “lorem ipsum”

- SEO: metadata per page + canonical, JSON-LD (LocalBusiness, Service, FAQ, BreadcrumbList)

- Performance: use next/image, minimal JS; avoid heavy animation.



## Tracking (phase 2)

Add GA4 hooks + event tracking for:

- click_call, click_whatsapp, submit_quote, click_emergency



## Compliance / clarity

- Prices include VAT.

- Use “from” prices unless fixed.

- Include minimum charge and emergency uplift notes.

```



### 2) `docs/PRODUCT_SPEC.md`

Create this file and paste:



```md

# Hampstead Maintenance — Website Product Spec (V1)



## Core details

Name: Hampstead Maintenance

Address: Unit 3, Palace Court, 250 Finchley Road, Hampstead, London, NW3 6DN

Phone/WhatsApp: +44 7459 345456

Email: contact@hampsteadmaintenance.co.uk

Domain: https://hampsteadmaintenance.co.uk



## Target areas (prestigious focus)

Primary: NW3, NW6, NW8, NW11, N6, N2, NW1, N1, N19



## Services (site must cover)

- Handyman

- Property maintenance (ongoing)

- Emergency locksmith (24/7)

- Emergency plumber (24/7)

- Emergency electrician (24/7)

- Plumbing (non-emergency)

- Electrical (non-emergency)

- Painting & decorating

- Carpentry & joinery

- Plastering

- Tiling

- Bathroom repairs

- Kitchen repairs

- General repairs / make-good / snagging

- Landlord & letting agent maintenance



## Conversion goals

1) Phone calls (esp. emergency)

2) WhatsApp enquiries (often with photos)

3) Quote form submissions

4) Landlord/agent enquiries (repeat work)



## Must-have UX

- Sticky mobile CTA (Call/WhatsApp/Quote)

- Emergency strip always visible on relevant pages

- Trust bar (12 in-house teams, insured, 24/7)

- Clear “prices include VAT” messaging

- Area pages + service pages for SEO, with genuinely unique copy



## Content approach

Keep all content in repo as typed objects under src/content/*



## Pricing

Data-driven pricing table. Prices displayed include VAT.

Use “from” unless fixed and verified. Include minimum charge + emergency uplift.

Maintain a monthly competitor pricing review doc.

```



---



# B) Next.js + Vercel foundation (exact setup)



## B1) Create the Next.js project

Run in terminal:



```bash

npx create-next-app@latest hampsteadmaintenance \

  --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

cd hampsteadmaintenance

```



## B2) Install UI + form + validation + email packages

```bash

# shadcn/ui

npx shadcn@latest init



# forms + validation (shadcn uses these patterns)

npm i react-hook-form @hookform/resolvers zod



# email notifications (server-side)

npm i resend



# optional utilities (recommended)

npm i clsx tailwind-merge lucide-react

```



> We’re keeping content in-repo, so no CMS dependencies.



## B3) Tailwind typography (recommended for premium long-form pages)

```bash

npm i -D @tailwindcss/typography

```



Add to `tailwind.config.ts`:

```ts

plugins: [require("@tailwindcss/typography")],

```



---



# C) Repo structure (optimised for Copilot + SEO + maintainability)



Create this structure:



```

src/

  app/

    layout.tsx

    (marketing)/

      layout.tsx

      page.tsx

      services/

        page.tsx

        [slug]/page.tsx

      areas/

        page.tsx

        [slug]/page.tsx

      pricing/page.tsx

      emergency/

        page.tsx

        locksmith/page.tsx

        plumber/page.tsx

        electrician/page.tsx

      reviews/page.tsx

      about/page.tsx

      contact/page.tsx

      privacy/page.tsx

      cookies/page.tsx

    api/

      lead/route.ts

    robots.ts

    sitemap.ts



  components/

    layout/

      Header.tsx

      Footer.tsx

      StickyMobileCTA.tsx

    sections/

      Hero.tsx

      TrustBar.tsx

      ServiceGrid.tsx

      AreaGrid.tsx

      EmergencyStrip.tsx

      ReviewsPreview.tsx

      FAQ.tsx

    forms/

      QuoteForm.tsx

    seo/

      JsonLd.tsx

      Breadcrumbs.tsx



  content/

    services.ts

    areas.ts

    pricing.ts

    faqs.ts

    testimonials.ts



  lib/

    business.ts

    seo.ts

    validators.ts

    utils.ts

```



---



# D) Lock the NAP + domain into a single source of truth (do this now)



## D1) `src/lib/business.ts`

Create:



```ts

export const BUSINESS = {

  name: "Hampstead Maintenance",

  domain: "hampsteadmaintenance.co.uk",

  siteUrl: "https://hampsteadmaintenance.co.uk",

  address: {

    line1: "Unit 3, Palace Court",

    line2: "250 Finchley Road",

    area: "Hampstead",

    city: "London",

    postcode: "NW3 6DN",

    country: "GB",

    full: "Unit 3, Palace Court, 250 Finchley Road, Hampstead, London, NW3 6DN",

  },

  phone: {

    display: "+44 7459 345456",

    e164: "+447459345456",

    telHref: "tel:+447459345456",

  },

  whatsapp: {

    waNumber: "447459345456",

    waHref: "https://wa.me/447459345456",

  },

  email: {

    display: "contact@hampsteadmaintenance.co.uk",

    mailtoHref: "mailto:contact@hampsteadmaintenance.co.uk",

  },

  availability: {

    is247: true,

    label: "24/7",

  },

  credibility: {

    inHouseTeams: 12,

    noSubcontractors: true,

  },

  serviceArea: {

    primaryPostcodes: ["NW3", "NW6", "NW8", "NW11", "N6", "N2", "NW1", "N1", "N19"],

  },

  geo: {

    // Add verified lat/lng later (don’t guess)

    latitude: null as number | null,

    longitude: null as number | null,

  },

} as const;



export function buildWhatsAppLink(message: string) {

  return `${BUSINESS.whatsapp.waHref}?text=${encodeURIComponent(message)}`;

}



export function buildWhatsAppQuoteLink(params?: {

  service?: string;

  postcode?: string;

  urgency?: string;

}) {

  const lines = [

    `Hi ${BUSINESS.name}, please can I get a quote?`,

    params?.service ? `Service: ${params.service}` : null,

    params?.postcode ? `Postcode: ${params.postcode}` : null,

    params?.urgency ? `Urgency: ${params.urgency}` : null,

  ].filter(Boolean);



  return buildWhatsAppLink(lines.join("\n"));

}

```



---



# E) The “premium competitor” design system (what Copilot should build)



## E1) Brand UI decisions (simple + expensive-looking)

- Base palette: slate/neutral

- Primary button: near-black (`bg-slate-900`)

- WhatsApp: green (`bg-emerald-600`)

- Typography: modern sans serif (Inter) + optional serif headings



## E2) Add fonts in `src/app/layout.tsx`

Use Next built-in font loader:



```tsx

import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import { BUSINESS } from "@/lib/business";



const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });



export const metadata: Metadata = {

  metadataBase: new URL(BUSINESS.siteUrl),

  title: {

    default: "Hampstead Maintenance | 24/7 Handyman & Property Maintenance (NW3)",

    template: "%s | Hampstead Maintenance",

  },

  description:

    "Premium handyman and property maintenance across Hampstead and North London. 24/7 emergency support including locksmith, plumbing and electrical. Prices include VAT.",

  alternates: { canonical: BUSINESS.siteUrl },

};



export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (

    <html lang="en-GB" className={inter.variable}>

      <body className="min-h-screen bg-white text-slate-900 antialiased">{children}</body>

    </html>

  );

}

```



---



# F) Marketing layout + sticky CTA (non-negotiable for conversions)



## F1) `(marketing)/layout.tsx`

Acceptance criteria:

- Header and footer on every marketing page

- Sticky mobile CTA visible on small screens

- Add bottom padding so CTA doesn’t cover content



Copilot prompt to run:

> Implement src/app/(marketing)/layout.tsx with Header, Footer, and StickyMobileCTA. Add padding-bottom on mobile to prevent overlap. Use a centered max width.



---



## F2) Sticky CTA component (you should build exactly this behaviour)

Create `src/components/layout/StickyMobileCTA.tsx`:



```tsx

"use client";



import Link from "next/link";

import { BUSINESS, buildWhatsAppQuoteLink } from "@/lib/business";



export function StickyMobileCTA() {

  return (

    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 backdrop-blur md:hidden">

      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-2 p-2">

        <a

          href={BUSINESS.phone.telHref}

          className="inline-flex items-center justify-center rounded-md bg-slate-900 px-3 py-3 text-sm font-semibold text-white"

        >

          Call

        </a>



        <a

          href={buildWhatsAppQuoteLink()}

          target="_blank"

          rel="noreferrer"

          className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-3 py-3 text-sm font-semibold text-white"

        >

          WhatsApp

        </a>



        <Link

          href="/contact#quote"

          className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-900"

        >

          Quote

        </Link>

      </div>

    </div>

  );

}

```



---



# G) Content-in-repo model (services, areas, pricing) — robust and SEO-friendly



You said **keep content in repo**: best approach is **typed TS content objects** under `src/content/*`.



## G1) `src/content/services.ts`

Create a `Service` type and include premium copy + FAQs.



Copilot prompt:

> Create src/content/services.ts exporting a typed `Service` array. Each service has slug, title, shortSummary, longDescription (UK English), bullets, faqs, emergencyAvailable boolean, and seo fields (title, description). Include services: handyman, property-maintenance, locksmith, plumber, electrician, painting-decorating, carpentry-joinery, plastering, tiling, bathroom-repairs, kitchen-repairs, landlord-maintenance.



**Important:** build copy that sounds premium and local (NW3/NW6/NW11/N6), not generic.



## G2) `src/content/areas.ts`

Area pages are essential for NW3/NW6 etc.



Copilot prompt:

> Create src/content/areas.ts exporting a typed `Area` array with slug, title, postcodePrefix, intro, landmarks (3-6), typicalProperties, and serviceHighlights (service slugs). Add areas: hampstead-nw3, belsize-park-nw3, swiss-cottage-nw3, west-hampstead-nw6, st-johns-wood-nw8, hampstead-garden-suburb-nw11, highgate-n6, east-finchley-n2, primrose-hill-nw1, dartmouth-park-n19.



---



# H) Pricing system (includes VAT + “match North London” workflow)



You required: “prices must match North London”. The only correct way is:

1) **Build pricing as data** (not hardcoded)

2) **Maintain a monthly review** (documented)

3) **Expose “last verified” internally** (optional public display)



## H1) Create `docs/PRICING_RESEARCH.md`

Paste this template:



```md

# Pricing Research — Hampstead Maintenance (North London)



## Rule

Website pricing must reflect current North London market rates. Prices displayed include VAT.

Review and update monthly (or immediately after major supplier/cost changes).



## How to verify

Collect 10+ sources per category:

- Local competitor websites in NW3/NW6/NW11/N6

- TrustATrader / Checkatrade profiles showing rates

- Google Ads landing pages for locksmith/plumber (often show call-out)

- Any local trade associations price guides (secondary)



## Spreadsheet columns

- Date checked

- Category (Handyman/Locksmith/Plumbing/Electrical/Decorating)

- Competitor name

- URL

- Price type (hourly / call-out / minimum / emergency)

- Price shown

- VAT included? (yes/no/unclear)

- Minimum charge?

- Notes (parking, congestion, parts extra)

- Screenshot saved? (yes/no)

- Decision (update our price? yes/no)

- Our website item key (matches src/content/pricing.ts)



## Website update procedure

1) Update src/content/pricing.ts values

2) Update `lastVerifiedDate` for modified items

3) Run build + check Pricing page output

4) Deploy to Vercel

5) Record changes in CHANGELOG section below



## CHANGELOG

- YYYY-MM-DD: updated handyman hourly rate from £X to £Y (VAT inc). Reason: market median shift.

```



## H2) Create `src/content/pricing.ts` (VAT included)

You’ll start with **baseline “typical North London”** values and then adjust once you do your competitor spreadsheet.



Copilot prompt:

> Create src/content/pricing.ts exporting typed PricingCategory/PriceItem objects. All prices must be labelled “VAT included”. Use “from” and ranges where appropriate. Include minimum charge notes and emergency uplift notes. Add lastVerifiedDate fields.



If you want a starter you can paste today, use this **as placeholders only** (you MUST verify against your research sheet):



```ts

export type PriceUnit = "hour" | "half-day" | "day" | "call-out" | "from" | "fixed";



export type PriceItem = {

  key: string;

  name: string;

  unit: PriceUnit;

  priceFrom?: number; // VAT inc

  priceTo?: number;   // VAT inc

  fixedPrice?: number; // VAT inc

  notes?: string[];

  lastVerifiedDate: string; // YYYY-MM-DD

};



export type PricingCategory = {

  category: "Handyman" | "Locksmith" | "Plumbing" | "Electrical" | "Decorating";

  intro?: string;

  items: PriceItem[];

  categoryNotes?: string[];

};



export const PRICING: PricingCategory[] = [

  {

    category: "Handyman",

    intro: "General repairs, installations and make-good work across North London. Prices include VAT.",

    categoryNotes: [

      "Minimum charge may apply (typically 1 hour).",

      "Materials/parts are charged separately unless stated.",

      "Parking/permits may be charged at cost where required.",

    ],

    items: [

      {

        key: "handyman-hourly",

        name: "Handyman hourly rate",

        unit: "hour",

        priceFrom: 85,

        priceTo: 110,

        notes: ["VAT included.", "Best for small jobs and general repairs."],

        lastVerifiedDate: "2026-01-02",

      },

      {

        key: "handyman-half-day",

        name: "Half-day (up to 4 hours)",

        unit: "half-day",

        priceFrom: 320,

        priceTo: 420,

        notes: ["VAT included.", "Good for a list of small jobs in one visit."],

        lastVerifiedDate: "2026-01-02",

      },

      {

        key: "handyman-day",

        name: "Full day (up to 8 hours)",

        unit: "day",

        priceFrom: 600,

        priceTo: 800,

        notes: ["VAT included.", "Ideal for multiple rooms / larger punch-lists."],

        lastVerifiedDate: "2026-01-02",

      },

    ],

  },

  {

    category: "Locksmith",

    intro: "24/7 emergency locksmith cover in NW3, NW6, NW8, NW11, N6 and nearby. Prices include VAT.",

    categoryNotes: [

      "Emergency / out-of-hours pricing depends on time and complexity.",

      "Lock parts are extra and depend on lock type (euro cylinder, mortice, multi-point, etc.).",

    ],

    items: [

      {

        key: "locksmith-callout-day",

        name: "Emergency call-out (daytime)",

        unit: "call-out",

        priceFrom: 120,

        priceTo: 180,

        notes: ["VAT included.", "Includes attendance and initial assessment."],

        lastVerifiedDate: "2026-01-02",

      },

      {

        key: "locksmith-callout-night",

        name: "Emergency call-out (evening/night)",

        unit: "call-out",

        priceFrom: 180,

        priceTo: 280,

        notes: ["VAT included.", "Out-of-hours uplift applies."],

        lastVerifiedDate: "2026-01-02",

      },

      {

        key: "lock-replacement-from",

        name: "Lock replacement (supply & fit) — from",

        unit: "from",

        priceFrom: 145,

        notes: ["VAT included.", "Final price depends on lock brand/type and security rating."],

        lastVerifiedDate: "2026-01-02",

      },

    ],

  },

  {

    category: "Plumbing",

    intro: "24/7 emergency plumbing and planned repairs. Prices include VAT.",

    items: [

      {

        key: "plumbing-hourly",

        name: "Plumber hourly rate",

        unit: "hour",

        priceFrom: 95,

        priceTo: 130,

        notes: ["VAT included.", "Minimum charge may apply."],

        lastVerifiedDate: "2026-01-02",

      },

      {

        key: "plumbing-emergency-callout",

        name: "Emergency call-out — from",

        unit: "from",

        priceFrom: 150,

        notes: ["VAT included.", "Time-of-day and severity affect pricing."],

        lastVerifiedDate: "2026-01-02",

      },

    ],

  },

  {

    category: "Electrical",

    intro: "24/7 emergency electrical support plus scheduled jobs. Prices include VAT.",

    items: [

      {

        key: "electrical-hourly",

        name: "Electrician hourly rate",

        unit: "hour",

        priceFrom: 95,

        priceTo: 140,

        notes: ["VAT included.", "Minimum charge may apply."],

        lastVerifiedDate: "2026-01-02",

      },

      {

        key: "electrical-emergency-callout",

        name: "Emergency call-out — from",

        unit: "from",

        priceFrom: 160,

        notes: ["VAT included.", "Out-of-hours uplift may apply."],

        lastVerifiedDate: "2026-01-02",

      },

    ],

  },

  {

    category: "Decorating",

    intro: "High-quality preparation and finishing for homes and rental properties. Prices include VAT.",

    items: [

      {

        key: "decorating-day",

        name: "Decorator day rate (up to 8 hours)",

        unit: "day",

        priceFrom: 600,

        priceTo: 850,

        notes: ["VAT included.", "Materials depend on specification."],

        lastVerifiedDate: "2026-01-02",

      },

    ],

  },

];

```



> Again: treat those as **starter placeholders** until you do the competitor research sheet.



---



# I) Pages to build (ordered for fastest lead generation)



## I1) Home page (NW3-first)

**Goal:** convert immediately (call/WhatsApp/quote), and build trust.



Sections:

- Hero: “24/7 Property Maintenance & Handyman in Hampstead (NW3)”

- CTAs: Call / WhatsApp / Get Quote

- Trust bar: 12 in-house teams + prices inc VAT + 24/7

- Services grid

- Areas covered (NW3/NW6/NW11/N6 etc.)

- Testimonials preview (until Google reviews exist)

- Emergency strip

- Quote CTA



Copilot prompt:

> Build src/app/(marketing)/page.tsx with premium sections: Hero, TrustBar, ServiceGrid, AreaGrid, ReviewsPreview, EmergencyStrip, and a final CTA. Use BUSINESS for phone/whatsapp. Keep copy focused on NW3 Hampstead + North London.



## I2) Emergency hub + 3 emergency pages (locksmith/plumber/electrician)

These pages should feel like **PPC landing pages** (short, urgent, immediate CTAs).



Copilot prompt:

> Build emergency pages at /emergency, /emergency/locksmith, /emergency/plumber, /emergency/electrician. Above the fold: “Call now” and “WhatsApp” buttons. Add FAQs + FAQPage schema. Mention prices include VAT and that services are 24/7.



## I3) Services hub + service detail pages (dynamic)

- `/services` = grid of services

- `/services/[slug]` = SEO + conversion



Implementation notes:

- Use `generateStaticParams()` from `src/content/services.ts` so pages are prebuilt

- Use `generateMetadata()` per service (title/desc)



Copilot prompt:

> Implement /services and /services/[slug] using src/content/services.ts. Add generateStaticParams and generateMetadata. Render service hero, bullets, pricing teaser linking to /pricing, FAQs, and CTAs. Add Service schema + BreadcrumbList.



## I4) Areas hub + area detail pages (dynamic)

Same approach:

- `/areas` lists target prestigious areas

- `/areas/[slug]` includes unique local copy, landmarks, typical property types, and links into service pages.



Copilot prompt:

> Implement /areas and /areas/[slug] using src/content/areas.ts. Add generateStaticParams + generateMetadata. Add internal links to service pages and a local CTA. Include a map embed placeholder (no Google link yet). Add BreadcrumbList schema.



## I5) Pricing page (data-driven, VAT inc)

Copilot prompt:

> Implement /pricing reading from src/content/pricing.ts. Group categories with accordion sections. Show “Prices include VAT” badge. Include minimum charge and emergency uplift disclaimers. Add an FAQ section.



## I6) Contact page (conversion page)

- Show NAP + click to call + WhatsApp + email

- Map placeholder + instructions to add embed later

- Quote form anchored `#quote`



Copilot prompt:

> Build /contact with business details from BUSINESS, a map placeholder, and a QuoteForm anchored at #quote. Add LocalBusiness schema. Ensure the phone number is click-to-call and WhatsApp opens with a prefilled message.



---



# J) Forms + lead capture (production-grade)



## J1) Validation schema (`src/lib/validators.ts`)

Copilot prompt:

> Create zod schemas for quote form input in src/lib/validators.ts. Fields: service, urgency, postcode, description, name, phone, email optional, preferredContactMethod. Add UK postcode validation. Export types.



## J2) Quote form UI (`src/components/forms/QuoteForm.tsx`)

Use shadcn patterns + react-hook-form.



Acceptance criteria:

- Fully accessible (labels)

- Good mobile spacing

- Clear submit success state

- On success: show “Call now / WhatsApp now” buttons



Copilot prompt:

> Create QuoteForm using react-hook-form + zodResolver with shadcn/ui. Submit to /api/lead as JSON. Add loading state, success message, and error handling. Keep it premium and minimal.



## J3) Lead API route (`src/app/api/lead/route.ts`)

Even without a CRM, you need notifications.



**Phase 1 (fast):** send email via Resend only  

**Phase 2:** store in DB (Supabase) + analytics attribution



Because you didn’t mention DB credentials yet, do Phase 1 now.



Copilot prompt:

> Implement POST /api/lead that validates input with zod and sends a nicely formatted email via Resend to contact@hampsteadmaintenance.co.uk, with reply-to set to the customer email if provided. Return JSON ok. Add basic rate limiting (simple in-memory) and bot protection placeholders.



### Required env var (Vercel)

- `RESEND_API_KEY=...`



---



# K) SEO (the parts that make you outrank competitors)



## K1) Build metadata routes: `sitemap.ts` + `robots.ts`

Next.js App Router supports these natively.



### `src/app/robots.ts` (Copilot can generate)

Rules:

- Allow all

- Point to sitemap

- Later add admin/private paths if any



Copilot prompt:

> Create src/app/robots.ts that allows all user agents and references the sitemap at https://hampsteadmaintenance.co.uk/sitemap.xml.



### `src/app/sitemap.ts`

This must include:

- Home

- Services hub + each service page

- Areas hub + each area page

- Pricing, Contact, Emergency pages



Copilot prompt:

> Create src/app/sitemap.ts that returns a Sitemap array including static routes plus dynamic routes from src/content/services.ts and src/content/areas.ts. Use BUSINESS.siteUrl as base.



## K2) JSON-LD schema helpers

Even without Google reviews, you can still add:

- LocalBusiness schema

- Service schema

- FAQPage schema

- BreadcrumbList



Copilot prompt:

> Create schema helper functions in src/lib/seo.ts for LocalBusiness, Service, BreadcrumbList, and FAQPage JSON-LD. Use BUSINESS constants. Render them with a JsonLd component.



---



# L) “No Google link yet” — what to do (so you still look top-tier)

Top competitors show Google reviews. Until you have them:



## L1) Build a Testimonials system (manual, but credible)

Create `src/content/testimonials.ts`:

- First name + initial (e.g., “Sarah T.”)

- Area (e.g., “Hampstead, NW3”)

- Short quote

- Service tag (“Locksmith”, “Handyman”)

- Date (month/year)



Copilot prompt:

> Create src/content/testimonials.ts and a ReviewsPreview component that renders 6 testimonials in a premium carousel/grid. Also build /reviews page with testimonials and FAQ. Add Review schema only if you can support it; otherwise just render testimonials without claiming Google.



## L2) Strong recommendation (lead gen + trust)

You should set up Google Business Profile ASAP because it’s one of the highest ROI lead sources in NW3/NW6.



When you have it, we’ll update:

- `sameAs: [googleBusinessProfileUrl]`

- embed reviews widget or fetch reviews via approved method

- add star rating schema (only if compliant)



---



# M) Vercel deployment (exact checklist)



## M1) Create Vercel project

- Import GitHub repo

- Framework: Next.js (auto-detected)



## M2) Add environment variables

At minimum:

- `RESEND_API_KEY`



Recommended now (even if blank initially):

- `NEXT_PUBLIC_SITE_URL=https://hampsteadmaintenance.co.uk`



## M3) Add domain

- Add `hampsteadmaintenance.co.uk`

- Add `www.hampsteadmaintenance.co.uk` (redirect to non-www or vice versa)

- Decide canonical: I recommend **non-www** canonical: `https://hampsteadmaintenance.co.uk`



---



# N) The Copilot “build script” (copy/paste prompts in this order)



Use these prompts **one at a time** (this keeps output clean and avoids Copilot going off-spec):



1) **Foundation**

   - “Create src/lib/business.ts with our NAP, domain, phone/whatsapp/email, and helper functions to build WhatsApp links.”



2) **Root layout**

   - “Implement src/app/layout.tsx with metadataBase from BUSINESS.siteUrl and premium default metadata.”



3) **Marketing layout**

   - “Implement src/app/(marketing)/layout.tsx with Header, Footer, StickyMobileCTA.”



4) **Header**

   - “Build src/components/layout/Header.tsx: premium nav, click-to-call phone, emergency link, quote button.”



5) **Footer**

   - “Build Footer with full address, phone, email, services links, areas (postcodes), and legal links.”



6) **Content files**

   - “Create src/content/services.ts with typed services + FAQs + SEO fields.”

   - “Create src/content/areas.ts with typed areas + landmarks + SEO fields.”

   - “Create src/content/pricing.ts with VAT-included pricing items and lastVerifiedDate.”



7) **Home page**

   - “Build homepage with Hero/TrustBar/Services/Areas/ReviewsPreview/EmergencyStrip/CTA.”



8) **Emergency pages**

   - “Build /emergency + /emergency/locksmith + /emergency/plumber + /emergency/electrician.”



9) **Services pages**

   - “Build /services and /services/[slug] with generateStaticParams and schema.”



10) **Areas pages**

   - “Build /areas and /areas/[slug] with internal linking and schema.”



11) **Pricing page**

   - “Build /pricing reading pricing.ts with accordions and disclaimers.”



12) **Contact page**

   - “Build /contact with NAP, map placeholder, and quote form.”



13) **Forms + API**

   - “Create validators.ts zod schema”

   - “Create QuoteForm component”

   - “Create /api/lead route using Resend”



14) **SEO routes**

   - “Create robots.ts and sitemap.ts using content slugs.”



15) **QA improvements**

   - “Add 404 page, loading states, basic error boundaries”

   - “Run Lighthouse improvements (image sizing, headings, aria labels)”



---



# O) One final critical thing: pricing “matching North London”

You now have:

- a pricing data file (`src/content/pricing.ts`)

- a documented research workflow (`docs/PRICING_RESEARCH.md`)



To truly meet your requirement, your next action is:

1) Do the competitor pricing spreadsheet for **NW3/NW6/NW11/N6**  

2) Update the numbers in `src/content/pricing.ts`  

3) Keep them current monthly



If you paste me **your real internal rate card** (even rough), I’ll rewrite the pricing file so it’s aligned with your actual offer and still positioned as premium.



---



## If you want, I can generate your content files next (ready-to-paste)

Say: **“Generate services.ts, areas.ts, testimonials.ts and homepage copy”** and confirm:

1) Do you want the brand tone more **“luxury calm”** (high-end homeowners) or **“fast emergency response”** (more urgent)?  

2) Are you happy to say “**same-day**” or only “**rapid response**”? (Important legally/credibility-wise.)

