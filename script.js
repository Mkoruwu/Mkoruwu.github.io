function checkPassword() {
    var password = document.getElementById("passwordInput").value;

    if (password.toLowerCase() === "coraline") {
        window.location.href = "flor.html"; // Cambia "otra_pagina.html" por la URL de la otra página
    } else {
        var errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = "¡un gato negro es una buena pista!";
        errorMessage.style.display = "block";
    }
}
