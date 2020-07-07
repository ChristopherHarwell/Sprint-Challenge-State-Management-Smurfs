
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/smurfActions";

const Smurfs = (props) => {
  console.log("smurf props: ", props);
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      <button onClick={props.fetchSmurfs}>Get Smurfs</button>
      <ul>
        {props.smurfs.map((smurf) => (
          <li>
            Name: {smurf.name} | Age: {smurf.age} | Height: {smurf.height}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs.smurfs,
    isFetching: state.smurfs.isFetching,
  };
};

export default connect(mapStateToProps, {
  fetchSmurfs
})(Smurfs);