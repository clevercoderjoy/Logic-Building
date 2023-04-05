// Ques Link: https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript

/*
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1
*/

// // Sol 1:
// const strCount = (str, char) =>
//     str.split("").reduce((acc, curr) => (curr === char ? (acc += 1) : acc), 0);

// Sol 2:
const strCount = (str, char) => str.split(char).length - 1;

// Test Cases:
const { assert } = require("chai");

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(strCount("Hello", "o"), 1);
        assert.strictEqual(strCount("Hello", "l"), 2);
        assert.strictEqual(strCount("", "z"), 0);
    });
});
