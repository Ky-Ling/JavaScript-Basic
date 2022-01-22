/*
 * @Date: 2022-01-14 21:18:14
 * @LastEditors: GC
 * @LastEditTime: 2022-01-19 20:33:42
 * @FilePath: \JavaScript DOM\Part1\dom.js
 */

// 1: Examine the document object:

// Show us all the different properties and methods attached to the document object.
// console.dir(document);

console.log(document.domain);
console.log(document.URL);

// Get the title of this page:
console.log(document.title);

// And we can change the title using our script:
document.title = 124;

console.log(document.doctype);

// Grab the head element:
console.log(document.head);

console.log(document.body);

// Give us an array or a HTML collection of everything that is in the DOM
console.log(document.all);

// Grab the index of 10
console.log(document.all[10]);

// Change things based on our selector
document.all[10].textContent = "Hello";

// Get the collection of all the forms
console.log(document.forms);
console.log(document.forms[1]);

console.log(document.links);

console.log(document.images);


// 2: getElementById --> 4 things

// console.log(document.getElementById("header-title"));

var headerTitle = document.getElementById("header-title");
console.log(headerTitle);

// (1): Change the content
headerTitle.textContent = "Hello";

// (2): Another way to change the content
headerTitle.innerText = "Good";

// The difference:
//      In the h1 tag, we set the style of span tag is none, so we won'e see anything about the content of span tag, however
//      if we console.log(headerTitle.textContent), we still see the content of span. But if we log out headerTitle.innerText,
//      we won't see the content, so we have to pay attention to the styling, that is the difference between these two.


// (3): It won't change h1 to h3, it puts the HTML inside of that DOM element.
headerTitle.innerHTML("<h3>Hello World</h3>");


// (4): Change the CSS style
headerTitle.style.borderBottom = "3px solid black";







// 3: getElementByClassName
var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);

// Change the text of a particular item
items[1].textContent = "Hello 2";

// Change the style:
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";

// Add a new style --> Loop through this HTML collection or array
for(var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "gray";
}




// 4: getElementByTagName
var li = document.getElementsByTagName("li")
console.log(li);
console.log(li[1]);

li[1].textContent = "World";

li[1].style.backgroundColor = "gray";
li[1].style.fontWeight = "bold";

for(var i = 0; i < li.length; i++) {
    li[i].backgroundColor = "gary";
}




// 5: querySelector
//      By default it only grabs the first element. We can use any CSS selector


var header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px #ccc";

var input = document.querySelector("input");
input.value = "Hello";

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

// We only change the first one
var items = document.querySelector(".list-group-item")
items.style.color = "red";

// Change the last one using CSS child
var lastItem = document.querySelector(".list-group.item:last-child");
lastItem.style.color = "blue";

// Using the pseudo selectors
var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "coral";







// 6: querySelectorAll
//      --> Grab more than one thing

var titles = document.querySelectorAll(".title");
console.log(titles);
//      --> We will get a node list
titles[0].textContent = "Hello";

var odd = document.querySelectorAll("li:nth-child(odd)");
for (var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = "gray";
}



