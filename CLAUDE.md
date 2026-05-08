# Neighbour Productions — Website

## Project overview
Marketing website for **Neighbour Productions**, a husband-and-wife creative studio (photo, video, brand strategy, web dev) serving mission-driven brands. Tagline: *"A creative studio helping the helpers."* Domain: `neighbourprod.com`. Contact email: `info@neighbourprod.com`.

Built with **Astro 6** (static, no framework islands). Node ≥ 22.12.0 required.

## Commands
```
npm run dev      # start dev server (localhost:4321)
npm run build    # build to dist/
npm run preview  # preview built output
```

## File structure
```
src/
  components/         # Header, Footer, ProjectCard, VimeoEmbed
  content/projects/   # Markdown content entries (one .md per project)
  layouts/
    BaseLayout.astro  # Root layout: SEO, OG tags, loading screen, scroll reveals
  pages/
    index.astro       # Home — bento grid + featured projects
    about.astro
    services.astro
    work.astro
    contact.astro     # Inquiry form (Formspree) + Calendly inline widget
    projects/[slug].astro  # Dynamic project pages from content collection
  styles/
    global.css        # All shared styles — brand system, utilities, components
public/
  images/
    logos/            # Neighbour brand logos (PNG + SVG)
    projects/         # Project photos organised by slug (confluence/, yarrow/)
assets/               # Source assets / client folders — NOT served directly
```

## Content collection — projects
Schema defined in `src/content.config.ts`. Each project is a Markdown file in `src/content/projects/` with this frontmatter:

```yaml
title: string
client: string
category: string
services: string[]
description: string
featuredImage: string (optional) — path under /images/projects/
galleryImages: string[] (optional)
videoEmbedUrl: string (optional)
testimonial:
  quote: string
  author: string
```

Slugs are derived from filenames (e.g. `confluence.md` → `/projects/confluence`). See `docs/ADDING-A-PROJECT.md` for the full workflow.

## Brand design system
All tokens live in `src/styles/global.css` `:root`. Do not hardcode colours — always use CSS variables.

**Palette**
| Token | Hex | Use |
|-------|-----|-----|
| `--honey` | `#EAAA42` | Primary accent, CTAs, selection |
| `--honey-deep` | `#C08C39` | Hover states, text on light |
| `--honey-soft` | `#F5D38A` | Subtle tints |
| `--lavender` | `#6A6278` | Secondary accent |
| `--lavender-deep` | `#4F4859` | Headings, dark sections |
| `--teal` | `#559CAD` | Links, tag borders |
| `--teal-deep` | `#3B7E8E` | Link hover |
| `--sage` | `#BCD8C1` | Soft accent |
| `--paper` | `#FAF9F6` | Page background |
| `--ink` | `#1A1A1A` | Body text |
| `--ink-soft` | `#4A4654` | Secondary text |

**Typography**
- Display (headings): `Plus Jakarta Sans` via `--font-display`
- Body: `Inter` via `--font-sans`
- Headings are coloured `var(--lavender-deep)` by default

**Key utility classes**
- `.container` / `.container--narrow` / `.container--wide` — max-width wrappers
- `.section` / `.section--lg` — vertical padding helpers
- `.section--cream`, `.section--warm`, `.section--sage`, `.section--lavender` — section backgrounds
- `.btn`, `.btn--solid`, `.btn--ghost`, `.btn--ghost-light` — buttons
- `.eyebrow` — small uppercase label with honey bar prefix
- `.bar` — decorative gradient underline (honey → teal)
- `.lede` — large intro paragraph
- `.pullquote` — styled block quote
- `.card-img` — image card with hover lift + overlay
- `.tag` / `.tag-list` — pill tags
- `.film-grain` — adds filmic overlay texture on a section
- `.reveal` + `.reveal--delay-{1-5}` — scroll-triggered fade-in animation
- `.eyebrow--no-bar` — eyebrow without the leading line

## Integrations
- **Formspree** — form endpoint: `https://formspree.io/f/xwvadbkl` (contact form)
- **Calendly** — inline widget on contact page: `https://calendly.com/neighbourprod-info/30min`. A hidden `bookedTime` input is required before form submission; populated via `window.message` event listener.
- **Astro ClientRouter** — view transitions enabled (`fallback="swap"`). Reinitialise JS listeners on `astro:page-load`.

## Conventions
- All pages use `BaseLayout` with a `title` prop. Home page gets the full site title; others get `"${title} — Neighbour"`.
- Canonical base URL: `https://neighbourprod.com`
- Scroll reveals: add `class="reveal"` + optional `reveal--delay-N`; the IntersectionObserver in BaseLayout handles the rest.
- Image paths with special characters (spaces, `#`) must use `encodeURI()` when passed to `src`.
- No JS framework — keep components as `.astro` files. Scripts go in `<script>` tags inside the component.
- Scoped styles go inside `<style>` in each page/component. Global tokens only come from `global.css`.
- The animated film-grain overlay (`body::before`) sits at `z-index: 50`; keep page content at `z-index: 1`.
