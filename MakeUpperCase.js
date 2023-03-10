// Ques Link: https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/javascript

/*
Write a function which converts the input string to uppercase.
*/

// Sol:
const makeUpperCase = (str) => {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        let character = str[i];
        if (character >= 'a' && character <= 'z') {
            let charCode = str[i].charCodeAt() - 32;
            res += String.fromCharCode(charCode);
        } else {
            res += character;
        }
    }
    return res;
}

// Test Cases:
const {
    assert
} = require('chai');

describe("Basic Tests", function () {
    it("should pass the basic tests", function () {
        assert.strictEqual(makeUpperCase(""), "");
        assert.strictEqual(makeUpperCase("hello"), "HELLO");
        assert.strictEqual(makeUpperCase("Hello"), "HELLO");
        assert.strictEqual(makeUpperCase("HELLO"), "HELLO");
    });
});