import { data } from './data/css-file-list.js';

function populateDropdown() {
  const dropdownContent = document.getElementById('theme-dropdown-content');
  
  // Clear existing content
  dropdownContent.innerHTML = '';

  data.forEach(theme => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = theme.replace('.css', ''); // Display the theme name without '.css'
    link.onclick = (event) => {
      event.preventDefault();
      changeStylesheet(theme);
    };
    dropdownContent.appendChild(link);
  });
}

function changeStylesheet(fileName) {
  const stylesheet = document.getElementById('stylesheet');
  stylesheet.href = `styles/${fileName}`; 
  populateDropdown();
}

document.addEventListener('DOMContentLoaded', populateDropdown);

document.getElementById('theme-dropdown-button').addEventListener('click', () => {
  const dropdownContent = document.getElementById('theme-dropdown-content');
  dropdownContent.classList.toggle('show');
});
