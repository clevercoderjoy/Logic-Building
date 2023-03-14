// Ques Link:  https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript

/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

// Sol:
const simpleMultiplication = (num) => (num % 2 === 0) ? num * 8 : num * 9;

// Test Cases:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(simpleMultiplication(2), 16, 'Should return given argument times eight...')
        assert.strictEqual(simpleMultiplication(1), 9, 'Should return given argument times nine...')
        assert.strictEqual(simpleMultiplication(8), 64, 'Should return given argument times eight...')
        assert.strictEqual(simpleMultiplication(4), 32, 'Should return given argument times eight...')
        assert.strictEqual(simpleMultiplication(5), 45, 'Should return given argument times nine...')
    });
});