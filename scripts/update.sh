#!/usr/bin/env bash
set -e

# ==============================================================================
# SPS-CMS Skill Updater
# ==============================================================================

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
echo "⚡ [SPS-CMS] Updating to latest release..."
bash "$DIR/install.sh"
echo "✨ [SPS-CMS] Update complete!"
