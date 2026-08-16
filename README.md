# ⚡ SPS-CMS (Universal, Host-Agnostic & Self-Locking)

> **Master Universal Visual & Collection CMS Architect for Modern Web Stacks (Astro & Next.js)**  
> *Self-Enforcing Project Memory Lock (GEMINI.md / AGENTS.md), Zero SaaS lock-in, 100% Client-Owned Hosting & DBs (MySQL, Postgres, SQLite, Cloudflare D1), Universal Polymorphic Collections, Dual-Engine Admin, and Zero-Bug Auto-Sync.*

---

## 🌟 Why SPS-CMS?

Modern web development with **Astro** and **Next.js** produces blindingly fast websites, but developers consistently struggle with client content management:
- **Headless CMS SaaS** (Sanity, Contentful, Strapi Cloud) introduce costly monthly subscriptions and confusing forms that alienate non-technical clients.
- **WordPress** offers great non-coder visual editing, but brings heavy PHP bloat, slow database queries, and plugin security vulnerabilities.

**SPS-CMS solves this permanently across any host, any industry, and all AI coding agents.** Once activated in a repository, it **locks the project standard** so agents (Antigravity, Claude Code, Cursor, Windsurf) never forget or deviate on future CMS tasks.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   UNIVERSAL SPS-CMS ARCHITECTURE                       │
├───────────────────────────────────┬────────────────────────────────────┤
│ 1. DATA LAYER (Host-Agnostic)     │ 2. STORAGE LAYER (Client-Owned)    │
│    • Native MySQL (cPanel/VPS)    │    • Local Server: /public/uploads │
│    • SQLite / LibSQL (Embedded)   │    • Cloudflare R2 / S3 Storage    │
│    • PostgreSQL / Neon / Supabase │    • Zero Third-Party Monthly Fee  │
│    • Cloudflare D1 (Edge Native)  │                                    │
├───────────────────────────────────┴────────────────────────────────────┤
│ 3. ADMIN LAYER (/admin) - The Dual-Engine Experience                   │
│    ┌──────────────────────────────────┬──────────────────────────────┐ │
│    │ Engine A: Visual In-Context      │ Engine B: Collection Manager │ │
│    │ • Click-to-edit inline text      │ • Real Estate, Doctors,      │ │
│    │ • Image swap with preview        │   Tours, Products, Dishes... │ │
│    │ • Section toggle & reordering    │ • Searchable Data Tables     │ │
│    │ • Locked design token safety     │ • Inspector Sidebar & Slugs  │ │
│    └──────────────────────────────────┴──────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 4. FRONTEND ENGINE (Astro / Next.js)                                   │
│    • Astro Islands (<AdminOverlay client:only="react" />)              │
│    • 0kb Admin JS overhead for regular visitors                        │
│    • Server Actions / Direct DB Queries (Instant Revalidation)         │
├────────────────────────────────────────────────────────────────────────┤
│ 5. SELF-ENFORCING REPOSITORY LOCK                                      │
│    • Injects Lock into GEMINI.md / AGENTS.md / CLAUDE.md / .cursorrules│
│    • Ensures AI agents strictly adhere to sps-cms in all future tasks  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Install

### One-Line Automated Installer
Run this command in your terminal to install `sps-cms` across all your AI agent environments:

```bash
curl -fsSL https://raw.githubusercontent.com/SHAHID8142/sps-cms/main/scripts/install.sh | bash
```

Supported AI Hosts:
- **Antigravity / Gemini:** `~/.gemini/config/skills/sps-cms`
- **Claude Code:** `~/.claude/skills/sps-cms`
- **Cursor IDE:** `~/.cursor/skills/sps-cms`
- **Windsurf / Cascade:** `~/.windsurf/skills/sps-cms`
- **OpenCode / Codex / Copilot:** `~/.agents/skills/sps-cms`

---

## 💎 Core Superpowers

### 0. Self-Enforcing Project Lock (Permanent Memory)
When `/sps-cms` is run in a project, it writes `.sps-cms/lock.json` and injects root mirror rules into `GEMINI.md` / `AGENTS.md` / `CLAUDE.md`. In all future conversations, whenever the user asks for CMS features or edits, the agent **is hard-locked to use `sps-cms`** rather than reverting to generic forms.

### 1. Mandatory Hosting & Infrastructure Discovery Grill
Before generating CMS code, the agent confirms:
1. **Deploy Target:** Shared/cPanel, VPS (Docker/PM2), Edge (Cloudflare Pages), Serverless (Vercel, Netlify), or PaaS (Railway, Render).
2. **Database Engine:** Native MySQL, PostgreSQL, Embedded SQLite, Cloudflare D1, or LibSQL.
3. **Media Strategy:** Local disk (`/public/uploads`), Cloudflare R2, or S3 bucket.
4. **Content Inventory:** What bulk collections and custom fields are required.

### 2. 100% Polymorphic Bulk Collection Engine
Model **ANY bulk entity** for **ANY industry** in `cms.config.ts`:
- **Real Estate:** Properties, Floor Plans, Agents, Amenities.
- **Healthcare & Clinics:** Doctors, Departments, Patient Reviews.
- **Restaurants & Cafes:** Menu Categories, Dishes, Chef Specials.
- **Tourism & Travel:** Tour Packages, Destinations, Itineraries.
- **SaaS & Tech:** Features, Case Studies, Changelog, Pricing.
- **Education:** Courses, Lessons, Instructors, Batches.
- **Agency & Portfolio:** Projects, Case Studies, Team Members.

### 3. The Dual-Engine Admin Experience
- **Engine A (Visual In-Context Page Editor):** For static text, hero banners, about narratives, and footer links. Admins click on text to edit inline and swap images live on the public page.
- **Engine B (Centralized Collection Manager):** Dedicated WordPress/Shopify-style searchable Data Tables and structured two-column Add/Edit forms with inspector sidebars, auto-slugs, and visibility switches (`Show on Homepage`, `Featured`).

### 4. Single Source of Truth & Auto-Sync
- Editing any bulk item in `/admin` immediately reflects across:
  - **Homepage Featured Grid** (via `Show on Homepage` toggle).
  - **Category / Archive Grids**.
  - **Single Detail Pages** (`/[collection]/[slug]`).
- Auto-generates clean, conflict-free URL slugs to eliminate 404 errors.

---

## 🛠️ Operating Modes

- `/sps-cms scaffold` — Initialize CMS config, database connectors, auth, `/admin` routes, and project lock.
- `/sps-cms add-collection <name>` — Add a new bulk collection (e.g. `properties`, `doctors`, `courses`) with custom fields.
- `/sps-cms sync` — Audit and repair existing CMS implementation, re-verifying root lock and single source of truth.
- `/sps-cms verify` — Run full roundtrip test (Create ➜ Edit ➜ Auto-Sync Verification ➜ Media Asset Check).

---

## 📄 License

MIT © [SHAHID8142](https://github.com/SHAHID8142)
