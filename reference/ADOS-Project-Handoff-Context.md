# ALIANZ CANINE WORLDWIDE — ADOS PROJECT

## Handoff Context Document

**CONFIDENTIAL**

*This document contains full project scope, commercial terms, technical architecture, and current status for the Alianz/ADOS engagement. It is designed as a complete handoff package for project continuity.*

| | |
|---|---|
| **Client** | Alianz Canine Worldwide (ACW) |
| **Project** | ADOS (Alianz Digital Operating System) |
| **Delivering Firm** | Ágora Business Works — Tijuana, MX |
| **Project Lead** | Mario Forastieri, Founder & PM |
| **Date** | April 2026 |
| **Document Version** | 1.0 — Initial Handoff |

---

## 1. THE CLIENT

Alianz Canine Worldwide (ACW) is an international canine federation operating across approximately 90 countries. The organization serves breeders, judges, handlers, and dog enthusiasts through pedigree registration, health certifications, championship titles, and sanctioned events.

ACW holds partnerships with recognized veterinary institutions (including UNAM in Mexico) and aligns with European Union directives on animal welfare. Their member base spans Latin America, Europe, Asia, and Africa. The current president is leading a modernization push that ADOS represents.

### 1.1 The Problem ADOS Solves

Before ADOS, Alianz had five critical issues limiting its growth and threatening its viability:

| Problem | Reality |
|---|---|
| **Fragmentation** | Each country operates independently with no central visibility. No standardized system, no shared database, no unified processes. |
| **$0 Revenue** | Everything is free. The organization generates zero digital income. All administrative work is donated or manual. |
| **No Data** | HQ cannot confirm how many members actually exist worldwide. No centralized member database. |
| **No Control** | If a national club leaves Alianz, it takes all member data and pedigree records with it. HQ has no leverage. |
| **Manual Processes** | Operations run on Excel, paper forms, and WhatsApp. No professional infrastructure. |

> The core insight: Without data, Alianz cannot grow. Without revenue, Alianz cannot invest. Without evolution, Alianz cannot compete. ADOS addresses all three simultaneously.

---

## 2. PROJECT SCOPE & ARCHITECTURE

ADOS (Alianz Digital Operating System) is a three-tier platform that connects every level of the Alianz organization — from individual members to national clubs to global headquarters — into a unified digital ecosystem.

| Tier | Name | Users | Purpose |
|---|---|---|---|
| **1** | **Alianz Virtual** | Members, breeders, judges, handlers | Complete digital experience: pedigrees, events, university, community, messaging, gamification |
| **2** | **Business in a Box** | National clubs, delegations | Full club management suite: CRM, payments, events, marketing, website — pre-configured |
| **3** | **Centro de Mando** | President, HQ staff | Global dashboard (God Mode), mass communications (Teléfono Rojo), centralized data (Bóveda Digital) |

### 2.1 Tier 1: Alianz Virtual

The member-facing app and portal. This is what every breeder, handler, judge, and member interacts with daily. Built as a mobile-first web app based on the GoHighLevel white-label app, with native feel on iOS and Android.

#### Core Features

| Feature | Description |
|---|---|
| **Digital Vault (Virtual Kennel)** | Register puppies, view dogs and pedigrees with QR-verified digital documents, transfer ownership between members, request printed certificates. The pedigree uses SHA-256 hash + OpenTimestamps Bitcoin anchoring for verification — marketed as the safest pedigree in the world. |
| **Alianz University** | Online courses, official certifications, progress tracking, digital certificates. Includes a marketplace where members can create and sell their own courses (50% revenue split). |
| **Community Feed** | Social media-style feed with posts, photos, likes, comments. Groups organized by breed. Marketplace section for dogs and services. |
| **Events Calendar** | Global event calendar with filters (shows, seminars, local events). Online registration, payment, and automatic catalog generation. |
| **Messaging** | Direct chat between members, clubs, and HQ. Push notifications across the network. |
| **Member Profile** | Badges, certifications, championship titles, dogs owned. Functions as professional verification within the canine community. |
| **Gamification** | Points, rankings, badges, achievement unlocks. Designed for engagement and retention. |

### 2.2 Tier 2: Business in a Box

Everything a national club needs to operate professionally, pre-configured and ready to use. The pitch to club presidents: "It's like having a robot secretary that does everything."

