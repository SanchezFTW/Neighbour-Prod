# Adding a project to the site

Projects live as Markdown files in `src/content/projects/`. One file = one
project page, automatically routed to `/projects/<filename>` and listed on
`/work` under the right filter.

---

## Quick steps

1. **Create the file.** Copy the template below into a new file at
   `src/content/projects/<slug>.md`. The filename becomes the URL slug —
   use lowercase with hyphens (`wayfound-counselling.md`, not
   `Wayfound Counselling.md`).

2. **Drop images in `public/images/projects/<slug>/`.** Reference them as
   `/images/projects/<slug>/filename.jpg`. Paths start with `/` because
   `public/` is the web root. **You can skip images entirely** — the site
   will render a coloured placeholder on the card and hide the featured-image
   and gallery sections on the detail page.

3. **Pick the right `category`.** This is the single most important field —
   it controls which filter the project shows up under on `/work` and which
   service page it links back to. Must match one of these exactly:

   | `category:` value       | Filter chip  | Service link         |
   |-------------------------|--------------|----------------------|
   | `Photography`           | Photo        | Photography          |
   | `Video`                 | Video        | Video & Film         |
   | `Video & Film`          | Video        | Video & Film         |
   | `Branded Content`       | Video        | Video & Film         |
   | `Brand Strategy`        | Brand        | Brand Strategy       |
   | `Web Design`            | Web          | Website Development  |
   | `Website Development`   | Web          | Website Development  |

4. **Save.** The dev server hot-reloads. The production build regenerates
   `/work`, `/projects/<slug>`, and the related-work section automatically.

---

## The template

Copy everything below (including both `---` lines) into your new file and
fill it in. Delete any **optional** lines you don't need — don't leave them
empty, or the build will fail schema validation.

```markdown
---
title: "Project Title Here"
client: "Client Name"
category: "Photography"
services: ["Service One", "Service Two"]
description: "One or two sentences shown on the card and under the title on the detail page."

# --- Everything below is optional. Delete the lines you don't use. ---

featuredImage: "/images/projects/<slug>/hero.jpg"

galleryImages: [
  "/images/projects/<slug>/01.jpg",
  "/images/projects/<slug>/02.jpg",
  "/images/projects/<slug>/03.jpg"
]

videoEmbedUrl: "https://vimeo.com/..."

testimonial:
  quote: "Something the client said that we're proud of."
  author: "Their Name, Their Role"
---

The body below the `---` is the project story. Use normal Markdown.

Keep it to 2–4 short paragraphs. Lead with the problem or the brief, then
what we did, then the outcome. No marketing-speak — read it out loud, and
if it sounds like a brochure, rewrite it.

You can use **bold**, *italics*, and [links](https://example.com), but most
projects don't need them. Write it like you're telling a friend what the
job was about.
```

---

## Field reference

| Field             | Required | Type     | Notes                                                                    |
|-------------------|----------|----------|--------------------------------------------------------------------------|
| `title`           | yes      | string   | Shown on cards, detail page, and browser tab.                            |
| `client`          | yes      | string   | The brand, person, or org this was made for.                             |
| `category`        | yes      | string   | One of the exact values in the table above.                              |
| `services`        | yes      | string[] | Free-form list of what we did. Rendered as a comma-separated list.       |
| `description`     | yes      | string   | 1–2 sentence summary.                                                    |
| `featuredImage`   | no       | string   | Hero image path. Omit for a placeholder card and no hero image.          |
| `galleryImages`   | no       | string[] | Paths to gallery images. Renders the 3-column gallery at the bottom.     |
| `videoEmbedUrl`   | no       | string   | Vimeo/YouTube URL. Reserved for future use — not rendered yet.           |
| `testimonial`     | no       | object   | `{ quote, author }`. Rendered as a pull-quote between story and gallery. |

---

## Adding a brand-new filter category

If you want a category that doesn't match any existing filter chip (e.g.
"Podcast" or "Print"), you'll need to edit two files:

1. **`src/pages/work.astro`** — add the filter chip to the `filters`
   array and add a mapping to `categoryToFilter`.
2. **`src/pages/projects/[slug].astro`** — add a mapping to
   `categoryToService` so the "← Back to…" link on the project page
   points somewhere sensible (or leave it out to skip the back-link).

---

## File-naming tips

- Good: `confluence.md`, `wayfound-counselling.md`, `yarrow-bts.md`
- Bad:  `Confluence.md`, `wayfound_counselling.md`, `brand-strategy-2.md`
  (the underscore breaks URL conventions; the trailing `-2` suggests a
  duplicate — prefer a more descriptive slug like `wayfound-rebrand`).

The slug is user-visible in the URL, so make it read well.
