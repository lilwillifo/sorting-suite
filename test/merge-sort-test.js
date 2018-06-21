const assert = require('chai').assert
const sort = require('../merge-sort')

describe("Merge Sort", function(){
  it("can sort an array", function(){
    assert.deepEqual(sort([5,3,1,7]), [1,3,5,7])
  });
});
