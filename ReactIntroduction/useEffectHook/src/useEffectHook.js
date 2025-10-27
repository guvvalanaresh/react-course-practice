/**
    * useEffect Hook topics to be covered:
        1.What is UseEffect Hook and why we need it?
            UseEffect is also a hook in React that allows you to perform side effects in function components.
            That means it allows us to interact with the outside the component data sources like fetching data from APIs, browser APIs, or even manually manipulating the DOM.
            To execute this side effect logic, we use the useEffect hook.

        2.Signature of UseEffect
            The signature of useEffect is as follows:
            useEffect(callback, dependencyList)
                mounting,updating,unmounting

             Note: When we use only callback with useEffect, it runs after every render of the component.
            This is useful when you want to perform an action every time the component updates, such as logging or updating the document title.

        3.Dependency list and its usage 
            The dependency list is an optional second argument to the useEffect hook. It is an array of values that the effect depends on.
            When any of the values in the dependency list change, the effect will re-run.
            If you provide an empty array as the dependency list, the effect will only run once when the component mounts and not on subsequent updates.

            Note:
              It will on re render only when some given scenarios only at that time we will use dependency list.
              dependency list is nothing but an array data structure which contains some values.

        4.working of useEffect in updating / unmounting phase
 */
import React, { useEffect, useState } from 'react';

// const App = () => {
//     const [count, setCount] = useState(10);
//     const [age, setAge] = useState(21);

//     //After component is mounted or rendered in UI then this useEffect will be executed.
//     //We can put as many as useEffects we want in a single component.

//     // useEffect(() => {
//     //     console.log("inside useeffect");
//     // }, []);

//     //Here below we clicked count increment button so thats why it executed useEffect with count in dependency list and both count and age useEffect because count or age is changed.
//     //Suppose if we clicked age increment button then only age useEffect and count or age useEffect will be executed.like this useEffect works.

//     useEffect(() => {
//         console.log("count is changed");
//     }, [count]);
//     //1st render = [10]
//     //2nd render = [11]     // it is changed because we incremented count value by 1

//      useEffect(() => {
//         console.log("age is changed");
//     }, [age]);
//     //1st render = [21]
//     //2nd render = [21]    // it is not changed because we didn't increment age value

//      useEffect(() => {
//         console.log("count or age is changed");
//     }, [count, age]);
//     //1st render = [10,21]
//     //2nd render = [11,21]   // it is changed because we incremented count value by 1 if any one value is changed it will execute.
//     //3rd render = [11,22]  //here age is changed so it will execute.

//     // useEffect will be executed when count value is changed.
//     return (
//         <div>
//             <h1>count : {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment Count</button>
//             <h1>age : {age}</h1>
//             <button onClick={() => setAge(age + 1)}>Increment Age</button>
//         </div>   
//     );
// }

//Lets see how useEffect works in unmounting phase.
const App = () => {

    useEffect(() => {
        console.log("Component Mounted");

        //After component is unmounted from the UI then this cleanup function will be executed.
        return () => {
            console.log("inside cleanup function");
        };
        
    }, []);

    //Unmounting phase means when a component is removed from the UI.
    return (
        <div>
            <h1>App component</h1>
        </div>
    );
}

export default App;