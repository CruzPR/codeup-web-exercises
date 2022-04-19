"use strict";
(function (){
/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
// how many inputs? 1
//what data type for inputs? string
//what is the return type? string

    function sayHello(str){
        return "Hello, " + str + "!";
        console.log(sayHello("Carlos"));
    }
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello("Carlos");
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Carlos";
    console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
// how many inputs? 1
//what data type for inputs? number
//what is the return type? boolean

    function isTwo (num){
        return num === 2;

}
console.log(isTwo(random), "Random number is " + num);



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
// how many inputs? 2
//what data type for inputs? floating numbers
//what is the return type? floating number

function calculateTip(tipPercentage, totalBill) {
    return parseFloat(totalBill) / parseFloat(tipPercentage);
        console.log(calculateTip(10, 100));
}

calculateTip(10, 100);

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

    var customerTotalAmount = parseFloat(prompt("How much is your bill total for today?"));
    var customerTip = parseFloat(prompt("How much would you like to tip?"));
    parseFloat(alert("This is the suggested tip amount: " + customerTotalAmount / customerTip));
// how many inputs?
//what data type for inputs?
//what is the return type?





/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
// how many inputs? 2
//what data type for inputs? float numbers
//what is the return type? float number

//     function applyDiscount(regularPrice, priceDiscountPercentage) {
//         // var regularPrice = parseFloat( 100.00);
//         // var priceDiscountPercentage = parseFloat(  0.5 );
//         var finalDiscountedPrice = parseFloat("$" +regularPrice) - parseFloat(priceDiscountPercentage + "%");
//             return "$" + parseFloat(finalDiscountedPrice) ;
//     console.log(finalDiscountedPrice);
// }
// applyDiscount(100.00, 0.5);
    



})();

