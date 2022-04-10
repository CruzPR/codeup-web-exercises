"use strict";

(function (){


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

    // function analyzeColor(strColor) {
    //     if( strColor === "blue") {
    //         return alert("The color " + strColor + " is the color of the ocean!");
    //     } else if ( strColor === "red") {
    //         return alert("The color " +strColor+ " is the color of roses!");
    //     } else if ( strColor === "yellow"){
    //         return alert("The color" +strColor+ " is the color of taxis!");
    //     } else if ( strColor === "orange"){
    //         return  alert("The color " +strColor+ " is the color of oranges");
    //     } else {
    //         return  alert("I dont know anything that has the " +strColor+ " color!");
    //     }
    //
    // }
    //
    // console.log(analyzeColor("red"));
    // console.log(analyzeColor("orange"));
    // console.log(analyzeColor("black"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

    // console.log(analyzeColor(randomColor));


    /**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
    
        var userFavColor = prompt("What is you favorite color?")
        function analyzeColor (userFavColor) {
            switch (userFavColor) {
                case "blue": 
                return alert("The color " + userFavColor + " is the color of the ocean!");
                break;
                case "red":
                return alert("The color " +userFavColor+ " is the color of roses!");
                break;
                case "yellow":
                return alert("The color" +userFavColor+ " is the color of taxis!");
                break;
                case "orange":
                return  alert("The color " +userFavColor+ " is the color of oranges");
                break;
                default:
                return  alert("I dont know anything that has the " +userFavColor+ " color!");
                break;

            }

        }
        console.log(analyzeColor(userFavColor));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
    var numbers = [0, 1, 2, 3, 4, 5];
    var randomLuckyNumber = numbers[Math.floor(Math.random() * 5)];
    var assignedLuckyNumber = randomLuckyNumber;
    

        function calculateTotal(assignedLuckyNumber,totalAmount) {

            alert("You will now be assigned a lucky number to win amazing discounts or even free items, good luck!")

            if( assignedLuckyNumber === 0) {
                return  "Sorry, you won no discount today, better luck next time!"
            }else if(assignedLuckyNumber === 1){
                return totalAmount / "$" + 10 ;
            }else if(assignedLuckyNumber === 2){
                return totalAmount / "$" + 25;
            }else if(assignedLuckyNumber === 3){
                return totalAmount / "$" + 35;
            }else if(assignedLuckyNumber === 4){
                return totalAmount / "$" + 50;
            }else if(assignedLuckyNumber === 5){
                return "Congratulations, today you get everything for free!";
            }else{
                return "You have to pick a number from 1 to 5";
            }

        }
    console.log(calculateTotal(assignedLuckyNumber,100));


    








/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

})();