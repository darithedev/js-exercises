/*

Prompt a user for their name and then display a greeting message that repeats the name a specified number of times.  
Practice using concat and join.

You may also need some of the following (but not required): 
- parseInt
- isNaN
- new Array()

*/

// Do not remove the below line
const prompt = require("prompt-sync")();
// Do not remove the above line

function askForNameAndRepeat() {
  const name = prompt("What is your name? ");
  const repeatName = prompt("How many time should I repeat your name? ");
  // Convert the repeat count to an integer if it's not already
  const repeatCount = Number(repeatName);
  // Create an array
  let nameArr = [];
  // Check if the repeat count is a number and greater than zero
  if (repeatCount === Number(repeatCount) && repeatCount > 0) {
    // fill array with the user's name repeated the desired number of times
    for (let i = 0; i < repeatCount; i++) {
      nameArr.push(name);
    }
  }
  // Use concat to combine the repeated names into one string
  let concatName = '';
  for (let aname of nameArr) {
    concatName = concatName.concat(aname)
  }
  return concatName;
}

console.log(askForNameAndRepeat());
