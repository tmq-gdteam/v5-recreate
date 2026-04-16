# Design System Specification: Customers.new

This document serves as the unyielding, deterministic source of truth for the 'Customers.new' application. It normalizes all visual discrepancies observed across application screenshots into a mathematically consistent system of tokens and patterns.

---

## 1. Global Layout Architecture

The application follows a persistent **Sidebar + Content Canvas** layout.

- **Global Container:** Fluid width, 100% viewport height.
- **Sidebar (Navigation):** 
    - Width: `240px` (Fixed)
    - Background: `#f4fffd` (Off-white surface)
    - Border-Right: `1px solid #E5E7EB`
    - Padding: `24px 16px`
- **Top Bar (Utility):**
    - Height: `64px`
    - Padding: `0 32px`
    - Background: `#f4fffd` (Off-white surface)
    - Elements: Global search, help, notifications, user profile.
- **Main Content Canvas:**
    - Background: `#f9fafb`
    - Padding: `32px`
    - Max-Width: `1440px` (Centered within the canvas)

---

## 2. Typography Hierarchy (8px Rhythm)

**Primary Heading Font:** *Playfair Display* (Serif)
**Functional UI Font:** *Inter* or equivalent Sans-Serif

| Token | Size | Weight | Leading | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `H1` | `32px` | 600 | `40px` | `-0.02em` | Page Titles |
| `H2` | `24px` | 600 | `32px` | `-0.01em` | Section Headers |
| `H3` | `18px` | 600 | `24px` | `0` | Card Titles |
| `Body-L` | `16px` | 400 | `24px` | `0` | Primary Content |
| `Body-S` | `14px` | 400 | `20px` | `0` | Labels, Table Data |
| `Caption` | `12px` | 500 | `16px` | `0.02em` | Metadata, Overlines |

---

## 3. Global Color Palette

### 3.1. Brand & Accents
- `Primary-Main`: `#f7ac2e` (Solaris Orange)
- `Primary-Surface`: `#FEF3E2` (Soft highlight)
- `Primary-Contrast`: `#FFFFFF`

### 3.2. Neutral Scale
- `N-900`: `#111827` (Heading Text)
- `N-600`: `#4B5563` (Body/Sub-text)
- `N-400`: `#9CA3AF` (Placeholders/Icons)
- `N-200`: `#E5E7EB` (Borders/Dividers)
- `N-100`: `#F3F4F6` (Secondary Backgrounds)
- `N-50`: `#F9FAFB` (Sidebar Background)

### 3.3. Semantic States
- `Success`: `#10B981` (Green)
- `Warning`: `#F59E0B` (Amber)
- `Error`: `#EF4444` (Red)
- `Info`: `#3B82F6` (Blue)

---

## 4. Universal Spacing & Border System

**Baseline Grid:** `4px`
**Scaling:** `4 | 8 | 12 | 16 | 24 | 32 | 48 | 64`

- **Border Radius:**
    - `Radius-S`: `4px` (Small inputs)
    - `Radius-M`: `8px` (Standard buttons, cards)
    - `Radius-L`: `16px` (Large modals, containers)
    - `Radius-Full`: `9999px` (Pills, badges)
- **Border Weight:**
    - `Border-Thin`: `1px` (Standard dividers)
    - `Border-Focus`: `2px` (Active states)

---

## 5. Shared Component Patterns

### 5.1. The Action Card
- **Background:** `#FFFFFF`
- **Border:** `1px solid #E5E7EB`
- **Border-Radius:** `8px`
- **Padding:** `24px`
- **Shadow:** `0 1px 3px 0 rgba(0, 0, 0, 0.1)`

### 5.2. Data Tables
- **Header Cell:** `N-50` background, `Body-S` Bold, `N-600` color.
- **Row Height:** `56px`
- **Cell Padding:** `12px 16px`
- **Border-Bottom:** `1px solid #F3F4F6`

### 5.3. Primary Button
- **Height:** `40px`
- **Background:** `Primary-Main` (#F08F18)
- **Text:** White, `Body-S` Bold.
- **Radius:** `8px`
- **Hover State:** Darken 10%

---

## 6. Shadow & Elevation System

- `Elevation-None`: `none`
- `Elevation-Low`: `0 1px 2px rgba(0,0,0,0.05)` (Default Cards)
- `Elevation-Mid`: `0 4px 6px -1px rgba(0,0,0,0.1)` (Dropdowns)
- `Elevation-High`: `0 10px 15px -3px rgba(0,0,0,0.1)` (Modals)

---

## 7. Responsive Behavior Assumptions

- **Desktop (1280px+):** Sidebar fixed, content fluid with 32px padding.
- **Tablet (768px - 1279px):** Sidebar collapses to icon-only (80px width), 2-column grid for cards.
- **Mobile (< 768px):** Sidebar becomes a bottom navigation bar or hidden drawer, content padding reduces to 16px, all cards stack to 1-column.