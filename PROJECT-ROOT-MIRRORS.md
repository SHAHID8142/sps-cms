# Project Root Mirrors for SPS-CMS

When initializing or verifying a project with SPS-CMS, mirror the CMS architecture rules into your project root configuration files to ensure every AI tool recognizes the standard:

### 1. `AGENTS.md` / `GEMINI.md` / `CLAUDE.md`
Add the following directive to your agent config:

```markdown
## CMS Architecture Standard
This project uses **sps-cms** standards:
- Zero external SaaS CMS dependencies; all data is stored in native MySQL/SQLite on client hosting.
- Media uploads reside in `/public/uploads`.
- Public pages utilize the Dual-Engine model (`/admin` + Visual In-Context Overlay).
- Dynamic collections (Products, Packages, Services) must enforce single source of truth auto-sync.
- Every CMS feature requires passing the roundtrip verification gate.
```
