import { Box } from "@mui/material";
import React from "react";

const RightItem = ({ children }) => {
  return (
    <Box
      flex={1.5}
      position={"sticky"}
      top={0}
      sx={{
        padding: "15px 10px",
        height: "100vh",
        display: { xs: "none", sm: "none", md: "block" },
        overflowY: "auto",
        backgroundColor: "#f7f7f7",
      }}
    >
      {children}
    </Box>
  );
};

export default RightItem;
