/*
 * @Date: 2022-01-13 10:47:56
 * @LastEditors: GC
 * @LastEditTime: 2022-01-13 11:02:03
 * @FilePath: \JavaScrip Mosh\OOP\Circle1.js
 */

const _radius = new WeakMap();

export class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log("Circle with radius " + _radius.get(this));
    }
}
