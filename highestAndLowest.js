// Ques Link: https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

// Sol 1:
// const highAndLow = (numbers) => {
//     numbers = numbers.split(' ');
//     numbers = numbers.map((num) => Number(num));
//     numbers = numbers.sort(function (a, b) { return a - b });
//     let res = numbers[numbers.length - 1] + " " + numbers[0];
//     return res;
// }

// Sol 2:
const highAndLow = (numbers) => {
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

// Test Cases:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example tests", () => {
    it("Test 1", () => {
        assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
    });
    it("Test 2", () => {
        assert.strictEqual(highAndLow("1 2 3"), "3 1");
    });
});