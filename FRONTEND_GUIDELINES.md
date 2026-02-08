# Frontend Guidelines — Hopeful Memories

## Framework
- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS v3
- Static export (`output: 'export'`)

## File Structure
```
src/
  app/
    layout.tsx        — Root layout with fonts and metadata
    page.tsx          — Home page composition
    globals.css       — Tailwind directives + global styles
  components/
    Navbar.tsx        — Fixed navigation with anchor links
    Hero.tsx          — Hero section
    Mission.tsx       — Mission / philosophy section
    Programs.tsx      — Program pillars grid
    Impact.tsx        — Impact statistics
    Gallery.tsx       — Photography gallery
    GetInvolved.tsx   — Calls to action (donate, apply, partner)
    Donate.tsx        — Dedicated donate section
    ContactForm.tsx   — Contact form
    EmailSignup.tsx   — Newsletter signup
    Footer.tsx        — Footer with links and legal
    SectionWrapper.tsx — Reusable section container
    Button.tsx        — Button component (filled, outline, ghost)
    SectionLabel.tsx  — Section overline label
```

## Component Conventions
- One component per file, default export
- Props typed inline or with interface (no `type` keyword for simple props)
- No `React.FC` — use plain function declarations
- Relative imports (`../components/`) not path aliases (`@/`)

## Styling Rules
- Tailwind utility classes only — no CSS modules, no styled-components
- Use design tokens from `tailwind.config.ts` — no hardcoded hex values
- Responsive: mobile-first (`base` → `sm` → `md` → `lg`)
- No `!important` ever
- No inline styles unless dynamically computed

## Reusable Patterns

### SectionWrapper
Consistent section container with background variants and max-width.
```tsx
<SectionWrapper bg="light" id="section-id">
  {children}
</SectionWrapper>
```
Variants: `light` | `warm` | `dark`

### Button
```tsx
<Button text="Donate" variant="filled" href="#donate" />
<Button text="Learn More" variant="outline" href="#programs" />
```

### SectionLabel
Overline label with divider line.
```tsx
<SectionLabel text="Our Programs" />
```

## Accessibility
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`
- All images require descriptive `alt` text
- Interactive elements must have focus-visible states
- Forms: labels, error messages, ARIA attributes
- Color contrast: minimum 4.5:1 for body text
- Skip-to-content link in layout

## Forms
- Netlify Forms integration (hidden `form-name` field)
- Client-side validation before submission
- Clear error states with accessible messaging

## Images
- Use `next/image` with `fill` layout for responsive images
- `sizes` prop required for all fill images
- `unoptimized: true` in next.config.mjs (static export)
- Images stored in `public/images/` organized by section

## Performance
- Static export — all pages pre-rendered
- Font optimization via `next/font/google`
- No client-side JavaScript unless necessary (forms, mobile menu)
- Lazy loading for below-fold images
