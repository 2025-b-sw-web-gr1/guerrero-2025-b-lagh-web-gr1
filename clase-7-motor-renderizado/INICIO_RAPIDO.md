# 🚀 Inicio Rápido - Clase 7 Motor de Renderizado

## ⚡ Instalación y Ejecución

### 1️⃣ Instalar Dependencias
```bash
cd clase-7-motor-renderizado
npm install
```

### 2️⃣ Iniciar el Servidor
```bash
npm start
```
O también:
```bash
node server.js
```

### 3️⃣ Abrir en el Navegador
```
http://localhost:3000
```

---

## 📄 Páginas Disponibles

| Página | URL | Descripción |
|--------|-----|-------------|
| 🏠 Inicio | http://localhost:3000/ | Hero + proyectos destacados |
| 👤 Acerca de | http://localhost:3000/about | Bio + habilidades + educación |
| 📁 Proyectos | http://localhost:3000/projects | Todos los proyectos |
| 📧 Contacto | http://localhost:3000/contact | Formulario + info de contacto |
| ❌ 404 | http://localhost:3000/cualquier-cosa | Página de error |

---

## 📁 Estructura del Proyecto

```
clase-7-motor-renderizado/
│
├── 📄 server.js                    # Servidor Express + configuración Handlebars
├── 📦 package.json                 # Dependencias y scripts
├── 🚫 .gitignore                   # Excluye node_modules
│
├── 📁 views/                       # Plantillas Handlebars
│   ├── layouts/
│   │   └── main.handlebars         # Layout principal (estructura HTML base)
│   ├── partials/
│   │   ├── header.handlebars       # Navegación reutilizable
│   │   └── footer.handlebars       # Pie de página reutilizable
│   ├── home.handlebars             # Página de inicio
│   ├── about.handlebars            # Página acerca de
│   ├── projects.handlebars         # Página de proyectos
│   ├── contact.handlebars          # Página de contacto
│   └── 404.handlebars              # Página de error
│
├── 📁 public/                      # Archivos estáticos
│   ├── css/
│   │   └── styles.css              # Estilos CSS completos
│   └── js/
│       └── script.js               # JavaScript interactivo
│
└── 📁 documentación/
    ├── README.md                   # Documentación completa del proyecto
    ├── COMPARACION_EJS_VS_HANDLEBARS.md  # Análisis comparativo detallado
    └── PROMPTS_UTILIZADOS.md       # Todos los prompts de IA usados
```

---

## 🎯 Características Implementadas

### ✅ Motor de Renderizado
- [x] **Handlebars** como motor de plantillas
- [x] Sistema de **layouts** (plantilla base reutilizable)
- [x] **Partials** para header y footer
- [x] Paso de datos dinámicos desde Express

### ✅ Páginas Funcionales
- [x] Página de inicio con hero y proyectos destacados
- [x] Página "Acerca de" con habilidades y educación
- [x] Página de proyectos con grid responsive
- [x] Página de contacto con formulario
- [x] Página 404 personalizada

### ✅ Diseño y UX
- [x] Diseño **responsive** (móvil, tablet, escritorio)
- [x] Paleta de colores moderna (azul/morado)
- [x] Menú **hamburguesa** para móviles
- [x] **Animaciones** de entrada y hover
- [x] Iconos de **Font Awesome**

### ✅ Interactividad
- [x] Menú hamburguesa funcional
- [x] Resaltado de enlace activo
- [x] Animación de barras de progreso al scroll
- [x] Smooth scroll
- [x] Manejo de formulario

### ✅ Documentación
- [x] README completo con análisis técnico
- [x] Comparación detallada EJS vs Handlebars
- [x] Prompts de IA utilizados
- [x] Código comentado

---

## 🔧 Sintaxis de Handlebars - Referencia Rápida

### Variables
```handlebars
{{nombre}}              <!-- Con escape (seguro) -->
{{{htmlContent}}}       <!-- Sin escape (HTML crudo) -->
```

### Condicionales
```handlebars
{{#if condicion}}
  <p>Es verdadero</p>
{{else}}
  <p>Es falso</p>
{{/if}}
```

### Bucles
```handlebars
{{#each items}}
  <li>{{this.nombre}}</li>
{{/each}}
```

