/*

Task 1 - Using filter to Extract Specific Elements
Write a JavaScript function that uses the filter method to extract all the numbers greater than 10 from an array.

*/
console.log("-------- TASK 1 --------");

const arrayNums = [5, 10, 12, 3, 18, 130, 44];
const overTen = arrayNums.filter(num => num > 10);
console.log(overTen); // 12, 18, 130, 44

/*

Task 2 - Using reduce to Calculate the Sum of Numbers
Write a JavaScript function that uses the reduce method to calculate the sum of all numbers in an array.

*/
//console.log()
//console.log("-------- TASK 2 --------");
//function sumNumbers(){
//}


/*
Task 3 - Create an Array of Unique Categories for a Restaurant Menu (reduce)
Extract unique categories from a list of menu items.

const menuItems = [
 { name: 'Pizza', category: 'Main Dish' },
 { name: 'Salad', category: 'Main Dish' },
 { name: 'Pasta', category: 'Main Dish' },
 { name: 'Caesar Salad', category: 'Salad' },
 { name: 'Greek Salad', category: 'Salad' },
];

*/
//console.log()
//console.log("-------- TASK 3 --------");


/*

Task 4 - Count Coffee Shops by Neighborhood (filter)
Imagine you have collected data on various coffee shops in Chicago, including their neighborhoods. 
You want to analyze this data to understand the distribution of coffee shops across different neighborhoods.

*/
const coffeeShops = [
 { name: 'Cafe A', neighborhood: 'Rogers Park' },
 { name: 'Cafe B', neighborhood: 'Wicker Park' },
 { name: 'Cafe C', neighborhood: 'Rogers Park' },
 { name: 'Cafe D', neighborhood: 'Wicker Park' },
 { name: 'Cafe E', neighborhood: 'Rogers Park' },
];

//console.log()
//console.log("-------- TASK 4 --------");
// const distribution = coffeeShops.filter((shops, i) => shops.neighborhood);
// console.log(distribution);


// ---------------------------------------------------------------
// SUPPLEMENTAL LEARNING

// Challenge 1: Filter Active Users
console.log();
console.log("----Challenge 1: Filter Active Users----");

const users = [
  { name: "Alyssa", active: true },
  { name: "Jordan", active: false },
  { name: "Maya", active: true },
  { name: "Leo", active: false },
];

// const activeUsers = users.filter(isActive => isActive.active === true); // explicit version (note needed with .filter())
// const activeUsers = users.filter(isActive => isActive.active); // also gets true because .filter() expects truthy falsy statements
// const activeUsers = users.filter(isActive => !isActive.active); // gets non active users
const activeUsers = users.filter(isActive => isActive.active);
console.log(activeUsers);
console.log();


// Challenge 2: Filter for users who are both active AND over 18.
console.log("----Challenge 2: Filter for users who are both active AND over 18 ----");

const users2 = [
  { name: "Alice", active: true, age: 22 },
  { name: "Bob", active: false, age: 25 },
  { name: "Charlie", active: true, age: 17 },
  { name: "Diana", active: true, age: 30 },
  { name: "Evan", active: false, age: 19 }
];

//const activeAndOver18 = users.filter(isActiveAnd18 => 
//    isActiveAnd18.active && isActiveAnd18.age > 18
//);
//console.log(activeAndOver18);

const activeAdults = users2.filter(user => user.active && user.age > 18); // Second way to write for clarity
console.log(activeAdults);
console.log();

/* 
Level 3 Challenge: Combine .filter() and .map()
Your goal:
Filter only the active users who are 21 or older. Then use .map() to return just their names in a new array.

Hint:
.filter() narrows down the list.
.map() transforms what’s left.

You should end up with an array that looks like this:
["Alice", "Diana", "Fiona"]
*/

console.log("---- Challenge 3: Filter active users 21 or older. Then use .map() to return their names ----");

const users3 = [
  { name: "Alice", active: true, age: 22 },
  { name: "Bob", active: false, age: 25 },
  { name: "Charlie", active: true, age: 17 },
  { name: "Diana", active: true, age: 30 },
  { name: "Evan", active: false, age: 19 },
  { name: "Fiona", active: true, age: 27 }
];

//const activeAdults = users.filter(user => user.active && user.age > 21);
//const adultNames = activeAdults.map(names => names.name);
//console.log(adultNames);

// this code is cleaner because it combines .filter() and .map()
const adultNames = users3
    .filter(user => user.active && user.age > 21)
    .map(user => user.name);

console.log(adultNames);