---
name: sps-cms
description: >
  Universal, host-agnostic, and industry-polymorphic Visual & Collection CMS architect
  for modern web stacks (Astro, Next.js). Features mandatory host & database discovery
  (cPanel/Shared, VPS/Docker, Vercel, Cloudflare Pages/D1, Node/PM2), zero-SaaS self-contained
  DB adapters (MySQL, PostgreSQL, SQLite, LibSQL, D1), universal bulk collection engine
  (Packages, Products, Real Estate, Doctors, Menu Items, Case Studies, Courses, etc.),
  WordPress/Shopify-grade dual-engine admin (/admin + In-Context Live Editor), single source
  of truth auto-sync, host-native media uploads, and strict roundtrip verification.
---

# /sps-cms (Universal & Host-Agnostic)

`/sps-cms` is the universal architecture, implementation, and verification standard for building **high-performance, non-technical client-friendly CMS systems** in modern frameworks (**Astro**, **Next.js**) on **ANY hosting platform** and for **ANY business industry**.

Read [METHOD-CARD.md](METHOD-CARD.md) at the start of every session.

Current skill version: read `VERSION` and record in project memory.

---

## Core Laws of SPS-CMS

1. **Mandatory Hosting & Infrastructure Discovery Law (No Assumptions).**
   - The agent MUST NEVER assume a specific host or database.
   - Before writing any CMS code, the agent MUST grill and confirm with the user:
     1. **Deploy Target:** Shared/cPanel (Hostinger, cPanel, DirectAdmin), VPS/Dedicated (PM2, Docker, Nginx), Serverless/Edge (Vercel, Cloudflare Pages, Netlify, Railway, Render).
     2. **Database Engine:** Native MySQL/MariaDB, PostgreSQL, Embedded SQLite, Cloudflare D1, or Turso/LibSQL.
     3. **Media Storage:** Local server disk (`/public/uploads`), Cloudflare R2, or S3-compatible bucket.
     4. **Content Inventory:** What bulk collections exist (e.g. Properties, Tours, Courses, Doctors, Dishes, Projects, Products)?

2. **Zero Forced SaaS / 100% Client-Owned Infrastructure Law.**
   - All data and media MUST reside on infrastructure paid for and owned by the client.
   - No forced monthly subscriptions (e.g. Sanity/Contentful) and no developer-held database lock-in.

3. **Universal Polymorphic Collection Law (Industry Agnostic).**
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

4. **The Dual-Engine Admin Law (`/admin`).**
   Every site provides two complementary editing paradigms:
   - **Engine A (Visual In-Context Page Editor):** For singleton page copy, hero headlines, about text, contact info. Client clicks text to edit and clicks images to swap live on the public page without breaking design tokens.
   - **Engine B (Centralized Collection Manager):** For bulk/repeat items. Dedicated Shopify/WordPress-style searchable Data Tables and structured two-column Add/Edit forms with inspector sidebars and auto-slugs.

5. **Single Source of Truth & Auto-Sync Law.**
   - Updating any bulk item in `/admin` immediately reflects across:
     - **Homepage Featured Grids** (via switches like `show_on_homepage = 1`).
     - **Archive / Category Grids**.
     - **Dynamic Single Detail Pages** (`/[collection]/[slug]`).
   - Slugs MUST be auto-generated, sanitized, and collision-proof to ensure zero 404 errors.

6. **SPS Ecosystem Interoperability Law.**
   - When `./.sps/` exists, `sps-cms` binds directly to `./.sps/cms-foundation.md` and `./.sps/content-model.md`.
   - When used standalone, `sps-cms` operates as an independent full-stack CMS engine.

7. **Mandatory Roundtrip DoD (Zero-Bug Delivery).**
   - Every CMS feature requires passing the 5-point [ROUNDTRIP-VERIFICATION.md](ROUNDTRIP-VERIFICATION.md) gate with documented proof.

---

## Universal Hosting & Adapter Matrix

```
┌────────────────────────────────────────────────────────────────────────┐
│                      UNIVERSAL SPS-CMS HOSTING MATRIX                  │
├───────────────────┬──────────────────────┬─────────────────────────────┤
│ Deployment Target │ Supported Databases  │ Media Storage Path          │
├───────────────────┼──────────────────────┼─────────────────────────────┤
│ cPanel / Shared   │ Native MySQL/MariaDB │ /public/uploads (Local)     │
│ VPS (Docker/PM2)  │ MySQL / Postgres /   │ /public/uploads or          │
│                   │ SQLite (Embedded)    │ Self-hosted MinIO           │
│ Cloudflare Pages  │ Cloudflare D1 /      │ Cloudflare R2 Bucket        │
│                   │ Hyperdrive / Turso   │                             │
│ Vercel / Netlify  │ PostgreSQL / Neon /  │ S3 / Cloudflare R2 /        │
│                   │ Turso LibSQL         │ Blob Storage                │
│ Railway / Render  │ PostgreSQL / MySQL / │ Persistent Volume /         │
│                   │ SQLite (Volume)      │ S3 Compatible               │
└───────────────────┴──────────────────────┴─────────────────────────────┘
```

---

## Detailed References

- [METHOD-CARD.md](METHOD-CARD.md) — Discovery grill & execution workflow
- [CMS-ENGINES.md](CMS-ENGINES.md) — Dual-Engine UX & polymorphic collection architecture
- [DATABASE-ADAPTERS.md](DATABASE-ADAPTERS.md) — Multi-driver adapters (MySQL, Postgres, SQLite, D1, LibSQL)
- [AUTO-SYNC-PROTOCOL.md](AUTO-SYNC-PROTOCOL.md) — Single Source of Truth & slug safety
- [FRAMEWORK-ADAPTERS.md](FRAMEWORK-ADAPTERS.md) — Astro & Next.js deploy recipes
- [ROUNDTRIP-VERIFICATION.md](ROUNDTRIP-VERIFICATION.md) — Mandatory DoD checklist
- [INSTALL.md](INSTALL.md) — Multi-agent installer and updater
