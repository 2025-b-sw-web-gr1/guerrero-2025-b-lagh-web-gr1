# 📝 PROMPTS UTILIZADOS - CLASE 7

## Taller: Motor de Renderizado Handlebars

Este documento contiene todos los prompts utilizados con IA para completar el taller de motores de renderizado web.

---

## 🎯 PROMPT 1: Elección del Motor de Renderizado

**Prompt usado:**
```
Necesito elegir un motor de renderizado para un proyecto web con Node.js y Express. 
El motor debe ser diferente a EJS. Dame una comparación entre los motores más populares 
(Handlebars, Pug, Nunjucks) y ayúdame a elegir el mejor para un portafolio personal.

Criterios importantes:
- Facilidad de aprendizaje
- Documentación clara
- Sistema de layouts y partials
- Comunidad activa
- Casos de uso similares
```

**Respuesta resumida de la IA:**
Recomendó **Handlebars** por:
- Sintaxis clara y legible
- Excelente sistema de layouts con express-handlebars
- Gran comunidad y documentación
- Ideal para portafolios y sitios con contenido dinámico
- Fácil integración con Express

---

## 🏗️ PROMPT 2: Estructura del Proyecto

**Prompt usado:**
```
Ayúdame a crear la estructura de carpetas para una aplicación web con Express y Handlebars.
El proyecto debe incluir:
- Sistema de layouts
- Partials reutilizables
- Páginas: inicio, acerca de, proyectos, contacto
- Archivos estáticos (CSS, JS, imágenes)
- Buenas prácticas de organización

Dame la estructura completa de carpetas y archivos recomendada.
```

**Resultado:**
```
proyecto/
├── server.js
├── package.json
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   ├── partials/
│   │   ├── header.handlebars
│   │   └── footer.handlebars
│   ├── home.handlebars
│   ├── about.handlebars
│   ├── projects.handlebars
│   ├── contact.handlebars
│   └── 404.handlebars
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   └── images/
└── README.md
```

---

## ⚙️ PROMPT 3: Configuración de Express y Handlebars

**Prompt usado:**
```
Necesito el código para configurar Express con Handlebars como motor de renderizado.
Incluye:
- Configuración básica de Express
- Configuración de express-handlebars con layouts
- Configuración de partials
- Middleware para archivos estáticos
- Estructura de rutas básica para: inicio, acerca de, proyectos, contacto
- Manejo de página 404

Usa las mejores prácticas y agrega comentarios explicativos.
```

**Código generado:**
```javascript
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

// Configuración de Handlebars
app.engine('handlebars', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas...
```

---

## 🎨 PROMPT 4: Layout Principal

**Prompt usado:**
```
Crea el layout principal (main.handlebars) para mi aplicación web.
Debe incluir:
- Estructura HTML5 básica
- Meta tags responsive
- Placeholder para el título dinámico
- Link a Font Awesome para iconos
- Link a CSS personalizado
- Inclusión de partials: header y footer
- Área para el contenido dinámico (body)
- Script de JavaScript al final

Usa sintaxis de Handlebars correctamente.
```

---

## 🧩 PROMPT 5: Partial de Header/Navegación

**Prompt usado:**
```
Crea un partial de header con navegación para Handlebars que incluya:
- Logo con icono
- Menú de navegación con enlaces a: Inicio, Acerca de, Proyectos, Contacto
- Diseño responsive con menú hamburguesa para móviles
- Usa Font Awesome para los iconos
- Estructura semántica HTML5
- Clases CSS para estilos posteriores

Solo el HTML con sintaxis Handlebars, sin CSS.
```

---

## 📄 PROMPT 6: Vistas de Contenido

