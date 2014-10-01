/**
 * Created by brad on 9/30/2014.
 */

var server = require('./js/server');
var router = require('./js/router');
var requestHandlers = require('./js/requestHandlers');

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);

