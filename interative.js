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