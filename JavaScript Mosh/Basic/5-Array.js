/*
 * @Date: 2021-11-24 18:53:26
 * @LastEditors: GC
 * @LastEditTime: 2021-11-30 21:05:38
 * @FilePath: \JavaScrip Mosh\Basic\5-Array.js
 */

// 1: Adding Elements

const number = [1, 3];
// We cannot change the constant variable, but we can modify the content of an array

// We have known that arrays are objects too, we can use dot notation to access all the properties and methods defined in an array.

// Three ways to add elements:
// (1): End
number.push(3, 5);
console.log(number);

// (2): Beginning
number.unshift(5, 6);
// Push the elements in this array to the right and add new elements at the beginning.
console.log(number);

// (3): Middle
number.splice(3, 0, 'a', 'b');
// In this function: Starting position, delete-count, the items we wanna add
console.log(number);








// 2: Finding Elements(Primitives)
const numbers = [1, 3, 5, 1, 6];

// Return the index of that element of an array, if it does not exist, it will return -1.
console.log(numbers.indexOf('a'));
console.log(numbers.indexOf(1));


// Return the last index of a giving element, and if it does not exist, it will return -1.
console.log(numbers.lastIndexOf(1));


// IF this expression returns true, it means this element exists in that array.
console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));


// We can also pass a second prameter in the functions above, that is the index which the search will begin.
console.log(numbers.indexOf(1, 2));









// 3: Finding Elements(Object):

const courses = [
    { id: 1, nameB: 'a' },
    { id: 2, name: 'b' }
];

console.log(includes({ id: 1, name: 'a' })); // false
// They are two different objects, they have two different references, they are in two different location in memory.
// So if we have an array with reference types, we have to use find function  

const course = courses.find(function (course) {
    return course.nameB === 'a';
    // It returns the first element that matches the expression.
});

console.log(course);
// It returns the complete object

const course = courses.findIndex(function (course) {
    return course.nameB === 'a';
});

console.log(course);
// It returns the index of the first element






// 4: Arrow Functions:

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

const course = courses.find((course => {
    return course.nameB === 'a';
}));

console.log(course);

// Whenever we want to pass a function as a callback function or as an argument to different method, we can use the arrow function.

// IF we only have an argument --> course.find.(course => {});
// If we do not have any arguments --> course.find.(() => {});
// IF our function is a single line of code and it returns an value --> course.find(course => course.name === 'a');








// 5: Removing Elements

const numbers = [1, 44, 5, 6, 4];

// End:
const last = numbers.pop();
// Remove the last element of this array and return it.
console.log(numbers);
console.log(last);

// Beginning:
const first = numbers.shift();
console.log(numbers);
console.log(first);

// Middle:
numbers.splice(2, 1);
// Index, deletecount

console.log(numbers);







// 6: Emptying an array:
let numbers = [1, 3, 5, 7, 8];
let another = numbers;

// This another object also point to this numbers array, the original array(let numbers = [1, 3, 5, 7, 8];) will not be 
//    removed from the garbage collector, so then we resign this numbers variable, now numbers is pointing to a new object in
//    memory, but another is still pointing to the old numbers object(let numbers = [1, 3, 5, 7, 8];).

// Solution1: resign it to a new array
numbers = [];
console.log(numbers); // []
console.log(another); // [1, 3, 5, 7, 8]

// So the solution 1 only works if we do not have any other reference to the original array, if we do have multiple reference,
//      we have to use another solutions.


// Solution 2:
let numbers = [1, 3, 5, 7, 8]; 
let another = numbers;

numbers.length = 0;
// Set the length property to 0, and this will truncate the array, remove all the elements.

console.log(numbers); // []
console.log(another); // []



// Solution 3:
let numbers = [1, 3, 5, 7, 8];
let another = numbers;

numbers.splice(0, numbers.length);
// Start from the first element and remove all the elements.

console.log(numbers); // []
console.log(another); // []



