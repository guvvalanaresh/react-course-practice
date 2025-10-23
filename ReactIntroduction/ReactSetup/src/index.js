import React from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"

const heading = React.createElement("h1", { id : "title", className: "container" }, "Welcome to React");

const app = document.getElementById("root");

const root = ReactDOM.createRoot(app);

root.render(heading);

//If you use the above code in the html file by importing it wont work because we should bundle all our code into single javascript file


//React + ReactDOM + Our code ==> bundle.js

//npx ==> node package execute --> it will get the us the dependencies and modules into our project from some remote area makes our project ready-made to start our project

//Below is the command for downloading the webpack using npx
//npx webpack