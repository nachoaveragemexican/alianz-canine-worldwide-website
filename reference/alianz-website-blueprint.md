# ALIANZ CANINE WORLDWIDE — Website Blueprint

**Guía completa de estructura, contenido y diseño para construcción en GoHighLevel**

**Preparado por Ágora Business Works | Abril 2026 | CONFIDENCIAL**

---

## Contenido

1. Guía de Marca Visual
2. Estructura del Sitio (Sitemap)
3. Página: Inicio
4. Página: Nosotros
5. Página: Eventos
6. Página: Razas y Grupos
7. Página: Jueces Internacionales
8. Página: Reglamentos
9. Página: Blog / Noticias
10. Página: Contacto
11. Página: Cumbre Iberoamericana
12. Elementos Globales (Header, Footer, Nav)
13. Notas Técnicas para GHL

---

## 1. Guía de Marca Visual

Esta paleta de colores está basada en la identidad visual ya establecida en los mockups de ADOS. Mantenemos consistencia entre la app y el sitio web para que cuando ADOS se lance, la transición sea natural.

### Paleta de Colores

| Color | HEX | Uso |
|-------|-----|-----|
| Navy (Principal) | `#1B2A4A` | Headers, navegación, fondos principales, textos de autoridad |
| Navy Deep | `#0D1929` | Footer, hero backgrounds, secciones CTA |
| Gold (Acento) | `#C5A55A` | CTAs, líneas decorativas, iconos destacados, badges |
| Teal (Secundario) | `#2A7B88` | Subtítulos, enlaces, elementos interactivos, acentos |
| Cream | `#FAF8F4` | Fondos alternos de sección, separadores sutiles |
| Stone | `#E8E4DD` | Bordes de tarjetas, separadores |
| Blanco | `#FFFFFF` | Fondos de contenido, tarjetas, espacios de respiro |
| Texto Principal | `#1A1A1A` | Cuerpo de texto |
| Texto Secundario | `#5A5A5A` | Descripciones, metadata |
| Texto Terciario | `#8A8A8A` | Placeholders, notas, labels |

### Tipografía

| Elemento | Especificación |
|----------|----------------|
| **Font Display** | DM Serif Display (Google Fonts) — Para títulos, números grandes, nombres de tarjetas |
| **Font Body** | Outfit (Google Fonts) — Para cuerpo, navegación, botones, labels |
| **Alternativas** | Georgia (display), Montserrat (body) si las principales no están disponibles |
| Títulos H1 | clamp(2.4rem, 5vw, 4.2rem), weight 400, DM Serif Display |
| Títulos H2 | clamp(1.8rem, 3.5vw, 2.5rem), weight 400, DM Serif Display |
| Eyebrows (labels de sección) | 0.72rem, weight 600, letter-spacing 2.5px, uppercase, color Gold |
| Texto de cuerpo | 0.85-0.95rem, weight 400, line-height 1.75-1.85 |
| Texto secundario | 0.82rem, weight 400, color #5A5A5A |

### Dirección Visual

El sitio debe comunicar: **institucional, global, premium, confiable**. No es un blog personal ni una tienda online — es la cara digital de una organización internacional con presencia en 50+ países.

| Aspecto | Directriz |
|---------|-----------|
| Estilo general | Limpio, espacioso, profesional. Mucho espacio cream (no blanco puro). Sin desorden. Secciones alternan fondo claro/oscuro. |
| Fotografía | Imágenes de alta calidad de perros de raza en shows, competencias y actividades profesionales. Nunca stock genérico de mascotas. |
| Iconografía | Iconos lineales simples en Navy o Gold. Consistentes en estilo (stroke, no fill). |
| Botones CTA | Fondo Gold (`#C5A55A`) con texto blanco. Border-radius 8px. Hover: gold oscuro + sombra. |
| Botones secundarios | Borde blanco/stone, fondo transparente. |

---

## 2. Estructura del Sitio (Sitemap)

El sitio tiene 9 páginas principales más la navegación global. Esta estructura reemplaza ambos sitios actuales (alianzfederation.org y alianzcanineworldwide.org) con una sola presencia unificada.

### Navegación Principal

```
Inicio · Nosotros · Eventos · Razas · Jueces · Reglamentos · Blog · Contacto
```

| Elemento | Detalle |
|----------|---------|
| Esquina derecha | Botón "Iniciar Sesión" (reservado para ADOS) + selector de idioma (futuro) |
| Cumbre Iberoamericana | Enlace temporal en el nav mientras la cumbre esté activa. Después se mueve a Eventos. |

