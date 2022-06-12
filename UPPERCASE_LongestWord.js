
//Funcion que devuelve la palabra mas larga de una oracion completa
function MayorPalabra (frase) {

    var palabra = 0;
    var frase_div = frase.split (' ');

    for (let i = 0; i < frase_div.length; i++) {
        if (frase_div[i].length > frase_div[palabra].length) {
            palabra = i;
        }
    }
    
    console.log("Palabra mas grande: " + frase_div[palabra].toUpperCase());
    //return frase_div[palabra].toUpperCase();
}

/*
Algoritmo:
1) Tomar el string completo y convertir en Mayuscula
2) Dividir el string por espacio para separar las palabras
3) Almacenar en un arreglo
4) En un bucle comparar cada posicion con la sigte, guardando en una variable la de mayor tamaño
5) devolver el contenido de la posicion de mayor tamaño en el arreglo.
*/


MayorPalabra("The quick brown fox jumped over the lazy dog");
// Resultado esperado: jumped
MayorPalabra("May the force be with you");
// Resultado esperado: force
MayorPalabra("Google do a barrel roll");
// Resultado esperado: Google
MayorPalabra("What is the average airspeed velocity of an unladen swallow");
// Resultado esperado: airspeed
MayorPalabra("What if we try a super-long word such as otorhinolaryngology");
// Resultado esperado: otorhinolaryngology






