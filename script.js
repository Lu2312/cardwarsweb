/**
 * Tab Navigation System
 * Manages tab switching and saves user's last selected tab
 */

// Initialize default tab if not set
if (sessionStorage.getItem("tabMenu") === null) {
    sessionStorage.setItem('tabMenu', 'dashboard');
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const tabListItems = document.querySelectorAll(".tabMenu li");
    const tabButtons = document.querySelectorAll(".tabMenu li span");
    const tabContents = document.querySelectorAll(".tabContent");
    const globalLanguageSelect = document.getElementById('global-language-select');

    // Validate elements exist
    if (!tabButtons.length || !tabContents.length) {
        console.error('Tab elements not found');
        return;
    }

    /**
     * Switch to a specific tab
     * @param {HTMLElement} clickedTab - The tab button that was clicked
     */
    function switchTab(clickedTab) {
        if (!clickedTab) return;

        const tabName = clickedTab.className;
        
        // Save the selected tab
        sessionStorage.setItem('tabMenu', tabName);

        // Remove active state from all tabs
        tabListItems.forEach(item => {
            item.classList.remove('active');
            const tabSpan = item.querySelector('span');
            if (tabSpan) {
                tabSpan.setAttribute('aria-selected', 'false');
                tabSpan.setAttribute('tabindex', '-1');
            }
        });

        // Hide all tab contents
        tabContents.forEach(content => {
            content.style.display = "none";
        });

        // Show selected tab content and activate tab
        tabContents.forEach(content => {
            const contentClasses = content.className.split(" ");
            if (contentClasses.includes(tabName)) {
                content.style.display = "block";
                const parentLi = clickedTab.parentElement;
                if (parentLi) {
                    parentLi.classList.add('active');
                    clickedTab.setAttribute('aria-selected', 'true');
                    clickedTab.setAttribute('tabindex', '0');
                    clickedTab.focus();
                }
            }
        });
    }

    // Add click event listeners to all tabs
    tabButtons.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            switchTab(tab);
        });

        // Add keyboard navigation support
        tab.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                switchTab(tab);
            }
        });
    });

    // Restore last selected tab or default to dashboard
    const savedTab = sessionStorage.getItem("tabMenu");
    const tabToActivate = savedTab 
        ? document.querySelector(".tabMenu ." + savedTab)
        : document.querySelector(".tabMenu .dashboard");
    
    if (tabToActivate) {
        switchTab(tabToActivate);
    } else {
        // Fallback: activate first tab
        if (tabButtons[0]) {
            switchTab(tabButtons[0]);
        }
    }

    // Initialize global language selector from sessionStorage or default
    const savedLanguage = sessionStorage.getItem('language') || 'espanol';
    console.log('Initial language:', savedLanguage);
    
    if (globalLanguageSelect) {
        globalLanguageSelect.value = savedLanguage;
        console.log('Global language selector found');
        
        // Apply translations on page load
        if (typeof applyTranslations === 'function') {
            console.log('Applying initial translations...');
            applyTranslations(savedLanguage);
        } else {
            console.error('applyTranslations function not found!');
        }
        
        globalLanguageSelect.addEventListener('change', function() {
            const lang = globalLanguageSelect.value;
            console.log('Language changed to:', lang);
            sessionStorage.setItem('language', lang);
            
            // Apply translations to the entire page
            if (typeof applyTranslations === 'function') {
                applyTranslations(lang);
            } else {
                console.error('applyTranslations function not available');
            }
            
            // Sync radios if they exist
            const spanishRadio = document.getElementById('espanol');
            const englishRadio = document.getElementById('ingles');
            if (spanishRadio && englishRadio) {
                spanishRadio.checked = (lang === 'espanol');
                englishRadio.checked = (lang === 'ingles');
            }
            // Trigger table refresh if function exists
            if (typeof toggleTable === 'function') {
                toggleTable();
            }
        });
    } else {
        console.error('Global language selector not found!');
    }

    // On load, ensure radios reflect stored language and table shows if cards tab active
    const spanishRadio = document.getElementById('espanol');
    const englishRadio = document.getElementById('ingles');
    if (spanishRadio && englishRadio) {
        spanishRadio.checked = (savedLanguage === 'espanol');
        englishRadio.checked = (savedLanguage === 'ingles');
        if (typeof toggleTable === 'function') {
            toggleTable();
        }
    }
});