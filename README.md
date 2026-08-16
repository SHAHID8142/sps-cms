# ⚡ SPS-CMS (Universal, Multi-Language, Gemini Flash AI & Self-Locking)

> **Master Universal Visual & Collection CMS Architect with Native Gemini Flash AI Auto-Translation**  
> *Supports JavaScript/TypeScript (Astro, Next.js, Nuxt/Vue, SvelteKit), PHP (Laravel, Native), Python (Django, FastAPI), Go, Ruby, and Vanilla HTML with Field-Level Localization (English, Bengali, Arabic RTL, etc.) & Instant AI Translation Sync.*

---

## 🌟 Why SPS-CMS?

Modern web development produces fast websites, but developers consistently struggle with client content management across different languages:
- **Headless CMS SaaS** (Sanity, Contentful, Strapi Cloud) introduce costly monthly subscriptions and confusing forms.
- **WordPress Translation Plugins** (WPML/Polylang) require manual duplicate entries or expensive translation add-ons.

**SPS-CMS solves this with Native Gemini Flash AI Auto-Translation.** When a client creates or edits a product, package, or page in one language, Gemini Flash automatically translates and synchronizes across Bengali, Arabic (RTL), and any other target language in under 300 milliseconds.

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
│ 3. MULTI-LANGUAGE (i18n), RTL & GEMINI FLASH AI TRANSLATION            │
│    ┌──────────────────────────────────┬──────────────────────────────┐ │
│    │ Engine A: Visual In-Context      │ Engine B: Collection Manager │ │
│    │ • Zero-dep Vanilla JS Overlay    │ • Language Tabs (EN, BN, AR) │ │
│    │ • Live edit active locale route  │ • [✨ Gemini Flash Auto-Sync]│ │
│    │ • Auto RTL text alignment        │ • Instant Save & Fallback    │ │
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

### 0. Native Gemini Flash AI Auto-Translation
- **One-Click Instant Translation:** Client types in English ➜ Clicks `[ ✨ Auto-Translate with Gemini Flash ]` ➜ Bengali (বাংলা) and Arabic (العربية RTL) are populated in ~300ms.
- **Field-Level JSON Localization:** Clean, performant, non-bloated database architecture.
- **Automatic Fallback:** Missing translations automatically render default language with zero broken layouts.

### 1. Self-Enforcing Project Lock (Permanent Memory)
When `/sps-cms` is run in a project, it writes `.sps-cms/lock.json` and injects root mirror rules into `GEMINI.md` / `AGENTS.md` / `CLAUDE.md`. The agent **is permanently locked to use `sps-cms`** for all future CMS work in that repository.

### 2. 100% Multi-Language & Multi-Framework Support
Works on Astro, Next.js, Nuxt/Vue, SvelteKit, Laravel (PHP), Django/FastAPI (Python), Go, and Pure HTML.

---

## 📄 License

MIT © [SHAHID8142](https://github.com/SHAHID8142)
