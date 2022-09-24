const buttons = document.querySelectorAll('button');
const para = document.querySelector('p');

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
    } else if (computadora == 'Piedra' && jugador == 'Tijeras') { 
        para.textContent = `Gana la maquina! Piedra contra Tijeras`;
    } else if (computadora == 'Papel' && jugador == 'Piedra') {
        para.textContent = `La computadora gana! Papel sobre Piedra`;
    } else if (computadora == 'Papel' && jugador == 'Tijeras') { 
        para.textContent = `El jugador gana! Tijeras sobre Papel`;
    } else if (computadora == 'Tijeras' && jugador == 'Piedra') {
        para.textContent = `El jugador gana! Con una bella eleccion de Piedra`;
    } else if (computadora == 'Tijeras' && jugador == 'Papel') {
        para.textContent = `La computadora gana! Tijera puede a Papel`;
    } else {
        alert(`Algo salio mal, reintente. Fijese si su eleccion (${jugador}) es correspondiente a las opciones validas.`);
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(getComputerChoice, button.name);
    })
})











