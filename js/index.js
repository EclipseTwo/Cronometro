let tempoAtual = 0;
let IntervalId;
let tempoPausado = 0;
let verifica = true;

const regressivocaixa = document.getElementById('container-regr');
const botaoregressivo = document.getElementById('regressivo');

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

    let horaRegra = document.getElementById('regr-hora');
    let minRegra = document.getElementById('regr-min');
    let segRegra = document.getElementById('regr-seg');

    if (horaRegra.value > 0) {
        if (minRegra.value > 0) {
            if (segRegra.value > 0) {
                segRegra.value--;
            } else if (segRegra.value <= 0) {
                segRegra.value = 59;
                minRegra.value--;
            }
        } else if (minRegra.value <= 0) {
            if (segRegra.value <= 0 && horaRegra.value > 0) {
                minRegra.value = 59;
                segRegra.value = 59;
                horaRegra.value--;
            }
        }
    } else if (horaRegra.value <= 0 && minRegra.value <= 0 && segRegra.value <= 0) {
        clearInterval(IntervalId);
    }

    horaRegra.value = horaRegra.value < 10 ? "0" + horaRegra.value : horaRegra.value;
    minRegra.value = minRegra.value < 10 ? "0" + minRegra.value : minRegra.value;
    segRegra.value = segRegra.value < 10 ? "0" + segRegra.value : segRegra.value;

    const tempo = horaRegra.value + ":" + minRegra.value + ":" + segRegra.value;

    document.getElementById('crono').innerHTML = tempo;
}