# Assets Folder

This folder is for storing custom icons and images used throughout the Startup OS website.

## Folder Structure

```
assets/
├── icons/     - Custom icon files (SVG, PNG)
└── images/    - Images, screenshots, photos
```

## How to Add Custom Icons

1. **Place your icon files** in the `assets/icons/` folder
   - Recommended formats: SVG (preferred), PNG
   - Suggested naming: `icon-name.svg` or `icon-name.png`

2. **Reference in HTML** using relative paths:
   ```html
   <img src="assets/icons/your-icon.svg" alt="Description">
   ```

3. **For integration icons** (replacing current SVG):
   ```html
   <!-- Replace the inline SVG with your custom image -->
   <div class="appicon slack large">
     <img src="assets/icons/slack-icon.svg" alt="Slack">
   </div>
   ```

## How to Add Images

1. **Place your images** in the `assets/images/` folder
   - Recommended formats: JPG (photos), PNG (graphics with transparency), SVG (logos/icons)
   - Optimize images before uploading (compress JPGs, minify SVGs)

2. **Add to HTML**:
   ```html
   <img src="assets/images/your-image.jpg" alt="Description" style="width: 100%; border-radius: 16px;">
   ```

## Example Use Cases

### Feature Icons
Replace emoji icons with custom SVG icons:
```html
<!-- Current -->
<div style="font-size: 32px; margin-bottom: 16px;">⚡</div>

<!-- With custom icon -->
<img src="assets/icons/lightning.svg" alt="Fast" style="width: 32px; height: 32px; margin-bottom: 16px;">
```

### Hero Section Visual
Add a screenshot or product image:
```html
<div class="hero-visual fade-in">
  <img src="assets/images/dashboard-screenshot.png" alt="Dashboard" style="width: 100%; border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,.4);">
</div>
```

### Logo in Header
Replace text logo with image:
```html
<!-- Current -->
<div class="logo">Startup OS</div>

<!-- With custom logo -->
<img src="assets/icons/logo.svg" alt="Startup OS" class="logo" style="height: 24px;">
```

## Best Practices

- **Use SVG when possible** - scalable, small file size, crisp on all screens
- **Optimize images** - use tools like TinyPNG, ImageOptim, or SVGO
- **Include alt text** - important for accessibility and SEO
- **Consistent naming** - use lowercase, hyphens instead of spaces
- **Responsive images** - use `width: 100%; max-width: XXXpx;` for flexibility

## Image Dimensions Recommendations

- **Logo**: 120-200px wide (SVG preferred)
- **Feature icons**: 32-48px square
- **Integration icons**: 80px square (as currently designed)
- **Screenshots**: 1200-1600px wide, compress to <500KB
- **Hero images**: 1200-1800px wide, compress to <800KB

## Tools for Creating/Editing

- **SVG Icons**: [Figma](https://figma.com), [Sketch](https://sketch.com), [Inkscape](https://inkscape.org) (free)
- **Image Compression**: [TinyPNG](https://tinypng.com), [Squoosh](https://squoosh.app)
- **Free Icons**: [Heroicons](https://heroicons.com), [Feather Icons](https://feathericons.com), [Phosphor Icons](https://phosphoricons.com)
