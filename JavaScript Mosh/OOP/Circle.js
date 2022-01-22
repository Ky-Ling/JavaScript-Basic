/*
 * @Date: 2022-01-13 10:07:09
 * @LastEditors: GC
 * @LastEditTime: 2022-01-13 10:28:08
 * @FilePath: \JavaScrip Mosh\OOP\Circle.js
 */

// Implementation Detail --> We are hiding the details or the complexity inside of our module
const _radius = new WeakMap();


// Public Interface
class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }
    draw() {
        console.log("Circle with radius " + _radius.get(this));
    }
}


// To export this module:
module.exports = Circle