'use strict';

function addMyNumber(x, z) {
    let number = calculate(x, z)
    return `Cześć!! Twoj wynik to ${number}`;
}

function calculate(x, z) {
    return x + z
}

//################################

console.log(addMyNumber(5,10))
