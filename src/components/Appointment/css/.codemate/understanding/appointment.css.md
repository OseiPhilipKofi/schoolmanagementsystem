# High-Level Documentation: Appointment Form Stylesheet

This CSS file provides the visual styling for an appointment form component within a broader application, focusing on form layout, user interaction, and file display within the form. The main selectors and their responsibilities are as follows:

---

## 1. Global & Wrapper Styles

- **Root Import**: Imports a root CSS with global variables (colors, common styles).
- **`.appoint-wrapper`**: Applies box-sizing for consistent sizing.
- **`.appointment-form`**:
  - Responsive width (max `400px`), padding, and positioning.
  - Designed for form alignment vertically.

---

## 2. Typography and Labels

- **Titles (`.title`)**:
  - Bold and capitalized, using main text color.
- **Labels**:
  - Uses the main text color for readability.

---

## 3. Inputs and Textareas

- **Input Fields**: Span full width of form.
- **Textareas**:
  - Vertically resizable, minimum height `150px`.
  - Use theme background and text color for consistency.

---

## 4. File Attachment Display

- **`.files`**:
  - Styled container for displaying attached files (rounded borders, padding, subtle border).
- **File labels and icons (`.files span`, `.files span svg`)**:
  - Small, user-unselectable tags/icons for each file.
- **File preview list (`.showfiles`)**:
  - Horizontally scrollable container, with default scrollbars hidden.
- **Individual file objects (`.fileobj`)**:
  - Vertically stacked thumbnail and controls; consistent min size.
- **Image Preview (`.imgobj`, `.fileobj img`)**:
  - Thumbnails maintain aspect ratio with cover fit, rounded corners.
- **Delete Button (`.delbtn`)**:
  - Small, styled button for removing files.

---

## 5. Select Dropdown Styling

- **Select fields and options**:
  - All select elements and options have theme-colored background/text for consistency.

---

## 6. General Design Principles

- **Theme consistency**: Common use of CSS variables for color.
- **Responsiveness and usability**: Controls sized for clarity, touch friendliness.
- **Visual hierarchy**: Titles bold and prominent, file previews clear, delete actions visible but unobtrusive.
- **No scrollbars for file previews**: Keeps interface clean.

---

## Intended Usage

This stylesheet is intended for appointment booking or request forms that:
  - Support file attachment with preview and removal,
  - Are embedded within a modular web application,
  - Adapt visual appearance based on theme (via CSS vars).

It is not standalone; relies on root variables and external structure.