import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT ="increment";
const DECREMENT_COUNT ="decrement";
const ADD_VALUE="valueToAdd"
const ADD ="add";
const actionIncrement = () => {
  return { type: INCREMENT_COUNT };
};

const actionDecrement = () => {
  return { type: DECREMENT_COUNT };
};

const actionAdd = (value) => {
  return { type: ADD, payload: value };
};

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };

    case DECREMENT_COUNT:
      return { ...state, count: state.count - 1 };

    case ADD_VALUE:
      return { ...state, adder: action.payload };

    case ADD:
      return { ...state, count: state.count + action.payload, adder: "" };

    default:
      return state;
  }
};
function CounterPage({ initialCount }) {
  //   const [count, setCount] = useState(initialCount);
  //   const [adder, setAdder] = useState("");

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    adder: 0,
  });
  const increment = () => {
    dispatch(actionIncrement());
    // setCount((prev) => prev + 1);
  };

  const decrement = () => {
    dispatch(actionDecrement());
    // setCount((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof state.adder  == "number") {
      dispatch(actionAdd(state.adder));
    }
  };

  const handleChange = (e) => {
    if (e.target.value !== "") {
      const valueToAdd = parseInt(e.target.value);
      dispatch({ type: ADD_VALUE, payload: valueToAdd });
    }
  };

  console.log(state);

  return (
    <Panel className="m-3">
      <h1 className="mb-5 text-2xl">Count is: {state.count}</h1>

      <div className="flex gap-4">
        <Button primary onClick={increment}>
          Increment
        </Button>

        <Button primary onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="text-lg">Add Number:</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          value={state.adder}
          onChange={handleChange}
        />
        <Button primary>Add</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
