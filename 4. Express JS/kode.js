// npm init 
// npm install express --save sebuah framework node js
// npm install body-parser --save untuk menghandle raw data
// npm install cookie-parser --save untuk menghadle cookie data
// npm install multer --save  -> untuk menghandle form data

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log('Mendapat GET dari HomePage');
    res.send('Halo dari server Kode');
})

app.post('/', function(req, res) {
    console.log('Mendapat POST dari HomePage');
    res.send('Halo POST')
})

app.get('/list_user', function(req, res) {
    console.log('Mendapat GET dari List User');
    res.send('Halo User')
})

app.get('/kod*e', function(req, res) {           //fungsi * adalah agar bisa mengisi apa aja untuk menggantikan *
    console.log('Mendapat GET dari dari /ko*de');
    res.send('Halo GET match')
})

var server = app.listen(8888, function(){
    var host = server.address().address
    var port = server.address().port
    console.log('Basic Routing Listening pada port: ', host, port);
})