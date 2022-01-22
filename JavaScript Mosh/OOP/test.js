/*
 * @Date: 2021-12-01 19:50:29
 * @LastEditors: GC
 * @LastEditTime: 2021-12-12 13:49:57
 * @FilePath: \JavaScrip Mosh\OOP\test.js
 */

function Shape() {
    Shape.prototype.duplicate = function() {
        console.log("Duplicate");
    }
}

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


Circle.prototype.draw = function() {
    console.log("Draw");
}

const s = new Shape();
const c = new Circle(1);

