// Ques Link: https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

// Sol 1:
// const spinWords = (str) => {
//     let res = "";
//     str = str.split(' ');
//     for (let i = 0; i < str.length; i++)
//     {
//         if (str[i].length >= 5)
//         {
//             let temp = "";
//             for (let j = str[i].length - 1; j >= 0; j--)
//             {
//                 temp += str[i][j];
//             }
//             res += temp + " ";
//         }
//         else
//         {
//             res += str[i] + " ";
//         }
//     }
//     return res.substring(0, res.length - 1);
// }

// // Sol 2:
// const spinWords = (str) => {
//     let res = "";
//     str = str.split(' ');
//     str.map((s) => {
//         if (s.length >= 5)
//         {
//             let temp = "";
//             for (let j = s.length - 1; j >= 0; j--)
//             {
//                 temp += s[j];
//             }
//             res += temp + " ";
//         }
//         else
//         {
//             res += s + " ";
//         }
//     });
//     return res.substring(0, res.length - 1);
// }

// Sol 3:
const spinWords = (str) => {
    let res = "";
    str = str.split(' ');
    res = str.reduce((acc, curr) => {
        console.log(curr.split('').reverse().join(''));
        if (curr.length > 4)
        {
            acc += curr.split('').reverse().join('') + " ";
        }
        else
        {
            acc += curr + " ";
        }
        return acc;
    }, "");
    return res.substring(0, res.length - 1);
}


// Test Cases:
const chai = require("chai");
const assert = chai.assert;

describe("Spinning words", () => {
    it("Sample tests", () => {
        // assert.strictEqual(spinWords("Welcome"), "emocleW");
        assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
        assert.strictEqual(spinWords("This is a test"), "This is a test");
        assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
        assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test");
        assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
        assert.strictEqual(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
    });
});