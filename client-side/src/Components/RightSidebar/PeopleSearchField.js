import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";

const StyledPaper = styled(Paper)({
  padding: "1px 10px",
  display: "flex",
  alignItems: "center",
  width: "90%",
  margin: "15px auto",
  borderRadius: "20px",
  boxShadow: "none",
  border: "0.5px solid #eae5e5",
});

const PeopleSearchField = ({ searchText, onChange }) => {
  return (
    <StyledPaper component="form">
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="search people"
        value={searchText}
        onChange={onChange}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </StyledPaper>
  );
};

export default PeopleSearchField;