### Comentarios
```handlebars
{{!-- Este es un comentario --}}
```

---

## 📚 Archivos de Documentación

### 1. README.md
- Información general del proyecto
- Por qué elegí Handlebars
- Diferencias con EJS
- Ventajas y desventajas
- Características implementadas
- Guía de sintaxis

### 2. COMPARACION_EJS_VS_HANDLEBARS.md
- Comparación exhaustiva lado a lado
- Ejemplos de código en ambos motores
- Tabla comparativa completa
- Recomendaciones de uso

### 3. PROMPTS_UTILIZADOS.md
- Todos los prompts usados con IA
- Tips para usar IA efectivamente
- Template de prompts
- Lecciones aprendidas

---

## 🎓 Para Presentar en Clase

Responde estas preguntas basándote en la documentación:

### 1️⃣ ¿Por qué elegiste Handlebars?
**Respuesta en:** `README.md` - Sección "¿Por qué elegí Handlebars?"

### 2️⃣ ¿Qué diferencias encontraste respecto a EJS?
**Respuesta en:** `COMPARACION_EJS_VS_HANDLEBARS.md` - Tabla comparativa completa

### 3️⃣ ¿Qué ventajas observaste?
**Respuesta en:** `README.md` - Sección "Ventajas de Handlebars"

### 4️⃣ ¿Qué desventajas observaste?
**Respuesta en:** `README.md` - Sección "Desventajas de Handlebars"

---

## 🐛 Solución de Problemas

### ❌ Error: "Cannot find module 'express'"
**Solución:**
```bash
npm install
```

### ❌ Error: "EADDRINUSE :::3000"
**Solución:** El puerto 3000 está ocupado. Cierra otras aplicaciones o cambia el puerto en `server.js`:
```javascript
const PORT = 3001; // Cambia a otro puerto
```

### ❌ Las vistas no se renderizan
**Verifica:**
1. Que exista la carpeta `views/`
2. Que los archivos tengan extensión `.handlebars`
3. Que `server.js` esté en la raíz del proyecto

### ❌ Los estilos no se aplican
**Verifica:**
1. Que exista la carpeta `public/css/`
2. Que el archivo se llame `styles.css`
3. Que el servidor esté corriendo

---

## 💡 Tips Útiles

### Agregar una nueva página
1. Crea `views/mipagina.handlebars`
2. Agrega la ruta en `server.js`:
```javascript
app.get('/mipagina', (req, res) => {
    res.render('mipagina', {
        title: 'Mi Página',
        // datos...
    });
});
```
3. Agrega el enlace en `partials/header.handlebars`

### Modificar estilos
Edita `public/css/styles.css` y recarga la página (Ctrl+R)

### Ver cambios en vistas
Reinicia el servidor (Ctrl+C y luego `npm start`)

---

## 📦 Dependencias

```json
{
  "express": "^5.1.0",
  "express-handlebars": "^8.0.2"
}
```

---

## ✅ Checklist de Entrega

- [x] Proyecto funciona en `http://localhost:3000`
- [x] Todas las páginas son accesibles
- [x] Diseño responsive (probar en móvil)
- [x] Sin errores en consola del navegador
- [x] Documentación completa
- [x] Código comentado
- [x] `.gitignore` configurado (sin `node_modules/`)
- [x] Listo para presentar

---

## 🎯 Presentación en Clase

**Estructura sugerida:**

1. **Introducción** (1 min)
   - Motor elegido: Handlebars
   - Tipo de proyecto: Portafolio personal

2. **Demo en Vivo** (2 min)
   - Mostrar las páginas funcionando
   - Resaltar diseño responsive

3. **Explicación Técnica** (3 min)
   - Mostrar código de una vista con Handlebars
   - Explicar layouts y partials
   - Mostrar cómo se pasan datos

4. **Comparación con EJS** (2 min)
   - Diferencias principales
   - Ventajas y desventajas

5. **Conclusión** (1 min)
   - Aprendizajes clave
   - Recomendación personal

---

## 📞 Ayuda y Recursos

- [Documentación Handlebars](https://handlebarsjs.com/)
- [Express Handlebars en GitHub](https://github.com/express-handlebars/express-handlebars)
- Ver archivos `.md` en la carpeta del proyecto

---

**¡Éxito en tu presentación! 🚀**
