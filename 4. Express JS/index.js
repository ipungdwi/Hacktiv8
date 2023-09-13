var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html") //memberikan akses kepada express untuk mengakses index.html
});

app.post('/user', function(req, res) {
    response = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        gender : req.body.gender
    };

    console.log(response);

    res.end(JSON.stringify(response))
});

var server = app.listen(8888, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Kode Apps Listening at", host, port);
});