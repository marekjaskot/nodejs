var WebsocketServer = require('ws').Server;

var options = {
    port: 3001,
    verifyClient: function (info, cb) {
        cb(true)
    }
}

var wss = new WebsocketServer(options)

wss.on('connection', function(ws){
    ws.send('Klient połączony')
})