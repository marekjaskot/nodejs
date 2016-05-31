/**
 * Created by Marek Jaskot <m.jaskot@kei.pl> on 31.05.16.
 */
var restify = require('restify');
var server = restify.createServer({
    "name" : 'project-restify'
});

server.get({
        name: 'nazwa wlasna funkcji np. getUser',
        path: 'ścierzka np /user',
        version: 'wersja np 1.0.0'
    },
    function (req, res, next) {
        next()
    }
);
