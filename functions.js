
sumar(2, 2);
sumar2();
sumar2(5, 5);


function sumar(a, b) {
    console.log( a + b );
}

function sumar2(a = 2, b = 5) {
    console.log( a + b );
}

const sumar3 = function() {
    console.log( 2 + 5 );
}

const sumar5 = function() {
    console.log( 15 + 20 )
}

const sumar4 = function(a, b) {
    console.log( a + b );
    sumar5();
}

const sumar6 = function(a, b) {
    return a + b;
}


const show = msg =>  `${msg} tu mensaje` ;


function show2 (msg, type){
    return 'Tu nuevo mensaje';
}

const show2 = (msg, type) => `Tu nuevo mensaje`;


const restar = (a, b) => a - b;



sumar3();
sumar4(10, 5);
console.log( sumar6(5, 6) );

console.log( restar(15, 5));
console.log( show('Hola mundo') );







