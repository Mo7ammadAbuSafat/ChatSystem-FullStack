import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",
  minHeight: "calc(100vh)",
  width: "100%",
  background: "linear-gradient(180deg, #c5fec5 -50%, #FFFFFF 50%)",
});
const StyledContainer = styled(Stack)({
  padding: "40px",
  width: "450px",
  backgroundColor: "white",
  borderRadius: "30px",
  boxShadow: "-2px 4px 119px -14px rgba(0,0,0,0.6)",
});
const StyledImg = styled("img")({
  width: "200px",
  objectFit: "contain",
  marginBottom: "15px",
});

const SignPageContainer = ({ children }) => {
  return (
    <StyledBox>
      <StyledContainer spacing={2}>
        <StyledImg src="/Assets/Let's Chat-1.png" alt="" />
        {children}
      </StyledContainer>
    </StyledBox>
  );
};

export default SignPageContainer;
