const tempoAtual = Date.now();
let IntervalId;

function Iniciar() {
    IntervalId = setInterval(Rodando, 1000);
}

function Rodando() {
    const cronometro = Date.now() - tempoAtual;

    let seg = Math.floor(cronometro / 1000);

    let min = 0;
    let hora = 0;
    let dia = 0;
    const containerDia = document.getElementById('container2');

    if (seg == 60) { min++; seg = 0; }
    else if (min == 60) { hora++; min = 0; }
    else if (hora == 24) { dia++; hora = 0; containerDia.style.opacity = "1"; containerDia.style.visibility = "visible"; }

    seg = seg < 10 ? "0" + seg : seg;
    min = min < 10 ? "0" + min : min;
    hora = hora < 10 ? "0" + hora : hora;

    var tempo = hora + ":" + min + ":" + seg;
    document.getElementById('crono').innerHTML = tempo;
};

function Parar() {
    clearInterval(IntervalId);
}