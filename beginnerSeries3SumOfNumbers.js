// Ques Link: https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/

// Sol:
const getSum = (a, b) => {
    let minVal = Math.min(a, b);
    let maxVal = Math.max(a, b);
    console.log(minVal, maxVal);
    let res = minVal;
    if (a === b) {
        return res;
    }
    for (let i = ++minVal; i <= maxVal; i++) {
        console.log(res, i);
        res += i;
    }
    return res;
}

// Test Cases:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(getSum(0, -1), -1);
        assert.strictEqual(getSum(0, 1), 1);
        assert.strictEqual(getSum(2, 2), 2);
    })
});