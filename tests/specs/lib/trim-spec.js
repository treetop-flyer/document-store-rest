require('./../../../src/lib/sign-test')(__filename);

var trim = require('./../../../src/lib/trim');

describe('trim', function () {

    it('removes leading fluff', function () {
        expect(trim('     agshsd')).toBe('agshsd');
        expect(trim('\t     agshsd')).toBe('agshsd');
        expect(trim('\n\r     agshsd')).toBe('agshsd');
    });
    it('removes trailing fluff', function () {
        expect(trim('agshsd     ')).toBe('agshsd');
        expect(trim('agshsd\t     ')).toBe('agshsd');
        expect(trim('agshsd\n\r     ')).toBe('agshsd');
    });
    it('removes fluff both ends', function () {
        expect(trim('   agshsd  ')).toBe('agshsd');
        expect(trim('\t    agshsd\t     ')).toBe('agshsd');
        expect(trim('\n      agshsd\n\r     ')).toBe('agshsd');
    });
});
