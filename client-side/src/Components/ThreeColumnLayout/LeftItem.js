import { Box } from "@mui/material";
import React from "react";

const LeftItem = ({ children }) => {
  return (
    <Box
      flex={1.2}
      position={"sticky"}
      top={0}
      sx={{
        height: "100vh",
        display: { xs: "none", md: "block" },
        overflowY: "auto",
        minWidth: "350px",
      }}
    >
      {children}
    </Box>
  );
};

export default LeftItem;
