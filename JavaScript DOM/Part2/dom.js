/*
 * @Date: 2022-01-15 21:12:20
 * @LastEditors: GC
 * @LastEditTime: 2022-01-19 20:41:51
 * @FilePath: \JavaScript DOM\Part2\dom.js
 */

// 1: Traversing the DOM:
//      --> It is like moving up and down, looking at the parent nodes, child nodes and siblings

// (1): Parent nodes
var itemList = document.querySelector("#items");
console.log(itemList.parentNode);
//      It gives us the id of "main" which is our parent node

// Change the background color of this parent node
itemList.parentNode.style.backgroundColor = "black";


console.log(itemList.parentNode.parentNode);
//      --> It gives us the div with the class of "container"
console.log(itemList.parentNode.parentNode.parentNode)
//      --> We will get the body



// (2): parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "red";
console.log(itemList.parentElement.parentElement);
console.log(itemList.parentElement.parentElement.parentElement);



// (3): childNodes

console.log(itemList.childNodes);
//      --> We will get a node list (text represents the line break)

console.log(itemList.children);
//      --> We will get a HTML collection of items
console.log(itemList.children[1]);

itemList.children.style.backgroundColor = "yellow";




// (4): firstChild
console.log(itemList.firstChild);
//      --> We will get the first child(if we have line break, we will get "text")



// (5): firstElementChild
console.log(itemList.firstElementChild);
//      --> We will get the "li"

itemList.firstElementChild.textContent = "Hello li";

// (6): lastChild
// (7): lastElementChild

// (8): nextSibling
console.log(itemList.nextSibling);

// (9): nextElementSibling
console.log(itemList.nextElementSibling);

// (10): previousSibling
console.log(itemList.previousSibling);

// (11): previousElementSibling
console.log(itemList.previousElementSibling);
previousElementSibling.style.color = "green";




// 2: How to create elements and insert them?
// (1): createElement
var newDiv = document.createElement("div");

// Add a class
newDiv.className = "hello";

// Add a id
newDiv.id = "hello1";

// Add attribute
newDiv.setAttribute("title", "Hello Div");

// Add content inside it --> create text node
var newDivText = document.createTextNode = "Hello World";

// Append this text node to div
newDiv.appendChild(newDivText);


// Insert this new div into DOM
var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");


console.log(newDiv);


// Change something
newDiv.style.fontSize = "30px";


container.insertBefore(newDiv, h1);
 

