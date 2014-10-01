/**
 * Created by brad on 9/30/2014.
 */

var http = require('http');
var url = require('url');
var manifest = require('./manifest');

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(handle, pathname);

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Hello World");
        var results = manifest.getZips();
        results.forEach(function(result){
            response.write(result);
        });
        response.end();
    }
    http.createServer(onRequest).listen(8890);
    console.log("Server has started");
}
exports.start = start;
