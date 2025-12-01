// for each Practice
console.log('********** PRACTICE forEach() **********')
console.log('---------- #1 forEach() ----------')
const toys = ['robot', 'stuffed bear', 'car', 'truck', 'doll'];

toys.forEach(toy => {
    console.log(toy)
});

console.log()
console.log('---------- #2 forEach() ----------')
const meals = ['chicken', 'beef', 'turkey', 'fish', 'tofu']

meals.forEach(function (meal, index) {
    console.log(`Meal ${index + 1}: ${meal}`);
});

console.log()
console.log('---------- #3 forEach() ----------')

//Tasks:
// 1. Print each product name
// 2 Print: "Notebook costs $5", etc.
// 3. Create a new array called expensive and push only items priced ≥ 5
// Example expected output:
// ["Notebook", "Backpack"]*/
const products = [
    { name: "Notebook", price: 5 },
    { name: "Pencil", price: 1 },
    { name: "Backpack", price: 25 }
];

console.log('** #1 Product Name: **')
products.forEach(item => {
    console.log(item.name)
});

console.log('** 2. Costs: **');
products.forEach(item => {
    console.log(`${item.name} costs $${item.price}`)
});

console.log('** Greater Than/Equal To $5 **');
let expensive = [];
products.forEach(item => {
    if(item.price >= 5) {
        expensive.push(item.name);
    }
});
console.log(expensive);

console.log()
console.log('---------- #4 forEach() ----------');
// #1 Print all user names using forEach().
// #2 Create an array called adults and use forEach() to push only users age 18+ into it.
// #3 Print adults: "Dari is 25 years old" "Alex is 30 years old"
const users = [
    { name: "Dari", age: 25 },
    { name: "Alex", age: 30 },
    { name: "Sam", age: 17 }
];

console.log('** #1 All Users **');
users.forEach(person => {
    console.log(person.name);
})

console.log('** #2 Adults **');
let adults = [];
users.forEach(person => {
    if (person.age >= 18) {
        adults.push(person.name);
    }
})
console.log(adults);

console.log('** #3 Adults String **');
users.forEach(adult => {
    if (adult.age >= 18) {
        console.log(`${adult.name} is ${adult.age} years old`);
    }
});
  