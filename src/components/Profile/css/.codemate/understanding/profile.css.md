**High-Level Documentation**

This CSS code styles a user profile section, including the main container, form, headings, form groups, buttons/links, and profile image display.

**Key Features:**

1. **Responsive Layout:**  
   The profile wrapper and form stretch to 100% width, centering the form with a maximum width of 450px for optimal readability.

2. **Profile Form Styling:**  
   - Headings (`.head`) are styled with bold weight (900) and use the main text color variable.
   - Form groups and controls are set to fill their containers’ width.

3. **Buttons & Text (Profile Change):**  
   - Profile action elements, like "Change Profile", use a distinct white color for better contrast, inheriting from a CSS variable.

4. **Profile Image Display:**  
   - The profile image container ensures contained images do not distort by enforcing object-fit.
   - Profile pictures are circular with a 100px by 100px size, centered and cropped appropriately with `object-fit: cover` and `border-radius: 50%`.

5. **Color & Theming:**  
   All colors are handled through CSS custom properties (variables), making the theme easy to adjust globally.

**Dependencies:**  
- Relies on an external root CSS file for theme colors and possibly other variables.

**Usage Context:**  
Ideal for user profile or account settings pages with a clean, modern, and responsive layout.