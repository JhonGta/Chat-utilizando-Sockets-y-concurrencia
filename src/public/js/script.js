const socket = io();

const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");

send.addEventListener("click", () => {
  const message = document.querySelector("#message");
  socket.emit("message", message.value);
  message.value = "";
});

socket.on("message", ({ user, message }) => {
  const msg = document.createRange().createContextualFragment(`
    <div class="d-flex align-items-start mb-3">
      <img src="/img/perfil.jpg" class="rounded-circle me-2" style="width: 40px; height: 40px;" />
      <div>
        <div class="fw-bold">${user} <small class="text-muted">• ahora</small></div>
        <div class="bg-light border rounded p-2 mt-1">${message}</div>
      </div>
    </div>
  `);
  allMessages.append(msg);
});
