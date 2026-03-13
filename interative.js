function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        document.getElementById("themeToggle").textContent = "☀︎";
    } else {
        document.getElementById("themeToggle").textContent = "☾";
    }
}