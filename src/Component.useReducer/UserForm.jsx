import { useReducer } from "react";

function UserForm() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      return {
        ...state,
        ...action,
      };
    },
    {
      first: "",
      last: "",
    }
  );
  return (
    <>
      <input
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <input
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />

      <div>{state.first}</div>
      <div>{state.last}</div>
    </>
  );
}

export default UserForm;