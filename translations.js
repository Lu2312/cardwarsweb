/**
 * Translations for CardWars Kingdom Website
 * Supports Spanish (espanol) and English (ingles)
 */

const translations = {
    espanol: {
        // Navigation
        nav: {
            home: "Inicio",
            heroes: "Héroes",
            calendar: "Calendario",
            cards: "Cartas",
            language: "Idioma:"
        },
        // Home page
        home: {
            welcome: "¡Bienvenido al nuevo servidor de CardWars!",
            announcement: "Estamos emocionados de anunciar el lanzamiento de un nuevo servidor de CardWars! Este servidor ofrece una experiencia de juego completamente nueva.",
            newPlayer: "Si eres un jugador nuevo de CardWars, este es el momento perfecto para comenzar. El nuevo servidor es un gran lugar para aprender las reglas del juego y competir contra otros jugadores nuevos.",
            downloads: "Descargas Disponibles",
            downloadExe: "📥 Archivo .exe (Windows)",
            downloadApk: "📱 Android APK",
            downloadBoth: "💾 Android APK y archivo .exe"
        },
        // Heroes page
        heroes: {
            title: "Héroes de CardWars",
            info: "Aquí encontrarás información sobre los héroes del juego.",
            comingSoon: "Contenido próximamente...",
            // Hero cards
            finn: {
                name: "Finn",
                desc: "El héroe humano de Ooo. Finn es valiente y siempre está listo para la aventura. Sus cartas se especializan en ataques directos y habilidades de combate cuerpo a cuerpo.",
                type: "Tipo:",
                typeValue: "Guerrero",
                specialty: "Especialidad:",
                specialtyValue: "Ataque físico",
                ability: "Habilidad única:",
                abilityValue: "Golpe heroico"
            },
            jake: {
                name: "Jake",
                desc: "El mejor amigo de Finn y un perro mágico que puede cambiar de forma. Jake aporta versatilidad al juego con sus habilidades de transformación y defensa.",
                typeValue: "Mago",
                specialtyValue: "Transformación",
                abilityValue: "Elasticidad mágica"
            },
            bmo: {
                name: "BMO",
                desc: "La consola de videojuegos viviente. BMO ofrece soporte técnico y habilidades especiales que pueden cambiar el curso de la batalla.",
                typeValue: "Soporte",
                specialtyValue: "Habilidades técnicas",
                abilityValue: "Análisis de sistema"
            },
            iceKing: {
                name: "Ice King",
                desc: "El rey del hielo con poderes de congelación. Sus cartas se enfocan en control del campo y ralentización de enemigos.",
                typeValue: "Mago de hielo",
                specialtyValue: "Control y congelación",
                abilityValue: "Ventisca helada"
            },
            pb: {
                name: "Princess Bubblegum",
                desc: "La princesa científica del Reino Dulce. Combina ciencia y magia para crear poderosas estrategias.",
                typeValue: "Científica",
                specialtyValue: "Estrategia y ciencia",
                abilityValue: "Experimento dulce"
            },
            marceline: {
                name: "Marceline",
                desc: "La reina vampiro rockera. Sus ataques son agresivos y puede drenar vida de los oponentes.",
                typeValue: "Vampiro",
                specialtyValue: "Drenaje de vida",
                abilityValue: "Mordida vampírica"
            }
        },
        // Calendar page
        calendar: {
            title: "Calendario de Eventos",
            info: "Consulta los próximos eventos y actualizaciones del servidor.",
            comingSoon: "Contenido próximamente..."
        },
        // Cards page
        cards: {
            title: "Cartas del Juego",
            selectLanguage: "Selecciona el idioma de la tabla:",
            spanish: "Español",
            english: "Inglés"
        }
    },
    ingles: {
        // Navigation
        nav: {
            home: "Home",
            heroes: "Heroes",
            calendar: "Calendar",
            cards: "Cards",
            language: "Language:"
        },
        // Home page
        home: {
            welcome: "Welcome to the new CardWars server!",
            announcement: "We are excited to announce the launch of a new CardWars server! This server offers a completely new gaming experience.",
            newPlayer: "If you are a new CardWars player, this is the perfect time to start. The new server is a great place to learn the rules of the game and compete against other new players.",
            downloads: "Available Downloads",
            downloadExe: "📥 .exe File (Windows)",
            downloadApk: "📱 Android APK",
            downloadBoth: "💾 Android APK & .exe file"
        },
        // Heroes page
        heroes: {
            title: "CardWars Heroes",
            info: "Here you will find information about the game's heroes.",
            comingSoon: "Content coming soon...",
            // Hero cards
            finn: {
                name: "Finn",
                desc: "The human hero of Ooo. Finn is brave and always ready for adventure. His cards specialize in direct attacks and melee combat abilities.",
                type: "Type:",
                typeValue: "Warrior",
                specialty: "Specialty:",
                specialtyValue: "Physical attack",
                ability: "Unique ability:",
                abilityValue: "Heroic strike"
            },
            jake: {
                name: "Jake",
                desc: "Finn's best friend and a magical dog that can shapeshift. Jake brings versatility to the game with his transformation and defense abilities.",
                typeValue: "Mage",
                specialtyValue: "Transformation",
                abilityValue: "Magic elasticity"
            },
            bmo: {
                name: "BMO",
                desc: "The living video game console. BMO offers technical support and special abilities that can change the course of battle.",
                typeValue: "Support",
                specialtyValue: "Technical skills",
                abilityValue: "System analysis"
            },
            iceKing: {
                name: "Ice King",
                desc: "The ice king with freezing powers. His cards focus on field control and enemy slowing.",
                typeValue: "Ice mage",
                specialtyValue: "Control and freezing",
                abilityValue: "Frozen blizzard"
            },
            pb: {
                name: "Princess Bubblegum",
                desc: "The scientist princess of the Candy Kingdom. Combines science and magic to create powerful strategies.",
                typeValue: "Scientist",
                specialtyValue: "Strategy and science",
                abilityValue: "Sweet experiment"
            },
            marceline: {
                name: "Marceline",
                desc: "The rocker vampire queen. Her attacks are aggressive and can drain life from opponents.",
                typeValue: "Vampire",
                specialtyValue: "Life drain",
                abilityValue: "Vampire bite"
            }
        },
        // Calendar page
        calendar: {
            title: "Event Calendar",
            info: "Check upcoming events and server updates.",
            comingSoon: "Content coming soon..."
        },
        // Cards page
        cards: {
            title: "Game Cards",
            selectLanguage: "Select table language:",
            spanish: "Spanish",
            english: "English"
        }
    }
};