### Jerarquía de Prioridad

| Prioridad | Páginas | Descripción |
|-----------|---------|-------------|
| **Prioridad 1** | Homepage, Nosotros, Contacto | IMAGEN INSTITUCIONAL. Deben estar impecables desde el día uno. Son la primera impresión. |
| **Prioridad 2** | Eventos, Blog, Cumbre Iberoamericana | ATRACCIÓN. Contenido vivo que demuestra actividad y atrae nuevos miembros. |
| **Prioridad 3** | Razas, Jueces, Reglamentos | INFORMACIÓN TÉCNICA. Contenido de referencia que da profundidad y credibilidad. Se migra gradualmente del sitio viejo. |
| **Futuro** | ADOS Gateway | Botón de Iniciar Sesión que conecta al portal de miembros cuando la plataforma esté lista. |

---

## 3. Página: Inicio

> **Objetivo:** Crear una primera impresión de autoridad global. El visitante debe sentir en 5 segundos que está ante una organización internacional seria.

### Sección 1: Hero

| Elemento | Especificación |
|----------|----------------|
| Layout | Imagen de fondo a pantalla completa (full-width hero). Overlay oscuro con gradiente. Texto alineado a la izquierda. |
| Imagen | Foto de alta calidad: evento canino internacional, ring de exposición con público, o grupo de perros de raza con handler profesional. Debe transmitir escala global. Generar con Nano Banana Pro si no hay foto real disponible. |
| Eyebrow | "Fundación reconocida por la Unión Europea" |
| Título (H1) | La Organización Cinológica *Internacional* |
| Subtítulo | Unimos a criadores, jueces y entusiastas en más de 50 países para promover la excelencia canina, el bienestar animal y la crianza responsable — con el respaldo de las directivas europeas. |
| CTA Principal | Botón Gold: "Únete a Alianz" → enlace a página de Contacto |
| CTA Secundario | Botón outline: "Conoce Nuestra Historia" → enlace a Nosotros |
| Detalle | Línea decorativa gradient (gold → teal → gold) en la base del hero. Textura grain sutil sobre la imagen. |

### Sección 2: Barra de Estadísticas

| Elemento | Especificación |
|----------|----------------|
| Layout | Franja horizontal con fondo Navy. 4 estadísticas en fila, centradas, separadas por líneas verticales sutiles. |
| Estadística 1 | **50+** · Países Miembro |
| Estadística 2 | **30+** · Años de Trayectoria |
| Estadística 3 | **8** · Grupos de Razas |
| Estadística 4 | **1000+** · Jueces Certificados |
| Estilo | Números en DM Serif Display, Gold, tamaño grande. Labels en uppercase, blanco con baja opacidad. |

### Sección 3: Carrusel de Respaldo Institucional

| Elemento | Especificación |
|----------|----------------|
| Layout | Fondo cream. Label centrado "Respaldo Institucional" arriba. Carrusel de logos con scroll infinito horizontal. Fade gradient en ambos bordes. |
| Logos | Unión Europea, Ministerio de Agricultura, UNAM, CEU UCH Valencia, Universidad de Murcia, Universidad Central del Ecuador, UMaza Argentina, Directiva 91/174/CEE |
| Estilo logos | Monocromo (grayscale filter). Se vuelven a color al hover. Altura uniforme ~28px. |
| Animación | Scroll infinito CSS, ~35s duración, se pausa al hover. Set duplicado para loop seamless. |

### Sección 4: Lo Que Hacemos (Servicios)

| Elemento | Especificación |
|----------|----------------|
| Layout | Fondo blanco. Header en dos columnas (título izq, descripción der). 4 tarjetas en grid debajo. |
| Eyebrow | "Nuestra Labor" |
| Título | Excelencia Canina en Cada Dimensión |
| Descripción | Más de tres décadas promoviendo la ciencia, la ética y la pasión por el mundo canino. Desde registros genealógicos hasta certificación de perros de servicio. |
| Tarjeta 1 | **Icono:** documento/sello · **Título:** Pedigrees y Registros · **Texto:** Libros de Orígenes Caninos con validez legal internacional, verificación por ADN y trazabilidad garantizada bajo normativa de la Unión Europea. |
| Tarjeta 2 | **Icono:** trofeo/medalla · **Título:** Eventos y Deportes · **Texto:** Exposiciones de conformación, FastCat, FlyBall, IGP, Mondioring, Disc Dog, Canicross y competencias de grooming en los cinco continentes. |
| Tarjeta 3 | **Icono:** birrete · **Título:** Formación Profesional · **Texto:** Certificaciones con validez europea en peluquería canina, asistencia veterinaria, adiestramiento y crianza responsable. Convenios con UNAM y universidades de España y Latinoamérica. |
| Tarjeta 4 | **Icono:** corazón · **Título:** Salud y Bienestar · **Texto:** Programa de certificación de displasia de cadera y codo respaldado por catedráticos de la UNAM. Identificación por ADN y pruebas genéticas para crianza responsable. |
| Estilo tarjetas | Fondo cream, border-radius 16px. Línea gradient (gold→teal) arriba aparece al hover. Hover: fondo blanco, borde stone, sombra sutil, translateY(-6px). |

