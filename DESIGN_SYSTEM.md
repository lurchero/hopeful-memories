# Design System — Hopeful Memories

## Design Philosophy
Editorial minimalism with cultural weight. The site should feel gallery-forward, content-first, and visually restrained. Photography and storytelling lead — design supports, never competes.

The visual language should feel at home alongside contemporary art institutions, documentary publications, and cultural foundations.

## Color Palette

### Core Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#1A1A1A` | Primary text, headings on light backgrounds |
| `secondary` | `#FAF8F5` | Page background, text on dark backgrounds |
| `accent` | `#8C7A6B` | Muted earth tone — buttons, links, highlights |

### Warm Tones
| Token | Hex | Usage |
|-------|-----|-------|
| `warm-50` | `#FAF8F5` | Lightest warm background (same as secondary) |
| `warm-100` | `#F5F0EB` | Subtle warm section backgrounds |
| `warm-200` | `#E8E0D8` | Borders, dividers on warm backgrounds |
| `warm-300` | `#D4C8BC` | Muted warm accents |

### Neutrals
| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-50` | `#FAFAFA` | Near-white |
| `neutral-100` | `#F5F5F5` | Light gray |
| `neutral-200` | `#E5E5E5` | Borders, dividers |
| `neutral-300` | `#D4D4D4` | Disabled states |
| `neutral-400` | `#A3A3A3` | Secondary text, captions |
| `neutral-500` | `#737373` | Mid-gray |
| `neutral-600` | `#525252` | Body text secondary |
| `neutral-700` | `#404040` | Stronger body text |
| `neutral-800` | `#262626` | Dark section backgrounds |
| `neutral-900` | `#171717` | Darkest backgrounds |

### Color Rules
- Photography should never compete with UI color
- Accent color used sparingly — buttons, key links, subtle highlights
- No bright or saturated colors anywhere in the UI
- Dark sections use `neutral-800` or `neutral-900`, never pure black

## Typography

### Font Stack
| Role | Font | Variable | Fallback |
|------|------|----------|----------|
| Headings | Source Serif 4 | `--font-serif` | Georgia, serif |
| Body | Inter | `--font-sans` | system-ui, sans-serif |

### Type Scale
| Element | Size | Weight | Font |
|---------|------|--------|------|
| Hero headline | `clamp(40px, 6vw, 72px)` | 600 (semibold) | Serif |
| Section heading (h2) | `text-2xl md:text-4xl` | 600 (semibold) | Serif |
| Sub-heading (h3) | `text-lg md:text-xl` | 500 (medium) | Sans |
| Body | `text-base` (16px) | 400 (regular) | Sans |
| Caption / Label | `text-sm` (14px) | 400 | Sans |
| Overline / Tag | `text-xs` (12px) | 500, uppercase, tracking-wide | Sans |

### Typography Rules
- Headlines use serif font — grounded, dignified, editorial
- Body uses sans-serif — clean, high legibility
- No decorative, playful, or trendy display fonts
- Line heights: headings 1.1–1.2, body 1.6–1.7
- Max paragraph width: 640px for readability

## Spacing

### Section Spacing
| Context | Value |
|---------|-------|
| Section vertical padding | `py-20 md:py-28` |
| Section max-width | `max-w-content` (1200px) |
| Section horizontal padding | `px-6 md:px-8` |

### Component Spacing
| Context | Value |
|---------|-------|
| Between heading and body | `mt-4` to `mt-6` |
| Between body and CTA | `mt-8` to `mt-10` |
| Card grid gap | `gap-8 lg:gap-10` |
| Small internal gap | `gap-2` to `gap-4` |

## Components

### Buttons
| Variant | Style |
|---------|-------|
| Filled (primary) | `bg-accent text-secondary hover:bg-accent/90` |
| Outline | `border border-primary text-primary hover:bg-primary hover:text-secondary` |
| Ghost | `text-accent underline-offset-4 hover:underline` |

### Cards
- Light background: `bg-white border border-warm-200`
- Dark background: `bg-neutral-800 border border-neutral-700`
- Padding: `p-6 md:p-8`
- No rounded corners (sharp, editorial aesthetic)

### Section Backgrounds
| Variant | Background | Text |
|---------|------------|------|
| `light` | `bg-secondary` (#FAF8F5) | `text-primary` |
| `warm` | `bg-warm-100` (#F5F0EB) | `text-primary` |
| `dark` | `bg-neutral-800` (#262626) | `text-secondary` |

### Forms
- Inputs: `bg-white border border-warm-200 text-primary`
- On dark: `bg-neutral-900 border border-neutral-700 text-secondary`
- Focus: `ring-2 ring-accent/40`
- No rounded corners

## Imagery Guidelines
- Photography leads the visual experience
- Images should feel authentic, dignified, and emotionally grounded
- No stock photography or staged/exploitative imagery
- Full-bleed or generous framing preferred
- Gallery pieces: framed with subtle warm accent lighting

## Motion
- Subtle and purposeful only
- Fade-in on scroll for sections
- Smooth hover transitions (200–300ms)
- No bouncing, sliding, or attention-grabbing animations
- `transition-all duration-300 ease-in-out` as default

## Accessibility
- WCAG 2.1 AA compliance
- Minimum 4.5:1 contrast ratio for body text
- Focus-visible states on all interactive elements
- Semantic HTML throughout
- Alt text on all images
- Skip-to-content link
