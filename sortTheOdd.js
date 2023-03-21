// Ques Link: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

// Sol:
const sortArray = (arr) => {
    let evenArr = [];
    let oddArr = [];
    let res = [];
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] % 2 === 0)
        {
            evenArr.push(arr[i]);
        }
        else
        {
            oddArr.push(arr[i]);
        }
    }
    oddArr.sort(function (a, b) { return a - b });
    let oddIndex = 0;
    let evenIndex = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] % 2 === 0)
        {
            res.push(evenArr[evenIndex++]);
        }
        else
        {
            res.push(oddArr[oddIndex++]);
        }
    }
    return res;
}

// Test Cases:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", () => {
    it("should pass some sample tests", () => {
        assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
        assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
        assert.deepEqual(sortArray([]), []);
    });
});
