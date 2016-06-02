/**
 * Created by Marek Jaskot <m.jaskot@kei.pl> on 02.06.16.
 */
/**
 * Created by Marek Jaskot <m.jaskot@kei.pl> on 31.05.16.
 */
var restify = require('restify');
var _ = require('underscore');
var score = require('./models/score');
var websocket = require('./lib/websocket');


var server = restify.createServer();
var serverWebsocket = websocket.wsServer(score);

server.use(restify.bodyParser());
server.use(restify.CORS({credentials: true, }));

server.get('/score', function (req, res, next) {
    score.find({}, function (err, data) {
        if (err) {
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
    if (setId > 0) {
        score.find({"setId": setId}, function (err, data) {
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
    let scoreParams = JSON.parse(req.body)
    //let scoreParams = req.body;
    let scoreDate = new Date();

    let newScore = {
        "setId": parseInt(scoreParams.setId),
        "teamA": parseInt(scoreParams.teamA),
        "teamB": parseInt(scoreParams.teamB),
        "time": scoreDate.toLocaleTimeString(),
        "desc": scoreParams.desc
    };

    score.create(newScore, function (err, data) {
        if (err) {
            console.log(err);
            return next(err);
        }
        if (websocket.wsClients.length > 0) {
            websocket.wsClients.forEach(function (ws, wsId) {
                ws.send(JSON.stringify({'action': 'new_score', 'msg': data}), function (err) {
                    if(err) delete websocket.wsClients[wsId];
                    return next();
                });
            })
        }
        else {
            console.log('Nie ma socketów do obsłużenia')
        }
        res.send(data);
        return next();
    });
})


server.listen(3000, function () {
    console.log('serwer nasłuchuje port:3000')
})



