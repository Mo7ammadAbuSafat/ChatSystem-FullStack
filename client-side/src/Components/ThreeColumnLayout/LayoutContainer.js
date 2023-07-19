import { Stack } from "@mui/material";
import React from "react";

const LayoutContainer = ({ children }) => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"} spacing={1}>
      {children}
    </Stack>
  );
};

export default LayoutContainer;
