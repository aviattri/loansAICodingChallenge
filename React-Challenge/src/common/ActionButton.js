import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

const ActionButton = ({
  loading,
  disabled,
  loadingLabel,
  label,
  onPress,
  variant,
  color,
}) => {
  return (
    <LoadingButton
      disabled={disabled}
      loading={loading}
      onClick={onPress}
      variant={variant ?? null}
      color={color ?? null}
    >
      {!loading ? label : loadingLabel}
    </LoadingButton>
  );
};
export default ActionButton;
