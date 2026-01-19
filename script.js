const LINK_FINAL = "https://mipreciosayyo.straw.page/";

function abrirInsulto() {
    document.getElementById("modalInsulto").style.display = "flex";
}

function abrirNo() {
    document.getElementById("modalNo").style.display = "flex";
}

function mostrarImagenNo() {
    cerrarModal("modalNo");
    document.getElementById("modalImagenNo").style.display = "flex";
}

function mostrarImagenSi() {
    cerrarModal("modalNo");
    document.getElementById("modalImagenSi").style.display = "flex";
}

function irAlLink() {
    window.location.href = LINK_FINAL;
}

function cerrarModal(id) {
    document.getElementById(id).style.display = "none";
}

const palabras = [
    "Te amo",
    "Mi princesa",
    "Mi vida",
    "Eres mi amor",
    "Mi preciosa",
    "Mi niña",
    "Mi linda",
    "Mi Mujer",
    "Amor bonito"
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
