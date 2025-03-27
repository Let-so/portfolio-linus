document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    // Verificar si el usuario ya tiene un modo guardado en LocalStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "Modo claro";
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        console.log("Hola")
        // Guardar la preferencia en LocalStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleButton.textContent = "Modo claro";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleButton.textContent = "Modo oscuro";
        }
    });
});