**Prompt usado:**
```
Ayúdame a crear las vistas en Handlebars para mi portafolio.

PÁGINA DE INICIO:
- Sección hero con título, subtítulo y botones
- Sección de proyectos destacados (mostrar datos con #each)
- Uso de condicionales {{#if}} para mostrar/ocultar elementos
- Call-to-action al final

PÁGINA ACERCA DE:
- Información personal (biografía)
- Grid de habilidades con barras de progreso (usar #each)
- Timeline de educación (usar #each)
- Placeholder para imagen de perfil

PÁGINA DE PROYECTOS:
- Grid de tarjetas de proyectos
- Mostrar todos los proyectos con #each
- Badge para proyectos destacados (usar #if)
- Mostrar tecnologías como tags (usar #each anidado)
- Mensaje cuando no hay proyectos (usar {{else}})

PÁGINA DE CONTACTO:
- Información de contacto con iconos
- Formulario de contacto
- Enlaces a redes sociales (usar #each)

Usa las características de Handlebars: #if, #each, #unless, variables, etc.
```

---

## 🎨 PROMPT 7: Diseño CSS

**Prompt usado:**
```
Crea un archivo CSS completo y moderno para mi portafolio web con las siguientes características:

DISEÑO:
- Paleta de colores moderna (azul/morado como primarios)
- Variables CSS para fácil personalización
- Diseño responsive (mobile-first)
- Grid y Flexbox para layouts
- Tipografía clara y legible

COMPONENTES:
- Header sticky con navegación responsive
- Hero section con gradiente
- Tarjetas de proyectos con efecto hover
- Botones con diferentes variantes
- Formulario estilizado
- Footer con múltiples columnas
- Página de error 404

EFECTOS:
- Transiciones suaves
- Animaciones de entrada (fade-in, slide-up)
- Efectos hover en elementos interactivos
- Barras de progreso animadas

RESPONSIVE:
- Breakpoints para tablet y móvil
- Menú hamburguesa funcional
- Grid que se adapta a diferentes tamaños

Incluye comentarios para organizar las secciones del CSS.
```

---

## 💻 PROMPT 8: JavaScript Interactivo

**Prompt usado:**
```
Necesito el código JavaScript para mi portafolio que incluya:

FUNCIONALIDADES:
1. Toggle del menú hamburguesa responsive
2. Resaltar el enlace activo en la navegación según la página actual
3. Animación de las barras de habilidades al hacer scroll (Intersection Observer)
4. Manejo del formulario de contacto (prevenir submit por defecto)
5. Smooth scroll para enlaces internos
6. Animación de entrada para las tarjetas de proyecto al hacer scroll
7. Actualizar el año actual en el footer automáticamente

REQUISITOS:
- JavaScript vanilla (sin jQuery)
- Código limpio y comentado
- Uso de ES6+ (arrow functions, const/let)
- Event listeners apropiados
- Console.log con información del motor de renderizado

Todo en un solo archivo script.js.
```

---

## 🔄 PROMPT 9: Pasar Datos a las Vistas

**Prompt usado:**
```
Muéstrame cómo pasar datos desde Express a las vistas de Handlebars.

Necesito ejemplos de:
1. Datos simples (strings, números, booleanos)
2. Arrays de objetos (proyectos, habilidades)
3. Objetos anidados (educación con múltiples campos)
4. Datos con propiedades condicionales

Incluye:
- Código del servidor (rutas de Express)
- Estructura de datos de ejemplo
- Cómo acceder a estos datos en las vistas Handlebars

Ejemplos para: proyectos con tecnologías, habilidades con niveles, información de contacto.
```

---

## 📚 PROMPT 10: Documentación del Proyecto

**Prompt usado:**
```
Crea un README.md completo y profesional para mi proyecto de portafolio con Handlebars.

Debe incluir:

INFORMACIÓN GENERAL:
- Descripción del proyecto
- Tecnologías utilizadas
- Por qué elegí Handlebars

ANÁLISIS TÉCNICO:
- Diferencias entre Handlebars y EJS (con ejemplos de código)
- Tabla comparativa
- Ventajas de Handlebars (con ejemplos)
- Desventajas de Handlebars (con ejemplos)

DOCUMENTACIÓN:
- Estructura del proyecto
- Características implementadas
- Sintaxis de Handlebars (guía rápida)
- Instrucciones de instalación y ejecución

RECURSOS:
- Enlaces a documentación oficial
- Tutoriales recomendados
- Referencias útiles

CONCLUSIÓN:
- Aprendizajes clave
- Recomendaciones de uso

Usa formato Markdown con:
- Títulos y subtítulos claros
- Bloques de código con syntax highlighting
- Tablas cuando sea apropiado
- Emojis para mejor visualización
- Secciones bien organizadas
```

