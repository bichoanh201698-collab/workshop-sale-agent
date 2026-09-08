#!/usr/bin/env bash
# shot1.sh src/slides/05-fact.html  — render ONE partial in isolation at 4480x1120.
# Use this while building your own slides so you never collide with another builder.
set -euo pipefail
cd "$(dirname "$0")"
F="$1"
B=$(basename "$F" .html)
SCRATCH="/private/tmp/claude-501/-Users-firegroup-orca-projects-Slide-speakers/dfadb842-3e4d-4a8d-8da6-6c2dd0677a65/scratchpad"
TMP=".preview-$B.html"
{ cat src/shell.head.html; cat "$F"; cat src/shell.foot.html; } > "$TMP"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=4480,1120 --virtual-time-budget=4000 \
  --screenshot="$SCRATCH/$B.png" "file://$PWD/$TMP?export=1" 2>/dev/null
rm -f "$TMP"
sips -Z 1700 "$SCRATCH/$B.png" --out "$SCRATCH/$B-sm.png" >/dev/null
echo "$SCRATCH/$B-sm.png"
