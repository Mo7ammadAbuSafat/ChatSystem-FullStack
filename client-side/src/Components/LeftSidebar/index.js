import { Divider, Stack } from "@mui/material";
import React from "react";
import LeftSidebarHeader from "./LeftSidebarHeader";

const LeftSidebar = () => {
  return (
    <Stack>
      <LeftSidebarHeader />
      <Divider />
    </Stack>
  );
};

export default LeftSidebar;