---

## 🔍 PROMPT 11: Comparación Detallada

**Prompt usado:**
```
Crea un documento de análisis comparativo exhaustivo entre EJS y Handlebars.

Compara en detalle:
1. SINTAXIS - Con ejemplos lado a lado
2. ARQUITECTURA - Layouts, partials, includes
3. LÓGICA DE NEGOCIO - Dónde y cómo se maneja
4. HELPERS Y EXTENSIBILIDAD - Sistema de funciones auxiliares
5. SEGURIDAD - Escape de HTML, XSS
6. RENDIMIENTO - Velocidad, memoria, tamaño
7. CASOS DE USO - Cuándo usar cada uno

Para cada punto:
- Ejemplo de código en ambos motores
- Análisis de pros y contras
- Tabla comparativa

INCLUYE TAMBIÉN:
- Tabla comparativa final completa
- Recomendaciones según tipo de proyecto
- Conclusión personal basada en la experiencia

Formato: Markdown con código bien formateado y organización clara.
```

---

## 🎓 PROMPT 12: Características Avanzadas

**Prompt usado:**
```
Explícame y muéstrame ejemplos de características avanzadas de Handlebars:

1. HELPERS PERSONALIZADOS
   - Cómo crear helpers
   - Helpers para formateo de fechas
   - Helpers para comparaciones
   - Helpers matemáticos

2. HELPERS DE BLOQUE
   - Crear helpers que envuelven contenido
   - Helpers condicionales personalizados

3. PARTIALS DINÁMICOS
   - Cómo elegir partials en tiempo de ejecución

4. CONTEXTOS Y SCOPE
   - Entender @root, @parent, this
   - Cambiar contexto con #with

5. DATOS ESPECIALES
   - Usar @index, @first, @last en loops
   - Acceder a propiedades privadas

Dame ejemplos de código prácticos y bien comentados.
```

---

## 🐛 PROMPT 13: Debugging y Mejores Prácticas

**Prompt usado:**
```
Dame una guía de mejores prácticas y debugging para Handlebars:

MEJORES PRÁCTICAS:
1. Organización de archivos y carpetas
2. Nomenclatura de vistas y partials
3. Cuándo usar layouts vs partials
4. Manejo de datos (preparación en servidor)
5. Uso apropiado de helpers
6. Evitar lógica compleja en vistas

DEBUGGING:
1. Cómo depurar errores comunes
2. Helper para inspeccionar datos: {{log}}
3. Errores de sintaxis y cómo encontrarlos
4. Problemas con contexto y scope

PERFORMANCE:
1. Pre-compilación de plantillas
2. Cacheo en producción
3. Optimización de layouts y partials

SEGURIDAD:
1. Cuándo usar {{}} vs {{{}}}
2. Validación de datos del usuario
3. Prevención de XSS

Con ejemplos prácticos y código.
```

---

## 📋 PROMPT 14: Lista de Verificación del Proyecto

