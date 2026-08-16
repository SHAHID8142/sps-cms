---
name: sps-cms
description: >
  Master self-contained Visual & Collection CMS architect for modern web stacks
  (Astro, Next.js). Enforces zero-SaaS/zero-subscription local database architecture
  (Hostinger/cPanel MySQL, SQLite), WordPress/Shopify-grade dual-engine admin
  (/admin with In-Context Page Editor + Dedicated Collection Manager), single source
  of truth auto-sync, local media storage (/public/uploads), and strict roundtrip
  verification across Antigravity, Claude, Cursor, Windsurf, and other coding agents.
---

# /sps-cms

`/sps-cms` is the authoritative architecture, implementation, and verification standard for building **high-performance, non-technical client-friendly CMS systems** in modern frameworks (**Astro**, **Next.js**).

Read [METHOD-CARD.md](METHOD-CARD.md) at the start of any CMS task.

Current skill version: read `VERSION` and record in project memory.

---

## Core Laws of SPS-CMS

1. **Zero External SaaS / 100% Client-Owned DB Law.**
   - Never force clients onto paid third-party CMS SaaS (e.g. Sanity, Contentful) or developer-held cloud databases (e.g. personal Supabase accounts).
   - All data MUST reside on the client's own hosting infrastructure using **Native MySQL (Hostinger/cPanel/VPS)** or **SQLite / local LibSQL**.
   - Media uploads MUST save directly to the client's local server directory (`/public/uploads`) or client-owned S3/R2 storage with zero third-party lock-in.

2. **The Dual-Engine Admin Law (`/admin`).**
   Every CMS MUST provide two crystal-clear editing experiences:
   - **Engine A (Visual In-Context Page Editor):** For static/singleton pages (Home, About, Contact, Footer). Clients click text to edit inline and click images to swap them with zero layout breakage.
   - **Engine B (Centralized Collection/Entity Manager):** For multi-item dynamic content (Travel Packages, Products, Services, Portfolio, Blog). Implements clean WordPress/Shopify-style searchable, filterable Data Tables and dedicated Add/Edit forms with auto-generated slugs and inspector sidebars.

3. **Single Source of Truth & Auto-Sync Law.**
   - Dynamic entities (Packages/Products) updated in the Collection Manager MUST automatically propagate everywhere:
     - Homepage Featured Grid (via switches like `show_on_homepage = 1`).
     - Archive / Category Listing Grids.
     - Single Detail Pages (`/[collection]/[slug]`).
   - Slugs MUST be auto-generated from titles, sanitized, and guaranteed unique to eliminate 404 errors.

4. **SPS Ecosystem Interoperability Law.**
   - When `./.sps/` memory exists in the project (or when the project is orchestrated by `/sps`):
     - `sps-cms` MUST automatically sync with `./.sps/cms-foundation.md`, `./.sps/content-model.md`, and `./.sps/cms-debt.md`.
     - Storefront and CMS controls MUST ship together (CMS Coupling).
   - When used in a standalone project without `/sps`, `sps-cms` functions as a complete self-contained CMS builder.

5. **Mandatory Roundtrip DoD (Zero-Bug Delivery).**
   - No CMS task is complete without passing the [ROUNDTRIP-VERIFICATION.md](ROUNDTRIP-VERIFICATION.md) gate:
     1. Seed / create item via `/admin`.
     2. Update values (title, price, image, toggle).
     3. Verify real-time reflection on Homepage, Archive, and Detail pages.
     4. Verify mobile responsiveness and image asset load.

---

## Architecture Overview

```
┌────────────────────────────────────────────────────────────────────────┐
│                        SPS-CMS CORE ARCHITECTURE                       │
├───────────────────────────────────┬────────────────────────────────────┤
│ 1. DATA LAYER (Self-Contained)    │ 2. STORAGE LAYER (Local / Client)  │
│    • Hostinger / cPanel MySQL      │    • Local Server: /public/uploads │
│    • SQLite / LibSQL (Embedded)    │    • Zero Third-Party Monthly Fee  │
├───────────────────────────────────┴────────────────────────────────────┤
│ 3. ADMIN LAYER (/admin) - The Dual-Engine Experience                   │
│    ┌──────────────────────────────────┬──────────────────────────────┐ │
│    │ Engine A: Visual In-Context      │ Engine B: Collection Manager │ │
│    │ • Click-to-edit inline text      │ • Tour Packages / Products   │ │
│    │ • Image swap with preview        │ • Searchable Data Tables     │ │
│    │ • Section toggle & reordering    │ • Inspector Sidebar & Slugs  │ │
│    │ • Locked design token safety     │ • "Show on Home" Switches    │ │
│    └──────────────────────────────────┴──────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 4. FRONTEND ENGINE (Astro / Next.js)                                   │
│    • Astro Islands (<AdminOverlay client:only="react" />)              │
│    • 0kb Admin JS overhead for regular visitors                        │
│    • Server Actions / Direct DB Queries (Instant Revalidation)         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Operating Modes

### 1. Scaffold Mode (`/sps-cms scaffold`)
Initialize full CMS foundation in a new or existing Astro / Next.js project:
- Generates `cms.config.ts`.
- Configures database connection (`db/mysql.ts` or `db/sqlite.ts`).
- Generates `/admin` routes, auth session check, and local `/api/upload` endpoint.
- Bootstraps Engine A (Live Editor Island) and Engine B (Collection Tables & Forms).

### 2. Collection Add Mode (`/sps-cms add-collection <name>`)
Add a new dynamic collection (e.g. `packages`, `products`, `services`, `destinations`):
- Updates `cms.config.ts`.
- Creates/migrates database table.
- Generates admin list table + Add/Edit form with custom fields (Itinerary, Variants, Gallery, Toggles).
- Generates dynamic detail route (e.g. `src/pages/packages/[slug].astro`).

### 3. Sync & Repair Mode (`/sps-cms sync`)
Audits existing CMS implementation for broken slugs, missing fields, or out-of-sync frontend queries.

### 4. Verify Mode (`/sps-cms verify`)
Executes full roundtrip verification test suite.

---

## Interoperability with Hosts & Agents

`sps-cms` is natively compatible with:
- **Antigravity / Antigravity CLI** (`~/.gemini/config/skills/sps-cms`)
- **Claude Code** (`~/.claude/skills/sps-cms`)
- **Cursor** (`~/.cursor/skills/sps-cms`)
- **Windsurf / Cascade** (`~/.windsurf/skills/sps-cms`)
- **Codex / GitHub Copilot / OpenCode** (`~/.agents/skills/sps-cms`)

---

## Detailed References

- [METHOD-CARD.md](METHOD-CARD.md) — Step-by-step workflow & execution loop
- [CMS-ENGINES.md](CMS-ENGINES.md) — Deep dive into Engine A & Engine B UX
- [DATABASE-ADAPTERS.md](DATABASE-ADAPTERS.md) — MySQL (Hostinger) & SQLite implementation
- [AUTO-SYNC-PROTOCOL.md](AUTO-SYNC-PROTOCOL.md) — Single Source of Truth & slug safety
- [FRAMEWORK-ADAPTERS.md](FRAMEWORK-ADAPTERS.md) — Astro & Next.js concrete patterns
- [ROUNDTRIP-VERIFICATION.md](ROUNDTRIP-VERIFICATION.md) — Mandatory DoD checklist
- [INSTALL.md](INSTALL.md) — Installation, updates, and uninstallation guides
