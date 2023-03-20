/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
//through destructuring assignment, ES6 automatically assigns the first value in the  array to the variable john, the second to the  
// variable mary, and the third to the variable  joe. Using ES6 destructuring assignment,  
// we were able to reduce the three variable  assignments above to just a single line of code.
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};

let {mike, jill, alicia} = jobs;

console.log(mike, jill, alicia);

// Notice in both of the above situations, while it  looks like you're defining an array or an object,  
// by putting the square brackets or curly  braces on the left side of the expression,  
// ES6 understands that you are trying to create  three separate variables using destructuring. 

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

//you can skip values by leaving the  commas in place of the values you want to skip
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

//destructuring objects
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "Japanese"
};
let {firstLanguage, secondLanguage} = languages2;
console.log(firstLanguage, secondLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);

let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};

let {brian, anna, ...rest} = favouriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);