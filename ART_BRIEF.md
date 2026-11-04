# Art brief: The Flying Dutchman Race

The game already runs with simple placeholder shapes. Each image you drop into an `art` folder **next to `index.html`** replaces its placeholder automatically. You don't need to touch the code. Refresh the page, then open ⚙ Settings to see which images loaded.

```
index.html
art/
  ship.png        dutchman.png     island.png      buoy.png
  wave-back.png   wave-mid.png     wave-front.png
  doubloon.png    leak.png
  celebrate.png   sun.png          moon.png        (optional)
```

## Rules for every image

- **PNG with a transparent background.** If Image 2 gives you a solid background, cut it out before you drop the file in. Otherwise you'll see a box.
- **No text, no water under objects, no ground shadow.** The code draws the sea, the sinking and the glow.
- **Ships face right** (they sail left → right), in side view.
- Exact pixel sizes don't matter; the code scales each image by width. Just keep the **shape** (aspect ratio) roughly as listed.

**Style line to paste at the start of every prompt:**
> Flat, warm, cartoonish 2D game sprite. Clean bold shapes, simple soft shading, dark-brown outlines. Transparent background, no text. Palette: wood browns, cream sails, gold accents, navy and teal sea tones, eerie mint green for ghostly things.

## The images

| File | Shape | Shown at | Notes |
|---|---|---|---|
| `ship.png` | landscape ~6:5 (e.g. 1200×1000) | 150 px wide | Hull bottom = bottom edge of the image. The game sinks it lower as water rises. |
| `dutchman.png` | landscape ~6:5 | 130 px wide | Draw it solid. The code makes it see-through (72%) and adds the glow. |
| `island.png` | roughly square or slightly wide | ~17% of scene width | Flat bottom where it meets the sea. |
| `buoy.png` | tall 1:2 | 40 px wide | |
| `wave-back.png` / `wave-mid.png` / `wave-front.png` | wide strip ~5:1 (e.g. 1600×320) | 72 / 94 / 84 px tall | Must tile seamlessly left↔right. Light teal → teal → deep navy. |
| `doubloon.png` | square | 34 px icon | Used on the +1 QUESTION button and in the log. |
| `leak.png` | square | 34 px icon | Used on the LEAK button and in the log. |
| `celebrate.png` *(optional)* | wide 2:1 | 220 px wide | Appears above "You outran the Flying Dutchman!" |
| `sun.png`, `moon.png` *(optional)* | square | 70 px | |

## Prompts

**ship.png:** A small leaky wooden pirate ship in side view, facing right. The hull has three or four mismatched wooden patches nailed on and a couple of water drips leaking out. One mast with two patched cream sails and a little black skull-and-crossbones flag on top. Gold trim along the deck rail. The bottom of the hull is the bottom edge of the image, with no water drawn.

**dutchman.png:** A ghostly pirate galleon in side view, facing right. Pale mint-green hull, tattered, torn sails that glow faintly, thin wisps of mist curling off the deck. Eerie but charming, not scary. The bottom of the hull is the bottom edge of the image, with no water drawn.

**island.png:** A small treasure island: a mound of golden sand, one curved palm tree, and an open treasure chest spilling gold coins. Flat bottom edge where it meets the sea, nothing below it.

**buoy.png:** A red-and-white striped sea buoy with a small glowing yellow lamp on top. Tall and narrow, with no water drawn.

**wave-back.png / wave-mid.png / wave-front.png:** A horizontal strip of cartoon ocean waves. Rounded wave crests run along the top edge, with solid sea colour filling everything below them to the bottom edge. Fully transparent above the crests. The strip must tile seamlessly left to right. Make three versions: light teal (#2a8aa6), mid teal (#1a6987) and deep navy (#0f3a5f).
*If Image 2 can't make a clean seamless tile, skip the waves. The placeholder waves look fine and a visible seam won't.*

**doubloon.png:** A shiny gold pirate doubloon, front view, with a small anchor stamped in the centre. Simple icon, readable at small size.

**leak.png:** A single bright blue water droplet with a small white highlight. Simple icon, readable at small size.

**celebrate.png (optional):** A burst of white cannon-smoke puffs with gold coins and confetti flying outward.

**sun.png / moon.png (optional):** A flat cartoon sun with a soft warm glow / a pale crescent moon. No faces.

## Tweaks in the code (top of the script, `ART` block)

- `ghostOpacity: 0.72`: raise this if your ghost image is already semi-transparent and looks too faint.
- To use different file names or a different folder, edit `ART.files` / `ART.folder`.
