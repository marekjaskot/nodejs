'use strict'

function oldMultiply(a, b) {
    var b = typeof b !== 'undefined' ?  b : 2;
    return a*b;
}

function newMultiply(a, b=2) {
    return a*b;
}
console.log(oldMultiply(5));
console.log(newMultiply(5));