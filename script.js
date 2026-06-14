const colorPicker = document.getElementById('colorPicker');
const fontPicker = document.getElementById('fontPicker');
const root = document.documentElement;

// Change color using CSS Variables
colorPicker.addEventListener('input', (e) => {
    root.style.setProperty('--main-color', e.target.value);
});

// Change font
fontPicker.addEventListener('change', (e) => {
    root.style.setProperty('--main-font', e.target.value);
});