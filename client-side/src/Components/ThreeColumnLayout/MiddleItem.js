import { Box } from "@mui/material";
import React from "react";

const MiddleItem = ({ children }) => {
  return (
    <Box flex={3} p={2}>
      {children}
    </Box>
  );
};

export default MiddleItem;
