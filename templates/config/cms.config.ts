export interface CMSField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'textarea' | 'rich-text' | 'image' | 'gallery' | 'boolean' | 'select' | 'date' | 'repeater';
  required?: boolean;
  defaultValue?: any;
  placeholder?: string;
  options?: { label: string; value: string }[];
  fields?: CMSField[]; // For nested repeater structures
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
  database: 'mysql' | 'postgres' | 'sqlite' | 'd1' | 'libsql';
  mediaStorage: 'local' | 'r2' | 's3';
  mediaUploadDir: string;
  collections: CMSCollection[];
}

/**
 * Universal SPS-CMS Configuration
 * Model ANY bulk entity for ANY industry: Real Estate, Healthcare, Travel,
 * Restaurant, SaaS, E-Commerce, Education, Agency, or Custom.
 */
export const cmsConfig: CMSConfig = {
  siteTitle: "Client Management Portal",
  database: "mysql", // 'mysql' | 'postgres' | 'sqlite' | 'd1' | 'libsql'
  mediaStorage: "local", // 'local' | 'r2' | 's3'
  mediaUploadDir: "public/uploads",
  collections: [
    // Example 1: Real Estate / Property Management
    {
      name: "properties",
      label: "Properties",
      icon: "Building",
      slugPrefix: "properties",
      supportsHomepageToggle: true,
      supportsFeatured: true,
      fields: [
        { name: "title", label: "Property Title", type: "text", required: true },
        { name: "price", label: "Price ($)", type: "number", required: true },
        { name: "property_type", label: "Type", type: "select", options: [
          { label: "Villa", value: "villa" },
          { label: "Apartment", value: "apartment" },
          { label: "Commercial", value: "commercial" },
          { label: "Land", value: "land" }
        ]},
        { name: "bedrooms", label: "Bedrooms", type: "number" },
        { name: "bathrooms", label: "Bathrooms", type: "number" },
        { name: "area_sqft", label: "Area (Sq Ft)", type: "text" },
        { name: "location", label: "Location / Address", type: "text", required: true },
        { name: "featured_image", label: "Main Image", type: "image", required: true },
        { name: "gallery", label: "Property Gallery", type: "gallery" },
        { name: "description", label: "Property Overview", type: "rich-text" },
        {
          name: "amenities",
          label: "Key Amenities",
          type: "repeater",
          fields: [
            { name: "amenity_name", label: "Amenity (e.g. Swimming Pool, 24/7 Security)", type: "text" }
          ]
        }
      ]
    },

    // Example 2: Medical / Healthcare Clinic (Doctors)
    {
      name: "doctors",
      label: "Specialist Doctors",
      icon: "HeartPulse",
      slugPrefix: "doctors",
      supportsHomepageToggle: true,
      fields: [
        { name: "title", label: "Doctor Name", type: "text", required: true },
        { name: "specialty", label: "Specialty / Department", type: "text", required: true },
        { name: "degrees", label: "Qualifications (e.g. MBBS, FCPS)", type: "text" },
        { name: "experience_years", label: "Years of Experience", type: "number" },
        { name: "consultation_fee", label: "Consultation Fee ($)", type: "number" },
        { name: "featured_image", label: "Doctor Photo", type: "image", required: true },
        { name: "bio", label: "Doctor Biography", type: "rich-text" }
      ]
    },

    // Example 3: Travel & Tourism Packages
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
        { name: "duration", label: "Duration (e.g. 5 Days / 4 Nights)", type: "text", required: true },
        { name: "featured_image", label: "Featured Thumbnail", type: "image", required: true },
        { name: "gallery", label: "Gallery Photos", type: "gallery" },
        { name: "description", label: "Tour Overview", type: "rich-text" },
        {
          name: "itinerary",
          label: "Day-by-Day Itinerary",
          type: "repeater",
          fields: [
            { name: "day_title", label: "Day Heading", type: "text" },
            { name: "day_details", label: "Activities & Sightseeing", type: "textarea" }
          ]
        }
      ]
    },

    // Example 4: Restaurant / Cafe Menu Dishes
    {
      name: "dishes",
      label: "Menu Items",
      icon: "Utensils",
      slugPrefix: "menu",
      supportsHomepageToggle: true,
      fields: [
        { name: "title", label: "Dish Name", type: "text", required: true },
        { name: "price", label: "Price ($)", type: "number", required: true },
        { name: "category", label: "Menu Category", type: "select", options: [
          { label: "Starters & Appetizers", value: "starters" },
          { label: "Main Courses", value: "main" },
          { label: "Desserts", value: "desserts" },
          { label: "Beverages", value: "beverages" }
        ]},
        { name: "featured_image", label: "Dish Photo", type: "image" },
        { name: "ingredients", label: "Ingredients / Notes", type: "textarea" }
      ]
    }
  ]
};
