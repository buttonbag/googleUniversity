var http = require('http');
var fs = require('fs');

http
	.createServer(function (request, response) {
		if (request.url === '/index') {
			// check for index end point specifically
			fs.readFile('index.html', function (err, data) {
				// checks for error
				if (err) {
					response.writeHead(404);
					response.write('Not Found!');
				} else {
					response.writeHead(200, { 'Content-Type': 'text/html' });
					response.write(data);
				}
				response.end();
			});
		} else {
			// if there's no specific end point found, display this
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.write(
				'<b>Hey! This is the default response. Requested URL is: ' + request.url
			);
			response.end();
		}
	})
	.listen(3000);
