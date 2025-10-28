/** 
    *contextAPI
      1.We can say context API is the backbone of the react.
      2.There are two libraries which is react-router-dom and redux(global state management) these are directly dependent on contextAPI.
        You can see how powerful contextAPI is.
      3.contextAPI is a react core library it comes react only.

    1.What is prop drilling?
        Prop drilling is a process in React where data is passed from a parent component to a deeply nested child component through props. This can make the code harder to maintain and understand, especially when many components are involved.
    2.what is context api ?
        Context API is a React feature that allows you to share state and props between components without having to pass them down manually through every level of the component tree. It provides a way to create global variables that can be accessed by any component in the application.
    3.provider & consumer
        Provider: The Provider component is used to create a context and provide a value to its child components. It acts as a wrapper around the components that need access to the context value.
        Consumer: The Consumer component is used to consume the context value provided by the Provider. It allows child components to access the context value without having to pass it down through props.
    4.useContext Hook
        The useContext Hook is a built-in React Hook that allows you to access the context value directly in functional components. It simplifies the process of consuming context by eliminating the need for a Consumer component.
*/

import React, { createContext, useContext } from "react";

// const ThemeContext = createContext();
const ThemeContext = createContext("defaultTheme");

//Products component is Categories children component so the theme value is accessed or using by useContext Hook.
const Products = () => {
    const theme = useContext(ThemeContext);

    console.log("Products theme:", theme);
    return (
        <div>
            <h3>Products Component</h3>
            <button style={{border: theme === "light" ? "1px solid black" : "none"}}>
                Add to Cart
            </button>
        </div>
    );   
}

const Categories = () => {
    return (
        <div>
            <h2>Categories Component</h2>
            <Products />
        </div>
    );
}

const Home = () => {
    const theme = "light";  // "light" | "dark"

    return (
        <div>
            <h3>Context API Example</h3>
            <ThemeContext.Provider value="dummyTheme">
                {/* Theme Provider always takes its nearest value from the component tree. */}
                <ThemeContext.Provider value={theme}>
                    <Categories />
                </ThemeContext.Provider>
                {/* For Categories component and its children the theme value is "light" and for Navbar component nearest provider value is "dummyTheme". */}
                <Navbar />
            </ThemeContext.Provider>
        </div>
    );
}

//Here Navbar Component is sibling component of Categories and we can't get the theme value of categories here.
//We can pass a default value in createContext() and whenever we call it using useContext Hook it will give us the default value.
const Navbar = () => {
    const theme = useContext(ThemeContext);

    console.log("Navbar theme:", theme); // It will log "defaultTheme" as we have set default value in createContext.
    return (
        <nav>
            <h2>Navbar Component</h2>
        </nav>
    );
}

export default Home;