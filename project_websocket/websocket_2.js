var WebsocketServer = require('ws').Server;

module.exports = {
    wsClients: [],
    options: {
        port: 3001,
        verifyClient: function (info, cb) {
            console.log(info.req.url)
            cb(true)
        }
    },
    wsServer: function(){
        var wss = new WebsocketServer(this.options);
        wss.on('connection', (ws) => {
            this.wsClients.push(ws)
            ws.send(JSON.stringify({"action":'connected'}))
        })
    }
}





