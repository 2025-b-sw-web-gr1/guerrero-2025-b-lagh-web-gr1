<<<<<<< HEAD
# Proyecto 001 - Documentación con Swagger

Este proyecto extiende el examen anterior agregando documentación automática con Swagger (OpenAPI).

## Instalación

Instalar las dependencias del proyecto:

```bash
npm install
```

## Ejecución

Correr el servidor en modo desarrollo:

```bash
npm run start:dev
```

El servidor iniciará en `http://localhost:3000`.

## Documentación API

La documentación interactiva de la API está disponible en:

**[http://localhost:3000/api](http://localhost:3000/api)**

Desde allí se pueden probar todos los endpoints de Teams y Players.

## Endpoints Documentados

### Teams
- `GET /teams`: Obtener todos los equipos
- `GET /teams/:id`: Obtener un equipo
- `POST /teams`: Crear equipo (requiere body `CreateTeamDto`)
- `PUT /teams/:id`: Actualizar equipo (requiere body `UpdateTeamDto`)
- `DELETE /teams/:id`: Eliminar equipo
- `GET /teams/:id/players`: Ver jugadores de un equipo

### Players
- `GET /players`: Obtener todos los jugadores
- `GET /players/:id`: Obtener un jugador
- `POST /players`: Crear jugador (requiere body `CreatePlayerDto`)
- `PUT /players/:id`: Actualizar jugador (requiere body `UpdatePlayerDto`)
- `DELETE /players/:id`: Eliminar jugador
=======
# Clase 9 Proyecto - API Equipos y Jugadores

## Descripción
API RESTful que modela una relación **1-a-muchos** entre **Equipos** y **Jugadores**. Un equipo puede tener muchos jugadores, pero cada jugador pertenece a un solo equipo.

## Modelo de Datos

### Equipo (Team)
- `id`: ID único del equipo
- `name`: Nombre del equipo
- `country`: País del equipo
- `foundedYear`: Año de fundación
- `stadium`: Nombre del estadio
- `coach`: Nombre del entrenador

### Jugador (Player)
- `id`: ID único del jugador
- `name`: Nombre del jugador
- `position`: Posición (Delantero, Centrocampista, Defensa, Portero)
- `number`: Número de camiseta
- `nationality`: Nacionalidad
- `age`: Edad
- `teamId`: **Clave foránea** que relaciona el jugador con su equipo

## Relación 1-a-Muchos

```
Team (1) ----< Player (Muchos)

Un equipo tiene muchos jugadores
Cada jugador pertenece a un solo equipo
```

## Endpoints

### Equipos
- `GET /teams` - Obtener todos los equipos
- `GET /teams/{id}` - Obtener un equipo por ID
- `POST /teams` - Crear un nuevo equipo
- `PUT /teams/{id}` - Actualizar un equipo
- `DELETE /teams/{id}` - Eliminar un equipo

### Jugadores
- `GET /players` - Obtener todos los jugadores
- `GET /players/{id}` - Obtener un jugador por ID
- `GET /teams/{id}/players` - **Obtener jugadores de un equipo específico** (endpoint clave de relación)
- `POST /players` - Crear un nuevo jugador (requiere `teamId`)
- `PUT /players/{id}` - Actualizar un jugador
- `DELETE /players/{id}` - Eliminar un jugador

## Estructura del Proyecto

```
clase-9-proyecto/
├── bruno.json                  # Configuración de colección Bruno
├── swagger.yaml                # Documentación Swagger/OpenAPI
├── DOCUMENTACION.txt           # Enlace a documentación externa
├── README.md                   # Este archivo
│
├── Endpoints de Equipos (5):
│   ├── get-all-teams.bru
│   ├── get-team-by-id.bru
│   ├── create-team.bru
│   ├── update-team.bru
│   └── delete-team.bru
│
└── Endpoints de Jugadores (6):
    ├── get-all-players.bru
    ├── get-player-by-id.bru
    ├── get-players-by-team.bru    # Endpoint de relación 1-muchos
    ├── create-player.bru
    ├── update-player.bru
    └── delete-player.bru
```

## Uso con Bruno

1. Abrir Bruno y cargar la colección desde `clase-9-proyecto/`
2. Los archivos `.bru` representan peticiones HTTP individuales
3. Usar los endpoints en este orden:
   - Crear equipos primero
   - Crear jugadores asociados a equipos existentes
   - Consultar jugadores de un equipo con `/teams/{id}/players`

## Documentación Swagger

El archivo `swagger.yaml` contiene la especificación OpenAPI 3.0 completa. Puedes visualizarla en:
- [Swagger Editor](https://editor.swagger.io/)
- [Swagger UI](https://petstore.swagger.io/)

## Conceptos RESTful Aplicados

✅ **Recursos identificados**: `/teams` y `/players`  
✅ **Métodos HTTP**: GET, POST, PUT, DELETE  
✅ **Códigos de estado**: 200, 201, 204, 400, 404  
✅ **Relación 1-a-muchos**: Endpoint anidado `/teams/{id}/players`  
✅ **Clave foránea**: `teamId` en Player  
✅ **Documentación completa**: Swagger/OpenAPI + Bruno

## Autor
Guerrero 2025B - Construcción y Evolución de Aplicaciones Frontend
>>>>>>> aa812926d4c2ed791cac22f105eb9ec50387f0df
