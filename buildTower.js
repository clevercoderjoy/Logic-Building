// Ques Link: https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

// Sol:
const towerBuilder = (n) => {
    let res = [];
    for (let i = 0; i < n; i++)
    {
        res.push(" ".repeat(n - i - 1) + "*".repeat(i * 2 + 1) + " ".repeat(n - i - 1));
    }
    return res;
}

// Test Cases:
const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertDeepEquals(towerBuilder(1), ["*"]);
        Test.assertDeepEquals(towerBuilder(2), [" * ", "***"]);
        Test.assertDeepEquals(towerBuilder(3), ["  *  ", " *** ", "*****"]);
    });
});
