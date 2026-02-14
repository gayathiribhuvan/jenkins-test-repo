const assert = require('assert');
const add = require('../index');

describe('Addition Function', function () {
    it('should return 5 when adding 2 + 3', function () {
        assert.strictEqual(add(2, 3), 5);
    });
});
