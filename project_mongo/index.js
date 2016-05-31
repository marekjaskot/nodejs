/**
 * Created by Marek Jaskot <m.jaskot@kei.pl> on 31.05.16.
 */
var restify = require('restify');
var _ = require('underscore');
var score = require('./models/score');

var server = restify.createServer();

server.use(restify.bodyParser());
server.use(restify.CORS({ credentials: true,}));

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
    console.log(req.body)
    //let scoreParams = JSON.parse(req.body)
    let scoreParams = req.body;
    let scoreDate = new Date();

    let newScore = {
        "setId": parseInt(scoreParams.setId),
        "teamA": parseInt(scoreParams.teamA),
        "teamB": parseInt(scoreParams.teamB),
        "time": scoreDate.toLocaleTimeString(),
        "desc": scoreParams.desc
    };
    console.log(newScore);

    score.create(newScore,function(err,data){
        if(err)  return next(err);
        res.send(data);
        return next();
    });
})


server.listen(3000, function () {
    console.log('serwer nasłuchuje port:3000')
})



