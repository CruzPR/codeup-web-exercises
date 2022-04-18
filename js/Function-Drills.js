
(function (){
    "use strict";

// Functions using conditionals but not loops or arrays:

    // Make a function named isOdd(number)

    function isOdd(num){
        if(num % 2 === 1){
            return "This number is odd!"
        }
            return "This number is even!"

    }
    
    console.log(isOdd(2));
    console.log(isOdd(1));
    console.log(isOdd("6"));
    console.log(isOdd(0));

    // Make a function named isEven(number)

    function isEven(num){
        if(num % 2 === 0){
            return "This number is even!"
        }
            return "This number is odd!"
    }
    console.log(isEven(2));
    console.log(isEven(1));
    console.log(isEven("6"));
    console.log(isEven(0));

    // Make a function named identity(input) that returns the input exactly as provided.
    function identity(input){
        return input;
    }
    console.log(identity("hello"));
    console.log(identity(3));
    console.log(identity(""));
    console.log(identity("three"));

// Make a function named isFive(input)
    
    function isFive(input){
        if(input == 5){
            return true;
        }
            return false;
    }
    console.log(isFive("5"));
    console.log(isFive(8));
    console.log(isFive("five"));
    console.log(isFive(5));

// Make a function named addFive(input) that adds five to some input.
    
    function addFive(num){
        return num + 5;
    }

    console.log(addFive(5));
    console.log(addFive("5"));
    console.log(addFive(-2));
    console.log(addFive(true));
    console.log(addFive(false));

// Make a function named isMultipleOfFive(input)
    
    function isMultipleOfFive(num){
        return num * 5;
    }

    console.log(isMultipleOfFive(5));
    console.log(isMultipleOfFive("5"));
    console.log(isMultipleOfFive("five"));
    console.log(isMultipleOfFive(true));
    console.log(isMultipleOfFive(false));

// Make a function named isThree(input)
    
    function isThree(input){
        if(input == 3){
            return true;
        }
            return false;
    }
    console.log(isThree(3));
    console.log(isThree('3'));
    console.log(isThree("three"));
    console.log(isThree(-3));

// Make a function named isMultipleOfThree(input)
    
    function isMultipleOfThree(input){
        if(input % 3 === 0 ){
            return true;
        }
            return false;
    }

    console.log(isMultipleOfThree(4));
    console.log(isMultipleOfThree("9"));
    console.log(isMultipleOfThree(30));
    console.log(isMultipleOfThree("99"));

// Make a function named isMultipleOfThreeAndFive(input)
    function isMultipleOfThree(input){
        if(input % 5 === 0 ){
            return true;
        }
        return false;
    }

    console.log(isMultipleOfThree(40));
    console.log(isMultipleOfThree("50"));
    console.log(isMultipleOfThree(155));
    console.log(isMultipleOfThree("99"));
    
// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
    function isMultipleOf(target, n){
        if(target % n === 0){
            return true;
        }
            return false;
    }

    console.log(isMultipleOf(99, 9 ));
    console.log(isMultipleOf(99, 3 ));
    console.log(isMultipleOf(99, 11 ));
    console.log(isMultipleOf(99, 4 ));

// Make a function named isTrue(boolean)

    function isTrue(boolean){
        if(boolean === true){
            return true;
        }
            return false;
    }

    console.log(isTrue(true));
    console.log(isTrue(false));
    console.log(isTrue("1"));
    console.log(isTrue(-1));

// Make a function named isFalse(boolean)

    function isFalse(boolean){
        if(boolean === false){
            return false;
        }
            return true;
    }

    console.log(isFalse(true));
    console.log(isFalse(false));
    console.log(isFalse("1"));
    console.log(isFalse(-1));

// Make a function named isTruthy(input), remember that values other than true will behave like true  
    function isTruthy(input){
        if(input === Boolean(true)){
            return true;
        }
            return false;
    }

    console.log(isTruthy(1));
    console.log(isTruthy(-1));
    console.log(isTruthy(true));
    console.log(isTruthy(false));
    
    
// Make a function named isFalsy(input), remember that values other than false behave like false
    function isFalsy(input) {
        if(input === Boolean(false)){
           return true ;
        }
           return false ;
    }
    
    console.log(isFalsy(1));
    console.log(isFalsy(-1));
    console.log(isFalsy(true));
    console.log(isFalsy(false));
    
    // Make a function named isVowel(letter)
        
        function isVowel(str) {
            if(
                str === "a" ||
                str === "e" ||
                str === "i" ||
                str === "o" ||
                str === "u" ||
                str === "A" ||
                str === "E" ||
                str === "I" ||
                str === "O" ||
                str === "U" 
                
            ) {
                return true;
            }
                return false;
        }

    console.log(isVowel("a"));
    console.log(isVowel("c"));
    console.log(isVowel("e"));
    console.log(isVowel("I"));

// Make a function named isConsonant(letter)
    
        function isConsonant(str) {
            if(
                str === "b" ||
                str === "c" ||
                str === "d" ||
                str === "f" ||
                str === "g" ||
                str === "h" ||
                str === "j" ||
                str === "k" ||
                str === "m" ||
                str === "n" ||
                str === "l" ||
                str === "p" ||
                str === "q" ||
                str === "r" ||
                str === "s" ||
                str === "t" ||
                str === "v" ||
                str === "w" ||
                str === "x" ||
                str === "y" ||
                str === "z" ||
                str === "C" ||
                str === "D" ||
                str === "F" ||
                str === "G" ||
                str === "H" ||
                str === "J" ||
                str === "K" ||
                str === "M" ||
                str === "N" ||
                str === "L" ||
                str === "P" ||
                str === "Q" ||
                str === "R" ||
                str === "S" ||
                str === "T" ||
                str === "V" ||
                str === "W" ||
                str === "X" ||
                str === "Y" ||
                str === "Z" 
            
            ) {
                return true;
            } 
                return false;
        }
        
    console.log(isConsonant("b"));
    console.log(isConsonant("A"));
    console.log(isConsonant("1"));
    console.log(isConsonant("Z"));

// Make a function named isCapital(letter)
        function isCapital(str) {
            if(str.toUpperCase() === str) {
                return true;
            }
                return false;
        }
    console.log(isCapital("b"));
    console.log(isCapital("A"));
    console.log(isCapital("b"));
    console.log(isCapital("B"));
    
// Make a function named isLowerCase(letter)
    function isLowerCase(str) {
        if(str.toLowerCase() === str) {
            return true;
        }
        return false;
    }
    console.log(isLowerCase("b"));
    console.log(isLowerCase("A"));
    console.log(isLowerCase("k"));
    console.log(isLowerCase("Z"));
    
// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
    
    function hasLowerCase(str) {
        if(str.toUpperCase() !== str) {
            return str;
        }
            return "The string " + str + " does not have any lower cased letters!"
    }
    console.log(hasLowerCase("balloon"));
    console.log(hasLowerCase("AVIATION"));
    console.log(hasLowerCase("Apple"));
    console.log(hasLowerCase("SALOON"));
    
// Make a function named isSpace(letter) that returns if a character is a space character
    
    function isSpace(str) {
        return str.includes(' ');
    }
    console.log(isSpace("Hello there!"));
    console.log(isSpace("Hellothere!"));
    console.log(isSpace(" "));
    console.log(isSpace("1 "));
    
// Make a function named isZero(number)
    function isZero(input) {
        if(input === 0){
            return true;
        }
            return false;
    }
    console.log(isZero(0));
    console.log(isZero("0"));
    console.log(isZero(NaN));
    console.log(isZero(10));
    
// Make a function named notZero(input) that returns true if the input is not zero
    function notZero(input) {
        if(input !== 0) {
            return true;
        }
            return false;
    }
    console.log(notZero(0));
    console.log(notZero("0"));
    console.log(notZero(NaN));
    console.log(notZero(10));
    
// Write a function named lowerCase(string)
    function lowerCase(str) {
        if(str.toLowerCase() === str) {
            return true;
        }
            return false;
    }
    console.log(lowerCase("hi"));
    console.log(lowerCase("HI"));
    console.log(lowerCase("1"));
    console.log(lowerCase("Hi"));
    
// Write a function named double(n) that returns a number times two
    function double(n) {
        return n = n * 2;
    }
    console.log(double(4));
    console.log(double(2847));
    console.log(double(NaN));
    console.log(double(3.55));
    
// Write a function named triple(n) that returns a number times 3
    function  triple(n) {
        return n = n * 3;
    }
    console.log(triple(898));
    console.log(triple(5));
    console.log(triple("hi"));
    console.log(triple(34.523));
    
// Write a function named quadruple(n) that returns a number times 4
    function quadruple(n) {
        return n = n * 4;
    }
    console.log(quadruple(32.84));
    console.log(quadruple("Hello"));
    console.log(quadruple(23));
    console.log(quadruple(35325));
    
// Write a function named half(n) that returns 1/2 of the provided input
    function half(n) {
        return n /= 2 ;
    }
    console.log(half(40));
    console.log(half(32.653));
    console.log(half("40", 20));
    console.log(half(-3));
    
// Write a function named subtract(a, b) that returns a minus b
    function subtract(a, b) {
        return a - b;
    }
    console.log(subtract(2, 2));
    console.log(subtract(-2, -2));
    console.log(subtract(32.32, 53.92));
    console.log(subtract("34", 32))
    
// Write a function named multiply(a, b) that returns the product of a times b
    function multiply(a, b) {
        return a * b;
    }
    console.log(multiply(5, 19));
    console.log(multiply("29.2", 48));
    console.log(multiply(-2, "23"));
    console.log(multiply("Hi there!"))
    
// Write a function named divide(a, b) that returns a divided by b
    function divide(a, b) {
        return a / b;
    }

    console.log(divide("32", 10));
    console.log(divide("Hi"));
    console.log(divide(5334.32, "10.343"));
    console.log(divide(-345, 325));
    
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
    function remainder(a, b) {
        return a % b;
    }

    console.log(remainder(10, 4 ));
    console.log(remainder(20, 5));
    console.log(remainder(122, 20));
    console.log(remainder("39", 9));

// Make a function named modulo(a, b) that returns the remainder after dividing a by b
    function modulo(a, b) {
        return a % b;
    }
    console.log(modulo(10, 4 ));
    console.log(modulo(20, 5));
    console.log(modulo(122, 20));
    console.log(modulo("39", 9));
    
// Write a function named cube(n) that returns n * n * n
    function cube(n) {
        return n **= 3;
    }
    console.log(cube(3));
    console.log(cube(100));
    console.log(cube("Hi there"));
    console.log(cube("20"));
    
// Write a function named squareRoot(n) that returns the square root of the input
    function squareRoot(n) {
        return Math.sqrt(n);
    }
    console.log(squareRoot(4));
    console.log(squareRoot(-40));
    console.log(squareRoot("100"));
    console.log(squareRoot(20.2));
    
// Write a function named cubeRoot(n) that returns the cube root of the input
    function cubeRoot(n) {
        return Math.cbrt(n);
    }
    console.log(cubeRoot(30));
    console.log(cubeRoot(100));
    console.log(cubeRoot(-10));
    console.log(cubeRoot(null));
    
// Write a function named invertSign(number) that returns a negative version of a positive number, a positive version of negative, and false for all else.
    function invertSign(number) {
        if(number < 0 || number > 0) {
            return number = number * -1;
        } else {
            return false;
        }
    }
    console.log(invertSign(4));
    console.log(invertSign(-4));
    console.log(invertSign(0));
    console.log(invertSign(4.4));
    
// Write a function named degreesToRadians(number)
    function degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    console.log(degreesToRadians(180));
    console.log(degreesToRadians(360));
    console.log(degreesToRadians(-180));
    console.log(degreesToRadians("90"));
    
// Write a function named radiansToDegrees(number)
    function radiansToDegrees(radians) {
        return radians / (Math.PI / 180);
    }
    console.log(radiansToDegrees(1));
    console.log(radiansToDegrees(-2.6));
    console.log(radiansToDegrees(0.50));
    console.log(radiansToDegrees("3.14"));
    
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
    function isBlank(input) {
        return input.includes(' ') || 
            input.includes("\n") || 
            input.includes("\t");
    }
    console.log(isBlank(" "));
    console.log(isBlank("Hi\n,howareyou?"));
    console.log(isBlank("Hi\thowareyou?"));
    console.log(isBlank("Hi"));
    
// Make a function named trim(string) that removes empty spaces before and after the input.
    function trim(str) {
        return str.trim();
    }
    console.log(trim(" Hi "))
    console.log(trim("           Hello            "))
    
// Make a function named areEqual(input1, input2) that returns if both inputs have the same value
    function areEqual(input1, input2) {
        if(input1 == input2) {
            return "The inputs " +input1+ " and " + input2 + " are equal in value!";
        } else {
            return "The inputs are not equal in value!"
        }
    }
    console.log(areEqual(1, 1));
    console.log(areEqual("Hi", "HI"));
    console.log(areEqual( 43, 52));
    console.log(areEqual("Hello", "Hello"));
    
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
    function areIdentical(input1, input2) {
        if(input1 === input2){
            return "The inputs " +input1+ " and " +input2+ " are identical!";
        } else {
            return "The inputs are not identical!"
        }
    }
    console.log(areIdentical(20,20));
    console.log(areIdentical(20, "20"));
    console.log(areIdentical("Hi there!", "HI, there!"));
    console.log(areIdentical(NaN, "Hi"));
    
// Make a function named not(input) returns the input with a flipped boolean
    function not(input) {
        return !input;
    }
    console.log(not(false));
    console.log(not(true));
    
// Make a function named notNot(input) that the negation of the negation of the input.
    function notNot(input) {
        return !!input;
    }
    console.log(notNot(true));
    console.log(notNot(false));
    
// Make a function named and(predicate1, predicate2) that returns the logical operation of AND
    
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
    
// Write a function called reverseString(string) that reverses a string
    function reverseString(string) {
        var splittedString = string.split("");
        console.log(splittedString);
        var reversedArray = splittedString.reverse();
        console.log(reversedArray);
        var joinedArray = reversedArray.join("");
        return joinedArray;
    }
    console.log(reverseString("Puerto"));
    console.log(reverseString("1, 2, 3, 4, 5"))
    
    //with a For Loop!
    
    function forMethodReverseString(string) {
        var newString = []; //empty array for the string.
        for(var i = string.length - 1; i > 0; i--){
            newString += string[i]; //Concatenating or appending to the empty array.
            return newString;
        }
    }
    console.log(forMethodReverseString("12345"));
    
// Make a function named absoluteValue(number) that returns the absolute value of a number.
    function absoluteValue(number) {
        return Math.abs(number);
    }
    console.log(absoluteValue(-32));
    console.log(absoluteValue(32));
    
// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
    var diceSides = [1, 2, 3, 4, 5]
    var sides = Math.ceil(Math.random() * (0 + 6));
    function rollDice(sides) {
        return "The dice rolled a " +sides+ "!";
    }
    console.log(rollDice(sides));

// Simple Function Drills

// Make a function called returnTwo() that returns the number 2 when called
// Test this function with console.log(returnTwo())
    function returnTwo() {
        return 2;
    }
    console.log(returnTwo());

//
// Make a function called sayHowdy() which console.logs the string “Howdy!”
// Test this function by directly calling sayHowdy()
    function sayHowdy() {
        console.log("Howdy!");
    }
    sayHowdy();
    // Remember this function does not need a defined return value

// Make a function called returnName() that returns the string of your name
    function returnName(name) {
        return name;
    }

    console.log(returnName("Sibel"));
    console.log(returnName("Carlos"));
    console.log(returnName( 4));
    console.log(returnName("4"));
    // Test this function with console.log(returnName())

// Make a function called addThree() which takes in a number input and returns the number plus 3.
// Test this function with console.log(addThree(5))
    function addThree(num) {
        return num += 3;
    }
    console.log(addThree(6));
    console.log(addThree("6"));
    console.log(addThree(-1));
    console.log(addThree(true));
    
// Make a function called sayString() which returns the string input passed in.
// Test this function with console.log(sayString('codeup'))
    function sayString(str) {
        return str;
    }
    console.log(sayString("codeup"));

// Challenge Function Drills
// Write a function called identity(input) that takes in an argument called input and returns that input.
    function indentity(input) {
        return input;
    }
    console.log(indentity("Hi codeUp!"));
    console.log(identity(4));
    console.log(indentity(NaN));
    console.log(indentity(4 + 3));


// Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
    function getRandomNumber(min, max) {
        return Math.ceil(Math.random() * (max - min) + min);
    }

    console.log(getRandomNumber(1, 100));
    console.log(getRandomNumber("Hi", 2));
    console.log(getRandomNumber(-50, 50));

// Write a function called first(input) that returns the first character in the provided string.
    function first(input) {
        return input.substring(0,1);
    }
    console.log(first("Howdy!"));
    
// Write a function called last(input) that returns the last character of a string
    function last(input) {
        return input.substring(input.length - 1, );
    }
    console.log(last("Boricua!"));
    
// Write a function called rest(input) that returns everything but the first character of a string.
    function rest(input) {
        return input.substring( 1 ,  );
    }
    console.log(rest("Turkey"));
    
// Write a function called reverse(input) that takes a string and returns it reversed.
    function reverse(input) {
        var string = [];
        string += input;
        var splittedInput = string.split("");
        var reversedInput = splittedInput.reverse();
        return reversedInput.join("");
    }
    console.log(reverse("Himalaaaya"));
    
// Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
    function isNumeric(input) {
        if(typeof input === "number"){
            return true;
        } else {
            return false;
        }
    }
    console.log(isNumeric(4));
    console.log(isNumeric("3"));
    console.log(isNumeric(NaN));
    console.log(isNumeric(0));
    
// Write a function called count(input) that takes in a string and returns the number of characters.
    function count(input) {
        return input.length;
    }
    console.log(count("Hi there!"));
    console.log(count(""));;
    console.log(count(1));
    
// Write a function called add(a, b) that returns the sum of a and b
    function add(a,b) {
        return  a + b;
    }

    console.log(add(2, 5));
    console.log(add(-5, 5));
    console.log(add(3.554, 3));
    console.log(add("Hi there", ", how are you?"));
    
// Write a function called subtract(a, b) that return the difference between the two inputs.
    function subtract(a,b) {
        return a - b;
    }

    console.log(subtract(4.32, 89));
    console.log(subtract("Hi there", ", how are your?"));
    console.log(subtract(34,34));
    
// Write multiply(a, b) function that returns the product
    function multiply(a,b) {
        return a * b;
    }

    console.log(multiply(3, 23.43));
    console.log(multiply("Hi there, ", "how are you?"));
    console.log(multiply(0, 3435.98));
    console.log(multiply(69,69));
    
// Write a divide(numerator, denominator) function that returns a divided by b
    function divide(numerator, denominator) {
        return numerator / denominator;
    }
    console.log(divide(100, 10));
    console.log(divide(23.23, 3));
    console.log(divide("Hi", " there"));

// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
    function remainder(number, divisor) {
        return number % divisor;
    }
    console.log(remainder(100, 10));
    console.log(remainder(40, 3));
    console.log(remainder(NaN, 10));
    console.log(remainder(0, 0 ));
    
// Write the function square(a) that takes in a number and returns the number multiplied by itself.
    function square(num) {
        return Math.sqrt(num);
    }
    console.log(square(4));
    console.log(square(120));
    console.log(square(-40.2));
    console.log(square("hi"));
    
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
    function sumOfSquares(square1, square2) {
        return Math.sqrt(square1) + Math.sqrt(square2);
    }
    console.log(sumOfSquares(30, 20));
    console.log(sumOfSquares(100, 10));
    console.log(sumOfSquares("Hi", 100));
    
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
    function doMath(operator, a, b) {
        if(operator === "+") {
            return a + b;
        } else if(operator === "-") {
            return a - b;
        } else if(operator === "*") {
            return a * b;
        } else if(operator === "/") {
            return a / b;
        } else if(operator === "%") {
            return a % b;
        } else {
            return "I only accept '+', '-', '*', '/', '%' and operators!"
        }
    }
    console.log(doMath("-",100,10));
    console.log(doMath("+", 30, 30));
    console.log(doMath("*", 50, 50));
    console.log(doMath("/", 40, 2));
    console.log(doMath("%", 80, 3));
    
// Even More Function Bonuses
// Create a function that will return how many whitespace characters are at the beginning and end of a string.
//
// Create a function that takes in two string inputs.
//
// If the second string input is present in the first, return the first input string with the second input string removed from it.
// If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
// If the second string input is not present in the first, return the first string as entered in the function.
// Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).
//
// EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
//
// Create a function returnTrueMessage() that returns the string "Hey, it's true!"
//
// Create a function returnFalseMessage() that returns the string "Hey, it's false!"
// Create a function returnMessage() that takes in a function and returns the call to the function
// Experiment passing in different functions.
// Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
//
// The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.


})();