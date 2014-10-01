/**
 * Created by brad on 9/30/2014.
 */

var admzip = require('adm-zip')
var fs = require('fs');

function getZips() {
    var resultNames = [];
    var results = [];

    var zip = new admzip("./src/informational.zip");

// get all entries and iterate them
    var entries = zip.getEntries();
    entries.forEach(function (entry) {
        var entryName = entry.entryName;
        console.log(typeof(entryName) + ' ' + entryName);

        var decompressedData = zip.readFile(entry); // decompressed buffer of the entry
        results.push(zip.readAsText(entry)); // outputs the decompressed content of the entry
    });

//    var buffZip = zip.toBuffer();
//    console.log(buffZip.isBuffer());
    return results;
}

exports.getZips = getZips;
