# Michele Fenton PLLC — Website

Official website for **Michele Fenton PLLC**, a family law firm based in Garden City, NY serving Nassau County and Long Island.

---

## Project Overview

- **Business:** Michele Fenton PLLC
- **Attorney:** Michele Fenton
- **Practice Area:** Family Law
- **Location:** 666 Old Country Road, Garden City, NY 11530
- **Domain:** michelefentonlaw.com
- **Stack:** HTML, CSS, JavaScript
- **Hosting:** GitHub Pages

---

## File Structure

```
mFenton-site/
├── index.html          # Homepage
├── about.html          # Attorney bio
├── services.html       # Practice areas
├── testimonials.html   # Client testimonials
├── contact.html        # Contact form + office info
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/             # Add photos here
├── CNAME               # michelefentonlaw.com
└── .github/
    └── workflows/
        └── pages.yml   # Auto-deploy on push to main
```

---

## Deployment

Deployed via **GitHub Pages** from the `main` branch using GitHub Actions.
Push to `main` → auto-deploys.

To set up the custom domain:
1. In repo Settings → Pages → Custom Domain → enter `michelefentonlaw.com`
2. Add DNS records at your registrar:
   - `A` records pointing to GitHub Pages IPs
   - `CNAME` for `www` → `rainer1370.github.io`

---

## Contact Form

The contact form uses [Formspree](https://formspree.io). Replace `REPLACE_WITH_FORMSPREE_ID` in `contact.html` with the actual Formspree endpoint after creating a free account.

---

## To-Do

- [ ] Replace placeholder photo in `about.html` with Michele's headshot
- [ ] Set up Formspree endpoint for contact form
- [ ] Configure DNS at registrar for `michelefentonlaw.com`
- [ ] Add Google Analytics (optional)
- [ ] Add actual client testimonials when available
- [ ] NY Bar attorney advertising compliance review

---

## Developed by

**Rob Rainer**  
https://rainer1370.com

© 2026 Michele Fenton PLLC. All Rights Reserved.
