"use strict";
( function(){

function doubleNumber(start,max){

    while (start <= max){
        console.log(start);
        start = start * 2;
    }
}
doubleNumber(2, 4989898);




function generateRandomSales(){
   var allCones = return Math.floor(Math.random() * 5) + 1;

}



function calculateConeSales(totalCones){

    do{
        var totalToSell = generateRandomSales();

        var actualSoldAmount = (totalCones >= totalToSell) ? totalToSell: totalCones;

        if(totalCones >= totalToSell) {
            actualSoldAmount = totalToSell;
        }else{
            actualSoldAmount = totalCones;
        }

        if(totalToSell === actualSoldAmount){
            console.log( actualSoldAmount + " cones sold... ");
        }else{
            console.log("Cannot sell you " + totalToSell + " cones I only have " + actualSoldAmount + " ...");
        }

        totalCones -= actualSoldAmount;

    }while (totalCones = 0);

    console.log("Yay! We sold all the cones!");

}

calculateConeSales(allCones);


















// Create a file named while.js in the js directory.
// Create a while loop that uses console.log() to create the output shown below.

    function doubleNumber(start, max) {
        while(start <= max) {
            console.log(start);
            start = start*2;
        }
    }

    doubleNumber(2,65536);

// An ice cream seller can't go home until she sells all of her cones.

// First write enough code that generates a random number between 50 and 100 representing the amount of cones to
// sell before you start your loop.

// Inside the loop your code should generate another random number between 1 and 5,
// simulating the amount of cones being bought by her clients.

// Use a do-while loop to log to the console the amount of cones sold to each person.

// The below code shows how to get the random numbers for this exercise.
// This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;

// This expression will generate a random number between 1 and 5
    function generateRandomSales() {
        return Math.floor(Math.random() * 5) + 1;
    }

// The output should be similar to the following:

    // 5 cones sold...  // if there are enough cones
    // Cannot sell you 6 cones I only have 3...  // If there are not enough cones
    // Yay! I sold them all! // If there are no more cones


    function calculateConeSales(totalCones) {

        // console.log(totalCones, "totalCones") // gets the random total cones
        do {
            var totalToSell =  Math.floor(Math.random() * 5) + 1;// between 1 and 5

            // using ternary, short
            var actualSoldAmount = (totalCones >= totalToSell) ? totalToSell : totalCones;

            // using full if, long
            // if(totalCones >= totalToSell) {
            //     actualSoldAmount = totalToSell;
            // } else {
            //     actualSoldAmount = totalCones
            // }

            if(totalToSell === actualSoldAmount) {
                console.log(actualSoldAmount + " cones sold...  ")
            } else {
                console.log("Cannot sell you " + totalToSell + " cones I only have "+ actualSoldAmount + "...")
            }

            // console.log(
            //     (actualSoldAmount === totalToSell) ?
            //     actualSold + ' cones sold...' :
            //     "Cannot sell you " + totalToSell + " cones I only have "+ actualSoldAmount +"..."
            // );

            totalCones -= actualSoldAmount;

        } while (totalCones > 0);

        console.log("Yay! I sold them all!")

    }

    calculateConeSales(allCones);














})();







