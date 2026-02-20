# DESIGN AUDIT RESULTS

**Overall Assessment:** The multi-page restructure broke the visual rhythm in several critical ways. The biggest problems: (1) Navbar shows light text on subpages that start with dark PageHeaders but the pages below have light/warm backgrounds — invisible hamburger/logo after scrolling past the header; (2) the Home page stacks 7 sections creating a wall of warm-on-warm and dark-on-dark backgrounds with no breathing room; (3) subpages feel hollow because the PageHeader drops into the Programs/Impact/Donate component which repeats the same heading + description pattern just seen in the header — creating a "double header" effect; (4) the Donate page stacks three warm/light sections in a row (Donate warm → Giving levels light → Tax info warm) that bleed into each other.

---

## PHASE 1 — Critical

### 1.1 Navbar: light text is invisible on subpages after scrolling past dark PageHeader
**What:** Navbar starts with `text-secondary` (light) assuming a dark background. On subpages, once the user scrolls past the dark PageHeader into the light/warm content sections, the unscrolled nav text is still light — but the threshold is `window.scrollY > 40`, so by the time the scroll state flips, the nav is already over light content.
**Where:** `Navbar.tsx` line 18, lines 34–36, 48–53
**Why:** The scroll threshold of 40px is far too low for a PageHeader that's ~300–400px tall. On subpages, the navbar is transparent with light text over dark for the first 40px only, then flips to solid — but on the home page, the hero is much taller. The real issue: the unscrolled state assumes dark content below, which only works on the Home page.
**Fix:** Always show the solid background (`bg-secondary/95`) with dark text on subpages. The transparent-to-solid transition should only apply on the Home page. Since this requires knowing the current page, the simplest visual fix: lower the scroll threshold isn't enough — instead, always default to the scrolled (solid) appearance and only go transparent on the home page by passing a `transparent` prop from the layout or page.

### 1.2 Home page: consecutive same-background sections destroy rhythm
**What:** Current Home flow: Hero (dark) → Mission (warm) → ProgramsPreview (warm) → ImpactHighlights (dark) → Gallery (dark/neutral-900) → HomeCTA (warm) → ContactForm (warm). That's warm-warm back to back twice, and dark-dark back to back once.
**Where:** `src/app/page.tsx`
**Why:** When two sections share the same background, they visually merge into one undifferentiated block. The page loses its sectional rhythm entirely.
**Fix:**
- ProgramsPreview: change from `bg="warm"` to `bg="light"` — creates warm → light → dark rhythm
- HomeCTA: change from `bg="warm"` to `bg="light"` — creates dark → light → warm rhythm with ContactForm
- Gallery already uses `className="bg-neutral-900"` override, which differentiates it from ImpactHighlights (`bg-neutral-800`), but the difference is too subtle — add a top border to Gallery: `border-t border-neutral-700`

### 1.3 Subpages: "double header" effect — PageHeader + component heading repeat
**What:** Every subpage shows PageHeader (label + title + description) immediately followed by the reusable component (Programs, Impact, GetInvolved, Donate) which has its own SectionLabel + heading + description. The user sees two nearly-identical header blocks stacked.
**Where:** All 4 subpages: `/programs`, `/impact`, `/get-involved`, `/donate`
**Why:** The reusable components (Programs.tsx, Impact.tsx, etc.) were designed for standalone display and include their own full headers. When preceded by a PageHeader, the redundancy is jarring.
**Fix:** Make the reusable components accept an optional `showHeader` prop (default `true`). When `false`, skip the SectionLabel, heading, and description — render only the content grid/cards. Subpages pass `showHeader={false}` since the PageHeader already provides context.

