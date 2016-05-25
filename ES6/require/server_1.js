/**
 * funkcje require oraz module
 * Created by Marek Jaskot <m.jaskot@kei.pl> on 25.05.16.
 */

'use strict'
var fs = require('fs')
var model = require ('./model/user')
//var model = require ('./model')

console.log('mam na imie ' + model.getName())
