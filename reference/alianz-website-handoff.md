# ALIANZ CANINE WORLDWIDE — Website Build Handoff

**Preparado por Ágora Business Works | Abril 2026 | CONFIDENCIAL**

---

## 1. Resumen del Proyecto

Este documento contiene todo lo necesario para construir el sitio web de Alianz Canine Worldwide en GoHighLevel. La persona que reciba este documento no necesita contexto previo — todo está aquí.

| Campo | Detalle |
|-------|---------|
| **Cliente** | Alianz Canine Worldwide (ACW) |
| **Qué es** | Organización cinológica internacional con presencia en 50+ países. Gestionan pedigrees, eventos, formación profesional y certificaciones caninas con respaldo legal de la Unión Europea. |
| **Objetivo del sitio** | Reemplazar dos sitios web existentes (alianzfederation.org y alianzcanineworldwide.org) con una sola presencia profesional e institucional en GHL. |
| **Dominio** | alianzcanineworldwide.org (ya propiedad del cliente) |
| **Idioma** | Español. Multi-idioma se agrega después con Weglot. |
| **Plataforma** | GoHighLevel (SaaS Pro). Sub-cuenta: "Alianz Canine Worldwide" |
| **Prioridad 1** | Homepage, Nosotros, Contacto — YA ESTÁN DISEÑADOS como archivos HTML de referencia. |
| **Prioridad 2** | Eventos, Blog |
| **Prioridad 3** | Razas, Jueces, Reglamentos, Cumbre Iberoamericana |

---

## 2. Archivos Entregados

Los siguientes archivos se entregan junto con este documento. Son las referencias visuales y de contenido para construir cada página en GHL.

### Archivos HTML (Referencias Visuales)

Estos archivos se abren en un navegador para ver el diseño exacto. NO se suben a GHL directamente — se usan como referencia visual mientras se construye en el builder de GHL, o se importan vía AI Studio (ver sección 4).

| Archivo | Contenido |
|---------|-----------|
| `alianz-homepage-v3.html` | Página de inicio completa. Hero, barra de estadísticas, carrusel de logos institucionales, servicios, sección "Quiénes Somos", eventos, noticias, CTA, footer. |
| `alianz-nosotros.html` | Página "Nosotros". Intro, pilares, respaldo legal EU (4 directivas), convenios universitarios (5 universidades), deportes caninos, perros de servicio, CTA. |
| `alianz-contacto.html` | Página de contacto. Formulario completo con dropdown de tipo de consulta + sidebar con info de contacto, horario y redes sociales. |

### Documentos de Apoyo

| Archivo | Contenido |
|---------|-----------|
| `alianz-website-blueprint.docx` | Blueprint completo con la estructura, copy y especificaciones de TODAS las páginas (incluyendo las que aún no tienen HTML). Consultar para Eventos, Razas, Jueces, Reglamentos, Blog, Cumbre. |
| `Documento de identidad ACW (PDF)` | Documento oficial del cliente con toda la información institucional, legal, deportiva, y de servicios. FUENTE DE VERDAD para cualquier dato. |

### Assets (Logos Descargados)

Los logos institucionales para el carrusel de "Respaldo Institucional" en el homepage ya fueron descargados. Deben estar en la carpeta de assets compartida:

| Logo | Fuente |
|------|--------|
| Unión Europea | Bandera/emblema UE. Fuente: europa.eu |
| Ministerio de Agricultura | MAPA España. Fuente: Wikimedia Commons |
| UNAM | Escudo dorado. Fuente: unam.mx |
| CEU UCH | Universidad CEU Cardenal Herrera. Fuente: uchceu.es (post-rebrand 2025) |
| U. de Murcia | UMU. Fuente: um.es |
| U. Central del Ecuador | UCE. Fuente: Wikimedia Commons |
| UMaza Argentina | Universidad Juan Agustín Maza. Fuente: Brandfetch |

> **Nota:** Los logos se muestran en monocromo (escala de grises) con un filtro CSS. Se vuelven a color al hacer hover. No necesitan edición previa — el CSS hace el trabajo.

---

## 3. Guía de Marca

### Colores

| Color | HEX | Uso |
|-------|-----|-----|
| Navy (Principal) | `#1B2A4A` | Headers, navegación, fondos oscuros, textos de autoridad |
| Navy Deep | `#0D1929` | Footer, hero backgrounds, secciones CTA |
| Gold (Acento) | `#C5A55A` | Botones principales, íconos, líneas decorativas, badges |
| Teal (Secundario) | `#2A7B88` | Enlaces, subtítulos, elementos interactivos |
| Cream (Fondo alt) | `#FAF8F4` | Fondos de secciones alternadas (no blanco puro) |
| Stone (Bordes) | `#E8E4DD` | Bordes de tarjetas, separadores sutiles |
| Texto principal | `#1A1A1A` | Cuerpo de texto |
| Texto secundario | `#5A5A5A` | Descripciones, metadata |
| Texto terciario | `#8A8A8A` | Placeholders, notas |

