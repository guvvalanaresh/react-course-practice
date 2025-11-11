// Function currying
// Redux middlewares

// middleware = function
// From previous we have seen the dispatch interacts with reducer
// Whereas middleware sits in between dispatch and reducer.
// Here we can see reducer() is a pure function and it is not a asynchronous function.
// When you get the data response it will be problem because reducer is not async for that case we can use middleware because it supports async operations. 
// dispatch(action) =>[m1, m2, m3, m4,....] => reducer(action)

const add = (a, b) => {
    return a + b;
}

// currying
const add2 = (a) => {
    return (b) => {
        return a + b;
    }
}

const add3 = (a) => {
    return (b) => {
        return (c) => {
            return a+b+c;
        }
    }
}

// We can simply the above add3() function
// We can write like this we can it is one of the advantage in the arrow functions
const add4 = (a) => (b) => (c) => a + b + c;

console.log(add4(10)(20)(30))

// console.log(add(10,20));

// console.log(add2(10)(20));

// Like this we can do currying
const addTen = add2(10);

// console.log(addTen(30));

// Like this we can use function currying in the closure concept
// console.log(add3(10)(20)(30));