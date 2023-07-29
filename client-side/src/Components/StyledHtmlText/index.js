import React from "react";
import { Box, useTheme } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)(({ theme }) => ({
  "& p": {
    margin: "2px 0",
  },
  "& h1, & h2, & h3": {
    margin: "10px 0",
  },
  color: theme.palette.text.primary,
  lineHeight: 1.4,
}));

const StyledHtmlText = ({ text }) => {
  const theme = useTheme();
  return (
    <StyledBox
      theme={theme}
      variant="body"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default StyledHtmlText;
