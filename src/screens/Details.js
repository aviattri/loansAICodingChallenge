import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import CustomTable from "../components/CustomTable";

const Details = () => {
  const [data, setData] = useState([]);

  const onLoad = () => {
    axios
      .get(`http://universities.hipolabs.com/search?country=India`)
      .then((res) => {
        const uni = res.data;
        setData(uni);
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
      <CustomTable data={data} />
    </>
  );
};
export default Details;
