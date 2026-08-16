# Framework Adapters: Astro & Next.js

SPS-CMS is designed to be framework-agnostic while utilizing the native superpowers of **Astro** and **Next.js**.

---

## 1. Astro Adapter (Recommended)

Astro is the gold standard for performance because regular visitors receive **0kb Admin JavaScript**, while admins get a rich interactive overlay.

### Directory Structure for Astro
```
src/
├── components/
│   ├── cms/
│   │   ├── AdminOverlay.tsx       # Interactive React Island (client:only="react")
│   │   └── EditableText.tsx       # Live content editable wrapper
├── lib/
│   └── db.ts                      # MySQL/SQLite query layer
├── pages/
│   ├── admin/                     # Admin Dashboard Routes
│   │   ├── index.astro
│   │   ├── login.astro
│   │   └── collections/
│   │       └── [...path].astro
│   ├── api/
│   │   ├── auth/
│   │   ├── cms/
│   │   └── upload.ts
│   ├── packages/
│   │   ├── index.astro            # Archive query
│   │   └── [slug].astro           # Dynamic detail query
│   └── index.astro                # Home page with featured query
```

### Public Page Layout Pattern (`src/layouts/Layout.astro`)
```astro
---
import AdminOverlay from '../components/cms/AdminOverlay';
const session = Astro.cookies.get('sps_admin_session');
const isAdmin = Boolean(session && session.value);
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <slot name="seo" />
  </head>
  <body>
    <!-- Live In-Context Editor Island (Only rendered for logged-in admin) -->
    {isAdmin && <AdminOverlay client:only="react" pageSlug={Astro.url.pathname} />}
    
    <slot />
  </body>
</html>
```

### Dynamic Collection Detail Pattern (`src/pages/packages/[slug].astro`)
```astro
---
import Layout from '../../layouts/Layout.astro';
import { getCollectionItemBySlug } from '../../lib/db';

const { slug } = Astro.params;
const packageItem = await getCollectionItemBySlug('packages', slug);

if (!packageItem) {
  return Astro.redirect('/404');
}
---
<Layout>
  <main class="max-w-5xl mx-auto py-12 px-4">
    <h1 class="text-4xl font-bold">{packageItem.title}</h1>
    <div class="mt-4 text-2xl text-emerald-600 font-semibold">${packageItem.price}</div>
    <img src={packageItem.featured_image} alt={packageItem.title} class="mt-6 w-full rounded-2xl" />
    
    <div class="mt-8 prose max-w-none">
      <p>{packageItem.data.description}</p>
    </div>

    {packageItem.data.itinerary && (
      <div class="mt-12">
        <h2 class="text-2xl font-bold mb-6">Itinerary</h2>
        <div class="space-y-4">
          {packageItem.data.itinerary.map((day: any, idx: number) => (
            <div class="border border-slate-200 p-4 rounded-xl">
              <h3 class="font-bold text-lg">{day.title || `Day ${idx + 1}`}</h3>
              <p class="text-slate-600 mt-2">{day.description}</p>
            </div>
          ))}
        </div>
      </div>
    )}
  </main>
</Layout>
```

---

## 2. Next.js Adapter (App Router)

### Server Actions & Revalidation Pattern
```typescript
// app/actions/cms.ts
'use server'

import { revalidatePath } from 'next/cache';
import { saveCollectionItem } from '@/lib/db';

export async function updatePackageAction(id: number, data: any) {
  await saveCollectionItem('packages', id, data);
  
  // Instant CDN & cache revalidation
  revalidatePath('/');
  revalidatePath('/packages');
  revalidatePath(`/packages/${data.slug}`);
  
  return { success: true };
}
```
