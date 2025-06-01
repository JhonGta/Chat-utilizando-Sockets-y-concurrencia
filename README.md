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

### 1. Registro de Usuario

![Registro de Usuario](https://i.imgur.com/WFqGqfB.png)

En esta imagen se muestra la pantalla de inicio donde el primer usuario ingresa su nombre para acceder al chat. El formulario ha sido diseñado utilizando componentes de Bootstrap para lograr una interfaz limpia y moderna.

---

### 2. Primer Usuario Enviando un Mensaje

![Primer Mensaje](https://i.imgur.com/ETHHUFM.png)

Una vez registrado, el primer usuario accede al entorno del chat y envía su primer mensaje: "Hola". La interfaz simula el estilo de redes sociales como Twitter, con elementos estilizados mediante Bootstrap.

---

### 3. Segundo Usuario Ingresando al Chat

![Segundo Registro](https://i.imgur.com/pq2jjLx.png)

Aquí se muestra el momento en que un segundo usuario se registra ingresando su nombre, utilizando la misma pantalla de inicio basada en Bootstrap.

---

### 4. Interacción en Tiempo Real

![Interacción de Usuarios](https://i.imgur.com/7V7U21U.png)

Finalmente, se observa cómo ambos usuarios interactúan en tiempo real dentro del chat. Los mensajes aparecen instantáneamente gracias a la implementación de Sockets, y el diseño con Bootstrap asegura una visualización clara y responsiva.

## Conclusiones

Durante el desarrollo del proyecto "Chat en Tiempo Real con Sockets", se aprendió cómo funcionan las conexiones en tiempo real usando WebSockets, lo que permite que varios usuarios puedan chatear simultáneamente sin problemas. 

Además, se utilizó el framework Bootstrap para diseñar una interfaz limpia, moderna y fácil de usar, sin necesidad de crear estilos complejos desde cero. Bootstrap ayudó a que la aplicación se vea bien en diferentes dispositivos y a darle un estilo parecido a aplicaciones de mensajería conocidas.

Algunas dificultades fueron ajustar el diseño para que no se distorsionara y hacer que el chat se pareciera a apps reales, pero con pruebas y usando bien las clases de Bootstrap, se logró un resultado bastante bueno.

## Referencias

- Repositorio base del proyecto proporcionado por el docente: [https://github.com/paulosk8/webChat/tree/main](https://github.com/paulosk8/webChat/tree/main)
- Documentación oficial de Bootstrap 5: [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- Tutoriales y ejemplos de Socket.IO y chats en tiempo real encontrados en internet.

