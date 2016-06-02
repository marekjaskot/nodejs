var WebsocketServer = require('ws').Server;
var url = require('url');

module.exports = {
    wsClients: [],
    options: {
        port: 3000,
        verifyClient: function (info, cb) {
            let urlData = url.parse(info.req.url, true, true)
            let accessToken = urlData.query.token_access;
            if(accessToken === '123'){
               return cb(true)
            }
            cb(false)
        }
    },
    wsServer: function(score){
        var wss = new WebsocketServer(this.options);
        wss.on('connection', (ws) => {
            this.wsClients.push(ws)
            score.find({}, function(err,data){
                ws.send(JSON.stringify({"action":'connected','msg':data}))
            })
        })
    },

}





