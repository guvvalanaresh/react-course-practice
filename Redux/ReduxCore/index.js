import { createStore } from './redux.js';

const incButton = document.getElementById("inc");
const replacer = document.getElementById("replacer");

// reducer is one part in the Redux.
// Here initial should be given by the reducer.
const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "increment") {
        return { count: state.count + 1 };
    }
    return { count: 10 };
}

// Suppose if we want another action to perform we use this like another reducer.
const reducer2 = (state, action) => {
    console.log("reducer 2", state, action);
    if(action.type === "increment"){
        return {count: state.count + 2};
    }
    return {count: 10};
};

// reducer(state, action) --> state returns previous state from 2nd render, actions will based on the users action(it takes the what is the action given by the dispatch function).
// 1st time reducer returns the redux state.

// Here we established a basic store as like in the redux diagram.
// createStore expects a parameters like reducer
const store = createStore(reducer);
console.log(store);
//After you passing the reducer console log the store you will find the methods what can we peform on the store.

/* 
    getState: f() // returns the latest state of the store.
    dispatch: f(action) // dispatches actions to the reducer.
    subscribe: f(listner)
    replaceReducer: f(newReducer)
*/

// What reducer returns it is the actual data in the store.(Most important remember).
console.log(store.getState());
const subscriber = () => {
    console.log("inside subscriber");
    console.log(store.getState());
}
store.subscribe(subscriber);

incButton.addEventListener("click", (e) => {
    store.dispatch({type: "increment"});
});

replacer.addEventListener("click", (e) => {
    store.replaceReducer(reducer2);
});

// state = {count: 14}
// replace the reducer1 with reducer2