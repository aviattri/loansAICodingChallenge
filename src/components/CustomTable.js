import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { connect } from "react-redux";
import { setUniData, removeUni } from "../store/Actions";

const CustomTable = ({ data }) => {
  console.log(data);

  if (!data) {
    return <div>No Data</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Uni</TableCell>
            <TableCell>Domain</TableCell>
            <TableCell>Website</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Alpha Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow
              key={index}
              onP
              sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
            >
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.domains}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.web_pages}
              </TableCell>
              <TableCell component="th" scope="row">
                {item["state-province"] ?? "n/a"}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.country}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.alpha_two_code}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
    removeUni: (data) => {
      return dispatch(removeUni(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomTable);
