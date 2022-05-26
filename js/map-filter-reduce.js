"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Exercises
// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
//   1  Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
//   2  Use .map to create an array of strings where each element is a user's email address
//   3    Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
//   4   Use .reduce to get the longest email from the list of users.
//   5   Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// 1

    let userLanguagesCount = users.filter(user => user.languages.length >= 3);

// 2

    const userEmail = users.map(user => user.email)

// 3

    const userTotalYearsExp = users.reduce((previousValue, currentValue ) => {
        return previousValue + currentValue.yearsOfExperience
}, 0);

    const averageYearsOfExp = userTotalYearsExp/ users.length;

// 4

    const longestUserEmail = users.reduce((previousValue, currentValue) => {
        if(currentValue.email.length > previousValue.length) previousValue = currentValue.email;
        return previousValue;

}, "")

// 5

     const instructorsNames = user.reduce((previousValue, currentValue, currentIndex, array) => {

            let delimeter = ",";
            if(currentIndex === (array.length - 1)) delimeter + ".";  // changes to a period at the last index (5)

            currentValue.name + currentValue.name + delimiter;
         return previousValue;
     }, "Your instructors are: ")

// Bonus
// Use .reduce to get the unique list of languages from the list of users.

    const uniqueUserLanguages = users.reduce((previousValue, currentValue) => {
        currentValue.languages.forEach(language => {
            if(previousValue.indexOf(language) === -1) previousValue.push(language) // if not found
        });
        return previousValue;
    }, []); // starts with empty array
