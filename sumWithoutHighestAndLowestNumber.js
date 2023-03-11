// Ques Link: https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

/*
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

// Sol:
const sumArray = (arr) => {
    if (!arr || arr.length === 0 || arr.length <= 2) {
        return 0;
    }
    arr = arr.sort(function (a, b) {
        return (a - b)
    });
    let res = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        res += arr[i];
    }
    return res;
}

// Test Cases:
const {
    assert
} = require("chai");

it("example tests", () => {
    assert.strictEqual(sumArray(null), 0);
    assert.strictEqual(sumArray([]), 0);
    assert.strictEqual(sumArray([3]), 0);
    assert.strictEqual(sumArray([3, 5]), 0);
    assert.strictEqual(sumArray([6, 2, 1, 8, 10]), 16);
    assert.strictEqual(sumArray([0, 1, 6, 10, 10]), 17);
    assert.strictEqual(sumArray([-6, -20, -1, -10, -12]), -28);
    assert.strictEqual(sumArray([-6, 20, -1, 10, -12]), 3);
});