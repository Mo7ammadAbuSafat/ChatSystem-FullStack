import { Box } from "@mui/material";
import React from "react";

const LeftItem = ({ children }) => {
  return (
    <Box
      flex={1.2}
      position={"sticky"}
      top={0}
      sx={{
        padding: "15px 10px",
        height: "100vh",
        display: { xs: "none", md: "block" },
        overflowY: "auto",
        backgroundColor: "#f7f7f7",
        minWidth: "350px",
      }}
    >
      {children}
    </Box>
  );
};

export default LeftItem;
