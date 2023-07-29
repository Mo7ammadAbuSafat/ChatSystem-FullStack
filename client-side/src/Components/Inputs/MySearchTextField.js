import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "1px 10px",
  display: "flex",
  alignItems: "center",
  width: "90%",
  margin: "15px auto 5px auto",
  borderRadius: "20px",
  boxShadow: "none",
  border: "0.5px solid silver",
  backgroundColor: theme.palette.input.primary,
}));

const MySearchTextField = ({ value, onChange, placeholder }) => {
  const theme = useTheme();
  return (
    <StyledPaper theme={theme}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <IconButton disabled type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </StyledPaper>
  );
};

export default MySearchTextField;
