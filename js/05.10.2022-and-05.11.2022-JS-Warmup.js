"use strict";
// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.

// Bonus: instead of the total students, return the highest number of students in any class

let classes = [
{class: "6th grade history", students: 18},
{class: "7th grade history", students: 20},
{class: "8th grade history", students: 22}
    ]
function calculateTotalStudents(arrayOfObjects) {
    var totalStudents = 0; // we need this so we can add to it.
    for (var i = 0;i < classes.length; i++) { // loop through each class to get to each number of students in each class
        totalStudents += classes[i].students; // adding up through each loop the total of number of students in each class into a variable called totalStudents
    }
    return totalStudents; // returns the added up number of students in every class(by looping)
}

// Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`

//convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}





var neighborhood1 ={
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

var neighborhood2 ={
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

var neighborhood3 ={
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

    function desirableNeighborhood(neighborhood) {
        var totalRating = 0;
        for (var i = 0;i < neighborhoodObject.schools[i].length; i++) {
            totalRating += neighborhoodObject.schools[i].rating;
        }
        return neighborhoodObject.medianHomePrice < 300000 && neighborhoodObject.crimeRate === "low";
    }