---
name: electro-design
description: Design system skill for electro. Activate when building UI components, pages, or any visual elements. Provides exact color tokens, typography scale, spacing grid, component patterns, and craft rules. Read references/DESIGN.md before writing any CSS or JSX.
---

# electro Design System

You are building UI for **electro**. Dark-themed, warm palette, sans-serif typography (Roboto Slab), standard density on a 5px grid, expressive motion.

## Visual Reference

**IMPORTANT**: Study ALL screenshots below before writing any UI. Match colors, typography, spacing, layout, and motion exactly as shown.

### Homepage

![electro Homepage](screenshots/homepage.png)

> Read `references/DESIGN.md` for full token details.

## Design Philosophy

- **Layered depth** — use shadow tokens to create a sense of physical layering. Each elevation level has a specific shadow.
- **Gradient accents** — gradients are used thoughtfully for emphasis, not decoration.
- **Type pairing** — Roboto Slab for body/UI text, Roboto for headings/display. Never introduce a third typeface.
- **standard density** — 5px base grid. Every dimension is a multiple of 5.
- **warm palette** — the color temperature runs warm, matching the sans-serif typography.
- **Restrained accent** — `#f45800` is the only pop of color. Used exclusively for CTAs, links, focus rings, and active states.
- **Expressive motion** — animations are an integral part of the experience. Use spring physics and layout animations.

## Color System

### Core Palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Background | `--background` | `#000000` | Page/app background |
| Surface | `--surface` | `#1e1f26` | Cards, panels, modals |
| Text Primary | `--text-primary` | `#ffffff` | Headings, body text |
| Text Muted | `--text-muted` | `#656460` | Captions, placeholders |
| Accent | `--accent` | `#f45800` | CTAs, links, focus rings |
| Border | `--border` | `#313131` | Dividers, card borders |

### Status Colors

| Status | Hex | Use |
|--------|-----|-----|
| Success | `#1bd760` | Confirmations, positive trends |
| Warning | `#ffda44` | Caution states, pending items |
| Danger | `#d9534f` | Errors, destructive actions |

### Extended Palette

- **lightbox-ui-color:** `#f0f0f0` — Light surface or highlight color
- `#40464d`
- `#151515` — Deep background layer or shadow color
- `#69727d`
- **e-testimonial-icon-color:** `#1da1f2`
- **n-tabs-border-color:** `#dddddd`
- `#a3a3a3`
- **e-testimonial-icon-color:** `#0461dd`

### CSS Variable Tokens

```css
--border-radius: 0;
--border-width-top: 0px;
--border-width-right: 0px;
--border-width-bottom: 0px;
--border-width-left: 0px;
--border-style: initial;
--border-color: initial;
--n-tabs-color-accent-fallback: #61ce70;
--n-tabs-color-secondary-fallback: #54595f;
--n-tabs-background-color: transparent;
--n-tabs-border-width: 1px;
--n-tabs-border-color: #d5d8dc;
--n-tabs-content-border-radius: initial;
--n-tabs-title-background-color: #f1f2f3;
--n-tabs-title-border-radius: initial;
--e-global-color-primary: #6EC1E4;
--e-global-color-secondary: #54595F;
--e-global-color-accent: #61CE70;
--e-global-typography-primary-font-family: "Roboto";
--e-global-typography-primary-font-weight: 600;
```

## Typography

### Font Stack

- **Roboto Slab** — Heading 1, Heading 2, Heading 3
- **Roboto** — Body, Caption

### Font Sources

```css
@font-face {
  font-family: "eicons";
  src: url("fonts/eicons-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Poppins";
  src: url("fonts/Poppins-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Poppins";
  src: url("fonts/Poppins-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Roboto Slab";
  src: url("fonts/RobotoSlab-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Roboto Slab";
  src: url("fonts/RobotoSlab-Regular.ttf") format("truetype");
  font-weight: 400;
}
```

### Type Scale

| Role | Family | Size | Weight |
|------|--------|------|--------|
| Heading 1 | Roboto Slab | 100px | 700 |
| Heading 2 | Roboto Slab | 70px | 700 |
| Heading 3 | Roboto Slab | 60px | 700 |
| Body | Roboto | 13px | 400 |
| Caption | Roboto | 20px | 400 |

### Typography Rules

- Body/UI: **Roboto Slab**, Headings: **Roboto** — these are the only display fonts
- Max 3-4 font sizes per screen
- Headings: weight 600-700, body: weight 400
- Use color and opacity for text hierarchy, not additional font sizes
- Line height: 1.5 for body, 1.2 for headings

