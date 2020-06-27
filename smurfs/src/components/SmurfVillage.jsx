import React from "react";
import { context } from "../contexts/context";
import { Smurf } from "../components/Smurf";
import { useContext } from "react";

const SmurfVillage = () => {
  const value = useContext(context);

  return (
    <div>
      {value.smurfs.map((smurf) => (
        <Smurf name={smurf.name} age={smurf.age} height={smurf.height}/>
      ))}
    </div>
  );
};

export default SmurfVillage;
