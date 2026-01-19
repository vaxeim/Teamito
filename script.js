function abrirInsulto() {
  document.getElementById("modalInsulto").style.display = "flex";
}

function abrirSeguro() {
  alert("No acepto esa respuesta");
}

function abrirEntonces() {
  document.getElementById("modalInsulto").style.display = "none";
  document.getElementById("modalEntonces").style.display = "flex";
}

function mostrarApoco() {
  document.getElementById("modalEntonces").style.display = "none";
  document.getElementById("modalApoco").style.display = "flex";
}

function mostrarFinal() {
  document.getElementById("modalEntonces").style.display = "none";
  document.getElementById("modalFinal").style.display = "flex";
}

function cerrarTodo() {
  document.querySelectorAll(".modal").forEach(m => m.style.display = "none");
}

/* LLUVIA DE PALABRAS */
const palabras = [
  "Te amo",
  "Mi niña",
  "Mi amor",
  "Mi vida",
  "Corazón"
];

setInterval(() => {
  const w = document.createElement("div");
  w.className = "word";
  w.innerText = palabras[Math.floor(Math.random() * palabras.length)];
  w.style.left = Math.random() * window.innerWidth + "px";
  w.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.body.appendChild(w);
  setTimeout(() => w.remove(), 10000);
}, 600);
