'use strict';

var md5 = require('md5');

if (!String.prototype.md5) {
    String.prototype.md5 = function () {
        return md5(this.valueOf());
    };
}

module.exports = String;