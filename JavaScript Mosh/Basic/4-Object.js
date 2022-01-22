/*
 * @Date: 2021-11-22 14:56:38
 * @LastEditors: GC
 * @LastEditTime: 2021-12-02 21:31:03
 * @FilePath: \JavaScrip Mosh\Basic\4-Object.js
 */

// 1: Basics
// Objects are collections of key-value pairs. If we have properties that are highly related, we can put them inside to object.
// The value can be number, string, boolean, null, undefined or another object (array, function).

// Object-oriented Programming (OOP)
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 4
    },
    isVisible: true,

    // Put the function inside this circle object.
    draw: function(){
        console.log('Draw');
    }
};

// We can access theses properties using dot notation.
circle.draw(); // Method

// And we call it: the draw method of circle object --> If a function is a part of an object, in the OOP terms, we refer that 
//      function as method.    




// 2: Factory Functions
// There are two different ways to create objects --> Factory or constructor functions

function createCircle(radius) {
    return {
        // radius: radius,
        // If the key and value are the same, we can remove the value and simply keep the key.
        radius,

        // draw: function(){
        // console.log('Draw');
        // }

        // A cleaner way to define a function as the value
        draw() {
            console.log('Draw');
        }  
    }
}
// So whenever we call the createCircle function, we will return a circle object.

// Create a circle object
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(3);
console.log(circle2);

// So the beauty of factory function is that we define a logic in one place, we can call this function with different values 
//      or different arguments, we get different objects, but we define the draw function in one place.






// 3: Constructor functions:

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

function Circle(radius) {
    // 'this' is the reference to the object that executing this piece of code. This time it represents the empty object.
    this.radius = radius;

    // Add a draw method to this empty object
    this.draw = function() {
        console.log('Draw');
    }
}

const circle = new Circle(1);
// When we use 'new' keyword: (1): this 'new' keyword create an empty javascript object (like const x = {}), then,
//      it will set 'this' to point this new empty object, so in this code, 'this' accesses the empty object and 
//      we set the radius property as well as the draw method in this new object. Finally this 'new' operator will 
//      return this new object from the Circle function, it is like (return this).


// Difference:
// In the factory function, we simply call a function and this function will return a new object. In contrast, with constructor
//      function, we use 'new' operator, and instead of returning a object, we use 'this' keyword. And the naming convention 
//      is different too.






// 4: Dynamic Nature of Objects

// Once we create a object, we can also always add properties or methods or remove existed ones.

const circle = {
    radius: 1
};

// We can not resign this constant(like this: circle = {}), but we can change the circle object by adding or removing properties.

// Add new property and method
circle.color = 'Yellow';
circle.draw = function() {};

// Delete a member(property or method) from the circle object
delete color;
delete draw;

console.log(circle);








// 5: Constructor property

// Every object of Javascript has a property called constructor, and that reference function that was used to construct or create
//      a object.

// Factor Function:
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('Draw');
        }
    };
}

const circle = createCircle(1);


// Constructor function:
function Circle() {
    this.radius = this.radius;
    this.draw = function() {
        console.log('Draw');
    }
}

const another = new Circle();

// In this demo, we have two objects, in the console window:
// another.constructor --> It returns the Circle function that we used to create this object.
// circle.constructor --> It returns the built-in constructor function in JavaScript 







// 6: Functions are objects

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw');
    }
}

const another = new Circle();

// The Circle function we have here is actually a object.
// Circle. ==> After we typing the '.', we can see the members of this Circle function or Circle object.

// In the console window:
// Circle.name --> The name of this function
// Circle.length --> The number of arguments
// Circle.constructor --> Here we can see another built-in function of JavaScript. We use 
//      this syntax(function Circle(radius) {}) to create this function, and JavaScript will use this function constructor(Function {}) 
//      to create this object.

// When we create this Circle function, internally, JavaScript will do this:
const Circle1 = Function('radius', `
    this.radius = this.radius;
    this.draw = function() {
        console.log('Draw');
    }
`)

// And now we can call this Circle1 function:
const circle = new Circle1(1);
// And in the console window:
// circle ==>  we can still see the same members
 


// Look at some functions of Function.

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw');
    }
}

// The same way to create a new object.
Circle.call({}, 1);
// The first argument({}) specifies the target of 'this'.

Circle.apply({}, [1, 3, 4]);
// This function is same with call function, but we pass the arguments with array.

const another = new Circle();








// 7: Value vs Reference Type

// In JavaScript we have two category of types: 
//  (1): Value types(primitive) --> Number, String, Symbol, Boolean, undefined, null
//  (2): Reference types --> Object, Function, Array


