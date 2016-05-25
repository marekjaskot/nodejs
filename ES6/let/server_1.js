'use strict'
/**
 * deklaracja let i const
 * Created by Marek Jaskot <m.jaskot@kei.pl> on 25.05.16.
 */


/*var a = 2;
{
    var a = 3;
    console.log('a:'+a);
}
console.log('a:'+a)*/


// var vs let ##################
var b = 2;
{
    let b = 3;
    console.log('b:'+b);
}
console.log('b:'+b)
/*
// referanceerror vs undefined
{
    console.log(c);
    var c;
}

{
    console.log(d);
    let d;
}*/
