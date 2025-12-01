// map practice
console.log('********** PRACTICE map() **********')
console.log
console.log('---------- #1 map() Triple ----------')
const numbers = [1, 2, 3, 4, 5];
const triple = numbers.map(num => num * 3);
console.log(triple);

console.log()
console.log('---------- #2 map() Double ----------');
const double = numbers.map(num => num * 2);
console.log(double);

console.log()
console.log('---------- #3 map() User Name ----------');
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const names = users.map(user => user.name)
console.log(names);

console.log()
console.log('---------- #4 map() toUpper ----------');
const words = ['hello', 'world', 'javascript'];
const toUppercase = words.map(word => word.toUpperCase())
console.log(toUppercase);

console.log()
console.log('---------- #4 map() New Object Price ----------');
const prices = [10, 20, 30];
const products = prices.map((price, index) => ({
    id: index + 1,
    price: price,
    taxPrice: price * 0.065
}));
console.log(products);

console.log()
console.log('---------- #4 map() New Object Name ----------');
const people = ['Tony', 'Bob', 'Amy', 'Shana'];
const location = ['New York', 'Miami', 'Colorado', 'San Fransisco'];
const peopleObject = people.map((name, index) => ({
    id: index + 1,
    name: name,
    age: Math.floor(Math.random() * 100) + 1,
    location: location[index]
}));
console.log(peopleObject)

console.log()
console.log('---------- #4 map() New Object Inventory ----------');
const items = ['Nintendo', 'Playstation', 'Diagnose Tool', 'Ipad', 'iPhone'];

let listedPrice = 0;
let purchasePrice = 0;

function getPurchase() {
    let price = Math.floor(Math.random() * 40) + 1;
    purchasePrice = price;
    return price;
}

function getListed() {
    let price = 0;
    while(price < 40) {
        price = Math.floor(Math.random() * 75) + 1
        listedPrice = price;
    }
    return price;
}

const inventory = items.map((item, index) => ({
    id: index + 1, 
    item: item,
    price: getPurchase(),
    listed: getListed(),
    profit: listedPrice - purchasePrice,
    isSold: 'No'
}));
console.log(inventory);

console.log()
console.log('---------- #4 map() Fruits ----------');
const fruits = ['apple', 'banana', 'grapes', 'mangos', 'grape fruit']
const newFruits = fruits.map(fruit => fruit)
console.log(newFruits);

console.log()
console.log('---------- #4 map() Index ----------');
const letters = ['a', 'b', 'c'];
const index = letters.map((letter, index) => {
    console.log(`${index}: ${letter}`);
});