#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/../artifacts/fly365-algarve/public/images"
image_tool=convert
if command -v magick >/dev/null 2>&1; then image_tool=magick; fi
# Keep originals as source files. Never upscale the small original photographs.
for spec in \
  "fly365-algarve-lagos-operation.png:320,640,837" \
  "fly365-flexwing-aircraft.png:160,320,388" \
  "ikarus-c42-fly365.jpg:320,640,702" \
  "logo.png:96,192"; do
  original="${spec%%:*}"
  IFS=, read -ra widths <<< "${spec#*:}"
  for width in "${widths[@]}"; do
    "$image_tool" "$original" -auto-orient -resize "${width}x>" -strip -quality 82 "${original%.*}-${width}.webp"
  done
done
