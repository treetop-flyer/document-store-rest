require('./../../src/sign-test')(__filename);

var md5 = require('md5'),
    String = require('./../../src/string-polyfills');

describe('String', function () {

    it('implementds s.md5()', function () {
        expect((new String('ABC')).md5()).toBe('902fbdd2b1df0c4f70b4a5d23525e932');
        expect(md5('ABC')).toBe('902fbdd2b1df0c4f70b4a5d23525e932');
    });
});
