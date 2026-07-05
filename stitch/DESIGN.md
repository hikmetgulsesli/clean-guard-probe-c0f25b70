---
name: Clean Guard Probe
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#424656'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#727687'
  outline-variant: '#c2c6d8'
  surface-tint: '#0054d6'
  primary: '#0050cb'
  on-primary: '#ffffff'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#b3c5ff'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#a33200'
  on-tertiary: '#ffffff'
  tertiary-container: '#cc4204'
  on-tertiary-container: '#fff6f4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59d'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#832600'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  max-width: 1440px
---

## Brand & Style
The design system is engineered for precision, utility, and high-density information management. It targets professional environments where status monitoring and rapid response are critical. The visual narrative is rooted in **Modern Corporate Minimalism** with a **Technical** edge, emphasizing clarity over decoration. 

The UI should evoke a sense of controlled efficiency and reliability. Every element serves a functional purpose, utilizing generous whitespace not for luxury, but for cognitive decompression in data-heavy environments. The aesthetic relies on crisp alignment, a disciplined color application, and a structured hierarchy that mirrors the logical flow of diagnostic data.

## Colors
The palette is dominated by a range of **Slate Grays** to provide a neutral, professional backdrop that minimizes eye strain during long-term monitoring. 

- **Primary (Action Blue):** Used exclusively for primary interactive elements, progress indicators, and active states. It must stand out clearly against the neutral background.
- **Neutral Scale:** Utilizes the Slate palette (from 50 to 900) for backgrounds, borders, and secondary text.
- **Utility Feedback:** High-saturation tokens for Success, Warning, and Error are used to bypass the standard hierarchy and grab immediate attention for system alerts. These should be paired with high-contrast text to ensure accessibility.

## Typography
This design system employs a multi-font strategy to differentiate content types. 

- **Hanken Grotesk** is used for headlines to provide a modern, sharp professional feel.
- **Inter** handles all body copy, chosen for its exceptional legibility in dense UI layouts and technical contexts.
- **JetBrains Mono** is reserved for labels, status codes, and numerical data. This monospaced font ensures that data columns align perfectly and technical values are easily distinguishable from prose.

Typographic hierarchy is strict. Use `label-sm` in all-caps for categories or metadata to maintain a clean, "pro-tool" appearance.

## Layout & Spacing
The layout follows a **4px base grid** to allow for high-density information density without sacrificing alignment. 

- **Grid:** A 12-column fluid grid is used for desktop, transitioning to a 4-column grid for mobile. 
- **Density:** Compactness is a priority. Use `md` (16px) for standard container padding, but drop to `sm` (8px) for internal card elements and list items to maximize data visibility.
- **Alignment:** All elements must snap to the 4px increments. Large dashboards should use a fixed-width container centered on the screen once the viewport exceeds 1440px to maintain readability of long-form data rows.

## Elevation & Depth
This design system uses **Low-contrast Outlines** and **Tonal Layering** instead of heavy shadows to define depth. This keeps the UI feeling lightweight and "flush" with the screen, which is more appropriate for technical monitoring tools.

- **Level 0 (Base):** Background color (`#F8FAFC`).
- **Level 1 (Cards/Containers):** White background with a 1px solid border in Slate-200. No shadow.
- **Level 2 (Hover/Active):** A very subtle, diffuse shadow (4px blur, 2% opacity) may be used to indicate interactivity, but the primary indicator of depth should be a slight shift in border color to the Primary Action Blue.
- **Separators:** Use 1px Slate-100 lines for internal divisions within cards or lists.

## Shapes
The shape language is **Soft (0.25rem)**. This provides a subtle modern touch that prevents the UI from feeling too aggressive or "industrial," while remaining far more professional and space-efficient than fully rounded or pill-shaped designs.

- **Buttons & Inputs:** 4px radius.
- **Status Tiles/Cards:** 8px (rounded-lg) for the outer container to create a clear visual boundary.
- **Tags/Chips:** 4px radius to match buttons, maintaining a cohesive interactive language.

## Components
- **Buttons:** Primary buttons use a solid Action Blue fill with white text. Secondary buttons use a Slate-100 background with Slate-900 text. Hover states should darken the background by 10%.
- **Status Tiles (Compact Cards):** These are the core of the system. They feature a `label-sm` header, a `headline-md` value, and a 4px vertical "status bar" on the left edge colored by the utility tokens (Success/Warning/Error).
- **Input Fields:** Use a 1px Slate-300 border. On focus, the border changes to Action Blue with a 2px outer "halo" of Action Blue at 10% opacity.
- **Toggles:** Use a compact switch design. The "off" state is Slate-300; the "on" state is Action Blue. The toggle handle is always white and flush with the track height.
- **Lists:** Data rows should have a hover state of Slate-50. Use JetBrains Mono for all numerical data points within the list to ensure vertical alignment of decimals.
- **Utility Badges:** Small, high-contrast chips used within tiles or rows. They should use a subtle tinted background (e.g., Error Red at 10% opacity) with high-contrast bold text (Error Red at 100% opacity).