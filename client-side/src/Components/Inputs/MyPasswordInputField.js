import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";

const MyPasswordInputField = ({ name, label, value, onChange, validation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <InputLabel
        htmlFor="outlined-adornment-password"
        error={validation !== " "}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        autoComplete="off"
        error={validation !== " "}
        id="outlined-adornment-password"
        name={name}
        label={label}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        value={value}
        onChange={onChange}
      />
      <FormHelperText error={validation !== " "}>{validation}</FormHelperText>
    </FormControl>
  );
};

export default MyPasswordInputField;
