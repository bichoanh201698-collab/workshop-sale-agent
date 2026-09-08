#!/usr/bin/env bash
# Assembles index.html from the shell + every src/slides/*.html partial in name order.
set -euo pipefail
cd "$(dirname "$0")"
{
  cat src/shell.head.html
  for f in src/slides/*.html; do
    printf '\n<!-- ===== %s ===== -->\n' "$(basename "$f")"
    cat "$f"
  done
  cat src/shell.foot.html
} > index.html
n=$(grep -c 'class="slide' index.html || true)
echo "built index.html — ${n} slides, $(wc -c < index.html | tr -d ' ') bytes"
