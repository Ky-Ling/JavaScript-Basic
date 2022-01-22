/*
 * @Date: 2022-01-09 20:43:38
 * @LastEditors: GC
 * @LastEditTime: 2022-01-12 21:30:43
 * @FilePath: \JavaScrip Mosh\OOP\3-ES6 Classes.js
 */
// 1: ES6 Classes:

function Circle(radius) {
    this.radius = radius;
    
    this.draw = function() {
        console.log("Draw");
    }
}

// How we can rewrite this code using ES6 Classes?

class Circle {

    // We use constructor to initialize objects:
    constructor(radius) {
        this.radius = radius;
        this.move = function() {
            console.log("Move");
        }
    }

    // We can also define a function in the body of this class:
    draw() {
        console.log("Draw");
    }
}

const c = new Circle(1);

// On the console: 
// We type: c

// All the method we add in this class will end up with a prototype of the Circle object --> draw()
// And the method we defined in the constructor --> move()

// typeof Circle
//   --> this class are essentially a function (a constructor function)






// 2: Hoisting:

// We have two ways to define a function:
// (1): Function Declaration:
sayHello();
function sayHello() {}

// (2): Function Expression (We should end with ; when we using function expression):
const sayGoodbye = function() {};


// Difference:
//      --> Function declaration are hoisted, which means they are raised to the top of the code, so we can call this function
//              before its declaration.
//      --> In contrast, function expression are not hoisted.




// Back to class:
// (1): Class Declaration:
class Circle {}

// (2): Class Expression:
const square = class {
};


// Unlike function, Both of these two are not hoisted.










// 3: Static Methods:
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    
    // Instance Method: this method is available on an instance of a class which is an object.
    //      --> In this case, this draw method is specific the circle object, it is a particular circle object want to draw.
    draw() {
    }


    // Static Method: they are available on the class itself, not the object instance.
    //      --> In this case, we won't see the parse method of circle object on the console.
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);

    }

}



// const circle = new Circle(1);
const circle = Circle.parse('{"radius": 1}');

// Access the static method:
// Circle.parse()

console.log(circle);







// 4: The This Keyword:


// Enable the strict mode on the top:
// "use strict";

const Circle = function() {
    this.draw = function() { console.log(this); }
}

const c = new Circle();

// Method Call: we are calling a method on an object. In this case, "this" in the function will point to "c" object which is 
//      our Circle object.
c.draw();
// On the console, we will see the Circle object.


// Simply get the reference of the draw method:
const draw = c.draw;
console.log(draw);
// On the console, we will see the draw function.


// Function Call: When we call this method as a function, by default, "this" will point to the global object which is window
//      in the browser or global in Node.
draw();
// On the console, we will see the Window object. But if we enable the strict mode, we will see "undefined", the reason for this 
//      is to prevent us from accidentally modifying the global object, that is a bad practice.

 


// Let's go back to classes:
class Circle {
    draw() {
        console.log(this);
    }
}

const c = new Circle();
const draw = c.draw;
draw();

// On the console, we will see "undefined". Because by default, the body of our classes are executed in a strict mode.











// 4: Private Properties Using Symbols:

// In order to implement abstraction, we use private properties and methods, so we hide certain members of objects, so they 
//      won't be accessible from the outside.
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}

const c = new Circle(1);


// How to implement private properties and methods when using ES6 classes?  ---> ES6 Symbols

const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius) {
        this["_radius"] = radius;
    }

    // To implement the private of method:
    [_draw]() {

    }

    // On the console we type: c
    //      In the prototype, we have another property --> symbol, and that is set to a function.
}

const c = new Circle(1);

// On the console we type: c
//      and we will see Symbol property. And we can not directly access these properties (radius, _radius) in code.


// But:
console.log(Object.getOwnPropertyNames(c));
// On the console we will get an empty array, because we do not have any properties or more accurately and any regular properties
//      in this object. 


console.log(Object.getOwnPropertySymbols(c));
// On the console, this will return a array of symbol, and we can access the properties of this array.

const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);
// Then we can get the value of radius property.







// 5: Private Properties Using WeakMaps:
// Why we call it weakmaps: because its keys are weak, if there is no reference to this key, they will be collected by garbage
//      collector.