## Spacing & Layout

### Base Grid: 5px

Every dimension (margin, padding, gap, width, height) must be a multiple of **5px**.

### Spacing Scale

`5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70` px

### Spacing as Meaning

| Spacing | Use |
|---------|-----|
| 2.5-5px | Tight: related items within a group |
| 10px | Medium: between groups |
| 15-20px | Wide: between sections |
| 30px+ | Vast: major section breaks |

### Border Radius

Scale: `.1em, 1.5em, 2em, 2px, 8px, inherit, 3px, 4px, 5px, 6px, 10px, 10%, 30px, 100%, 999px`
Default: `4px`

### Container

Max-width: `1024px`, centered with auto margins.

### Breakpoints

| Name | Value |
|------|-------|
| xs | 320px |
| xs | 479px |
| xs | 480px |
| sm | 600px |
| md | 767px |
| md | 768px |
| lg | 781px |
| lg | 782px |
| lg | 959px |
| lg | 960px |
| lg | 1024px |
| xl | 1025px |
| xl | 1199px |
| 2xl | 99999px |

Mobile-first: design for small screens, layer on responsive overrides.

## Component Patterns

### Card

```css
.card {
  background: #1e1f26;
  border: 1px solid #313131;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 7px 7px 0px 0px #000000;
}
```

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

### Button

```css
/* Primary */
.btn-primary {
  background: #f45800;
  color: #ffffff;
  border-radius: 4px;
  padding: 10px 20px;
  font-weight: 500;
  transition: opacity 150ms ease;
}
.btn-primary:hover { opacity: 0.9; }

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 1px solid #313131;
  color: #ffffff;
  border-radius: 4px;
  padding: 10px 20px;
}
```

```html
<button class="btn-primary">Get Started</button>
<button class="btn-ghost">Learn More</button>
```

### Input

```css
.input {
  background: #000000;
  border: 1px solid #313131;
  border-radius: 4px;
  padding: 10px 15px;
  color: #ffffff;
  font-size: 14px;
}
.input:focus { border-color: #f45800; outline: none; }
```

```html
<input class="input" type="text" placeholder="Search..." />
```

### Badge / Chip

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background: #1e1f26;
  color: #656460;
}
```

```html
<span class="badge">New</span>
<span class="badge">Beta</span>
```

### Modal / Dialog

```css
.modal-backdrop { background: rgba(0, 0, 0, 0.6); }
.modal {
  background: #1e1f26;
  border: 1px solid #313131;
  border-radius: 999px;
  padding: 30px;
  max-width: 480px;
  width: 90vw;
  box-shadow: 0px 0px 15px 0px #000;
}
```

```html
<div class="modal-backdrop">
  <div class="modal">
    <h2>Dialog Title</h2>
    <p>Dialog content.</p>
    <button class="btn-primary">Confirm</button>
    <button class="btn-ghost">Cancel</button>
  </div>
</div>
```

### Table

```css
.table { width: 100%; border-collapse: collapse; }
.table th {
  text-align: left;
  padding: 10px 15px;
  font-weight: 500;
  font-size: 12px;
  color: #656460;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #313131;
}
.table td {
  padding: 15px;
  border-bottom: 1px solid #313131;
}
```

```html
<table class="table">
  <thead><tr><th>Name</th><th>Status</th><th>Date</th></tr></thead>
  <tbody>
    <tr><td>Item One</td><td>Active</td><td>Jan 1</td></tr>
    <tr><td>Item Two</td><td>Pending</td><td>Jan 2</td></tr>
  </tbody>
