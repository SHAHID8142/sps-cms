# ⚡ SPS-CMS (v2.0.0 Golden Master Release)

> **The Definitive Universal Visual & Collection CMS Architect with In-Context Popover Inspectors, Live Image Swapping, Gemini Flash AI Auto-Translation, 1-Click Backups, and Self-Enforcing Repository Locks**  
> *Supports JavaScript/TypeScript (Astro, Next.js, Nuxt/Vue, SvelteKit), PHP (Laravel, Native), Python (Django, FastAPI), Go, Ruby, and Vanilla HTML across Windows (7/8/10/11), macOS, and Linux.*

---

## 🌟 Why SPS-CMS v2.0.0 is Unbeatable

SPS-CMS bridges the gap between high-speed custom codebases and effortless non-technical client UX:
- **Zero Third-Party SaaS Fees:** Runs entirely on the client's own database (MySQL, SQLite, Postgres, Cloudflare D1) and storage (`/public/uploads`, R2, S3).
- **Universal Multi-Stack:** Adapts seamlessly to ANY programming language or framework.
- **In-Context Visual Popover Inspector (Engine A):** Non-intrusive floating bottom dock with zero top navbar overlap. Click text, CTA buttons, or photos to edit labels, change URLs, or drop new images live on the page with zero accidental page redirection.
- **Gemini Flash AI Auto-Translation:** Instant 300ms translation sync across English, Bengali, Arabic (RTL), and any target language.
- **Polymorphic Collection Manager (Engine B):** Searchable Data Tables, auto-slug generators, visibility switches, and inspector sidebars for bulk entities (Real Estate, Doctors, Tour Packages, Products, Dishes).
- **Enterprise Security & 1-Click Backups:** MIME validation, size caps, and instant 1-click JSON database snapshot downloads.

```
┌────────────────────────────────────────────────────────────────────────┐
│               SPS-CMS v2.0.0 MASTER ARCHITECTURE OVERVIEW              │
├───────────────────────────────────┬────────────────────────────────────┤
│ 1. DATA LAYER (Host-Agnostic)     │ 2. STORAGE LAYER (Client-Owned)    │
│    • Native MySQL (cPanel/VPS)    │    • Local Server: /public/uploads │
│    • SQLite / LibSQL (Embedded)   │    • Cloudflare R2 / S3 Storage    │
│    • PostgreSQL / Neon / Supabase │    • Zero Third-Party Monthly Fee  │
│    • Cloudflare D1 (Edge Native)  │                                    │
├───────────────────────────────────┴────────────────────────────────────┤
│ 3. DUAL-ENGINE CLIENT EXPERIENCE                                       │
│    ┌──────────────────────────────────┬──────────────────────────────┐ │
│    │ Engine A: In-Context Visual      │ Engine B: Collection Hub     │ │
│    │ • Floating Bottom Dock           │ • Searchable Data Tables     │ │
│    │ • Text, CTA Link & Image Popover │ • Add/Edit Multi-Lang Forms  │ │
│    │ • Zero accidental redirection    │ • Real Estate, Tours, Dishes │ │
│    │ • Live DOM update & publish      │ • Home Featured [ON/OFF]     │ │
│    └──────────────────────────────────┴──────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 4. MULTI-LANGUAGE & GEMINI FLASH AI TRANSLATION                        │
│    • Language Switcher: [ 🇺🇸 EN | 🇧🇩 BN | 🇸🇦 AR (RTL) ]               │
│    • [✨ Auto-Translate with Gemini Flash] in ~300ms                   │
│    • Field-Level JSON Localization with Automatic Fallback             │
├────────────────────────────────────────────────────────────────────────┤
│ 5. DEFENSE & PORTABILITY LAYER                                         │
│    • 1-Click Full DB Snapshot Export/Backup (`/api/cms/backup`)        │
│    • Bulletproof MIME & Traversal Upload Security Guard                │
│    • Self-Enforcing Lock (GEMINI.md / AGENTS.md / CLAUDE.md)           │
│    • Windows (7, 8, 10, 11) PowerShell + macOS / Linux Zsh / Bash      │
│    • Skills.sh Registry (`npx skills add SHAHID8142/sps-cms`)          │
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

## 📄 License

MIT © [SHAHID8142](https://github.com/SHAHID8142)
