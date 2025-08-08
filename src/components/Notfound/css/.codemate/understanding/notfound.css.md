**High-Level Documentation: Custom Error Page Stylesheet**

**Overview:**
This CSS file provides styling for a custom error page, focusing on clear layout, responsive design, and visually appealing presentation of error-related information. It imports shared root styles and defines custom classes used in the error page template.

**Key Components:**

- **.error-page-wrap:**  
  Ensures the error page content takes up the full viewport height (minus a 70px offset, likely for a header).

- **.img-wrapper & img:**  
  Styles an image container for centered display and responsiveness, capping its width and ensuring images scale and remain visually contained.

- **.urltext:**  
  Defines a styled text block (possibly for displaying the URL or error code), with padding, background color, rounded corners, and inherited color variables for theme consistency.

- **.head-text:**  
  Applies main text color to headings or key messages.

- **Media Queries (≤600px):**  
  Enhances mobile responsiveness by reducing font sizes for error messages and the URL text.

**Theming & Variables:**
Uses CSS custom properties (variables) such as --text-main and --btnmain for colors, which are presumably defined in the imported root.css for consistent look-and-feel across the application.

**Purpose:**
To create an error page that is visually consistent with the rest of the application, readable across devices, and user-friendly in its presentation of error information.