function abrirCuestionario() {
    document.getElementById("modalCuestionario").style.display = "flex";
}

function respuestaCorrectaAnimada() {
    const modal = document.getElementById("cuestionarioContent");
    modal.classList.add("temblor", "expandir-amor");

    setTimeout(() => {
        window.location.href = "https://mipreciosayyo.straw.page/";
    }, 3500);
}

function respuestaIncorrecta() {
    document.getElementById("modalCuestionario").style.display = "none";
    document.getElementById("modalError").style.display = "flex";
}

function cerrarError() {
    document.getElementById("modalError").style.display = "none";
}

function abrirSeguro() {
    document.getElementById("modalSeguro").style.display = "flex";
}

function mostrarImagen() {
    document.getElementById("modalSeguro").style.display = "none";
    document.getElementById("modalImagen").style.display = "flex";
}

function mostrarFinal() {
    document.getElementById("modalSeguro").style.display = "none";
    document.getElementById("modalFinal").style.display = "flex";
}

function cerrarImagen() {
    document.getElementById("modalImagen").style.display = "none";
}

function cerrarFinal() {
    document.getElementById("modalFinal").style.display = "none";
}

const palabras = [
    "Te amo",
    "Mi princesa",
    "Mi vida",
    "Eres mi amor",
    "Mi guapota",
    "Mi niña",
    "Mi hermosa",
    "Mi mujer"
    "Miamiamiamia",
    "Mi preciosa"
];

setInterval(() => {
    const w = document.createElement("div");
    w.className = "word";
    w.innerText = palabras[Math.floor(Math.random() * palabras.length)];
    w.style.left = Math.random() * window.innerWidth + "px";
    w.style.animationDuration = (6 + Math.random() * 6) + "s";
    document.body.appendChild(w);

    setTimeout(() => w.remove(), 12000);
}, 600);
