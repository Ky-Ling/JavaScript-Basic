/*
 * @Date: 2021-12-01 18:19:44
 * @LastEditors: GC
 * @LastEditTime: 2021-12-02 15:01:24
 * @FilePath: \JavaScrip Mosh\OOP\2-Prototypes.js
 */

// 1: Four Pillars of Object-oriented Programming
// (1): Encapsulation: reduce complexity and increase reusability
// (2): Abstraction: simpler interface and reduce the impact of change, reduce complexity and isolate impact of changes
// (3): Inheritance: eliminate the redundant code
// (4): Polymorphism: refactor ugly switch/case statements


// 1: Prototypical Inheritance:
//     Every object in JavaScript has a prototype or parent, it inherits all the members defined in this prototype.

//     When we access a property or method on an object, JavaScript first looks that property or method on the object itself,
//          if it can not find it, then it looks the prototype of that object, again, if it can not find it, it will look at 
//          the prototype of that object all the way up to the root object which we called objectBase. So this is prototypical
//          inheritance in action.

//     A prototype is just a regular object in memory!


// On the console:
let x = {};
let y = {};

// Get all the objectBase of x
Object.getPrototypeOf(x);

Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // true






// 2: Multi-level Inheritance:

// On the console:
let myArray = [];
myArray
// We will get a proto property and we can see the prototype or parent of this array. All the methods are defined in this object
//      which is the prototype or the parent for all arrays in javascript. In the last line, we have a __proto__ property, 
//      we can see the objectBase --> all the root object in javascript. All in all, myArray derived from arrayBase, and arrayBase
//      derived from objectBase, this is what we called multi-level inheritance.


// A constructor function:
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw');
    };
}

const circle = new Circle();

// On the console:
circle
// It has a prototype(this prototype is the prototype for all circle object that we create using our circle constructor, let's
//      call this circleBase, so every time we call the circle constructor to create a new circle object, this constructor(Circle(radius)
//      will create a new object, and set its prototype property to circleBase. In short: Objects created by a giving constructor
//      wil have the same prototype. So all the circle object created by circle constructor will have the same prototype.
//      circleBase also has a prototype(objectBase). So in memory, circle object inherits from circleBase and circleBase 
//      inherits from objectBase.  








// 3: Property Attributes:
let person = { name: 'Tim'};
console.log(person);

// On the console, we will get the person object and its prototype, we also have all the methods available

let person = { name: 'John'}
for (let key in person) 
    console.log(key)

// On the console, we can only see 'name', none of the properties or methods defined on objectBase are visible here.
//      In javascript, all properties have attributes attached to them, sometimes these attributes prevent a property from
//      be enumerable.

let person = { name: 'John'};
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

// We will get descriptor object and we can see these properties.


let person = { name: 'Mosh'}
Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false
});

person.name = 'John';
console.log(person);
// The name is not changed.

console.log(Object.keys(person));
// We will get a empty array







// 4: Constructor Prototypes:

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype

const circle = new Circle(1);

// On the console: 
let obj = {};
obj.__proto__
Object.prototype

// Here is another example:
let array = [];
array.__proto__
// We will get arrayBase

Array.prototype
// It references arrayBase







// 5: Prototype vs Instance Members
function Circle(radius) {
    // Instance members
    this.radius = radius;

    this.move = function() {
        console.log("Move");
    }
}

// Prototype members
Circle.prototype.draw = function() {
    this.move();
    console.log("Draw");
}

const c1 = new Circle(1);
const c2 = new Circle(2);

// On the console: 
// c1
//      We only get one property and the draw method is removed to prototype.


// And we know that both these two objects have the toString method, we can overwrite the implementation of this method in the 
//      prototype of our circle object:
Circle.prototype.toString = function() {
    return 'Circle with radius' + this.radius;
}

// On the console:
// c1.toString()










// 6: Iterating Properties:
function Circle(radius) {
    this.radius = radius;
    this.move = function() {
        console.log("Move");
    }
}

Circle.prototype.draw = function() {
    console.log("Draw");
}

const c1 = new Circle(1);

// We have two instance members(radius and move()), one prototype member(draw()).


// Returns instance members
console.log(Object.keys(c1));

// Returns all members (instance + prototype)
for (let key in c1) console.log(key);


// On the console:
c1.hasOwnProperty('radius') // true
c1.hasOwnProperty('draw')   // false


    





// 7: Avoiding Extending Built-in Objects:
//      Do not modify objects you do not own.



// 8: Exercise:
// (1):
function stopWatch() {
    let startTime, endTime, running, duration= 0;

    this.start = function() {
        if (running)
            throw new Error("stopWatch has already started!");
        
        running = true;

        startTime = new Date();
    }

    this.stop = function() {
        if (!running)
            throw new Error("stopWatch is not started!");
        
        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    }

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });
}


// Solution:
function stopWatch() {
    let startTime, endTime, running, duration= 0;

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        },
        set: function(value) {
            return duration = value;
        }
    });

    Object.defineProperty(this, 'startTime', {
        get: function() {
            return startTime;
        }
    });

    Object.defineProperty(this, 'endTime', {
        get: function() {
            return endTime;
        }
    });

    Object.defineProperty(this, 'running', {
        get: function() {
            return running;
        }
    });
}



stopWatch.prototype.start = function() {
    if (this.running)
        throw new Error("stopWatch has already started!");
    
    this.running = true;

    this.startTime = new Date();
}

stopWatch.prototype.stop = function() {
    if (!this.running)
        throw new Error("stopWatch is not started!");
    
    this.running = false;

    this.endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    this.duration += seconds;
}

stopWatch.prototype.reset = function() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
}


const sw = new stopWatch();
sw.duration = 10;