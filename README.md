# ⚡ SPS-CMS (Universal, Cross-Platform & Self-Locking)

> **Master Universal Visual & Collection CMS Architect for Modern Web Stacks (Astro & Next.js)**  
> *Native support for Windows (7, 8, 10, 11), macOS, and Linux across Antigravity, Claude Code, Cursor, Windsurf, OpenCode, Codex, and Skills.sh CLI.*

---

## 🌟 Why SPS-CMS?

Modern web development with **Astro** and **Next.js** produces blindingly fast websites, but developers consistently struggle with client content management:
- **Headless CMS SaaS** (Sanity, Contentful, Strapi Cloud) introduce costly monthly subscriptions and confusing forms that alienate non-technical clients.
- **WordPress** offers great non-coder visual editing, but brings heavy PHP bloat, slow database queries, and plugin security vulnerabilities.

**SPS-CMS solves this permanently on ANY OS, ANY host, and ANY industry.** It equips AI coding agents (**Antigravity, Claude Code, Cursor, Windsurf**) to discover the client's hosting plan, choose the optimal local database engine, model any bulk industry data, and scaffold a clean, WordPress/Shopify-grade CMS directly inside the client's own codebase.

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
│ 5. SELF-ENFORCING REPOSITORY LOCK & CROSS-PLATFORM COMPATIBILITY       │
│    • Windows (7, 8, 10, 11) PowerShell + macOS / Linux Zsh / Bash      │
│    • Skills.sh Package Manager (npx skills add SHAHID8142/sps-cms)     │
│    • Injects Lock into GEMINI.md / AGENTS.md / CLAUDE.md / .cursorrules│
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 1-Click Cross-Platform Installation

### ⚡ Method 1: Via Skills.sh CLI (`npx skills`)
```bash
npx skills add SHAHID8142/sps-cms
```

### 🪟 Method 2: Windows (PowerShell 1-Click)
Open PowerShell and run:
```powershell
irm https://raw.githubusercontent.com/SHAHID8142/sps-cms/main/scripts/install.ps1 | iex
```

### 🍎 Method 3: macOS & 🐧 Linux / WSL (Terminal 1-Click)
Open Terminal and run:
```bash
curl -fsSL https://raw.githubusercontent.com/SHAHID8142/sps-cms/main/scripts/install.sh | bash
```

---

## 🎯 Target Installation Paths

| AI Host | Windows Path | macOS / Linux Path |
| :--- | :--- | :--- |
| **Antigravity (Gemini)** | `%USERPROFILE%\.gemini\config\skills\sps-cms` | `~/.gemini/config/skills/sps-cms` |
| **Claude Code** | `%USERPROFILE%\.claude\skills\sps-cms` | `~/.claude/skills/sps-cms` |
| **Cursor IDE** | `%USERPROFILE%\.cursor\skills\sps-cms` | `~/.cursor/skills/sps-cms` |
| **Windsurf / Cascade** | `%USERPROFILE%\.windsurf\skills\sps-cms` | `~/.windsurf/skills/sps-cms` |
| **Universal / Codex / Copilot** | `%USERPROFILE%\.agents\skills\sps-cms` | `~/.agents/skills/sps-cms` |
| **OpenCode** | `%USERPROFILE%\.config\opencode\skills\sps-cms` | `~/.config/opencode/skills/sps-cms` |

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

---

## 🛠️ Operating Modes

- `/sps-cms scaffold` — Initialize CMS config, database connectors, auth, `/admin` routes, and project lock.
- `/sps-cms add-collection <name>` — Add a new bulk collection (e.g. `properties`, `doctors`, `courses`) with custom fields.
- `/sps-cms doctor` — Run project & environment diagnostics.
- `/sps-cms sync` — Audit and repair existing CMS implementation, re-verifying root lock and single source of truth.
- `/sps-cms verify` — Run full roundtrip test (Create ➜ Edit ➜ Auto-Sync Verification ➜ Media Asset Check).

---

## 📄 License

MIT © [SHAHID8142](https://github.com/SHAHID8142)
