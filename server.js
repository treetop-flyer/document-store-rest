
if (!process.env['NODE_ENV'] === false && process.env['NODE_ENV'] === 'development') {
    require('dotenv').config();
}

var config = require('./src/app/configuration');

console.log(config.errors);


