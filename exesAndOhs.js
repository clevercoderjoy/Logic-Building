// Ques Link: https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// Sol 1:
// const XO = (str) => {
//     let x = 0;
//     let o = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === 'x') {
//             x++;
//         } else if (str[i].toLowerCase() === 'o') {
//             o++;
//         }
//     }
//     return x === o;
// }

// Sol 2:
const XO = (str) => {
    str = str.toLowerCase().split('');
    return str.filter((x) => x === 'x').length === str.filter((o) => o === 'o').length;
}

// Test Cases:
const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(XO('xo'), true);
        Test.assertEquals(XO("xxOo"), true);
        Test.assertEquals(XO("xxxm"), false);
        Test.assertEquals(XO("Oo"), false);
        Test.assertEquals(XO("ooom"), false);
    });
});