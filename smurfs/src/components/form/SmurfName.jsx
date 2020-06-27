import React, { useContext } from "react";
// need both the context we are going to use as well as the useContext hook
const SmurfName = (props) => {

  return (
    <label htmlFor="name">
      Name:
      <input
        id="name"
        type="text"
        name="name"
        value={props.value}
        onChange={props.input}
      />
    </label>
  );
};

export default SmurfName