### Sección 5: Quiénes Somos (Preview)

| Elemento | Especificación |
|----------|----------------|
| Layout | Fondo Navy. Dos columnas: texto izquierda, imagen derecha. Efecto radial teal sutil en esquina superior derecha. |
| Eyebrow | "Quiénes Somos" |
| Título | Respaldo Legal Europeo y Alcance Global |
| Texto | La Fundación Alianz Canine Worldwide es una institución de utilidad pública reconocida oficialmente por el Ministerio de Agricultura de España y bajo el protectorado del Ministerio de Educación, Cultura y Deporte. Operamos bajo las Directivas de la Unión Europea para la gestión de registros genealógicos y la certificación profesional. |
| Badges | 5 pills: Europa y Eurasia, Norteamérica, América del Sur, Asia y Medio Oriente, África |
| CTA | Botón outline blanco: "Conocer Más" → Nosotros |
| Imagen | Banner ACW o foto de evento/jueces. Border-radius 20px. |

### Sección 6: Próximos Eventos (Preview)

| Elemento | Especificación |
|----------|----------------|
| Layout | Fondo cream. Título a la izquierda + botón "Ver Calendario Completo →" a la derecha. 3 tarjetas de evento en grid horizontal. |
| Eyebrow | "Calendario" |
| Título | Próximos Eventos |
| Cada tarjeta | Imagen del evento arriba. Badge de fecha (mes/día) en esquina superior izquierda sobre la imagen. Nombre del evento en DM Serif Display. Ubicación con ícono pin. Enlace "Ver Detalles →" en teal. |
| Eventos actuales | IGP Tijuana Trial (Abr 25, Tijuana), Curso Perros de Rescate (Mar 21, Baja California), Feria Mundial ACW 2027 (Jul 22, México) |
| Nota | Estos eventos se actualizan manualmente. Mostrar los 3 más próximos. Migrar desde el sitio de Squarespace. |

### Sección 7: Noticias Recientes

| Elemento | Especificación |
|----------|----------------|
| Layout | Fondo blanco. 3 tarjetas de blog en grid. |
| Eyebrow | "Noticias" |
| Título | Últimas Novedades |
| Formato tarjeta | Imagen rectangular arriba (border-radius 14px). Fecha en eyebrow style (gold, uppercase). Título en DM Serif Display. 2 líneas de extracto en gris. |
| Contenido actual | Seminário K9 (Feb 2026), Feliz Año Nuevo 2026, Federación Cinológica Peruana Director Nacional |
| Botón | "Ver Todas →" enlace a Blog |

### Sección 8: Llamada a la Acción (Afiliación)

| Elemento | Especificación |
|----------|----------------|
| Layout | Fondo Navy Deep a pantalla completa. Texto centrado en blanco. Efectos radiales sutiles (teal arriba derecha, gold abajo izquierda). |
| Eyebrow | "Forma Parte" |
| Título | Únete a la Red Cinológica Más Grande del Mundo |
| Subtítulo | Ya sea como club nacional, criador profesional, juez certificado o entusiasta — hay un lugar para ti en Alianz Canine Worldwide. |
| CTA Principal | Botón Gold: "Solicitar Afiliación" → Contacto |
| CTA Secundario | Botón outline: "Conocer Más" → Nosotros |
| Link inferior | "¿Ya eres miembro? Inicia Sesión →" → futuro ADOS login |

---

## 4. Página: Nosotros

> **Objetivo:** Establecer la legitimidad, historia y misión de Alianz. Debe sentirse institucional pero humana. NO debe ser un muro de texto — el error actual del sitio nuevo.

### Sección 1: Hero Interno

