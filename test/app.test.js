import { expect } from 'chai';
import { add } from '../index.js';

describe('Addition Test', function () {
    it('should return 5 when adding 2 + 3', function () {
        expect(add(2, 3)).to.equal(5);
    });
});

