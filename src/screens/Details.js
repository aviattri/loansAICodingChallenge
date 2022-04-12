import React, { useState } from "react";
import axios from "axios";
import LoadingButtons from "../common/Button";
import CustomTable from "../components/CustomTable";
import { connect } from "react-redux";
import { setUniData, removeUni, addUni } from "../store/Actions";
import { Stack } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Details = ({ setUniData, removeUni, addUni }) => {
  const [loadData, setLoadData] = useState(false);
  const [removeStatus, setRemoveStatus] = useState(false);
  const [addStatus, setAddStatus] = useState(false);

  const onLoad = () => {
    setLoadData(true);
    axios
      .get(`http://universities.hipolabs.com/search?country=Australia`)
      .then((res) => {
        const uni = res.data;
        setUniData(uni);
        setLoadData(false);
      });
  };

  return (
    <div>
      <Stack
        mt={3}
        justifyContent="center"
        alignItems="center"
        direction="row"
        spacing={3}
      >
        <Snackbar
          open={removeStatus}
          autoHideDuration={2000}
          onClose={() => setRemoveStatus(!removeStatus)}
        >
          <Alert
            onClose={() => setRemoveStatus(!removeStatus)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Successfully removed Uni from the last place!
          </Alert>
        </Snackbar>
        {/* FetchData */}
        <LoadingButtons
          loading={loadData}
          loadingLabel={"Fetching"}
          label={"Load Data"}
          variant={"contained"}
          color={"success"}
          onPress={() => onLoad()}
        />
        {/* Remove Uni */}
        <LoadingButtons
          loading={removeStatus}
          loadingLabel={"removing"}
          label={"Remove Uni"}
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

        {/* Remove Uni */}
        <LoadingButtons
          loading={addStatus}
          loadingLabel={"Adding"}
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

export default connect(mapStateToProps, mapDispatchToProps)(Details);
