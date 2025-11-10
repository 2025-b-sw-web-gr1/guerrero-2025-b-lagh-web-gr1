# Taller Clase 8-9: Bruno API Testing

## Descripción
Colección completa de peticiones HTTP para JSONPlaceholder usando Bruno.

## Instalación de Bruno
1. Descargar desde: https://www.usebruno.com/
2. Instalar la aplicación
3. Abrir Bruno y seleccionar "Open Collection"
4. Navegar a esta carpeta: `clase-8-9-bruno`

## Recursos y Métodos HTTP

### 📮 POSTS (6 peticiones)
- ✅ GET `/posts` - Obtener todos los posts
- ✅ GET `/posts/1` - Obtener post por ID
- ✅ POST `/posts` - Crear nuevo post
- ✅ PUT `/posts/1` - Actualizar post completo
- ✅ PATCH `/posts/1` - Actualizar título de post
- ✅ DELETE `/posts/1` - Eliminar post

### 💬 COMMENTS (3 peticiones)
- ✅ GET `/comments` - Obtener todos los comentarios
- ✅ GET `/comments?postId=1` - Obtener comentarios por post
- ✅ POST `/comments` - Crear nuevo comentario

### 📁 ALBUMS (3 peticiones)
- ✅ GET `/albums` - Obtener todos los álbumes
- ✅ GET `/albums/1` - Obtener álbum por ID
- ✅ POST `/albums` - Crear nuevo álbum

### 📷 PHOTOS (2 peticiones)
- ✅ GET `/photos` - Obtener todas las fotos
- ✅ GET `/photos?albumId=1` - Obtener fotos por álbum

### ✅ TODOS (3 peticiones)
- ✅ GET `/todos` - Obtener todas las tareas
- ✅ GET `/todos/1` - Obtener tarea por ID
- ✅ POST `/todos` - Crear nueva tarea

### 👤 USERS (2 peticiones)
- ✅ GET `/users` - Obtener todos los usuarios
- ✅ GET `/users/1` - Obtener usuario por ID

## Total: 19 peticiones

## Códigos de Respuesta HTTP Esperados

| Método | Código | Significado |
|--------|--------|-------------|
| GET | 200 | OK - Recurso obtenido exitosamente |
| POST | 201 | Created - Recurso creado exitosamente |
| PUT | 200 | OK - Recurso actualizado completamente |
| PATCH | 200 | OK - Recurso actualizado parcialmente |
| DELETE | 200 | OK - Recurso eliminado exitosamente |

## Cómo Usar

1. **Abrir la colección en Bruno**
   - File → Open Collection
   - Selecciona la carpeta `clase-8-9-bruno`

2. **Ejecutar peticiones**
   - Haz clic en cualquier archivo `.bru`
   - Presiona "Send" o `Ctrl+Enter`
   - Observa la respuesta en el panel derecho

3. **Verificar respuestas**
   - Status Code (200, 201, etc.)
   - Headers
   - Body (JSON)
   - Time

## Conceptos Aprendidos

### Métodos HTTP
- **GET**: Obtener recursos
- **POST**: Crear recursos
- **PUT**: Actualizar recursos completamente
- **PATCH**: Actualizar recursos parcialmente
- **DELETE**: Eliminar recursos

### Parámetros
- **Query Params**: `?postId=1`, `?albumId=1`
- **Path Params**: `/posts/1`, `/users/1`
- **Body**: JSON para POST, PUT, PATCH

### Headers
- **Content-Type**: `application/json`
- **Accept**: `application/json`

## API Base
```
https://jsonplaceholder.typicode.com
```

## Notas
- JSONPlaceholder es una API falsa para testing
- Las peticiones POST, PUT, PATCH, DELETE no modifican la base de datos real
- Siempre devuelven respuestas simuladas exitosas

## Estructura de Archivos
```
clase-8-9-bruno/
├── bruno.json
├── README.md
├── get-all-posts.bru
├── get-post-by-id.bru
├── create-post.bru
├── update-post-put.bru
├── update-post-title.bru
├── delete-post.bru
├── get-all-comments.bru
├── get-comments-by-post.bru
├── create-comment.bru
├── get-all-albums.bru
├── get-album-by-id.bru
├── create-album.bru
├── get-all-photos.bru
├── get-photos-by-album.bru
├── get-all-todos.bru
├── get-todo-by-id.bru
├── create-todo.bru
├── get-all-users.bru
└── get-user-by-id.bru
```

## Recursos Adicionales
- 📖 Documentación JSONPlaceholder: https://jsonplaceholder.typicode.com/
- 📖 Documentación Bruno: https://docs.usebruno.com/
- 📊 Presentación Clase: https://app.presentations.ai/view/Ak2Rzeuljc
- 📊 Presentación Métodos HTTP: https://app.presentations.ai/view/euqEgUmy1U