// Solution 3:
let numbers = [1, 3, 5, 7, 8];
let another = numbers;

while (numbers.length > 0)
    numbers.pop();

console.log(numbers); // []
console.log(another); // []







// 7: Combining and Slicing Array
const first = [1, 3, 5];
const second = [4, 6, 7];

const combined = first.concat(second);
console.log(combined);

const slice1 = combined.slice(2, 4);
// Start index, end index
console.log(slice);

const slice2 = combined.slice(2);
// Start index to the end of this array
console.log(slice2);

const slice3 = combined.slice();
// We get a copy of the original array
console.log(slice3);


// IF we are dealing with the primitive values, these primitives will be copied into the target array. But if we have objects 
//      in our array, the objects themselves won't be copied, the reference will be copied, that means the elements both the 
//      inputs(first, second)and output(combined) array will point to the same object.









// 8: The Spread Operator:
const first = [1, 3, 5];
const second = [4, 6, 7];

// const combined = first.concat(second);
const combined = [...first, ...second];
// All its elements return individually. We set a new array, and in this array, we are adding the individual elements of the 
//      first and second arraies, 

// We can also add another elements between them:
const combined1 = [...first, 'a', 'b', ...second, 'd'];

console.log(combined);

// We can also copy all the elements of an array into a new array
const copy = [...combined];








// 9: Iterating an Array:

const numbers = [1, 4, 6];

// (1):
for (let number of numbers)
    console.log(number);


// (2):
numbers.forEach(function(number) {
    console.log(number);
});
// When we call this forEach method, this callback function will be executed for each element in this array, each element will
//      be passed as a argument of this function.


// (3): Use Array function to simplify this callback function:
numbers.forEach(number => console.log(number));










// 10: Joining Array:

const numbers = [1, 4, 7];
const another = numbers.join(',');
// We can optionally pass a string and this string will be used as a separator. And this join method returns string.
console.log(another);


// We also have another similarly method used in string, and it will return an array.
const message = 'This is my first message';
const parts = message.split(" ");
console.log(parts);

// New we can use the join method to combine these elements using a separator;
const combined = parts.join("-");
console.log(combined);






// 11: Sorting arrays
const numbers = [3, 2, 6, 8, 1];

// Convert each element of this array to a string and sorts these elements in an array.
numbers.sort();
console.log(numbers);

// Reverse the order of the elements in this array.
numbers.reverse();
console.log(numbers);
// These two methods work for values or string



const course = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'Javascript'}
];

// Sort this array by the name of the courses
courses.sort(function(a, b) {
    // a < b --> -1
    // a > b --> 1
    // a = b --> 0

    const nameA = a.nameB.toUpperCase();
    const nameB = b.nameB.toUpperCase();
    
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(courses);








// 12: Testing the Elements of an Array

const numbers = [1, 5, 7, -3];

// Check all the numbers in this array are positive.
const allPositive = numbers.every(function(value) {
    return value >= 0;
});
console.log(allPositive);


// Check if we at least have one element in this array that match this expression.
const atLeastOnePositive = numbers.some(function(value) {
    return value >= 0;
});
console.log(atLeastOnePositive);








// 13: Filtering an Array:

const numbers = [1, 2, 5, -3, -4, 0, 15];

// We only wanna return the positive numbers
const filtered = numbers.filter(function(value) {
    return value >= 0;
});
console.log(filtered);

// Use arrow function to simplify this callback function.
const filtered = numbers.filter(value => value >= 0);



// We can also filter method in an array of objects








// 14: Mapping an Array
// We can map each item in an array to something else.

const numbers = [1, 2, 5, -3, -4, 0, 15];
const filtered = numbers.filter(value => value >= 0);

const items = filtered.map(n => '<li>' + n + '</li>');

// Each number is now mapped to a string, that is the list item. And now we can use the join method to create a string.
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);
// New instead of an array, we have a string.




const numbers = [1, 2, 5, -3, -4, 0, 15];
const filtered = numbers.filter(n => n >= 0);

// Mapping them to an object:
const items = filtered.map(n => ({ value: n}));
console.log(items);
// We mapped each number to an object with the value property.

// And we have to know that the filter and map function return a new array, they do not modify the original array. And these
//      methods are chainable, we can call them one after another in a chain --> 
const numbers = [1, 2, 5, -3, -4, 0, 15];
const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);
console.log(items);








