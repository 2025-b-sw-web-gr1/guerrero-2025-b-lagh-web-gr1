# Examen Web - API RESTful NestJS

Este proyecto implementa una API RESTful para gestionar Equipos y Jugadores usando NestJS y SQLite.

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

## Endpoints

### Teams (Equipos)

- **Obtener todos los equipos:**
  ```bash
  curl -X GET http://localhost:3000/teams
  ```

- **Obtener un equipo por ID:**
  ```bash
  curl -X GET http://localhost:3000/teams/1
  ```

- **Crear un equipo:**
  ```bash
  curl -X POST http://localhost:3000/teams -H "Content-Type: application/json" -d "{\"name\":\"FC Barcelona\", \"country\":\"Spain\"}"
  ```

- **Actualizar un equipo:**
  ```bash
  curl -X PUT http://localhost:3000/teams/1 -H "Content-Type: application/json" -d "{\"name\":\"Barca Updated\"}"
  ```

- **Eliminar un equipo:**
  ```bash
  curl -X DELETE http://localhost:3000/teams/1
  ```

- **Obtener jugadores de un equipo:**
  ```bash
  curl -X GET http://localhost:3000/teams/1/players
  ```

### Players (Jugadores)

- **Obtener todos los jugadores:**
  ```bash
  curl -X GET http://localhost:3000/players
  ```

- **Obtener un jugador por ID:**
  ```bash
  curl -X GET http://localhost:3000/players/1
  ```

- **Crear un jugador:**
  (Asegúrate de tener un equipo con ID 1 primero)
  ```bash
  curl -X POST http://localhost:3000/players -H "Content-Type: application/json" -d "{\"name\":\"Lionel Messi\", \"position\":\"Forward\", \"team\": {\"id\": 1}}"
  ```

- **Actualizar un jugador:**
  ```bash
  curl -X PUT http://localhost:3000/players/1 -H "Content-Type: application/json" -d "{\"position\":\"Midfielder\"}"
  ```

- **Eliminar un jugador:**
  ```bash
  curl -X DELETE http://localhost:3000/players/1
  ```