</table>
```

### Navigation

```css
.nav {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  border-bottom: 1px solid #313131;
}
.nav-link {
  color: #656460;
  padding: 10px 15px;
  border-radius: 4px;
  transition: color 150ms;
}
.nav-link:hover { color: #ffffff; }
.nav-link.active { color: #f45800; }
```

```html
<nav class="nav">
  <a href="/" class="nav-link active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/pricing" class="nav-link">Pricing</a>
  <button class="btn-primary" style="margin-left: auto">Get Started</button>
</nav>
```

### Extracted Components

These components were found in the codebase:

**Input** (`html`)

**Navigation** (`html`)

**List** (`html`)

## Page Structure

The following page sections were detected:

- **Navigation** — Top navigation bar (6 items)
- **Hero** — Hero section (detected from heading structure)
- **Testimonials** — Testimonials/reviews section
- **Faq** — FAQ/accordion section

When building pages, follow this section order and structure.

## Animation & Motion

This project uses **expressive motion**. Animations are part of the design language.

### CSS Animations

- `turn-on-visibility`
- `turn-off-visibility`
- `lightbox-zoom-in`
- `lightbox-zoom-out`
- `overlay-menu__fade-in-animation`

### Motion Tokens

- **Duration scale:** `0s`, `.15s`, `.3s`, `0.3s`, `0.5s`, `.5s`, `.75s`, `1ms`, `1s`, `1.2s`, `1.25s`, `2s`, `2ms`, `10s`, `20s`, `20ms`, `100ms`, `120ms`, `150ms`, `180ms`, `200ms`, `220ms`, `250ms`, `300ms`, `400ms`, `500ms`, `800ms`, `1000ms`, `2000ms`
- **Easing functions:** `ease`, `linear`, `ease-out`, `cubic-bezier(0,.33,.07,1.03)`, `cubic-bezier(.58,.3,.005,1)`, `cubic-bezier(.215,.61,.355,1)`, `cubic-bezier(.755,.050,.855,.060)`, `ease-in-out`, `cubic-bezier(.55,.055,.675,.19)`, `cubic-bezier(.175,.885,.32,1)`, `cubic-bezier(0.47,2.02,.31,-.36)`
- **Animated properties:** `opacity`

### Motion Guidelines

- **Duration:** Use values from the duration scale above. Short (0s) for micro-interactions, long (2000ms) for page transitions
- **Easing:** Use `ease` as the default easing curve
- **Direction:** Elements enter from bottom/right, exit to top/left
- **Reduced motion:** Always respect `prefers-reduced-motion` — disable animations when set

## Depth & Elevation

### Shadow Tokens

- Subtle: `inset 0 0 0 1px rgba(0,0,0,.1)`
- Subtle: `0px 0px 0px 0px rgba(0,0,0,0.5)`
- Raised (cards, buttons): `7px 7px 0px 0px #000000`
- Raised (cards, buttons): `7px 7px 0px 0px #FFD338`
- Floating (dropdowns, popovers): `0px 0px 15px 0px #000`
- Floating (dropdowns, popovers): `0px 0px 15px 0px rgba(0,0,0,0.1)`

### Z-Index Scale

`0, 1, 2, 5, 9, 10, 50, 99, 100, 999, 9997, 9999, 100000, 999999, 2000000, 3000000, 5000000, 9999999999`

Use these exact values — never invent z-index values.

## Anti-Patterns (Never Do)

- **No blur effects** — no backdrop-blur, no filter: blur()
- **No zebra striping** — tables and lists use borders for separation
- **No invented colors** — every hex value must come from the palette above
- **No arbitrary spacing** — every dimension is a multiple of 5px
- **No extra fonts** — only Roboto Slab and Roboto are allowed
- **No arbitrary border-radius** — use the scale: .1em, 1.5em, 2em, 2px, 8px, 3px, 4px, 5px, 6px, 10px
- **No opacity for disabled states** — use muted colors instead

## Workflow

1. **Read** `references/DESIGN.md` before writing any UI code
2. **Pick colors** from the Color System section — never invent new ones
3. **Set typography** — Roboto Slab, Roboto only, using the type scale
4. **Build layout** on the 5px grid — check every margin, padding, gap
5. **Match components** to patterns above before creating new ones
6. **Apply elevation** — use shadow tokens
7. **Validate** — every value traces back to a design token. No magic numbers.

## Brand Spec

- **Favicon:** `https://electro.nicdark.com/electrician-wordpress-theme/wp-content/uploads/sites/2/2022/12/electro-thumb-150x150.jpg`
- **Site URL:** `https://electro.nicdark.com/electrician-wordpress-theme/`
- **Brand color:** `#f45800`
- **Brand typeface:** Roboto Slab

## Quick Reference

```
Background:     #000000
Surface:        #1e1f26
Text:           #ffffff / #656460
Accent:         #f45800
Border:         #313131
Font:           Roboto Slab
Spacing:        5px grid
Radius:         4px
Components:     8 detected
```

## When to Trigger

Activate this skill when:
- Creating new components, pages, or visual elements for electro
- Writing CSS, Tailwind classes, styled-components, or inline styles
- Building page layouts, templates, or responsive designs
- Reviewing UI code for design consistency
- The user mentions "electro" design, style, UI, or theme
- Generating mockups, wireframes, or visual prototypes

---

# Full Reference Files

> Every output file is embedded below. Claude has full design system context from /skills alone.

## Design System Tokens (DESIGN.md)

# electro DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 2 · Components: 8
> Icon library: not detected · State: not detected
> Primary theme: dark · Dark mode toggle: no · Motion: expressive

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![electro Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **dark-themed** interface with a warm tone. Depth is expressed through layered shadows and subtle surface color variation. Typography pairs **Roboto** for display/headings with **Roboto Slab** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **5px base grid** (standard density), with scale: 5, 10, 15, 20, 25, 30, 35, 40px. The accent color **#f45800** anchors interactive elements (buttons, links, focus rings). Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| swiper-theme-color | `#000000` | background | Page background, darkest surface |
| e-testimonial-icon-color | `#1e1f26` | surface | Card and panel backgrounds |
| lightbox-ui-color-hover | `#ffffff` | text-primary | Headings and body text |
| text-muted | `#656460` | text-muted | Captions, placeholders, secondary info |
| n-tabs-color-secondary-fallback | `#5a5a5a` | text-muted | Captions, placeholders, secondary info |
| e-testimonial-icon-color | `#313131` | border | Dividers, card borders, outlines |
| accent | `#f45800` | accent | CTAs, links, focus rings, active states |
| danger | `#d9534f` | danger | Error states, destructive actions |
| e-testimonial-icon-color | `#1bd760` | success | Success states, positive indicators |
| e-preloader-color | `#ffda44` | warning | Warning states, caution indicators |
| e-testimonial-icon-color | `#1da1f2` | info | Informational highlights |
| lightbox-ui-color | `#f0f0f0` | unknown | Palette color |
| unknown | `#40464d` | unknown | Palette color |
| unknown | `#151515` | unknown | Palette color |
| unknown | `#69727d` | unknown | Palette color |
| n-tabs-border-color | `#dddddd` | unknown | Palette color |
| unknown | `#a3a3a3` | unknown | Palette color |
| e-testimonial-icon-color | `#0461dd` | unknown | Palette color |
| e-testimonial-icon-color | `#ea4434` | unknown | Palette color |
| e-testimonial-icon-color | `#dc3232` | unknown | Palette color |

### CSS Variable Tokens

```css
--border-radius: 0;
--border-width-top: 0px;
--border-width-right: 0px;
--border-width-bottom: 0px;
--border-width-left: 0px;
--border-style: initial;
--border-color: initial;
--n-tabs-color-accent-fallback: #61ce70;
--n-tabs-color-secondary-fallback: #54595f;
--n-tabs-background-color: transparent;
--n-tabs-border-width: 1px;
--n-tabs-border-color: #d5d8dc;
--n-tabs-content-border-radius: initial;
--n-tabs-title-background-color: #f1f2f3;
--n-tabs-title-border-radius: initial;
--e-global-color-primary: #6EC1E4;
--e-global-color-secondary: #54595F;
--e-global-color-accent: #61CE70;
--e-global-typography-primary-font-family: "Roboto";
--e-global-typography-primary-font-weight: 600;
```


---

## 3. Typography Rules

**Font Stack:**
- **Roboto Slab** — Heading 1, Heading 2, Heading 3
- **Roboto** — Body, Caption

**Font Sources:**

```css
@font-face {
  font-family: "eicons";
  src: url("fonts/eicons-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Poppins";
  src: url("fonts/Poppins-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Poppins";
  src: url("fonts/Poppins-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Roboto Slab";
  src: url("fonts/RobotoSlab-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Roboto Slab";
  src: url("fonts/RobotoSlab-Regular.ttf") format("truetype");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Roboto Slab | 100px | 700 |
| Heading 2 | Roboto Slab | 70px | 700 |
| Heading 3 | Roboto Slab | 60px | 700 |
| Body | Roboto | 13px | 400 |
| Caption | Roboto | 20px | 400 |

**Typographic Rules:**
- Limit to 2 font families max per screen
- Use **Roboto Slab** for body/UI text, **Roboto** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Navigation (1)

**Navigation** — `html`

### Data Display (1)

**List** — `html`

### Data Input (2)

**Button** — `html`
- Animation: 

**Input** — `html`
- State: :focus, :placeholder

### Overlay (1)

**Modal** — `html`

### Media (3)

**Image** — `html`

**Icon** — `html`

**Map/Canvas** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 5px
- **Spacing scale:** 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70
- **Border radius:** .1em, 1.5em, 2em, 2px, 8px, inherit, 3px, 4px, 5px, 6px, 10px, 10%, 30px, 100%, 999px
- **Max content width:** 1024px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 2.5-5px | Tight: related items within a group |
| 10px | Medium: between groups |
| 15-20px | Wide: between sections |
| 30px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Flat — subtle depth hints

- `inset 0 0 0 1px rgba(0,0,0,.1)`
- `0px 0px 0px 0px rgba(0,0,0,0.5)`

### Raised — cards, buttons, interactive elements

- `7px 7px 0px 0px #000000`
- `7px 7px 0px 0px #FFD338`

### Floating — dropdowns, popovers, modals

- `0px 0px 15px 0px #000`
- `0px 0px 15px 0px rgba(0,0,0,0.1)`
- `0 4px 15px rgba(0,0,0,.3)`

### Overlay — full-screen overlays, top-level dialogs

- `2px 8px 23px 3px rgba(0,0,0,.2)`
- `0 0 30px rgba(0,0,0,.3),0 0 8px -5px rgba(0,0,0,.3)`
- `0px 0px 30px 0px rgba(0,0,0,0.3)`

### Z-Index Scale

`0, 1, 2, 5, 9, 10, 50, 99, 100, 999, 9997, 9999, 100000, 999999, 2000000, 3000000, 5000000, 9999999999`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes turn-on-visibility`
- `@keyframes turn-off-visibility`
- `@keyframes lightbox-zoom-in`
- `@keyframes lightbox-zoom-out`
- `@keyframes overlay-menu__fade-in-animation`
- `@keyframes spin`
- `@keyframes blink`
- `@keyframes a`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#f45800` for interactive elements (buttons, links, focus rings)
- Use `#000000` as the primary page background
- Pair **Roboto Slab** (body) with **Roboto** (display) — these are the only allowed fonts
- Follow the **5px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: .1em, 1.5em, 2em, 2px, 8px
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Roboto Slab and Roboto
- Don't use arbitrary spacing values — stick to multiples of 5px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| xs | 320px | css |
| xs | 479px | css |
| xs | 480px | css |
| sm | 600px | css |
| md | 767px | css |
| md | 768px | css |
| lg | 781px | css |
| lg | 782px | css |
| lg | 959px | css |
| lg | 960px | css |
| lg | 1024px | css |
| xl | 1025px | css |
| xl | 1199px | css |
| 2xl | 99999px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #1e1f26
Border: 1px solid #313131
Radius: 4px
Padding: 20px
Font: Roboto Slab
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #f45800, text white
Ghost: bg transparent, border #313131
Padding: 10px 20px
Radius: 4px
Hover: opacity 0.9 or lighter shade
Focus: ring with #f45800
```

### Build a Page Layout

```
Background: #000000
Max-width: 1024px, centered
Grid: 5px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #1e1f26
Label: #656460 (muted, 12px, uppercase)
Value: #ffffff (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #000000
Input border: 1px solid #313131
Focus: border-color #f45800
Label: #656460 12px
Spacing: 20px between fields
Radius: 4px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Roboto Slab, type scale from Section 3
4. Spacing: 5px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```

## Bundled Fonts (fonts/)

The following font files are bundled in the `fonts/` directory:

- `fonts/eicons-Regular.ttf`
- `fonts/eicons-Regular.woff`
- `fonts/eicons-Regular.woff2`
- `fonts/Poppins-Black.ttf`
- `fonts/Poppins-Bold.ttf`
- `fonts/Poppins-ExtraBold.ttf`
- `fonts/Poppins-ExtraLight.ttf`
- `fonts/Poppins-Light.ttf`
- `fonts/Poppins-Medium.ttf`
- `fonts/Poppins-Regular.ttf`
- `fonts/Poppins-SemiBold.ttf`
- `fonts/Poppins-Thin.ttf`
- `fonts/Roboto-Black.ttf`
- `fonts/Roboto-Bold.ttf`
- `fonts/Roboto-ExtraBold.ttf`
- `fonts/Roboto-ExtraLight.ttf`
- `fonts/Roboto-Light.ttf`
- `fonts/Roboto-Medium.ttf`
- `fonts/Roboto-Regular.ttf`
- `fonts/Roboto-SemiBold.ttf`
- `fonts/Roboto-Thin.ttf`
- `fonts/RobotoSlab-Black.ttf`
- `fonts/RobotoSlab-Bold.ttf`
- `fonts/RobotoSlab-ExtraBold.ttf`
- `fonts/RobotoSlab-ExtraLight.ttf`
- `fonts/RobotoSlab-Light.ttf`
- `fonts/RobotoSlab-Medium.ttf`
- `fonts/RobotoSlab-Regular.ttf`
- `fonts/RobotoSlab-SemiBold.ttf`
- `fonts/RobotoSlab-Thin.ttf`

Use these local font files in `@font-face` declarations instead of fetching from Google Fonts.

## Homepage Screenshots (screenshots/)

![homepage.png](screenshots/homepage.png)