### 1.4 Donate page: three light/warm sections blend together
**What:** Donate page flow: PageHeader (dark) → Donate component (warm) → Giving levels (light) → Tax info (warm). The warm-light-warm sandwich with no strong visual boundary reads as one undifferentiated block.
**Where:** `src/app/donate/page.tsx`
**Why:** The Donate component, giving levels, and tax info all use similar typography and spacing on nearly-identical backgrounds. There's no visual event to separate them.
**Fix:** Remove the standalone Donate component from the donate page (it's redundant with the PageHeader messaging). The page should flow: PageHeader (dark) → Giving levels (light) → Donation CTA (warm, prominent) → Tax info (light). The CTA section should be visually distinct — larger button, more vertical space.

### 1.5 Hero image placeholder: raw dashed circle on dark background looks broken
**What:** The hero has a large `aspect-[4/5]` box on the right with `bg-neutral-700/30` and a small dashed circle. It looks like a rendering error or broken image, not a placeholder.
**Where:** `Hero.tsx` lines 29–34
**Why:** Without real photography, the empty frame with a barely-visible dashed circle communicates "something went wrong" rather than "image coming soon."
**Fix:** Remove the placeholder entirely. The hero works better as a text-only dark section until real photography is available. The atmospheric gradient already provides visual depth. When images are ready, this can be added back.

---

## PHASE 2 — Refinement

### 2.1 Programs page: full Programs component still uses `last:sm:col-span-2`
**What:** The `ProgramCard` has `last:sm:col-span-2` which makes the 5th card stretch full-width on the Programs subpage. This looked acceptable in the home context but on a dedicated Programs page it looks like a layout bug — one card randomly wider than the others.
**Where:** `Programs.tsx` line 40
**Why:** A dedicated page should present content with more visual refinement. A single wide card breaks the grid rhythm.
**Fix:** Remove `last:sm:col-span-2` from ProgramCard. On the Programs page, use a 3-column grid instead of 2-column — 5 cards in 3 cols (2 rows of 3 and 2) looks more balanced than 2 cols with a stretched orphan.

### 2.2 Impact page: stories section lacks SectionLabel
**What:** The "Voices from the Community" section on the Impact page has a heading but no SectionLabel overline. Every other section uses the SectionLabel pattern.
**Where:** `src/app/impact/page.tsx` line 39
**Why:** Breaks the visual consistency — all other sections are introduced by a SectionLabel. Its absence makes this section feel disconnected from the design system.
**Fix:** Add `<SectionLabel text="Stories" align="center" />` above the heading.

### 2.3 Impact page: partners section lacks SectionLabel
**What:** Same issue — "Our Partners & Supporters" has a heading but no SectionLabel.
**Where:** `src/app/impact/page.tsx` line 64
**Why:** Same consistency issue.
**Fix:** Add `<SectionLabel text="Partners" align="center" />` above the heading.

### 2.4 GetInvolved: remaining anchor hrefs (#contact) should be page links
**What:** The "Apply Now" and "Start a Conversation" buttons still link to `#contact`. On the Get Involved subpage, this works because ContactForm is on the same page. But when used elsewhere, these anchors go nowhere.
**Where:** `GetInvolved.tsx` lines 18, 25
**Why:** Inconsistency — some links are page routes, some are anchors. The anchor only works when the component happens to be on a page with a `#contact` section.
**Fix:** Change `#contact` to `/get-involved#contact` so the links work from any page context.

### 2.5 Home page: contact form feels heavy as the last thing before footer
**What:** The ContactForm with its integrated newsletter is a large warm section that sits right above the dark footer. The home page already has HomeCTA asking users to donate/get involved — then immediately hits another form section. It's too much ask.
**Where:** `src/app/page.tsx` — ContactForm at bottom of home
**Why:** The home page should end on a light, inviting note — not a wall of form fields. The contact form makes more sense on the Get Involved page. The home page should end with just the newsletter signup.
**Fix:** Replace ContactForm on the home page with a lightweight newsletter-only section. Keep the full ContactForm on /get-involved.

---

## PHASE 3 — Polish

### 3.1 PageHeader: add atmospheric gradient for visual depth
**What:** The PageHeader is a flat `bg-neutral-800` block with text. The Home hero has an atmospheric radial gradient that gives it depth. The subpage headers feel flat by comparison.
**Where:** `PageHeader.tsx`
**Why:** Visual consistency — the hero has atmospheric treatment, subpage headers should too (more subtle but present).
**Fix:** Add the same radial gradient used in Hero: `bg-[radial-gradient(ellipse_at_top_right,_rgba(140,122,107,0.06)_0%,_transparent_60%)]` as an overlay div in PageHeader.

### 3.2 Button: use Next.js Link for internal navigation
**What:** The Button component uses `<a>` tags for all href links. For internal routes (`/programs`, `/donate`, etc.), this causes full page reloads instead of client-side navigation.
**Where:** `Button.tsx` lines 27–30
**Why:** Full page reloads break the smooth SPA experience. Next.js `Link` enables instant client-side transitions.
**Fix:** Import `Link` from `next/link` and use it for internal hrefs (those starting with `/`). Keep `<a>` for external links and anchor links (`#`).

### 3.3 Inline styles on Navbar should use Tailwind
**What:** The Navbar uses `style={{ textShadow: ... }}` inline styles for the text shadow effect.
**Where:** `Navbar.tsx` lines 37, 53
**Why:** The frontend guidelines say "No inline styles unless dynamically computed." The text shadow is conditionally applied but could use a Tailwind arbitrary value or a CSS class in globals.css.
**Fix:** Add a utility class in `globals.css` for the text shadow: `.text-shadow-nav { text-shadow: 0 1px 3px rgba(0,0,0,0.3); }` and `.text-shadow-none { text-shadow: none; }`. Use conditional classes instead of inline styles.

### 3.4 Programs subpage: CTA section at bottom lacks SectionLabel
**What:** The "Want to be part of a program?" CTA at the bottom of the Programs page is an inline SectionWrapper with no SectionLabel.
**Where:** `src/app/programs/page.tsx` lines 22–37
**Why:** Consistency — breaks the pattern used everywhere else.
**Fix:** Add `<SectionLabel text="Join Us" align="center" />` above the heading.

---

## DESIGN RISKS & TRADEOFFS

1. **1.1 (Navbar page-awareness)** — The cleanest fix requires the Navbar to know whether it's on the home page. This can be done by checking `usePathname()` from `next/navigation`, which is a client-side API already available since Navbar is `"use client"`. Minimal logic addition.
2. **1.3 (showHeader prop)** — Adding a boolean prop to 4 components is a small API change. The alternative is creating separate "headless" versions, but that's more files for no benefit.
3. **2.5 (Remove ContactForm from home)** — This changes the home page flow. The newsletter-only section is lighter and more appropriate for a marketing landing page. The full form lives on /get-involved where intent is higher.
4. **3.2 (Button with Link)** — Using `next/link` in Button requires distinguishing internal vs external hrefs. A simple `href.startsWith('/')` check handles this cleanly.

---

## DESIGN SYSTEM UPDATES

| Token/Rule | Change | Reason |
|------------|--------|--------|
| Navbar | Page-aware transparency (home only) | Prevents invisible text on subpages |
| Reusable section components | `showHeader` prop pattern | Prevents double-header on subpages |
| `.text-shadow-nav` | New CSS utility | Replace inline styles |
| Button | Internal vs external link detection | Use Next.js Link for SPA navigation |

---

## IMPLEMENTATION NOTES (FOR BUILD AGENT)

### 1.1 — Navbar page-awareness
- **File:** `src/components/Navbar.tsx`
- **Component:** Navbar
- **Property:** Transparent vs solid background logic
- **Old:** Always starts transparent, flips at scrollY > 40
- **New:** Import `usePathname` from `next/navigation`. If pathname !== `/`, always show scrolled (solid) state. Only apply transparent→solid transition on home page.

### 1.2a — ProgramsPreview background
- **File:** `src/components/ProgramsPreview.tsx`
- **Component:** ProgramsPreview
- **Property:** SectionWrapper `bg` prop
- **Old:** `bg="warm"`
- **New:** `bg="light"`

### 1.2b — HomeCTA background
- **File:** `src/components/HomeCTA.tsx`
- **Component:** HomeCTA
- **Property:** SectionWrapper `bg` prop
- **Old:** `bg="warm"`
- **New:** `bg="light"`

### 1.2c — Gallery top border
- **File:** `src/components/Gallery.tsx`
- **Component:** Gallery
- **Property:** SectionWrapper className
- **Old:** `className="bg-neutral-900"`
- **New:** `className="bg-neutral-900 border-t border-neutral-700"`

### 1.3 — showHeader prop on reusable components
- **Files:** `Programs.tsx`, `Impact.tsx`, `GetInvolved.tsx`, `Donate.tsx`
- **Component:** Each component
- **Property:** Add `showHeader?: boolean` prop (default `true`)
- **Old:** Always renders SectionLabel + h2 + description
- **New:** When `showHeader={false}`, skip SectionLabel, h2, and description — render only the card grid/content
- **Files:** `programs/page.tsx`, `impact/page.tsx`, `get-involved/page.tsx`, `donate/page.tsx`
- **Property:** Pass `showHeader={false}` to each reusable component

### 1.4 — Donate page restructure
- **File:** `src/app/donate/page.tsx`
- **Component:** DonatePage
- **Property:** Remove `<Donate />` component, restructure flow
- **Old:** PageHeader → Donate → Giving levels (light) → Tax info (warm)
- **New:** PageHeader → Giving levels (light) → Donation CTA section (warm, larger button, more spacing) → Tax info (light)

### 1.5 — Remove Hero image placeholder
- **File:** `src/components/Hero.tsx`
- **Component:** Hero
- **Property:** Remove lines 29–34 (hero image placeholder div)
- **Old:** Dashed circle placeholder visible on md+ screens
- **New:** Remove entirely

### 2.1 — Programs grid fix
- **File:** `src/components/Programs.tsx`
- **Component:** ProgramCard
- **Property:** Remove `last:sm:col-span-2` from card class
- **Old:** `"border border-warm-200 bg-white p-6 md:p-8 last:sm:col-span-2"`
- **New:** `"border border-warm-200 bg-white p-6 md:p-8"`
- **Component:** Programs grid
- **Property:** Grid cols
- **Old:** `grid-cols-1 sm:grid-cols-2 gap-6`
- **New:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`

### 2.2 — Impact stories SectionLabel
- **File:** `src/app/impact/page.tsx`
- **Component:** ImpactPage stories section
- **Property:** Add SectionLabel
- **Old:** `<h2>` only
- **New:** `<SectionLabel text="Stories" align="center" />` before h2 + add `mt-6` to h2

### 2.3 — Impact partners SectionLabel
- **File:** `src/app/impact/page.tsx`
- **Component:** ImpactPage partners section
- **Property:** Add SectionLabel
- **Old:** `<h2>` only
- **New:** `<SectionLabel text="Partners" align="center" />` before h2 + add `mt-6` to h2

### 2.4 — GetInvolved anchor links
- **File:** `src/components/GetInvolved.tsx`
- **Component:** GetInvolved pathways
- **Property:** href values for Apply and Partner
- **Old:** `"#contact"`
- **New:** `"/get-involved#contact"`

### 2.5 — Home page: newsletter-only instead of full ContactForm
- **File:** `src/app/page.tsx`
- **Component:** Home
- **Property:** Replace `<ContactForm />` with a new lightweight `<NewsletterSection />` component
- **Old:** Full contact form + newsletter on home
- **New:** Newsletter signup only (dark background, matching the Footer transition)
- **File:** `src/components/NewsletterSection.tsx` (new)
- **Component:** Newsletter-only section with SectionLabel, heading, subtext, email + subscribe

### 3.1 — PageHeader atmospheric gradient
- **File:** `src/components/PageHeader.tsx`
- **Component:** PageHeader
- **Property:** Add gradient overlay
- **Old:** Flat `bg-neutral-800`
- **New:** Add `relative overflow-hidden` to SectionWrapper, add `<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(140,122,107,0.06)_0%,_transparent_60%)]" />` + `relative` on content div

### 3.2 — Button: use Next.js Link
- **File:** `src/components/Button.tsx`
- **Component:** Button
- **Property:** Import Link, use for internal hrefs
- **Old:** `<a href={href}>` for all links
- **New:** If `href.startsWith('/')`, use `<Link href={href}>`. Otherwise use `<a href={href}>`.

### 3.3 — Navbar: replace inline styles with CSS utility
- **File:** `src/app/globals.css`
- **Property:** Add `.text-shadow-nav` and `.text-shadow-none` utilities
- **Old:** `style={{ textShadow: ... }}` inline
- **New:** Conditional class `text-shadow-nav` / `text-shadow-none`
- **File:** `src/components/Navbar.tsx`
- **Property:** Replace `style` props with className conditionals

### 3.4 — Programs page CTA SectionLabel
- **File:** `src/app/programs/page.tsx`
- **Component:** ProgramsPage CTA section
- **Property:** Add SectionLabel
- **Old:** `<h2>` only
- **New:** `<SectionLabel text="Join Us" align="center" />` before h2 + add `mt-6` to h2
