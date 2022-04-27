(function(){
"use strict"

// ================================= WARM UP


    // Create a function, createNumObject, that takes in two numbers and returns an object with the following properties:

    // {
    //
    //     lowest: LOWEST_NUMBER_HERE,
    //         highest: HIGHEST_NUMBER_HERE
    // }

    // Assume both inputs are number data types. The first argument may or may not be higher than the second argument. If both number inputs are equal, return the same object but with the same number value for both the lowest and highest property values.
    //
    //
    //     EXAMPLES...
    var someObj = {};

    function createNumObject(num1,num2) {

        if(num1 === num2){
            return {  // object literal
                lowest: num1,
                highest: num2
            } ;
        } else if(num1 > num2) {
            return {
                lowest: num2 ,
                highest: num1
            }
        } else {
            return {
                lowest: num1,
                highest: num2
            }
        }
    }


    console.log(createNumObject(1, 3)); // returns...

    /*
      {
        lowest: 1,
        highest: 3
      }
    */

    console.log(createNumObject(10, 5)); // returns...

    /*
      {
        lowest: 5,
        highest: 10
      }
    */

    console.log(createNumObject(7, 7)); // returns...

    /*
      {
        lowest: 7,
        highest: 7
      }
    */

    // TERNARY OPERATOR
    function getFee(isMember) {
        return (isMember ? '$2.00' : '$10.00'); // (condition ? 'truthy' : 'falsy';
    }

    console.log(getFee(true));
// expected output: "$2.00"

    console.log(getFee(false));
// expected output: "$10.00"

    console.log(getFee(null));
// expected output: "$10.00"

    var age = 26;
    var beverage = (age >= 21) ? "Beer" : "Juice";
    console.log(beverage); // "Beer"









}());