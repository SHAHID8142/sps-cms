# ⚡ SPS-CMS

> **Master Self-Contained Visual & Collection CMS Architect for Modern Web Stacks (Astro & Next.js)**  
> *Zero SaaS dependencies, 100% Client-Owned DBs (Hostinger/cPanel MySQL, SQLite), Dual-Engine Admin, and Zero-Bug Auto-Sync.*

---

## 🌟 Why SPS-CMS?

Modern web development with **Astro** and **Next.js** produces blindingly fast websites, but developers consistently struggle with client content management:
- **Headless CMS SaaS** (Sanity, Contentful, Strapi Cloud) introduce costly monthly subscriptions and confusing forms that alienate non-technical clients.
- **WordPress** offers great non-coder visual editing, but brings heavy PHP bloat, slow database queries, and plugin security vulnerabilities.

**SPS-CMS solves this forever.** It equips AI coding agents (**Antigravity, Claude Code, Cursor, Windsurf**) to scaffold and wire an ultra-clean, WordPress/Shopify-grade CMS directly inside the client's own codebase and hosting.

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

## 🚀 Quick Install

### One-Line Automated Installer
Run this command in your terminal to install `sps-cms` across all your AI agent environments:

```bash
curl -fsSL https://raw.githubusercontent.com/SHAHID8142/sps-cms/main/scripts/install.sh | bash
```

Supported AI Hosts:
- **Antigravity / Gemini:** `~/.gemini/config/skills/sps-cms`
- **Claude Code:** `~/.claude/skills/sps-cms`
- **Cursor:** `~/.cursor/skills/sps-cms`
- **Windsurf / Cascade:** `~/.windsurf/skills/sps-cms`
- **Codex / GitHub Copilot / OpenCode:** `~/.agents/skills/sps-cms`

---

## 💎 Core Capabilities

### 1. Zero External SaaS (100% Client-Owned)
- **Database:** Runs natively on the client's existing hosting (Hostinger MySQL, cPanel MySQL, or local SQLite).
- **Media Uploads:** Directly stored in `/public/uploads` on the server disk with MIME-type verification and security sanitization. Zero cloud storage bills.

### 2. The Dual-Engine Admin Experience
- **Engine A (Visual In-Context Page Editor):** For static text, hero banners, about narratives, and footer links. Admins click on text to edit inline and swap images live on the public page.
- **Engine B (Centralized Collection Manager):** For multi-item catalogs like **Tour Packages, Products, Services, Portfolio items**. Features searchable, filterable Data Tables and Shopify-style Add/Edit forms with inspector sidebars.

### 3. Single Source of Truth & Auto-Sync
- Editing a package or product automatically updates:
  - **Homepage Featured Grid** (via `Show on Homepage` toggle).
  - **Category / Archive Grids**.
  - **Single Detail Pages** (`/[collection]/[slug]`).
- Auto-generates clean, conflict-free URL slugs to eliminate 404 errors.

### 4. Full SPS Ecosystem Compatibility
- When used inside an `/sps` project, `sps-cms` automatically hooks into `./.sps/cms-foundation.md`, `./.sps/content-model.md`, and enforces CMS-coupling laws.
- When used standalone, it serves as a complete autonomous CMS engine.

---

## 🛠️ Operating Modes

- `/sps-cms scaffold` — Initialize CMS config, database connectors, auth, and `/admin` routes.
- `/sps-cms add-collection <name>` — Add a new collection (e.g. `packages`, `products`, `services`) with custom fields.
- `/sps-cms verify` — Run full roundtrip test (Create ➜ Edit ➜ Auto-Sync Verification ➜ Media Asset Check).

---

## 📂 Repository Structure

```
sps-cms/
├── SKILL.md                          # Master skill entry point (YAML frontmatter + Laws)
├── METHOD-CARD.md                    # Step-by-step workflow & loop
├── CMS-ENGINES.md                    # Visual In-Context vs Collection Hub UX specs
├── DATABASE-ADAPTERS.md              # MySQL (Hostinger) & SQLite implementation
├── AUTO-SYNC-PROTOCOL.md             # Single Source of Truth & slug safety
├── FRAMEWORK-ADAPTERS.md             # Astro & Next.js concrete patterns
├── ROUNDTRIP-VERIFICATION.md         # Mandatory 5-point DoD checklist
├── INSTALL.md                        # Installation & updater guides
├── scripts/
│   ├── install.sh                    # Multi-agent automated installer
│   ├── update.sh                     # Update script
│   └── uninstall.sh                  # Clean uninstaller
└── templates/                        # Reusable, production-grade blueprints
    ├── config/cms.config.ts          # Universal schema configuration
    ├── db/                           # MySQL & SQLite schemas and query clients
    ├── admin-ui/                     # Tailwind Dashboard, DataTable, EntityForm, MediaUploader
    ├── visual-editor/                # React Island LiveEditorOverlay & EditableText
    └── astro-routes/                 # /admin Astro routes, API handlers, and upload endpoints
```

---

## 📄 License

MIT © [SHAHID8142](https://github.com/SHAHID8142)
