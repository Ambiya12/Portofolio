# Portfolio Online — React + TypeScript + Vite

Creative minimalist portfolio for a Junior Fullstack Developer.

## Tech Stack

- React 19 + TypeScript
- Vite
- Framer Motion
- ESLint

## Scripts

- `npm run dev` — start development server
- `npm run build` — type-check and production build
- `npm run lint` — run lint checks
- `npm run preview` — preview production build

## Project Structure

```text
src/
  components/               # reusable UI components (Cursor, Navbar, Marquee)
  data/                     # portfolio content data
  features/
    section-navigation/     # feature logic (useActiveSection)
  lib/                      # shared motion variants
  sections/                 # page sections (Hero, About, Skills, etc.)
  shared/                   # app-wide shared contracts (navigation types/items)
  App.tsx                   # app composition
  index.css                 # design system + global styles
  main.tsx                  # entry point
```

## Clean Code Conventions

- Single source of truth for section navigation in `src/shared/navigation.ts`
- Feature logic extracted from UI to `src/features/section-navigation/useActiveSection.ts`
- Strong typing for section identifiers with `SectionId`
- Presentational sections kept focused on rendering and content
- Consistent style tokens and section variants in `src/index.css`
