/**
 * Created by Marek Jaskot <m.jaskot@kei.pl> on 31.05.16.
 */
var restify = require('restify');
var server = restify.createServer();

server.get('/score', function (req, res, next) {
    let score = [
        {
            "setId": 1,
            "teamA": 0,
            "teamB": 0
        }
    ]
    res.send(score);
    next();
})

server.listen(3000, function(){
    console.log('serwer nasłuchuje port:3000')
})



