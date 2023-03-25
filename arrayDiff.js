// Ques Link: https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

// // Sol 1:
// const arrayDiff = (a, b) => {
//     if (!a || a.length === 0) {
//         return [];
//     }
//     if (!b || b.length === 0) {
//         return a;
//     }
//     let res = [];
//     for (let i = 0; i < a.length; i++) {
//         let aInb = false;
//         for (let j = 0; j < b.length; j++) {
//             if (a[i] === b[j]) {
//                 aInb = true;
//                 break;
//             }
//         }
//         if (!aInb) {
//             res.push(a[i]);
//         }
//     }
//     return res;
// };

// Sol 2:
const arrayDiff = (a, b) => {
    if (!a || a.length === 0) {
        return [];
    }
    if (!b || b.length === 0) {
        return a;
    }
    return a.filter((ele) => !b.includes(ele));
};

// Test Cases:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Should pass Basic tests", () => {
        assert.deepEqual(arrayDiff([1, 2], [1]), [2], "a was [1,2], b was [1]");
        assert.deepEqual(
            arrayDiff([1, 2, 2], [1]),
            [2, 2],
            "a was [1,2,2], b was [1]"
        );
        assert.deepEqual(
            arrayDiff([1, 2, 2], [2]),
            [1],
            "a was [1,2,2], b was [2]"
        );
        assert.deepEqual(
            arrayDiff([1, 2, 2], []),
            [1, 2, 2],
            "a was [1,2,2], b was []"
        );
        assert.deepEqual(arrayDiff([], [1, 2]), [], "a was [], b was [1,2]");
        assert.deepEqual(
            arrayDiff([1, 2, 3], [1, 2]),
            [3],
            "a was [1,2,3], b was [1,2]"
        );
    });
});