#### Included Capabilities

| Capability | Description |
|---|---|
| **Full CRM** | All member data centralized. Status tracking: who paid, who owes, who is active. |
| **Automatic Billing** | Memberships auto-charge. Renewal reminders and overdue notices are automated. |
| **Events & Shows** | Create events, manage registrations and payments, auto-generate catalogs, publish live results. |
| **Marketing Suite** | Mass email, SMS, WhatsApp. Club website included. Landing pages for events and member acquisition. |
| **Website Builder** | Each club gets a branded website that is easy to update without technical knowledge. |

### 2.3 Tier 3: Centro de Mando

The command center for the Alianz president and HQ staff. Three components:

#### God Mode — Global Dashboard

Live world map with activity from all countries. Revenue tracker with trends. Club Health Score showing which clubs are active, inactive, or at risk. Global member counter by country and type. Automatic alerts for non-payment, low activity, or anomalies.

#### Teléfono Rojo — Direct Communications

Multi-channel mass communication to 100,000+ members across 90 countries in one click. Channels include push notifications, email campaigns, SMS, WhatsApp, and AI-powered automated calls. Advanced capabilities: segmentation (by member type, country, payment status), scheduling, automated triggers (welcome, birthday, renewal), personalization with dynamic variables, delivery tracking, and multi-language support.

#### Bóveda Digital — Data Vault

Centralized repository of all organizational data. All pedigrees in one place. If a club leaves Alianz, HQ retains all pedigree records and member data (this is the critical control mechanism). QR-based anti-fraud verification. Enterprise-level encryption.

---

## 3. TECH STACK

The platform is built on a combination of no-code/low-code infrastructure and custom integrations. This approach was chosen to maximize speed to market while keeping the team lean.

| Technology | Role | Details |
|---|---|---|
| **GoHighLevel (GHL)** | Core platform backbone | CRM, client portals, websites, funnels, payments (via Stripe), email/SMS/WhatsApp, automations, LMS, white-label mobile app. This is the engine that powers all three tiers. Alianz Virtual runs on the GHL white-label app. Ágora operates on the $497/month SaaS Pro plan, which enables white-labeling, sub-account management, and usage rebilling with markup. |
| **Airtable** | Pedigree database backend | Relational database storing all pedigree data with API and webhook integration. Connects to GHL via custom automations. Chosen for its flexibility with relational data structures (dog → parents → grandparents chains). |
| **Stripe** | Payment processing | Handles all financial transactions across countries. Franchisee fees, member subscriptions, event registrations, course purchases. Multi-currency support. Also powers the GHL SaaS billing — sub-account subscription charges and usage rebilling both flow through Stripe. |
| **SHA-256 + OpenTimestamps** | Pedigree verification | Each pedigree document is hashed (SHA-256) and anchored to the Bitcoin blockchain via OpenTimestamps. Produces a QR code that anyone can scan to verify authenticity. Marketed as blockchain-verified without the cost of full blockchain infrastructure. |
| **Custom HTML/JS** | Demo prototype | A single-page mobile web app was built for the presidential demo showing the Alianz Virtual experience. Light theme, gold tile grid, teal accents, navy headers, Spanish UI. |

> Architecture note: The blockchain-style pedigree verification is a deliberate strategic choice. It delivers the marketing claim ("safest pedigree in the world") legitimately, using SHA-256 hashing + Bitcoin anchoring, without the expense of building on actual blockchain infrastructure. The QR scan experience is the differentiator, not the underlying tech.

### 3.1 Under Consideration

**Odoo ERP:** Identified as a potential white-label ERP solution to integrate with the GHL stack for more complex financial and operational reporting. Not yet implemented — would add a layer for inventory, multi-entity accounting, and advanced reporting if the client's needs grow beyond what GHL provides.

**US LLC (Stripe Atlas):** Evaluated for handling multi-country franchisee payments as Alianz scales. Currently deferred — recommendation is to wait until non-LATAM clients or multi-country payment complexity justifies the compliance burden and tax implications.

---

## 4. COMMERCIAL TERMS

### 4.1 Original Deal Structure

