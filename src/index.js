/* Traditional JS way : Using CDN
const rootEl = document.getElementById("root");
const pEl = document.createElement("p");
pEl.innerText = "Welcome to React Learning"
rootEl.appendChild(pEl)
*/

/** using react */ 
// import react packages
import React from 'react';
import ReactDOM from 'react-dom/client';


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

/**************** Using JSX  *************************/

const apiResponse = "I am a div element, from api response";
const divEL = <div className='text'>{apiResponse}</div>

// conditional rendering
const isMorning = true;
const data = isMorning ? "Morning data" : "Evening data"
// click method
const handleClick = (state)=> console.log("I am clicked:", state)
//Note:  ()=> handleClick(isMorning) --> if clicked , then only this method gets executed

// JSX Element
const greetDataElement = isMorning ? <div>{data} <span onClick={()=> handleClick(isMorning)}>at 8am</span> </div> : <div>{data} at 6pm</div> ;
// functional component
const GreetComponent = () => 
  <>
    {greetDataElement} I am a JSX element and I basically reside inside the functional
    component
  </>;
// <></> is fragment syntax in react
// creating root element;
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
// rendering the created root element 
root3.render(<GreetComponent/>); //Here the  <GreetComponent/> tag is a self closing tag





