import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const MyInputFile = ({ onChange }) => {
  const FileInput = styled("input")({
    display: "none",
  });

  const StyledFileInputButton = styled(Button)({
    "&:hover": {
      background: "#03AC1320",
    },
    color: "#03AC13",
    borderRadius: "4px",
  });

  return (
    <>
      <label htmlFor="file-input">
        <StyledFileInputButton component="span">
          Choose a file
        </StyledFileInputButton>
      </label>
      <FileInput type="file" id="file-input" onChange={onChange} />
    </>
  );
};

export default MyInputFile;
