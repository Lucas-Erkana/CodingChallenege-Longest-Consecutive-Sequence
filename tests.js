const longestConsecutive = require('./longestConsecutive');
const assert = require('assert');

describe('Tests', function () {
  it('should return 4 when input is [100, 4, 200, 1, 3, 2]', function () {
    assert.strictEqual(longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
  });

  it('should return 9 when input is [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]', function () {
    assert.strictEqual(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
  });

  it('should return 1 when input is [1]', function () {
    assert.strictEqual(longestConsecutive([1]), 1);
  });

  it('should return 0 when input is []', function () {
    assert.strictEqual(longestConsecutive([]), 0);
  });

  it('should return 3 when input is [1,2,0]', function () {
    assert.strictEqual(longestConsecutive([1,2,0]), 3);
  });
});
