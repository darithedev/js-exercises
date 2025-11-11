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