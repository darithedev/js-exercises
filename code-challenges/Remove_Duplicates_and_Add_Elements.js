/*

Write a function that takes an array of strings and a string item as input. 
The function should remove the first occurrence of item from the array and then add 
it to the end of the array. You must use both shift and push methods to achieve this.

*/
let fruits = ["apple", "banana", "apple", "pear"]

function removeFirst(arrStr, strItem) {
    let thisFruit;

    if (strItem === arrStr[arrStr.length - 1]) return arrStr;

    arrStr.forEach((fruit, index) => {
        if (strItem === fruit) {
            thisFruit = arrStr.splice(index, 1);
            thisFruit = thisFruit.shift()
            arrStr.push(thisFruit)
            return arrStr
        }
    })
    return arrStr
}

console.log(removeFirst(fruits, "banana"))
console.log(removeFirst(fruits, "apple"))
console.log(removeFirst(fruits, "pear"))

/*
// for loop

function removeFirst(arrStr, strItem) {
    let thisFruit;
    if (arrStr[arrStr.length - 1] === strItem) return arrStr;

    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] === strItem) {
            thisFruit = arrStr.splice(i, 1);
            thisFruit = thisFruit.shift()
            arrStr.push(thisFruit);
            return arrStr;
        }
    }
    return arrStr
}*/

/*

Write a function that takes an array of numbers as input and returns a new array with 
all duplicate numbers removed. You must use reduce and push methods to achieve this.

*/

console.log()
console.log('--------- Remove Duplicates ---------')
const numbers = [1,2,2,3,3,3,4,4,5,5,6,7,7] // 1,2,3,4,5,6,7

function removeDuplicates (numArr) {
    let newArr = numArr.reduce((accumulator, element) => {
        if (!(accumulator.includes(element))) {
            accumulator.push(element)
        }
        return accumulator;
    }, []);
    return newArr;
}

console.log(removeDuplicates(numbers))

// doesnt return last element
/*//  #1 Create a function removeDuplicates (numArr) that takes numArr as a param
function removeDuplicates (numArr) {
    // #2 Within function create let newArr = [] initalized with empty arr
    let newArr = [];
    // #3 use filter method on numArr.reduce((element, index) => { }) to remove duplicates
    numArr.filter((index, element) => {
        console.log(index + ': ' + element)
        // #4 Within reduce use if (index > 0) statement to check index is 1 or > 
        if (index > 0) {
            // #5 Within if create another if (numArr[index] !== numArr[index - 1]) statement compare index with index - 1
            if (element !== numArr[index - 1]) {
                // #6 if != newArr.push(numArr[index - 1])
                newArr.push(numArr[index - 1]);
            }
        }
    })
    // #7 return newArr
    return newArr
}
*/