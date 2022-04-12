import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import CustomTable from "../components/CustomTable";
import { connect } from "react-redux";
import { setUniData } from "../store/Actions";

const Details = ({ setUniData }) => {
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
      <Button variant="text" onClick={() => onLoad()}>
        Delete
      </Button>
      <Button variant="text" onClick={() => onLoad()}>
        Add
      </Button>
      <CustomTable />
    </>
  );
};

function mapStateToProps(state) {
  return {
    data: state.Reducer.data,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setUniData: (data) => {
      return dispatch(setUniData(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
