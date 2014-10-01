/**
 * Created by brad on 7/28/2014.
 */

function start(){
    Console.log("Request handler 'start' called.")
}

function upload(){
    Console.log("Request handler 'upload' called.")
}

exports.start =  start;
exports.upload = upload;