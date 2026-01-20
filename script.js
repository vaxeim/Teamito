const LINK_FINAL = "https://mipreciosayyo.straw.page/";

/* Abrir / cerrar */
function abrirInsulto(){ modalInsulto.style.display="flex"; }
function abrirSeguro(){ modalSeguro.style.display="flex"; }
function cerrarModal(m){ m.style.display="none"; }

/* Seguro */
function mostrarApoco(){
    modalSeguro.style.display="none";
    modalApoco.style.display="flex";
}
function mostrarFinal(){
    modalSeguro.style.display="none";
    modalFinal.style.display="flex";
}

/* Validación input */
textoInsulto.addEventListener("input", ()=>{
    btnOk.disabled = textoInsulto.value.trim().length < 8;
});

/* Redirigir */
function redirigir(){
    window.location.href = LINK_FINAL;
}

/* Botón que huye (PC + móvil) */
let intentos = 0;
function moverBoton(){
    if(intentos >= 30) return;
    intentos++;
    const x = Math.random()*240 -120;
    const y = Math.random()*240 -120;
    btnEscapa.style.transform = `translate(${x}px,${y}px)`;
}
btnEscapa.addEventListener("mouseover", moverBoton);
btnEscapa.addEventListener("touchstart", moverBoton);
btnEscapa.addEventListener("touchmove", moverBoton);

/* Lluvia */
const palabras = [
 "Te amo muchote","Te adoro","Mi amor","Mi vida","Mi princesa",
 "Mi corazón","Eres lo mejor que me ha pasado","Me encantas","Muamuak",
 "Eres perfecta","Mi peshosha","Mi esposita",
 "Mi persona favorita","Te quiero muchote"
];

setInterval(()=>{
    const w=document.createElement("div");
    w.className="word";
    w.innerText=palabras[Math.floor(Math.random()*palabras.length)];
    w.style.left=Math.random()*window.innerWidth+"px";
    w.style.animationDuration=(6+Math.random()*6)+"s";
    document.body.appendChild(w);
    setTimeout(()=>w.remove(),12000);
},500);