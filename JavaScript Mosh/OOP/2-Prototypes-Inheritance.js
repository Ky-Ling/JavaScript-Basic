/*
 * @Date: 2021-12-12 13:06:09
 * @LastEditors: GC
 * @LastEditTime: 2022-01-09 20:42:58
 * @FilePath: \JavaScrip Mosh\OOP\2-Prototypes-Inheritance.js
 */

// 1: Creating Your Own Prototypical Inheritance

// Here is an example of inheritance:
function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log("Duplicate");
}

function Circle(radius) {
    this.radius = radius;
}



// Before this inheritance:
// Circle.prototype = Object.create(Object.prototype); // ObjectBase

// Now, we change Circle.prototype to a new object that inherits from Shape.prototype (ShapeBase):
// In JavaScript, we have a method to create a object with the given prototype.
Circle.prototype = Object.create(Shape.prototype);



Circle.prototype.draw = function() {
    console.log("Draw");
}

const s = new Shape();
const c = new Circle(1);



// On the console:
// s
// c
// c.draw()
// c.duplicate()














// 2: Resetting the Constructor

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log("Duplicate");
}

function Circle(radius) {
    this.radius = radius;
}

// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor(); => new Circle() 


Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


Circle.prototype.draw = function() {
    console.log("Draw");
}

const s = new Shape();
const c = new Circle(1);


// If we comment that line of code:

// On the console:
// c
// new Circle.prototype.constructor(1)
// new Circle(1)

// These two are exactly same.



// But if we uncomment that line of code, what will happen on the console:
// c
//    --> This time we no longer have the constructor property here, go ahead we have a constructor property, but this returns
//      the Shape function, not Circle function. In other words, we no longer can create circle object base this constructor 
//      in a dynamic fashion. We can verify like this:

// new Circle.prototype.constructor()
//    --> We will get Shape object. The reason we have this problem is because we reset the prototype of the Circle, before this
//      line, the prototype of the Circle has the constructor property.


// So as best practice, whenever we reset the prototype of an object, we should also reset the constructor.

// After we reset the constructor, on the console:
// c
//      --> we can see the prototype of Circle, we can also see constructor is referencing the Circle function

// new Circle.prototype.constructor(1);
//      --> We get a Circle object.











// 3: Calling the Super Constructor

function Shape(color) {
    this.color = color;

}

Shape.prototype.duplicate = function() {
    console.log("Duplicate");
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}


Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


Circle.prototype.draw = function() {
    console.log("Draw");
}

const s = new Shape();
const c = new Circle(1, 'red');


// This time we are going to modify the Shape constructor and introduce color parameter. And this circle object should have 
//      color property and that should be initialize at the time of creating circle.









// 4: Intermediate Function Inheritance

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log("Duplicate");
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}


// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// However this code is too tedious, let us refactor this code and extract these lines into a function that we can use.
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}


Circle.prototype.draw = function() {
    console.log("Draw");
}

// Create a square object inherits from Shape:
function Square(size) {
    this.size = size;
}

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;

extend(Square, Shape);

const s = new Shape();
const c = new Circle(1, 'red');


// On the console:
// const sq = new Square(11);
// sq
// sq.duplicate()









// 5: Method Overriding
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

// Shape constructor:
function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log("Duplicate");
}


// Circle constructor:
function Circle() {
}

// Circle inherit from Shape:
extend(Circle, Shape);

const c = new Circle();


// On the console:
// c.duplicate();

// Sometime the implement that we define in the parent object may not work or ideal in the child object, this time we have to 
//      override the method. We override a method that defined in the base object.



function extend(Child, Parent) {

    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;

}
function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log("Duplicate");
}

function Circle() {
}

extend(Circle, Shape);



// Method Overriding:
// After the extend method, we redefine this method on Circle.prototype.
Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this);

    console.log("Duplicate circle");
}

const c = new Circle();

// On the console:
// c.duplicate();

// First, we get the duplicate which comes from the implementation of duplicate method in the Shape object, and then after
//      that we get the duplicate circle which comes from the Circle object.









// 6: Polymorphism:

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log("Duplicate");
}

function Circle() {
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
    console.log("Duplicate circle");
}


// Create a Square Object:
function Square() {   
}

extend(Square, Shape);

// Overriding:
Square.prototype.duplicate = function() {
    console.log("Duplicate square");
}


// In this case, we have Shape object on the top and two derivative objects, each object will provide different implementation
//      of duplicate method. so we have many implementations or many forms of the duplicate method.

const shapes = [
    new Circle(),
    new Square()
];

for(let shape of shapes)
    shape.duplicate();
// Depending the type of the shape object, different implementation of duplicate method will be called, we can check on the console.
 











// 7: When to use Inheritance:

// Avoid creating inheritance hierarchies
// Favor Composition over Inheritance






// 8: Mixins

const canEat = {
    eat: function() {
        this.hunger--;
        console.log("Eating");
    }
};


const canWalk = {
    walk: function() {
        console.log("Walking");
    }
};

// Define a new feature:
const canSwim = {
    swim: function() {
        console.log("Swimming");
    }
};


function Person() {
}

Object.assign(Person.prototype, canEat, canWalk);
// Basically we modify the prototype of a person and add the capability to eat and walk.

const person = new Person();
// New we have a person object and its prototype have eat and walk function.

// Use this method to copy the properties and methods from one object to another.
// const person = Object.assign({}, canEat, canWalk);
console.log(person);



function GoldFish() {
}

Object.assign(GoldFish.prototype, canEat, canSwim);
const goldfish = new GoldFish;
console.log(goldfish);


// To make code clean:

function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log("Eating");
    }
};


const canWalk = {
    walk: function() {
        console.log("Walking");
    }
};

const canSwim = {
    swim: function() {
        console.log("Swimming");
    }
};


function Person() {
}

mixin(Person.prototype, canEat, canWalk);

const person = new Person();

console.log(person);



function GoldFish() {
}

mixin(GoldFish.prototype, canEat, canSwim);
const goldfish = new GoldFish;
console.log(goldfish);






