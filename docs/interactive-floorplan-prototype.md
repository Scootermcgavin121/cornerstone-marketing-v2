# Interactive Floorplan Prototype Notes

This documents how the hidden `/interactive-floorplan` prototype works so future-us can keep iterating without rediscovering the whole thing.

## Location

- Live hidden route: `/interactive-floorplan`
- Page: `src/app/interactive-floorplan/page.tsx`
- Component: `src/components/InteractiveFloorplan.tsx`
- Base floorplan asset: `public/prototypes/floorplans/ava-first-floor.png`
- Source PDF used for the current prototype: `C:\Users\scott\OneDrive\DELAWARE\FLOORPLANS\.SAH FLOORPLANS\AVA\Ava Redesign 260508.pdf`
- The page is intentionally `noindex,nofollow` and not linked from the homepage/nav.

## Current Ava Prototype Architecture

The prototype is now based on the real **Scott Alan Homes Ava Redesign** first-floor plan instead of a hand-drawn fake plan.

- The PDF has 4 sheets:
  - `A-1.0` basement floor plan
  - `A-2.0` first floor plan
  - `A-2.0` alternate first floor design
  - `A-3.0` elevations
- We rendered sheet/page 2 to PNG with PyMuPDF and cropped the central first-floor plan.
- `FloorplanSvg()` uses an inline SVG wrapper and embeds the real crop via:
  - `<image href="/prototypes/floorplans/ava-first-floor.png" ... />`
- React conditionally renders SVG overlay groups on top of that crop.

## Current Option Codes

`options[]` defines selectable Ava callouts with:

- `screened_porch` — highlights the rear covered porch / optional screened porch zone
- `raised_ceiling` — highlights the great room optional raised ceiling callout
- `owners_tray_ceiling` — highlights the owner suite optional tray ceiling callout
- `garage_extension` — highlights the optional 2' garage extension
- `alternate_bedroom_layout` — highlights the bedroom wing area represented by the alternate first-floor sheet

Each option group still uses stable IDs so the future product can replace manual coordinates with generated/imported geometry:

- `option-screened_porch`
- `option-raised_ceiling`
- `option-owners_tray_ceiling`
- `option-garage_extension`
- `option-alternate_bedroom_layout`

## PDF-to-Web Asset Workflow Used

1. Copy the source PDF into a local workspace temp directory because some analysis tools cannot read arbitrary OneDrive paths.
2. Render pages with PyMuPDF (`fitz`) at 2x scale.
3. Inspect page images and choose the central first-floor plan on page 2.
4. Crop out the title block / partial details.
5. Save optimized PNG to `public/prototypes/floorplans/ava-first-floor.png`.
6. Use SVG overlays for interactivity instead of editing the floorplan image directly.

Current crop script logic was equivalent to:

```py
from PIL import Image
from pathlib import Path

img = Image.open("tmp/ava-pages/page-2.png")
crop = img.crop((1250, 235, 3540, 3200))
out = Path("public/prototypes/floorplans/ava-first-floor.png")
out.parent.mkdir(parents=True, exist_ok=True)
crop.save(out, optimize=True)
```

## Why Image + SVG Overlay First

For the website prototype, the real floorplan crop is more credible than a hand-authored SVG recreation. The overlay approach lets us:

- show a true Scott Alan Homes plan immediately
- toggle option highlights cleanly
- keep the base plan visually exact
- avoid pretending we already have a full CAD/PDF geometry compiler
- later swap the image crop for real vector layers when the importer exists

## Future Full Product Pipeline

For Cornerstone users, this should not require architects to follow our exact layer naming. The likely workflow:

1. Builder uploads base plan + option variant PDFs/DWGs/DXFs.
2. Convert drawings to SVG while preserving as much geometry/layer/text data as possible.
3. Extract text labels and coordinates.
4. AI maps drawing labels to Cornerstone option codes.
5. Geometry diffing / spatial clustering proposes SVG groups for each option.
6. Conditional geometry groups are generated for combinations where possible.
7. Human review UI confirms highlights, conflicts, dependencies, and dimensions.
8. Approved layered SVG + rules JSON powers buyer configurator and print/brochure output.

## Important Caveat

AI can map labels and suggest regions well, but it cannot reliably infer all conditional geometry from one flat drawing. The trustworthy product needs either:

- architect-provided variant sheets,
- CAD layer hints,
- clear callout conventions,
- or a human confirmation step.

## Deployment Notes

Deploy by pushing to `master` in `cornerstone-marketing-v2`. Vercel auto-deploys production. Do **not** use `vercel --prod`.