const _radius = new WeakMap();

class Circle {
    // Initialize the object:
    constructor(radius) {
        _radius.set(this, radius);
    }

    // How to access this property inside of this class? 
    draw() {
        // This will return the value of the radius property.
        console.log(_radius.get(this));
        // On the console, we type: c.draw()
        //      Now we can get the value of radius: 1
    }

}

const c = new Circle(1);

// This Circle object do not have the radius property.




// How can we define a private method?
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
        _move.set(this, function() {
            console.log("Move", this);
        })

        // How can we access the instance of the Circle object in move method?
            //      We can use arrow function, because arrow function use the "this" value of their containing function.

            // _move.set(this, () => {
            //     console.log("Move", this);
            // })

            // So in this case, "this" is not going to rebound, it is going to be inherited from what we have in this 
            //      constructor, so in this constructor, "this" references the Circle object, and when we use the arrow
            //      function inside this move function, "this" will rebound, it is not going to be reset.

            // On the console, we type: c.draw()
            //      Now we get the move method and get the circle instance, so we can access all the public and private properties
            //      of the Circle object in the move method
    }

    draw() {
        _move.get(this)();
        console.log("Draw");
    }

}

const c = new Circle(1);

// On the console: we type: c.draw()
//      We get the information of the draw method, but 'this' is undefined, because body of this class is executed in strict mode,
//      






// 6: Getters and Setters:
const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);

        // // One complex way to define a getter:
        // Object.defineProperty(this, "radius", {
        //     get: function() {

        //     }
        // })
    }

    // Way 1:
    getRadius() {
        return _radius.get(this);

        // On the console, we type: c.getRadius
        //      We will get the value of the radius.
    }

    // Way 2:
    get radius() {
        return _radius.get(this);

        // Similarly on the console, we type: c.getRadius
        //      We will get the value of the radius.
    }


    // Define a setter:
    set radius(value) {
        if (value <= 0) throw new Error("invalid radius");
        _radius.set(this, value);

        // On the console, we type: c.radius
        //      We will get 1
        //      And we can reset it to 10: c.radius = 10
        //      and then: c.radius --> We will get 10
        //      
    }
}

const c = new Circle(1);

// In this case, we have defined a private property, how can we read the value from the outside, we do not wanna set it, we 
//      just wanna set it.







// 7: Inheritance:
class Shape {
    move() {
        console.log("Move");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Draw");
    }
}

const c = new Circle();


// On the console: we type: c
//      we will get a Circle object, and in its prototype, we have the draw method, and the prototype object itself also have a
//      prototype, and it has the move method. And if we pay attention with the constructor object, we can know that with the 
//      extends keyword, we do not need to reset the constructor.
//      We can type: c.draw() or c.move()





class Shape {
    constructor() {
        this.color = color;
    }
    move() {
        console.log("Move");
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    draw() {
        console.log("Draw");
    }
}

const c = new Circle("red", 1)


// Firstly, we only add a constructor to set the color property in parent class, but if we add the constructor in the Circle 
//      class, we will get a exception ---> If we have a constructor in the parent class and we add a constructor in the 
//      deprived class, inside of this constructor, we should make sure to call the parent constructor firstly to initialize 
//      this base object, so we can use the super keyword to reference the parent object.

// On the console, we type: c
//      We inherit color from the parent class and we add the radius on the circle class itself.






// 8: Method Overriding:
class Shape {
    move() {
        console.log("Move");
    }
}

class Circle extends Shape {
    move() {
        super.move();
        console.log("Circle Move");
    }
}

const c = new Circle();







// 9: Exercise:
const _items = new WeakMap();

class Stack {
    // We are going to use an array to store the objects in this stack, but we set it to be private so that we can only use 
    // the push, pop or peek method.
    constructor() {
        _items.set(this, []);
    }

    push(obj) {
        _items.get(this).push(obj);
    }

    pop() {
        const items = _items.get(this);

        // First check this array is empty or not
        if (items.length === 0)
            throw new Error("Stack is empty");

        return items.pop();
    }

    peek() {
        const items = _items.get(this);

        if (items.length === 0)
            throw new Error("Stack is empty");
        
        return items[items.length - 1];
    }

    get count() {
        return _items.get(this).length;
    }
    


}
