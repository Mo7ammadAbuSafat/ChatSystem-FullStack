import { Divider, Stack } from "@mui/material";
import React from "react";
import LeftSidebarHeader from "./Header";
import RecentChats from "./RecentChats";

const LeftSidebar = () => {
  return (
    <Stack>
      <LeftSidebarHeader />
      <Divider />
      <RecentChats />
    </Stack>
  );
};

export default LeftSidebar;