| Elemento | Especificación |
|----------|----------------|
| Layout | Banner de página interna. Fondo Navy con efecto radial teal. |
| Eyebrow | "Sobre Nosotros" |
| Título | Nuestra Historia, Nuestra Misión |
| Subtítulo | Más de 30 años construyendo el estándar global de excelencia canina con el respaldo de la Unión Europea. |

### Sección 2: Quiénes Somos

| Elemento | Especificación |
|----------|----------------|
| Layout | Dos columnas: texto a la izquierda (60%), imagen a la derecha (40%). |
| Eyebrow | "Quiénes Somos" |
| Título | La Unión Global de Asociaciones Cinológicas |
| Texto | Alianz Canine Worldwide es la unión global de asociaciones cinológicas nacionales, unificadas bajo criterios de excelencia y reconocimiento internacional. Nuestra misión va más allá de la morfología canina: nos enfocamos en el bienestar integral, la cría ética, la formación profesional y el fortalecimiento del vínculo humano-canino. Entendemos que un perro equilibrado es pilar de una familia sana. La cinología moderna ha evolucionado de una disciplina centrada en la estética morfológica hacia un ecosistema integral que prioriza la funcionalidad, el bienestar animal y el respaldo científico. |
| Nota | IMPORTANTE: Esto es todo el texto necesario. El sitio actual tiene 10x más texto del necesario. Menos es más. |

### Sección 3: Pilares (4 bloques)

| Elemento | Especificación |
|----------|----------------|
| Layout | Fondo cream. Título centrado arriba. 4 tarjetas en grid. |
| Eyebrow | "Nuestros Pilares" |
| Título | Compromiso con el Bienestar y la Excelencia |
| Pilar 1 | **Icono:** corazón/escudo · **Título:** Bienestar Animal · **Texto:** Promovemos el desarrollo de cualidades físicas y biológicas que garanticen perros sanos, evitando zoonosis y fomentando entornos de convivencia seguros para la familia. |
| Pilar 2 | **Icono:** libro abierto · **Título:** Formación y Ciencia · **Texto:** Convenios con universidades de prestigio, investigación cinológica y programas de certificación profesional con validez legal europea. |
| Pilar 3 | **Icono:** escudo · **Título:** Ética y Legislación · **Texto:** Apoyamos la creación de leyes que protejan la actividad cinófila y defendemos los derechos de criadores, aficionados y consumidores. |
| Pilar 4 | **Icono:** globo · **Título:** Red Global · **Texto:** Presencia en más de 50 países con intercambio constante de jueces, especialistas y conocimiento. Cada título emitido tiene validez internacional. |

### Sección 4: Respaldo Legal Europeo

| Elemento | Especificación |
|----------|----------------|
| Layout | Fondo Navy. Dos columnas: texto izquierda, lista de directivas derecha (tarjetas oscuras). |
| Eyebrow | "Fundación Alianz Canine Worldwide" |
| Título | Respaldo Legal Europeo |
| Texto | La Fundación ACW es una institución de utilidad pública e interés social, reconocida oficialmente por el Ministerio de Agricultura y bajo el protectorado del Ministerio de Educación, Cultura y Deporte de España. Nuestra solidez se fundamenta en el estricto cumplimiento de la legislación europea y española. |
| Directiva 1 | **Directiva 77/504/CEE** — Definición de Libro de Orígenes Genealógico, permitiendo a organizaciones independientes gestionar registros bajo estándares de calidad supervisados. |
| Directiva 2 | **Directiva 91/174/CEE** — Establece que el intercambio y la comercialización de animales de raza pura no pueden ser prohibidos ni obstaculizados por razones genealógicas o zootécnicas. |
| Directiva 3 | **Real Decreto 558/2001** — Regula el reconocimiento oficial de las organizaciones de criadores de perros de raza pura en España, con posterior modificación por el R.D. 1557/2005. |
| Directiva 4 | **Formación Profesional** — Programas diseñados bajo los estándares del Instituto Nacional de las Cualificaciones (INCUAL) con títulos de validez legal para empleo en la Unión Europea. |

### Sección 5: Convenios Universitarios

