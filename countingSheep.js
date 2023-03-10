// Ques Link: https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
true,  true,  true,  true ,
true,  false, true,  false,
true,  false, false, true ,
true,  true,  true,  true ,
false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

// Sol:
const countSheeps = (sheepArr) => {
    let sum = 0;
    for (let i = 0; i < sheepArr.length; i++) {
        if (sheepArr[i] === true) {
            sum += 1;
        }
    }
    return sum;
}

// Test Cases: 
const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        var array1 = [true, true, true, false,
            true, true, true, true,
            true, false, true, false,
            true, false, false, true,
            true, true, true, true,
            false, false, true, true
        ];

        Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total")
    });
});