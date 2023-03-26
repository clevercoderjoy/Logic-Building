// Ques Link: https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript

/*
Code as fast as you can! You need to double the integer and return it.
*/

// Sol:
const doubleInteger = (num) => num * 2;

// Test Cases:
const Test = require("@codewars/test-compat");

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(doubleInteger(2), 4);
    });
});
