import { useReducer } from "react";
import ReduceForms from "./ReduceForms";

function ReduceListName() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
        case "ADD_NAME":
          return {
            ...state,
            names: [...state.names, state.name],
            name: "",
          };
      }
    },
    {
      names: [],
      name: "",
    }
  );
  return (
    <>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <button
        onClick={() => dispatch({ type: "ADD_NAME" })}
      >
        Add Name
      </button>

      <ReduceForms state={state} />
    </>
  );
}

export default ReduceListName;
