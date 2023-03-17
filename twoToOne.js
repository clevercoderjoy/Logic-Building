// Ques Link: https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// Sol:
const longest = (s1, s2) => {
    let res = "";
    const s = s1 + s2;
    for (let i = 0; i < s.length; i++) {
        if (!res.includes(s[i])) {
            res += s[i];
        }
    }
    return res.split('').sort().join('');
}

// Test Cases:
const Test = require('@codewars/test-compat');

describe("longest", function () {
    it("Basic tests", function () {
        Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
        Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
        Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
    })
})