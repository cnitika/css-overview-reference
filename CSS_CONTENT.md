# CSS Overview: Complete Reference Guide

## SECTION 1: MODULES (Foundation)

### 1.1 Anchor Positioning
**What it is**: Positioning elements relative to named anchor points instead of just fixed/absolute positioning.
```css
/* Define an anchor */
.anchor-element {
  anchor-name: --my-anchor;
}

/* Position relative to anchor */
.positioned-element {
  position: absolute;
  left: anchor(--my-anchor left);
  top: anchor(--my-anchor bottom);
}
```

### 1.2 Animations
**What it is**: Smooth transitions between CSS states over time.
```css
@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.element {
  animation: slideIn 0.5s ease-out;
}
```

### 1.3 Backgrounds & Borders
**What it is**: Visual styling for element backgrounds and edges.
```css
.element {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 2px solid #333;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
```

### 1.4 Box Alignment
**What it is**: Aligning content within boxes using flexbox/grid alignment properties.
```css
.container {
  display: flex;
  justify-content: center;    /* Horizontal alignment */
  align-items: center;        /* Vertical alignment */
  gap: 1rem;
}
```

### 1.5 Box Model
**What it is**: The structure of element sizing (content, padding, border, margin).
```css
.element {
  width: 200px;
  padding: 20px;              /* Inside spacing */
  border: 2px solid black;
  margin: 10px;               /* Outside spacing */
  box-sizing: border-box;     /* Include padding/border in width */
}
```

### 1.6 Box Sizing
**What it is**: How width and height are calculated.
```css
/* content-box: width = content only (default) */
.element1 { box-sizing: content-box; width: 200px; padding: 20px; }

/* border-box: width = content + padding + border */
.element2 { box-sizing: border-box; width: 200px; padding: 20px; }
```

### 1.7 Cascade
**What it is**: How CSS rules are applied when multiple rules target the same element.
```css
/* Later rules override earlier ones */
p { color: blue; }
p { color: red; }  /* This wins */

/* Specificity matters */
p { color: blue; }           /* 0,0,1 */
.paragraph { color: green; } /* 0,1,0 - wins */
#text { color: yellow; }     /* 1,0,0 - wins all */
```

### 1.8 Cascading Variables
**What it is**: CSS custom properties that cascade through the DOM.
```css
:root {
  --primary-color: #667eea;
  --spacing: 1rem;
}

.element {
  color: var(--primary-color);
  margin: var(--spacing);
}

/* Override in specific context */
.dark-section {
  --primary-color: #fff;
}
```

### 1.9 Colors
**What it is**: Color values in various formats.
```css
.element {
  color: red;                           /* Named */
  background: #667eea;                  /* Hex */
  border: rgb(102, 126, 234);          /* RGB */
  box-shadow: rgba(0, 0, 0, 0.5);      /* RGBA */
  outline: hsl(262, 80%, 50%);         /* HSL */
  text-decoration: oklch(0.5 0.2 50);  /* OKLCH */
}
```

### 1.10 Columns
**What it is**: Multi-column text layout.
```css
.article {
  column-count: 3;           /* 3 columns */
  column-gap: 2rem;          /* Space between columns */
  column-rule: 1px solid #ccc; /* Divider line */
}
```

### 1.11 Conditional Rules
**What it is**: CSS rules that apply based on conditions (@media, @supports).
```css
/* Media queries */
@media (max-width: 768px) {
  .container { flex-direction: column; }
}

/* Feature support */
@supports (display: grid) {
  .layout { display: grid; }
}
```

### 1.12 Containment
**What it is**: Isolating element styling to improve performance.
```css
.card {
  contain: layout style paint;
  /* Prevents layout from affecting outside elements */
}
```

### 1.13 Counters
**What it is**: Automatic numbering for elements.
```css
body { counter-reset: section; }

h2 {
  counter-increment: section;
}

h2::before {
  content: "Section " counter(section) ": ";
}
```

---

## SECTION 2: LAYOUT & DISPLAY

### 2.1 CSSOM View
**What it is**: JavaScript API to access computed styles and layout information.
```javascript
const element = document.querySelector('.box');
const rect = element.getBoundingClientRect();
const computed = window.getComputedStyle(element);
```

### 2.2 Custom Functions & Mixins
**What it is**: Reusable CSS patterns (using preprocessors like SCSS).
```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button { @include flex-center; }
```

