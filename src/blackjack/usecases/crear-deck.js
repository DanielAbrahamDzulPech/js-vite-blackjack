// import { shuffle } from "underscore";
import _ from "underscore";

// export const a = 'Hola Mundo';
//exportacion independiente / individual
export const miNombre = 'Daniel';

// Esta función crea un nuevo deck
// @param {array<string>} tiposDeCarta 
/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
// const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    //si no esto no viene o es null o undefined
    // if ( !tiposDeCarta ) throw new Error('TiposDeCarta es obligatorio');
    // if( tiposDeCarta.length > 0 ) throw new Error('TiposDeCarta tiene que ser un arreglo de string');

    if ( !tiposDeCarta || tiposDeCarta.length === 0 )
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    
    if ( !tiposEspeciales || tiposEspeciales.length === 0 )
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    // console.log( deck );
    return deck;
}

// Otra manera de exportar - 2
// export default crearDeck;
