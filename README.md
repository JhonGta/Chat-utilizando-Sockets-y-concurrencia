# Chat en Tiempo Real con Sockets

**Estudiante:** Jhon Guamán  
**Universidad:** Universidad de las Fuerzas Armadas ESPE  
**Fecha de entrega:** 30 de mayo de 2025

---

## Introducción

Este proyecto consiste en la creación de un chat en tiempo real utilizando sockets para permitir la comunicación instantánea entre usuarios.  
El propósito es implementar un sistema interactivo y dinámico que permita enviar y recibir mensajes de manera eficiente.

Para mejorar la interfaz de usuario, se utilizó el framework Bootstrap, logrando un diseño responsivo, moderno y limpio, similar a aplicaciones populares de mensajería, facilitando una mejor experiencia para los usuarios.

El uso de sockets es fundamental en aplicaciones en tiempo real como chats, ya que permiten una comunicación bidireccional y persistente entre cliente y servidor, logrando una experiencia fluida e inmediata para los usuarios.

---

## Repositorio Base

El repositorio base proporcionado por el docente se encuentra en:  
[https://github.com/paulosk8/webChat/tree/main](https://github.com/paulosk8/webChat/tree/main)  

Se debe clonar este repositorio o crearlo desde cero, y trabajar sobre las ramas existentes:  

- **Rama principal:** Código inicial.  
- **Rama implementacion-chat:** Versión final del proyecto proporcionada como referencia.

---

## Implementación del Proyecto

- **Estructura del código:**  
  El proyecto está organizado en carpetas claras que separan la lógica del servidor, las rutas, los middlewares, los archivos públicos (CSS, JS, imágenes) y las vistas HTML.  
  El servidor utiliza Socket.IO para manejar la comunicación en tiempo real entre los clientes y el servidor.  
  Los eventos de envío y recepción de mensajes se gestionan mediante sockets, actualizando la interfaz del chat dinámicamente sin necesidad de recargar la página.

- **Mejoras en el diseño:**  
  Se utilizó Bootstrap para darle un estilo moderno, responsivo y limpio a la interfaz del chat y del formulario de registro.  
  Se mejoró la visualización de los mensajes, con un diseño similar a aplicaciones de mensajería reconocidas, cuidando los tamaños de los elementos y colores, para que la experiencia sea agradable y funcional.  
  El encabezado y las secciones están estilizadas con colores personalizados y se mantiene una estructura coherente en todas las páginas.

- **Características adicionales:**  
  Integración de avatar por defecto en los mensajes.  
  Botón de envío funcional con eventos click.  
  Mensajes desplegados en orden con formato amigable.  

---

## Instrucciones de Ejecución

Para ejecutar este proyecto de chat en tiempo real en tu computadora, sigue estos pasos:

1. **Clonar el repositorio**

   Abre tu terminal y clona el repositorio base o el tuyo propio:

   ```bash
   git clone https://github.com/paulosk8/webChat.git

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

A continuación, se presentan algunas capturas del funcionamiento del chat en tiempo real utilizando Sockets y la interfaz basada en Bootstrap:

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

