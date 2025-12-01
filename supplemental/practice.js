// Remove Duplicates
console.log('--------- RemoveDuplicates ---------')
const duplicates = [1,1,2,2,3,3,4,4,5,5,6]

function removeDuplicates (arr) {
    let counter = 1;

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] !== arr[i - 1]) {
            arr[counter] = arr[i];
            counter++;
        }
    }
    arr.splice(counter, arr.length);
    console.log(arr)
    return counter
}
console.log(removeDuplicates(duplicates))

// forEach
console.log
console.log('--------- forEach() ---------')
const batteries = ['AAA', 'AA', 'D', 'A23', 'C', '9V']
batteries.forEach(battery => console.log(battery));
console.log('** With Index **')
batteries.forEach((battery, i) => console.log(`${i + 1}: ${battery}`))

// Map 
console.log
console.log('--------- #1 map() ---------')
const bunnyArr = ['bunny1', 'bunny2', 'bunny3', 'bunny4', 'bunny5'];
const bunnies = bunnyArr.map(bunny => bunny);
console.log(bunnyArr)
console.log(bunnies);

console.log('** #2 Map Object **')
const bunniesObject = bunnyArr.map((bunny, index) => ({
    id: index + 1,
    animal: bunny,
    age: Math.floor(Math.random() * 25) + 1,
}));
console.log(bunniesObject);

console.log
console.log('--------- #2 map() Num * 5 ---------')
const numbers = [5, 10, 15, 20, 25, 30]
let thisNum;
const multiples = numbers.map((num, i) => {
    thisNum = num * 5
    console.log(`${i}: ${thisNum}`)
    return thisNum; 
});
// console.log(numbers);
console.log(multiples); // returns undefined arr without return

console.log()
console.log('--------- #3 map() Num * 2 ---------')
const numArr = [1,3,5,7,9,10]
const multiplyFour = numArr.map(multiple => multiple * 2)
console.log(multiplyFour);

// Filter
console.log()
console.log('--------- #1 filter() Coffee Location ---------')
const locations = [
    {location: 'Location 1', serves: 'coffee'},
    {location: 'Location 2', serves: 'coffee'},
    {location: 'Location 3', serves: 'coffee'}, //, serves:'mocktails'},
    {location: 'Location 4', serves: 'mocktails'},
    {location: 'Location 5', serves: 'mocktails'}
]

const coffeeLocations = locations.filter(location => location.serves === 'mocktails');
console.log(coffeeLocations)

console.log('** filter() location 1 **')
const location123 = locations.filter(l => l.location === 'Location 1');
console.log(location123)

console.log()
console.log('--------- #2 filter() Products > $5 ---------')
const products = [
    { name: "Notebook", price: 4.99, category: "Office" },
    { name: "Pencil", price: 1.25, category: "Office" },
    { name: "Coffee", price: 6.50, category: "Grocery" },
    { name: "Chips", price: 3.99, category: "Grocery" },
    { name: "Stapler", price: 8.99, category: "Office" }
];

const greaterThanFive = products
    .filter(price => price.price > 5)
    .map(n => n.name)

console.log(greaterThanFive)


console.log()
console.log('** Grocery **')
const grocery = products
    .filter(c => c.category === 'Grocery')
    .map(n => n.name);

console.log(grocery)

console.log()
console.log('** > then 6 chars **')
const moreThan6Char = products
    .filter(n => n.name.length > 6)
    .map(n => n.name);
console.log(moreThan6Char)

console.log()
console.log('** In Office && < $5 **')
const inOfficeLess5 = products
    .filter(c => c.category === 'Office' && c.price < 5)
    .map(n => n.name);

console.log(inOfficeLess5)

// Reduce
console.log()
console.log('--------- reduce() add total ---------')
const numbersArr = [1,2,3,4,10]; // 20
const total = numbersArr.reduce((t, index) => t + index);
console.log(total)

// Reduce, Filter, Map
console.log()
console.log('--------- reduce() filter() map() ---------')
const productsArr = [
    { name: "Notebook", price: 4.99, category: "Office" },
    { name: "Pencil", price: 1.25, category: "Office" },
    { name: "Coffee", price: 6.50, category: "Grocery" },
    { name: "Chips", price: 3.99, category: "Grocery" },
    { name: "Stapler", price: 8.99, category: "Office" }
];

const uppercase = productsArr
    .filter(n => n.price > 5)
    .map(n => n.name.toUpperCase())

console.log(uppercase)

console.log()
console.log('** total of Grocery **')
const totalGrocery = productsArr
    .filter(c => c.category === 'Grocery')
    .reduce((total, product) => total + product.price, 0)

console.log(totalGrocery)

console.log()
console.log('** round all products **')
const totalProducts = productsArr
    .map(p => p.price)
    .reduce((total, price) => (total + price), 0) / productsArr.length

console.log(totalProducts)

console.log()
console.log('** total of Office > than 6 Char **')
const totalOfficeProd = productsArr
    .filter(c => c.category === 'Office' && c.name.length > 6)
    .map(p => p.price)
    .reduce((total, price) => total + price, 0)

console.log(totalOfficeProd)

