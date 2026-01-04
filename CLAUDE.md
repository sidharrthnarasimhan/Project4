# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimalist, Apple-inspired static marketing website for "Startup OS" - a startup operating system product. The site features a clean, spacious design with large typography, smooth animations, and focus on essential information. Showcases decisions, tasks, announcements, people ops, and widget integrations (Slack, Gmail, Outlook).

## File Structure

- `index.html` - Minimalist landing page with large hero, simple visual card, widget integrations, and streamlined sections
- `features.html` - Clean features page with minimal design, focused on 4 core features
- `pricing.html` - Simplified pricing with 3 tiers and minimal FAQ
- `styles.css` - Apple-inspired styling with large typography, generous spacing, smooth animations, and minimalist aesthetic
- `animations.js` - Scroll-based fade-in animations using Intersection Observer API

## Development

**Preview the site:**
Open `index.html` directly in a browser, or use a local server:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

**No build process required** - this is pure HTML/CSS/vanilla JavaScript with no dependencies or tooling.

## Design Philosophy (Apple-Inspired)

**Key Principles:**
- **Minimalism:** Large white space, focus on essential content only
- **Typography-First:** Extra large headings (clamp 3rem to 5.5rem), generous line-height, tight letter-spacing
- **Spacious Sections:** 120px padding on desktop (`section-spacious`)
- **Simple Interactions:** Subtle hover effects, smooth cubic-bezier transitions
- **Clean Buttons:** Pill-shaped (border-radius: 980px), white primary buttons on dark background

**Typography Scale:**
- `.display-large` - Main hero headings (3-5.5rem, -0.015em letter-spacing)
- `.display-medium` - Section headings (2.2-3.5rem, -0.012em letter-spacing)
- `.hero-subtitle` - Hero subtext (1.2-1.75rem)
- `.subtitle-large` - Section subtext (1.1-1.5rem)

**Colors:**
- Background: `#0b0f19` (dark blue), `#12182a` (dark section variant)
- Text: `#ffffff` (white), `#aab6d6` (muted), `#d4dcf5` (light muted)
- Primary Button: `#ffffff` (white on dark)
- Accent Colors (minimal use):
  - Decisions: `#2ecc71` (green)
  - Tasks: `#3498db` (blue)
  - Announcements: `#f39c12` (orange)
  - People: `#9b59b6` (purple)

**Container Widths:**
- `.container-wide` - 1400px max (for hero sections)
- `.container` - 1120px max (standard)
- `.container-narrow` - 800px max (for text-focused sections)

**Components:**
- Minimal visual cards (`.visual-card`) with glassmorphic effect
- Integration icons (80px large app icons) with hover lift
- Simple feature lists with underline separators
- Clean pricing cards with hover elevation
- FAQ with `+`/`−` indicators

**Animations:**
- Scroll-based fade-in with translateY(20px)
- Intersection Observer for viewport detection
- Staggered delays (0.1s increments)
- Smooth cubic-bezier transitions: `cubic-bezier(0.4, 0, 0.2, 1)`
- Subtle hover transforms: scale(1.02), translateY(-8px)

**Responsive:**
- 980px breakpoint for mobile
- Padding reduces from 120px to 80px on mobile
- All grids collapse to single column

## Page Structure

**index.html** - Hero with large heading and simple visual card → Widget integrations (3 large icons) → Feature overview (4 items) → Pricing CTA

**features.html** - Large hero → 4 minimal feature sections (icon, heading, description, 3 bullet points) → Integration section → CTA

**pricing.html** - Large hero → 3 pricing cards (minimal, clean design) → 3 FAQ items → CTA

## Navigation

Minimal header with logo and 3 links (Home, Features, Pricing). Active state shows gradient underline. No "About" page - keeping it simple.
