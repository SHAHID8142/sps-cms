---
name: sps-cms
description: >
  Universal, host-agnostic, and industry-polymorphic Visual & Collection CMS architect
  for modern web stacks (Astro, Next.js). Features self-enforcing repository project lock
  (GEMINI.md / AGENTS.md / CLAUDE.md), mandatory host & database discovery
  (cPanel/Shared, VPS/Docker, Vercel, Cloudflare Pages/D1, Node/PM2), zero-SaaS self-contained
  DB adapters (MySQL, PostgreSQL, SQLite, LibSQL, D1), universal bulk collection engine
  (Packages, Products, Real Estate, Doctors, Menu Items, Case Studies, Courses, etc.),
  WordPress/Shopify-grade dual-engine admin (/admin + In-Context Live Editor), single source
  of truth auto-sync, host-native media uploads, and strict roundtrip verification.
---

# /sps-cms (Universal, Host-Agnostic & Self-Locking)

`/sps-cms` is the authoritative, self-enforcing architecture, implementation, and verification standard for building **high-performance, non-technical client-friendly CMS systems** in modern frameworks (**Astro**, **Next.js**) on **ANY hosting platform** and for **ANY business industry**.

Read [METHOD-CARD.md](METHOD-CARD.md) at the start of every CMS session.

Current skill version: read `VERSION` and record in project memory.

---

## Core Laws of SPS-CMS

### 0. The Project Lock & Permanent Memory Law (Self-Enforcing Law)
- Once `/sps-cms` is run in a project even once:
  1. The agent MUST create `./.sps-cms/lock.json` and `./.sps-cms/cms-architecture.md`.
  2. The agent MUST inject the **SPS-CMS Mandatory Lock** into all root mirror files (`GEMINI.md`, `AGENTS.md`, `CLAUDE.md`, `.cursorrules`, `.windsurfrules`).
  3. **Permanent Enforcement:** In any future conversation or task in this repository, whenever the user mentions "CMS", "admin", "dashboard", "products", "packages", "services", "edit text", or "database", the agent **MUST ALWAYS activate and follow `/sps-cms`**. The agent is strictly forbidden from reverting to naive, disconnected forms or third-party SaaS schemas.

### 1. Mandatory Hosting & Infrastructure Discovery Law (No Assumptions)
- The agent MUST NEVER assume a specific host or database.
- Before writing any CMS code, the agent MUST grill and confirm with the user:
  1. **Deploy Target:** Shared/cPanel (Hostinger, Namecheap, cPanel), VPS/Dedicated (PM2, Docker, Nginx), Serverless/Edge (Cloudflare Pages, Vercel, Netlify), PaaS (Railway, Render).
  2. **Database Engine:** Native MySQL/MariaDB, PostgreSQL, Embedded SQLite, Cloudflare D1, or Turso/LibSQL.
  3. **Media Storage:** Local server disk (`/public/uploads`), Cloudflare R2, or S3-compatible bucket.
  4. **Content Inventory:** What bulk collections exist (e.g. Properties, Tours, Courses, Doctors, Dishes, Projects, Products)?

### 2. Zero Forced SaaS / 100% Client-Owned Infrastructure Law
- All data and media MUST reside on infrastructure paid for and owned by the client.
- No forced monthly subscriptions (e.g. Sanity/Contentful) and no developer-held database lock-in.

### 3. Universal Polymorphic Collection Law (Industry Agnostic)
- The CMS is not restricted to predefined entities. It can model **ANY bulk/repeat data** for any industry:
  - *Real Estate:* Properties, Floor Plans, Agents, Amenities.
  - *Healthcare / Clinic:* Doctors, Specialties, Services, Schedules.
  - *Restaurant / Cafe:* Menu Categories, Dishes, Specials, Ingredients.
  - *Travel & Tourism:* Tour Packages, Destinations, Itineraries, Guides.
  - *SaaS / Digital:* Features, Changelog, Case Studies, Pricing Tiers.
  - *E-Commerce & Retail:* Products, Categories, Variants, Inventory.
  - *Education:* Courses, Lessons, Instructors, Batches.
  - *Agency & Portfolio:* Projects, Case Studies, Team Members, Testimonials.
- Any collection defined in `cms.config.ts` automatically generates its dedicated sidebar tab, searchable Data Table, Add/Edit form, auto-slug, and frontend query.

### 4. The Dual-Engine Admin Law (`/admin`)
Every site provides two complementary editing paradigms:
- **Engine A (Visual In-Context Page Editor):** For singleton page copy, hero headlines, about text, contact info. Client clicks text to edit and clicks images to swap live on the public page without breaking design tokens.
- **Engine B (Centralized Collection Manager):** For bulk/repeat items. Dedicated Shopify/WordPress-style searchable Data Tables and structured two-column Add/Edit forms with inspector sidebars and auto-slugs.

### 5. Single Source of Truth & Auto-Sync Law
- Updating any bulk item in `/admin` immediately reflects across:
  - **Homepage Featured Grids** (via switches like `show_on_homepage = 1`).
  - **Archive / Category Grids**.
  - **Dynamic Single Detail Pages** (`/[collection]/[slug]`).
- Slugs MUST be auto-generated, sanitized, and collision-proof to ensure zero 404 errors.

### 6. Mandatory Roundtrip DoD (Zero-Bug Delivery)
- Every CMS feature requires passing the 5-point [ROUNDTRIP-VERIFICATION.md](ROUNDTRIP-VERIFICATION.md) gate with documented proof.

---

## Operating Modes

- `/sps-cms scaffold` — Initialize CMS config, database connectors, auth, `/admin` routes, and write root project lock.
- `/sps-cms add-collection <name>` — Add a new bulk collection (e.g. `properties`, `doctors`, `courses`) with custom fields.
- `/sps-cms sync` — Audit and repair existing CMS implementation, re-verifying root lock and single source of truth.
- `/sps-cms verify` — Run full roundtrip test (Create ➜ Edit ➜ Auto-Sync Verification ➜ Media Asset Check).
