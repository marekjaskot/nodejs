/**
 * Created by Marek Jaskot <m.jaskot@kei.pl> on 01.06.16.
 */
var user = require('./user');
var admin = require('./user');


user.setName('Stefan');

console.log(user.getName(),admin.getName());