The original proposal (January 2026) included a $5,500/year technology license, $1,000/month maintenance, waived setup fees, and a 33% commission on all digital transactions processed through ADOS. Ágora absorbed ~$161,550 USD in development costs (~1,374 hours at a ~$90/hr blended rate), with the expectation that the 33% commission on projected annual revenue of $904K–$1.8M would recover the investment within 4–6 months.

### 4.2 Renegotiated Deal (Current Terms)

The client negotiated away the entire commission structure. The deal was restructured to a flat-rate model:

| Item | Amount |
|---|---|
| **Monthly Development Retainer** | $104,000 MXN/month |
| **GHL Sub-Account Fee (per franchisee)** | $97 USD/month |

That's it. No revenue split on transactions. No commission on memberships, registrations, events, certifications, marketplace, or sponsorships. Ágora lost all participation in the platform's revenue upside.

### 4.3 How Ágora Makes This Work

The $104,000 MXN/month retainer covers the development and maintenance work. The real margin opportunity comes from the GHL sub-account and reselling model:

**$97 USD/month per sub-account** — Each national club or franchisee that comes online pays this flat fee for their GHL-powered platform. As the number of countries grows, this scales.

**GHL usage rebilling with markup** — This is where the real upside lives. GoHighLevel's SaaS Pro plan ($497/month) allows the agency to rebill every piece of usage that sub-accounts consume, with a configurable markup on top. Every time a club sends an email, an SMS, a WhatsApp message, makes a phone call, or uses any AI feature through the platform, GHL charges Ágora the wholesale rate and Ágora charges the sub-account a marked-up rate. The sub-account's credit card is billed automatically through Stripe. Specifically, the resellable usage includes:

| Usage Type | How It Works |
|---|---|
| **Email sends** | GHL charges a fraction of a cent per email at wholesale. Ágora sets a markup multiplier (e.g., 2x, 3x) — the sub-account pays the marked-up rate automatically. |
| **SMS / text messages** | Charged per segment at GHL wholesale rates. Ágora sets the markup — sub-accounts are rebilled automatically per message sent. |
| **Phone calls** | Per-minute charges at wholesale. Marked up and rebilled to sub-accounts. |
| **WhatsApp messages** | Flat monthly fee per sub-account to enable the service. Ágora can resell at a higher price and keep the difference. |
| **AI features (AI Employee, chatbots, etc.)** | GHL offers AI tools on a per-unit or unlimited basis. These can be resold with markup — clubs using AI chatbots, automated responses, or AI-powered booking all generate usage revenue. |
| **Branded mobile app** | GHL charges $49/month wholesale for a white-labeled client portal app. Can be resold at any price (e.g., $99/month). |
| **Domain purchases** | Clients can buy domains through the platform. Ágora keeps the markup difference. |

The markup is configured via a slider in the GHL SaaS Configurator and applies automatically to all new and existing sub-accounts. No manual invoicing — Stripe handles everything.

> The more active the clubs are (sending communications, running events, using AI tools), the more usage revenue Ágora generates. This creates an incentive to build a platform that clubs actually use heavily, which aligns with the client's goals.

---

## 5. CURRENT STATUS

As of April 2026, the project is in early stages. The strategic and sales groundwork is complete; the actual platform build is pending.

### 5.1 Completed

| Deliverable | Status & Notes |
|---|---|
| **Strategic Proposal** | Full proposal document delivered and presented to the Alianz president. Covers all three tiers, revenue model, projections, timeline, and objection handling. |
| **Conference Keynote** | Mario served as keynote speaker at the Alianz world franchisee conference, presenting ADOS as the implementation of the president's modernization vision. Apple-style presentation: simplicity, narrative arc, emotional resonance, no pricing discussion on stage. |
| **Mobile Demo Prototype** | Working single-page HTML web app (iPhone-optimized PWA) built for the presidential demo. Includes home screen, digital pedigree with QR, events calendar, Alianz University, community feed, and member profile. Light theme with gold tiles, teal accents, navy headers, Spanish UI. Owner name in demo: "Ricardo." |

### 5.2 Everything Else Is Pending

