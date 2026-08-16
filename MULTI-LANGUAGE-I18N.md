# Multi-Language (i18n) & RTL Architecture

SPS-CMS provides a seamless, non-technical client-friendly multi-language (i18n) engine. Clients can manage websites in multiple languages (e.g. English, Bengali, Arabic) with zero layout breakage and full Right-to-Left (RTL) support.

---

## 1. How Multi-Language Works for the Client

```
┌────────────────────────────────────────────────────────────────────────┐
│                   I18N DUAL-MODE EDITING EXPERIENCE                    │
├───────────────────────────────────┬────────────────────────────────────┤
│ 1. Collection & Entity Forms      │ 2. Visual In-Context Live Editor   │
│    • Language Tabs at Top of Form │    • Edits the currently active    │
│      [ 🇺🇸 EN (Default) | 🇧🇩 BN |   │      locale route (/en, /bn, /ar) │
│        🇸🇦 AR (RTL) ]              │    • Real-time translation sync    │
│    • Auto-fallback to default lang│    • Automatic RTL text alignment  │
└───────────────────────────────────┴────────────────────────────────────┘
```

---

## 2. Configuration in `cms.config.ts`

Enabling multi-language requires declaring the `locales` array in `cms.config.ts`:

```typescript
export const cmsConfig = {
  siteTitle: "Global Agency Portal",
  defaultLocale: "en",
  locales: [
    { code: "en", label: "English", flag: "🇺🇸", default: true },
    { code: "bn", label: "বাংলা", flag: "🇧🇩" },
    { code: "ar", label: "العربية", flag: "🇸🇦", rtl: true }
  ],
  collections: [ ... ]
};
```

---

## 3. Database Schema for Multi-Language

SPS-CMS uses **Field-Level JSON Localization (The Cleanest & Most Performant Pattern)**:

### 1. `sps_pages` (Visual Page Content)
Stores key-value pairs with nested locale objects:
```json
{
  "hero.title": {
    "en": "Explore the World with Us",
    "bn": "আমাদের সাথে বিশ্ব ভ্রমণ করুন",
    "ar": "استكشف العالم معنا"
  },
  "hero.cta": {
    "en": "Book Now",
    "bn": "এখনই বুক করুন",
    "ar": "احجز الآن"
  }
}
```

### 2. `sps_collections` (Products, Packages, Real Estate, etc.)
The `data_json` and title fields store localized structures:
```json
{
  "title": {
    "en": "Bali 5-Day Tropical Escape",
    "bn": "বালি ৫ দিনের ট্রপিক্যাল ট্যুর",
    "ar": "جولة بالي الاستوائية لمدة ٥ أيام"
  },
  "description": {
    "en": "Enjoy luxury beach villas and island tours.",
    "bn": "বিলাসবহুল বিচ ভিলা এবং আইল্যান্ড ট্যুর উপভোগ করুন।",
    "ar": "استمتع بالفيلات الشاطئية الفاخرة والجولات في الجزر."
  }
}
```

---

## 4. Fallback Safety Law (Zero Broken Content)

If a client publishes a new product in English but hasn't written the Bengali or Arabic translation yet:
- The system **automatically falls back to the default locale (English)**.
- The website NEVER displays empty strings, broken layouts, or database errors.

---

## 5. Right-to-Left (RTL) Auto-Handling

When Arabic, Hebrew, or Persian is active:
- The `/admin` inputs for that language automatically apply `dir="rtl"`.
- The public site applies `dir="rtl"` to the `<html>` or container tag.
- Typography styles automatically switch to legible Arabic font tokens.
