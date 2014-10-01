/**
 * Created by brad on 9/30/2014.
 */

var admzip = require('adm-zip')
var fs = require('fs');

function getZips(){
  var x;

//  var zip = new admzip('./src/informational.zip', function(){

    // loads and parses existing zip file local_file.zip
    var zip = new admzip("./src/informational.zip");
// get all entries and iterate them
    zip.getEntries().forEach(function(entry) {
      var entryName = entry.entryName;
//      var decompressedData = zip.readFile(entry); // decompressed buffer of the entry
//      console.log(zip.readAsText(entry)); // outputs the decompressed content of the entry
      console.log(entryName.toString());
    });

//  var zipEntries = zip.getEntries();
//      zipEntries.forEach(function(zipEntry){
//        alert(zipEntry.toString());
//      });


//    var zipEntries = zip.getEntries();
//
//    zipEntries.forEach(function(zipEntry){
//      x += log(zipEntry.toString() + '\n');
//    });

  return x;

}

exports.getZips = getZips;
