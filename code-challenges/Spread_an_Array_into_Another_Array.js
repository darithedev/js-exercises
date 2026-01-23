/*
Write a JavaScript function that takes two arrays as input and returns a new array that contains all elements from both input arrays. 
Use the spread operator (...) to achieve this.

*/

function combineArrays(arr1, arr2) {
    return [...arr1, ...arr2]
}

console.log(combineArrays([1,2,3], [4,5,6]));
