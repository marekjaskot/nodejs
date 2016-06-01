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
    score.find({},function(err, data){
        if(err) {
            console.log(err);
            return next(err);
        }
        res.send(data);
        return next();
    })
    next();
})

server.get('/score/set/:setId', function (req, res, next) {
    let setId = parseInt(req.params.setId)
    if(_.isNumber(setId) && setId > 0){
        score.find({ "setId": setId },function(err, data) {
            res.send(data);
            return next();
        })
    } else {
        next(new Error('expect setid to be number'))
        return;
    }
    next()
})

server.post('/score', function (req, res, next) {
    //let scoreParams = JSON.parse(req.body)
    let scoreParams = req.body;
    let scoreDate = new Date();

    let newScore = {
        "setId": parseInt(scoreParams.setId),
        "teamA": parseInt(scoreParams.teamA),
        "teamB": scoreParams.teamB,
        "time": scoreDate.toLocaleTimeString(),
        "desc": scoreParams.desc
    };

    score.create(newScore,function(err,data){
        if(err) {
            console.log(err);
            return next(err);
        }
        res.send(data);
        return next();
    });
})


server.listen(3000, function () {
    console.log('serwer nasłuchuje port:3000')
})



