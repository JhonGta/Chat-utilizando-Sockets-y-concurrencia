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
