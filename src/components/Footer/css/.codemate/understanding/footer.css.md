---
**Footer CSS Styles: High-Level Documentation**

This CSS code defines the appearance and layout of a web application's footer component, focusing on responsiveness, clarity, and modern UI style. The stylesheet relies on CSS variables defined in a `root.css` file for consistent theming.

### Primary Structure

- **.footer-wrap**: Main container ensuring the footer spans the full width, prevents horizontal scroll, and hides the scrollbar for aesthetic purposes.
- **.footer**: Root container applying background gradients and text color, stretching to 100% width.
- **.footer-lead**: Prominent, centered header section in the footer with padding, gap spacing, limited max-width, rounded corners, and a vertical stack layout.

### Layout Organization

- **.footer-container**: Sets up a horizontally spaced flex layout for footer content, wrapping as needed.
- **.footer-section**: Individual footer columns; flexible sizing adapts to screen size, with inner headings and content.
- **.footer-header / h2**: Heavier font weight, custom color, and styling for headings, actionable via cursor.

### Content & Interactive Elements

- **Social Icons**: 
  - .social-wrap & .social-icons: Flex layout for social media links, with spacing and alignment.
  - .social-icons a & svg: Icon links styled for hover effect and interactivity.

- **Newsletter Signup**:
  - .newsletter & form: Responsive, padded email subscription form.
  - Inputs: Styled for clarity, with visual change on focus and a bold submit button that matches the theme.

- **Feedback Messages**:
  - .errMessage & .sucMessage: Distinct coloring and styling for error/success notifications, shown only when not empty for visibility.

- **Links & Buttons**:
  - .pagebtnmain: Prominent primary action button with hover animation and style transitions.

### Responsive Design

- **Media queries** ensure the footer adapts gracefully:
  - For screens <1400px: Adjust newsletter width.
  - For screens <700px & <550px: Collapse sections to full width, adjust padding, spacing, and stacking to suit mobile devices.

### Miscellaneous & Utility Classes

- **.sharp, .icon, .icon-resize, .guchild, .c-border**: Fine-tune individual icon appearance, font sizes, or text emphasis, e.g., for branding or legal info display.

---

**Summary**:  
This CSS builds a responsive, modern, multi-column footer with clear sectioning, stylized headings, integrated newsletter signup, and social icons. The design employs variables and transitions for consistency, theming, and smooth interactivity, with clear attention to mobile and desktop usability.