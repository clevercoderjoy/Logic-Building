/*
Given a Integer array A[] of n elements. Your task is to complete the function PalinArray. Which will return 1 if all the elements of the Array are palindrome otherwise it will return 0.

Example 1:

Input:
5
111 222 333 444 555

Output:
1

Explanation:
A[0] = 111 //which is a palindrome number.
A[1] = 222 //which is a palindrome number.
A[2] = 333 //which is a palindrome number.
A[3] = 444 //which is a palindrome number.
A[4] = 555 //which is a palindrome number.
As all numbers are palindrome so This will return 1.
Example 2:

Input:
3
121 131 20
Output:
0

Explanation:
20 is not a palindrome hence the output is 0.

Constraints:
1 <=T<= 50
1 <=n<= 20
1 <=A[]<= 10000
*/

// Sol:

class Solution {
    PalinArray(arr, n) {
        //code here
        for (let i = 0; i < arr.length; i++) {
            let copy = arr[i];
            let d = 0;
            while (copy !== 0) {
                let r = copy % 10;
                d = d * 10 + r;
                copy = Math.floor(copy / 10);
            }
            if (d !== arr[i]) {
                return 0;
            }
        }
        return 1;
    }
}
