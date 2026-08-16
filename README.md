# ⚡ SPS-CMS (Universal, Multi-Language, Multi-Stack & Self-Locking)

> **Master Universal Visual & Collection CMS Architect with Full Multi-Language (i18n & RTL) Support**  
> *Supports JavaScript/TypeScript (Astro, Next.js, Nuxt/Vue, SvelteKit), PHP (Laravel, Native), Python (Django, FastAPI), Go, Ruby, and Vanilla HTML with Field-Level Localization (English, Bengali, Arabic RTL, etc.).*

---

## 🌟 Why SPS-CMS?

Modern web development produces fast websites, but developers consistently struggle with client content management across different languages and locales:
- **Headless CMS SaaS** (Sanity, Contentful, Strapi Cloud) introduce costly monthly subscriptions, complex localization setups, and confusing forms.
- **WordPress WPML / Polylang** often slows down databases with duplicate post rows and plugin bloat.

**SPS-CMS solves this permanently with Field-Level JSON Localization and Automatic Fallback.** It equips AI coding agents (**Antigravity, Claude Code, Cursor, Windsurf**) to scaffold a multi-language CMS directly inside the client's own codebase and database.

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
│ 3. MULTI-LANGUAGE (i18n) & DUAL-ENGINE ADMIN (/admin)                  │
│    ┌──────────────────────────────────┬──────────────────────────────┐ │
│    │ Engine A: Visual In-Context      │ Engine B: Collection Manager │ │
│    │ • Zero-dep Vanilla JS Overlay    │ • Language Tabs (EN, BN, AR) │ │
│    │ • Live edit active locale route  │ • Real Estate, Doctors,      │ │
│    │ • Auto RTL text alignment        │   Tours, Products, Dishes... │ │
│    │ • Instant save per language      │ • Auto Fallback to Default   │ │
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

### 0. Multi-Language (i18n) & RTL Engine
- **Language Switcher Tabs in Admin:** Switch effortlessly between `[ 🇺🇸 English | 🇧🇩 বাংলা | 🇸🇦 العربية (RTL) ]`.
- **Field-Level JSON Localization:** Clean, non-bloated database architecture storing localized strings per field.
- **Automatic Fallback:** If Bengali or Arabic translation is pending, automatically renders English (Default) without breaking the page.
- **Right-to-Left (RTL) Support:** Arabic, Hebrew, and Persian fields automatically receive `dir="rtl"` with proper font tokens.

### 1. Self-Enforcing Project Lock (Permanent Memory)
When `/sps-cms` is run in a project, it writes `.sps-cms/lock.json` and injects root mirror rules into `GEMINI.md` / `AGENTS.md` / `CLAUDE.md`. The agent **is permanently locked to use `sps-cms`** for all future CMS work in that repository.

### 2. 100% Multi-Language & Multi-Framework Support
Works on Astro, Next.js, Nuxt/Vue, SvelteKit, Laravel (PHP), Django/FastAPI (Python), Go, and Pure HTML.

---

## 🛠️ Operating Modes

- `/sps-cms scaffold` — Detect stack, initialize CMS config with i18n, database connectors, auth, `/admin` routes, and project lock.
- `/sps-cms add-collection <name>` — Add a new bulk collection with localized fields.
- `/sps-cms doctor` — Run project & environment diagnostics.
- `/sps-cms verify` — Run full roundtrip test across all active languages.

---

## 📄 License

MIT © [SHAHID8142](https://github.com/SHAHID8142)
