## v0.1.28 · May 8, 2026

**Add SMS consent disclosure to waitlist forms for 10DLC compliance**
Added the required SMS consent language directly below the phone input on both the waitlist section form and the modal popup, with links to the Privacy Policy and Terms pages.

You can now see the full opt-in disclosure on both waitlist forms — required for Twilio 10DLC registration approval.

📄 index.html

---

## v0.1.27 · May 6, 2026

**Month filter for Past Blasts in admin**
Added a month dropdown above the blast history table that filters blasts by month. Dropdown is populated dynamically from months that actually have blasts, defaults to the current month, and shows a count like "3 blasts".

You can now jump to any previous month's blast history from the dropdown — only months with at least one blast appear as options.

📄 admin.html, api/get-slots.js

---

## v0.1.26 · May 6, 2026

**Add "available until" date to waitlist**
Added an optional date field to both waitlist forms so people can specify when they need a haircut by. The slot blast now only messages people whose deadline hasn't passed. Admin shows the date per entry, greyed out if expired.

You can now set a deadline when joining the waitlist — if your date passes before a slot opens, you won't get blasted.

📄 index.html, admin.html, api/join-waitlist.js, api/send-slot-blast.js, api/setup-db.js, api/get-waitlist.js

---

## v0.1.25 · May 5, 2026

**Add footer links for terms and privacy policy**
Added bottom-of-page links to the Terms of Service and Privacy Policy pages so SMS/Twilio compliance pages are easy to find from the main landing page.

You can now access both legal pages directly from the footer whenever they need to be reviewed or submitted for approval.

📄 index.html

---

## v0.1.26 · May 6, 2026

**Add "available until" date to waitlist**
Added an optional date field to both waitlist forms so people can specify when they need a haircut by. The slot blast now only messages people whose deadline hasn't passed. Admin shows the date per entry, greyed out if expired.

You can now set a deadline when joining the waitlist — if your date passes before a slot opens, you won't get blasted.

📄 index.html, admin.html, api/join-waitlist.js, api/send-slot-blast.js, api/setup-db.js, api/get-waitlist.js

---

## v0.1.24 · May 4, 2026

**Hero desktop mosaic — animated cycling cells with drifting anchor**
Redesigned the desktop mosaic: anchor image on the left gets a slow Ken Burns drift, three right-side cells cycle through all backdrop images independently with staggered timing and 1.2s crossfades.

You can now see the mosaic subtly come alive on desktop — the three right panels quietly rotate through all the hero photos while the main image drifts.

📄 index.html

---

## v0.1.23 · May 4, 2026

**Hero desktop — photo mosaic collage behind PARIL text**
Replaced the single hero slideshow on desktop with a static photo mosaic grid: backdrop_web.jpg anchors the left 60% at full height, backdrop2–8 fill the right in two stacked columns with 3px gaps. Slideshow still runs on mobile. Dark overlay keeps PARIL text readable.

You can now see all the hero photos at once on desktop in a tight collage behind the name and CTAs.

📄 index.html

---

## v0.1.22 · May 4, 2026

**Waitlist modal — nav button, animated popup, desktop + mobile**
Added a "Join Waitlist" button to the nav and hero that opens a premium animated modal with the waitlist form — desktop scales in with a spring, mobile slides up as a bottom sheet with drag-to-dismiss. Includes phone auto-formatting, loading state, and an animated success screen that auto-closes after 3 seconds.

You can now join the waitlist from anywhere on the page without scrolling down to find the form.

📄 index.html

---

## v0.1.21 · May 4, 2026

**Add terms and conditions page**
Created terms.html covering the SMS waitlist program name, message frequency, carrier rate disclosure, STOP/HELP instructions, and contact info — styled to match the site and privacy policy.

You can now link to /terms.html wherever required for SMS compliance.

📄 terms.html

---

## v0.1.20 · May 4, 2026

**Add privacy policy page**
Created a standalone privacy-policy.html covering data collection, usage, third-party sharing, opt-out instructions, and contact info — styled to match the main site.

