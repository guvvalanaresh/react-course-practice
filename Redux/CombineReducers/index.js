/** 
    {
        // suppose if i made changes in the settings state it will update that set like that
        // We will maitain each feature in each state in near future if we want to add other features we will maintain each state for them.
        // It will make the apllication complex to handle them.
        // So we use reducers for each state and combine them together(to this we have some utility function in Redux and we can use that)
        settings: {}
        userInfo: {}
    }
 */

import { combineReducers, createStore } from "../YouTubeInputTagComponents/redux.js";

const settingsReducer = (state = {theme: "light"}, action) => {
    // console.log("inside settings reducer");
    if (action.type === "toggle_theme") {
        return { theme: state.theme === "light" ? "dark" : "light" }
    }
    return state;
}

const userInfoReducer = (state = {isLoggedin: false}, action) => {
    // console.log("inside user info reducer");
    return state;
}

// Here it is executing all reducers that what we passed to the store even we cahnged one small thing in other reducer also.
// We can say it as one of it's drawback because if we made change in settings here next it will execute userifo again.
// Which is uneccesary because of executing every reducer without any change of other reducers everytime.
// A application has some hundreds of many reducers thats why.This issue is solved in Redux Toolkit.

const rootReducer = combineReducers({
    // Whatever name you give to the reducers here (settings: <- it is the name of reducer we have given) will be the final key name for the Reducer.
    settings: settingsReducer,
    userInfo: userInfoReducer
});

const store = createStore(rootReducer);
// console.log("store created");

// console.log(store);

const container = document.getElementById("container");
const themeButton = document.getElementById("theme");
themeButton.addEventListener("click", (e) => {
    store.dispatch({ type: "toggle_theme"});
});

store.subscribe(() => {
    const theme = store.getState().settings.theme;
    container.className = theme;
});
