/*
1854. Maximum Population Year
Easy
Question Link: https://leetcode.com/problems/maximum-population-year/

You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.

The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.

Return the earliest year with the maximum population.

Example 1:

Input: logs = [[1993,1999],[2000,2010]]
Output: 1993
Explanation: The maximum population is 1, and 1993 is the earliest year with this population.
Example 2:

Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
Output: 1960
Explanation:
The maximum population is 2, and it had happened in years 1960 and 1970.
The earlier year between them is 1960.

Constraints:

1 <= logs.length <= 100
1950 <= birthi < deathi <= 2050

SOL: https://www.youtube.com/watch?v=MYC7t8GSg0A
 */

package LeetCode;
import java.util.*;

public class MaxPopulationYear {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of the array: ");
        int size = sc.nextInt();
        int[][] logs= new int[size][2];
        takeInput(size, logs);
    }

    static void takeInput(int size, int[][] logs){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the values for matrix of size " + size + " x " + 2);
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < 2; j++) {
                logs[i][j] = sc.nextInt();
            }
        }
        System.out.println("Entered matrix is: ");
        for(int[] log : logs){
            System.out.println(Arrays.toString(log));
        }
        maxPopYear(size, logs);
    }

    static void maxPopYear(int size, int[][] logs){
        int[] arr = new int[101];
        for (int[] log : logs) {
            arr[log[0] - 1950]++;
            arr[log[1] - 1950]--;
        }
        for (int i = 1; i < 101; i++) {
            arr[i] += arr[i - 1];
        }
        int maxValue = 0;
        int maxYear = 1950;
        for (int i = 0; i < 101; i++) {
            if(maxValue < arr[i]){
                maxValue = arr[i];
                maxYear = i + 1950;
            }
        }
        System.out.println(maxYear);
    }
}












