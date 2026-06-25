# Digital Business Card Template

A clean, mobile-friendly digital business card (vCard) web page. Built with
plain HTML, CSS, and JavaScript — no build step, no dependencies.

![Card preview](preview.png)

## Features

- Responsive card layout with an accent header
- One-tap **Call** and **Email** actions
- Contact details: phone, email, company, website
- Social media links (LinkedIn included; add more easily)
- **Download vCard** — generates a `.vcf` file the visitor can save to contacts
- **Share This Page** — uses the native share sheet on mobile, falls back to
  copying the link to the clipboard on desktop
- Avatar with an automatic initials fallback if the photo is missing

## Usage

1. Open `index.html` in a browser, or host the three files
   (`index.html`, `styles.css`, `script.js`) on any static host
   (GitHub Pages, Netlify, etc.).
2. Add a `photo.jpg` next to `index.html` for the profile picture.
   If it's absent, the card shows the person's initials instead.

## Customizing

**Text content** lives in `index.html` — update the name, role, bio, and
contact rows directly.

**The vCard download and share** read from the `contact` object at the top of
`script.js`. Keep it in sync with the HTML:

```js
const contact = {
  firstName: "Lorena",
  lastName: "Roberts",
  title: "Sr. National Account Mgr.",
  company: "March Products Inc.",
  phone: "+19096348698",        // E.164 format, used by tel: and vCard
  phoneDisplay: "(909) 634-8698",
  email: "lroberts@marchproducts.com",
  website: "https://www.marchproducts.com",
  linkedin: "https://www.linkedin.com/",
};
```

**Colors** are CSS variables at the top of `styles.css` — change `--accent`
to re-theme the whole card.