| Item | What's Needed |
|---|---|
| **⚠️ GLOBAL WEBSITE** | **TOP PRIORITY — should have been done already.** The main Alianz Canine Worldwide website needs to be built and launched. This is the public face of the organization and the entry point for everything else. Blocking all downstream adoption. |
| **Pedigree Verification System** | SHA-256 hash + OpenTimestamps Bitcoin anchoring has been designed conceptually but needs to be built and integrated. Airtable backend for pedigree data needs to be set up with the relational structure (dog → parents → grandparents). |
| **GHL Sub-Account Setup** | The actual GoHighLevel infrastructure — branding, domains, sub-account structure for franchisees — needs to be configured for production use. The demo was a prototype; the production environment requires full buildout. |
| **Alianz Virtual App (Production)** | The white-label GHL mobile app needs to be configured, branded, and submitted to App Store and Play Store. This is the Tier 1 member experience. |
| **Business in a Box Templates** | Tier 2 club templates, workflows, and automations need to be built in GHL. Pre-configured onboarding flows, billing automations, event management templates. |
| **Centro de Mando Build** | The Tier 3 dashboard (God Mode), mass communication system (Teléfono Rojo), and centralized data vault (Bóveda Digital) need to be built. These are the most complex components. |
| **Airtable ↔ GHL Integration** | The pedigree database (Airtable) needs to be connected to the GHL portal via APIs and webhooks for real-time data sync. |
| **Pilot Country Selection** | 3–5 countries with committed leadership need to be selected for the initial rollout, with data migration and onboarding planned. |
| **Stripe Multi-Country Setup** | Payment processing needs to be configured for international transactions across participating countries. |
| **Terms & Conditions Update** | Legal agreement needs to be revised to reflect the renegotiated flat-rate terms and sub-account model. |

---

## 6. TIMELINE & PRIORITIES

There is no formal phased timeline. The original proposal outlined a 12-month rollout but that was built around a deal structure that no longer exists. The retainer is running, which means every month without deliverables is burned money.

### Priority Order

1. **🔴 GLOBAL WEBSITE — This is late. Needs to be live immediately.** The main Alianz Canine Worldwide website built on GHL. This is the front door for the entire organization and the first thing any club, member, or prospect sees. Nothing else matters until this is up.
2. **GHL production environment** — Branding, domains, master account and sub-account structure, SaaS mode configuration, rebilling/markup settings in Stripe.
3. **Alianz Virtual (Tier 1)** — Configure the white-label app, build the core member experience, submit to app stores.
4. **Pedigree system** — Airtable backend + GHL integration + QR verification.
5. **Business in a Box (Tier 2)** — First franchisee sub-account template, ready to clone for pilot countries.
6. **Pilot deployment** — Onboard 3–5 countries, migrate their data, test with real events.
7. **Centro de Mando (Tier 3)** — Build once there's real data flowing from pilot countries.
8. **Scale** — Roll out to remaining countries, optimize usage rebilling revenue.

---

## 7. KEY RISKS & WATCHOUTS

| Risk | Severity | Details |
|---|---|---|
| **Franchisee Adoption** | 🟠 HIGH | The platform requires national clubs to adopt ADOS. Many clubs have never paid for anything. The forcing function is that Alianz recognition requires ADOS adoption — but enforcement is a political decision by the president. |
| **Solo Operator** | 🟠 HIGH | Mario is currently the only person on this project. Everything — client relationship, GHL configuration, integrations, design, strategy — runs through one person. Any disruption (illness, other client demands, burnout) creates immediate delivery risk. |
| **GHL Platform Dependency** | 🟡 MEDIUM | The entire stack depends on GoHighLevel. Pricing changes, feature deprecation, or platform instability would affect all three tiers. No mitigation plan currently exists. |
| **Multi-Country Payments** | 🟡 MEDIUM | Stripe works internationally but each country has different regulations, tax implications, and currency requirements. At scale, this becomes complex. |
| **Data Migration Quality** | 🟡 MEDIUM | Many clubs have decades of pedigree records in Excel, paper, or proprietary systems. Migration quality will vary dramatically by country. |
| **Flat-Rate Economics** | 🟡 MEDIUM | The $104,000 MXN/month retainer is fixed regardless of how much work the project demands. If the build takes longer than expected or the client's scope creeps, the effective hourly rate drops fast. The sub-account fees ($97 USD/mo each) and usage rebilling only generate meaningful revenue once a critical mass of countries are onboarded and actively using the platform. |

---

*Ágora Business Works • Tijuana, MX • CONFIDENTIAL*
