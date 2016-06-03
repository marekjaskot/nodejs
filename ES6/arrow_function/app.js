/**
 * Created by Marek Jaskot <m.jaskot@kei.pl> on 02.06.16.
 */

/*

 () => { … } // bez argumentu

 x => { … } // z jednym argumentem

 (x, y) => { … } // z kilkoma argumentami

 x => { // blok instrukcji
 var y = 2
 return x * y
 }

 x => x * x // blok z jedną instrukcja

 */


var arr = [1, 2, 3]

arr.forEach(function (element) {
    return console.log(element)
})

arr.forEach((element) => {
    return console.log(element)
})

arr.forEach(element => {
    return console.log(element)
})

arr.forEach(element => {
    console.log(element)
})

arr.forEach(element => console.log(element))

