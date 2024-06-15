document.addEventListener('DOMContentLoaded', (event) => {
    // Set the current year
    const yearElement = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    // Set the last modified date
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = 'Last Modified: ' + document.lastModified;
});
