
"use strict";

// Write a function that accepts an array of numbers and returns the average.
var total = 0;

function average(array) {
    // for(var i = 0; i < array.length; i++) {
    //     total += array[i]; // Adding the sum of all [i] values to total.
    // }
    // return total / array.length;
    array.forEach(function(number) {
        total += number;
    })
    return total / array.length;
}
    console.log(average([3, 5, 7, 10, 0]));
    console.log(average([0, 3, 5, 6, 21]));






//
//     Test inputs:
//     [3, 5, 7, 10, 0]
//         [0, 3, 5, 6, 21]