You can now link to /privacy-policy.html anywhere it's needed (e.g. waitlist form, SMS footer).

📄 privacy-policy.html

---

## v0.1.19 · May 3, 2026

**Fix Cut 02 — re-encode 4K HDR video for browser playback**
Re-encoded new1.MOV with proper HDR-to-SDR tone mapping since the first pass failed to handle the 10-bit HEVC color space correctly.

You can now see Cut 02 playing correctly in the video reel.

📄 new1.mp4

---

## v0.1.18 · May 3, 2026

**Convert new video cuts to browser-compatible MP4**
Converted new1.MOV and new2.MOV to H.264 MP4 so browsers can actually play them, and updated the reel to reference the new files.

You can now see Cut 02 and Cut 04 playing correctly in the video reel instead of a black screen.

📄 index.html, new1.mp4, new2.mp4

---

## v0.1.17 · May 1, 2026

**Swap video reel cuts 02 and 04 with new footage**
Replaced second.mp4 with new1.MOV and fourth.mp4 with new2.MOV in the video reel.

You can now see the updated video cuts in positions 02 and 04 of the reel.

📄 index.html

---

## v0.1.16 · May 1, 2026

**Fix hero slideshow — start with backdrop_web.jpg**
Updated the first slide to use backdrop_web.jpg instead of backdrop2_web.jpg, then cycles through backdrop2–8 as before.

You can now see the correct first photo when the hero loads.

📄 index.html

---

## v0.1.15 · May 1, 2026

**Remove deleted photo from slideshow, rewrite bio in first person**
Removed the deleted extra_web.jpg from the hero slideshow so it now starts with backdrop2 and cycles through the rest. Rewrote the About section bio from third person to first person so it reads like Paril is speaking directly.

You can now read the bio as Paril's own words, and the hero slideshow no longer references a missing image.

📄 index.html

---

## v0.1.14 · May 1, 2026

**Enforce CHANGELOG entry on every commit**
Updated the pre-commit hook to block any commit that doesn't have a CHANGELOG entry for the current version. Prints the exact format to copy-paste so it's quick to fill in.

You can now never accidentally ship a commit without a plain-English description — the hook won't let it through.

📄 .githooks/pre-commit

---

## v0.1.13 · May 1, 2026

**Move admin link to top nav**
Moved the Admin link from the footer to the top navigation bar, right after the TikTok icon. Removed it from the footer.

You can now tap Admin directly from the nav bar at the top of the page — much easier to find and access from any section of the site.

📄 index.html

---

## v0.1.12 · May 1, 2026

**Switch Twilio sender to WhatsApp sandbox**
Updated the slot blast to send via WhatsApp using the Twilio sandbox number (+14155238886) instead of a standard SMS number. Both the from and to fields are now prefixed with whatsapp: so messages route through WhatsApp.

You can now receive slot blast notifications as WhatsApp messages instead of SMS.

📄 api/send-slot-blast.js

---

## v0.1.11 · May 1, 2026

**Debug Twilio blast — detailed per-number error logging**
Added recipient-level logging to the blast endpoint: logs the count fetched from the database, logs each number before sending, and returns exact Twilio error codes per failed number in the response. Also added phone normalization at send time so numbers without +1 are fixed automatically.

You can now see exactly which numbers failed and the specific Twilio error code for each one in the API response.

📄 api/send-slot-blast.js

---

## v0.1.10 · May 1, 2026

**Debug Twilio blast — better error logging and phone normalization**
Added detailed logging to the slot blast API: logs how many numbers were pulled, logs each number before sending, and returns the exact Twilio error (message + error code) per failed number instead of silently swallowing it. Also added phone number normalization before each send so numbers stored without +1 are fixed on the fly.

You can now see exactly which numbers failed and why when a blast doesn't go through — the response includes the full error details per recipient.

📄 api/send-slot-blast.js

---

## v0.1.9 · May 1, 2026

**Switch database from Vercel Postgres to Neon**
Replaced @vercel/postgres with the Neon serverless driver across all API routes. Updated the connection to use DATABASE_URL and fixed result handling — Neon returns rows as a direct array rather than wrapped in an object, so all query results were updated accordingly.

