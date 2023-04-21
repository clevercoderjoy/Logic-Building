/*
You are given an array A of size N. You need to print elements of A in alternate order (starting from index 0).

Example 1:

Input:
N = 4
A[] = {1, 2, 3, 4}
Output:
1 3
Example 2:

Input:
N = 5
A[] = {1, 2, 3, 4, 5}
Output:
1 3 5
Your Task:
Since this is a function problem, you just need to complete the provided function print() which takes A and n as input parameters and print the resultant array in the function itself. You have to print the final number of array ending with a space as Printing of newline character is taken care in driver code itself.

Constraints:
1 <= N <= 105
1 <= Ai <= 105

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)
*/

// Sol:

class Solution {
    print(arr, n) {
        //code here
        let res = "";
        arr.map((ele, index) =>
            index === 0 || index % 2 === 0 ? (res += ele + " ") : ""
        );
        console.log(res);
    }
}