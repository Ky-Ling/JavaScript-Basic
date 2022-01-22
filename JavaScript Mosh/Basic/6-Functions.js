/*
 * @Date: 2021-11-27 18:21:42
 * @LastEditors: GC
 * @LastEditTime: 2021-11-30 21:21:55
 * @FilePath: \JavaScrip Mosh\Basic\6-Functions.js
 */

// 1: Function Declarations vs Expressions

// There are two ways to declare a function:
// (1): Function Declaration:
function walk() {
    console.log("Walk");
}


// (2): Function Expression(named and anonymous):
// Setting the run variable to a function is similar to setting it to an object.
let run = function() {
    console.log('run');
};

let move = run;
// Now, both move and run are referencing the same anonymous function, which is the object in memory.

run();
move();









// 2: Hoisting
//       the process of moving function declaration to the top of the file, and this is done automatically by the JavaScript
//       engine that is executing this code.

walk();

// We can call this function before it is defined. But we can not do that with function expression.
function walk() {
    console.log("Walk");
}


run(); // We will get an error: run is not defined.
let run = function() {
    console.log('run');
};








// 3: Arguments
function sum(a, b) {
    return a + b; 
}

console.log(sum(1)); // NaN (1 + undefined)
console.log(sum()); // NaN
console.log(sum(1, 3, 5, 6)) // 4 

console.log(sum(1, 4));



// If we have a function with various parameters to work all the arguments that are passed to this function.

function sum() {
    let total = 0;
    for (let value of arguments)
        total += sum;
    return total;
}

console.log(sum(1, 4, 5, 6, 7, 2));








// 4: The Rest Operator:

function sum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log(sum(1, 4, 5, 6, 7, 2));


// Another example:
function sum(discount, ...price) {
    const total = price.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(sum(0.1, 20, 40));



function sum(discount, ...price, someValue) {
    const total = price.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(sum(0.1, 20, 40, 1));

// Run this program, we will get an error: Rest parameter must be last formal parameter. So we can not have parameter after 
//      using the rest parameter











// 5: Default Parameters:

// We have to notice that once we give this (rate) parameter a default value, we should also give all the other parameters 
//      after that default value.

function interest(principal, rate = 3.5, year = 5) {
    rate = rate || 3.5;
    // If the rate is truthy, we will use that value, or we will use 3.5
    
    return principal * rate / 100 * year;
}

console.log(interest(10000));











// 6: Getters and Setters
const person = {
    firstName: 'John',
    lastName: 'Fish',
    fullName() {
        return `${person.firstName} ${person.lastName}`;
    }
};

// console.log(person.firstName + ' ' + lastName);

// Or we can use template literal
// console.log(`${person.firstName} ${person.lastName}`);

console.log(person.fullName());

// But we have some problems: (1): this is read-only. (2): And we do not wanna call this(fullName()) like a method, it will nicer if we 
//      treat this like property.





// getter => access properties
// setter => change(mutate) them

const person = {
    firstName: 'John',
    lastName: 'Fish',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

person.fullName = 'John Smith';

console.log(person);








// 7: Try and Catch

const person = {
    firstName: 'John',
    lastName: 'Fish',
    set fullName(value) {
        if (typeof value !== 'string') 
            throw new Error('Value is not a string!');
        


        const parts = value.split(' ');
        if (parts.length != 2) 
            throw new Error('Enter a first and last name.');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

try {
    person.fullName = null;
}
catch(e) {
    alert(e);    
}


console.log(person);

// Defensive Programming











// 8: Local vs Global Scope
function start() {
    const massage = 'hi';

    if(true) {
        const another = 'yeah';
    }
    console.log(another);

    for(let i = 0; i < 3; i++) {
        console.log(i);
    }
    console.log(i);
}

start();
// We will get some errors



// Here is another example:
const color = 'red';
// This constant have a global scope. This constance is accessible everywhere

function start() {
    const message = 'hi';
    console.log(color);
}

function end() {
    const message = 'bye';

    // Local variables or local constance in the function take place the same global or constance
    const color = 'blue';
    console.log(color); // blue
}






// 9: Let vs Var:
function start() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i); // We will get an error

    // But if we change 'let' to 'var', we won't get the error, 'i' is accessible outside this for block.
    // When we declare a variable with 'var', its scope is not limited to the block in which it is defined, it is limited to 
    //      the function in which it is define.

    // let / const ==> block-scope
    // var ==> function-scope
}
start();


// Window object:
var color = 'red';
let age = 23;
function sayHi() {
    console.log('hi');
}


// On the console window:
// we can type window.color and window.sayHi, but we can not type window.age. And we have to know that it is not a good practice.










// 10: The 'this' keyword:
// 'this' references the object that is executing the current function.

// That function is part of an object -> method => obj
// That function is not part of an object -> function => global (window, global)

// (1)
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};
video.play();

// We will get the video object on the console. Because play is a method of video object, this references the object itself.


// (2):
function playVideo() {
    console.log(this);
}
playVideo(); // We get the window object here



// (3): Constructor function:
function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('a');
// Instead of a window object, we get a new object. 'this' references a new empty object




// (4): 
const video = {
    title: 'a',
    tags = ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this, tag);
            // From the result, we can know that 'this' references the window object, because this time we are in this callback
            //      function, this function is just a regular function, it is not a method of video object, the only method we 
            //      have here is the showTags method.
        });
    }
}

video.showTags();









// 11: Changing the value of 'this' --> Three ways:

// (1):
const video = {
    title: 'a',
    tags = ['a', 'b', 'c'],
    showTags() {
        // At this point, self is referencing the video object here 
        const self = this;

        this.tags.forEach(function (tag) {
            console.log(self.title, tag);
        });
    }
}

video.showTags();



function playVideo(a, b) {
    console.log(this);
}

// What we pass as the first argument here will be used as the value of 'this'.
playVideo.call({ name: 'Mosh'}, 1, 2);
playVideo.apply({ name: 'Mosh'}, [1, 2]);
// The difference of these two methods is about passing arguments.

const fn = playVideo.bind({ name: 'Mosh'});
fn();
// This bind method does not call platVideo function, it returns a new function and set 'this' to appoint this object({ name: 'Mosh'}),
//      'this' will always point to this object that we pass here.

playVideo(); // 'this' is referencing the window object.




// (2):
const video = {
    title: 'a',
    tags = ['a', 'b', 'c'],
    showTags() { 
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }.bind(this));
    }
}
video.showTags();



// (4):
const video = {
    title: 'a',
    tags = ['a', 'b', 'c'],
    showTags() { 
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
        // Arrow functions inherit 'this' from the contain function, so in this showTags function, 'this' reference the video
        //      object, when we pass arrow function, 'this' is not rebound to a new object
    }
}
video.showTags();









// 12: Exercises:
// (1): Sum of Arguments:

console.log(sum([1, 2, 4, 6]));

function sum(...items) {
    if (items.length === 1 && Array.isArray(item[0]))
        items = [...items[0]];
    return items.reduce((a, b) => a + b);
}




// (2): Area of Circle:
const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;

    }
}

console.log(circle.area);



// (3): Error Handling
try {
    const numbers = [1, 3, 5, 8, 6];
    const count = countOccurrences(numbers, 1);
    console.log(count);
}
catch (e) { 
    console.log(e.message);
}

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error("Invalid array");

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}