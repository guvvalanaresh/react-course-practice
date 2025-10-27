import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

/** useState Hook 
     * What is Hook?
        Hooks are plain javascript functions.
        Hooks can only be used inside a functional component or functions.
        Function which uses hooks should start with "use" keyword.
    * What is useState?
        useState is a react hook which is used to add state to functional components.
        We can store the data in the useState and it can be updated and when it is updated the component is re-rendered.
    * Primitive and Non Primitive States or data types
        Primitive data types: string, number, boolean, null, undefined, symbol
        Non Primitive data types: object, array, function
    * Asynchronous nature of useState
        Asynchronous state updates are batched for performance gains.
        It means in synchronous state the task will complete line by line but in asynchronous state the task will complete together.
        For example,in asynchronous state if we have 3 state updates then all the 3 updates will be done together and then the component will be re-rendered once if there is any error in one update it will not affect the others.
        In synchronous state if we have 3 state updates then the first update will be done and the component will be re-rendered then the second update will be done and the component will be re-rendered again and then the third update will be done and the component will be re-rendered again if there is any error in one update it will affect the others.
    * lazy initialization
        If the initial state is the result of an expensive computation, you may provide a function instead of the initial state.
*/

function Counter() {
    //Here we dealing with primitive data types
    const [count, setCount] = useState(0);

    //Here we dealing with non-primitive data types
    const [user, setUser] = useState({
        name : 'naresh',
        age : 21
    });

    // const increment = () => {
    //     //Here it is updating in the console but not in the UI because whenever there is change in the state it should re-render the component to reflect the changes in the UI but it is not happening.
    //     // count++;
    //     // console.log("Incremented Count:", count);

    //     //With this we can update the state and re-render the component to reflect the changes in the UI using "setCount" because it will trigger a re-render automatically in React.
    //     // setCount(count + 1);

    //     //Here also it will not work as expected because of the asynchronous nature of useState.
    //     // setCount(count + 1);     //Imagine it stored at the memory address of 500
    //     // setCount(count + 2);     //It is still referring to the memory address of 500 and updating so that why it execute the last update task
    //     // setCount(count + 3);    //It is returning this because all the 3 updates are batched together and the last update is taken into consideration.
    //     // console.log("Incremented Count:", count);

    //     //We can avoid the above problem with this by using method which takes previous state as an argument.
    //     setCount(count + 1);         //Now here the address is changing from 500,501,.. like that so you get correct answer
    //     setCount((prevCount) => {
    //         return prevCount + 1;
    //     })
    //     console.log("Incremented Count:", count);
    // }

    const updateUser = () => {
        //When we are updating non-primitive data types we have to spread the previous state and then update the required property.
        // console.log(user);
        // user.age += 1;      //We can observe that it is updating in the console but not in the UI.
        // setUser(user);
        // console.log(user);

        //To make it work in the UI we have to use the spread operator to create a new object and then update the required property.
        //This is how we can update non-primitive data types in useState.
        // console.log(user);
        setUser({...user, age: user.age + 1});
        // console.log({...user, age: user.age + 1});
    }

    return (
        <div>
            {/* <h1>Counter: {count}</h1> */}
            {/* <button onClick={increment}>increment</button> */}
            <h2>name: {user.name} age: {user.age}</h2>
            <button onClick={updateUser}>Update User</button>
        </div>
    );
}

export default Counter;