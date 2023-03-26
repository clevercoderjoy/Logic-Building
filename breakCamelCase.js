// Ques Link: https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

// Sol:
const solution = (str) => {
    let res = "";
    str.split("").map((letter) =>
        letter === letter.toUpperCase()
            ? (res += " " + letter)
            : (res += letter)
    );
    return res;
};

// Test Cases:
const chai = require("chai");
const assert = chai.assert;

describe("Sample Tests", () => {
    it("Should pass sample tests", () => {
        assert.strictEqual(
            solution("camelCasing"),
            "camel Casing",
            "Unexpected result"
        );
        assert.strictEqual(
            solution("camelCasingTest"),
            "camel Casing Test",
            "Unexpected result"
        );
    });
});
