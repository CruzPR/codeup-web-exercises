(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split("|");

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var splitedPlanetsArray = planetsArray.join("<br>");
    
    console.log(splitedPlanetsArray);

    var planetsList = "<ul><li>"  +planetsArray.join("</li></ul>")  +  "</li></ul>";


// ============= BONUS 1
//
//     // ** Create a function that will take in a formatted string of numbers and return an array of phone numbers without any symbols. Console.log the output of the returned array.
//
//     /* EXAMPLE...
//    
//         var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
//    
//         cleanPhoneNumbers(phoneNumbers);
//    
//         the above code should output the following...
//    
//            2105552020
//            2305552020
//            5125553030
//    
//    
//     */
//
//     // var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
//
//     ============== BONUS 2
//
//     Write a program to toggle all characters in a string: in a given string, toggle all characters to their opposite case. Special characters will not change.
//
//         Example input: "aBc12#""
//     Example output: "AbC12#"
//
        function flipCase(str) {
            var output= '';
            //loop through each character and flip the case if it's a letter
            //method channing
            str.split('').forEach(function(character) {
                if(character === character.toUpperCase()) {
                    output += character.toLowerCase();
                } else {
                    output += character.toUpperCase();
                }
            });
            return output;
        }

        console.log(flipCase("aBc12#"), "AbC12#");








//     ============== BONUS 3
//
//     Write a program that takes a given string appended with a number at the end. The program will check the length of the string to verify the string is equal to the number appended. If the number appended equals the string length, output "Yes". if the number appended does not equal the string length, output "No".
//
//         Example Input: "geek5"
//     Example Output: "Yes"
//
//     Example Input: "codingchallenge25"
    
    
    
})();