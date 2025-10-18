# API de Tareas

## 1. Nombre completo – código
**Nombre:** Sthefania Narvaez Jimenez  
**Código:** 407492

---

## 2. Decisiones de diseño
La API fue desarrollada aplicando una arquitectura en capas siguiendo los principios de separación de responsabilidades.  
El **Router (Controller)** se encarga únicamente de manejar las peticiones HTTP, recibir datos y devolver respuestas, sin incluir lógica de negocio.  
El **Service** concentra la lógica principal: validaciones, reglas del dominio y orquestación de operaciones con el repositorio.  
El **Repository** encapsula el acceso a los datos, en este caso usando un almacenamiento en memoria, lo que permite sustituirlo fácilmente por una base de datos real sin modificar el resto del sistema.  
Además, se usaron modelos y DTOs para representar entidades y controlar la salida de datos, logrando un diseño modular, limpio y escalable.

---

## 3. Enlace de video
Adjunto en tarea classroom

En el video se explica:
a. Cómo correr el proyecto.  
b. Las decisiones de diseño implementadas.  
c. Pruebas de cada endpoint evidenciando su funcionamiento.
