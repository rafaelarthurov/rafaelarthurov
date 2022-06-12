let producto = "Camisa roja grande ";
let producto2 = 'Pantalon verde "pequeño"';

let toBeLength = producto.length;

//devuelve la posicion si existe or -1 si no existe
let toBeWord = producto.indexOf('azul');

let existe = producto.includes('roja');

if ( existe ) {
    //hacer algo
} else {
    //hacer otra cosa
}

let producto3 = producto.concat(producto2);

// let usuario = "                  crafjer          ";
// if( usuario.trim() === 'crafjer' ) {
//     console.log('Es igual');
// } else {
//     console.log( 'no es igual' )
// }

/*
producto  = 'Camisa roja grande';
producto2 = producto.replace('roja', 'azul');

console.log( producto2 );
*/

/*
producto2 = producto.slice(6);
console.log( producto2 );

producto2 = producto.slice(0, 6);
console.log( producto2 );
*/

/*
producto = 'productos, producto2, producto3';
let carlos = "Me gusta ir a la playa los domingos";

let csv = producto.split(',');
let hobies = carlos.split(' ');

console.log( hobies[5] );
*/

/*
carlos = "Carlos Pineda";
let result = carlos.toLowerCase();
result = carlos.toUpperCase();

console.log( result )
*/


