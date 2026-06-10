import React, { useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  errors: {},
};

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}


function UserForm() {
  const [state, dispatch] = useReducer(
    formReducer,
    initialState
  );

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!state.email.includes("@")) {
      errors.email = "Invalid Email";
    }

    if (Object.keys(errors).length) {
      dispatch({
        type: "SET_ERRORS",
        payload: errors,
      });
      return;
    }

    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        value={state.firstName}
        onChange={handleChange}
      />

      <input
        name="lastName"
        value={state.lastName}
        onChange={handleChange}
      />

      <input
        name="email"
        value={state.email}
        onChange={handleChange}
      />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}