| Elemento | Especificación |
|----------|----------------|
| Layout | Fondo blanco. Título centrado. Grid de 5 tarjetas con logo, nombre y país. |
| Eyebrow | "Alianzas Académicas" |
| Título | Convenios Universitarios |
| Subtítulo | Nuestros programas de salud y formación cuentan con el respaldo de instituciones académicas de prestigio internacional. |
| Universidad 1 | UNAM — México |
| Universidad 2 | CEU Cardenal Herrera — Valencia, España |
| Universidad 3 | Universidad de Murcia — Murcia, España |
| Universidad 4 | Universidad Central del Ecuador — Quito, Ecuador |
| Universidad 5 | Universidad Juan Agustín Maza — Mendoza, Argentina |
| Estilo | Logos en grayscale, se vuelven a color al hover. Tarjetas con fondo cream. |

### Sección 6: Deportes y Disciplinas

| Elemento | Especificación |
|----------|----------------|
| Layout | Fondo cream. Grid de 6 tarjetas compactas (3 columnas). |
| Eyebrow | "Deportes y Disciplinas" |
| Título | El Universo Deportivo Canino |
| Subtítulo | El deporte no es solo competencia: es la base fundamental de la salud integral y la expresión de comportamientos naturales propios de la especie. |
| Deporte 1 | **FastCat y FlyBall** — Disciplinas de velocidad e instinto que canalizan la energía natural del perro y evalúan su estructura ósea y muscular óptima. |
| Deporte 2 | **IGP y Mondioring** — Deportes de guardia y protección centrados en el control, la obediencia extrema y la estabilidad psíquica del animal. |
| Deporte 3 | **Canicross y Reto Painani** — Pruebas de resistencia y biomecánica que fortalecen el vínculo humano-canino y promueven la salud familiar. |
| Deporte 4 | **Disc Dog** — Combinación de acrobacia, precisión y captura que mejora la propiocepción y coordinación del perro. |
| Deporte 5 | **Deportes de Tracción** — Recuperación de la herencia funcional de los perros de transporte, con educación en uso correcto de arneses. |
| Deporte 6 | **Grooming Profesional** — Competencias internacionales de estética canina con certificación y rankings oficiales. |

### Sección 7: Perros de Servicio y Asistencia

| Elemento | Especificación |
|----------|----------------|
| Layout | Fondo blanco. Dos columnas: texto izquierda, grid de 4 tipos derecha. |
| Eyebrow | "Compromiso Social" |
| Título | Certificación de Perros de Servicio y Asistencia |
| Texto | Alianz otorga importancia capital a los perros que desempeñan funciones críticas para la sociedad. La certificación garantiza que el binomio humano-canino cumple con los estándares internacionales de seguridad y eficacia. |
| Tipo 1 | **Asistencia a la Movilidad** — Recuperar objetos, abrir puertas, apoyo en equilibrio, activar interruptores. |
| Tipo 2 | **Alerta Médica** — Detección de cambios químicos previos a crisis de diabetes, epilepsia y migraña. |
| Tipo 3 | **Psiquiátrico / PTSD** — Interrupción de pánico, alerta de disociación y acompañamiento para veteranos. |
| Tipo 4 | **Asistencia para Autismo** — Anclaje, calma sensorial y seguridad en espacios públicos. |

### Sección 8: CTA

| Elemento | Especificación |
|----------|----------------|
| Eyebrow | "Forma Parte" |
| Título | El Futuro de la Cinología Está en Alianz |
| Texto | Ya sea para un criador que busca el máximo prestigio, un deportista que desea reconocimiento biomecánico, o un profesional que depende de la certificación — Alianz proporciona la garantía de excelencia a nivel mundial. |
| CTA | Botón Gold: "Solicitar Afiliación" → Contacto |

---

## 5. Página: Eventos

> **Objetivo:** Mostrar que Alianz es una organización activa con eventos reales en todo el mundo. Esto es lo más "vivo" del sitio.

### Sección 1: Hero Interno

| Elemento | Especificación |
|----------|----------------|
| Eyebrow | "Calendario" |
| Título | Eventos y Competencias |
| Subtítulo | Exposiciones, deportes caninos, grooming y formación profesional alrededor del mundo. |

### Sección 2: Próximos Eventos

| Elemento | Especificación |
|----------|----------------|
| Layout | Lista de tarjetas de evento, una debajo de otra o en grid de 2-3 columnas. Cada tarjeta con: imagen, fecha, nombre, ubicación, descripción breve, botón "Ver Detalles". |
| Filtros | Idealmente: filtros por tipo (Shows, Seminarios, Grooming, Deportes) y por región. Si GHL no soporta filtros nativos, organizar por fecha cronológica. |
| Cada evento | Debe tener su propia página de detalle con: descripción completa, fecha/hora, ubicación, jueces participantes, enlace a registro (cuando aplique), galería de fotos. |
| Nota | Migrar los eventos actuales del sitio de Squarespace. La Cumbre Iberoamericana, IGP Trial, Equinoccio Grooming, etc. ya tienen contenido listo. |

