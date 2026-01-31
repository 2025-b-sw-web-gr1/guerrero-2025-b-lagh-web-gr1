# Proyecto 001 - Documentación con Swagger

Este proyecto extiende el examen anterior agregando documentación automática con Swagger (OpenAPI).

## Instalación

Instalar las dependencias del proyecto:

\`\`\`bash
npm install
\`\`\`

## Ejecución

Correr el servidor en modo desarrollo:

\`\`\`bash
npm run start:dev
\`\`\`

El servidor iniciará en \`http://localhost:3000\`.

## Documentación API

La documentación interactiva de la API está disponible en:

**[http://localhost:3000/api](http://localhost:3000/api)**

Desde allí se pueden probar todos los endpoints de Teams y Players.

## Endpoints Documentados

### Teams
- \`GET /teams\`: Obtener todos los equipos
- \`GET /teams/:id\`: Obtener un equipo
- \`POST /teams\`: Crear equipo (requiere body \`CreateTeamDto\`)
- \`PUT /teams/:id\`: Actualizar equipo (requiere body \`UpdateTeamDto\`)
- \`DELETE /teams/:id\`: Eliminar equipo
- \`GET /teams/:id/players\`: Ver jugadores de un equipo

### Players
- \`GET /players\`: Obtener todos los jugadores
- \`GET /players/:id\`: Obtener un jugador
- \`POST /players\`: Crear jugador (requiere body \`CreatePlayerDto\`)
- \`PUT /players/:id\`: Actualizar jugador (requiere body \`UpdatePlayerDto\`)
- \`DELETE /players/:id\`: Eliminar jugador
