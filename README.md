# Leaders Tribe Website

A polished, responsive, static website for **Leaders Tribe** — built with plain HTML, CSS, and JavaScript, ready for GitHub Pages.

---

## 📁 Folder Structure

```
/
├── index.html        # Main one-page website (all sections)
├── styles.css         # All styling (brand colors, layout, responsive rules)
├── script.js          # Mobile menu, smooth scroll, reveal animations, contact form
├── icons.js           # Inline SVG icon library used across the site
├── assets/
│   ├── logo.png        # Leaders Tribe logo (nav + hero)
│   ├── favicon.png      # Browser tab icon (currently same as logo)
│   └── og-image.png      # Open Graph / social share image (currently same as logo)
└── README.md          # This file
```

---

## 🚀 Deploying to GitHub Pages

1. Create a new GitHub repository (or use an existing one).
2. Upload all files above, preserving the folder structure (the `assets/` folder must stay alongside `index.html`).
3. Go to your repository **Settings → Pages**.
4. Under "Build and deployment", set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or your default branch), folder `/ (root)`
5. Save. GitHub will give you a live URL, typically:
   `https://<your-username>.github.io/<repo-name>/`
6. Wait 1–2 minutes for the first deployment, then visit the URL.

If you're using a repo named `<your-username>.github.io`, the site will be available directly at `https://<your-username>.github.io/`.

---

## 🎨 Brand & Design Notes

- **Colors** are drawn from the Leaders Tribe logo gradient: deep violet (`#6B2D8B`), magenta (`#C4166A`), orange (`#F47B20`), and gold (`#F5A623`), set against cream, lavender, and dark backgrounds.
- **Fonts:** Playfair Display (headings) + Inter (body), loaded from Google Fonts.
- **Icons:** All icons are inline SVG (no emoji), defined in `icons.js` and injected via `data-icon="name"` attributes — easy to recolor or swap.

---

## 🔧 Placeholders You Should Replace

| Item | Location | What to do |
|---|---|---|
| **Logo** | `assets/logo.png` | Already set to the Leaders Tribe logo you provided. Replace if you get an updated version. |
| **Favicon** | `assets/favicon.png` | Currently a copy of the logo. For best results, replace with a small square (e.g. 512×512px) version cropped to just the feather emblem. |
| **Open Graph image** | `assets/og-image.png` | Currently a copy of the logo. For best link-preview results, replace with a 1200×630px image. |
| **Social media links** | `index.html` footer, `social-links` block | Replace the `#` placeholders in the LinkedIn / Instagram / Facebook / YouTube links with your real profile URLs. |
| **Testimonials** | `index.html`, `#testimonials` section | Replace the three "Participant story coming soon." placeholder cards with real participant stories once available. Remove the "Placeholder" badges. |
| **Contact form backend** | `index.html`, `#contact` section + `script.js` | Currently uses a `mailto:` fallback that opens the visitor's email client. See the HTML comment directly above the `<form>` for instructions on switching to **Formspree**, **Netlify Forms**, or **Google Forms** if you want submissions to land directly in an inbox or spreadsheet without opening the visitor's email client. |
| **Open Graph URL** | `index.html` `<head>`, `og:url` meta tag | Update to your actual deployed GitHub Pages URL. |
| **Repo URL in og:url** | `index.html` | Update once you know your final GitHub Pages URL. |

---

## ✅ Features Included

- Fully responsive (mobile, tablet, desktop)
- Sticky navigation with mobile hamburger menu
- Smooth scrolling to all sections
- Scroll-reveal animations
- Active navigation highlighting as you scroll
- Two flagship program cards (Excel for Data Analysis, Leadership Development)
- Train-the-Trainer multiplier model section with impact calculation
- Impact / target stats section
- "How We Teach" learning approach section
- "Who Can Join" eligibility section
- Testimonial placeholders (no fake names/quotes)
- Partner/volunteer section with six engagement options
- Contact section with email, phone, location, and a working contact form (mailto fallback)
- Footer with quick links, contact details, and social placeholders
- Semantic HTML, alt text, keyboard-friendly navigation, and strong color contrast for accessibility

---

## 📝 Content Notes

- All statistics shown (40 women/year, 400 reached, 90%/70% targets, 4 learning circles, etc.) are the **targets provided** — no additional figures were invented.
- No testimonials, partner names, or team members were invented. These sections use clearly labeled placeholders ready for real content.

---

© 2026 Leaders Tribe. All rights reserved.
