// short-circuit 

// Falso
// false
// 0
// ''
// null
// undefined
// NaN
let nombre = 'Chanchito Feliz';
let userName = nombre || 'Anonimo';
console.log(userName);

function fn1() {
    console.log('soy funcion 1')
    return false;
}

function fn2() {
    console.log('soy funcion 2')
    return true;
}

let x = fn1() && fn2();