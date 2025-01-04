let tempoAtual = 0;
let IntervalId;
let tempoPausado = 0;
let verifica = true;

const regressivocaixa = document.getElementById('container-regr');
const botaoregressivo = document.getElementById('regressivo');
let hora_regr = document.getElementById('regr-hora');
let min_regr = document.getElementById('regr-min');
let seg_regr = document.getElementById('regr-seg');

botaoregressivo.addEventListener('click', function () {
    if (verifica) {
        onRegressivo();
        verifica = false;
    } else {
        offRegressivo();
        verifica = true;
    }
});

function onRegressivo() {
    botaoregressivo.style.backgroundColor = "DarkRed";
    regressivocaixa.style.opacity = "1";
    regressivocaixa.style.visibility = "visible";
}

function offRegressivo() {
    botaoregressivo.style.backgroundColor = "cadetblue";
    regressivocaixa.style.opacity = "0";
    regressivocaixa.style.visibility = "none";
}

function Iniciar() {
    tempoAtual = Date.now() - tempoPausado;
    if (verifica == false) {
        IntervalId = setInterval(ModoRegressivo, 1000);
    }

    else {
        IntervalId = setInterval(Rodando, 1000);
    }
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

function ModoRegressivo() {
    hora = hora_regr.value;
    min = min_regr.value;
    seg = seg_regr.value;

    if (hora > 0) {
        if (min > 0) {
            if (seg > 0) {

                seg--;
            } else if (seg <= 0) {

                seg = 59;
                min--;
            }
        } else if (min <= 0) {
            if (seg <= 0 && hora > 0) {

                min = 59;
                seg = 59;
                hora--;
            }
        }
    } else if (hora <= 0 && min <= 0 && seg <= 0) {
        clearInterval(IntervalId);
    }

    hora = hora < 10 ? "0" + hora : hora;
    min = min < 10 ? "0" + min : min;
    seg = seg < 10 ? "0" + seg : seg;

    const tempo = hora + ":" + min + ":" + seg;
    document.getElementById('crono').innerHTML = tempo;
}