const texto = "ControlCash";
const typed = document.getElementById("typed");
const cursor = document.getElementById("cursor");

const VELOCIDADE_DIGITAR = 100;
const VELOCIDADE_APAGAR = 60;
const PAUSA_COMPLETO = 5000;
const PAUSA_VAZIO = 800;

setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
}, 500);

function digitar(i = 0) {
    if (i <= texto.length) {
        typed.textContent = texto.slice(0, i);
        setTimeout(() => digitar(i + 1), VELOCIDADE_DIGITAR);
    } else {
        setTimeout(apagar, PAUSA_COMPLETO);
    }
}

function apagar(i = texto.length) {
    if (i >= 0) {
        typed.textContent = texto.slice(0, i);
        setTimeout(() => apagar(i - 1), VELOCIDADE_APAGAR);
    } else {
        setTimeout(() => digitar(), PAUSA_VAZIO);
    }
}

digitar();