### Tipografía

| Elemento | Especificación |
|----------|----------------|
| Font Display | **DM Serif Display** (Google Fonts) — Para títulos H1, H2, números grandes, nombres de tarjetas |
| Font Body | **Outfit** (Google Fonts) — Para todo el texto de cuerpo, navegación, botones, labels |
| Títulos H1 | clamp(2.4rem, 5vw, 4.2rem), weight 400, DM Serif Display |
| Títulos H2 | clamp(1.8rem, 3.5vw, 2.5rem), weight 400, DM Serif Display |
| Eyebrows | 0.72rem, weight 600, letter-spacing 2.5px, uppercase, Outfit, color Gold |
| Cuerpo | 0.85-0.95rem, weight 400, Outfit, line-height 1.75-1.85 |
| Botones | 0.88rem, weight 600, Outfit |

> Si DM Serif Display no está disponible en GHL, usar Georgia. Si Outfit no está disponible, usar Montserrat.

### Botones

| Tipo | Especificación |
|------|----------------|
| Primario (Gold) | Fondo `#C5A55A`, texto blanco, border-radius 8px, padding 15px 34px. Hover: fondo `#A68B3E` + sombra dorada. |
| Secundario (Outline) | Borde blanco semitransparente, fondo transparente, texto blanco. Para uso sobre fondos oscuros. |
| Outline Dark | Borde `#E8E4DD`, fondo transparente, texto Navy. Para uso sobre fondos claros. |

### Dirección Visual General

Institucional, premium, espacioso. NO es un sitio de e-commerce ni un blog personal. Es la cara digital de una organización internacional seria. Mucho espacio en blanco (cream, no blanco puro). Las secciones alternan entre fondo claro y fondo Navy para crear ritmo visual.

Las imágenes deben ser de alta calidad: perros en shows profesionales, rings de exposición, competencias, eventos. NUNCA stock genérico de mascotas felices.

---

## 4. Proceso de Construcción

### Método Recomendado: AI Studio + Builder Manual

GoHighLevel tiene una herramienta llamada AI Studio (dentro de Labs) que puede clonar sitios web desde una URL o screenshot. El flujo recomendado es:

### Paso 1: Configurar el Sub-Account

- [ ] Crear sub-account "Alianz Canine Worldwide" en GHL
- [ ] Ir a Settings → Labs → activar AI Studio
- [ ] Conectar el dominio alianzcanineworldwide.org (cambiar DNS)
- [ ] Configurar zona horaria (España o México según donde opere HQ)

### Paso 2: Generar las Páginas con AI Studio

Abrir cada archivo HTML en el navegador → tomar screenshot O hostear temporalmente en un servidor gratuito (Netlify drop, Vercel, etc.) → usar la función "Import from URL / Screenshot" de AI Studio para clonar la estructura en GHL.

> **Nota:** AI Studio genera una buena base pero NO será pixel-perfect. Después de la importación, ajustar colores, fuentes y espaciados manualmente en el builder.

### Paso 3: Refinar en el Builder Manual

- [ ] Verificar que los colores coincidan con la guía de marca (sección 3)
- [ ] Verificar fuentes: DM Serif Display para títulos, Outfit para cuerpo
- [ ] Verificar que todos los enlaces de navegación funcionen entre páginas
- [ ] Reemplazar imágenes placeholder con imágenes reales (ver sección 6)
- [ ] Verificar versión móvil de cada página
- [ ] Conectar formulario de contacto a pipeline de GHL (ver sección 5)

### Paso 4: Páginas Restantes (sin HTML de referencia)

Para las páginas que aún no tienen HTML diseñado (Eventos, Razas, Jueces, Reglamentos, Blog, Cumbre), consultar el documento `alianz-website-blueprint.docx` que tiene la estructura completa con copy y especificaciones de cada sección. Usar el mismo sistema visual (colores, fuentes, espaciados, estilos de tarjetas) para mantener consistencia.

---

## 5. Formularios y CRM

### Formulario de Contacto

La página de Contacto tiene un formulario con los siguientes campos:

| Campo | Tipo | Requerido |
|-------|------|-----------|
| Nombre Completo | Texto | Sí |
| Correo Electrónico | Email | Sí |
| País | Texto | No |
| Tipo de Consulta | Dropdown (ver opciones abajo) | No |
| Mensaje | Textarea | Sí |

**Opciones del dropdown "Tipo de Consulta":**
- Afiliación de Club
- Información General
- Eventos
- Pedigrees y Registros
- Formación Profesional
- Certificaciones de Salud
- Otro

