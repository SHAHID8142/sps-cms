# Installing and Managing SPS-CMS

`sps-cms` is a cross-agent, portable skill that can be installed on Mac, Linux, and Windows across any skills-compatible agent host.

---

## 1. Quick One-Line Install (Recommended)

Run this single command in your terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/SHAHID8142/sps-cms/main/scripts/install.sh | bash
```

This automatically detects your installed agent hosts and places the skill in the appropriate path:
- **Antigravity / Gemini:** `~/.gemini/config/skills/sps-cms`
- **Claude Code:** `~/.claude/skills/sps-cms`
- **Cursor:** `~/.cursor/skills/sps-cms`
- **Windsurf:** `~/.windsurf/skills/sps-cms`
- **Universal / Codex / Copilot:** `~/.agents/skills/sps-cms`

---

## 2. Manual Git Clone Install

If you prefer to install manually:

```bash
# For Antigravity
git clone https://github.com/SHAHID8142/sps-cms.git ~/.gemini/config/skills/sps-cms

# For Claude Code
git clone https://github.com/SHAHID8142/sps-cms.git ~/.claude/skills/sps-cms

# For Cursor
git clone https://github.com/SHAHID8142/sps-cms.git ~/.cursor/skills/sps-cms
```

---

## 3. Updating SPS-CMS

To update to the latest release:

```bash
curl -fsSL https://raw.githubusercontent.com/SHAHID8142/sps-cms/main/scripts/update.sh | bash
```

---

## 4. Uninstalling SPS-CMS

To remove the skill completely:

```bash
curl -fsSL https://raw.githubusercontent.com/SHAHID8142/sps-cms/main/scripts/uninstall.sh | bash
```
