function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        document.getElementById("themeToggle").textContent = "☀︎";
    } else {
        document.getElementById("themeToggle").textContent = "☾";
    }
}
function toggleImage(img) {
  if (!img.dataset.original) {
        img.dataset.original = img.src;
    }
    if (img.src === img.dataset.original) {
        img.src = img.dataset.hover;
    } else {
        img.src = img.dataset.original;
    }
}
const formReserva = document.getElementById('formReserva');
const msgReserva = document.getElementById('mensagemReserva');
const nomeCliente = document.getElementById('nome');

formReserva.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('name').value;
    nomeCliente.textContent = nome;
    msgReserva.style.display = 'block';
    formReserva.reset();
});