# Jocelyn Quinella Portfolio

A responsive portfolio built with Next.js 16 and React 19.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Before publishing changes, run:

```bash
npm run lint
npm run build
```

## Update the portfolio

- Profile, contact details, navigation, services, and process: `app/data/portfolio.ts`
- Project titles, descriptions, facts, covers, and galleries: `app/data/projects.ts`
- Homepage section layout: `app/components/sections/`
- Shared header and animations: `app/components/`
- Images: `public/images/`
- Visual styles and responsive rules: `app/styles/`

Each object in `app/data/projects.ts` automatically powers its homepage card and its own `/projects/[slug]` page. To add a project, import its images, add one project object, and keep its `slug` unique.

The real portrait is stored at `public/images/jocelyn_profile.jpeg`. Projects without a `cover` or gallery images automatically use the built-in visual placeholder until their final images are added.
