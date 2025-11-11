import { Provider, useDispatch, useSelector } from "react-redux"
import store, { ageSelector, countSelector } from "./store"
// useDispatch
// useSelector
import './App.css'

const Age = () => {
  console.log("Age component rendered");
  const dispatch = useDispatch();

  const incrementAge = () => {
    dispatch({ type: "inc_age" });
  }

  const decrementAge = () => {
    dispatch({ type: "dec_age" });
  }

  return (
    <div className="box">
        <h3>Age component</h3>
        <button className="border border-black bg-gray-400 rounded px-2 mr-2 cursor-pointer" onClick={incrementAge}>Increment Age</button>
        <button className="border border-black bg-gray-400 rounded px-2 mr-2 cursor-pointer" onClick={decrementAge}>Decrement Age</button>
    </div>
  );
}

const Counter = () => {
  console.log("Counter component rendered");
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch({ type: "inc_count" });
  }

  const decrementCount = () => {
    dispatch({ type: "dec_count" });
  }

  const asyncIncrement = async () => {
    // We can't use asynchronous functions like this this is a bad practice because we are writing directly in the react components.
    // To use it with Redux there is a library called thunk.Here we pass async function.
    // await new Promise((r) => setTimeout(r, 3000));
    dispatch(async function(dispatch, getState) {
        console.log("inside async dispatch", getState());
        await new Promise((r) => setTimeout(r, 2000));
        dispatch({ type: "inc_count" });
    });
  }

  return (
    <div className="box">
        <h3>Counter component</h3>
        <button className="border border-black bg-gray-400 rounded px-2 mr-2 cursor-pointer" onClick={incrementCount}>Increment Count</button>
        <button className="border border-black bg-gray-400 rounded px-2 mr-2 cursor-pointer" onClick={decrementCount}>Decrement Count</button>
        <button className="border border-black bg-gray-400 rounded px-2 mr-2 cursor-pointer" onClick={asyncIncrement}>Async Count</button>
    </div>
  );
}

const View = () => {
  console.log("View component rendered");
  const count = useSelector(countSelector);
  const age = useSelector(ageSelector);

  return (
    <div className="box">
        <p>
          <b>Age:</b> {age}
        </p>
         <p>
          <b>Count:</b> {count}
        </p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Provider store={store}>
          <h3 className="text-2xl font-semibold">App Component</h3>
          <div id="container">
            <Age />
            <Counter />
            <View />
          </div>
      </Provider>
    </div>
  )
}

export default App
