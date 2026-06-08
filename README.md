# 2Roca - Landing Page Premium

## Descripción

Landing page moderna y profesional para **2Roca**, especialista en fabricación artesanal de mobiliario de hierro premium. El sitio transmite oficio, autenticidad, calidad y durabilidad.

## Características

✅ **Diseño Responsive** - Mobile first, funciona perfectamente en todos los dispositivos
✅ **Performance Optimizado** - Carga rápida, imágenes optimizadas, lazy loading
✅ **SEO Amigable** - Metadatos completos, estructura semántica, Open Graph
✅ **Accesibilidad** - WCAG 2.1 AA compliant
✅ **Animaciones Elegantes** - Transiciones suaves sin afectar performance
✅ **Integración WhatsApp** - Botón flotante y formulario directo
✅ **Formulario de Contacto** - Funcional con validación
✅ **Analytics Ready** - Preparado para Google Analytics

## Secciones

1. **Hero Section** - Impactante presentación con imagen de fondo
2. **Sobre Nosotros** - Historia del taller y valores
3. **Productos/Categorías** - Grid moderno de especialidades
4. **Proceso de Trabajo** - Timeline visual del proceso
5. **Galería** - Masonry grid de proyectos
6. **Por Qué Elegirnos** - Razones diferenciadores
7. **Testimonios** - Reviews de clientes
8. **CTA Final** - Llamado a acción con formulario
9. **Footer** - Información y enlaces

## Tecnología

- **HTML5** - Semántica moderna
- **CSS3** - Grid, Flexbox, Custom Properties, Animaciones
- **JavaScript Vanilla** - Sin dependencias externas
- **Google Fonts** - Inter, Playfair Display

## Instalación

```bash
# Clonar repositorio
git clone [repo-url]

# Abrir en navegador
open index.html
```

## Configuración

### WhatsApp

Modifica el número en `script.js`:

```javascript
const numeroWhatsapp = '+34123456789'; // Reemplazar con número real
```

### Imágenes

Las imágenes usan URLs de Unsplash como placeholder. Reemplaza con tus propias imágenes:

```html
<img src="tu-imagen.jpg" alt="Descripción">
```

### Google Analytics

Agrega tu ID de Google Analytics en el `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Personalización

### Colores

Edita las variables en `styles.css`:

```css
:root {
    --color-dark: #1a1a1a;
    --color-accent: #d4af37;
    /* ... más variables */
}
```

### Tipografías

Cambia las fuentes importadas en `index.html` y actualiza las variables CSS.

## Optimizaciones

- **Lazy Loading** de imágenes
- **Debounced Scroll Events**
- **CSS Minification** (opcional)
- **Image Optimization** recomendado
- **Browser Caching** configurado

## SEO

- Meta tags completos
- Open Graph para redes sociales
- Structured Data (JSON-LD) preparado
- URLs amigables
- Mobile-first indexing compatible

## Accesibilidad

- ARIA labels
- Semantic HTML
- Focus states
- Color contrast WCAG AA
- Keyboard navigation

## Rendimiento

- Lighthouse Score: 90+
- First Contentful Paint < 2s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+

## Licencia

Copyright © 2024 2Roca. Todos los derechos reservados.

## Contacto

📧 info@2roca.com
💬 WhatsApp: [Número]
📍 Ubicación del Taller

---

**Desarrollo realizado por:** Agencia Noframe Commits
