/*
 * @Date: 2021-11-21 18:45:12
 * @LastEditors: GC
 * @LastEditTime: 2022-02-05 22:17:54
 * @FilePath: \JavaScript Mosh\Basic\3-Flow_Control.js
 */

// 1: If...else

let hour = 10;
if (hour >= 6 && hour < 12) console.log("Good morning!");
else if (hour >= 12 && hour < 18) console.log("Good afternoon!");
else console.log("Good evening!");

// 2: Switch...Case
let role = "guest";
switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "Moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
    // We do not need 'break' this time.
}

// 3: For

for (let i = 0; i < 5; i++) {
  console.log("Hello World", i);

  if (i % 2 !== 0) console.log(i);
}

for (let x = 5; x >= 1; x--) {
  console.log(x);
}

// 4: While

let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

// 5: Do...While
let x = 0;
do {
  if (x % 2 !== 0) console.log(i);
  i++;
} while (x <= 5);

// 6: Infinite Loops:
let i = 0;
while (i < 5) {
  console.log(i);
  // i++;
}

while (true) {
  console.log("Hello World");
}

let y = 0;
do {
  console.log(y);
  y++;
} while (y < 5);

// 7: For...in

const person = {
  name: "Mosh",
  age: 39,
};

for (let key in person) {
  console.log(key);
  console.log(key, person[key]);
}

// Another example:
colors = ["red", "blue", "green"];
for (let index in colors) {
  console.log(index);
  console.log(index, colors[index]);
}

// 8: For...of

colors = ["red", "blue", "green"];
for (let color of colors) console.log(color);

// color represents the element of this array.
// So we use the for-in loop to iterate over the properties of an object, and for-of loop to iterate over the elements or items
//      in an array.

// 9: Break and continue

let i = 0;
while (i < 10) {
  // if (i === 5)
  //     break;
  // Jump out of the loop

  if (i % 2 === 0) {
    i++;
    continue;
    // When JavaScript see this key word, it will jump to the beginning of the loop and continue the next execution of
    //      the next iteration.
  }

  console.log(i);
  i++;
}

// 10: Exercise:

// (1):
function max(x, y) {
  if (x > y) return x;
  return y;

  // return (a > b) ? a : b;
}

let number = max(1, 3);
console.log(number);

// (2):
function isLandScope(width, height) {
  if (width > height) return width;
  return height;

  // return (width > height) ? true : false;

  // return (width > height);
}

console.log(isLandScope(800, 600));

// (3):

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzBuzz(55);

console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return Nan;
  // Nan --> Not a number
  else {
    if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
    if (input % 3 === 0) return "Fizz";
    if (input % 5 === 0) return "Buzz";
    return input;
  }
}

// 4:

// Speed Limit = 70
// 5 km/h --> 1 point
// Math.floor(1.3) --> 1
// More than 12 points (180 km/h) --> Suspended

checkSpeed(80);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Okkkkk");
    return;
    // We will jump out of this function, and the code after won't be execute.
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (points >= 12) console.log("License suspended.");
  else console.log("Points: ", points);
}

// 5:
showNumber(10);

function showNumber(limit) {
  for (let i = 0; i <= 10; i++) {
    if (limit % 2 === 0) console.log(i, "EVEN");
    console.log(i, "ODD");

    // const message = (limit % 2 === 0) ? 'EVEN' : 'ODD';
    // console.log(i, message);
  }
}

// 6:
const array = [1, 0, 2, 4, undefined, "", null];
countTruthy(array);

function countTruthy(array) {
  let count = 0;
  for (let value of array)
    if (value) count++;
  return count;
}

// 7:
const movie = {
  title: "a",
  releaseYear: 2020,
  rating: 3.5,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}

// 8:

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

console.log(sum(10));

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}

// 9:

const array = [80, 80, 50];

// Average = 70

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(array));

function calculateGrade(marks) {
  let sum = 0;
  for (let mark of marks) sum += mark;

  let average = sum / marks.length;

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

// Another advanced solution: extract some lines of code and put them into a separated function.

const array = [80, 80, 50];
console.log(calculateGrade(array));

function calculateGrade(marks) {
  let average = calculateAverage(marks);

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;

  return sum / array.length;
}

// 10:
showStars(10);

function showStars(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 0; j < i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// 11:

// Prime (whose factors are only 1 and itself)
// Composite

showPrime(20);

function showPrime(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(number);
  }
}

// Clean Code
showPrime(20);

function showPrime(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}