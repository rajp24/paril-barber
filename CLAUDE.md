# Paril Barber — Project Briefing

## What This Is
A personal barber landing page for **Paril**, a barber at **Fade Mansion**. The site is a single-page HTML site (`index.html`) with 4 compressed video files alongside it. It is deployed on Vercel, connected to a GitHub repo. Every `git push` to `main` auto-deploys.

---

## File Structure
```
paril-barber/
├── index.html       ← entire site (HTML + CSS + JS + base64 images)
├── vid1.mp4         ← main showcase video (hero player)
├── vid2.mp4         ← sub showcase clip
├── vid3.mp4         ← sub showcase clip
├── vid4.mp4         ← sub showcase clip
└── CLAUDE.md        ← this file
```

---

## Tech Stack
- Pure HTML/CSS/JS — no frameworks, no build step
- Images are base64-encoded and embedded directly in index.html
- Videos are referenced by relative path (vid1.mp4 etc.)
- Fonts: Bebas Neue + DM Sans via Google Fonts
- Deployed on Vercel as a static site

---

## Color Scheme
- Background: `#111` / `#0d0d0d`
- Accent: `#7ab8d4` (light blue)
- Text: `#f0ede6` (off-white)
- Cards/surfaces: `#141414` / `#161616`
- Borders: `0.5px solid #1e1e1e` or `#252525`

---

## Typography
- Headings: `Bebas Neue` — large, tracked, uppercase
- Body: `DM Sans` — light weight (300), generous line height
- Labels: 10–11px, letter-spacing 3–4px, uppercase, accent color

---

## Page Sections (top to bottom)
1. **Nav** — sticky, blur backdrop. Left: "Paril" name + IG icon + TikTok icon. Center: page links. Right: Book Now button
2. **Hero** — full viewport height, background photo of Paril cutting hair, name "PARIL" large, social icons beside the name, tagline, Book Now + Learn More CTAs
3. **About** — two column: left is bio text + 4 stats grid, right is basketball lifestyle photo with tag "Off the court, on the chair"
4. **Journey** — "Where I Started. Where I Cut Now." Two cards side by side with VS divider. Left: basement/early days photo (landscape). Right: Fade Mansion shop photo (portrait). Images render at natural aspect ratio — NO fixed height cropping. Text caption below each image.
5. **Showcase** — dark bg section. Large 16:9 main video player (vid1.mp4) with poster frame and play button. Below: 3-column grid of sub videos (vid2, vid3, vid4) each with poster + play.
6. **Services** — 3-column grid of service cards. Each card links to Squire booking URL. Shows name, price, duration.
7. **Socials** — Instagram, TikTok, Book on Squire links as row of bordered buttons
8. **Contact + Location** — two column. Left: email button. Right: address + Get Directions button (auto-detects Apple Maps vs Google Maps by device)
9. **QR Code bar** — SVG QR placeholder + "Scan to Book" copy
10. **Footer** — "Paril · Fade Mansion" left, "Powered by [Your Brand]" right

---

## Placeholders Still Needed From Client
Replace these strings throughout index.html:
- `YOUR_SQUIRE_LINK` → Paril's actual Squire booking URL
- `YOUR_IG` → Instagram handle (e.g. `parilcuts`)
- `YOUR_TT` → TikTok handle
- `YOUR_EMAIL@gmail.com` → Paril's email
- `YOUR ADDRESS HERE` / `City, State ZIP` → Fade Mansion address
- Services and prices → confirm with Paril
- Stats (years, rating) → confirm with Paril
- Bio text → confirm or rewrite with Paril
- `[Your Brand]` in footer → your company name
- QR code SVG → regenerate pointing to actual Squire link

---

## Key Design Rules — Do Not Break These
- **Journey section images must use `height:auto` — never fixed height.** The two photos are different orientations (landscape vs portrait) and must render at their natural ratio. Fixed height causes cropping.
- Videos play inline on click — no new tab, no modal
- All booking CTAs link to Squire URL
- Get Directions detects iOS vs Android: iOS → `maps.apple.com`, Android → `maps.google.com`
- Nav is sticky with `backdrop-filter: blur(10px)`
- Mobile breakpoint at 768px: nav links hidden, single column layouts

---

## How to Deploy
```bash
git add .
git commit -m "your message"
git push origin main
# Vercel auto-deploys on push
```

## How to Add a New Photo
1. Convert image to base64: `base64 -i photo.jpg | tr -d '\n'`
2. Paste into index.html as `<img src="data:image/jpeg;base64,PASTE_HERE">`
3. Or use Python: `python3 -c "import base64; print(base64.b64encode(open('photo.jpg','rb').read()).decode())"`

## How to Add a New Video
1. Compress with ffmpeg: `ffmpeg -i input.mov -vf scale=854:-2 -c:v libx264 -crf 32 -preset fast -c:a aac -b:a 96k output.mp4`
2. Drop the .mp4 into the project folder
3. Reference it in index.html by filename

---

## Business Context
This is one of multiple barber/stylist landing pages. The model is:
- Build a landing page per barber
- Host on Vercel under a subdomain or custom domain
- Charge barber a monthly fee (~$15–50/mo depending on tier)
- Optional: monthly analytics reports (page views, clicks, button engagement)
- Analytics can be added via Plausible or Fathom (privacy-friendly, no ads)
