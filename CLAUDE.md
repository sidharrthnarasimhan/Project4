# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimalist, Apple-inspired static marketing website for "StartUp OS" - a startup operating system product. The site features a clean, modern design with gradient backgrounds, large typography, smooth animations, and interactive elements. Showcases decisions, tasks, announcements, people ops, and widget integrations (Slack, Gmail, Outlook).

## File Structure

- `index.html` - Landing page with hero, metrics, visual dashboard card, widget integrations, features grid, testimonials, and pricing CTA
- `overview.html` - Interactive dashboard overview with hover-activated detail cards showing decisions, tasks, announcements, and people
- `features.html` - Detailed features page with 6 feature sections (decisions, tasks, announcements, people ops, analytics, integrations) and security section
- `pricing.html` - Comprehensive pricing with 3 tiers (Starter, Growth, Enterprise), feature comparison, "All plans include" section, and 8 FAQ items
- `styles.css` - Modern styling with gradient backgrounds, large typography, smooth animations, and hover effects
- `animations.js` - Scroll-based fade-in animations using Intersection Observer API
- `assets/icons/` - Custom icons including StartUp OS logo (SVG with purple/pink gradient)
- `assets/images/` - Folder for custom images and screenshots
- `assets/README.md` - Guide for adding custom icons and images

## Development

**Preview the site:**
Open `index.html` directly in a browser, or use a local server:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

**No build process required** - this is pure HTML/CSS/vanilla JavaScript with no dependencies or tooling.

## Design Philosophy (Modern & Attractive)

**Key Principles:**
- **Gradient Backgrounds:** Multi-layered radial and linear gradients with purple, pink, and blue accents
- **Visual Depth:** Subtle grid patterns, glassmorphic cards, layered shadows
- **Typography-First:** Large headings (clamp 3rem to 5.5rem), generous line-height, tight letter-spacing
- **Interactive Elements:** Hover effects with glows, transforms, and smooth transitions
- **Clean Buttons:** Pill-shaped with gradient backgrounds and shadow effects

**Typography Scale:**
- `.display-large` - Main hero headings (3-5.5rem, -0.015em letter-spacing)
- `.display-medium` - Section headings (2.2-3.5rem, -0.012em letter-spacing)
- `.hero-subtitle` - Hero subtext (1.2-1.75rem)
- `.subtitle-large` - Section subtext (1.1-1.5rem)

**Colors & Gradients:**
- Background: Multi-layered gradients with `#1a1f2e`, `#242938`, `#1e2435` base colors
- Gradient Accents:
  - Purple: `rgba(124, 92, 255, 0.15)` - #7c5cff
  - Pink: `rgba(219, 39, 119, 0.12)` - #db2777
  - Blue: `rgba(90, 169, 255, 0.1)` - #5aa9ff
- Text: `#ffffff` (white), `#aab6d6` (muted), `#d4dcf5` (light muted)
- Primary Button: White gradient (`#ffffff` to `#f5f5f5`)
- Feature Accent Colors:
  - Decisions: `#2ecc71` (green)
  - Tasks: `#3498db` (blue)
  - Announcements: `#f39c12` (orange)
  - People: `#9b59b6` (purple)

**Branding:**
- Product Name: "StartUp OS" (capital U)
- Logo: 44x44px SVG with purple-to-pink gradient background, white lightning icon, 12px border radius
- Logo appears in header at 22px font size with 12px gap from text

**Container Widths:**
- `.container-wide` - 1400px max (for hero sections)
- `.container` - 1120px max (standard)
- `.container-narrow` - 800px max (for text-focused sections)

**Components:**
- Glassmorphic cards (`.visual-card`) with gradient backgrounds and layered shadows
- Integration icons (80px) with hover lift effects
- Feature cards with gradient backgrounds and purple glow on hover
- Pricing cards with gradient backgrounds, featured card has purple/pink gradient
- FAQ with `+`/`−` indicators and smooth accordion
- Interactive dashboard cards on overview.html with hover-reveal details

**Animations:**
- Scroll-based fade-in with translateY(20px)
- Intersection Observer for viewport detection
- Smooth cubic-bezier transitions: `cubic-bezier(0.4, 0, 0.2, 1)`
- Hover effects: scale(1.02), translateY(-2px to -8px), glowing shadows
- Dashboard cards: max-height transition for detail reveal on hover

**Background Effects:**
- Body: Multi-layered radial gradients with purple/pink/blue color orbs
- Hero sections: Radial gradient spotlight with subtle grid pattern overlay
- Dark sections: Purple and blue gradients with grid pattern overlay
- Header: Diagonal gradient with enhanced backdrop blur and shadow

**Responsive:**
- 980px breakpoint for mobile
- Section padding reduces from 80px to 80px on mobile (already optimized)
- All grids collapse to single column
- Logo and navigation adapt for mobile screens

## Page Structure

**index.html** - Hero with metrics and visual dashboard card → Widget integrations with detailed description → 6 feature cards with descriptions → Customer testimonials (3 cards) → Pricing CTA

**overview.html** - Interactive dashboard mock with 4 sections (Decisions, Tasks, Announcements, People) that reveal details on hover → Activity feed → CTA

**features.html** - Hero → 6 detailed feature sections with icons, descriptions, and bullet points (Decision Tracking, Task Management, Announcements, People Ops, Analytics, Integrations) → Security section with 6 features → CTA

**pricing.html** - Hero → 3 pricing tiers with detailed features (Starter free, Growth $12/user/month, Enterprise custom) → "All plans include" section → 8 FAQ items → CTA

## Navigation

Header with logo (SVG icon + text) and 4 links:
- Home (index.html)
- Overview (overview.html)
- Features (features.html)
- Pricing (pricing.html)

Active state shows gradient underline. Header has gradient background with backdrop blur and shadow.

## Assets Management

**Logo:**
- Location: `assets/icons/startup-os-logo.svg`
- Size: 44x44px
- Style: Purple-to-pink gradient background with white lightning/zap icon
- Border radius: 12px for curved edges

**Adding Custom Icons:**
See `assets/README.md` for detailed instructions on:
- Adding custom SVG/PNG icons to `assets/icons/`
- Adding images to `assets/images/`
- Replacing placeholder icons with custom graphics
- Best practices for image optimization

**Recommended Image Dimensions:**
- Logo: 120-200px wide (SVG preferred)
- Feature icons: 32-48px square
- Integration icons: 80px square
- Screenshots: 1200-1600px wide, compress to <500KB
- Hero images: 1200-1800px wide, compress to <800KB

## Key Features

**Interactive Dashboard (overview.html):**
- 4 main sections with live metrics
- Hover to reveal detailed items within each section
- Smooth max-height transitions for detail reveal
- Color-coded sections matching brand accent colors
- Real-time activity feed at bottom

**Gradient System:**
- Body: Multi-layered radial gradients creating depth
- Hero sections: Spotlight effect with grid overlay
- Cards: Diagonal gradients with inset highlights
- Buttons: Subtle gradients with shadow elevation
- Hover states: Enhanced gradients with purple glow effects

**Content-Rich Sections:**
- 6 features on index.html (expanded from 4)
- Customer testimonials with star ratings
- Detailed pricing with 7-9 features per tier
- 8 FAQ items with comprehensive answers
- Security features section on features.html
- "All plans include" section on pricing.html

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

Uses standard CSS and vanilla JavaScript - no transpilation needed.
