import React, { Component } from "react";
import "./App.css";
import AddSmurf from "./AddSmurf";
import Smurfs from "./Smurfs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddSmurf />
        <Smurfs />
      </div>
    );
  }
}

export default App;
