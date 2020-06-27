import axios from "axios";
import SmurfName from "./SmurfName";
import SmurfAge from "./SmurfAge";
import SmurfHeight from "./SmurfHeight";
import React, { useContext, useState } from "react";
import {context} from "../../contexts/context"
import { Button } from "@material-ui/core";
const Form = (props) => {
  const value = useContext(context);
  // form state
  const [formState, setFormState] = useState({
    name: "",
    height: 0,
    age: "",
  });

  // state for post requests
  const [theSmurf, setTheSmurf] = useState([]);

  const inputChanged = (event) => {
    setFormState({...formState, [event.target.name] : event.target.value}) ;
  };

  const sumbitForm = (event) => {
    event.preventDefault();
    axios
      .post("https://localhost:3333/smurfs", formState)
      .then((res) => {
          console.log("formState: ", formState, "res.data: ", res.data)
        // setTheSmurf([res.data, ...theSmurf]);
      })
      .catch((err) => console.error(err.res));
  };

  return (
    <>
      <SmurfName input={inputChanged} value={value.name} />
      <SmurfAge input={inputChanged} value={value.age} />
      <SmurfHeight input={inputChanged} value={value.height} />
      <button type="submit" onClick={sumbitForm}>Add Smurf</button>
    </>
  );
};

export default Form;