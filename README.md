# Digital Business Card Template

A clean, mobile-friendly digital business card anyone can make their own by
editing **one file**. Plain HTML/CSS/JS — no build step, no dependencies.

## Make your own in 3 steps

1. Open **`config.js`**.
2. Change the values — name, title, bio, phone, email, website, color, and
   social links. Every field is labeled with a comment.
3. Save and refresh the page. Done.

You never need to touch the HTML or CSS.

```js
const profile = {
  firstName: "Lorena",
  lastName: "Roberts",
  title: "Sr. National Account Mgr.",
  company: "March Products Inc.",
  bio: "Leading sales teams and managing national accounts…",
  photo: "photo.jpg",          // image file or https:// link, or "" for initials
  phone: "+19096348698",       // full format, used by the Call button & vCard
  phoneDisplay: "(909) 634-8698",
  phoneLabel: "Mobile",
  email: "lroberts@marchproducts.com",
  website: "https://www.marchproducts.com",
  websiteDisplay: "www.marchproducts.com",
  accent: "#c47d45",           // the card's main color — any CSS color
  socials: [
    { type: "linkedin", url: "https://www.linkedin.com/" },
  ],
};
```

### Photo
Drop an image next to `index.html` and set `photo: "your-photo.jpg"`.
If the photo is missing or `photo: ""`, the card shows the person's initials.

### Social links
Add or remove lines in `socials`. Supported `type` values:
`linkedin`, `twitter`, `instagram`, `facebook`, `youtube`, `github`,
`tiktok`, `website`. Each renders with its proper icon and brand color.

### Color
Change `accent` to re-theme the whole card — header, buttons, avatar, and
social section all follow it.

## Features

- One-tap **Call** and **Email**
- Contact rows: phone, email, company, website (rows you leave blank are hidden)
- Social media icons
- **Download vCard** — saves the contact as a `.vcf` file
- **Share This Page** — native share sheet on mobile, copies the link on desktop

## Files

| File | What it's for |
|------|---------------|
| `config.js` | **The only file you edit** — all the card's content |
| `index.html` | Page skeleton (filled in from `config.js`) |
| `app.js` | Renders the card and powers the buttons |
| `styles.css` | Styling (theme color comes from `config.js`) |

## Publishing it online

Any static host works, with no configuration:

- **Vercel** — vercel.com → Add New → Project → import the repo → Deploy
- **Cloudflare Pages** — dash.cloudflare.com → Workers & Pages → Pages →
  connect the repo → build command blank, output directory `/` → Deploy
- **GitHub Pages** — repo Settings → Pages → deploy from `main`, root

You'll get a shareable link like `https://your-name.vercel.app`.

## Running it locally

```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000`. (Opening `index.html` directly also works,
though some browsers restrict the vCard download over `file://`.)

## Making a card for multiple people

Each person just needs their own `config.js`. Two easy patterns:

- **Separate deploys** — give each person a copy of the folder with their own
  `config.js`, deploy each to its own URL.
- **One repo, many cards** — duplicate the folder per person
  (`/lorena/`, `/marcus/`, …), each with its own `config.js`.