### Sección 3: Eventos Pasados (Archivo)

| Elemento | Especificación |
|----------|----------------|
| Layout | Sección colapsable o página separada. Grid de tarjetas más pequeñas con imagen y nombre. Sin descripción larga. |
| Propósito | Demuestra historial y trayectoria. Un visitante nuevo ve que hay actividad constante. |

---

## 6. Página: Razas y Grupos

> **Objetivo:** Mostrar el sistema de clasificación de razas de Alianz. Contenido de referencia que da profundidad y credibilidad científica.

### Sección 1: Hero Interno

| Elemento | Especificación |
|----------|----------------|
| Título | Razas y Grupos Reconocidos |
| Subtítulo | Clasificación oficial de razas caninas según los estándares de Alianz Canine Worldwide. |

### Sección 2: Los 8 Grupos

| Elemento | Especificación |
|----------|----------------|
| Layout | Grid de 8 tarjetas grandes (2x4 o 4x2). Cada tarjeta con imagen representativa, número de grupo y nombre. Click lleva a subpágina del grupo. |
| Contenido | Migrar exactamente la estructura del sitio actual de Squarespace que ya tiene los 8 grupos con imágenes. |
| Subpáginas | Cada grupo tiene su propia página con lista de razas dentro del grupo. Idealmente con foto y descripción breve de cada raza. |
| Nota importante | Este contenido ya existe en el sitio viejo (alianzfederation.org/perros). La migración es el trabajo pesado aquí, no la redacción. |

---

## 7. Página: Jueces Internacionales

> **Objetivo:** Directorio de jueces certificados por Alianz, organizado por región. Demuestra la red de profesionales global.

### Sección 1: Hero Interno

| Elemento | Especificación |
|----------|----------------|
| Título | Jueces Internacionales |
| Subtítulo | Profesionales certificados por Alianz Canine Worldwide en todo el mundo. |

### Sección 2: Directorio por Continente

| Elemento | Especificación |
|----------|----------------|
| Layout | 3 bloques grandes: Europa, América, Asia. Cada bloque con imagen, nombre del continente y botón para ver la lista. Misma estructura que el sitio actual de Squarespace. |
| Subpáginas | Cada continente tiene su página con lista de jueces: nombre, país, especialidades, foto (si disponible). |
| Futuro ADOS | Cuando ADOS lance, esta sección se convierte en un enlace al directorio dinámico dentro de la plataforma. Por ahora, contenido estático. |

---

## 8. Página: Reglamentos

> **Objetivo:** Acceso centralizado a toda la normativa oficial de Alianz. Documentos descargables organizados por categoría.

### Sección 1: Hero Interno

| Elemento | Especificación |
|----------|----------------|
| Título | Reglamentos y Normativa |
| Subtítulo | Documentación oficial que rige las actividades de Alianz Canine Worldwide. |

### Sección 2: Documentos

| Elemento | Especificación |
|----------|----------------|
| Layout | Lista organizada por categoría. Cada documento con: nombre, descripción breve (1 línea), botón de descarga o enlace a PDF. |
| Categoría 1 | Estatutos y Reglamento General |
| Categoría 2 | Reglamento de Exposiciones y Competencias |
| Categoría 3 | Reglamento de Jueces |
| Categoría 4 | Normativa de Registros y Pedigrees |
| Categoría 5 | Directivas Legales (UE) |
| Categoría 6 | Reglamentos Específicos (Grooming, IGP, Rescate, etc.) |
| Nota | Migrar documentos del sitio viejo. El contenido ya existe — solo necesita organización limpia. |

---

## 9. Página: Blog / Noticias

> **Objetivo:** Demostrar actividad constante. Un sitio con noticias recientes se siente vivo. Un sitio sin actualizaciones se siente abandonado.

| Elemento | Especificación |
|----------|----------------|
| Layout | Grid de tarjetas de blog (3 columnas). Imagen + fecha + título + extracto. Paginación o scroll infinito. |
| Título página | Noticias y Novedades |
| Categorías sugeridas | Noticias ACW, Eventos, Formación, Comunidad |
| Frecuencia ideal | Mínimo 2 publicaciones al mes para mantener el sitio activo. |
| Contenido inicial | Migrar las noticias más recientes del sitio viejo (WordPress). También crear 2-3 posts nuevos para el lanzamiento: anuncio del nuevo sitio, resumen de la cumbre, próximos eventos. |
| Nota GHL | GHL tiene sistema de blog integrado. Cada post tiene su propia URL, imagen destacada, fecha y categoría. |

