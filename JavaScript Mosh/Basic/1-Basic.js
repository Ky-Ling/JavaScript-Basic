/*
 * @Date: 2021-11-20 18:38:37
 * @LastEditors: GC
 * @LastEditTime: 2022-01-07 21:15:09
 * @FilePath: \JavaScrip Mosh\Basic\1-Basic.js
 */

// 1: Variables
let name = 'John Fish'
console.log(name)

//  Some rules of define the variable
//      1: Cannot be a reserved keyword
//      2: Should be meaningful
//      3: Cannot start with a number
//      4: Cannot contain space or hyphen(-)
//      5: Are case-sensitive
//      6: As a best practice, if we have to define two variables, we should define them on a single line one by one.

let firstName = "John";
let lastName = "Fish";

// The first letter of the first word should be lowercase and the first letter of every word after should be uppercase, this is 
//      what we called camel notation. --> firstName








// 2: Constants
let interestRate = 0.2;
interestRate = 1;
console.log(interestRate);

// Sometimes we do not wanna the values of a variable to be changed, we can use constant

const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
// From the result, we will get an error message







// 3: Primitive types (String, Number, Boolean, undefined, null)
let name = "John";         // String literal
let age = 19;              // Number literal
let isApprove = true;      // Boolean literal
let firstName = undefined; // Undefined

// Clear the value of a variable
let lastName = null // Null






// 4: Dynamic Typing
let name = 'John';
let firstName = undefined
// Then go back to the console in the browser, and we type:
typeof name;
name = 1;
typeof name; // Now the type is changed 


typeof firstName // We have known that "undefined" is the primitive type, but this demo we set the firstName to undefined,
                 // it is a value too.




// 5: Objects
//      We know the primitive types before, and we also have reference types(objects, function, array)

// Define a person object:
let person = {
    name: 'Tim',
    age: 23 
}

console.log(person);


// Change the name of this person:
//   There are two ways to work with properties:

// 1: Dot Notation:
person.name = 'Mosh';
console.log(person.name);

// 2: Bracket Notation:
person['name'] = 'Marry';
console.log(person['name']);




// 6: Arrays
let selectedColors = ['red', 'blue'];

// Because it is a dynamic language, so this line of code means the third element in this array is green.
//   The length is dynamic, it can be changed
selectedColors[2] = 'green';


// And in JavaScript we can store different types in an array.
selectedColors[3] = 1;
console.log(selectedColors);

// Access the element with the index
console.log[selectedColors[0]];


// On the console:
typeof selectedColors; // Array is an object in JavaScript, so we can access the properties using dot notation.


// It returns the number of items or elements in an array.
console.log(selectedColors.length)



// 7: Functions

// Parameter
function greet(name, lastName) {
    console.log("Hello " + name + ' ' + lastName);
}


// Argument is the actual value with supply for that parameter
greet('John', 'Fish');
greet('Mosh');





// 8: Types of functions

// Performing a task
function greet(name, lastName) {
    console.log("Hello " + name + ' ' + lastName);
}

// Calculating a value
function square(number) {
    return number * number;
}

let number = square(3);
console.log(number);
console.log(square(5));

