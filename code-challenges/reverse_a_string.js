/*

Reverse the provided string and return the reversed string. 
For example, "hello" should become "olleh".
*/

// Add function reverseString(str) {} with string (str) as a parameter
function reverseString(str) {
    // Add let reversed variable and initalize to empty arr let reversed = []
    let reversed = [];
    // Add for loop and start i at str - 1.length and decrement using --i for (let i = str.length - 1; i >= 0; i--)
    for (let i = str.length - 1; i >= 0; i--) {
        // Push each char to reversed arr
        reversed.push(str[i])
    }
    // return reversed arr using .join('') to return joined string
    return reversed.join('');
}

// Examples
console.log(reverseString("hello")); // should return the string olleh.
console.log(reverseString("Howdy")); // should return the string ydwoH.
console.log(reverseString("Greetings from Earth")); // should return the string htraE morf sgniteerG.