/*

An anagram is a word formed by rearranging the letters of a different word using all the original letters exactly once. 
The function is given two strings: s - to search in, p - a template word. 
Find the starting indexes of anagrams of p among substrings of the given s.

Examples ==> function (s, p)
findAnagrams("cbaebabacd", "abc") ➞ [0, 6]
// Anagrams: "cba", "bac"

findAnagrams("abab", "ab") ➞ [0, 1, 2]
// Anagrams: "ab", "ba", "ab"

*/

function findAnagrams (str, p) {
    const pLen = p.length; // 3
    let count = pLen;
    let found = [];
    p = p.split('').sort().join('');

    if (str.length < pLen) return found;

    for (let i = 0; i < str.length; i++){
        let compare = str.slice(i, count).split('').sort().join('');
        //console.log(compare);

        if (compare === p) {
            found.push(i);
        }
        count++;
    } 
    return found;
}

console.log(findAnagrams("cbaebabacd", "abc"));// [0, 6];
console.log(findAnagrams("abab", "ab")); // [0, 1, 2];
console.log(findAnagrams('a', 'ab')); // [];
console.log(findAnagrams("racecar", "ace")); // [ 1, 3 ]
