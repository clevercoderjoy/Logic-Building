// Ques Link: https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

// Sol:
const removeExclamationMarks = (str) => {
    let res = "";
    str.split("").map((letter) => (letter !== "!" ? (res += letter) : res));
    return res;
};

// Test Cases:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(
            removeExclamationMarks("Hello World!"),
            "Hello World"
        );
    });
});
