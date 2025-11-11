# 📚 Clase 9 - Documentación de APIs con Swagger

## 🎯 Objetivo
Documentar completamente la API REST de JSONPlaceholder usando Swagger/OpenAPI 3.0

## 📋 Contenido

### Archivo Principal
- **`swagger.yaml`**: Especificación completa OpenAPI 3.0 con TODOS los endpoints de JSONPlaceholder

### Endpoints Documentados

#### 📮 Posts (5 endpoints)
- `GET /posts` - Obtener todos los posts
- `POST /posts` - Crear nuevo post
- `GET /posts/{id}` - Obtener post por ID
- `PUT /posts/{id}` - Actualizar post completo
- `PATCH /posts/{id}` - Actualizar post parcial
- `DELETE /posts/{id}` - Eliminar post

#### 💬 Comments (2 endpoints)
- `GET /comments` - Obtener todos los comentarios
- `POST /comments` - Crear nuevo comentario

#### 📁 Albums (3 endpoints)
- `GET /albums` - Obtener todos los álbumes
- `POST /albums` - Crear nuevo álbum
- `GET /albums/{id}` - Obtener álbum por ID

#### 📷 Photos (1 endpoint)
- `GET /photos` - Obtener todas las fotos

#### ✅ Todos (3 endpoints)
- `GET /todos` - Obtener todas las tareas
- `POST /todos` - Crear nueva tarea
- `GET /todos/{id}` - Obtener tarea por ID

#### 👤 Users (2 endpoints)
- `GET /users` - Obtener todos los usuarios
- `GET /users/{id}` - Obtener usuario por ID

## 🚀 Cómo Usar

### 1. Swagger Editor (Online)

```
1. Ve a: https://editor.swagger.io/
2. Abre el archivo swagger.yaml
3. Copia TODO el contenido
4. Pega en el editor de Swagger
5. ¡Listo! Verás la documentación interactiva
```

### 2. Ver Documentación
- **Panel Izquierdo**: Código YAML
- **Panel Derecho**: Documentación visual interactiva
- **Try it out**: Puedes probar los endpoints directamente

### 3. Probar Endpoints
```
1. Expande cualquier endpoint
2. Clic en "Try it out"
3. Modifica parámetros si es necesario
4. Clic en "Execute"
5. Ve la respuesta en tiempo real
```

## 📊 Características de la Documentación

✅ **Completa**: Todos los endpoints de JSONPlaceholder  
✅ **Organizada**: Agrupada por tags (Posts, Comments, etc.)  
✅ **Ejemplos**: Cada endpoint tiene ejemplos de request/response  
✅ **Schemas**: Modelos de datos definidos con validaciones  
✅ **Descripciones**: Explicaciones claras de cada operación  
✅ **Estándar**: OpenAPI 3.0 oficial

## 🎓 Información del Estudiante

**Clase**: Construcción y Evolución de Software Frontend  
**Taller**: Clase 9 - Examen 01  
**Tema**: Documentación de APIs REST con Swagger  
**Base de Datos**: JSONPlaceholder API

## 📝 Notas Importantes

⚠️ **JSONPlaceholder es una API falsa**: Las operaciones POST, PUT, PATCH y DELETE simulan cambios pero no persisten datos reales.

🔗 **URL Base**: https://jsonplaceholder.typicode.com

📖 **Documentación Oficial**: https://jsonplaceholder.typicode.com/guide/

## 🔗 Enlaces Útiles

- [Swagger Editor](https://editor.swagger.io/)
- [OpenAPI Specification](https://swagger.io/specification/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)

## ✅ Checklist de Entrega

- [x] Crear archivo swagger.yaml
- [x] Documentar TODOS los endpoints (16 endpoints)
- [x] Definir schemas para cada recurso
- [x] Agregar ejemplos de request/response
- [x] Incluir descripciones claras
- [x] Validar en Swagger Editor
- [ ] Subir link a Google Docs en carpeta "Examen-01"

---

**Desarrollado con** ❤️ **para Clase 9 - Examen 001**
