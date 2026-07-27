# Personal Intro Landing Page — Checkpoint Submission
---

## 1. Steps Followed

### Step 1 — Generate the page with Lovable
Prompted Lovable to build a one-section hero landing page using **plain HTML, CSS, and JavaScript only** (no React/Vite/Tailwind), split into three separate files: `index.html`, `style.css`, and `script.js`, with the stylesheet and script properly linked in `index.html`.

![Lovable prompt and first generation](screenshots/01-lovable-prompt-and-first-generation.png)

### Step 2 — Customize layout & color theme
Used the Lovable chat UI to restyle the page: switched to a dark, modern developer-portfolio theme with pink → blue gradient accents on the button, label, and background glow.

![Theme customization](screenshots/02-lovable-theme-customization.png)

### Step 3 — Export the project
Downloaded the project as a ZIP (`nourhen-portfolio.zip`) directly from Lovable, containing the three standalone files (`index.html`, `style.css`, `script.js`) under the `public/` folder.

![Export ZIP download](screenshots/03-lovable-export-zip-download.png)

### Step 4 — Open the exported code in the editor
Opened the exported project in VS Code to inspect and edit the generated code (`index.html`, `style.css`, `script.js`).

![Exported code in VS Code](screenshots/04-vscode-exported-code.png)

### Step 5 — Manual improvement
Made a manual improvement directly in the editor: adjusted the navigation bar into a pill-shaped nav, refined spacing/typography of the hero text, and added skill/certification badges ("CompTIA Security+", "Certified in Generative AI") below the subtitle — then verified the change locally via `127.0.0.1`.

![Manual improvement local preview](screenshots/05-manual-improvement-local-preview.png)

### Step 6 — Final preview (after manual improvements)

I verified the final version locally via `127.0.0.1` after applying my manual edits on top of the Lovable-generated page. Here's what I changed manually in the editor:

1. **New navigation bar** — I added a pill-shaped nav bar at the top (`Home / About Me / Work / Contact`), which didn't exist in the original Lovable version.
2. **Certification badges** — I added two badges below the description: `✓ CompTIA Security+` and `✓ Certified in Generative AI`.
3. **Redesigned background** — I replaced the simple gradient blob with a blue light-beam/cone shape over a subtle grid background.
4. **Subtitle styling** — I added a `>` terminal/code-style prefix before "Frontend Developer", styled in purple.
5. **Button color** — I changed the "View My Projects" button from a pink→blue gradient to a solid indigo/blue color.
6. **Typography** — I switched key elements ("PROFILE · VERIFIED", ">Frontend Developer") to a monospace/code-style font for a more technical look.

![Final preview after manual improvements](screenshots/06-final-hosted-preview.png)

---

