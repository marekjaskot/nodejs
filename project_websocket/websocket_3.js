/**
 * Created by Marek Jaskot <m.jaskot@kei.pl> on 02.06.16.
 */
var WebsocketServer = require('ws').Server;
var httpServer = require('./http-server');

var options = {
    port: 3001,
    server: httpServer,
    verifyClient: function (info, cb) {
        cb(true)
    }
}

var wss = new WebsocketServer(options)

wss.on('connection', function(ws){
    ws.send(JSON.stringify({'action':'ok',"msg":'Klient połączony'}));
})
