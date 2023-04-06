// Ques Link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// // Sol 1:

// const accum = (string) => {
//     let arr = [];
//     let index = 1;
//     let s = "";
//     string.split("").map((str) => {
//         s += str.repeat(index++);
//         arr[index - 2] = s + "-";
//         s = "";
//     });
//     let res = "";
//     arr.map((str) => {
//         str.split("").map((s, index) => {
//             if (index === 0) {
//                 res += s.toUpperCase();
//             } else {
//                 res += s.toLowerCase();
//             }
//         });
//     });
//     return res.substring(0, res.length - 1);
// };

// Sol 2:

function accum(s) {
    return s
        .split("")
        .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
        .join("-");
}

// Test Cases:

const Test = require("@codewars/test-compat");

describe("accum", function () {
    it("Basic tests", function () {
        Test.assertEquals(
            accum("ZpglnRxqenU"),
            "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
        );
        Test.assertEquals(
            accum("NyffsGeyylB"),
            "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
        );
        Test.assertEquals(
            accum("MjtkuBovqrU"),
            "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
        );
        Test.assertEquals(
            accum("EvidjUnokmM"),
            "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
        );
        Test.assertEquals(
            accum("HbideVbxncC"),
            "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
        );
    });
});
