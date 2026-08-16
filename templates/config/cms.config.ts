export interface CMSField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'textarea' | 'rich-text' | 'image' | 'gallery' | 'boolean' | 'select' | 'repeater';
  required?: boolean;
  defaultValue?: any;
  placeholder?: string;
  options?: { label: string; value: string }[];
  fields?: CMSField[]; // For nested repeater fields (e.g. Day-by-Day itinerary)
}

export interface CMSCollection {
  name: string;
  label: string;
  icon?: string;
  slugPrefix?: string;
  fields: CMSField[];
  supportsHomepageToggle?: boolean;
  supportsFeatured?: boolean;
}

export interface CMSConfig {
  siteTitle: string;
  database: 'mysql' | 'sqlite';
  mediaUploadDir: string;
  collections: CMSCollection[];
}

export const cmsConfig: CMSConfig = {
  siteTitle: "Sample CMS Client Portal",
  database: "mysql",
  mediaUploadDir: "public/uploads",
  collections: [
    {
      name: "packages",
      label: "Tour Packages",
      icon: "Plane",
      slugPrefix: "packages",
      supportsHomepageToggle: true,
      supportsFeatured: true,
      fields: [
        { name: "title", label: "Package Title", type: "text", required: true },
        { name: "price", label: "Price ($)", type: "number", required: true },
        { name: "sale_price", label: "Sale Price ($)", type: "number" },
        { name: "duration", label: "Duration (e.g. 5 Days / 4 Nights)", type: "text", required: true },
        { name: "featured_image", label: "Featured Image", type: "image", required: true },
        { name: "gallery", label: "Gallery Photos", type: "gallery" },
        { name: "category", label: "Category", type: "select", options: [
          { label: "International Tours", value: "international" },
          { label: "Domestic Tours", value: "domestic" },
          { label: "Adventure & Treks", value: "adventure" },
          { label: "Honeymoon Specials", value: "honeymoon" }
        ]},
        { name: "description", label: "Full Description", type: "rich-text" },
        {
          name: "itinerary",
          label: "Day-by-Day Itinerary",
          type: "repeater",
          fields: [
            { name: "day_title", label: "Day Title (e.g. Day 1: Arrival & Welcome Dinner)", type: "text" },
            { name: "day_details", label: "Activities & Details", type: "textarea" }
          ]
        },
        { name: "meta_title", label: "SEO Meta Title", type: "text" },
        { name: "meta_description", label: "SEO Meta Description", type: "textarea" }
      ]
    },
    {
      name: "services",
      label: "Services",
      icon: "Wrench",
      slugPrefix: "services",
      supportsHomepageToggle: true,
      fields: [
        { name: "title", label: "Service Name", type: "text", required: true },
        { name: "icon_name", label: "Icon Name", type: "text" },
        { name: "featured_image", label: "Thumbnail Image", type: "image" },
        { name: "short_desc", label: "Short Description", type: "textarea", required: true },
        { name: "full_content", label: "Full Details", type: "rich-text" }
      ]
    }
  ]
};
