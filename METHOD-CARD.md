# SPS-CMS Method Card

Read this document at the start of any CMS build, refactor, or sync session.

---

## 1. Session Boot Checklist

1. **Detect Host & Environment:**
   - Detect agent host (Antigravity, Claude, Cursor, Windsurf, etc.).
   - Check if project is **Astro** or **Next.js**.
   - Check if `./.sps/` exists in project root. If yes, activate **SPS Interoperability Mode**.

2. **Discover Client Hosting & Database Target:**
   - Identify database type:
     - **Hostinger / cPanel / VPS MySQL** (Standard client hosting)
     - **SQLite** (Embedded zero-config, great for static/Node deployments)
     - **PostgreSQL** (Client-owned instance)
   - Ensure media target is set to `/public/uploads` (or client-owned R2/S3).

3. **Discover Content Architecture:**
   - **Singleton Pages:** Home, About, Contact, Services landing, Privacy.
   - **Dynamic Collections:** Tour Packages, Shop Products, Case Studies, Services, Blog Posts, Team, Testimonials.
   - **Special Fields:** Itinerary builders, Pricing tables, Variant matrices, Home Featured toggles, Category hierarchies.

---

## 2. The 6-Step Implementation Loop

```
┌───────────┐     ┌───────────┐     ┌───────────┐
│  Step 1   │ ──> │  Step 2   │ ──> │  Step 3   │
│ Discovery │     │ DB Schema │     │ cms.config│
└───────────┘     └───────────┘     └───────────┘
                                          │
                                          ▼
┌───────────┐     ┌───────────┐     ┌───────────┐
│  Step 6   │ <── │  Step 5   │ <── │  Step 4   │
│ Roundtrip │     │ Engine A&B│     │ /admin &  │
│ Verify DoD│     │ Wire & UI │     │ Auth API  │
└───────────┘     └───────────┘     └───────────┘
```

### Step 1: Schema Specification (`cms.config.ts`)
- Define all collections with their fields, types, labels, and validation rules.
- Define page editable zones.

### Step 2: Database Layer Setup
- Run SQL migration for `pages`, `collections`, `media`, and `settings` tables.
- Establish DB connector (`mysql2/promise` or `better-sqlite3`/`libsql`).

### Step 3: Admin Shell & Auth Endpoint
- Scaffold `/admin` dashboard with sidebar navigation.
- Implement lightweight cookie/session-based admin auth (`/api/auth/login`).
- Implement `/api/upload` endpoint writing directly to `public/uploads/`.

### Step 4: Engine B (Collection Manager)
- Render searchable, filterable Data Table for each collection.
- Render Add/Edit form with:
  - Title input with automatic real-time slug generator.
  - Media dropzone.
  - Dynamic repeaters (e.g. Day-by-Day itinerary or variants).
  - Inspector sidebar with toggles (`show_on_homepage`, `is_featured`, `is_published`).
  - Category selector & SEO meta boxes.

### Step 5: Engine A (Visual In-Context Page Editor)
- Embed `<AdminOverlay client:only="react" />` on public pages for logged-in admins.
- Enable click-to-edit for inline text strings and click-to-swap for images.
- Save page JSON directly to the `pages` table.

### Step 6: Frontend Wiring & Dynamic Routes
- Wire Homepage queries: `SELECT * FROM packages WHERE show_on_homepage = 1 AND is_published = 1 ORDER BY order_index ASC`.
- Wire Listing archive page (`/packages`).
- Wire Detail page (`/packages/[slug]`).

---

## 3. The Roundtrip Verification Gate (DoD)

Before marking any CMS task as complete, you MUST execute and document:
1. **Creation Test:** Add a test package/product with full details (Title, Price, Image, Itinerary, `show_on_homepage = ON`).
2. **Propagation Test:**
   - Verify item renders on Homepage Featured section.
   - Verify item renders on Archive listing page.
   - Verify item single page `/packages/[slug]` loads with 200 OK.
3. **Edit Test:** Change price and title in `/admin`, verify instant reflection across all 3 pages.
4. **Media Test:** Upload a new image, verify direct disk write to `/public/uploads` and correct URL resolution.
5. **Mobile Test:** Ensure `/admin` and live page overlay are fully usable on mobile viewports.
