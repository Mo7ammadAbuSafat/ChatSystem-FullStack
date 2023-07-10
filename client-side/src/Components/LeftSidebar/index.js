import { Divider, Stack } from "@mui/material";
import React from "react";
import SearchField from "../Inputs/SearchField";
import LeftSidebarHeader from "./LeftSidebarHeader";

const LeftSidebar = () => {
  return (
    <Stack>
      <LeftSidebarHeader />
      <Divider />
      <SearchField />
    </Stack>
  );
};

export default LeftSidebar;
