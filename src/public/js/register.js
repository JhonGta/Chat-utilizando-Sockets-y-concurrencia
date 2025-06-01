const login = document.querySelector("#login");

login.addEventListener("click", () => {
  const user = document.querySelector("#username").value.trim();
  const avatar = document.querySelector("#avatar").value;

if (user && avatar) {
    document.cookie = `username=${user}`;
    document.cookie = `avatar=${avatar}`;
    document.location.href = "/";
  } else {
    alert("Por favor ingresa tu nombre y selecciona un avatar");
  }
});

// Vista previa del avatar
const avatarSelect = document.querySelector("#avatar");
const avatarPreview = document.querySelector("#avatar-preview");

avatarSelect.addEventListener("change", () => {
  avatarPreview.src = `/img/${avatarSelect.value}`;
});
