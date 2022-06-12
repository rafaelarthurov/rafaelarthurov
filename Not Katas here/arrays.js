
//[]

const numbers = [10, 20, 30];
const nombres = ['carlos', 'anuard', 'chocky'];
const mix = [2.3, true, 25, "mi edad", [1, 2 , 3], 
{
    "usuario valido": true,
    edad: 25,
    profession: ""
}
];


console.log( numbers[2] )
console.log( nombres );
console.log( mix[4][1] );
console.log( mix[5] );



const persona = {
    nombre: 'anuard',
    edad: 25,
    profession: ""
};


const propiedades = Object.keys(persona);
console.log( propiedades );

const valores = Object.values(persona);
console.log( valores );

nombres[3] = "Francisco";
console.log( nombres );

nombres[0] = "Christopher";
console.log( nombres );


const cart = [];

// cart.push('Camisa');
// cart.push('Pantalones');

// console.log( cart )


// cart.unshift('Blusa');
// console.log( cart )

const producto = {
    name: 'Camisa',
    price: 25,
    ofert: false
}

const producto2 = {
    name: 'Pantalones',
    price: 20,
    ofert: true
}

const producto3 = {
    name: 'Blusa',
    price: 15,
    ofert: true
}

cart.push(producto);
console.log( cart )

// cart.unshift(producto2);
// console.log( cart );


// cart.pop();
// console.log( cart )

cart.push(producto2);
console.log( cart );
console.log( cart )

// cart.shift();
// console.log( cart );

cart.push(producto3);

console.log( cart[0] )
console.log( cart[1] )
console.log( cart[2] )

// cart.splice(1, 1);
// console.log( cart );

// for (let i = 0; i < cart.length; i++) {
//     console.log( cart[i].name )
// }

productoMenor15 = [];
cart.forEach(function(producto) {
    if ( producto.price <= 15 ) {
        productoMenor15.push(producto);
    }
});



const productos = cart.map( (producto) => {
    return (producto.price <= 15);
});

productos.forEach( (producto) => {
    console.log( producto );
})



const pares = [1, 2, 3, 4, 5, 6].map((x) => {
    return (x % 2 === 0);
});

console.log( pares );




















