You can now connect to the Neon database. Visit /api/setup-db once after deploying to create the tables.

📄 api/join-waitlist.js, api/get-waitlist.js, api/get-slots.js, api/send-slot-blast.js + 3 more

---

## v0.1.8 · May 1, 2026

**Debug waitlist API — expose real error messages**
Updated all API routes to return the actual error message from the server instead of a generic fallback. This makes it possible to see exactly what's failing (e.g. missing table, bad connection string) when something goes wrong.

You can now see the real error in the browser response when an API call fails, making it much easier to diagnose issues.

📄 api/join-waitlist.js, api/waitlist-count.js

---

## v0.1.7 · May 1, 2026

**Remove vercel.json to fix build error**
Deleted vercel.json entirely after the runtime format kept causing Vercel build failures. Vercel auto-detects Node.js serverless functions in the /api folder without needing a config file.

You can now deploy without the build erroring out on the runtime version config.

📄 vercel.json (deleted)

---

## v0.1.6 · May 1, 2026

**Discreet admin link in footer**
Added a barely-visible "Admin" text link to the footer that navigates to the admin dashboard. No border, no background — just small dark text that blends in.

You can now access the admin dashboard directly from the site footer without knowing the URL by heart.

📄 index.html

---

## v0.1.5 · May 1, 2026

**Complete backend — waitlist system, slot blast, admin dashboard**
Built the full backend for the waitlist feature. Added 6 API endpoints: joining the waitlist (with E.164 phone formatting), sending an SMS blast to everyone on the list via Twilio, viewing and removing waitlist members, tracking past blasts, and a public count endpoint. Created an admin dashboard with password protection, a live SMS message preview, blast history table, and full waitlist management with one-click remove. Wired up the waitlist form on the main site so it actually submits.

You can now go to /admin.html to log in, preview and send slot notifications to everyone on the waitlist, and manage who's on the list — all from the dashboard.

📄 api/join-waitlist.js, api/send-slot-blast.js, api/get-waitlist.js, api/remove-from-waitlist.js, api/get-slots.js + 3 more

---

## v0.1.4 · April 30, 2026

**Mobile video reel — auto-scroll with progress dots**
Added auto-scrolling to the video reel on mobile. Every 5 seconds it smoothly scrolls to the next video and loops back to the start. If you swipe manually, the timer resets. Four progress dots appear below the reel — the active dot expands into a pill shape and fills left to right as the timer counts down, then transitions to the next dot.

You can now browse all four video cuts on mobile without touching the screen, and always know which video is playing and when the next one is coming.

📄 index.html

---

## v0.1.3 · April 30, 2026

**Further increase to desktop text sizes**
All desktop font sizes were bumped up again after the first pass wasn't large enough. Body copy, stat numbers, service names, section titles, and supporting text are all significantly bigger now.

You can now read every section of the site on desktop without the text feeling cramped or small.

📄 index.html

---

## v0.1.2 · April 30, 2026

**Desktop text size increase + Trello log descriptions**
Bumped up font sizes across the site on desktop so all text is larger and easier to read — hero tagline, section headings, body copy, service descriptions, and contact info all got bigger. Also wired up the Trello log system so every commit now shows a plain-English description of what changed, not just the raw commit details.

You can now read the site comfortably on desktop without squinting, and every Trello log card includes a clear summary of what was updated.

📄 index.html, CHANGELOG.md

---

## v0.1.0 · April 30, 2026

**Initial full site build — Paril Barber landing page**
Built the complete landing page for Paril at Fade Mansion from scratch. Single-file HTML/CSS/JS site with no frameworks. Includes hero slideshow (8 images, 4s crossfade), horizontal video reel with viewport autoplay and lightbox, about section with stats, journey cards, services with click-to-book, waitlist form, socials, contact + directions, QR code, and footer branding.

You can now share parilthebarber.com with clients — the full site is live on Vercel with auto-deploy on every push.

📄 index.html, images/extra_web.jpg, images/backdrop2_web.jpg + 6 more