// 1: 
let x = 10;
let y = x;

x = 20;

// x = 20, y = 10

// We have to know that the x and y are two independent variables, so when we work with primitives, the value(10) is stored 
//  inside of this variable(x); when we copy that variable, the value is stored in this variable is copied into this new 
//  variable(y), so they are completely independent of each other.


// 2:
let x = {value: 10};
let y = x;

x.value = 20;

// x --> {value: 20}; y --> {value: 20}

// When we use an object, that object is not stored in this variable(x), it stored somewhere in the memory, and the address of 
//  that memory location is stored inside that variable(x), so when we copy x into y, its address or the reference is copied,
//  in the other words, both x and y are pointing to the same object memory, and when we modify the object using ether x or y, 
//  its changes is immediately visible to the other variable

// So we can get a conclusion:
// Primitives are copied by their value
// Objects are copied by there reference


// We can look at another example:
let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);
//  --> The result is 10. When we call increase function and pass this number variable, its value is copied into this
//          parameter(number) that is local in this function, so this number variable here(number++) is completely independent
//          of this number variable(let number = 10). Inside this function, we increment the number by one, but after the function,
//          this number is going out of the scope, so when we log this number on the console, we are actually dealing with
//          the initial number(let number = 10), so here we are dealing with two independent copies.


// On contrast:
let obj = {value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);

// The result is 11. When we call this function and pass the object, this object is pass its reference, so this local pramere
//  here(function increase(obj)) will point to the same object as we defined here(let obj = {value: 10}), so this time we have 
//  two variables pointing to the same object, so any changes we made in this variable will visible to the other variable









// 8: Enumerating Properties of an Object
const circle = {
    radius: 1,
    draw() {
        console.log('Draw');
    }
}


// Iterate properties or method of an object:
for (let key in circle)
    console.log(key, circle[key]);


for (let key of circle)
    console.log(key);
// But this time we will get an error: circle is not iterable.
// For...of loop can only be used with iterable, such as array or maps. And object is not iterable


// But we can still get keys of our circle object and this will return array, and we know that array is iterable, so we can use
//  for..of loop to iterate it.
for (let key of Object.keys(circle))
    console.log(key);

// Let's pay attention to this method: Object.keys()
//  We have known that the Object is a built-in constructor function, so somewhere we have this constructor function:
function Object() {}

// When we create this object: const x = {value: 1}, internally, that is translated to call this object constructor function,
//  so it looks like: const x = new Object();

// As 'Object.', after we typing '.', we can see all the properties and methods defined. so this time we are using keys() method, 
//  this method returns a string array, which contains all the properties and methods in this object.


// We also have another same method:
for (let entry of Object.entries(circle))
    console.log(entry)
// Instead of returning the keys as a string array, it returns each key-value pairs as an array.


// Check if a giving property or method exists in an object, we can use 'in' operator.
if ('radius' in circle) return 'yes';



// Conclusion:
// (1): for...in loop
// (2): for...of (with method: Object.keys())
// (3): for...of (with method: Object.entries())










// 9: Abstraction:
//      Hide the details and complexity, show and expose the essentials.
function Circle(radius) {
    this.radius = radius;

    this.defaultLocation = { x: 1, y: 3 };

    this.computeOptimumLocation = function() {
        // ...
    };

    this.draw = function() {
        this.computeOptimumLocation();
        // There is a problem when we apply this implementation.

        console.log("Draw");
    }
}

const circle = new Circle(1)

circle.computeOptimumLocation()
circle.draw()
// We will get some error when we do this implementation.

// Considering the abstraction of OOP, we should hide these two properties(defaultLocation and computeOptimumLocation). And we 
//      show expose the essentials(radius and draw)










// 10: Private Properties and Methods

// In this case, how can we implement the abstraction?
function Circle(radius) {
    this.radius = radius;

    // Set it as a local variable
    let defaultLocation = { x: 1, y: 3 };

    // Set it as a private method
    let computeOptimumLocation = function() {
        // ...
    };

    this.draw = function() {
        // Access this private method
        computeOptimumLocation();


        // Access members of this new circle object, we need to use 'this'
        // this.radius;

        console.log("Draw");
    }
}

const circle = new Circle(1)

// With dot notation, we can only access draw and radius. The public interface of this circle object is simpler and easier to 
//      work with, and this also prevent the issues later on the road.
// circle.

circle.draw()











// 11: Getter and Setter:

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 1, y: 3 };

    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    this.draw = function() {
        console.log("Draw");
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },

        // Set the value of this property(defaultLocation) from the outside, we can use setter:
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error("Invalid location")
            defaultLocation = value; 
        }
    });
}

