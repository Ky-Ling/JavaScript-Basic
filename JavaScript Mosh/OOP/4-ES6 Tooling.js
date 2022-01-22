/*
 * @Date: 2022-01-12 21:33:14
 * @LastEditors: GC
 * @LastEditTime: 2022-01-13 11:02:57
 * @FilePath: \JavaScrip Mosh\OOP\4-ES6 Tooling.js
 */

// 1: Modules:
// We split these code into multiple files and we call each of these fines --> a module
//      (1): Increase the maintainability of our application
//      (2): We get a chance to use one or more of these modules in different parts of our application or in different applications
//      (3): We can abstract our code --> We can hide some of the complexity of module and only expose essentials


const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log("Circle with radius " + _radius.get(this));
    }
}

const c = new Circle(10);

console.log(_radius.get(c));

c.draw();









// 2: CommonJS Modules:

// Things are highly related should go together.  --> Cohesion

// By default, everything we defined in module are private, it is not accessible from the outside unless we explicitly export it.

// The CommonJS define the module.exports and require function.

const Circle = require("./Circle") 


// In this case, we only export the Circle class, this radius weakmap is not accessible in other modules.
//      What we are exporting is Circle class --> What we call: public interface
const c = new Circle(10);

console.log(_radius.get(c));

c.draw();


// On the terminal: node ***.js







// 3: ES6 Modules:

import {Circle} from "./Circle1.js"

const c = new Circle(10);

c.draw();






// 4: ES6 Tooling:

// (1): Transpiler --> Translator + Compiler
// (2): Bundler