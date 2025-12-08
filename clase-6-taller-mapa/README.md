# Clase 006 - Taller W3C

En este repositorio se encuentran los entregables de la Clase 006 (W3C - organismo de estándares web).

- `mapa_mental.md`: Mapa mental con los conceptos clave sobre la W3C.
- `index.html`, `css/styles.css`, `js/script.js`: Ejemplo práctico que muestra una página accesible usando estándares W3C (HTML5, WCAG, WAI-ARIA, CSS Grid/Flexbox y SVG).
- `reflection.md`: Respuestas de la reflexión final del taller para publicar en el canal "002 - Definicion T. Clase" en el POST llamado "Clase 006".

## Cómo ver la implementación

1. Abrir `clase-6-taller-mapa/index.html` en un navegador (no requiere servidor).

2. Revisar la estructura semántica, uso de `role`, `aria-*` y ARIA labels, y el SVG integrado para iconos.

3. Interactuar con el formulario usando el teclado (Tab) y observar la respuesta aria-live en caso de errores o envío correcto.

**Estándar aplicado en la práctica:** WCAG (con WAI-ARIA y HTML5 semántico) — ejemplo de formulario accesible.


---

## Estándares seleccionados

1. HTML5 — Lenguaje base para estructurar contenido web. Esencial para la semántica.

2. CSS (Grid / Flexbox) — Para estructura visual y diseño responsivo.

3. WCAG — Directrices de accesibilidad para hacer contenidos accesibles a personas con discapacidad.

4. WAI-ARIA — Especificación para hacer aplicaciones web dinámicas accesibles para lectores de pantalla.

5. SVG — Formato para gráficos vectoriales escalables en la web.

Cada uno se detalla en `mapa_mental.md` con justificaciones de por qué han sido seleccionados.

---

## Trabajo práctico

Hemos implementado una página básica con los siguientes objetivos:

- Uso de HTML semántico (`header`, `nav`, `main`, `article`, `section`, `footer`).

- Formulario con etiquetas asociadas y roles ARIA donde son útiles.

- Navegación por teclado y enfoque visible para cumplir WCAG (contraste y focus visible).

- Layout con CSS Grid/Flexbox para practicar diseño.

- Un icono SVG inline para demostrar gráficos vectoriales y accesibilidad con `title` y `aria-hidden` según el contexto.

---

## Presentación

Listo para subir a la actividad del curso como entrega y/o presentación en clase.



