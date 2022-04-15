import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CustomSnack({
  type,
  onOpenSnackbar,
  onCloseSnackbar,
  onCloseAlert,
  label,
}) {
  return (
    <Snackbar
      open={onOpenSnackbar}
      autoHideDuration={2000}
      onClose={() => onCloseSnackbar}
    >
      <Alert
        onClose={() => onCloseAlert}
        severity={type}
        sx={{ width: "100%" }}
      >
        {label}
      </Alert>
    </Snackbar>
  );
}

export default CustomSnack;