---

## 10. Página: Contacto

> **Objetivo:** Que sea fácil contactar a Alianz Y capturar leads de clubs interesados en afiliarse. El formulario es clave para generar oportunidades de negocio.

### Sección 1: Hero Interno

| Elemento | Especificación |
|----------|----------------|
| Eyebrow | "Contacto" |
| Título | Estamos Aquí Para Ayudarte |
| Subtítulo | Escríbenos para afiliación de clubs, información sobre eventos, pedigrees, formación profesional o cualquier consulta. |

### Sección 2: Formulario + Info (Dos Columnas)

| Elemento | Especificación |
|----------|----------------|
| Layout | Columna izquierda (60%): Formulario de contacto. Columna derecha (40%): Información de contacto directo (sticky al scroll). |
| **Formulario** | |
| Título | Envíanos un Mensaje |
| Subtítulo | Completa el formulario y te responderemos en un plazo de 24 a 48 horas. |
| Campo 1 | Nombre completo (texto, requerido) |
| Campo 2 | Email (email, requerido) |
| Campo 3 | País (texto) |
| Campo 4 | Tipo de consulta (dropdown): Afiliación de Club, Información General, Eventos, Pedigrees y Registros, Formación Profesional, Certificaciones de Salud, Otro |
| Campo 5 | Mensaje (textarea, requerido) |
| Botón | "Enviar Mensaje" (Gold) con ícono de enviar |
| **Sidebar** | |
| Tarjeta info | Email: info@alianzcanineworldwide.org · WhatsApp: +52 662 518 3938 · Sede: Ctra. Nacional 301, Km. 384, Molina de Segura, Murcia, España |
| Tarjeta horario | Fondo Navy. Lunes-Viernes: 10:00-18:00 · Sábado-Domingo: Cerrado |
| Redes sociales | Iconos Facebook + Instagram |
| Nota GHL | El formulario debe conectarse a un pipeline en GHL para seguimiento. Cada lead nuevo entra como contacto con tag según tipo de consulta. |

---

## 11. Página: Cumbre Iberoamericana

> **Objetivo:** Página dedicada al evento principal de Alianz en Iberoamérica. Funciona como landing page del evento.

| Elemento | Especificación |
|----------|----------------|
| Hero | Imagen del evento. Título: Cumbre Iberoamericana ACW 2026. Ubicación y fechas en grande. |
| Descripción | Qué es la cumbre, qué actividades incluye, quién puede participar. |
| Programa | Agenda del evento por día: conferencias, exposiciones, competencias, grooming, etc. |
| Registro | Botón o formulario de inscripción. Si hay costo, enlace a pago. |
| Galería | Fotos de ediciones anteriores para generar expectativa. |
| Nota | Esta página aparece en la navegación principal mientras la cumbre esté activa. Después se archiva y el enlace se mueve a la sección de Eventos pasados. |

---

## 12. Elementos Globales

Estos elementos aparecen en TODAS las páginas del sitio.

### Header / Navegación

| Elemento | Especificación |
|----------|----------------|
| Fondo | Navy semi-transparente con backdrop-filter blur. Se vuelve sólido al hacer scroll (sticky). |
| Logo | "Alianz *Canine Worldwide*" en DM Serif Display. "Alianz" blanco, "Canine Worldwide" en gold itálica. Si hay logo oficial en imagen, reemplazar. |
| Menú | Inicio · Nosotros · Eventos · Razas · Jueces · Reglamentos · Blog · Contacto |
| Derecha | Botón "Iniciar Sesión" (borde Gold, texto Gold) — reservado para ADOS. Ícono de idioma (futuro). |
| Móvil | Menú hamburguesa. Logo visible. Botón de sesión visible. |
| Link temporal | Cumbre Iberoamericana como ítem adicional mientras esté vigente. |

### Footer

