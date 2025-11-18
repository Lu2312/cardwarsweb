# CardWars Kingdom - Servidor Privado

![CardWars Kingdom](https://img.shields.io/badge/CardWars-Kingdom-yellow)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 Descripción

Sitio web oficial del servidor privado de **CardWars Kingdom**. Este proyecto proporciona una plataforma web para que los jugadores descarguen el juego y accedan a información sobre héroes, eventos y cartas.

## ✨ Características

- 🎮 **Sistema de Pestañas Interactivo**: Navegación fluida entre diferentes secciones
- 📱 **Diseño Responsivo**: Optimizado para desktop, tablet y móviles
- 🌐 **Multi-idioma**: Soporte para tablas en español e inglés
- ⚡ **Rendimiento Optimizado**: Carga rápida y eficiente
- ♿ **Accesible**: Cumple con estándares de accesibilidad web
- 💾 **Múltiples Opciones de Descarga**: Google Drive, Mega y Mediafire

## 🚀 Instalación

### Opción 1: Clonar el repositorio

```bash
git clone https://github.com/Lu2312/cardwarsweb.git
cd cardwarsweb
```

### Opción 2: Descargar ZIP

1. Haz clic en el botón verde "Code"
2. Selecciona "Download ZIP"
3. Extrae el archivo en tu carpeta deseada

## 🎯 Uso

### Ejecutar localmente

Simplemente abre el archivo `index.html` en tu navegador web favorito:

- **Doble clic** en `index.html`
- O arrastra el archivo al navegador
- O usa un servidor local (recomendado para desarrollo)

### Servidor Local (Recomendado)

#### Con Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Con Node.js (http-server):
```bash
npx http-server -p 8000
```

Luego accede a `http://localhost:8000` en tu navegador.

## 📁 Estructura del Proyecto

```
cardwarsweb/
│
├── index.html              # Página principal
├── style.css               # Estilos CSS
├── script.js               # Lógica de navegación por pestañas
├── ingredient.js           # Selector de idioma para tablas
├── tabla.html              # Tabla de cartas en inglés
├── tabla_espanol.html      # Tabla de cartas en español
├── README.md               # Este archivo
│
├── picture/                # Imágenes del proyecto
├── tabla_archivos/         # Recursos de la tabla en inglés
└── tabla_espanol_archivos/ # Recursos de la tabla en español
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno y responsivo
- **JavaScript (Vanilla)**: Funcionalidad sin dependencias
- **SessionStorage**: Persistencia de preferencias del usuario

## 🎨 Características Técnicas

### Responsive Design
- Adaptación automática a diferentes tamaños de pantalla
- Breakpoints optimizados: 1400px, 768px, 480px
- Layout flexible con Flexbox

### Accesibilidad
- Etiquetas ARIA para navegación
- Navegación por teclado completa
- Estados de foco visibles
- Contraste de colores optimizado

### Rendimiento
- Lazy loading para iframes
- CSS optimizado sin dependencias externas
- JavaScript modular y eficiente
- Manejo inteligente de memoria

## 📥 Descargas del Juego

El sitio ofrece múltiples opciones de descarga:

### Windows (PC)
- Archivo `.exe` disponible en Google Drive, Mega y Mediafire

### Android
- Archivo `.apk` disponible en Google Drive, Mega y Mediafire

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu función (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 🐛 Reportar Bugs

Si encuentras un bug, por favor abre un [issue](https://github.com/Lu2312/cardwarsweb/issues) con:
- Descripción del problema
- Pasos para reproducir
- Comportamiento esperado vs actual
- Capturas de pantalla (si aplica)
- Navegador y versión

## 📝 Roadmap

- [ ] Sección de Héroes completamente funcional
- [ ] Calendario de eventos interactivo
- [ ] Sistema de búsqueda de cartas
- [ ] Modo oscuro/claro
- [ ] Traducción completa a inglés
- [ ] Integración con base de datos para cartas
- [ ] Sistema de comentarios/comunidad

## 👥 Autores

- **Lu2312** - *Desarrollo inicial* - [GitHub](https://github.com/Lu2312)

## 📜 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- A la comunidad de CardWars Kingdom
- A todos los jugadores que apoyan el servidor privado
- A los contribuidores del proyecto

## 📞 Contacto

- **Repositorio**: [https://github.com/Lu2312/cardwarsweb](https://github.com/Lu2312/cardwarsweb)
- **Issues**: [https://github.com/Lu2312/cardwarsweb/issues](https://github.com/Lu2312/cardwarsweb/issues)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

🎮 ¡Disfruta jugando CardWars Kingdom!
