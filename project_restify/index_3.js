/**
 * Created by Marek Jaskot <m.jaskot@kei.pl> on 31.05.16.
 */
var restify = require('restify');
var _ = require('underscore');
var server = restify.createServer();

var score = [
    {
        "setId": 1,
        "teamA": 0,
        "teamB": 0
    },
    {
        "setId": 1,
        "teamA": 1,
        "teamB": 0
    },
    {
        "setId": 1,
        "teamA": 2,
        "teamB": 0
    },
    {
        "setId": 1,
        "teamA": 2,
        "teamB": 1
    }
]


server.get('/score', function (req, res, next) {
    res.send(score);
    next();
})

server.get('/score/set/:setId', function (req, res, next) {
    let setId = req.params.setId
    res.send(_.where(score, {setId: parseInt(setId)}));
    next();
})


server.listen(3000, function () {
    console.log('serwer nasłuchuje port:3000')
})



