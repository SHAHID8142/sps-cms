# ⚡ SPS-CMS (Universal, Multi-Language, Gemini Flash AI & Self-Locking)

> **Master Universal Visual & Collection CMS Architect with In-Context Popover Inspector & Gemini Flash AI Auto-Translation**  
> *Supports JavaScript/TypeScript (Astro, Next.js, Nuxt/Vue, SvelteKit), PHP (Laravel, Native), Python (Django, FastAPI), Go, Ruby, and Vanilla HTML with Field-Level Localization (English, Bengali, Arabic RTL, etc.) & Zero-Redirection Link/CTA Inspectors.*

---

## 🌟 Why SPS-CMS?

Modern web development produces fast websites, but developers consistently struggle with client content management across different languages and visual layouts:
- **Headless CMS SaaS** (Sanity, Contentful, Strapi Cloud) introduce costly monthly subscriptions and confusing forms.
- **WordPress Translation Plugins** (WPML/Polylang) require manual duplicate entries or expensive translation add-ons.
- **Broken Live Editors** often accidentally redirect clients when clicking interactive buttons or links.

**SPS-CMS solves this with an Interactive In-Context Inspector Popover & Gemini Flash AI.** In Edit Mode, clicking any CTA, button, or link opens an instant floating inspector to edit both the visible text and the destination URL (`/packages`, external links, `_blank` target) with zero accidental page redirection!

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
│ 3. IN-CONTEXT INSPECTOR & DUAL-ENGINE ADMIN (/admin)                   │
│    ┌──────────────────────────────────┬──────────────────────────────┐ │
│    │ Engine A: Visual In-Context      │ Engine B: Collection Manager │ │
│    │ • Popover Inspector for CTAs     │ • Language Tabs (EN, BN, AR) │ │
│    │ • Edit Label + Link Destination  │ • [✨ Gemini Flash Auto-Sync]│ │
│    │ • Zero accidental redirection    │ • Real Estate, Doctors, Tours│ │
│    │ • Instant save & publish         │ • Searchable Data Tables     │ │
│    └──────────────────────────────────┴──────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 4. MULTI-STACK BACKEND ENGINE                                          │
│    • JS/TS: Astro, Next.js, Nuxt 3 (Vue), SvelteKit, Remix             │
│    • PHP: Modern Laravel, Native PHP / PDO (cPanel Shared)             │
│    • Python: Django, FastAPI, Flask, Jinja2 Templates                 │
│    • Go: Fiber, Gin, html/template                                     │
│    • Static / Jamstack: Pure HTML5 + CSS + Alpine.js                   │
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

## 💎 Core Superpowers

### 0. Floating Contextual Popover Inspector for CTAs & Links
- **Zero Accidental Redirection:** In Edit Mode, clicking any CTA or link will NEVER reload or navigate the browser.
- **Full Link Control:** Edit the button text, destination URL (`/packages`, `/#services`, WhatsApp links), and target mode (`_blank` new tab).
- **Live Preview:** Immediate in-DOM updates with one-click `[ 🚀 Publish All Changes ]`.

### 1. Native Gemini Flash AI Auto-Translation
- **One-Click Translation:** Client types in English ➜ Clicks `[ ✨ Auto-Translate with Gemini Flash ]` ➜ Bengali (বাংলা) and Arabic (العربية RTL) are populated in ~300ms.
- **Field-Level JSON Localization:** Clean database architecture with zero table bloat.

### 2. Self-Enforcing Project Lock (Permanent Memory)
When `/sps-cms` is run in a project, it writes `.sps-cms/lock.json` and injects root mirror rules into `GEMINI.md` / `AGENTS.md` / `CLAUDE.md`.

---

## 📄 License

MIT © [SHAHID8142](https://github.com/SHAHID8142)
