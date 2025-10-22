// const addButton = document.body.querySelector('.js-add-button');

// console.log(addButton);

const heading1 = document.createElement('h1');
// heading1.id = "title";
// heading1.innerText = "Hello React";

const container = document.getElementById("root");
// container.appendChild(heading1);

//Here we copy pasted the react CDN file code inside the lib folder where it contains the react core library
console.log(React, ReactDOM);

//In React this is how we create the elements 
const heading2 = React.createElement('h1', {id : "title"}, "Hello React");

//In react we should render our element in the UI after creating it done by Using ReactDOM
const root = ReactDOM.createRoot(container);

//It reneders our element in the UI
root.render(heading2);

console.dir(heading1);
console.log(heading2);