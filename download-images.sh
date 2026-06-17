#!/usr/bin/env bash
# download-images.sh
#
# Run this once from the project root after unzipping.
# It downloads every image from the original everettdupen.com site
# into the correct public/ folders so the site can serve its own images.
#
# Usage:
#   chmod +x download-images.sh
#   ./download-images.sh
#
# Requires: curl (pre-installed on macOS and most Linux distros)

set -euo pipefail

BASE="http://everettdupen.com"
PUB="$(cd "$(dirname "$0")" && pwd)/public"
OK=0; FAIL=0; SKIP=0

dl() {
  local url="$BASE/$1"
  local dest="$PUB/$1"
  local dir; dir="$(dirname "$dest")"
  mkdir -p "$dir"
  if [[ -f "$dest" ]]; then
    echo "  SKIP  $1 (already exists)"
    ((SKIP++)) || true
    return
  fi
  if curl -fsSL --max-time 30 "$url" -o "$dest"; then
    echo "  OK    $1"
    ((OK++)) || true
  else
    echo "  FAIL  $1"
    ((FAIL++)) || true
  fi
}

echo ""
echo "Downloading Everett DuPen images → public/"
echo "==========================================="
echo ""

# ── BRONZE (39) ──────────────────────────────────────────────────
echo "Bronze..."
dl "works/Singers-and-Dancers.jpg"
dl "works/Sea-Form.jpg"
dl "works/Genesis3.jpg"
dl "works/Pensive.jpg"
dl "works/Balarina-Tying-Slipper.jpg"
dl "works/St.-Simone-the-Stylite.jpg"
dl "works/abundance.jpg"
dl "works/falling_man.jpg"
dl "works/Family-Security-Male-and-Female.jpg"
dl "works/Dreaming.jpg"
dl "works/Marguerite-Jumping.jpg"
dl "works/Jump-Rope.jpg"
dl "works/Pogo-Stick-Girl.jpg"
dl "works/dupen_balarina_resting.jpg"
dl "works/dupen_eve.jpg"
dl "works/Adam-and-Eve.jpg"
dl "works/Beach-Ball.jpg"
dl "works/Celestia.jpg"
dl "works/Dance-Fantasy.jpg"
dl "works/Diver.jpg"
dl "works/Figure-in-Spiral-Form-or-Standing-Bather.jpg"
dl "works/Grandson-Aaron.jpg"
dl "works/Horizontal-Intertwine.jpg"
dl "works/Icarus.jpg"
dl "works/Lotus.jpg"
dl "works/Lovers-or-Affections.jpg"
dl "works/Lullaby.jpg"
dl "works/Madonna-of-the-Two-Cities.jpg"
dl "works/Marguerite-Leaping.jpg"
dl "works/Neptune's-Daughter.jpg"
dl "works/Owls.jpg"
dl "works/Rising-to-the-Sun.jpg"
dl "works/Samantha.jpg"
dl "works/The-Reader-and-Female-Relief.jpg"
dl "works/Upheaval.jpg"
dl "works/Vaulting-Kouros.jpg"
dl "works/Vertical-Intertwine.jpg"
dl "works/Voyager.jpg"
dl "works/Westwind.jpg"

# ── WOOD (18) ────────────────────────────────────────────────────
echo ""
echo "Wood..."
dl "works/standingwoman.jpg"
dl "works/Growing-Up.jpg"
dl "works/After-the-Shower.jpg"
dl "works/Brutus.jpg"
dl "works/Concert-Gathering.jpg"
dl "works/Angel-and-Virgin-of-Annuncation.jpg"
dl "works/Family-Group.jpg"
dl "works/Female-Portrait-Bust.jpg"
dl "works/Figure-Form.jpg"
dl "works/Genesis-(2).jpg"
dl "works/Visitation.jpg"
dl "works/Moses-and-the-Burning-Bush.jpg"
dl "works/Northwest-Fishermen.jpg"
dl "works/Observer.jpg"
dl "works/Reflection.jpg"
dl "works/Shower.jpg"
dl "works/Singer.jpg"
dl "works/Sunshine.jpg"

# ── STONE (10) ───────────────────────────────────────────────────
echo ""
echo "Stone..."
dl "works/Swimmer2.jpg"
dl "works/Waiting-Room.jpg"
dl "works/Dixie.jpg"
dl "works/Stylized-Head.jpg"
dl "works/Prometheus.jpg"
dl "works/Owl-Family.jpg"
dl "works/Bathsheba.jpg"
dl "works/Marble-Girl.jpg"
dl "works/Indecision.jpg"
dl "works/Happy-Gardener.jpg"

# ── DRAWINGS (20) ────────────────────────────────────────────────
echo ""
echo "Drawings..."
dl "works/drawing1.jpg"
dl "works/drawing2.jpg"
dl "works/drawing3.jpg"
dl "works/drawing4.jpg"
dl "works/drawing5.jpg"
dl "works/drawing6.jpg"
dl "works/drawing7.jpg"
dl "works/drawing8.jpg"
dl "works/new-drawing-1.JPG"
dl "works/new-drawing-2.JPG"
dl "works/new-drawing-3.JPG"
dl "works/new-drawing-4.JPG"
dl "works/new-drawing-5.jpg"
dl "works/new-drawing-6.JPG"
dl "works/new-drawing-7.jpg"
dl "works/new-drawing-8.jpg"
dl "works/new-drawing-9.jpg"
dl "works/new-drawing-10.jpg"
dl "works/new-drawing-11.jpg"
dl "works/new-drawing-12.jpg"

# ── PORTRAITS & OTHER ────────────────────────────────────────────
echo ""
echo "Portraits & other..."
dl "images/dupen-closeup.jpg"
dl "contact/posed_with_saint.jpg"

# ── SUMMARY ──────────────────────────────────────────────────────
echo ""
echo "==========================================="
echo "Done.  ✓ $OK downloaded  ↷ $SKIP skipped  ✗ $FAIL failed"
echo ""

if [[ $FAIL -gt 0 ]]; then
  echo "⚠  Some images failed. Re-run to retry (files already on disk are skipped)."
  echo "   Persistent failures may mean that image was removed from the original site."
  exit 1
fi
