# Design System Structure: Customers.new

This document defines the layout rules and semantic token mapping. It does NOT define absolute values. For all exact colors, fonts, and spacing math, you MUST reference the `design-tokens.tokens.json` file.

## 1. Global Layout Architecture
- **Sidebar (Navigation):** Fixed at `240px` width.
- **Top Bar (Utility):** Fixed at `64px` height. Elements (Search, Profile) sit inside the main content canvas, right-aligned. Do NOT build a full-width global header bar.
- **Main Content Canvas:** Fluid width, centered, max-width `1440px`.

## 2. Token Mapping & Typography Rules
- **Brand Font:** You MUST use `Playfair Display` for the main Page Header (H1). Use `Inter` for all other UI text.
- **Fluid Math:** You must calculate `clamp()` formulas for all text using the JSON baseline values, scaling up to a 1920px ultra-wide maximum.
- **Colors:** Do not invent colors or use default Tailwind palettes.
  - Primary Accent: Map to `variable-collection-main-color`
  - Success State: Map to `variable-collection-accent-green`
  - Background Surface: Map to `variable-collection-background-color`
  - Main Text: Map to `variable-collection-text-color`

## 3. Component Anatomy
- **Cards:** Apply the exact `card-shadow` and border-radius tokens defined in the JSON.
- **Borders:** Use soft, 1px borders mapped to `variable-collection-siepanel-card-bg-outline`.

## 4. Mobile Responsiveness (< 768px)
- Hide the desktop sidebar.
- Implement a Bottom Navigation Bar and a fixed Top App Bar (hamburger menu).
- Convert multi-card metric grids into horizontal swipe carousels (`snap-x`).
- Force "Action Required" / Urgent components to the top of the DOM order.