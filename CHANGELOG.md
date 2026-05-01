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
