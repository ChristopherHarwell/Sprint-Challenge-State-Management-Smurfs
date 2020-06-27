import React, { useState } from "react";
import { context } from "../contexts/context";
import data from '../SmurfData';
import "./App.css";
import SmurfVillage from "./SmurfVillage";
import Form from "./form/Form";

const App = (props) => {
  const [smurfs] = useState(data)
  const [newSmurf, setNewSmurf] = useState([]);


  
  return (
    <div className="App">
      <context.Provider value={{smurfs}}>
        <Form />
        <SmurfVillage />
      </context.Provider>
    </div>
  );
};

export default App;
