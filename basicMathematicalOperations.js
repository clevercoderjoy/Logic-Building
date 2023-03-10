// Ques Link: https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

// Sol:
const basicOp = (operation, val1, val2) => {
    switch (operation) {
        case "+": {
            return val1 + val2;
        }
        case "-": {
            return val1 - val2;
        }
        case "*": {
            return val1 * val2;
        }
        case "/": {
            return val1 / val2;
        }
    }
}

// Test Cases:
const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        console.log("Basic tests\n");
        Test.assertSimilar(basicOp('+', 4, 7), 11);
        Test.assertSimilar(basicOp('-', 15, 18), -3);
        Test.assertSimilar(basicOp('*', 5, 5), 25);
        Test.assertSimilar(basicOp('/', 49, 7), 7);
    });
});