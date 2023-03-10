// Ques Link: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// Sol:
const solution = (str) => {
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}

// Test Cases:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(solution('world'), 'dlrow');
        assert.strictEqual(solution('hello'), 'olleh');
        assert.strictEqual(solution(''), '');
        assert.strictEqual(solution('h'), 'h');
    });
});