/*
const nombre = "carlos";
const edad = 23;
const profesion = "Tester";

//crear objeto
const persona = {
    nombre: "carlos",
    edad: 23,
    profesion: "Tester",
    information: function() {
        console.log(`Mi nombre es  ${this.nombre} y mi dad es ${this.nombre}`);
    }
}

const persona2 = {
    nombre: "anuard",
    edad: 45,
    profesion: "Tester",
    information: function() {
        console.log(`Mi nombre es ${this.nombre} y mi dad es ${this.nombre}`);
    }
}

console.log( persona.nombre );
console.log( persona["edad"] );


console.log( persona )

//agregar propiedad
persona.apellido = "Pineda";

console.log( persona );

//
// delete persona.edad;
// console.log( persona );

console.log( persona.information() )
console.log( persona2.information() )

*/

//Object Contructor
function Persona(nombre, edad, profession) {
    this.nombre = nombre;
    this.edad = edad;
    this.profession = profession;
    this.information = function() {
        console.log(`Mi nombre es ${this.nombre} y mi profesion es ${this.profession}`)
    }
}   

const pineda = new Persona('carlos', 23, 'Tester');
console.log( pineda );

const anuard = new Persona('Anuard', 45, 'Tester');
console.log( anuard.information() );

//destructiring
//import { var1, var1 } from 'archivo.js';

// const miNombre = pineda.nombre;
// console.log( miNombre )

let apellido2;

const { nombre, edad, apellido } = pineda;
console.log( `${nombre} ${edad} ${apellido}`)


















