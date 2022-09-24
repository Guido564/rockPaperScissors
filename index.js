let computadoraPuntaje = 0;
let jugadorPuntaje = 0;

function getComputerChoice() {
    let eleccion = Math.floor(Math.random() * 3) + 1;

    if (eleccion == 1) {
        return 'Piedra';
    } else if (eleccion == 2) {
        return 'Papel';
    } else if (eleccion == 3) {
        return 'Tijera';
    }
} 

function getPlayerChoice() {
    let eleccion = prompt('Elija un numero del 1 al 3 (1. Piedra | 2. Papel | 3. Tijera)');

    if (eleccion == 1) {
        return 'Piedra';
    } else if (eleccion == 2) {
        return 'Papel';
    } else if (eleccion == 3) {
        return 'Tijera';
    } else {
        return eleccion;
    }
}

function playRound(getComputerChoice, getPlayerChoice) {
    let computadora = getComputerChoice();
    let jugador = getPlayerChoice();

    if (computadora == 'Piedra' && jugador == 'Piedra') {
        alert('Empate! Ambos eligieron Piedra');
    } else if (computadora == 'Piedra' && jugador == 'Papel') {
        alert('El jugador gana! El Papel puede por sobre la Piedra');
        jugadorPuntaje += 1;
    } else if (computadora == 'Piedra' && jugador == 'Tijera') { 
        alert('Gana la maquina! Piedra contra Tijera');
        computadoraPuntaje += 1;
    }

    else if (computadora == 'Papel' && jugador == 'Piedra') {
        alert('La computadora gana! Papel sobre Piedra');
        computadoraPuntaje += 1;
    } else if (computadora == 'Papel' && jugador == 'Papel') {
        alert('Empate! Ambos tuvieron el valor de elegir Papel');
    } else if (computadora == 'Papel' && jugador == 'Tijera') { 
        alert('El jugador gana! Tijera sobre Papel');
        jugadorPuntaje += 1;
    }

    else if (computadora == 'Tijera' && jugador == 'Piedra') {
        alert('El jugador gana! Con una bella eleccion de Piedra')
        jugadorPuntaje += 1;
    } else if (computadora == 'Tijera' && jugador == 'Papel') {
        alert('La computadora gana! Tijera puede a Papel');
        computadoraPuntaje += 1;
    } else if (computadora == 'Tijera' && jugador == 'Tijera') { 
        alert('Empate! Dos tijeras, pongale onda');
    } 
    
    else {
        alert(`Algo salio mal, reintente. Fijese si su eleccion (${jugador}) es correspondiente a las opciones validas.`);
    }
}

function play5Rounds(playRound) {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice, getPlayerChoice);
    }

    if (jugadorPuntaje > computadoraPuntaje) {
        alert(`El jugador gana con una puntacion de ${jugadorPuntaje} dejando atras a la maquina que se lleva ${computadoraPuntaje} punto/s. Felicitaciones!`);
    } else if (computadoraPuntaje > jugadorPuntaje) {
        alert(`Lamentablemente la computadora ha ganado con una puntacion de ${computadoraPuntaje} contra tu/s ${jugadorPuntaje} punto/s. Mucha suerte para la proxima!`);
    } else {
        alert(`Oh no! Hemos recibido un empate de ${jugadorPuntaje} punto/s de tu parte y ${computadoraPuntaje} punto/s de tu rival. No odias cuando eso pasa?`);
    }
}

play5Rounds(playRound);











