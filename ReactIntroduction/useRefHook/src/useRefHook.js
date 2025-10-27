/** 
    * useRef Hook
    
    *Need of useRef
    *Signature of useRef & it's functionality
        useRef(initialValue) => {current: initialValue} //What ever we pass in useRef that will be assigned to current property of the object.
    *Real time usecases of useRef

    My Points:
    1.First understand that if you create a state in a component using useState, whenever that state is updated the component re-renders than it will allocated the new memory to it like for example if count variable stored at #500 heap memory then after re-render it will cahnge to some #600 like that.
        To avoid this problem we are useRef Hook.
    2.Every react element has a property or attribute of ref={} it will take a object {current: 3} like this.
    3.When you want to interact with Real DOM elements like this h1,p,... useRef() is very useful.
    4.To execute actions in the child components also useRef will be useful.
 */
import React, { useEffect, useRef, useState } from 'react';

const list = [];

const App = () => {
    const [count, setCount] = useState(0);
    //1st render = #500
    //2nd render = #600

    // const user = {name: 'naresh', age: 21}

    const reference = useRef({name: 'naresh', age: 21});
    // {current: T} => stored at address 400
    // 2nd render = reference = {current: T} => 400
    // 3rd render = reference = {current: T} => 400

    console.log(reference);

    // list.push(reference);
    // list.push(user);
    // if (list.length === 2){
    //     console.log(list);
    //     console.log(list[0] === list[1]);  //It will return false because both are different objects stored at different memory locations.
    // }
    const updateName = () => {
        reference.current.name = "Naresh Guvvala";  //Here it will update in the memory but not re render on the UI that what make different the useRef from others.
    }

    // const element = {current: null} //instead of this you can use the below useRef
    const element = useRef(null);

    useEffect(() => {
        console.log(element);
        //If you want to change that you can directly use the below code
        //like this we will execute after mounting
        //When you want to interact with Real DOM elements useRef() is very useful.
        element.current.innerText = "Changed useRef Text"
    }, []);

    return (
        <div>
            <h1 ref={element}>useRef Hook Example</h1>  {/* We can see this h1 text before mounting */}
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={updateName}>update name</button>
        </div>
    );
}

export default App;