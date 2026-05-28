# Aluminios Castañeda — Landing Page

> Sitio web corporativo para empresa de cancelería de aluminio y cristal templado en Tepic, Nayarit.  
> Proyecto de portafolio: diseño, maquetación y optimización SEO desde cero.

---

## Demo

🔗 [Ver sitio en vivo](https://tu-usuario.github.io/aluminios-castaneda) *(actualizar con el link real)*

![Preview del sitio](assets/img/og-preview.png)

---

## Sobre el proyecto

Este proyecto fue desarrollado como parte de mi portafolio freelance. El cliente contaba únicamente con una página de Facebook y necesitaba una presencia web profesional que:

- Generara confianza ante clientes residenciales y constructoras
- Posicionara a la empresa en Google para búsquedas locales en Nayarit
- Fuera encontrada por IAs (ChatGPT, Perplexity, Google AI Overview) para búsquedas del tipo *"empresa de aluminio en Tepic"*
- Permitiera cotizaciones directas vía WhatsApp sin backend

---

## Stack técnico

| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura y accesibilidad |
| Tailwind CSS (CDN) | Sistema de diseño, layout y utilidades |
| CSS personalizado | Animaciones, slider, reveal, masonry |
| JavaScript vanilla | Slider hero, FAQ accordion, contadores, scroll |
| Schema.org (JSON-LD) | SEO estructurado para buscadores e IA |
| Google Maps embed | Mapa de ubicación con filtro dark mode |
| WhatsApp API | CTA flotante con mensaje prellenado |

---

## Estructura del proyecto

```
aluminios-castaneda/
│
├── index.html              # HTML semántico limpio (sin CSS/JS inline)
├── README.md               # Este archivo
│
└── assets/
    ├── css/
    │   └── styles.css      # Animaciones y estilos custom
    ├── js/
    │   └── main.js         # Lógica: slider, reveal, counters, FAQ, navbar
    └── img/
        └── og-preview.png  # Preview para Open Graph / redes sociales
```

---

## Características implementadas

- **Hero slider** — 3 slides con fade automático cada 6 s y controles manuales
- **Scroll reveal** — Secciones animadas con `IntersectionObserver` (sin librería)
- **Contador animado** — Estadísticas que cuentan al entrar en viewport
- **Navbar adaptativa** — Glassmorphism + se compacta al hacer scroll
- **Galería masonry** — Grid tipo Pinterest responsivo en 1/2/3 columnas
- **FAQ accordion** — Solo un ítem abierto a la vez
- **Botón WhatsApp flotante** — Con animación pulse, siempre visible
- **Formulario de cotización** — Con validación HTML5 nativa
- **Google Maps dark mode** — Filtro CSS para coherencia visual
- **Schema.org LocalBusiness** — Datos estructurados para SEO e IA
- **Responsive completo** — Mobile-first, menú hamburguesa en móvil

---

## Decisiones de diseño

**¿Por qué Tailwind CDN y no un bundle?**  
Para este proyecto, el cliente necesita un solo directorio que pueda subir a cualquier hosting compartido sin proceso de build. La penalización de tamaño del CDN es aceptable para una landing page donde el CSS se cachea en la primera visita.

**¿Por qué JavaScript vanilla?**  
Los 6 módulos de interactividad (slider, reveal, counters, FAQ, navbar, scroll-top) son lo suficientemente simples como para no justificar React ni Vue. Menos dependencias = mayor velocidad de carga.

**¿Por qué separar CSS y JS del HTML?**  
Mantenibilidad: un diseñador puede editar `styles.css` sin tocar la lógica. Un desarrollador puede depurar `main.js` sin desplazarse por el HTML. El HTML queda legible como documento.

---

## SEO y AI-readiness

```json
{
  "@type": "LocalBusiness",
  "name": "Aluminios Castañeda",
  "addressLocality": "Tepic",
  "addressRegion": "Nayarit"
}
```

- Meta title y description optimizados para keywords locales
- Atributos `alt` descriptivos en todas las imágenes
- Headings jerarquizados (H1 → H2 → H3)
- FAQ con preguntas que replican búsquedas reales de usuarios
- Contenido en prosa directa para citabilidad por LLMs

---

## Cómo correr el proyecto localmente

```bash
# Sin instalación — solo abrir el archivo:
open index.html

# O con un servidor local (recomendado para evitar CORS en fuentes):
npx serve .
# o
python3 -m http.server 3000
```

---

## Pendientes / roadmap

- [ ] Sustituir imágenes de placeholder por fotos reales del cliente
- [ ] Conectar formulario con EmailJS o endpoint de backend
- [ ] Agregar Google Analytics / Tag Manager
- [ ] Actualizar teléfono, dirección y horarios reales
- [ ] Configurar dominio y deploy en Netlify o Hostinger

---

## Autor

**Jonathan Zenteno Ocampo** — Ingeniero de Software  
[zenteno.ocampo@gmail.com](mailto:zenteno.ocampo@gmail.com) · [LinkedIn](#) · [Portafolio](#)

---

*Proyecto de portafolio freelance — 2026*
