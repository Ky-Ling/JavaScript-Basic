/*
 * @Date: 2021-11-20 21:00:52
 * @LastEditors: GC
 * @LastEditTime: 2022-01-12 21:45:37
 * @FilePath: \JavaScrip Mosh\Basic\2-Operators.js
 */


// 1: Arithmetic Operators

let x = 1;
let y = 4;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Increment:

console.log(x++); // We will see the x on the console first and then the value of x will be incremented by 1
console.log(++x); // The value of x will be incremented by 1 first and then we will see that on the console

// Decrement:
console.log(y--);
console.log(--y);





// 2: Assignment Operator:
let x = 20;

x += 5; // Same with: x = x + 5
x *= 3; // Same with: x = x * 3




// 3: Comparison Operator:

let x = 3;

// Relational
console.log(x > 3); // The result is the boolean
console.log(x >= 3);
console.log(x < 5);
console.log(x <= 5);


// Equality
console.log(x === 2);
console.log(x !== 3);




// 4: Equality Operator:

// Strict equality operator (type + value)
console.log(1 === 1);
console.log('1' === 1); // False 


// Lose equality operator (It does not care the types matching, if the types do not match, it will convert the type on the right 
//   side to match what behind the left side, and it will only check if the values are equal.)
console.log(1 == 1);
console.log('1' == 1); // True --> Because the left side is a string, so it will revert the 1 of the right side 
//                          to a string('1' == '1')
console.log(true == 1) // Because the left side is a boolean, it will convert 1 to a boolean (true == true)





// 5: Ternary Operator:

// If a customer has more than 100 points, they are a 'gold' consumer, otherwise they are a 'silver' consumer.

let points = 110;
let type = points > 110 ? 'gold' : 'silver';
console.log(type);




// 6: Logical Operator

// Logical AND(&&)
// Return TRUE if both operands are TRUE
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);


// Logical OR(||)
// Return TRUE if one of the operands is TRUE
let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan);


// NOT(!)
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;

console.log("Eligible ", eligibleForLoan);
let applicationRefused = !eligibleForLoan;

console.log("Application Refused",applicationRefused);




// 7: Logical Operators with None-booleans

// On the console:
false || true    // true
false || 'Mosh'  // "Mosh"
false || 1       // 1

// The result of logical expression is not necessarily true or false, that depends that value of operands we have. They are
//      truthy or falsy.

// When JavaScript engine try the evaluate the expression, it will look up each operand, if that operand is not boolean true 
//      or false, it will try to interpret it as truthy or falsy.

// Falsy: undefined, null, 0, false, '', NaN
// Truthy: Anything that is not falsy.


false || 1 || 2  // 1
// As soon as it find the operand that is truthy, that operand is returned, and the calculation is over, it does not care about
//      what we have on the right side. This is what we called short-circuiting.



let userColor = 'red';
let defaultColor = 'blue';

// If we have a value for userColor, we are gonna use that, if we do not, we will use the default color. 
let currentColor = userColor || defaultColor;

console.log(currentColor);  // red. Because user selected a color, on contrast, if we set the userColor to 'undefined', we will
                            //      get blue. 

                        





// 8: Bitwise Operators:

// 1 byte = 8 bits 

// 1 = 00000001
// 2 = 00000010
// R = 00000011  OR
// R = 00000000  AND

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND


// Another example:
// Permissions: Read, Write, Execute
// 00000/100 --> Read
// 00000/110 --> Read, Write
// 00000/111 --> Read, Write, Execute


const readPermission = 4;    //00000100
const writePermission = 2;   //00000010
const executePermission = 1; //00000001 

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message)

// So as we can see, with the "OR" bitwise, we can add permission, and with bitwise "AND" operator, we can check to see if 
//      we have a giving permission.