/**
 * Get translation for a specific key
 * @param {string} lang - Language code ('espanol' or 'ingles')
 * @param {string} key - Translation key (e.g., 'nav.home')
 * @returns {string} Translated text
 */
function getTranslation(lang, key) {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            console.warn(`Translation not found: ${lang}.${key}`);
            return key;
        }
    }
    
    return value;
}

/**
 * Apply translations to all elements with data-i18n attribute
 * @param {string} lang - Language code ('espanol' or 'ingles')
 */
function applyTranslations(lang) {
    console.log('Applying translations for language:', lang);
    
    // Update document language
    document.documentElement.lang = lang === 'espanol' ? 'es' : 'en';
    
    // Update title and meta tags
    if (lang === 'ingles') {
        document.title = "CardWars Kingdom - Private Server";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', 'CardWars Kingdom private server - Download the game and join the community');
        }
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', 'CardWars Kingdom - Private Server');
        }
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.setAttribute('content', 'Join the new CardWars Kingdom server');
        }
    } else {
        document.title = "CardWars Kingdom - Servidor Privado";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Servidor privado de CardWars Kingdom - Descarga el juego y únete a la comunidad');
        }
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', 'CardWars Kingdom - Servidor Privado');
        }
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.setAttribute('content', 'Únete al nuevo servidor de CardWars Kingdom');
        }
    }
    
    // Translate all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    console.log(`Translating ${elements.length} elements to ${lang}`);
    
    if (elements.length === 0) {
        console.error('No elements with data-i18n found!');
        return;
    }
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(lang, key);
        if (translation && translation !== key) {
            element.textContent = translation;
        } else {
            console.warn(`Could not translate key: ${key}`);
        }
    });
    
    console.log('Translation complete');
}

// Expose function globally
window.applyTranslations = applyTranslations;

// Auto-apply translations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        const savedLang = sessionStorage.getItem('language') || 'espanol';
        console.log('Auto-applying translations on DOM ready:', savedLang);
        applyTranslations(savedLang);
    });
} else {
    // DOM is already loaded
    const savedLang = sessionStorage.getItem('language') || 'espanol';
    console.log('Auto-applying translations immediately:', savedLang);
    applyTranslations(savedLang);
}

