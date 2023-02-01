/*
//PARENT ELEMENT:
let items = document.querySelector("#items");
console.log(items.parentNode.parentNode.parentElement)

//LASTELEMENTCHILD:
items = document.querySelector("#items");
console.log(items.lastElementChild);

//lastchild
console.log(items.lastChild);//as same it will show "text" because of breakline or white space.

//CREATE ELEMENT
let newdiv = document.createElement("div");
newdiv.className = "hello";
newdiv.id = "hello 1";
newdiv.setAttribute('title','hello world');

let divtext = document.createTextNode('Hello Kishan');
newdiv.appendChild(divtext);

console.log(newdiv);

//FIRSTELEMENTCHILD
let items = document.querySelector("#items");
console.log(items.firstElementChild);

//FIRSTCHILD
console.log(items.firstChild);//as same it will show "text" because of breakline or white space.

//NEXTSIBLING
let items=document.querySelector("#items");
console.log(items.nextSibling)//as same it will show "text" because of breakline or white space.

//NEXT ELEMENT SIBLING
console.log(items.nextElementSibling); //ANS is null because we dont any next sibling of this element

//PREVIOUSSIBLING
let items=document.querySelector("#items");
console.log(items.previousSibling)//as same it will show "text" because of breakline or white space.

//PREVIOUSELEMENTSIBLING
console.log(items.previousElementSibling);
items.previousElementSibling.style.backgroundColor = "red";

//CREATECHILD AND APPEND CHILD
let newdiv = document.createElement("div");
newdiv.className = "hello";
newdiv.id = "hello 1";
newdiv.setAttribute('title','hello world');
let divtext = document.createTextNode('Hello Kishan');
newdiv.appendChild(divtext);
console.log(newdiv);
let container = document.querySelector('header .container');
let h1 = document.querySelector('header #header-title');
container.insertBefore(newdiv,h1);

//SET ATTRIBUTE
let newdiv = document.createElement("div");
newdiv.className = "hello";
newdiv.id = "hello 1";
newdiv.setAttribute('title','hello world');
*/