### 2.3 Display
**What it is**: How elements are rendered (block, inline, flex, grid, etc.).
```css
.block { display: block; }           /* Full width */
.inline { display: inline; }         /* Flows with text */
.inline-block { display: inline-block; } /* Hybrid */
.flex { display: flex; }             /* Flexbox layout */
.grid { display: grid; }             /* Grid layout */
.none { display: none; }             /* Hidden */
```

### 2.4 Environment Variables
**What it is**: System-level CSS variables (viewport, safe areas).
```css
.element {
  padding: env(safe-area-inset-top);
  width: 100vw;  /* Viewport width */
  height: 100vh; /* Viewport height */
}
```

### 2.5 Filter Effects
**What it is**: Visual effects applied to elements.
```css
.image {
  filter: blur(5px);
  filter: brightness(1.2);
  filter: contrast(1.5);
  filter: grayscale(100%);
  filter: hue-rotate(90deg);
  filter: invert(100%);
  filter: opacity(0.5);
  filter: saturate(2);
  filter: sepia(100%);
  filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.3));
}
```

### 2.6 Flexbox
**What it is**: Flexible box layout for 1D layouts.
```css
.container {
  display: flex;
  flex-direction: row;        /* row, column, row-reverse, column-reverse */
  justify-content: space-between; /* Main axis alignment */
  align-items: center;        /* Cross axis alignment */
  flex-wrap: wrap;            /* Allow wrapping */
  gap: 1rem;                  /* Space between items */
}

.item {
  flex: 1;                    /* Grow equally */
  flex-basis: 200px;          /* Base size */
}
```

