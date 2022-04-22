"use strict"

var trails = [
    {
        name: "Salado Creek Greenway",
        distanceInMiles: 20,
        isPaved: true
    },
    {
        name: "Leon Creek Greenway",
        distanceInMiles: 20.1,
        isPaved: true
    },
    {
        name: "McAllister Park: Blue Loop",
        distanceInMiles: 6.3,
        isPaved: false
    },
    {
        name: "Phil Hardberger Park: Geology Trail",
        distanceInMiles: 0.8,
        isPaved: false
    }
]
// Write a function that accepts the array of trail objects above, and returns the total distance of non-paved trails.
//     Expected output: 7.1

    function arrayOfTrails(arr) {
        var output = 0;
        arr.forEach(function (trail) {
            if (trail.isPaved === false) {
                output += trail.distanceInMiles;
            }
        });
        return output;

    }
        console.log(arrayOfTrails(trails));
    

   


    