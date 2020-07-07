import React, { useState } from "react";
import { connect } from "react-redux";
import { createSmurf } from "../actions/smurfActions";

const AddSmurf = (props) => {
  // form state
  const [formState, setFormState] = useState({
    name: "",
    height: 0,
    age: 0,
    id: Date.now(),
  });

  // state for post requests
  const [theSmurf, setTheSmurf] = useState([]);

  const inputChanged = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    console.log("formState from component: ", formState);
    e.preventDefault();
    props.createSmurf(formState);
  };

  return (
    <>
      <label htmlFor="name">
        Name:
        <input
          id="name"
          type="text"
          name="name"
          value={formState.name}
          onChange={inputChanged}
        />
      </label>
      <label htmlFor="age">
        Age:
        <input
          id="age"
          type="number"
          name="age"
          value={formState.age}
          onChange={inputChanged}
        />
      </label>
      <br />
      <label htmlFor="height">
        Height:
        <input
          id="height"
          type="number"
          name="height"
          value={formState.height}
          onChange={inputChanged}
        />
      </label>
      <br />
      <button type="submit" onClick={handleSubmit}>
        Add Smurf
      </button>
    </>
  );
};
export default connect(() => {}, { createSmurf })(AddSmurf);
