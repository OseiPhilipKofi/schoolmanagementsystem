## High-Level Documentation

### Overview
This CSS code defines a comprehensive styling system for a web application or site with both light and dark themes. It focuses on using CSS custom properties (variables) for color schemes, typography, backgrounds, and UI components like buttons and form elements. The code supports responsive font sizing and provides custom styles for consistent branding and user experience.

---

### Key Features

#### 1. **Theme Variables**
- **Light Theme (`:root`):**  
  Contains variables for colors, gradients, backgrounds, text, and box shadows tailored for a light interface.
- **Dark Theme (`[data-theme="dark"]`):**  
  Overrides or defines additional variables for a dark interface, including adapted colors and gradients for accessibility and style continuity.

#### 2. **Global Styles**
- Sets a global font-family (`Poppins, sans-serif`) for all elements.
- Uses CSS variables throughout, supporting easy updates and consistent theming.

#### 3. **Responsive Design**
- **Font Sizing:**  
  Uses media queries to adjust the base font size for different viewports:
  - ≤600px: 13px
  - >600px: 16px

#### 4. **Utility Classes**
- `.btn`: Prevents text selection for user interface buttons.
- `.bk-yellow`, `.bk-green`, `.bk-blue`: Provide utility background classes using theme gradients.

#### 5. **Form Element Styling**
- Applies a consistent background color, text color, and rounded corners to all form inputs (text, password, email, number, date, time, phone, file), textareas, and selects.
- Special handling for focus, active, and disabled states, with appropriate coloring.
- Ensures a minimum input height and rounded corners across browsers.
- Styled submit and reset buttons with transitions and rounded corners.

#### 6. **Animations**
- Defines a simple background animation (background position shifts from left-bottom to right-top).

---

### Usage Guidelines

- **Theme Switching:**  
  Use `[data-theme="dark"]` on a parent element (e.g., `<html>` or `<body>`) to enable the dark mode theme.
- **Responsive Typography:**  
  Font sizes automatically adapt based on viewport width via media queries.
- **Form and UI Consistency:**  
  Inputs and buttons are styled for modern look and accessibility by default, with gradients and rounded corners ensuring appealing visuals.
- **Utility Classes:**  
  Use `.bk-yellow`, `.bk-green`, or `.bk-blue` on elements to quickly apply themed gradient backgrounds.

---

### Extensibility

- Additional themes or design updates can be managed by extending or modifying the variables in `:root` and `[data-theme="dark"]`.
- Easy to introduce more utility classes or extend form/button styling as needed.

---

### Summary

This stylesheet provides a scalable, maintainable foundation for modern UI design within a web application, supporting theming, responsive design, and uniform styling for standard components. Adjustments to branding, color palette, or design tokens can be made by updating the CSS custom properties.