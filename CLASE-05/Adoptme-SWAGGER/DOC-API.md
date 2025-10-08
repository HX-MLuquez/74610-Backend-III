# Documentación de la API de Adoptme

Esta documentación describe los endpoints disponibles en la API de Adoptme, una plataforma para la adopción de mascotas. La API permite a los usuarios ver, agregar, actualizar y eliminar información sobre mascotas disponibles para adopción.

## Base URL

La base URL para todos los endpoints es:

```
https://api.adoptme.com/v1
```

## Endpoints

### 1. Obtener todas las mascotas

- **Endpoint:** `/pets`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de todas las mascotas disponibles para adopción.
- **Parámetros de consulta (opcional):**
  - `type`: Filtra las mascotas por tipo (e.g., perro, gato).
  - `age`: Filtra las mascotas por edad (e.g., cachorro, adulto).
- **Respuesta exitosa (200 OK):**

```json
[
  {
    "id": 1,
    "name": "Fido",
    "type": "perro",
    "age": "cachorro",
    "description": "Un perro amigable y juguetón."
  },
  {
    "id": 2,
    "name": "Mittens",
    "type": "gato",
    "age": "adulto",
    "description": "Un gato tranquilo y cariñoso."
  }
]
```

### 2. Obtener una mascota por ID

- **Endpoint:** `/pets/{id}`
- **Método:** `GET`
- **Descripción:** Obtiene los detalles de una mascota específica por su ID.
- **Parámetros de ruta:**
  - `id`: El ID de la mascota.
- **Respuesta exitosa (200 OK):**

```json
{
  "id": 1,
  "name": "Fido",
  "type": "perro",
  "age": "cachorro",
  "description": "Un perro amigable y juguetón."
}
```

- **Respuesta de error (404 Not Found):**

```json
{
  "error": "Mascota no encontrada"
}
```

### 3. Agregar una nueva mascota

- **Endpoint:** `/pets`
- **Método:** `POST`
- **Descripción:** Agrega una nueva mascota a la lista de mascotas disponibles para adopción.
- **Cuerpo de la solicitud:**

```json
{
  "name": "Luna",
  "type": "gato",
  "age": "cachorro",
  "description": "Una gata juguetona y curiosa."
}
```

- **Respuesta exitosa (201 Created):**

```json
{
  "id": 3,
  "name": "Luna",
  "type": "gato",
  "age": "cachorro",
  "description": "Una gata juguetona y curiosa."
}
```

- **Respuesta de error (400 Bad Request):**

```json
{
  "error": "Datos inválidos"
}
```

### 4. Actualizar una mascota existente

- **Endpoint:** `/pets/{id}`
- **Método:** `PUT`
- **Descripción:** Actualiza la información de una mascota existente.
- **Parámetros de ruta:**
  - `id`: El ID de la mascota a actualizar.
- **Cuerpo de la solicitud:**

```json
{
  "name": "Fido",
  "type": "perro",
  "age": "adulto",
  "description": "Un perro amigable y protector."
}
```

- **Respuesta exitosa (200 OK):**

```json
{
  "id": 1,
  "name": "Fido",
  "type": "perro",
  "age": "adulto",
  "description": "Un perro amigable y protector."
}
```

- **Respuesta de error (400 Bad Request):**

```json
{
  "error": "Datos inválidos"
}
```

- **Respuesta de error (404 Not Found):**

```json
{
  "error": "Mascota no encontrada"
}
```

### 5. Eliminar una mascota

- **Endpoint:** `/pets/{id}`
- **Método:** `DELETE`
- **Descripción:** Elimina una mascota de la lista de mascotas disponibles para adopción.
- **Parámetros de ruta:**
  - `id`: El ID de la mascota a eliminar.
- **Respuesta exitosa (204 No Content):** La mascota fue eliminada exitosamente.
- **Respuesta de error (404 Not Found):**

```json
{
  "error": "Mascota no encontrada"
}
```

## Autenticación

Actualmente, la API de Adoptme no requiere autenticación para acceder a los endpoints públicos. Sin embargo, se recomienda implementar autenticación en futuras versiones para proteger los datos sensibles.

## Contacto

Para cualquier consulta o soporte relacionado con la API de Adoptme, por favor contacta a support@adoptme.com

## Versiones

- **v1.0.0:** Versión inicial de la API con funcionalidades básicas para
  gestionar mascotas.
- **v1.1.0:** Añadida funcionalidad de filtrado en el endpoint de obtener todas las mascotas.
- **v1.2.0:** Mejoras en la validación de datos y manejo
  de errores.

## Notas

- Asegúrate de manejar adecuadamente los códigos de estado HTTP en tus solicitudes.
- Los datos de las mascotas deben ser validados antes de enviarlos a la API para evitar errores.
- Esta documentación está sujeta a cambios; por favor, revisa regularmente para obtener las últimas
  actualizaciones.
- La API está diseñada para ser RESTful, siguiendo las mejores prácticas de diseño de APIs.
