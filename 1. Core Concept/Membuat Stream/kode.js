// -------MEMBACA---------
// var fs = require("fs");
// var data = "";

// var readerStream = fs.createReadStream('kode.txt');  //membuat 1 readstream dengan file yang akan di stream

// readerStream.setEncoding('utf-8'); //lalu set encoding

// //membuat handling untuk stream 
// readerStream.on('data', function(chunk) {
//     data += chunk;
// }) 

// readerStream.on('data', function(){
//     console.log(data);
// })

// readerStream.on('error', function(){
//     console.log(err.stack);
// })

// console.log("Program end");



// --------MENULIS--------
// var fs = require("fs");
// var data = "Ini data baru dengan writestream";  //ini data yang mau ditulis

// var writestream = fs.createWriteStream('kode.txt');  //membuat 1 writestream dengan file yang akan di stream

// writestream.write(data, 'utf-8'); //membuat encoding

// writestream.end();

// // //membuat handling untuk stream ketika finish dan ketika error
// writestream.on('finish', function(){
//     console.log('Write Complited');
// });
// writestream.on('error', function(){
//     console.log('err.stack');
// });

// console.log('program ended');


// // ------------Pipe------------- Mengubah txt ke txt
// var fs = require("fs");

// var readerStream = fs.createReadStream('kode.txt');

// var writerStream = fs.createWriteStream('output.txt');

// readerStream.pipe(writerStream);

// console.log('program ended');



// ----------------Chainning--------------- 

var fs = require("fs");
var zlib = require('zlib'); //untuk mengkompress

// fs.createReadStream('kode.txt')
//     .pipe(zlib.createGzip())                      //Untuk ZIP
//     .pipe(fs.createWriteStream('kode.txt.gz'));

fs.createReadStream('kode.txt.gz')
    .pipe(zlib.createGunzip())                         //Untuk Unzip
    .pipe(fs.createWriteStream('koded.txt'));

console.log('file compressed');

