readme_content = """# Dynamic Theme Studio

A live "Theme Studio" demo demonstrating how to dynamically manipulate CSS styles and fonts using JavaScript without requiring page reloads.

## Overview
This project showcases the power of **CSS Custom Properties (Variables)** and JavaScript's DOM manipulation. Users can interactively modify the look and feel of the page, with changes cascading instantly across the entire layout.

## Core Concepts
* **CSS Custom Properties (`--variable-name`)**: Reusable placeholders that define the theme. Changing a variable at the `:root` level triggers an automatic update for all elements using that variable.
* **JavaScript DOM Style Manipulation**: Leveraging the `document.documentElement.style.setProperty()` method to modify CSS variables on-the-fly.
* **Event Listeners**: Capturing `input` and `change` events from HTML form elements to trigger immediate theme updates.
* **Dynamic Styling**: Shows how to bridge the gap between user input and CSS rendering using clean, efficient code.

## Key Features
* **Live Color Picker**: Instantly updates the primary color theme of the page.
* **Font Selector**: Dynamically swaps font families (Sans Serif, Serif, Monospace).
* **Instant Feedback**: No page reloads required; changes are applied in real-time.

## Project Structure
- `index.html`: The markup for the article layout and the Theme Studio controls.
- `style.css`: Defines the `:root` variables and the layout styles.
- `script.js`: Handles the logic to update CSS variables based on user input.

## How to Run
1. Clone this repository.
2. Open `index.html` in any modern web browser.
3. Use the sidebar controls to customize the page appearance.

## Future Enhancements
- **Persistence**: Save user preferences using `localStorage` so the theme remains applied after refreshing the page.
- **Predefined Themes**: Use `classList.add/remove` to swap between complex CSS-based "Light" and "Dark" mode theme sets.
"""

with open("README.md", "w") as f:
    f.write(readme_content)