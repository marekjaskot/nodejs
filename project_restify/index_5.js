/**
 * Created by Marek Jaskot <m.jaskot@kei.pl> on 31.05.16.
 */
var restify = require('restify');
var _ = require('underscore');
var server = restify.createServer();

server.use(restify.bodyParser());
server.use(restify.CORS({ credentials: true,}));

var score = [
    {
        "setId": 1,
        "teamA": 0,
        "teamB": 0,
        "time": '12:00 09',
        "desc": '<b>Drużyny gotowe zaczynamy!</b>',
    },

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
    let scoreParams = JSON.parse(req.body)
    let scoreDate = new Date();
    let newScore = {
        "setId": parseInt(scoreParams.setId),
        "teamA": parseInt(scoreParams.teamA),
        "teamB": parseInt(scoreParams.teamB),
        "time": scoreDate.toLocaleTimeString(),
        "desc": scoreParams.desc
    };
    score.push(newScore);
    res.send(newScore);
    next();
})


server.listen(3000, function () {
    console.log('serwer nasłuchuje port:3000')
})



