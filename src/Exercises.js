// Dereferencing
let myPeople = [
    {
        firstName: "Luke",
        lastName: "Parker",
        age: 23
    }, {
        firstName: "Rachel",
        lastName: "Nox",
        age: 28
    }, {
        firstName: "Douglas",
        lastName: "Adams",
        age: 42
    }
];

let lukeInArr = myPeople.find(person => person.firstName == "Luke")
let luke = {...lukeInArr}

let rachelInArr = myPeople.find(person => person.firstName == "Rachel")
let rachel = {...rachelInArr}

let douglasInArr = myPeople.find(person => person.firstName == "Douglas")
let douglas = {...douglasInArr}

console.log(luke);
console.log(rachel);
console.log(douglas);

// APIs and Promises
// 1.


// 2.
const readline = require('readline');
const axios = require("axios");
const {weatherApiKey} = require("../config/Keys");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    let city = await askQuestion("Which city do you want the current weather for: ");
    let response = await axios.get(``);
    // console.log(response.data);
    console.log(`The Maximum temperature in ${response.data.name} is ${response.data.main.temp_max - 273.1}`)
}

Program().then(() => {
    process.exit(0);
});

// 3.

