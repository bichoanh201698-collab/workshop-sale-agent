#!/usr/bin/env bash
# shot.sh <slide-number> [outfile] — renders one slide at full 4480x1120 via headless Chrome
set -euo pipefail
cd "$(dirname "$0")"
N="${1:-1}"
OUT="${2:-/private/tmp/claude-501/-Users-firegroup-orca-projects-Slide-speakers/dfadb842-3e4d-4a8d-8da6-6c2dd0677a65/scratchpad/slide-$N.png}"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=4480,1120 --virtual-time-budget=4000 \
  --screenshot="$OUT" "file://$PWD/index.html?export=1#$N" 2>/dev/null
echo "$OUT"
