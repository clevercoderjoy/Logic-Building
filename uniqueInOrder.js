// Ques Link: https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// Sol:
const uniqueInOrder = (iterable) => {
    const res = [];
    if (!iterable || iterable.length === 0) {
        return res;
    }
    for (let i = 1; i < iterable.length; i++) {
        if (iterable[i] != iterable[i - 1]) {
            res.push(iterable[i - 1]);
        }
    }
    res.push(iterable[iterable.length - 1]);
    return res;
}

// Test Cases:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
    it("test", () => {
        assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
    });
});