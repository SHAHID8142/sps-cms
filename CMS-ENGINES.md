# The Dual-Engine Admin & Polymorphic Collection Architecture

SPS-CMS strictly separates content editing into two complementary engines inside `/admin`:
1. **Engine A (Visual In-Context Page Editor):** For static page text and media.
2. **Engine B (Centralized Polymorphic Collection Manager):** For ANY bulk/repeat entities across any industry.

---

## Engine A: Visual In-Context Page Editor (For Pages & Sections)

### Use Case
- Landing page copy, Hero headlines, Subtitles, Call-to-action buttons.
- About Us company narrative, Mission/Vision statements.
- Contact info, FAQs, Footer links, Announcement banners.

### UX Flow
1. Admin logs into `/admin` or visits the site with an active session.
2. Floating top bar appears: `[ ⚡ Edit Mode: ON ] | Page: Home (/) | [ 💾 Save Draft ] [ 🚀 Publish ]`.
3. **Inline Text Editing:** Clicking any text wrapped in `<EditableText id="hero.title" default="Headline" />` activates an inline content-editable cursor.
4. **Image Swapping:** Clicking an `<EditableImage id="hero.bg" />` opens a sleek upload modal that writes directly to `/public/uploads` (or R2/S3) and updates the live preview immediately.
5. **Anti-Breakage Guarantee:** CSS styles, fonts, margins, and design tokens remain 100% locked.

---

## Engine B: Universal Polymorphic Collection Manager (For ALL Bulk Entities)

Any repeat or bulk data entity is defined in `cms.config.ts`. The CMS engine automatically generates:
1. A dedicated sidebar navigation tab with a custom icon.
2. A searchable, filterable Data Table.
3. A structured Shopify-style Add/Edit form with inspector sidebars and auto-slugs.

### Industry Examples of Polymorphic Collections

```
┌─────────────────────────┬─────────────────────────┬─────────────────────────┐
│ Real Estate Agency      │ Medical / Clinic        │ Restaurant & Cafe       │
├─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ • Properties            │ • Doctors / Specialists │ • Menu Categories       │
│ • Floor Plans           │ • Clinic Branches       │ • Food Dishes & Drinks  │
│ • Agents / Brokers      │ • Patient Testimonials  │ • Chef Specials         │
├─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ Education & Academy     │ SaaS & Digital Products │ Tourism & Travel        │
├─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ • Courses & Workshops   │ • Product Features      │ • Tour Packages         │
│ • Instructors           │ • Case Studies          │ • Destinations          │
│ • Student Reviews       │ • Changelog Entries     │ • Itineraries & Guides  │
└─────────────────────────┴─────────────────────────┴─────────────────────────┘
```

---

### 1. The Universal List View (Data Table)
Located at `/admin/collections/[name]`.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  🏢 REAL ESTATE PROPERTIES                                        [ + Add New Property]│
├────────────────────────────────────────────────────────────────────────────────────────┤
│  [🔍 Search properties...]  [Type: All ▼]  [Status: All ▼]  [Sort: Newest ▼]           │
├──────┬────────────────────────────┬──────────┬─────────────┬─────────────┬─────────────┤
│ Photo│ Title                      │ Price    │ Home Feature│ Status      │ Actions     │
├──────┼────────────────────────────┼──────────┼─────────────┼─────────────┼─────────────┤
│ 🖼️   │ Marina Bay Luxury Villa    │ $1.2M    │    [ ON ]   │  Published  │ Edit ✏️  🗑️ │
│ 🖼️   │ Downtown Penthouse Studio  │ $650K    │    [ OFF]   │  Published  │ Edit ✏️  🗑️ │
│ 🖼️   │ Palm Heights Modern House  │ $890K    │    [ ON ]   │  Draft      │ Edit ✏️  🗑️ │
└──────┴────────────────────────────┴──────────┴─────────────┴─────────────┴─────────────┘
```

#### Key List Features:
- **Instant Search & Filter:** Filter by keywords, categories/types, and publication status.
- **Quick Switch Toggles:** Toggle `show_on_homepage` directly in the table row without opening the form.
- **Bulk Actions:** Bulk delete, bulk status toggle.

---

### 2. The Universal Two-Column Add / Edit Form

Located at `/admin/collections/[name]/new` or `/admin/collections/[name]/edit/[id]`.

```
┌───────────────────────────────────────────────────┬──────────────────────────────────┐
│  ⬅️ Back to List          Editing Item            │  [ Save Draft ]  [ 🚀 Publish ]  │
├───────────────────────────────────────────────────┼──────────────────────────────────┤
│  📌 MAIN COLUMN (Content & Repeaters)             │  ⚙️ INSPECTOR SIDEBAR            │
│                                                   │                                  │
│  Title / Name *                                   │  • Publishing & Visibility       │
│  [ Marina Bay Luxury Villa                     ]  │    Status: [ Published ▼ ]       │
│                                                   │    [✔] Show on Homepage          │
│  URL Slug (Auto-generated & Conflict-Free)        │    [✔] Mark as Featured / Hot    │
│  https://mysite.com/properties/[ marina-bay-villa]│                                  │
│                                                   │  • Taxonomy & Category           │
│  Numeric Index (Price / Ordering)                 │    Category: [ Luxury Villa ▼ ]  │
│  Price / Metric: [ 1200000 ]                      │                                  │
│                                                   │  • Main Featured Image           │
│  Custom Dynamic Fields & Repeaters                │    ┌───────────────────────────┐ │
│  • Bedrooms: [ 4 ]   • Bathrooms: [ 3.5 ]         │    │ [ Villa-Front.webp ]      │ │
│  • Square Feet: [ 3,800 sqft ]                    │    │ [ Change ] [ Remove ]     │ │
│  • Amenities Repeater: [ Pool, Gym, Smart Home ]  │    └───────────────────────────┘ │
│  • Description (Rich Text Editor)                 │                                  │
│                                                   │  • SEO Meta                      │
│                                                   │    Meta Title / Description      │
└───────────────────────────────────────────────────┴──────────────────────────────────┘
```
