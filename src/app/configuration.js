
var nvl = require('./../lib/nvl'),
    errors = [];

function readEnv(name, value, fallback) {
    var ret = nvl(value, fallback);
    if (ret === fallback) {
        errors.push('Value not configured: '+name);
    }
    return ret;
}

module.exports = {
    port: readEnv('port', process.env.PORT, 5000),
    hostname: readEnv('hostname', process.env.HOST, 'localhost'),
    errors: errors
};