### Pipeline: "Leads Web"

| Etapa | Descripción |
|-------|-------------|
| Nuevo | Entrada automática de todos los formularios del sitio |
| Contactado | Se movió después del primer contacto |
| En Conversación | Diálogo activo con el lead |
| Cerrado / Afiliado | Se completó la afiliación o resolución |
| Descartado | No calificado o sin respuesta |

### Automatizaciones

| Automatización | Configuración |
|----------------|---------------|
| Email de confirmación | Al recibir un formulario, enviar email automático al visitante: "Gracias por contactar a Alianz Canine Worldwide. Hemos recibido tu mensaje y te responderemos en un plazo de 24 a 48 horas." |
| Notificación interna | Enviar notificación por email al equipo de Alianz cuando llega un nuevo lead. |
| Tag automático | Asignar tag al contacto según el valor del dropdown "Tipo de Consulta" (ej: tag "afiliacion", tag "eventos", etc.) |

---

## 6. Imágenes

### Imágenes que Necesitan Generarse (Nano Banana Pro / IA)

Las siguientes imágenes no existen aún y deben generarse con una herramienta de IA como Nano Banana Pro (nanobanana.org):

| Imagen | Prompt Sugerido |
|--------|-----------------|
| Hero Homepage | "Aerial wide-angle photo of a prestigious international dog show in a grand arena, professional handlers in formal attire presenting champion dogs in the ring, elegant audience, dramatic arena lighting with warm tones, cinematic photography, 16:9" |
| Hero Nosotros | "Professional group photo of international dog show judges in formal attire at an elegant venue, diverse group, warm lighting, institutional photography, ACW banner visible, 4:3" |
| Hero Contacto | Puede reutilizar una imagen de evento existente con overlay oscuro. |

### Imágenes que Existen (Migrar de Sitios Actuales)

Las siguientes imágenes están en los sitios actuales y deben descargarse ANTES de cerrar los sitios viejos:

| Contenido | Fuente |
|-----------|--------|
| Eventos | Descargar todas las imágenes de eventos desde alianzcanineworldwide.org/eventos |
| Noticias | Descargar las imágenes de los posts recientes desde alianzfederation.org |
| Razas/Grupos | Las 8 imágenes de grupos de razas desde alianzcanineworldwide.org/razas-grupos |
| Jueces | Las 3 imágenes de continentes desde alianzcanineworldwide.org/jueces-internacionales |
| Banner ACW | El banner principal de Alianz (se usa en la sección "Quiénes Somos" del homepage) |

> **⚠️ IMPORTANTE:** Descargar TODO antes de cambiar el DNS del dominio a GHL. Una vez que el dominio apunte a GHL, el sitio viejo de Squarespace dejará de funcionar.

---

## 7. Navegación Global

### Header (Todas las Páginas)

| Elemento | Especificación |
|----------|----------------|
| Fondo | Navy semi-transparente con blur (backdrop-filter). Se vuelve sólido al hacer scroll. |
| Logo | Texto: "Alianz Canine Worldwide" en DM Serif Display. "Alianz" blanco, "Canine Worldwide" en gold itálica. Si hay logo oficial en imagen, reemplazar. |
| Menú | Inicio · Nosotros · Eventos · Razas · Jueces · Reglamentos · Blog · Contacto |
| Derecha | Botón "Iniciar Sesión" con borde Gold. Por ahora enlaza a página "Próximamente". Cuando ADOS lance, enlaza al client portal de GHL. |
| Móvil | Menú hamburguesa. Logo visible. Botón de sesión visible. |
| Link temporal | Cumbre Iberoamericana mientras esté vigente. |

### Footer (Todas las Páginas)

| Elemento | Contenido |
|----------|-----------|
| Fondo | Navy Deep (`#0D1929`) |
| Columna 1 | Logo + descripción: "Organización Cinológica Internacional. Fundación de utilidad pública con más de 30 años de trayectoria." + iconos Facebook e Instagram. |
| Columna 2 | Navegación: Nosotros, Eventos, Razas, Jueces, Blog |
| Columna 3 | Recursos: Reglamentos, Formación, Contacto, Área de Miembros |
| Columna 4 | Contacto: info@alianzcanineworldwide.org, +52 662 518 3938, Ctra. Nacional 301 Km. 384, Molina de Segura, Murcia, España |
| Barra inferior | © 2026 Alianz Canine Worldwide. Privacidad · Aviso Legal · Cookies |
| ⚠️ Instagram | VERIFICAR URL real. El sitio actual tiene el enlace roto (apunta a squarespace.com). |

---

## 8. SEO Básico

Cada página debe tener su propio title tag y meta description únicos.

