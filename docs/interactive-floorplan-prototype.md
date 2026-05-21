# Interactive Floorplan Prototype Notes

This documents how the hidden `/interactive-floorplan` prototype works so future-us can keep iterating without rediscovering the whole thing.

## Location

- Live hidden route: `/interactive-floorplan`
- Page: `src/app/interactive-floorplan/page.tsx`
- Component: `src/components/InteractiveFloorplan.tsx`
- The page is intentionally `noindex,nofollow` and not linked from the homepage/nav.

## Current Architecture

The prototype is a curated marketing-site demo, not the full Cornerstone importer.

- `options[]` defines selectable structural options with:
  - `code` — normalized option code, e.g. `screened_porch`
  - `label`
  - `price`
  - `description`
  - `conflicts` — simple mutual exclusion rules
- React state stores selected option codes.
- `toggleOption()` adds/removes options and removes conflicting options.
- `FloorplanSvg()` renders the plan as inline SVG.
- Option-specific SVG groups use stable IDs that mimic the intended future compiler output:
  - `option-screened_porch`
  - `option-fireplace`
  - `option-third_car_garage`
  - `a-on-screened_porch-off-morning_room`
  - `a-on-morning_room-off-screened_porch`

## Visual Style Direction

The attached reference image looked like a modern sales floorplan, so the SVG was restyled toward:

- white sheet background
- cream/beige room fills
- dark navy exterior walls
- thinner navy interior walls
- no 3D shadows inside the plan
- room labels + dimension strings
- door openings with arc swings
- window bars
- kitchen island/counters/sink
- bath fixtures, shower, toilet
- stairs with treads + arrow
- dashed optional areas / notes
- option overlays in subtle blue/green, still visibly layered

## Why Inline SVG

Inline SVG is intentional for the prototype because it lets us:

- toggle groups directly with React conditionals
- name layers with Cornerstone-style option codes
- render the same state in the brochure preview
- later replace hand-authored groups with generated SVG groups from an importer/compiler

## Future Full Product Pipeline

For Cornerstone users, this should not require architects to follow our exact layer naming. The likely workflow:

1. Builder uploads base plan + option variant PDFs/DWGs/DXFs.
2. Convert drawings to SVG while preserving as much geometry/layer/text data as possible.
3. Extract text labels and coordinates.
4. AI maps drawing labels to Cornerstone option codes.
5. Geometry diffing / spatial clustering proposes SVG groups for each option.
6. Conditional geometry groups are generated for combinations, e.g. `a-on-screened_porch-off-morning_room`.
7. Human review UI confirms highlights, conflicts, dependencies, and dimensions.
8. Approved layered SVG + rules JSON powers buyer configurator and print/brochure output.

## Important Caveat

AI can map labels well, but it cannot reliably infer all conditional geometry from one flat drawing. The trustworthy version needs either:

- architect-provided variant sheets,
- CAD layer hints,
- clear callout conventions,
- or a human confirmation step.

## Deployment Notes

Deploy by pushing to `master` in `cornerstone-marketing-v2`. Vercel auto-deploys production. Do **not** use `vercel --prod`.
