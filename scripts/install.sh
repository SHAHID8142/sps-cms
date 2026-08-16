#!/usr/bin/env bash
set -e

# ==============================================================================
# SPS-CMS Skill Installer
# Portable installer for Antigravity, Claude Code, Cursor, Windsurf, Codex, etc.
# ==============================================================================

SKILL_NAME="sps-cms"
REPO_URL="https://github.com/SHAHID8142/sps-cms"
TMP_DIR=$(mktemp -d)

echo "⚡ [SPS-CMS] Starting installation from $REPO_URL..."

# Clone latest repo to temp directory
git clone --depth 1 "$REPO_URL.git" "$TMP_DIR/$SKILL_NAME" 2>/dev/null || {
  echo "⚠️ Git clone failed, falling back to archive download..."
  mkdir -p "$TMP_DIR/$SKILL_NAME"
  curl -fsSL "$REPO_URL/archive/refs/heads/main.tar.gz" | tar -xz -C "$TMP_DIR/$SKILL_NAME" --strip-components=1
}

# Target Skill Directories across various AI agent hosts
TARGET_DIRS=(
  "$HOME/.gemini/config/skills/$SKILL_NAME"
  "$HOME/.claude/skills/$SKILL_NAME"
  "$HOME/.cursor/skills/$SKILL_NAME"
  "$HOME/.windsurf/skills/$SKILL_NAME"
  "$HOME/.agents/skills/$SKILL_NAME"
)

INSTALLED_COUNT=0

for TARGET in "${TARGET_DIRS[@]}"; do
  PARENT_DIR=$(dirname "$TARGET")
  if [ -d "$PARENT_DIR" ] || [ "$1" == "--all" ] || [[ "$TARGET" == *"/.gemini/"* ]]; then
    mkdir -p "$TARGET"
    cp -R "$TMP_DIR/$SKILL_NAME/"* "$TARGET/"
    echo "  ✅ Installed to: $TARGET"
    INSTALLED_COUNT=$((INSTALLED_COUNT + 1))
  fi
done

# Cleanup
rm -rf "$TMP_DIR"

if [ "$INSTALLED_COUNT" -gt 0 ]; then
  echo "✨ [SPS-CMS] Successfully installed across $INSTALLED_COUNT agent environment(s)!"
  echo "🚀 You can now use /sps-cms in Antigravity, Claude, Cursor, and Windsurf."
else
  # Default fallback if no special folder exists
  FALLBACK="$HOME/.agents/skills/$SKILL_NAME"
  mkdir -p "$FALLBACK"
  cp -R "$TMP_DIR/$SKILL_NAME/"* "$FALLBACK/"
  echo "✅ Installed to default skills path: $FALLBACK"
fi