// 15: Reducing an Array:
// (1):
const numbers = [1, 3, 5, -3];

// Calculate the numbers of an array. 
let sum = 0
for (let n of numbers)
    sum += n 
    
console.log(sum);



// (2):
// we can use the reduce method to reduce all the elements of this array into a single value(number, string, object or anything)
// In this case, we wanna reduce all these elements into a single number


// a = 0, c = 1 --> a = 1 (a will be set to 1 after this callback function is execute)
// a = 1, c = 3 --> a = 4
// a = 4, c = 5 --> a = 9
// a = 9, c = -3 --> a = 6

const numbers = [1, 3, 5, -3];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

// We have to know that this reduce function have two arguments, the first argument is this callback function, the second 
//      argument is the initial value of accumulator, finally we get the result as a single value.
// And if we do not give the accumulator a initialator, the accumulator will be set to the first element of this array.
console.log(sum);











// 16: Exercises:
// (1):
const numbers = arrayFromRange(1, 5);

console.log(numbers);

function arrayFromRange(min, max) {
    const output = [];
    for(let i = min; i <= max; i++) 
        output.push(i);
    return output; 
}






// (2):
const numbers = [1, 4, 3];
console.log(includes(numbers, 1))

function includes(array, searchElement) {
    for(let element of array)
        if (element === searchElement)
            return true;
    return false;
}




// (3):
const numbers  = [1, 2, 4, 5, 6, 8];
const output = except(numbers, [1, 4])
console.log(output);

function except(array, excluded) {
    const output = [];
    
    for(let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}




// (4): Moving an Element
const numbers = [1, 3, 5, 7, 2];
const output = move(numbers, 0, 3);

console.log(output);

function move(array, index, offset) {
    const position = index + offset; 
    if (position >= array.length || position < 0) {
        console.error("Invalid offset.");
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1) [0];
    output.splice(position, 0, element);
    return output;
}





// (5): Count Occurrences
const numbers = [1, 3, 5, 6, 6, 3, 8, 67];
const count = countOccurrences(numbers, 1);
console.log(count);

function countOccurrences(array, searchElement) {
    let count = 0;
    for(let element of array)
        if (element === searchElement)
            count += 1;
    return count;
}


// With reduce method:
const numbers = [1, 3, 5, 6, 6, 3, 8, 67];
const count = countOccurrences(numbers, 1);
console.log(count);

function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);
}






// (6): Get Max

const numbers = [1, 3, 5, 7];
const max = getMax(numbers);

console.log(max);

function getMax(array) {
    let max = 0;
    if (array.length === 0) 
        console.log("Undefined");
    for (let element of array)
        if (element > 0)
            max = element;
    return max;
}


// With reduce method
const numbers = [1, 3, 5, 7];
const max = getMax([]);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;

    return array.reduce((accumulator, current) => (current > accumulator) ? current : accumulator);
    // And if we do not give the accumulator a initialator, the accumulator will be set to the first element of this array.
}


// Conclusion: When we have an array of values, and we wanna get a single value as a result of iterating an array, we can 
//      think about the reduce method.







// (7): 
const movies = [
    { title: 'a', year: 2020, rating: 4.5 },
    { title: 'b', year: 2021, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3.8 },
    { title: 'd', year: 2018, rating: 3.7 },
    { title: 'e', year: 2019, rating: 4 },
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Only pick the title property

const title = movies 
    .filter(m => year > 2018 && rating > 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)


console.log(title);