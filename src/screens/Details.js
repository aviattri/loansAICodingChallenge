import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import CustomTable from "../components/CustomTable";
import { connect } from "react-redux";
import { setUniData, removeUni, addUni } from "../store/Actions";

const Details = ({ setUniData, data, removeUni, addUni }) => {
  const onLoad = () => {
    axios
      .get(`http://universities.hipolabs.com/search?country=Australia`)
      .then((res) => {
        const uni = res.data;
        setUniData(uni);
      });
  };

  return (
    <>
      <Button variant="text" onClick={() => onLoad()}>
        Load
      </Button>
      <Button variant="text" onClick={() => removeUni()}>
        Delete
      </Button>
      <Button variant="text" onClick={() => addUni()}>
        Add
      </Button>
      <CustomTable />
    </>
  );
};

function mapStateToProps(state) {
  // console.log(state);
  return {
    data: state.Reducer.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUniData: (data) => {
      return dispatch(setUniData(data));
    },
    removeUni: () => {
      return dispatch(removeUni());
    },
    addUni: () => {
      return dispatch(addUni());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
