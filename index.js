const buttons = document.querySelectorAll('button');
const para = document.querySelector('p');
const jugadorSpan = document.getElementById('jugador');
const computadoraSpan = document.getElementById('computador');

let jugadorScore = 0;
let computadoraScore = 0;

function puntuacion(ganador, score){
    if (jugadorScore > 5 || computadoraScore > 5) {
        alert(`El ganador de este super torneo es el ${ganador.id}! Para volver a jugar presione Ok`);
        jugadorScore = 0;
        computadoraScore = 0;
        jugadorSpan.textContent = '-';
        computadoraSpan.textContent = '-';
    } else {
        ganador.textContent = score;
    }
    
}


function getComputerChoice() {
    let eleccion = Math.floor(Math.random() * 3) + 1;

    if (eleccion == 1) {
        return 'Piedra';
    } else if (eleccion == 2) {
        return 'Papel';
    } else if (eleccion == 3) {
        return 'Tijeras';
    }
} 

function playRound(getComputerChoice, eleccion) {
    let computadora = getComputerChoice();
    let jugador = eleccion;
    
    if (computadora == jugador) {
        para.textContent = `Empate! Ambos eligieron ${jugador}`;
    } else if (computadora == 'Piedra' && jugador == 'Papel') {
        para.textContent = `El jugador gana! El Papel puede por sobre la Piedra`;
        jugadorScore += 1;
        puntuacion(jugadorSpan, jugadorScore);
    } else if (computadora == 'Piedra' && jugador == 'Tijeras') { 
        para.textContent = `Gana la maquina! Piedra contra Tijeras`;
        computadoraScore += 1;
        puntuacion(computadoraSpan, computadoraScore);
    } else if (computadora == 'Papel' && jugador == 'Piedra') {
        para.textContent = `La computadora gana! Papel sobre Piedra`;
        computadoraScore += 1;
        puntuacion(computadoraSpan, computadoraScore);
    } else if (computadora == 'Papel' && jugador == 'Tijeras') { 
        para.textContent = `El jugador gana! Tijeras sobre Papel`;
        jugadorScore += 1;
        puntuacion(jugadorSpan, jugadorScore);
    } else if (computadora == 'Tijeras' && jugador == 'Piedra') {
        para.textContent = `El jugador gana! Con una bella eleccion de Piedra`;
        jugadorScore += 1;
        puntuacion(jugadorSpan, jugadorScore);
    } else if (computadora == 'Tijeras' && jugador == 'Papel') {
        para.textContent = `La computadora gana! Tijera puede a Papel`;
        computadoraScore += 1;
        puntuacion(computadoraSpan, computadoraScore);
    } else {
        alert(`Algo salio mal, reintente. Fijese si su eleccion (${jugador}) es correspondiente a las opciones validas.`);
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(getComputerChoice, button.name);
    })
})











