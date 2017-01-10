var http = require('http');

/*
	This method receives the user request and responds to it with
	http status 200 and a plaintext response that says 'Here is your response.'
*/
function onRequest(request, response) {
	console.log('A user has made a request: ' + request.url);
	response.writeHead(200, {'Context-Type': 'text/plain'});
	response.write('Here is your response.');
	response.end();
}

/*
	Here we create a local server that listens for requests on port 8888.
	When the server receives a request, it is handled by the onRequest method
*/
http.createServer(onRequest).listen(8888);
console.log('Server is now running...');