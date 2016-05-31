/**
 * Created by Marek Jaskot <m.jaskot@kei.pl> on 31.05.16.
 */
var restify = require('restify');
var _ = require('underscore');
var server = restify.createServer();

server.use(restify.bodyParser());

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

server.post('/score', function (req, res, next) {
    let newScore = {
        "setId": req.body.setId,
        "teamA": req.body.teamA,
        "teamB": req.body.teamB
    };

    score.push(newScore);
    res.send(newScore);
    next();
})


server.listen(3000, function () {
    console.log('serwer nasłuchuje port:3000')
})



