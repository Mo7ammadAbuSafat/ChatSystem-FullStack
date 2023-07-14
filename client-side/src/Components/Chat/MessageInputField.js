import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";

const StyledPaper = styled(Paper)({
  padding: "10px",
  display: "flex",
  alignItems: "center",
  width: "90%",
  margin: "15px auto",
  borderRadius: "20px",
  boxShadow: "none",
  border: "0.5px solid #eae5e5",
});

const MessageInputField = ({ value, onChange }) => {
  return (
    <StyledPaper component="form">
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="type a message"
        value={value}
        onChange={onChange}
      />
    </StyledPaper>
  );
};

export default MessageInputField;
