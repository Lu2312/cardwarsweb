// Table display based on global language selector
document.addEventListener('DOMContentLoaded', function() {
    const globalLanguageSelect = document.getElementById('global-language-select');
    const tableContainer = document.getElementById('table-container');
    
    if (!globalLanguageSelect || !tableContainer) {
        console.error('Required elements not found');
        return;
    }

    // Function to update table based on language
    function updateTable() {
        const selectedLang = globalLanguageSelect.value;
        const tableSrc = selectedLang === 'espanol' ? 'tabla_espanol.html' : 'tabla.html';
        
        // Clear existing iframe
        tableContainer.innerHTML = '';
        
        // Create new iframe with selected language
        const iframe = document.createElement('iframe');
        iframe.src = tableSrc;
        iframe.title = 'Tabla de cartas';
        iframe.loading = 'lazy';
        iframe.style.cssText = 'width: 100%; max-width: 800px; height: 900px; border: none; border-radius: 8px; display: block; margin: 0 auto; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);';
        
        tableContainer.appendChild(iframe);
        tableContainer.style.display = 'block';
    }

    // Update table on language change
    globalLanguageSelect.addEventListener('change', updateTable);
    
    // Initialize table on page load
    updateTable();
});