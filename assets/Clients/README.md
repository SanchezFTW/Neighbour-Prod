# Clients

One folder per client. Inside each client, one folder per project.

```
assets/Clients/
  <Client Name>/
    <project-slug>/
      web/        ← web-ready exports (used on the site)
      source/     ← originals / RAWs / masters (not published)
      notes.md    ← optional: shoot notes, release forms, metadata
```

## Conventions

- **Client folder:** human-readable name — `AK Confluence`, `Yarrow`.
- **Project folder:** lowercase slug with hyphens — `portraits`, `bts-service-1`, `brand-film`. Match the project's website slug when possible (see [`website/src/content/projects/`](../../website/src/content/projects)).
- **`web/`:** sized/compressed exports only. These are what you drop into [`website/public/images/projects/<project-slug>/`](../../website/public/images/projects/) when publishing.
- **`source/`:** everything else — RAWs, PSDs, masters, client deliverables. Never linked from the site.

## Adding a new project

1. Copy `_template/` into the client folder and rename `<project-slug>` to your slug (e.g. `brand-film-2026`).
2. Drop exports into `web/` and originals into `source/`.
3. To publish on the site:
   - Copy `web/` images to `website/public/images/projects/<project-slug>/`.
   - Create `website/src/content/projects/<project-slug>.md` (copy an existing one as a template).

## Adding a new client

Create a new top-level folder (`<Client Name>/`) and follow the project convention above.
