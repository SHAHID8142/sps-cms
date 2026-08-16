# The Dual-Engine Admin Architecture

To satisfy both non-technical clients and complex business websites (travel, e-commerce, real estate, agency), SPS-CMS strictly enforces a **Dual-Engine Model** inside `/admin`.

---

## Engine A: Visual In-Context Page Editor (For Pages & Sections)

### Target Use Case
- Landing page sections (Hero headlines, CTA text, Subtitles).
- About Us narrative, Mission/Vision paragraphs.
- Contact information, Footer links, Announcement banners.

### UX Flow
1. Admin logs into `/admin` or visits any page with an active session cookie.
2. A sleek floating top-bar appears at the top of the browser:
   ```
   [ ⚡ Edit Mode: ON ]  |  Page: Home (/)  |  [ 💾 Save Draft ]  [ 🚀 Publish ]  [ ✖ Exit ]
   ```
3. **Inline Text Editing:**
   - Elements wrapped with `<EditableText id="hero.title" default="Explore the World" />` activate a content-editable cursor on click.
   - Text formatting toolbar (Bold, Italic, Link) appears upon text selection (Medium/Notion style).
4. **Image Swapping:**
   - Clicking on any image marked with `<EditableImage id="hero.bg" />` opens a compact upload modal.
   - Admin drags a photo from desktop ➜ uploads to `/public/uploads` ➜ image immediately updates in the preview.
5. **Safety Constraints (Anti-Breakage):**
   - Clients CANNOT alter CSS styles, fonts, margins, or padding.
   - Layout integrity is 100% preserved according to the developer's design tokens.

---

## Engine B: Centralized Collection Manager (WordPress & Shopify Clarity)

### Target Use Case
- Tour Packages (Dates, Itineraries, Price, Booking Links).
- E-Commerce Products (SKU, Price, Inventory, Variants, Categories).
- Services, Portfolio Items, Team Members, Testimonials, Blog Posts.

### 1. The List View (Data Table)
Located at `/admin/collections/[name]` (e.g. `/admin/collections/packages`).

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  📦 TOUR PACKAGES                                                 [ + Add New Package ]│
├────────────────────────────────────────────────────────────────────────────────────────┤
│  [🔍 Search packages...]  [Category: All ▼]  [Status: All ▼]  [Sort: Newest ▼]         │
├──────┬────────────────────────────┬──────────┬─────────────┬─────────────┬─────────────┤
│ Thumb│ Title                      │ Price    │ Home Feature│ Status      │ Actions     │
├──────┼────────────────────────────┼──────────┼─────────────┼─────────────┼─────────────┤
│ 🖼️   │ Bali 5-Day Tropical Escape │ $650     │    [ ON ]   │  Published  │ Edit ✏️  🗑️ │
│ 🖼️   │ Sajek Valley Cloud Trek    │ $120     │    [ OFF]   │  Published  │ Edit ✏️  🗑️ │
│ 🖼️   │ Switzerland Alpine Tour    │ $2,400   │    [ ON ]   │  Draft      │ Edit ✏️  🗑️ │
└──────┴────────────────────────────┴──────────┴─────────────┴─────────────┴─────────────┘
```

#### Key List Table Features:
- **Instant Search & Filter:** Instant client-side or server query filtering by search query, category, and status.
- **Inline Quick Toggles:** Toggle `show_on_homepage` or `is_published` directly from the table without opening the full edit page.
- **Bulk Actions:** Bulk delete, bulk draft, bulk category assign.

---

### 2. The Add / Edit Form (The Shopify-Inspired Two-Column Layout)

Located at `/admin/collections/[name]/new` or `/admin/collections/[name]/edit/[id]`.

```
┌───────────────────────────────────────────────────┬──────────────────────────────────┐
│  ⬅️ Back to Packages      Editing: "Bali 5-Day"    │  [ Save Draft ]  [ 🚀 Publish ]  │
├───────────────────────────────────────────────────┼──────────────────────────────────┤
│  📌 MAIN CONTENT COLUMN                           │  ⚙️ INSPECTOR SIDEBAR            │
│                                                   │                                  │
│  Package Title *                                  │  • Status & Visibility           │
│  [ Bali 5-Day Tropical Escape                 ]   │    Status: [ Published ▼ ]       │
│                                                   │    [✔] Show on Homepage          │
│  Slug (Auto-generated & Editable)                 │    [✔] Mark as Featured          │
│  https://mysite.com/packages/[ bali-5-day-escape] │    [ ] Sold Out / Inactive       │
│                                                   │                                  │
│  Pricing & Meta                                   │  • Organization                  │
│  Regular Price: [ $650 ]  Sale Price: [ $580 ]    │    Category: [ Island Tours ▼ ]  │
│  Duration: [ 5 Days / 4 Nights ]                  │    Tags: [ Beach, Tropical, Honeymoon]
│                                                   │                                  │
│  Featured Photo & Gallery                         │  • Featured Image                │
│  ┌──────────────────────────────────────────────┐ │    ┌───────────────────────────┐ │
│  │ 🖼️  Drag & drop photos here or Browse Files  │ │    │ [ Bali-Hero.jpg ]         │ │
│  │ (Directly saved to /public/uploads)          │ │    │ [ Change ] [ Remove ]     │ │
│  └──────────────────────────────────────────────┘ │    └───────────────────────────┘ │
│                                                   │                                  │
│  Day-by-Day Itinerary (Dynamic Repeater)          │  • SEO Metadata                  │
│  Day 1: [ Arrival, Resort Check-in, Sunset Bar]   │    SEO Title: [ Bali 5-Day... ]  │
│  Day 2: [ Nusa Penida Island Speedboat Tour   ]   │    SEO Description: [ Join us... │
│  [ + Add Another Day ]                            │                                  │
└───────────────────────────────────────────────────┴──────────────────────────────────┘
```

---

## Technical Routing Architecture

```
src/
├── pages/
│   ├── admin/
│   │   ├── index.astro                  # Admin Overview / Metrics
│   │   ├── login.astro                  # Admin Auth Login
│   │   ├── pages/                       # Engine A: Page List & Visual Editor launchers
│   │   │   └── index.astro
│   │   ├── collections/                 # Engine B: Collection Hub
│   │   │   ├── [collection]/
│   │   │   │   ├── index.astro          # Collection Data Table
│   │   │   │   ├── new.astro            # Add Form
│   │   │   │   └── [id].astro           # Edit Form
│   │   ├── media/                       # Media Library (/public/uploads viewer)
│   │   │   └── index.astro
│   │   └── settings/                    # Global Site Settings (Logo, SEO, Socials)
│   │       └── index.astro
│   └── api/
│       ├── auth/
│       │   ├── login.ts
│       │   └── logout.ts
│       ├── cms/
│       │   ├── save-page.ts
│       │   ├── save-collection.ts
│       │   └── delete-collection.ts
│       └── upload.ts                    # Direct disk upload to /public/uploads
```
