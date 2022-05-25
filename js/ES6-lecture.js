"use strict";

// ============== MINI EXERCISE

// TODO: Refactor the following code to use ES6 syntax. The output should stay the same.

const greatDessert = 'banana pudding';
const badDessert = 'rhubarb pie';
let dessertMessage = `Well, I love ${greatDessert} but I don't care for ${badDessert}.`;
console.log(dessertMessage);


let message = "";
const names = ['John', 'Paul', 'George', 'Ringo'];
// for (var i = 0; i < names.length; i += 1) {
//     message += 'Hello, ' + names[i] + '\n';
// }

for(let name of names) {
    message += `Hello, ${name} \n`;
}

console.log(message);


// ============== MINI EXERCISE

// TODO: Refactor the following code to use ES6 syntax. The output should stay the same.

     const doubleInput = input => input * 2;

    let addArgsC = (num1 = 2, num2 = 2) => num1 + num2;  // 2 inside the parameter's parathesis are the default value for the parameters

// Object assignment shorthand
// Property and value at the same time as a variable (key/value pairs) Front end framework

    const dog = {
        breed,
        age,
        name,
        isCute
    };

    const puppy = {
        breed: "Lab",
        age: 10,
        name: "Sabrina",
        isCute: true
    };

    let {breed, age, name, isCute} = puppy;

    let {username, password, isLoggedIn, isDarkMode} = userSettings;
        username = "Carlos"; // not everything is defined