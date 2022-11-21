/* Objeter los elementos del DOM */

const resultado1 = document.getElementById("resultado1");
const btnEnviar1 = document.getElementById("btnEjercicio1");

btnEnviar1.onclick = function(){
    let nota1 = 16;
    let nota2 = 18;
    let nota3 = 17;
    let nota4 = 18;
    let prom = (nota1 + nota2 + nota3 + nota4)/4;
    resultado1.innerText = prom.toFixed(2);
}

const resultado2 = document.getElementById("resultado2");
const btnEnviar2 = document.getElementById("btnEjercicio2");

btnEnviar2.onclick = function(){
    let sb = 1800;
    let descuento = sb * 0.05;
    let neto = sb - descuento;

    resultado2.innerText = neto.toFixed(2);
}

const votosA = document.getElementById("votosA");
const porA = document.getElementById("porcentajeA");

const votosB = document.getElementById("votosB");
const porB = document.getElementById("porcentajeB");

const votosN = document.getElementById("votosN");
const porN = document.getElementById("porcentajeN");

const btnEnviar3 = document.getElementById("btnEjercicio3");


btnEnviar3.onclick = function(){
    let va = 180;
    let vb = 75;
    let vn = 42;

    let totalv = va + vb + vn;

    let pa = va / totalv;
    let pb = vb / totalv;
    let pn = vn / totalv;

    votosA.innerText = va;
    porA.innerText = (pa * 100).toFixed(2) + "%";

    votosB.innerText = vb;
    porB.innerText = pb;

    votosN.innerText = vn;
    porN.innerText = pn;

}