**Prompt usado:**
```
Crea una checklist completa para verificar que mi proyecto con Handlebars esté completo:

ESTRUCTURA Y CONFIGURACIÓN:
- [ ] Estructura de carpetas correcta
- [ ] package.json configurado
- [ ] Dependencias instaladas
- [ ] Express configurado
- [ ] Handlebars configurado
- [ ] Layouts y partials configurados

VISTAS Y CONTENIDO:
- [ ] Layout principal funcional
- [ ] Header/Footer como partials
- [ ] Todas las páginas creadas
- [ ] Uso correcto de helpers (#if, #each)
- [ ] Datos pasados desde servidor

DISEÑO Y ESTILOS:
- [ ] CSS responsive
- [ ] Diseño moderno
- [ ] Efectos y animaciones
- [ ] Iconos (Font Awesome)
- [ ] Consistencia visual

FUNCIONALIDAD:
- [ ] Navegación funcional
- [ ] Menú responsive
- [ ] Formulario de contacto
- [ ] JavaScript interactivo

DOCUMENTACIÓN:
- [ ] README completo
- [ ] Comparación con EJS
- [ ] Instrucciones de instalación
- [ ] Comentarios en código

ENTREGA:
- [ ] Proyecto funciona localmente
- [ ] Sin errores en consola
- [ ] .gitignore configurado
- [ ] Listo para presentar
```

---

## 🚀 PROMPT 15: Script de Inicio Rápido

**Prompt usado:**
```
Crea un script de inicio rápido (quick-start.md) que explique:

Para alguien que clona el repositorio por primera vez:

1. REQUISITOS PREVIOS
   - Node.js instalado
   - npm instalado
   - Editor de código

2. PASOS DE INSTALACIÓN
   - Clonar o descargar
   - Instalar dependencias
   - Iniciar servidor

3. EXPLORAR EL PROYECTO
   - URLs de las páginas
   - Archivos principales
   - Dónde modificar cosas

4. DESARROLLO
   - Cómo agregar nueva página
   - Cómo modificar estilos
   - Cómo agregar nuevo partial

5. TROUBLESHOOTING
   - Problemas comunes
   - Soluciones rápidas

Formato: Markdown, paso a paso, con comandos específicos.
```

---

## 📊 RESUMEN DE PROMPTS

**Total de prompts utilizados:** 15

**Categorías:**
1. 🎯 Elección de tecnología (1)
2. 🏗️ Arquitectura y estructura (2)
3. ⚙️ Configuración técnica (3)
4. 🎨 Diseño y estilos (2)
5. 💻 Funcionalidad JavaScript (2)
6. 📚 Documentación (3)
7. 🔍 Análisis comparativo (1)
8. 🐛 Debugging y mejores prácticas (1)

---

## 💡 TIPS PARA USAR IA EFECTIVAMENTE

### ✅ DO - Hacer:
1. **Ser específico**: Detalla exactamente lo que necesitas
2. **Dar contexto**: Explica el propósito del código
3. **Pedir ejemplos**: Solicita código de ejemplo, no solo explicaciones
4. **Iterar**: Si la respuesta no es perfecta, refina el prompt
5. **Pedir comentarios**: Solicita código comentado para aprender

### ❌ DON'T - No hacer:
1. Prompts vagos como "crea un sitio web"
2. Aceptar el primer resultado sin revisarlo
3. Copiar código sin entenderlo
4. Olvidar pedir buenas prácticas
5. No verificar el código generado

---

## 🎓 LECCIONES APRENDIDAS

1. **La IA es una herramienta de aprendizaje**: No solo genera código, también explica conceptos

2. **Prompts específicos = Mejores resultados**: Cuanto más detallado el prompt, mejor la respuesta

3. **Iterar es clave**: El primer resultado rara vez es perfecto, hay que refinar

4. **Combinar conocimiento**: Usar IA + documentación oficial + experimentación propia

5. **Validar siempre**: Revisar y entender el código generado antes de usarlo

---

## 📝 TEMPLATE DE PROMPT EFECTIVO

```
CONTEXTO:
[Describe tu proyecto y situación actual]

OBJETIVO:
[Qué quieres lograr específicamente]

REQUISITOS:
- [Requisito 1]
- [Requisito 2]
- [Requisito 3]

TECNOLOGÍAS:
[Lista las tecnologías que estás usando]

FORMATO ESPERADO:
[Código, explicación, ejemplos, etc.]

RESTRICCIONES:
[Cosas que NO quieres o limitaciones]
```

---

**Fecha:** Noviembre 2025  
**Proyecto:** Taller Motores de Renderizado - Clase 7  
**Motor usado:** Handlebars con Express.js
