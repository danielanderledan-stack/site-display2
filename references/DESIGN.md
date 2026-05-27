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
