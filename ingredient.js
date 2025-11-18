/**
 * Table Language Toggle System
 * Manages language selection for card tables using radio buttons
 */

let currentIframe = null;

/**
 * Toggle table display based on selected language
 * Uses radio buttons for mutually exclusive selection
 */
function toggleTable() {
    const spanishRadio = document.getElementById("espanol");
    const englishRadio = document.getElementById("ingles");
    const tableContainer = document.getElementById("table-container");
    const globalLanguageSelect = document.getElementById('global-language-select');

    // Validate elements exist
    if (!spanishRadio || !englishRadio || !tableContainer) {
        console.error('Required elements not found');
        return;
    }

    // Remove existing iframe if present
    if (currentIframe) {
        currentIframe.remove();
        currentIframe = null;
    }

    // Determine which language is selected and load appropriate table
    let selectedLanguage = sessionStorage.getItem('language');
    if (!selectedLanguage) {
        // Fallback to radio state if session not yet set
        selectedLanguage = spanishRadio && spanishRadio.checked ? 'espanol' : 'ingles';
        sessionStorage.setItem('language', selectedLanguage);
    }

    // Ensure radios reflect selected language
    if (spanishRadio) spanishRadio.checked = (selectedLanguage === 'espanol');
    if (englishRadio) englishRadio.checked = (selectedLanguage === 'ingles');
    if (globalLanguageSelect) globalLanguageSelect.value = selectedLanguage;

    let tableSrc = selectedLanguage === 'espanol' ? 'tabla_espanol.html' : 'tabla.html';

    // Create and display iframe if a language is selected
    if (tableSrc) {
        currentIframe = createTableIframe(tableSrc);
        tableContainer.appendChild(currentIframe);
        tableContainer.style.display = 'block';
    } else {
        tableContainer.style.display = 'none';
    }
}

/**
 * Create an iframe element for displaying table
 * @param {string} src - The source URL for the iframe
 * @returns {HTMLIFrameElement} The created iframe element
 */
function createTableIframe(src) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', src);
    iframe.setAttribute('title', 'Tabla de cartas');
    iframe.setAttribute('loading', 'lazy');
    iframe.classList.add('table-iframe');
    
    // Set responsive dimensions
    iframe.style.width = '100%';
    iframe.style.maxWidth = '800px';
    iframe.style.height = '900px';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '8px';
    
    return iframe;
}

// Initialize: Hide table container on page load
document.addEventListener('DOMContentLoaded', function() {
    const tableContainer = document.getElementById("table-container");
    if (tableContainer) {
        tableContainer.style.display = 'none';
    }
    // Initialize table if language already stored and cards tab visible
    const storedLang = sessionStorage.getItem('language');
    if (storedLang && typeof toggleTable === 'function') {
        // Only show if user is on cards tab (contact since swapped)
        const cardsTabContent = document.querySelector('.tabContent.contact');
        if (cardsTabContent && cardsTabContent.style.display === 'block') {
            toggleTable();
        }
    }
});