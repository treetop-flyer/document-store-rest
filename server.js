
if (!process.env['NODE_ENV'] === false && process.env['NODE_ENV'] === 'development') {
    require('dotenv').config();
}

var config = require('./src/app/configuration');

if (config.errors.length>0) {
    console.log("Configuration errors detected");
    console.log(config.errors);
}

var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

console.log('Application is running:');
console.log('http://127.0.0.1:'+config.port);

app.listen(config.port);


