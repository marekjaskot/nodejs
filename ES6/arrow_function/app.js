/**
 * Created by Marek Jaskot <m.jaskot@kei.pl> on 02.06.16.
 */
var fs = require('fs');

function persons(){
    let persons;
    let self = this;


    fs.readFile('persons.json', function (err, data) {
        if (err) throw err;
        this.persons = JSON.parse(data)
        //self.persons =
        console.log('Dane przeczytane!!',this.persons);
    })
}


persons();

