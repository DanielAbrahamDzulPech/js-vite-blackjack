// import { shuffle } from 'underscore';

// tomamos todo el paquete y renombramos
import _ from 'underscore';
//comentado
// import { crearDeck } from './usecases/crear-deck';

// import { crearDeck, a } from './usecases/crear-deck';
// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck';
// import cualquierNombreParaCrearUnNuevoDeck from './usecases/crear-deck'; // - 2 export default crearDeck;
// import crearDeck, { miNombre } from './usecases/crear-deck'; // - 2 export default crearDeck con exportaciones individuales;
// console.log(miNombre);

//comentado
// import { pedirCarta } from './usecases/pedir-carta';
// import { valorCarta } from './usecases/valor-carta';

// import {} from './usecases/index';
//por default busca el index.js
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from './usecases/index';

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

deck = crearDeck(tipos, especiales);
// deck = crearNuevoDeck(tipos, especiales);
// deck = cualquierNombreParaCrearUnNuevoDeck(tipos, especiales); // - 2
// deck = crearDeck();
// deck = crearDeck([]);
console.log(deck);

// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta( deck );
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    // TODO: crear carta
    const imgCarta = crearCartaHTML( carta );
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck( tipos, especiales );

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});

// setupCounter(document.querySelector('#counter'))
