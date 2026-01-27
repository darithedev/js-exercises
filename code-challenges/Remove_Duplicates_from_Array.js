/*
Write a JavaScript function that takes an array of numbers as input and returns a new array with all duplicates removed.
Use the Set object to achieve this.
[x] Look into how Set removes duplicates
    Sets is a built in object in JS that can be used to store unique values or any type (primative or object).
*/
function removeDuplicates(arr) {
    return[... new Set(arr)];
}

const arrayWithDuplicates = [1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
console.log(removeDuplicates(arrayWithDuplicates));

/*
function removeDuplicates(arr) {
    const newArr = [... new Set(arr)]

    return newArr;
}
*/
