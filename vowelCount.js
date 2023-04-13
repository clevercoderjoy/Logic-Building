// Ques Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// Sol:

const getCount = (str) => {
    return str.split("").reduce((acc, curr) => {
        if (
            curr === "a" ||
            curr === "e" ||
            curr === "i" ||
            curr === "o" ||
            curr === "u"
        ) {
            acc += 1;
        }
        return acc;
    }, 0);
};

// Test Cases:

const { assert } = require("chai");

describe("Vowels Count Tests", function () {
    it("should return 5 for 'abracadabra'", function () {
        assert.strictEqual(getCount("abracadabra"), 5);
    });
});
