var http = require('http');

var server = http.createServer(function(request,response){
    response.writeHead(200,
        {
            'Content-Type':'text/plain; charset=utf-8',
        }
    )
    response.end(`To działa! ${request.method}: ${request.url}`)
})

server.listen(3000, function(){
    console.log('Server http nasłuchuje na http://localhost:3000')
})