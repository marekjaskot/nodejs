'use strict'
/**
 * Created by Marek Jaskot <m.jaskot@kei.pl> on 24.05.16.
 */
var fs = require('fs');
/*
function stackOverflow() {
    stackOverflow()
}
let myJson = JSON.parse(data);
stackOverflow()
*/

/*for (let i = 0; i < 1000; i++) {
    console.log(`Witaj, po raz ${i}`)
}*/

for (let i = 0; i < 6; i++) {
    fs.readFile('./json_files/persons.json', function (err, data) {
        let myJson1 = JSON.parse(data);
    })
}