const circle = new Circle(1)

circle.getDefaultLocation();

// Here is another way to access defaultLocation with getter(is a function to get the property):
circle.defaultLocation();
// When we access defaultLocation, this function( get: function() {}) will be called.



// Set the defaultLocation:
circle.defaultLocation = 1;

circle.draw()






// 9: Cloning an Object:

const circle = {
    radius: 1,
    draw() {
        console.log("Draw");
    }
}

// (1):
// Initialize this new object as empty
const another = {};

// Use for...in loop to iterate all the properties in this circle object and copy them into this new object
for (let key in circle)
    another[key] = circle[key];
console.log(another);


// (2):
// And we have a better way to do that:

const another = Object.assign({}, circle);
// It takes all the properties or methods, and then copy them into this new object, and finally return the result to another.
console.log(another);


const another = Object.assign({
    color: 'yellow'
}, circle);
// So this new object has a color property that is initialized here as well as the members of circle object.
console.log(another);


// (3):
// And we still have another better way :
const another = {...circle};
// This operator takes all the properties and methods of the circle object and put them in the {}.
console.log(another);



// Conclusion:
// (1): Object.assign() takes all the properties and methods of one or more source objects into a target object, and we can use
//         that to clone an object or combine multiple objects into a single object.
// (2): The spread operator to spread an object: get all the properties and methods and put them into another object.









// 10: Garbage Collection:

// Memory allocation and deallocation happens automatically behind the see, and we have no control of that  
 





// 11: Math

Math.random()
// We will get a new random number between 0 to 1. If we wanna map this to a giving range, we can put some calculations

Math.round(1.9) // 2
Math.max(1, 4, 6, 3) // Get the max number
Math.min(1, 5, 6, 2) // Get the min number








// 12: String


// String primitive
const message = '   Hello World';
// But then we type 'message.', we can see some properties and  methods, but as we all know string is primitive types, why 
//  we can see these things? In JavaScript we have two types of string(String primitive and string object). When we use '.' in
//  this case, javascript engine internally rap this with the string object, we can work like string object

// String object:
const another = new String('Hiii');
// Create a new string object

// Check in to console:
// typeof(message) --> 'string'
// typeof(another) --> 'object'

// message.length
// message[0] --> get the character using the index
// message.includes('he') --> Check
// message.startsWith("hello")
// message.endsWith('hello')
// message.indexOf('world')
// message.replace('world', 'Tim')
// message.toUpperCase
// message.trim() --> Get rid of all the white space
// message.trimLeft()
// message.trimRight()
// message.split(' ')










// 13: Template Literal

const message = 'This is my\n first message.'
// If we wanna make this string similar to what the output look like, we can do something like this:

const message = 'This is my\n' + 
'\'first\' message.'
// But it is also so ugly, we can use template literal

// To recap:
// Object: {}
// Boolean: true, false
// String: '', ""
// Template: ``


const another = `This is my
'first' message`; 
// So we can format out string the way you wanna look like


// Placeholder in the template literal
const name = 'Mosh';
const message = 
` Hi, ${name}, ${1 + 2}
  Thank you very much.
`









// 14: Date

// Different ways to create Date object
const now = new Date();
const date1 = new Date('May 11 2019 09:00');
const date2 = new Date(2019, 4, 11, 9, 0);

now.getDate();
new.setFullYear(2010);

// On the console window:
// now.toDateString()
// now.toTimeString()
// now.toISOString()










// 15: Exercises:

// (1): 
// street
// city
// zipCode

let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};


function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);





// (2): Write factory function and constructor function

// Factory function:
let address = createAddress('a', 'b', 'c');
console.log(address);


function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}



// Constructor function
function CreateAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address = new CreateAddress('a', 'b', 'c');
console.log(address);






// (3):
let address1 = new CreateAddress('a', 'b', 'c');
let address2 = new CreateAddress('a', 'b', 'c');
let address3 = address1;
// Both these two variables are referencing the same object in memory.

console.log(areEqual(address1, address2));  // true --> The properties are same
console.log(areSame(address1, address2));   // false --> // They are not the same objects, they are two different objects in memory.
console.log(areSame(address1, address3));   // true

function CreateAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2
}






// (4): Create and initialize a blog object

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        { author: 'a', body: 'b'},
        { author: 'c', body: 'd'}
    ],
    isLive = true 
};

console.log(post);







// (5): Use constructor function to create a post object.

let post = new CreatePost('a', 'b', 'c');
console.log(post);


function CreatePost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}







// (6): Price Range Object

let priceRange = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 20, maxPerPerson: 50},
]

let restaurant = [
    { averagePerPerson: 5}
]
