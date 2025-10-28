//When a component re-renders, all its functions are re-created. This means that if you pass a function as a prop to a child component, the child component will receive a new function reference on every render, even if the function's logic hasn't changed. This can lead to unnecessary re-renders of the child component, which can impact performance, especially in larger applications.
//To overcome this issue, React provides the useCallback hook. The useCallback hook returns a memoized version of the callback function that only changes if one of the dependencies has changed. This means that if the dependencies remain the same between renders, the same function reference is returned, preventing unnecessary re-renders of child components.

//useCallback(function, dependencies) : cachedFunction (it returns a cachedFunction))



import React, { useCallback } from 'react';
import { useState } from 'react';

const refs = [];

const App = () => {
    const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(count + 1);
    // }

    //1st render = #500, deps = []
    //2nd render = #500, deps = []
    //the above renders will have the same memory because there is no change in the dependencies array.If there is a change it will allocate a new memory to that function which is using callback hook.
    // const increment = useCallback(() => {
    //     setCount(count + 1);
    // }, []);

    //1st render = #500, deps = [0]
    //2nd render = #500, deps = [0]
    //3rd render = #600, deps = [1]
    const increment = useCallback(() => {
        setCount((count) => count + 1);     //This is the correct way to update the state when using useCallback hook with dependencies.
        // setCount(count + 1);             //Here this wont work because it will take always the initial value of count which is 0 as the dependency array has count value as 0 only until the count reaches 2(it takes same reference memory from parent always and endup giving always 1 everytime).
    }, [count < 2 ? 0 : count]);

    refs.push(increment);
    if(refs.length === 3){
        // console.log(refs);
        console.log(refs[0] === refs[1]);   //Here everytime the increment function re renders for every update in the component so it will allocate new memory for everytime.
        console.log(refs[0] === refs[2]);
    }

    return (
        <div>
            <h1>useCallback Hook Example</h1>
            <p>count : {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default App;