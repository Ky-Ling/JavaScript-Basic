/*
 * @Date: 2022-01-16 20:35:38
 * @LastEditors: GC
 * @LastEditTime: 2022-01-19 20:46:30
 * @FilePath: \JavaScript DOM\Part3\dom.js
 */
// 1: How add an event listener

var button = document.getElementById("button").addEventListener("click", buttonClick);

// function buttonClick() {
//     console.log("Button Clicked");
//     document.getElementById("header-title").textContent = "Changed";
//     document.querySelector("#main").style.backgroundColor = "red";
// }

// Or we can pass parameter for this function:
function buttonClick(e) {
    // console.log(e);

    console.log(e.target);
    //  It gives us the actual element that was clicked
    
    // Get the id
    console.log(e.target.id);

    console.log(e.target.className);
    // It gives us the whole string of all the classes

    console.log(e.target.classList);
    // It gives us the Dom token list


    var output = document.getElementById("output");
    output.innerHTML = '<h3>' + e.target.id + '</h3>';


    console.log(e.type);
    // It gives us whatever type of event

    console.log(e.clientX);
    // Get the position of the x axis form the browser or the window
    console.log(e.clientY);

    // Get the mouse position from the actual element that you are inside of.
    console.log(e.offsetY);
    console.log(e.offsetX);


    // We can do things base on if you are holding some keys
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
}



// 2: Different events based on different actions

// (1): click events:
var button = document.getElementById("button");

button.addEventListener("click", runEvent);

// Double click
button.addEventListener("dblclick", runEvent);

// Mouse down event
button.addEventListener("mousedown", runEvent);

// Mouse up event
button.addEventListener("mouseup", runEvent);


function runEvent(e) {
    console.log("EVENT TYPE: " + e.type);
}



// (2): Mouse events:
var box = document.getElementById("box");

box.addEventListener("mouseenter", runEvent);
box.addEventListener("mouseleave", runEvent);

box.addEventListener("mouseover", runEvent);
box.addEventListener("mouseout", runEvent);

// If we do not have content inside this div, they have same effect. But if we have content, there are some difference:
//      When we go over the box(enter and over), when we go over the content(only over) --> The mouseenter is only going to
//          be for that for the element itself but mouseover will be for any inner elements.
//      --> Same with leave and out!

box.addEventListener("mousemove", runEvent1);
// That is gonna fire off whenever i am just in there and moving the mouse, and with the runEvent1 function, we can print
//  out the position of our mouse.

function runEvent(e) {
    console.log("EVENT TYPE: " + e.type);
}

function runEvent1(e) {
    console.log("EVENT TYPE: " + e.type);
    output.innerHTML = "<h3>MouseX: " + e.offsetX + "</h3><h3>MouseY: " + e.offsetY + " </h3>";

    // Generate some color based on the offsets
    box.style.backgroundColor = "rgb("+ e.offsetX +", "+ e.offsetY +", 40)";

    // Change the body's background color
    document.body.style.backgroundColor = "rgb("+ e.offsetX +", "+ e.offsetY +", 40)";
}




// (3): keyboard events and input events

var itemInput = document.querySelector('input[type="text"]');

var select = document.querySelector("select");

itemInput.addEventListener("keydown", runEvent);
itemInput.addEventListener("keyup", runEvent);
itemInput.addEventListener("keypress", runEvent);


itemInput.addEventListener("focus", runEvent);
itemInput.addEventListener("blur", runEvent);
//  When we click in we get focus, when we click out we get blur


itemInput.addEventListener("cut", runEvent);
itemInput.addEventListener("paste", runEvent);


itemInput.addEventListener("input", runEvent);


select.addEventListener("change", runEvent);
select.addEventListener("input", runEvent);

function runEvent(e) {
    console.log("EVENT TYPE: " + e.type);

    console.log(e.target.value);

    document.getElementById("output").innerHTML = "<h3>" + e.target.value + "</h3>";
}


// (4): submit event:

var form = document.querySelector("form");

form.addEventListener("submit", runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log("EVENT TYPE: " + e.type);
}
