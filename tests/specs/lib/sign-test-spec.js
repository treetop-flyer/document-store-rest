require('./../../../src/lib/sign-test')(__filename);


if (!String.prototype.contains){
    String.prototype.contains = function(str) {
        return ''+this.indexOf(str) != -1;
    };
}

function MockConsole () {
    var _string = '';
    this.captured = function() {
        return _string;
    };
    this.log = function(input) {
        return _string = input;
    };
}

var mockConsole = new MockConsole();

require('./../../../src/lib/sign-test')(__dirname+'/nvl-spec.js', mockConsole);

describe('console can be injected', function () {
    it('string contains a valid MD5', function () {
        expect(mockConsole.captured().contains('nvl-spec.js')).toBe(true);
    });
});


