/*

You are given an array of integers arr and a target element target. 
Your task is to implement a function findLastIndex(arr, target) that returns the last index at which 
the target element appears in the array. If the target element is not present in the array, 
the function should return -1.

Examples:
console.log(findLastIndex([1, 2, 3, 4, 5, 2], 2));  // Output: 5
console.log(findLastIndex([10, 20, 30, 40, 50], 25));  // Output: -1
console.log(findLastIndex([5, 10, 15, 20, 10, 25], 10));  // Output: 4
console.log(findLastIndex([1, 2, 3, 4, 5], 6));  // Output: -1

*/

// #1 Create a function findLastIndex(arr, target) and pass arr and target as params
function findLastIndex(arr, target) {
    // #2 Within function create a for (let i = arr.length; i > 0 ; i--) that starts at arr.length
    for (let i = arr.length; i >= 0; i--) {
        // #3 Within for loop compare target with arr[i] using if (target === arr[i]) and return i
        if (arr[i] === target) {
            return i;
        }
    }
    // #4 return -1 if for loop doesnt return anything 
    return -1
}

console.log(findLastIndex([6, 2, 3, 4, 5], 6));  // Output: 0
console.log(findLastIndex([1, 2, 3, 4, 5, 2], 2));  // Output: 5
console.log(findLastIndex([10, 20, 30, 40, 50], 25));  // Output: -1
console.log(findLastIndex([5, 10, 15, 20, 10, 25], 10));  // Output: 4
console.log(findLastIndex([1, 2, 3, 4, 5], 6));  // Output: -1