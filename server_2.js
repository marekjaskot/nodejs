'use strict';
var fs = require('fs');

function addMyNumber(x, z) {
    let number = calculate(x, z)
    return `Cześć!! Twoj wynik to ${number}`;

}

function calculate(x, z) {
    return x + z
}


fs.readFile('./json_files/persons.json', function (err, data) {
    if (err) throw err;
    console.log('Dane przeczytane!!');
})

console.log(addMyNumber(5, 10))

