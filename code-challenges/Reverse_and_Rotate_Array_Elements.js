/*

Write a function that takes an array as input and returns a new array with the elements in reverse order. 
You must use both push and pop methods to achieve this.

*/
function reverseArray (arr) {
    const newArr = []
    const copyArr = [...arr];
    
    arr.forEach (() => { 
        const popped = copyArr.pop();
        newArr.push(popped);
    });
    return newArr;
}

// console.log(reverseArray([1,2,3,4,5])); // 5,4,3,2,1
// console.log(reverseArray([5,4,3,2,1])); // 1,2,3,4,5

/*

Write a function that takes an array of numbers and a number n as input. 
The function should return a new array where the first n elements are moved to the end of the array. 
You must use both shift and push methods to achieve this.

*/

function newArr(numArr, n) {
    let newArr = [...numArr];

    for(let i = 0; i < n; i++) {
        const shifted = newArr.shift()
        newArr.push(shifted);
    }
    return newArr;
}

console.log(newArr([1,2,3,4,5], 2)); // 3,4,5,1,2
console.log(newArr([1,2,3,4,5], 3)); // 4,5,1,2,3 
