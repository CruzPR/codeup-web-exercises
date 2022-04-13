"use  strict";
(function(){
    // Create a function named showMultiplicationTable that accepts a number and
    // console.logs the multiplication table for that number
    // (just multiply by the numbers 1 through 10)

//     function showMultiplicationTable(num){
//        for(var i = 1 ; i < 11 ;i++ ){
//            console.log(num * i);
//        }
//    }
// showMultiplicationTable(7);
    function showMultiplicationTable(number){
        for(var i = 1; i < number; i++){
            var total = i*number;
            console.log(number + " x " + i + " = " + total)
        }
    }
    
    showMultiplicationTable(7);

    // Use a for loop and the code from the previous lessons to generate 10 random
    // numbers between 20 and 200 and output to the console whether each number is odd or even.
    // num = 1;
    // randomNumber = Math.random() * num;
    //
    // function tenRandomNumbers(number){
    //     for(var num = 1; num > 20 && num < 200; num++){
    //         if(num % 2 === 0){
    //             return console.log("The number " +number+ " is even!");
    //         }else{
    //             return console.log("The number " +number+ " is odd!");
    //         }
    //     }
    // }
    // tenRandomNumbers()

    function randomValue(min,max){
        return Math.floor( Math.random() * (max - min + 1)) + min;
    }
    
    
    function getOddOrEvenRandomNumber(numbersToGenerate, min, max){
        for(var i = 1; 1 <= numbersToGenerate; i++){
            var randomNumber =  randomValue(min,max);
            
            if(random % 2 === 0){
                console.log(randomNumber + " is even");
            } else {
                console.log(randomNumber + " is odd");
            }
            
        }
    }

getOddOrEvenRandomNumber(10, 20, 200);






    // Create a for loop that uses console.log to create the output shown below.
    // 1
    // 22
    // 333
    // 4444
    // 55555
    // 666666
    // 7777777
    // 88888888
    // 999999999

    // function showDigitsMultipleTimes(max) {
    //     for(var i = 1; i <= max; i++){
    //         var string = i.toString().repeat()
    //         console.log(string);
    //     }
    // }
    //
    // showDigitsMultipleTimes(9);

    function showDigitsMultipleTimes(max) {
        for(var i = 1; i <= max; i++){
            var string = i.toString().repeat()
            console.log(string);
        }
    }

    showDigitsMultipleTimes(9);
    
    // Create a for loop that uses console.log to create the output shown below.

    function substractValueFromMax(max, subtract) {
        for(var i = max; i >= 0; i -= subtract){
            console.log(i)
        }
    }
    
    substractValueFromMax(100, 5);






































})();