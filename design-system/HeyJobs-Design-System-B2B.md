# HeyJobs Design System (B2B)

**Version 1.0 | Letzte Aktualisierung: Juni 2026**

Verwende dieses Design System für alle HeyJobs B2B-Materialien: Präsentationen, LinkedIn Ads, Landing Pages, E-Mails, und jegliche visuelle Kommunikation mit Arbeitgebern, Recruitern und HR-Professionals.

---

## 🎨 Color System

### Primary Colors (80/7.5/7.5/5 Rule)

**WHITE (Primary Base - 80%)**
- HEX: `#FFFFFF`
- Usage: Clean, professional foundation. Backgrounds, cards, breathing room.

**GOLD (Primary Accent - 7.5%)**
- HEX: `#F5B100`
- RGB: `rgb(245, 177, 0)`
- Usage: Primary CTAs, highlights, logo accent ("job" in wordmark), scribble underlines, performance metrics

**COSMO (Secondary Accent - 7.5%)**
- HEX: `#D02879`
- RGB: `rgb(208, 40, 121)`
- Usage: Secondary CTAs, accents, gradient component, hover states

**GRAY 100 (Text & Structure - 5%)**
- HEX: `#181A22`
- RGB: `rgb(24, 26, 34)`
- Usage: Headlines, body text, icons, structure

---

### Brand Gradient

```css
linear-gradient(90deg, #F5B100 0%, #F6694E 50%, #D02879 100%)
```

