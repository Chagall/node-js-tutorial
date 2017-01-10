var http = require('http');
var fs = require('fs');

function send404Response(response) {
    response.writeHead(404, {"Content-Type": "text/html"});
    fs.createReadStream("./404.html").pipe(response);
}

function onRequest(request, response) {

    console.log('A user has made a request: ' + request.url);

    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
    else if(request.method == 'GET' && request.url == '/404.jpg'){
        var img = fs.readFileSync('./404.jpg');
        response.writeHead(200, {"Content-Type": "image/jpeg"})
        response.end(img, 'binary');
    }
    else {
        send404Response(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log('Server is now running...');