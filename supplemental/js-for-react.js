// Working with functions

// Standard function
function pets () {

}

// Also a function (arrow function)
// Useful when working with callback functions
const users = () => {

}

// Working with anonymous function (react)
/*<button
    onClick={() => {
        console.log('Hello world');
    }}
>
</button>*/

// Ternary operators
let ageAge = 20;
let nameName = ageAge > 10 && "Pedro"; // let name == Pedro if age > 10 else name == false
let personName = ageAge > 22 ? "Analia" : "Amy";
//console.log(personName);

// ternaty operators would look something like this in react
/*const NameComponent = () => {
    return age > 10 ? <h1>Pedro</h1> : <h1>Jack</h1>;
}*/

// Objects
const person = {
    name: "Pedro",
    age: 25,
    hasPet: true
};

/*const name = person.name;
const age = person.age;
const hasPet = person.hasPet;
console.log(name, age, hasPet)*/

// Destructuring property of objects
let { name, age, hasPet } = person;
//[name, age] = ['Tammy', 26]
//console.log(person)

const person2 = {...person, name: "Jack"}
//console.log(person2)

const names = ['Kenny', "Jackson", 'Jessica', 'Amy']
const names2 = [...names, 'Pedro']
//console.log(names2)

//useful functions .map() .filter() .reduce()
let namess = ['Lanny', 'Mary', 'Penny']
namess.map((name, i) => {
    //console.log(`${i}: ${name}`)
})

let duplicates = ['Beverly', 'Lanny', 'Lanny', 'Mary', 'Mary', 'Penny', 'Penny']
const unique = duplicates.filter((name, i, arr) => name !== arr[i - 1])
//console.log(unique)

const removeName = unique.filter((name) => {
    return name !== 'Beverly'
})
//console.log(removeName)

// Async + Await + Fetch
//Promise
const event = new Promise((resolve, reject) => {
    var name = 'Amy';
    if (name == 'Janice'){
        resolve(name); // invokes .then()
    } else {
        reject("Name was not Janice, name was " + name); // invokes .catch()
    }
});

// this is kinda like try and catch
event
    .then((name) => {
        //console.log(name);
    })
    .catch((err) =>{
        //console.log(err);
    })
    .finally(() => {
        //console.log("Promise finished!")
    })

// using axios library (promise)
const axios = require("axios"); // install using nmp install axios
const dataData = axios.get("https://icanhazdadjoke.com/", {
    headers: {
        "Accept": "application/json",
        "User-Agent": "My Library (College student practicing calling APIs)"
    }
})
/*data
    .then((res) => {
        console.log(res.data)
    }) 
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log("Promise resolved")
    })*/

// async function ()

const fetchData = async () => {
    try {
        const data = await axios.get("https://icanhazdadjoke.com/", {
            headers: {
                "Accept": "application/json",
                "User-Agent": "My Library (College student practicing calling APIs)"
            }
        })
        console.log(data.data)
    } catch (err) {
        console.log(err)
    } finally {
        console.log("Resolved")
    }
}

fetchData();