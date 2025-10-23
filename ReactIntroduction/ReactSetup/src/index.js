import React from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"


// const heading = React.createElement("h1", { id : "title", className: "container" }, "Welcome to React");

const heading = React.createElement("h1", {id: "title"}, "Heading")
const para = React.createElement("p",null,"Some para")

// const isMyname = false;
const user = ["Naresh", "Kumar"]

const container = ( 
    <div>
        <h1>{user}</h1>
        <p>kumar</p>
    </div>
)

//JavaScript XML =>
// const container = React.createElement("div",{className: "container"}, heading, para);

const app = document.getElementById("root");

const root = ReactDOM.createRoot(app);

root.render(container);

//If you use the above code in the html file by importing it wont work because we should bundle all our code into single javascript file


//React + ReactDOM + Our code ==> bundle.js

//npx ==> node package execute --> it will get the us the dependencies and modules into our project from some remote area makes our project ready-made to start our project

//Below is the command for downloading the webpack using npx
//npx webpack