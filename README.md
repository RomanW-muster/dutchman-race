# The Flying Dutchman Race

A study-day race against a ghost ship. It's one `index.html` with no build step, so it runs on GitHub Pages as is.

## Put it online (GitHub Pages, free)

1. On github.com, click **New repository**. Name it e.g. `dutchman-race` and make it **Public**. (Pages is free for public repos; a private repo needs a paid plan.) Your study data is never in the repo. It lives in your browser, so a public repo only shows the code and art.
2. Click **uploading an existing file** and drag in everything from this folder: `index.html`, `manifest.webmanifest`, `sw.js`, the `icons` folder and your `art` folder. Commit.
3. Go to **Settings → Pages**. Under *Build and deployment*, pick **Deploy from a branch**, set **main** and **/ (root)**, then **Save**.
4. After a minute or so it's live at `https://<your-username>.github.io/dutchman-race/`.
5. Open that link in Chrome and click the **Install** icon in the address bar (or ⋮ → *Cast, save and share → Install page as app*). It opens in its own window with a dock icon, so you can leave it open all day and it won't get lost among tabs. It also works offline.
6. Optional: ⚙ Settings → **Turn on end-of-session notifications** gives you a desktop pop-up at 50:00 when the window isn't in front.

**Updating later:** upload the changed file to the repo again. The app always fetches the newest version when you're online.

## Your data

- Saved in the browser (localStorage) on the site where you open it. The local-file version and the GitHub version count as different sites. To move data over, use **Export** on the old one and **Import** on the new one (import merges, it never wipes).
- Export a backup now and then; clearing your browser's site data deletes it.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole game |
| `art/` | Your images (see `ART_BRIEF.md`). Missing ones fall back to placeholders. |
| `icons/` | App icons for install (placeholders, so swap in your own 192 px and 512 px PNGs if you like) |
| `manifest.webmanifest`, `sw.js` | Make it installable and let it open offline |
