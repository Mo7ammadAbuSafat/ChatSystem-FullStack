import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)({
  "& p": {
    margin: "2px 0",
  },
  "& h1, & h2, & h3": {
    margin: "10px 0",
  },
  color: "#303030",
  lineHeight: 1.4,
});

const StyledHtmlText = ({ text }) => {
  return (
    <StyledBox variant="body" dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export default StyledHtmlText;
