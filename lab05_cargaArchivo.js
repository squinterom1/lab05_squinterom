// Obtén una referencia al elemento <select> y al <pre> donde se mostrará el contenido.
var archivoSelect = document.getElementById("archivoSelect");
var contenidoElement = document.getElementById("contenido");

// Agrega un evento para cargar el contenido cuando cambia la selección.
archivoSelect.addEventListener("change", function () {
    var archivoTxtURL = archivoSelect.value; // Obtiene el valor seleccionado.

    // Crear un objeto XMLHttpRequest para cargar el contenido del archivo.
    var xhr = new XMLHttpRequest();
    xhr.open("GET", archivoTxtURL, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Asigna el contenido del archivo al elemento <pre>.
            //contenidoElement.textContent = xhr.responseText;
            contenidoElement.innerHTML = xhr.responseText;
        }
    };

    // Envía la solicitud para cargar el archivo.
    xhr.send();
});
