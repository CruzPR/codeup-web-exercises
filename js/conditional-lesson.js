"use strict";
(function () {

    // Conditional

    var bill = 21;
    if (bill > 20) {
        console.log("A discount is being applied");
    }

    //
    var clothes = "blue jeans";
    if (clothes === "socks") {
        console.log("You are good to go to recess!")
    } else {
        console.log("Ops, that's not me... Guess I'll keep working!")
    }

// If/ Else If/ Else

    if (clothes === "socks") {
        console.log("You are good to fo to recess!")
    } else if (clothes === "blue jeans") {
        console.log("You are good to go to recess!")
    } else {
        console.log("Op, that's not me... Guess I'll keep on working!")
    }

    if (clothes) {
        console.log("I will always see this.")
    } else {
        console.log("I will never see this.")
    }
// Ternary Operator
    // (condition) ? do something if true : this happens if false;

    var isLoggedIn = true; //false
    isLoggedIn ? console.log("You are logged in") : console.log("You need to log in");

    //Use when it is less verbose, more readable.

    function sayHello(input) {
        if (input === "Hi") {
            alert("Hello");
        } else {
            alert("That's not how I want to be greeted!")
        }
    }

    sayHello("howdy!");
    sayHello("Hi");

    //Print Menu
    //1 - Cheeseburger w/ Fries
    //2 - Bacon Cheesebuger w/Fries
    //3 - Junior Cheesebuger w/Fries

    var userInput = parseInt(prompt("What number would you like to order?"));

    function printMenu(input) {
        if (input === 1) {
            alert("Your order was Cheeseburger w/ Fries!");
        } else if (input === 2){
            alert("Your order was Bacon Cheeseburger w/ Fries");
        } else if(input === 3) {
            alert("Your order was Junior Cheeseburger w/ Fries!");
        } else {
            alert("Sorry, that item is not on the menu");
        }
    }
        printMenu(1);

    // Switch Statements

    function printMenu2(input){
        switch (input) {
            case 1: 1
        }
    }

    var information = prompt("What would you like to know about? \n1. Puppers\n2. Algorithms\n3. Switch Statements");

        switch (information){
            case "1":
                alert("Puppers");
                break;
            case "2":
                alert("Algorithms");
                break;
            case "3":
                alert("Switch Statements");
                break;
            default:
                alert("Okay, bye bye!");
        }







})();