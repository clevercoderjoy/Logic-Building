/*
You are given a number N. You need to print the pattern for the given value of N.

For N = 2 the pattern will be 
2 2 1 1
2 1

For N = 3 the pattern will be 
3 3 3 2 2 2 1 1 1
3 3 2 2 1 1
3 2 1

Note: Instead of printing a new line print a "$" without quotes. After printing the total output, end of the line is expected.

Example 1:

Input: 2
Output:
2 2 1 1 $2 1 $

Example 2:

Input: 3
Output:
3 3 3 2 2 2 1 1 1 $3 3 2 2 1 1 $3 2 1 $

Your Task:
Since this is a function problem, you don't need to worry about the test cases. Your task is to complete the function printPat() which takes one argument 'N' denoting the length of the pattern.

Constraints:
1 <= N <= 40
*/

// Sol:

class Solution {
    printPat(n) {
        //code here
        let res = "";
        let print = n;
        for (let i = n; i > 0; i--) {
            for (let j = n; j > 0; j--) {
                for (let k = 0; k < print; k++) {
                    res += j + " ";
                }
            }
            res += "$";
            print--;
        }
        console.log(res);
    }
}
