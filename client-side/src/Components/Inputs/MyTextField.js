import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React from "react";

const StyledTextField = styled(TextField)({
  width: "100%",
});

const MyTextField = ({
  name,
  label,
  value,
  onChange,
  validation,
  disabled = false,
}) => {
  return (
    <StyledTextField
      label={label}
      type="text"
      name={name}
      id="outlined"
      onChange={onChange}
      value={value}
      helperText={validation}
      error={validation !== " "}
      disabled={disabled}
    />
  );
};

export default MyTextField;