| Elemento | Especificación |
|----------|----------------|
| Fondo | Navy Deep (`#0D1929`) |
| Columna 1 | Logo + descripción: "Organización Cinológica Internacional. Fundación de utilidad pública con más de 30 años de trayectoria." + iconos Facebook e Instagram |
| Columna 2 | Enlaces rápidos: Nosotros, Eventos, Razas, Jueces, Blog |
| Columna 3 | Recursos: Reglamentos, Formación, Contacto, Área de Miembros |
| Columna 4 | Contacto: email, WhatsApp, dirección física (Molina de Segura, Murcia, España) |
| Barra inferior | © 2026 Alianz Canine Worldwide. Todos los derechos reservados. · Privacidad · Aviso Legal · Cookies |
| ⚠️ Instagram | VERIFICAR que el enlace sea correcto. El sitio actual tiene Instagram apuntando a squarespace.com — enlace roto. |

---

## 13. Notas Técnicas para GHL

### Configuración del Sub-Account

| Elemento | Especificación |
|----------|----------------|
| Nombre | Alianz Canine Worldwide |
| Dominio | Conectar alianzcanineworldwide.org al sub-account de GHL. Cambiar DNS del dominio para apuntar a GHL. |
| Zona horaria | Configurar según la ubicación del presidente (España o México según dónde opere HQ). |
| Idioma | Español como idioma principal. Multi-idioma se agrega después con Weglot. |

### SEO Básico

| Página | Title Tag | Meta Description |
|--------|-----------|------------------|
| Inicio | Alianz Canine Worldwide \| Organización Cinológica Internacional | Alianz Canine Worldwide une a criadores, jueces y entusiastas en más de 50 países. Pedigrees internacionales, eventos, formación y comunidad canina global. |
| Nosotros | Nosotros \| Alianz Canine Worldwide | Conoce la Fundación Alianz Canine Worldwide: más de 30 años de trayectoria, respaldo legal europeo y presencia en más de 50 países. |
| Contacto | Contacto \| Alianz Canine Worldwide | Contáctanos para afiliación de clubs, información sobre eventos, pedigrees, formación profesional o cualquier consulta. |
| Eventos | Eventos y Competencias \| Alianz Canine Worldwide | Calendario de exposiciones, deportes caninos, grooming y formación profesional. |
| Razas | Razas y Grupos Reconocidos \| Alianz Canine Worldwide | Clasificación oficial de razas caninas según los estándares de Alianz Canine Worldwide. |

URLs limpias: `/nosotros`, `/eventos`, `/razas`, `/jueces`, `/reglamentos`, `/blog`, `/contacto`

### Formularios y CRM

| Elemento | Configuración |
|----------|---------------|
| Formulario contacto | Conectar a pipeline "Leads Web" en GHL. Cada envío crea un contacto con tags automáticos según tipo de consulta. |
| Automatización | Email de confirmación automático al visitante: "Gracias por contactarnos. Te responderemos en 24-48 horas." |
| Notificación interna | Notificación por email al equipo de Alianz cuando llega un nuevo lead. |

### Botón Iniciar Sesión (ADOS Futuro)

| Elemento | Configuración |
|----------|---------------|
| Estado actual | El botón existe visualmente pero por ahora enlaza a una página simple que dice: "Próximamente. Estamos preparando una experiencia digital completa para nuestros miembros." |
| Cuando ADOS lance | El botón redirige al portal de miembros (client portal de GHL). |
| Nota | No mencionar ADOS por nombre en el sitio público todavía. Solo "Área de Miembros" o "Portal de Miembros". |

### Migración de Contenido

| Fuente | Qué migrar |
|--------|------------|
| alianzfederation.org | Razas y grupos (base de datos), afijos, jueces, reglamentos, noticias recientes |
| alianzcanineworldwide.org | Eventos (ya creados), contenido de Nosotros (editado y resumido), información de la Cumbre Iberoamericana |
| Prioridad | Primero Prioridad 1 (Inicio, Nosotros, Contacto). Luego Prioridad 2 (Eventos, Blog). Luego Prioridad 3 (Razas, Jueces, Reglamentos). |
| Imágenes | Descargar TODAS las imágenes de ambos sitios antes de cerrarlos. Organizar en carpetas por página. |

### Redirecciones

| Acción | Detalle |
|--------|---------|
| alianzfederation.org | Configurar redirect 301 a alianzcanineworldwide.org para no perder SEO acumulado. |
| Páginas individuales | Mapear las URLs viejas a las nuevas: /nuestro-trabajo → /nosotros, /eventos → /eventos, etc. |
| Nota | Esto se hace DESPUÉS del lanzamiento, no antes. |

---

*Fin del Blueprint — Ágora Business Works — Abril 2026*