### 2.7 Fonts
**What it is**: Typography styling.
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.element {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;           /* 100-900 */
  font-style: italic;
  line-height: 1.5;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
```

### 2.8 Grid
**What it is**: 2D layout system for complex layouts.
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
  grid-template-rows: auto 1fr auto;      /* Header, content, footer */
  gap: 2rem;
  grid-auto-flow: dense;                  /* Fill gaps */
}

.item {
  grid-column: span 2;        /* Span 2 columns */
  grid-row: 1 / 3;            /* From row 1 to 3 */
}
```

### 2.9 Images
**What it is**: Styling and sizing images.
```css
img {
  max-width: 100%;
  height: auto;               /* Maintain aspect ratio */
  object-fit: cover;          /* Crop to fill container */
  object-position: center;
}
```

### 2.10 Lists
**What it is**: Styling list elements.
```css
ul {
  list-style: none;           /* Remove bullets */
  list-style-position: inside;
  list-style-image: url('bullet.png');
}

li {
  margin-bottom: 0.5rem;
}
```

### 2.11 Logical Properties
**What it is**: Direction-aware properties (work with RTL/LTR).
```css
.element {
  margin-inline: 1rem;        /* Left & right (or RTL equivalent) */
  margin-block: 2rem;         /* Top & bottom */
  padding-inline-start: 1rem; /* Left (or RTL right) */
  inset-block-start: 0;       /* Top (or RTL bottom) */
}
```

---

## SECTION 3: ADVANCED STYLING

### 3.1 Sizing
**What it is**: Setting element dimensions.
```css
.element {
  width: 100%;
  height: 200px;
  min-width: 50px;
  max-width: 500px;
  aspect-ratio: 16 / 9;       /* Maintain ratio */
}
```

### 3.2 Masking
**What it is**: Hiding parts of elements using masks.
```css
.element {
  mask-image: url('#mask');
  mask-size: cover;
  mask-position: center;
  -webkit-mask-image: linear-gradient(to bottom, black, transparent);
}
```

### 3.3 Media Queries
**What it is**: Responsive design based on device characteristics.
```css
@media (max-width: 768px) {
  .container { flex-direction: column; }
}

@media (prefers-dark-mode) {
  body { background: #1a1a1a; color: #fff; }
}

@media (orientation: landscape) {
  .element { width: 80vw; }
}
```

### 3.4 Nesting
**What it is**: Organizing related CSS rules (using preprocessors).
```scss
.card {
  background: white;
  padding: 1rem;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .content {
    margin-top: 1rem;
  }
}
```

### 3.5 Overflow
**What it is**: Handling content that exceeds container size.
```css
.element {
  overflow: visible;          /* Show overflow */
  overflow: hidden;           /* Clip overflow */
  overflow: scroll;           /* Always show scrollbars */
  overflow: auto;             /* Show scrollbars when needed */
  overflow-x: auto;           /* Horizontal scrolling only */
  overflow-y: hidden;         /* Vertical hidden */
  text-overflow: ellipsis;    /* ... for truncated text */
}
```

### 3.6 Positioning
**What it is**: Controlling element placement.
```css
.element {
  position: static;           /* Default flow */
  position: relative;         /* Relative to normal position */
  position: absolute;         /* Relative to positioned parent */
  position: fixed;            /* Relative to viewport */
  position: sticky;           /* Hybrid relative/fixed */
  
  top: 10px;
  left: 20px;
  z-index: 10;                /* Stacking order */
}
```

### 3.7 Properties & Values API
**What it is**: JavaScript API to interact with CSS properties.
```javascript
const element = document.querySelector('.box');
element.style.setProperty('--color', 'blue');
const value = getComputedStyle(element).getPropertyValue('--color');
```

### 3.8 Scroll Anchoring
**What it is**: Preventing layout shift during scroll.
```css
.element {
  overflow-anchor: auto;      /* Default behavior */
  overflow-anchor: none;      /* Disable anchoring */
}
```

### 3.9 Scroll-driven Animations
**What it is**: Animations triggered by scrolling.
```css
@supports (animation-timeline: view()) {
  .element {
    animation: slideIn linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }
}
```

### 3.10 Scroll Snap
**What it is**: Snapping scroll position to defined points.
```css
.container {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
}

.item {
  scroll-snap-align: center;
  scroll-snap-stop: always;
}
```

### 3.11 Selectors
**What it is**: Targeting specific elements with CSS rules.
```css
/* Type selector */
p { }

/* Class selector */
.highlight { }

/* ID selector */
#main { }

/* Attribute selector */
input[type="text"] { }

/* Pseudo-class */
a:hover { }
button:focus { }
li:nth-child(2n) { }

/* Pseudo-element */
p::first-line { }
::before { content: ""; }

/* Combinators */
.parent > .child { }         /* Direct child */
.ancestor .descendant { }    /* Any descendant */
.sibling + .next { }         /* Adjacent sibling */
.sibling ~ .any { }          /* General sibling */
```

### 3.12 Shapes
**What it is**: Creating non-rectangular layouts.
```css
.element {
  shape-outside: circle(50%);
  shape-outside: polygon(0 0, 100% 0, 100% 100%);
  shape-margin: 1rem;
  clip-path: circle(50%);
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
}
```

### 3.13 Syntax
**What it is**: Understanding CSS syntax and rules.
```css
/* Selector { Property: Value; } */
.element {
  color: red;                 /* Declaration */
  margin: 10px 20px;          /* Multiple values */
  font-family: Arial, sans-serif; /* Fallbacks */
}

/* At-rules */
@media (max-width: 768px) { }
@keyframes animation { }
@import url('style.css');
```

### 3.14 Text
**What it is**: Text styling properties.
```css
.element {
  color: #333;
  font-size: 16px;
  font-weight: 700;
  text-align: center;         /* left, right, center, justify */
  text-indent: 2em;
  white-space: nowrap;        /* normal, nowrap, pre, pre-wrap */
  word-break: break-word;
  word-spacing: 0.5em;
  text-transform: uppercase;  /* uppercase, lowercase, capitalize */
}
```

### 3.15 Text Decoration
**What it is**: Decorative text styling.
```css
.element {
  text-decoration: underline;
  text-decoration-color: red;
  text-decoration-style: wavy;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}
```

---

## SECTION 4: TRANSFORMS & TRANSITIONS

### 4.1 Transforms
**What it is**: 2D and 3D transformations.
```css
.element {
  transform: translateX(50px);        /* Move */
  transform: rotate(45deg);           /* Rotate */
  transform: scale(1.5);              /* Resize */
  transform: skew(10deg, 20deg);      /* Skew */
  transform: perspective(1000px) rotateX(45deg); /* 3D */
  transform-origin: center;           /* Transform center point */
}
```

### 4.2 Nockien (Webkit Transforms)
**What it is**: Vendor-specific transform properties.
```css
.element {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);           /* Standard */
}
```

### 4.3 Media Queries (in Transforms)
**What it is**: Responsive transforms based on device.
```css
@media (max-width: 768px) {
  .element { transform: scale(0.8); }
}
```

### 4.4 Blends
**What it is**: Blend modes for overlapping elements.
```css
.element {
  mix-blend-mode: multiply;
  mix-blend-mode: screen;
  mix-blend-mode: overlay;
  mix-blend-mode: darken;
  mix-blend-mode: lighten;
  mix-blend-mode: color-dodge;
}
```

### 4.5 Transitions
**What it is**: Smooth animations between states.
```css
.element {
  transition: all 0.3s ease;
  transition-property: background, color;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.1s;
}

.element:hover {
  background: blue;
  color: white;
}
```

### 4.6 Values & Units
**What it is**: Different measurement units in CSS.
```css
.element {
  width: 100%;                /* Percentage */
  padding: 1rem;              /* Relative to font-size */
  margin: 20px;               /* Absolute pixels */
  font-size: 1.5em;           /* Relative to parent font-size */
  line-height: 1.5;           /* Unitless multiplier */
  width: 100vw;               /* Viewport width */
  height: 50vh;               /* Viewport height */
  transform: translateX(calc(100% + 20px)); /* Calculated */
}
```

### 4.7 Writing Modes
**What it is**: Text direction and orientation.
```css
.element {
  writing-mode: horizontal-tb; /* Default */
  writing-mode: vertical-rl;   /* Vertical right-to-left */
  writing-mode: vertical-lr;   /* Vertical left-to-right */
  text-orientation: mixed;     /* Rotate some characters */
}
```

---

## SECTION 5: TOOLS

### 5.1 Border-Image Generator
**What it is**: Tool to create decorative borders from images.
```css
.element {
  border: 15px solid;
  border-image: url('border.png') 30 repeat;
  border-image-slice: 30;
  border-image-repeat: repeat;
}
```

### 5.2 Border-Radius Generator
**What it is**: Creating rounded corners.
```css
.element {
  border-radius: 8px;                 /* All corners */
  border-radius: 50%;                 /* Circle */
  border-top-left-radius: 20px;
  border-top-right-radius: 10px 20px; /* Horizontal Vertical */
}
```

### 5.3 Box-Shadow Generator
**What it is**: Creating shadow effects.
```css
.element {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.5);
}
```

### 5.4 Color Format Converter
**What it is**: Converting between color formats.
```
Hex: #667eea
RGB: rgb(102, 126, 234)
HSL: hsl(262, 80%, 66%)
OKLCH: oklch(0.6 0.2 262)
```

### 5.5 Color Mixer
**What it is**: Blending colors together.
```css
.element {
  background: color-mix(in srgb, blue 50%, red);
  color: color-mix(in lch, #667eea 70%, white);
}
```

### 5.6 Shape Generator
**What it is**: Creating complex shapes with clip-path.
```css
.element {
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  clip-path: circle(50%);
  clip-path: ellipse(50% 30%);
}
```

---

## SECTION 6: REFERENCE

### Properties Quick Reference
- **Display**: block, inline, inline-block, flex, grid, none
- **Position**: static, relative, absolute, fixed, sticky
- **Flexbox**: flex-direction, justify-content, align-items, gap
- **Grid**: grid-template-columns, grid-template-rows, gap
- **Colors**: color, background, border-color, box-shadow
- **Typography**: font-family, font-size, font-weight, line-height
- **Spacing**: margin, padding, gap
- **Sizing**: width, height, min-width, max-width
- **Transforms**: translate, rotate, scale, skew
- **Transitions**: transition-property, transition-duration, transition-timing-function

### Selectors Quick Reference
- `.class` - Class selector
- `#id` - ID selector
- `element` - Type selector
- `[attr]` - Attribute selector
- `:hover` - Pseudo-class
- `::before` - Pseudo-element
- `>` - Child combinator
- `+` - Adjacent sibling
- `~` - General sibling

### Pseudo-Classes
- `:hover` - Mouse over
- `:focus` - Keyboard focus
- `:active` - Being clicked
- `:visited` - Visited link
- `:nth-child(n)` - nth child
- `:first-child` - First child
- `:last-child` - Last child
- `:not(selector)` - Negation
- `:is(selector)` - Matches any

### Pseudo-Elements
- `::before` - Insert before content
- `::after` - Insert after content
- `::first-line` - First line of text
- `::first-letter` - First letter
- `::selection` - Selected text
- `::placeholder` - Placeholder text
- `::marker` - List marker

### Combinators
- ` ` (space) - Descendant
- `>` - Child
- `+` - Adjacent sibling
- `~` - General sibling
- `||` - Column combinator

### At-Rules
- `@media` - Media queries
- `@keyframes` - Animation frames
- `@import` - Import stylesheet
- `@font-face` - Custom fonts
- `@supports` - Feature detection
- `@namespace` - XML namespace
- `@page` - Print styles
- `@layer` - Cascade layers
