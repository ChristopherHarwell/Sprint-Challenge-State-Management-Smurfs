import React from 'react'
import axios from "axios";

export const getSmurf = (props) => {
  return axios
    .get("http://localhost:3333/smurfs")
.then((res) => {return <p>{res.data[0].name}</p>})
    .catch((err) => console.error(err));
};
