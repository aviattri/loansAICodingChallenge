import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";

const LoadingButtons = ({
  loading,
  loadingLabel,
  label,
  onPress,
  variant,
  color,
}) => {
  return (
    <LoadingButton
      loading={loading}
      onClick={onPress}
      variant={variant ?? null}
      color={color ?? null}
    >
      {!loading ? label : loadingLabel}
    </LoadingButton>
  );
};
export default LoadingButtons;
