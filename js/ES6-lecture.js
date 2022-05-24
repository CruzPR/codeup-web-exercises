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
