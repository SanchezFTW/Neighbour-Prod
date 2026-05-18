# Coding Conventions — Neighbour Productions Website

These are the project-specific rules Claude follows when editing this codebase.

## Astro & component rules
- No JS framework (React, Vue, Svelte, etc.). All components must be `.astro` files.
- Scripts go inside `<script>` tags within the component file.
- Scoped styles go inside `<style>` in each page/component.
- Global tokens come from `global.css` only — never hardcode values locally.
- All pages must use `BaseLayout` with a `title` prop.
  - Home page: full site title.
  - All other pages: `"${title} — Neighbour"`.
- Reinitialise JS listeners on `astro:page-load` (ClientRouter view transitions are enabled).

## Styling rules
- Never hardcode colours. Always use CSS variables from `:root` in `global.css`.
- The film-grain overlay (`body::before`) sits at `z-index: 50`. Keep page content at `z-index: 1`.
- Image paths with spaces or `#` in the name must be wrapped in `encodeURI()`.

## Scroll reveals
- Add `class="reveal"` to any element to trigger the fade-in on scroll.
- Use `reveal--delay-1` through `reveal--delay-5` for staggered animations.
- The IntersectionObserver in `BaseLayout.astro` handles everything — no extra JS needed.

## Content collection (projects)
- Each project is a Markdown file in `src/content/projects/`.
- Slug = filename (e.g. `confluence.md` → `/projects/confluence`).
- Schema is in `src/content.config.ts` — do not add fields not defined there.
- Full workflow in `docs/ADDING-A-PROJECT.md`.

## URLs & canonicals
- Canonical base URL: `https://neighbourprod.com`
- Contact email: `info@neighbourprod.com`
- Formspree endpoint: `https://formspree.io/f/xwvadbkl`
- Calendly widget: `https://calendly.com/neighbourprod-info/30min`
  - A hidden `bookedTime` input must be populated via `window.message` event before form submission.

## Commands
```
npm run dev      # localhost:4321
npm run build    # build to dist/
npm run preview  # preview built output
```
Node ≥ 22.12.0 required.
