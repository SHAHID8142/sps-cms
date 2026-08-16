# Self-Contained Database Adapters (Zero-SaaS Law)

SPS-CMS strictly rejects third-party SaaS database locks. Every website runs on infrastructure **100% owned and paid for by the client**.

---

## 1. Supported Adapters

### Adapter A: Native MySQL / MariaDB (Default for Hostinger, cPanel & VPS)
- **Use When:** The client is on standard shared hosting (e.g. Hostinger Business / Cloud hosting), cPanel, or VPS with a MySQL database.
- **Driver:** `mysql2/promise` (zero build native compile issues).
- **Environment Variables:**
  ```env
  DATABASE_TYPE=mysql
  DB_HOST=localhost
  DB_PORT=3306
  DB_NAME=u123456_mysite_db
  DB_USER=u123456_admin
  DB_PASSWORD=SecurePassword123!
  ```

### Adapter B: SQLite / LibSQL (Zero-Config Embedded)
- **Use When:** The site is hosted on Node/VPS or serverless edge with low ops requirements, or during local development and preview.
- **Driver:** `better-sqlite3` or `@libsql/client`.
- **Environment Variables:**
  ```env
  DATABASE_TYPE=sqlite
  DATABASE_URL=file:./data/sps_cms.db
  ```

---

## 2. Universal Schema Architecture

### 1. `sps_pages` Table (For Engine A - Visual Content)
```sql
CREATE TABLE IF NOT EXISTS sps_pages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  content_json LONGTEXT NOT NULL,
  seo_meta JSON,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 2. `sps_collections` Table (For Engine B - Generic Dynamic Items)
To allow infinite custom collections without running complex DDL migrations every time a client creates a field, SPS-CMS uses a hybrid indexed-relational model:
```sql
CREATE TABLE IF NOT EXISTS sps_collections (
  id INT AUTO_INCREMENT PRIMARY KEY,
  collection_name VARCHAR(64) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) DEFAULT NULL,
  status ENUM('published', 'draft', 'archived') DEFAULT 'published',
  show_on_homepage TINYINT(1) DEFAULT 1,
  is_featured TINYINT(1) DEFAULT 0,
  order_index INT DEFAULT 0,
  featured_image VARCHAR(512) DEFAULT NULL,
  data_json LONGTEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY unique_collection_slug (collection_name, slug),
  INDEX idx_collection_home (collection_name, show_on_homepage, status),
  INDEX idx_collection_order (collection_name, order_index)
);
```

### 3. `sps_media` Table (For Local Media Library)
```sql
CREATE TABLE IF NOT EXISTS sps_media (
  id INT AUTO_INCREMENT PRIMARY KEY,
  filename VARCHAR(255) NOT NULL,
  filepath VARCHAR(512) NOT NULL,
  mime_type VARCHAR(64) NOT NULL,
  file_size INT NOT NULL,
  alt_text VARCHAR(255) DEFAULT '',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. `sps_settings` Table (Global Site Settings)
```sql
CREATE TABLE IF NOT EXISTS sps_settings (
  setting_key VARCHAR(64) PRIMARY KEY,
  setting_value LONGTEXT NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

## 3. Local Media Storage & Uploader (`/public/uploads`)

1. **Storage Path:** Uploaded images and documents are written directly to `public/uploads/` on the server disk.
2. **Naming Convention:** `[timestamp]-[sanitized-filename].[ext]` (e.g. `1723849102-bali-resort.webp`).
3. **Public URL Resolution:** Accessible directly as `/uploads/1723849102-bali-resort.webp`.
4. **Security & Sanitization:**
   - Whitelist file extensions: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`, `.pdf`, `.mp4`.
   - Block executable scripts (`.php`, `.js`, `.sh`, `.html`).
   - Max file size limit enforcement (default: 10MB).
