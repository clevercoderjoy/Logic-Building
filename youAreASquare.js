// Ques Link: https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

/*
A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
0  =>  true
3  =>  false
4  =>  true
25  =>  true
26  =>  false
 */

// // Sol 1:
// const isSquare = (n) => {
//     if (n < 0) {
//         return false;
//     }
//     if ((n >= 0) & (n <= 1)) {
//         return true;
//     }
//     for (let i = 2; i <= n; i++) {
//         if (i * i === n) {
//             return true;
//         } else if (i * i > n) {
//             return false;
//         }
//     }
// };

// Sol 2:
const isSquare = (n) => {
    return Math.sqrt(n) % 1 === 0;
};

// Test Cases:

const Test = require("@codewars/test-compat");

describe("isSquare", function () {
    it("should work for some examples", function () {
        Test.assertEquals(
            isSquare(-1),
            false,
            "-1: Negative numbers cannot be square numbers"
        );
        Test.assertEquals(isSquare(0), true, "0 is a square number (0 * 0)");
        Test.assertEquals(isSquare(3), false, "3 is not a square number");
        Test.assertEquals(isSquare(4), true, "4 is a square number (2 * 2)");
        Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
        Test.assertEquals(isSquare(26), false, "26 is not a square number");
    });
});
