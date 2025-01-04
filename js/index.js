let tempoAtual = 0;
let IntervalId;
let tempoPausado = 0;

function Iniciar() {
    tempoAtual = Date.now() - tempoPausado;
    IntervalId = setInterval(Rodando, 1000);
}

function Rodando() {
    const cronometro = Date.now() - tempoAtual;

    let seg = Math.floor(cronometro / 1000);
    let min = 0;
    let hora = 0;
    let dia = 0;
    const containerDia = document.getElementById('container2');

    if (seg >= 60) {
        min = Math.floor(seg / 60);
        seg = seg % 60;
    }
    if (min >= 60) {
        hora = Math.floor(min / 60);
        min = min % 60;
    }
    if (hora >= 24) {
        dia = Math.floor(hora / 24);
        hora = hora % 24;
        containerDia.style.opacity = "1";
        containerDia.style.visibility = "visible";
    }

    seg = seg < 10 ? "0" + seg : seg;
    min = min < 10 ? "0" + min : min;
    hora = hora < 10 ? "0" + hora : hora;

    const tempo = hora + ":" + min + ":" + seg;
    document.getElementById('crono').innerHTML = tempo;
}

function Parar() {
    clearInterval(IntervalId);
    tempoPausado = Date.now() - tempoAtual;
}

function Reiniciar() {
    clearInterval(IntervalId);
    tempoAtual = 0;
    document.getElementById('crono').innerHTML = "00:00:00";
}