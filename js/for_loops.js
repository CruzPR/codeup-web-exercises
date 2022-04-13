"use  strict";
(function(){
    // Create a function named showMultiplicationTable that accepts a number and
    // console.logs the multiplication table for that number
    // (just multiply by the numbers 1 through 10)

    var a = 0;
   function showMultiplicationTable(num){
       for(var i = 1 ; i < 11 ;i++ ){
           console.log(num * i);
       }
   }
showMultiplicationTable(7);

    // Use a for loop and the code from the previous lessons to generate 10 random
    // numbers between 20 and 200 and output to the console whether each number is odd or even.
    num = 1;
    randomNumber = Math.random() * num;

    function tenRandomNumbers(number){
        for(var num = 1; num > 20 && num < 200; num++){
            if(num % 2 === 0){
                return console.log("The number " +number+ " is even!");
            }else{
                return console.log("The number " +number+ " is odd!");
            }
        }
    }
    tenRandomNumbers()











































})();