**Components:** GOLD → FIRE (#F6694E) → COSMO

⚠️ **CRITICAL RULE:** FIRE (#F6694E) NEVER standalone. ONLY in gradient.

**Usage:**
- Hero sections (background or overlay)
- Special impact elements
- Decorative accents (stripes, dividers)
- Hover effects (subtle shifts)

---

### Gray Scale (UI & Structure)

- GRAY 5: `#FAFAFA` (subtle backgrounds)
- GRAY 10: `#F7F7F8` (alternative backgrounds)
- GRAY 20: `#E8E9EC` (borders, dividers)
- GRAY 40: `#C4C6CF` (disabled states)
- GRAY 60: `#8B8D98` (secondary text, captions)
- GRAY 80: `#4A4C56` (tertiary text)
- GRAY 100: `#181A22` (primary text)

---

### Functional Colors

- Success: `#00A878`
- Warning: `#F5B100` (can use GOLD)
- Error: `#D02879` (can use COSMO)
- Info: `#0066CC`

---

## 📝 Typography System

### Font Families

**Rebond Grotesque Bold**
- Usage: Headlines, sublines, statement texts
- Weight: Bold (only available weight)
- Line-height: 100–130% (tight, impactful)
- Special: Scribble underlines allowed under keywords

**IBM Plex Sans**
- Regular (400): Body text, descriptions
- Semibold (600): Buttons, navigation, form labels, H4-H6
- Bold (700): Emphasis in body text
- Line-height: 150% (optimal readability)
- Source: Google Fonts (Open Source)

---

### Typography Hierarchy

**Headlines (Rebond Grotesque Bold)**
- H1 Hero: 56-72px (desktop) / 36-48px (mobile), Line-height 100-110%
- H2 Section: 40-56px (desktop) / 28-36px (mobile), Line-height 110-120%
- H3 Subsection: 32-40px (desktop) / 24-32px (mobile), Line-height 120-130%
- H4 Card: 24-32px (desktop) / 20-24px (mobile), Line-height 120-130%

**Body Text (IBM Plex Sans)**
- Large Body: 18-20px, Regular, Line-height 150% (intro text, lead paragraphs)
- Body Standard: 16px, Regular, Line-height 150% (main text)
- Small Body: 14px, Regular, Line-height 150% (captions, footnotes)
- Caption: 12px, Regular, Line-height 140%, GRAY 60 (fine print)

**UI Elements (IBM Plex Sans)**
- Buttons: 16px, Semibold, Line-height 100%
- Navigation: 16px, Semibold, Line-height 150%
- Form Labels: 14px, Semibold, Line-height 120%
- Input Text: 16px, Regular, Line-height 150%
- Links: 16px, Regular, underline on hover

**Metrics/Numbers (Special)**
- Font: Rebond Grotesque Bold
- Size: 40-64px (context-dependent)
- Color: GOLD or COSMO for impact
- Label below: IBM Plex Sans Regular/Semibold, 14-16px, GRAY 60

---

## 🔲 Spacing System (8px Grid)

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Very tight (icon-text gap) |
| sm | 8px | Small (label-input) |
| md | 16px | Standard (elements in cards) |
| lg | 24px | Moderate (sections in cards) |
| xl | 32px | Large (card padding, between cards) |
| 2xl | 48px | Section spacing |
| 3xl | 64px | Large sections |
| 4xl | 96px | Hero padding, page sections |
| 5xl | 128px | Extra-large spacing |

**Rule:** Never random values. Always from scale.

---

### Grid System
- Max-Width: 1280px
- Columns: 12-column grid
- Gutter: 24px (desktop) / 16px (mobile)
- Breakpoints: <768px (mobile), 768-991px (tablet), 992-1279px (desktop), ≥1280px (large)

---

## 🔘 Components

### Buttons

**Primary (GOLD)**
```
Background: #F5B100
Text: #181A22 (GRAY 100)
Font: IBM Plex Sans Semibold, 16px
Padding: 14px 32px
Border-radius: 4px
Hover: Darker GOLD (#D99D00), subtle lift (translateY(-2px))
```

**Secondary (Outline)**
```
Background: Transparent
Border: 2px solid #181A22
Text: #181A22
Padding: 12px 30px
Hover: Background #181A22, Text #FFFFFF
```

**Tertiary (Link)**
```
Background: Transparent
Text: #181A22
Hover: Color #D02879 (COSMO), underline
```

**Gradient (Special - rare use)**
```
Background: linear-gradient(90deg, #F5B100 0%, #F6694E 50%, #D02879 100%)
Text: #FFFFFF, IBM Plex Sans Bold, 16px
Padding: 14px 32px
Usage: Hero-CTAs only (selten!)
```

---

### Cards

```
Background: #FFFFFF
Border: None (shadow only)
Border-radius: 8-12px
Shadow: 0 2px 12px rgba(24,26,34,0.08)
Padding: 32px (desktop) / 24px (mobile)
Hover: Lift + stronger shadow
```

**Variant with Accent:**
- Border-top: 4px solid GOLD or COSMO

---

### Input Fields

```
Background: #FFFFFF
Border: 1px solid #C4C6CF (GRAY 40)
Border-radius: 4px
Padding: 12px 16px
Font: IBM Plex Sans Regular, 16px
Placeholder: GRAY 60 (#8B8D98)

Focus:
  Border: 2px solid #F5B100 (GOLD)
  Box-shadow: 0 0 0 3px rgba(245,177,0,0.15)

Disabled:
  Background: GRAY 10, Border: GRAY 20, Text: GRAY 40
```

---

### Navigation (Desktop)

```
Height: 80px
Background: #FFFFFF
Shadow: 0 2px 8px rgba(24,26,34,0.06)

Logo: Left, 140-160px, "job" in GOLD

Nav Items:
  Font: IBM Plex Sans Semibold, 16px
  Color: #181A22
  Hover: #D02879 (COSMO), border-bottom 2px
  Active: #F5B100 (GOLD), border-bottom 2px

CTA: Primary GOLD button, right
```

---

### Icons

- Style: Line icons, 2px stroke
- Sizes: 16px (small), 24px (default), 32px (large), 48px+ (hero)
- Colors: GRAY 100 (default), GRAY 60 (secondary), GOLD/COSMO (accent)
- Hover: Color shift to GOLD or COSMO

---

## ✏️ Scribble Underlines (B2B Signature)

**Character:**
- Handwritten, slightly irregular
- Loose, human, not perfect
- Replaces any "lifeline" elements

**Colors:**
- Primary: GOLD (#F5B100)
- Alternative: COSMO (#D02879)

**Usage:**
- Under important keywords in headlines (Rebond Grotesque)
- Max 1-2 words per headline
- Spacing respects descenders (g, j, p, q, y)

**Implementation:**
```css
.scribble-underline::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: -2%;
  width: 104%;
  height: 8px;
  background-image: url('scribble-gold.svg');
  background-size: 100% 100%;
}
```

---

## 🖼️ Logo Usage

**Primary Logo**
- "HeyJobs" wordmark: "job" in GOLD (#F5B100), rest in GRAY 100
- Icon (if present): GRAY 100
- Usage: Standard, light backgrounds

**Logo White**
- Full wordmark in WHITE (#FFFFFF)
- Optional: "job" can keep GOLD accent
- Usage: Dark backgrounds, gradients, photo overlays

**Rules:**
- Minimum: 120px width (digital), 30mm (print)
- Clear space: 16px (digital) / 4mm (print) all around
- Placement: Prominent, usually top-left

**Absolute Don'ts:**
- ❌ Never stretch, squash, distort
- ❌ No effects (shadow, glow, 3D)
- ❌ Don't rotate, skew
- ❌ No colors outside defined variants
- ❌ Not on busy backgrounds without contrast

---

## 🎯 Use Case Guidelines

### Presentations (PPTX)

**Title Slide:**
- Background: Gradient or WHITE with gradient accent
- Headline: Rebond Grotesque Bold, 64px, scribble on keyword
- Logo: Top-left, 160px

**Content Slide:**
- Background: WHITE
- Headline: Rebond Grotesque Bold, 40px
- Body: IBM Plex Sans Regular, 16px, max 3-5 bullets
- Visual: Right or left, 50/50 or 60/40 split

**Metrics Slide:**
- Large numbers: Rebond Grotesque Bold, 56px, GOLD/COSMO
- Labels: IBM Plex Sans Regular, 14px, GRAY 60
- Layout: 2x2 or 3-column grid

---

### LinkedIn Ads

**Text Ad Headline (max 70 chars):**
- Professional, data-driven, activating
- Example: "Performance Recruiting: Bezahlen Sie nur für Einstellungen"

**Image Ad (1200x627px):**
- Background: WHITE (80%) + GOLD/COSMO accents (20%)
- Headline: Rebond Grotesque Bold, 48px, scribble on keyword
- Logo: Bottom-right, 120px

---

### Landing Pages

**Hero Section:**
- Full-width, min-height 80vh
- Headline: Rebond Grotesque Bold, 64px (desktop), scribble
- Subline: 24px
- Body: IBM Plex Sans Regular, 18px
- CTA: Primary GOLD button + Secondary outline
- Trust badges below: "🔒 DSGVO-konform | 🇩🇪 Server in Deutschland"

**Feature Section:**
- 3-column grid (desktop) / 1-column (mobile)
- Icons: 48px, GOLD/COSMO
- Headlines: IBM Plex Sans Semibold, 24px
- Cards with shadow, hover lift

---

## ✅ Critical Do's and Don'ts

### Do's ✅
- Follow 80/7.5/7.5/5 color ratio strictly
- Use 8px grid for all spacing
- Scribble underlines for personality (1-2 words max)
- Sie-Ansprache (formal you) always in B2B
- Data-driven language (metrics, numbers, facts)
- Generous white space (80% WHITE rule)

### Don'ts ❌
- ❌ FIRE (#F6694E) never standalone (gradient only!)
- ❌ No "lifeline" elements (use scribbles instead)
- ❌ No Du-Ansprache (informal you) in B2B
- ❌ GOLD text on WHITE for body copy (contrast too low)
- ❌ Random spacing outside 8px grid
- ❌ No buzzwords (disruptive, synergistic, best-in-class)
- ❌ Stock photo clichés (handshakes, high-fives)

---

## 📊 Accessibility (WCAG 2.1 AA)

**Contrast Ratios:**
- GRAY 100 on WHITE: 14.4:1 ✅ AAA
- COSMO on WHITE: 4.6:1 ✅ AA (body text OK)
- GOLD on WHITE: 3.4:1 ⚠️ (large text/UI only, not body)
- WHITE on GOLD: 6.2:1 ✅ AAA
- WHITE on COSMO: 4.5:1 ✅ AA

**Always:**
- Alt texts for images
- Keyboard navigation functional
- Focus states visible (2px GOLD outline)
- Touch targets min 44px (mobile)

---

**When creating HeyJobs B2B materials, always reference this design system. Maintain professional, data-driven, performance-focused aesthetic while keeping warm, personal touch through scribbles and authentic imagery.**