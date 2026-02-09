/* LEETCODE: EASY

Given an integer x, return true if x is a palindrome, and false otherwise.
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/

// Based on assumptions: 
// x always will equal a number 
// return value will be boolean (true or false)
// I am reading number values from right to left and left to right therefor comapring l to r and r to l

// Create function palindrome(num) {
function palindrome(x) {
    let count = x.toString().length - 1;
    // create for loop start from 0 for (let i = 0; i < x.toString().length; i++) {}
    for (let i = 0; i < x.toString().length; i++) {
        if (x.toString()[count] === x.toString()[i]) {
            count--;
        } else return false;
    }
    return true;
}

console.log(palindrome(121)) // true
console.log(palindrome(-121)); // false
console.log(palindrome(10)) // false
