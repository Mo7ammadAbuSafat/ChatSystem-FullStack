import { Divider, Stack } from "@mui/material";
import React from "react";
import LeftSidebarHeader from "./LeftSidebarHeader";
import FriendsSearchField from "./FriendsSearchField";

const LeftSidebar = () => {
  return (
    <Stack>
      <LeftSidebarHeader />
      <Divider />
      <FriendsSearchField />
    </Stack>
  );
};

export default LeftSidebar;
