# Chat en Tiempo Real con Sockets

**Estudiante:** Jhon Guamán  
**Universidad:** Universidad de las Fuerzas Armadas ESPE  
**Fecha de entrega:** 30 de mayo de 2025

---

## Introducción

Este proyecto consiste en la creación de un chat en tiempo real utilizando sockets para permitir la comunicación instantánea entre usuarios. Durante la práctica de laboratorio se le añadieron cinco nuevas funcionalidades que mejoraron la interacción entre los participantes: la selección de un avatar al registrarse, la visualización del avatar junto a cada mensaje enviado, la lista de usuarios conectados en tiempo real, un área en la interfaz que muestra el perfil del usuario activo (nombre y avatar), y un indicador que muestra cuándo otro usuario está escribiendo, además de notificaciones emergentes para nuevos mensajes. Estas mejoras se integraron manteniendo una estructura clara y moderna con el uso del framework Bootstrap, lo que permitió crear una experiencia visual más atractiva y funcional para el usuario.

---

## Repositorio Base

Este es el repositorio base del proyecto **Chat utilizando Sockets y concurrencia**, mantenido y gestionado por [JhonGta](https://github.com/JhonGta).

El desarrollo del proyecto se realiza en este repositorio propio, sin depender del repositorio proporcionado originalmente por el docente.

### Estructura de Ramas

- **main:** Rama principal del proyecto, contiene la versión estable.
- **feature-usuarios-conectados:** Rama de desarrollo donde se están implementando nuevas funcionalidades como la gestión de usuarios conectados.

---
## Implementación del Proyecto

- **Estructura del código:**  
  El proyecto está organizado en carpetas que separan la lógica del servidor, las rutas, los archivos públicos (CSS, JS, imágenes) y las vistas HTML.  
  Se utiliza Socket.IO para manejar la comunicación en tiempo real entre clientes y servidor, permitiendo enviar y recibir mensajes al instante.  
  Los eventos personalizados gestionan la conexión de usuarios, el envío de mensajes, la notificación cuando alguien está escribiendo, y la actualización dinámica de usuarios conectados.

- **Mejoras en el diseño:**  
  Con el uso de Bootstrap se logró una interfaz limpia, moderna y responsiva.  
  Se implementó un sistema visual para mostrar el nombre y avatar del usuario en la parte superior del chat.  
  También se mejoró la presentación de los mensajes, mostrando el avatar del emisor junto a su contenido y una notificación tipo "toast" para avisar cuando llega un nuevo mensaje.

- **Nuevas funcionalidades agregadas:**  
  - Selección y previsualización de avatar durante el registro.  
  - Visualización del avatar del emisor en cada mensaje del chat.  
  - Lista de usuarios conectados que se actualiza en tiempo real.  
  - Visualización del perfil del usuario activo (nombre + avatar).  
  - Indicador de "usuario escribiendo..." visible por otros usuarios.

---

## Instrucciones de Ejecución

Para ejecutar este proyecto de chat en tiempo real en tu computadora, sigue estos pasos:

1. **Clonar el repositorio**

   Abre tu terminal y clona el repositorio base o el tuyo propio:

   ```bash
   git clone --branch feature-usuarios-conectados --single-branch https://github.com/JhonGta/Chat-utilizando-Sockets-y-concurrencia.git

2. **Entrar a la carpeta del proyecto**

   ```bash
   cd webChat

3. **Instalar las dependencias**

   Asegúrarse de tener instalado Node.js y npm. Luego, ejecutar:

   ```bash
   npm install

4. **Ejecutar el servidor**

   Correr el servidor con:

   ```bash
   npm start

5. **Abrir la aplicación en el navegador**

   Ir al navegador y abrir:

   ```bash
   http://localhost:3000
   

## Capturas de Pantalla

A continuación, se presentan algunas capturas del funcionamiento del chat en tiempo real mostrando las ultimas 5 funcionalidades que se aumentaron :

### 1. Registro de usuario con selección y vista previa del avatar

![Registro de usuario con selección y vista previa del avatar](https://i.imgur.com/s8WWsvg.png)

Captura de pantalla de la interfaz donde se ve el formulario de registro, en el que el usuario ingresa su nombre, elige un avatar y lo visualiza antes de ingresar al chat.

---

### 2. Interfaz principal del chat con usuario conectado y perfil visible

![Primer Mensaje](https://i.imgur.com/Is6aE2p.png)

Se observa el entorno del chat una vez que el usuario ha iniciado sesión, donde aparece su nombre y avatar en la parte superior derecha. También se ve al usuario listado en la sección de “Usuarios conectados”.

---

### 3. Registro de un nuevo usuario con selección de avatar 2

![Segundo Registro](https://i.imgur.com/FrhTZyK.png)

Registro de un segundo usuario, el cual elige un avatar diferente, demostrando que el sistema soporta múltiples sesiones con personalización única por usuario.

---

### 4. Indicador “escribiendo...” en tiempo real entre usuarios

![Interacción de Usuarios](https://i.imgur.com/kuTFJQn.png)

Se muestran dos ventanas abiertas en simultáneo, donde al escribir en una de ellas se activa el indicador “escribiendo...” en la otra, confirmando la correcta implementación de la detección de escritura en tiempo real.

---

### 5. Recepción de mensajes y notificación de nuevo mensaje

![Interacción de Usuarios](https://i.imgur.com/Ycrxpv0.png)

En esta imagen se visualiza la recepción de un nuevo mensaje enviado por otro usuario, acompañado de una notificación tipo toast en la parte inferior derecha que alerta sobre la llegada del nuevo mensaje.

## Conclusiones

- La adición de nuevas funcionalidades, como la selección y visualización de avatar, la notificación visual de nuevos mensajes, la lista dinámica de usuarios conectados y el indicador de usuario escribiendo, mejoró significativamente la experiencia de usuario, haciendo la aplicación más interactiva y cercana a los estándares de plataformas modernas de mensajería.

- El uso de Socket.IO permitió implementar comunicación en tiempo real de manera eficiente y estable, mientras que el manejo de cookies facilitó la persistencia de datos como el nombre de usuario y su avatar. Estas herramientas, combinadas con una arquitectura clara y bien estructurada, permitieron el desarrollo de una aplicación funcional y escalable.

- Bootstrap se utilizó estratégicamente para mantener una interfaz limpia, ordenada y completamente responsiva, lo que contribuyó a una experiencia de usuario coherente en diferentes dispositivos. La integración entre diseño y funcionalidad demostró la importancia de aplicar buenas prácticas tanto en frontend como en backend para lograr aplicaciones web completas.

## Referencias

- Repositorio base del proyecto (mantenido por el autor):  
  [https://github.com/JhonGta/Chat-utilizando-Sockets-y-concurrencia/tree/feature-usuarios-conectados](https://github.com/JhonGta/Chat-utilizando-Sockets-y-concurrencia/tree/feature-usuarios-conectados)

- Documentación oficial de Bootstrap 5:  
  [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

- Tutoriales y ejemplos de Socket.IO y chats en tiempo real encontrados en internet.


