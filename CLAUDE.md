# CLAUDE.md — ACW Global Website

Instrucciones para agentes que trabajan en el workspace `E:\Alianz Website`.

---

## Contexto del proyecto

Sitio web institucional de **Alianz Canine Worldwide (ACW)**, construido como HTML/CSS estático para importación en **GoHighLevel AI Studio**. El código debe ser limpio, semántico y directamente clonable en GHL sin modificaciones.

---

## Idioma

Todo el texto de cara al usuario va en **español**. Los comentarios de código pueden ir en español o inglés.

---

## Paleta de colores

| Variable | HEX | Uso |
|----------|-----|-----|
| Navy principal | `#1B2A4A` | Headers, nav, fondos de autoridad |
| Navy profundo | `#0D1929` | Footer, hero, CTAs oscuros |
| Gold | `#C5A55A` | CTAs, líneas decorativas, badges |
| Teal | `#2A7B88` | Subtítulos, enlaces, elementos interactivos |
| Cream | `#FAF8F4` | Fondos de sección alternos |
| Stone | `#E8E4DD` | Bordes de tarjeta, separadores |

## Tipografía

- **Display:** DM Serif Display (Google Fonts) — H1, H2, títulos de tarjeta
- **Cuerpo:** Outfit (Google Fonts) — nav, body, botones, labels
- **Eyebrows:** 0.72rem, weight 600, letter-spacing 2.5px, uppercase, color Gold (`#C5A55A`)

---

## Estándares técnicos

- HTML5 semántico con atributos `aria-` donde corresponda
- Mobile-first: diseñar para 375px y escalar a 768px, 1024px, 1280px+
- Sin frameworks pesados — vanilla HTML/CSS/JS únicamente
- Comentarios que expliquen la estructura y decisiones clave
- Alt text descriptivo en todas las imágenes
- Nunca usar texto de relleno que parezca real (lorem ipsum está bien)
- Si el contenido real no está disponible, usar `[AWAITING COPY]`
- Código limpio para clonación directa a GoHighLevel

---

## Estructura de archivos

| Carpeta | Contenido |
|---------|-----------|
| `docs/` | Páginas HTML de producción (código de cada página del sitio) |
| `assets/` | Imágenes, logos y SVGs de producción |
| `reference/` | Documentos de apoyo — solo lectura, no modificar |
| `reference/html-references/` | HTML de referencia visual (homepage, nosotros, contacto) — no son producción, son guía |
| `output/` | Artefactos de trabajo de agentes — excluido de git, se puede borrar |
| `.firecrawl/` | Caché de Firecrawl — excluido de git, se puede borrar |

---

## Fuente de verdad

Antes de escribir copy o datos institucionales:
1. Consultar `reference/documento-de-identidad-acw.md` — fuente primaria de datos ACW
2. Consultar `reference/alianz-website-blueprint.md` — estructura y copy de todas las páginas
3. Consultar `reference/alianz-website-handoff.md` — resumen operativo de la entrega

---

## Flujo de trabajo — Preview y despliegue

El sitio se publica automáticamente via **GitHub Pages** desde la carpeta `docs/` en la rama `main`.

**URL de preview:** https://agorabusinessworks.github.io/alianz-canine-worldwide-website/

### Reglas de contribución

1. **No hacer commits directos a `main`.** Todos los cambios van a una rama de feature (ej. `feature/nueva-seccion`, `fix/contacto-form`).
2. **Abrir un Pull Request** contra `main` para cada cambio.
3. **Publicar el link del PR** en el comentario de la tarea de Paperclip correspondiente.
4. **Esperar aprobación** antes de hacer merge.
5. **Verificar la URL de preview** después del merge para confirmar que los cambios se ven correctamente.
6. **Solo importar a GoHighLevel** después de verificar el preview en GitHub Pages.

### CI — Linting y validación

Cada PR ejecuta automáticamente:
- **HTML Lint** (HTMLHint) — valida sintaxis y buenas prácticas en `docs/**/*.html`
- **Validación de estructura** — verifica que `docs/index.html` existe y busca enlaces internos rotos
- **Validación de imágenes** — detecta referencias a imágenes faltantes

La configuración de lint está en `.htmlhintrc`. El workflow de CI está en `.github/workflows/ci.yml`.

---

## QA

Todo HTML de producción en `docs/` debe ser revisado por Diego (QA Lead) antes de marcarse como listo.
