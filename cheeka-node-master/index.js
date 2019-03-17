var express = require('express');
var app = express();
var path = require('path');
var routes = require('./src/router/api.js');
var bodyParser = require('body-parser');
const http = require('http');
var cors = require('cors')

app.use(cors());
app.set('port', 3000);

app.use(express.static('gallery'));
app.use(express.static('carousel'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});


var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log("API on port: " + port);
});