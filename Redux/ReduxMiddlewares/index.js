import { createStore, applyMiddleware } from "../YouTubeInputTagComponents/redux.js";

const incButton = document.getElementById("inc");
const view = document.getElementById("view");

const reducer = (state = {count: 0}, action) => {
    console.log("inside reducer", action);
    if (action.type === "inc"){
        return { count: state.count + 1 }
    }
    if (action.type === "dec"){
        return { count: state.count - 1 }
    }
    return state;
};


// const m1 = (store) => {
//     console.log("inside middleware", store);
//     return (next) => {
//         console.log("inside next method");
//         return (action) => {
//             console.log("inside next handler");
//             // business logic

//         }
//     }
// }
// We can write it in a more simplified way like this
// If you see in console the midlleware wont until the action is specified here.
// Like this we can achieve the asynchronous nature we can't achieve in the only reducers helpful in large data we are getting from externals like API, etc...
const m1 = (store) => (next) => async (action) => {
    // business logic
    console.log("inside first middleware");
    await new Promise(r => setTimeout(r, 3000));
    next(action); 
}

// dispatch(action) =>[m1(3), m2(1)] => reducer(action)
// Here after 3 + 1 = 4 seconds it will update the state.
const m2 = (store) => (next) => async (action) => {
    // business logic
    console.log("inside second middleware");
    await new Promise(r => setTimeout(r, 1000));
    next(action); 
}

const store = createStore(reducer, applyMiddleware(m1, m2));
console.log("store created");

incButton.addEventListener("click", () => {
    store.dispatch({ type: "inc" });
});

store.subscribe(() => {
    view.innerText = store.getState().count;
});

// We wrote console logs to know hoe it is working from where to where it is going.