/* Traditional JS way
const rootEl = document.getElementById("root");
const pEl = document.createElement("p");
pEl.innerText = "Welcome to React Learning"
rootEl.appendChild(pEl)
*/

/** using react */ 
// import react packages
import React from 'react';
import ReactDOM from 'react-dom';


// create root element named div
const div = React.createElement("div", {className: "root"}, "Hello, Welcome to React Course");
// create root element 
const root = ReactDOM.createRoot(document.getElementById("root"));
// render the created element
root.render(div);

// adding child element inside an element
const p = React.createElement("p", {}, "Child Element");
// create div element in which you would want to keep the child elements
const div1 = React.createElement("div", {className: "root1"}, p);
// create element with id named root1
const root1 = ReactDOM.createRoot(document.getElementById("root1"))
// render the created element
root1.render(div1);

// adding multiple elements inside an element
const p1 = React.createElement("p", {}, "Child Element - 1");
const p2 = React.createElement("p", {}, "Child Element - 2");
// create div element in which you would want to keep the child elements
const div2 = React.createElement("div", {className: "root2"}, [p1, p2]);
// creates the root element
const root2 = ReactDOM.createRoot(document.getElementById("root2"))
// render the created element
root2.render(div2);

