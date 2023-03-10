// Ques Link: https://www.codewars.com/kata/53369039d7ab3ac506000467

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Sol 1
// function boolToWord(bool) {
//     return bool === true ? "Yes" : "No";
// }

// Sol 2
const boolToWord = (bool) => bool === true ? "Yes" : "No";

// Test Cases

const {
    assert
} = require("chai")

describe("Basic tests", () => {
    it("Testing for basic tests", () => {
        assert.strictEqual(boolToWord(true), 'Yes')
        assert.strictEqual(boolToWord(false), 'No')
    });
});