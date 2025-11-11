import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';

const rootReducer = (state = { age:24, count: 0 }, action) => {
    if (action.type === "inc_age") return { ...state, age: state.age + 1 };
    if (action.type === "dec_age") return { ...state, age: state.age - 1 };
    if (action.type === "inc_count") return { ...state, count: state.count + 1 };
    if (action.type === "dec_count") return { ...state, count: state.count - 1 };
    return state;
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

export const countSelector = (state) => {
    // Here it gets the actual current state
    console.log(state);
    return state.count;
}

export const ageSelector = (state) => {
    return state.age;
}