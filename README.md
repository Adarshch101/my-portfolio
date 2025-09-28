# Adarsh Portfolio

Modern React + Tailwind portfolio featuring theme toggle, smooth scrolling, animated sections, and an accessible mobile navbar.

## Tech Stack

- React 19, CRA 5
- Tailwind CSS 3
- Framer Motion
- Lucide Icons

## Scripts

- `npm start` — Start dev server (default: http://localhost:3000). If in use, use a different port.
- `npm run build` — Production build to `build/`.

## Structure

- `src/context/ThemeContext.js` — Dark mode (persisted, system-aware), applies `dark` on `<html>`.
- `src/context/ProfileContext.js` — Provides profile data.
- `src/data/profile.js` — Content for skills, projects, certifications, contact.
- `src/sections/*` — UI sections: `HeaderNavbar`, `Hero`, `About`, `Skills`, `Projects`, `DSA`, `Certifications`, `Contact`.
- `src/Portfolio.js` — Composes providers and sections.
- `src/components/*` — Reusable UI (e.g., `Footer`, `ui/Button`).

## Accessibility & UX

- Mobile menu: focus management, body scroll lock, Escape to close, `aria-current` for active item.
- Smooth scroll to sections, `IntersectionObserver` for active link highlighting.

## Customize

Edit `src/data/profile.js` to change name, skills, projects, certifications, and contact info.

## Notes

- CRA 5 officially supports React 18. For React 19, consider migrating to Vite for the best DX.
