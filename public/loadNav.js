document.addEventListener("DOMContentLoaded", function() {
    fetch("../nav.html")  // Retrocede un nivel desde /public para acceder a nav.html
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
        })
        .catch(error => console.error('Error cargando el nav:', error));
});
