# DESIGN AUDIT RESULTS

**Overall Assessment:** The scaffold is structurally sound — clean component separation, consistent use of SectionWrapper, and correct token usage throughout. The highest-impact issues are visual rhythm problems (consecutive same-background sections creating flat runs), the Navbar losing legibility on dark sections when unscrolled, the SectionLabel centering inconsistency in centered layouts, and the lack of a skip-to-content link required by the design system.

---

## PHASE 1 — Critical

### 1.1 Navbar: Text invisible over dark sections when unscrolled
**What:** The Navbar starts `bg-transparent` with `text-primary` (#1A1A1A) links. When the user scrolls to Impact, Gallery, or EmailSignup (dark backgrounds), the dark text becomes invisible against dark backgrounds.
**Where:** `Navbar.tsx` — lines 25–29, 32, 42
**Why:** Contrast fails completely (~1:1 ratio) on dark section backgrounds. Violates WCAG AA.
**Fix:** When unscrolled, use `text-secondary` with a subtle text-shadow for legibility on both light and dark backgrounds, then switch to `text-primary` when the scroll state activates the solid background. Alternatively, start with a subtle dark-to-transparent gradient background that provides enough contrast.

### 1.2 Consecutive same-background sections create visual flatness
**What:** The page flow creates runs of same-background sections that blend together:
- Hero (light) → Mission (light) — two light sections back to back
- Impact (dark) → Gallery (dark/neutral-900) — two dark sections back to back
- Donate (warm) → EmailSignup (dark) → ContactForm (warm) — alternation exists but the warm-dark-warm sandwich reads awkwardly
**Where:** `page.tsx` — section order, `SectionWrapper.tsx` — bg variants
**Why:** Without visual boundaries, consecutive same-bg sections lose hierarchy and the page reads as one undifferentiated block. The editorial aesthetic depends on deliberate rhythm between light and dark.
**Fix:**
- Mission: Switch from `bg="light"` to `bg="warm"` — creates a clear warm band between Hero and Programs
- EmailSignup: Merge into the ContactForm section (or add a thin divider) so the warm-dark-warm sandwich resolves. Move EmailSignup content above the contact form within the same `bg="warm"` section.

### 1.3 SectionLabel not center-aligned in centered layouts
**What:** SectionLabel uses `flex items-center` with a left-aligned line + text. In centered sections (Mission, Impact, GetInvolved, Donate), this creates asymmetry — the overline label sits left while everything below is centered.
**Where:** `SectionLabel.tsx`, used in `Mission.tsx`, `Impact.tsx`, `GetInvolved.tsx`, `Donate.tsx`
**Why:** Breaks the centered hierarchy. In editorial layouts, the overline label should anchor to the same axis as the heading below it.
**Fix:** Add an optional `align` prop (`"left" | "center"`) to SectionLabel. When `center`, use `justify-center` on the flex container. Sections that are centered (Mission, Impact, GetInvolved, Donate) pass `align="center"`.

### 1.4 Skip-to-content link missing
**What:** Design system and frontend guidelines both require a skip-to-content link. It's not implemented.
**Where:** `layout.tsx`
**Why:** WCAG 2.1 AA requirement. Keyboard users must be able to skip the navigation.
**Fix:** Add a visually-hidden skip link as the first child of `<body>` that becomes visible on focus. Target: `<main>` with `id="main-content"`. Add the `id` to the `<main>` element in `page.tsx`.

### 1.5 Hero section lacks visual weight for a photography-driven nonprofit
**What:** The Hero is text-only on a flat `bg-secondary` background. The questionnaire specifies "photography-driven, full-bleed or restrained compositions featuring real families, real moments." Currently there is no visual element — no image placeholder, no gradient, no atmospheric treatment.
**Where:** `Hero.tsx`
**Why:** For a photography nonprofit, the hero must communicate visual storytelling immediately. A bare text block reads like a corporate landing page, not a cultural institution.
**Fix:** Add a subtle warm-to-transparent radial gradient behind the hero content to create atmospheric depth. Add a placeholder for a hero image (right-aligned or behind the text with overlay). This visual cue signals "photography-first" even before real images are wired in.

---

## PHASE 2 — Refinement

### 2.1 Programs grid: 5 cards in 3-column grid leaves orphan
**What:** 5 program cards in a `lg:grid-cols-3` grid leaves 2 cards on the last row with an empty cell. This looks incomplete.
**Where:** `Programs.tsx` — line 63
**Why:** Uneven grids break visual rhythm and look unfinished. The orphan gap draws attention.
**Fix:** On large screens, make the last two cards span the remaining space. Use `lg:grid-cols-2` for the bottom row, or restructure as a 2-column grid on large screens (`lg:grid-cols-2`) which distributes 5 cards as 2-2-1 (with the last card spanning full width via `lg:col-span-2` on the last child).

### 2.2 GetInvolved pathway cards: outline buttons create visual heaviness
**What:** All three GetInvolved cards use `variant="outline"` buttons. The outline button has a `border-primary` (#1A1A1A) border which is visually heavy and competes with the card border.
**Where:** `GetInvolved.tsx` — line 58
**Why:** Two nested borders (card + button) at similar weights create noise. The "Make a Donation" card should use the filled variant to reinforce the primary CTA hierarchy.
**Fix:** First card ("Donate") uses `variant="filled"`, remaining two use `variant="outline"`. This reinforces the donation CTA as the primary action.

### 2.3 Impact stats: label tracking too tight for readability
**What:** Impact stat labels use `tracking-wide` which is Tailwind's default `0.025em`. For uppercase text at `text-sm`, this is tight and feels compressed.
**Where:** `Impact.tsx` — line 32
**Why:** Uppercase text needs wider letter-spacing for legibility, especially at small sizes. The design system specifies `tracking-[0.2em]` for overline/tag text.
**Fix:** Change `tracking-wide` to `tracking-[0.15em]` on the stat labels for consistent uppercase legibility.

### 2.4 Donate section: accent divider redundant
**What:** Both Mission and Donate sections end with a `w-12 h-px bg-accent` divider. Impact also has one. When these dividers appear too frequently they lose meaning and become visual noise.
**Where:** `Mission.tsx` line 30, `Impact.tsx` line 40, `Donate.tsx` line 31
**Why:** Overuse of the same accent element dilutes its purpose. In editorial design, accent marks should be used sparingly.
**Fix:** Keep the accent divider in Mission only (as a transition element). Remove from Impact and Donate — the background color changes already create sufficient section boundaries.

### 2.5 Footer: dynamic year renders client-side only
**What:** `new Date().getFullYear()` in a server component works fine with static export, but Footer is not marked `"use client"`. This is fine for Next.js SSG (renders at build time), but the year will be the build-time year, not the current year. This is acceptable but worth noting.
**Where:** `Footer.tsx` — line 76
**Why:** Not a bug — just a note that the year reflects build time. No change needed.
**Fix:** No change required. Noting for awareness.

---

## PHASE 3 — Polish

### 3.1 Button focus-visible states missing
**What:** No `focus-visible` styling on Button component. The design system and frontend guidelines require focus-visible states on all interactive elements.
**Where:** `Button.tsx` — variants object
**Why:** Keyboard navigation lacks visual feedback. WCAG AA requirement.
**Fix:** Add `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary` to all button variants. For dark-context buttons (Navbar donate, EmailSignup subscribe), ring-offset should match the dark background.

### 3.2 Navbar mobile menu: lacks focus trap
**What:** When mobile menu opens, keyboard focus can still tab to elements behind the menu. This isn't critical for a short overlay menu but reduces polish.
**Where:** `Navbar.tsx`
**Why:** Accessibility best practice for overlay menus.
**Fix:** Add `aria-hidden="true"` to `<main>` when menu is open. This is a lightweight improvement without a full focus trap library. (Note: this would require exposing menu state to the parent — flag as optional.)

### 3.3 Gallery section: gap between Gallery and GetInvolved feels abrupt
**What:** Gallery (bg-neutral-900) transitions directly to GetInvolved (bg-secondary). The jump from darkest to lightest background is abrupt.
**Where:** Page flow between Gallery and GetInvolved
**Why:** Sharp dark-to-light transitions can feel jarring. Editorial layouts often use a transitional gradient or a warm intermediary.
**Fix:** Add a thin transitional element at the bottom of Gallery — a `h-px` divider with `bg-gradient-to-r from-transparent via-accent/20 to-transparent` — to soften the transition.

### 3.4 ContactForm + EmailSignup: merge into single section
**What:** EmailSignup (dark) sits between Donate (warm) and ContactForm (warm), creating a warm-dark-warm sandwich that breaks flow.
**Where:** `page.tsx` section order, `EmailSignup.tsx`, `ContactForm.tsx`
**Why:** The newsletter signup is a small element that doesn't warrant its own full section. Placing it within the contact section creates better flow: warm (Donate) → warm (Contact + Newsletter) → dark (Footer).
**Fix:** Move the newsletter signup into the ContactForm section — place it below the form with a divider. Remove the standalone EmailSignup from page.tsx. Adjust ContactForm to include both the form and the newsletter signup within a single warm section.

### 3.5 Navbar: increase height for breathing room
**What:** Navbar height is `h-16` (64px). For an editorial/gallery aesthetic, this feels slightly compressed.
**Where:** `Navbar.tsx` — line 31
**Why:** Gallery and cultural institution sites typically use taller navbars (72–80px) to communicate spaciousness and restraint.
**Fix:** Change `h-16` to `h-20` (80px). Adjust Hero `pt-28 md:pt-36` to `pt-32 md:pt-40` to compensate.

---

## DESIGN RISKS & TRADEOFFS

1. **1.2 (Section flow restructuring)** — Changing Mission to warm and merging EmailSignup into Contact touches page.tsx composition. This is visual restructuring, not logic change, but it's a larger diff.
2. **1.3 (SectionLabel align prop)** — Adding a prop is a minor component API change. It's visual-only but touches the component interface.
3. **3.4 (Merging EmailSignup into Contact)** — The EmailSignup is a separate `"use client"` component with its own state. Merging it into ContactForm means combining two client components. The state remains independent, so no logic change, but the file structure changes.
4. **1.1 (Navbar contrast)** — The simplest fix (always light text when unscrolled) will look slightly washed-out on the light hero. A more polished solution would detect the current section background, but that requires scroll position logic — flagging as a tradeoff between simplicity and polish.

---

## DESIGN SYSTEM UPDATES

| Token/Rule | Change | Reason |
|------------|--------|--------|
| SectionLabel | Add `align` prop (`"left" \| "center"`) | Centered sections need centered overlines |
| Button | Add focus-visible ring styles | Accessibility compliance |
| Skip-to-content | Add to layout pattern | WCAG 2.1 AA requirement |

---

## IMPLEMENTATION NOTES (FOR BUILD AGENT)

### 1.1 — Navbar contrast on dark backgrounds
- **File:** `src/components/Navbar.tsx`
- **Component:** Navbar
- **Property:** Link text color when unscrolled
- **Old:** `text-primary` (always, via `text-neutral-600` on links, `text-primary` on logo)
- **New:** When `!scrolled`: `text-secondary` on logo + links + hamburger spans; when `scrolled`: `text-primary` on logo, `text-neutral-600` on links (current behavior)
- **Token:** `text-secondary` (#FAF8F5)

### 1.2a — Mission section background
- **File:** `src/components/Mission.tsx`
- **Component:** Mission
- **Property:** SectionWrapper `bg` prop
- **Old:** `bg="light"`
- **New:** `bg="warm"`

### 1.2b — Merge EmailSignup into ContactForm
- **File:** `src/components/ContactForm.tsx`
- **Component:** ContactForm
- **Property:** Add newsletter signup section below contact form
- **Old:** Contact form only
- **New:** Contact form + accent divider + newsletter signup (email input + subscribe button)
- **File:** `src/app/page.tsx`
- **Component:** Home
- **Property:** Remove `<EmailSignup />` from section flow
- **Old:** `<EmailSignup />` between `<Donate />` and `<ContactForm />`
- **New:** Removed

### 1.3 — SectionLabel center alignment
- **File:** `src/components/SectionLabel.tsx`
- **Component:** SectionLabel
- **Property:** Add `align` prop
- **Old:** Always `flex items-center gap-4` (left-aligned)
- **New:** When `align="center"`: `flex items-center justify-center gap-4`; default remains left
- **Files using center:** `Mission.tsx`, `Impact.tsx`, `GetInvolved.tsx`, `Donate.tsx` — pass `align="center"`

### 1.4 — Skip-to-content link
- **File:** `src/app/layout.tsx`
- **Component:** RootLayout
- **Property:** Add skip link as first child of `<body>`
- **Old:** No skip link
- **New:** `<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-secondary focus:px-4 focus:py-2 focus:text-sm">Skip to content</a>`
- **File:** `src/app/page.tsx`
- **Component:** Home
- **Property:** Add `id="main-content"` to `<main>`
- **Old:** `<main>`
- **New:** `<main id="main-content">`

### 1.5 — Hero atmospheric treatment
- **File:** `src/components/Hero.tsx`
- **Component:** Hero
- **Property:** Add background gradient and image placeholder area
- **Old:** Flat `bg-secondary` with text only
- **New:** Add a `relative` wrapper, place a subtle radial gradient (`bg-[radial-gradient(ellipse_at_top_right,_rgba(140,122,107,0.06)_0%,_transparent_60%)]`) on the section. Add a placeholder area on the right side for a future hero image (aspect-[4/5], bg-warm-100, visible on md+ screens only).

### 2.1 — Programs grid orphan fix
- **File:** `src/components/Programs.tsx`
- **Component:** Programs
- **Property:** Grid layout
- **Old:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
- **New:** `grid-cols-1 sm:grid-cols-2 gap-6` with last child: `sm:col-span-2 lg:col-span-1` and grid as `lg:grid-cols-3` but wrap the last card in a centered container on lg when odd. Simpler: use `grid-cols-1 sm:grid-cols-2 gap-6` (2-column max) — 5 cards at 2 cols = 2-2-1, last card auto-centers with `last:sm:col-span-2`.

### 2.2 — GetInvolved first card filled CTA
- **File:** `src/components/GetInvolved.tsx`
- **Component:** GetInvolved pathway cards
- **Property:** First pathway button variant
- **Old:** All three use `variant="outline"`
- **New:** First pathway (Donate) uses `variant="filled"`
- **Token:** `bg-accent text-secondary` (filled variant)

### 2.3 — Impact stat label tracking
- **File:** `src/components/Impact.tsx`
- **Component:** Impact stat labels
- **Property:** `tracking-wide`
- **Old:** `tracking-wide` (0.025em)
- **New:** `tracking-[0.15em]`

### 2.4 — Remove redundant accent dividers
- **File:** `src/components/Impact.tsx`
- **Component:** Impact
- **Property:** Accent divider at bottom
- **Old:** `<div className="mt-14 mx-auto w-12 h-px bg-accent" />`
- **New:** Remove entirely
- **File:** `src/components/Donate.tsx`
- **Component:** Donate
- **Property:** Accent divider at bottom
- **Old:** `<div className="mt-12 mx-auto w-12 h-px bg-accent" />`
- **New:** Remove entirely

### 3.1 — Button focus-visible states
- **File:** `src/components/Button.tsx`
- **Component:** Button
- **Property:** All variant classes
- **Old:** No focus-visible styles
- **New:** Append `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary` to filled and outline variants. For ghost: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`

### 3.3 — Gallery-to-GetInvolved transition
- **File:** `src/components/Gallery.tsx`
- **Component:** Gallery
- **Property:** Bottom of section
- **Old:** Section ends with grid
- **New:** Add `<div className="mt-16 mx-auto w-full max-w-[200px] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />` after the grid

### 3.5 — Navbar height increase
- **File:** `src/components/Navbar.tsx`
- **Component:** Navbar
- **Property:** Inner container height
- **Old:** `h-16`
- **New:** `h-20`
- **File:** `src/components/Hero.tsx`
- **Component:** Hero
- **Property:** Top padding
- **Old:** `pt-28 md:pt-36`
- **New:** `pt-32 md:pt-40`
