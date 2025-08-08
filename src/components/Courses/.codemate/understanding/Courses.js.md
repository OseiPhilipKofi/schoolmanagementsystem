# Courses Component - High Level Documentation

## Overview
The `Courses` component is a presentational React functional component. Its purpose is to display a simple section containing information about available courses.

## Structure
- **Container**: The component renders a `div` with the class name `"courses"`.
- **Content**:
  - An `<h1>` heading titled "Courses".
  - A `<p>` paragraph welcoming users and giving a brief description of the page.
- **Fragment Usage**: The content is wrapped in a React Fragment (`<>...</>`) to avoid adding unnecessary nodes to the DOM.

## Usage
- This component can be used in any React application to act as the Courses landing or informational page.
- It does not accept any props and contains static content.

## Export
- The component is exported as the default export for easy import in other files.
