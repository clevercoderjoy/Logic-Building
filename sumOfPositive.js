// Ques Link: https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

// Sol:
const positiveSum = (arr) => arr.reduce((acc, curr) => (curr > 0) ? (acc += curr) : acc, 0);

// Test Cases:
const {
    assert
} = require("chai")

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(positiveSum([1, 2, 3, 4, 5]), 15);
        assert.strictEqual(positiveSum([1, -2, 3, 4, 5]), 13);
        assert.strictEqual(positiveSum([]), 0);
        assert.strictEqual(positiveSum([-1, -2, -3, -4, -5]), 0);
        assert.strictEqual(positiveSum([-1, 2, 3, 4, -5]), 9);
    });
});