| Página | Title / Meta Description |
|--------|--------------------------|
| Inicio | **Title:** Alianz Canine Worldwide \| Organización Cinológica Internacional | **Meta:** Alianz Canine Worldwide une a criadores, jueces y entusiastas en más de 50 países. Pedigrees internacionales, eventos, formación y comunidad canina global. |
| Nosotros | **Title:** Nosotros \| Alianz Canine Worldwide | **Meta:** Conoce la Fundación Alianz Canine Worldwide: más de 30 años de trayectoria, respaldo legal europeo y presencia en más de 50 países. |
| Contacto | **Title:** Contacto \| Alianz Canine Worldwide | **Meta:** Contáctanos para afiliación de clubs, información sobre eventos, pedigrees, formación profesional o cualquier consulta. |
| Eventos | **Title:** Eventos y Competencias \| Alianz Canine Worldwide | **Meta:** Calendario de exposiciones, deportes caninos, grooming y formación profesional de Alianz Canine Worldwide. |
| Razas | **Title:** Razas y Grupos Reconocidos \| Alianz Canine Worldwide | **Meta:** Clasificación oficial de razas caninas según los estándares de Alianz Canine Worldwide. |
| URLs | Usar URLs limpias: `/nosotros`, `/eventos`, `/razas`, `/jueces`, `/reglamentos`, `/blog`, `/contacto` |

---

## 9. Lo Que NO Hacer

Estas son restricciones explícitas que no deben violarse:

| Restricción | Razón |
|-------------|-------|
| **NO mencionar ADOS** | El sistema digital ADOS no se anuncia todavía. El botón dice "Iniciar Sesión", NO "ADOS". La página de destino dice "Próximamente". |
| **NO usar 90 países** | El número correcto es **50+**. Aparece en el hero y en la barra de estadísticas. |
| **NO crear muros de texto** | El sitio actual (Squarespace) tiene páginas con 2000+ palabras de texto corrido. Esto está mal. Cada sección debe ser breve y visual. |
| **NO usar imágenes genéricas** | Nada de stock de "perro feliz con familia en el parque". Solo imágenes profesionales de eventos, competencias, shows. |
| **NO cambiar la estructura** | La estructura de páginas y secciones ya fue aprobada. Si hay dudas, consultar con Mario antes de modificar. |
| **NO conectar Stripe aún** | No configurar pagos ni facturación. Eso se hace después cuando se active SaaS mode. |
| **NO publicar sin revisión** | Mario debe revisar y aprobar cada página antes de publicar. |

---

## 10. Checklist de Entrega

Usar esta lista para verificar que todo esté completo antes de entregar.

### Configuración Inicial

- [ ] Sub-account creado en GHL como "Alianz Canine Worldwide"
- [ ] AI Studio habilitado en Labs
- [ ] Dominio alianzcanineworldwide.org conectado y funcionando
- [ ] Zona horaria configurada correctamente
- [ ] SSL activo

### Páginas Construidas

- [ ] Homepage — todas las secciones del HTML de referencia
- [ ] Nosotros — todas las secciones del HTML de referencia
- [ ] Contacto — formulario funcional + sidebar de info
- [ ] Eventos — según blueprint
- [ ] Razas — según blueprint + 8 grupos migrados
- [ ] Jueces — según blueprint + directorio por continente
- [ ] Reglamentos — según blueprint + PDFs cargados
- [ ] Blog — según blueprint + 3 posts migrados
- [ ] Cumbre Iberoamericana — según blueprint
- [ ] Página "Próximamente" para Iniciar Sesión

### CRM y Automatizaciones

- [ ] Pipeline "Leads Web" creado con 5 etapas
- [ ] Formulario de contacto conectado al pipeline
- [ ] Email de confirmación automático configurado
- [ ] Notificación interna al equipo configurada
- [ ] Tags automáticos por tipo de consulta

### Visual y Contenido

- [ ] Colores coinciden con guía de marca
- [ ] Fuentes correctas (DM Serif Display + Outfit)
- [ ] Logos institucionales reales en carrusel de homepage
- [ ] Imágenes reales (no placeholders) en todas las páginas
- [ ] Versión móvil verificada en todas las páginas
- [ ] Enlace de Instagram verificado y funcionando
- [ ] Todos los enlaces de navegación funcionan
- [ ] SEO básico configurado (titles + metas)

### Pre-Lanzamiento

- [ ] Imágenes descargadas de los sitios viejos ANTES de cambiar DNS
- [ ] Redirecciones 301 preparadas (alianzfederation.org → alianzcanineworldwide.org)
- [ ] Revisión final por Mario
- [ ] Publicación aprobada

---

*Fin del Documento de Traspaso — Ágora Business Works — Abril 2026*
