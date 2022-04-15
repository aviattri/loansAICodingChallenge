import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUniData, removeUni, addUni } from "../store/Actions";
import { Box, Stack, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { ActionButton, CustomSnack } from "../common";
import CustomTable from "../components/CustomTable";

const Home = ({ setUniData, data, removeUni, addUni }) => {
  const [loadData, setLoadData] = useState(false);
  const [removeStatus, setRemoveStatus] = useState(false);
  const [addStatus, setAddStatus] = useState(false);
  const [uniSearch, setUniSearch] = useState("Australia");

  const onLoad = () => {
    setLoadData(true);
    axios
      .get(`http://universities.hipolabs.com/search?country=${uniSearch}`)
      .then((res) => {
        const uni = res?.data;
        setUniData(uni);
      });
    setTimeout(() => {
      setLoadData(false);
    }, 1000);
  };

  function renderFetchData() {
    return (
      <>
        <ActionButton
          loading={loadData}
          loadingLabel={"Fetching"}
          label={"Load Data"}
          variant={"contained"}
          color={"success"}
          onPress={() => onLoad()}
        />
        <CustomSnack
          type={"info"}
          onOpenSnackbar={loadData}
          onCloseAlert={loadData}
          label={`Fetching data..`}
        />
      </>
    );
  }

  function renderRemoveUni() {
    return (
      <>
        <ActionButton
          loading={removeStatus}
          loadingLabel={"removing"}
          label={"Remove Uni"}
          disabled={data?.length == 0}
          variant={"outlined"}
          color={"error"}
          onPress={() => {
            removeUni();
            setRemoveStatus(!removeStatus);
            setTimeout(() => {
              setRemoveStatus(false);
            }, 2000);
          }}
        />
        <CustomSnack
          type={"warning"}
          onOpenSnackbar={removeStatus}
          onCloseSnackbar={() => setRemoveStatus(!removeStatus)}
          onCloseAlert={() => setRemoveStatus(!removeStatus)}
          label={`${data[data.length - 1]?.name} removed from the last place!`}
        />
      </>
    );
  }

  function renderAddUni() {
    return (
      <>
        <ActionButton
          loading={addStatus}
          loadingLabel={"Adding"}
          disabled={data?.length == 0}
          label={"Add Uni"}
          variant={"outlined"}
          color={"success"}
          onPress={() => {
            addUni();
            setAddStatus(!addStatus);
            setTimeout(() => {
              setAddStatus(false);
            }, 1000);
          }}
        />
        <CustomSnack
          type={"success"}
          onOpenSnackbar={addStatus}
          onCloseSnackbar={() => setAddStatus(!addStatus)}
          onCloseAlert={() => setAddStatus(!addStatus)}
          label={`${data[0]?.name} added to the last place!`}
        />
      </>
    );
  }

  return (
    <div>
      <Stack
        mt={3}
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={3}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setUniSearch(e.target.value);
            onLoad();
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Search sx={{ color: "action.active", mr: 1, my: 2 }} />
            <TextField
              variant="outlined"
              label="Search Uni"
              onChange={(e) => setUniSearch(e.target.value)}
            />
          </Box>
        </form>
        <Stack
          mt={3}
          justifyContent="center"
          alignItems="center"
          direction="row"
          spacing={3}
        >
          {/* FetchData */}
          {renderFetchData()}
          {/* Remove Uni */}
          {renderRemoveUni()}
          {/* Add Uni */}
          {renderAddUni()}
        </Stack>
      </Stack>
      {/* Uni Table  */}
      <CustomTable />
    </div>
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
    removeUni: () => {
      return dispatch(removeUni());
    },
    addUni: () => {
      return dispatch(addUni());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
