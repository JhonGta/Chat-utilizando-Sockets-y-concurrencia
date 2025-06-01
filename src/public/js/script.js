const socket = io();

const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");
const messageInput = document.querySelector("#message");

// Función para obtener cookie por nombre
function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

// Enviar mensaje
send.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message !== "") {
    socket.emit("message", message);
    messageInput.value = "";
    socket.emit("stopTyping");
  }
});

// Mostrar mensaje recibido con avatar de la cookie
socket.on("message", ({ user, message }) => {
  const avatar = getCookie("avatar") || "perfil1.jpg"; // avatar por defecto si no hay cookie
  const msg = document.createRange().createContextualFragment(`
    <div class="d-flex align-items-start mb-3">
      <img src="/img/${avatar}" class="rounded-circle me-2" style="width: 40px; height: 40px;" />
      <div>
        <div class="fw-bold">${user} <small class="text-muted">• ahora</small></div>
        <div class="bg-light border rounded p-2 mt-1">${message}</div>
      </div>
    </div>
  `);
  allMessages.append(msg);

  // Mostrar notificación tipo toast
  const toastElement = document.getElementById("toast-notification");
  const toastBody = toastElement.querySelector(".toast-body");
  toastBody.textContent = `📨 Nuevo mensaje de ${user}`;
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
});

// Mostrar usuarios conectados
socket.on("users", (users) => {
  const userList = document.querySelector("#user-list");
  userList.innerHTML = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = user;
    userList.appendChild(li);
  });
});

// Indicador de "escribiendo..."
const typing = document.createElement("div");
typing.id = "typing";
typing.className = "text-muted fst-italic mt-2";
typing.textContent = "";
allMessages.parentNode.insertBefore(typing, allMessages.nextSibling);

let typingTimeout;

messageInput.addEventListener("input", () => {
  socket.emit("typing");

  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    socket.emit("stopTyping");
  }, 1000);
});

socket.on("userTyping", (username) => {
  typing.textContent = `💬 ${username} está escribiendo...`;
});

socket.on("userStopTyping", () => {
  typing.textContent = "";
});
// Función para obtener cookie por nombre
function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

// Mostrar nombre y avatar del usuario actual
window.addEventListener("DOMContentLoaded", () => {
  const username = getCookie("username") || "Usuario";
  const avatar = getCookie("avatar") || "perfil1.jpg";

  const nameElement = document.querySelector("#user-name");
  const avatarElement = document.querySelector("#user-avatar");

  if (nameElement && avatarElement) {
    nameElement.textContent = username;
    avatarElement.src = `/img/${avatar}`;
  }
});
