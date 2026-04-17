# Mara Vasile — Portfolio

A dark editorial personal portfolio built with TanStack Start and deployed on Netlify. Features an asymmetric image gallery, project showcase, about page with timeline, and a contact form with social links.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | TanStack Start (React 19, SSR) |
| Routing | TanStack Router v1 (file-based) |
| Styling | Tailwind CSS v4 + custom CSS |
| Fonts | Cormorant Garamond, DM Sans, JetBrains Mono |
| Content | Content Collections (type-safe markdown) |
| Images | Netlify Image CDN |
| Forms | Netlify Forms |
| Deployment | Netlify |

## Pages

- `/` — Hero + 6-panel asymmetric gallery grid
- `/about` — Bio, skills, experience timeline, education
- `/projects` — Project showcase with artwork panels
- `/contact` — Contact form + social links sidebar

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server (with Netlify feature emulation)
npx netlify dev

# Or start Vite directly
npm run dev
```

The dev server runs on `http://localhost:8888` when using `netlify dev` (recommended for form handling), or `http://localhost:3000` with `npm run dev`.

## Content

All content lives in `content/` as Markdown files with YAML frontmatter:

- `content/jobs/` — Work experience
- `content/education/` — Education history
- `content/projects/` — Project case studies
- `content/blog/` — Blog posts

Schemas are defined in `content-collections.ts` using Zod.

## Environment Variables

For the AI resume assistant (`/resume`), set one of:

```
ANTHROPIC_API_KEY=...
OPENAI_API_KEY=...
GEMINI_API_KEY=...
```
