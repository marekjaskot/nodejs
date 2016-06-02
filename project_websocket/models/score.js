/**
 * Created by Marek Jaskot <m.jaskot@kei.pl> on 31.05.16.
 */
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/scoredb');
var db = mongoose.connection;

db.on('error',function(err,data){
    console.log(err)
})

db.once('open',function(data){
    console.log('Polaczona z baza danych')
})

var scoreSchema = mongoose.Schema({
    "setId":{
        type: Number,
        required: true,
    },
    "teamA":{
        type: Number,
        required: true,
    },
    "teamB":{
        type: Number,
        required: true,
    },
    "time":{
        type: String,
    },
    "desc":{
        type: String,
    },
})


module.exports = mongoose.model('score', scoreSchema)

/*
module.exports = function(wsClients) {

    scoreSchema.post('save',function(doc){
        if(wsClients.length > 0){
            wsClients.forEach(function(ws,wsId){
                ws.send(JSON.stringify({'action':'new-score','msg':doc }))
            })
        }
    })
    return mongoose.model('score', scoreSchema)
}*/
