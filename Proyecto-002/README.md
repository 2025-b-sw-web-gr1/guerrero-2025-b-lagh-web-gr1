# Proyecto 001 - Documentación con Swagger

Este proyecto implementa una API RESTful para gestionar Equipos y Jugadores, documentada con Swagger (OpenAPI).

## Instalación

1. Clonar el repositorio.
2. Navegar a la carpeta del proyecto.
3. Instalar dependencias:

\`\`\`bash
npm install
\`\`\`

## Ejecución

Para iniciar el servidor en modo desarrollo:

\`\`\`bash
npm run start:dev
\`\`\`

El servidor se iniciará en `http://localhost:3000`.

## Documentación API (Swagger)

La documentación interactiva generado por Swagger está disponible en:

**[http://localhost:3000/api](http://localhost:3000/api)**

### Endpoints Principales

#### Teams
- `GET /teams`: Listar equipos.
- `GET /teams/:id`: Obtener detalle de un equipo.
- `POST /teams`: Crear un equipo (requiere `name`, `country`).
- `PUT /teams/:id`: Actualizar equipo.
- `DELETE /teams/:id`: Eliminar equipo.

#### Players
- `GET /players`: Listar jugadores.
- `GET /players/:id`: Obtener detalle de un jugador.
- `POST /players`: Crear un jugador.
- `PUT /players/:id`: Actualizar jugador.
- `DELETE /players/:id`: Eliminar jugador.
- `GET /teams/:id/players`: Listar jugadores de un equipo.
