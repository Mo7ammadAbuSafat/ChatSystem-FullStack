import { Drawer, IconButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext, useEffect, useState } from "react";
import LeftSidebar from ".";
import { ChatContext } from "../Contexts/ChatProvider";

const HiddenSidebar = () => {
  const [drawerState, setDrawerState] = useState(false);
  const toggleDrawer = (newState) => setDrawerState(newState);
  const { selectedUser } = useContext(ChatContext);

  useEffect(() => toggleDrawer(false), [selectedUser]);
  return (
    <Stack display={{ xs: "flex", md: "none" }} justifyContent={"center"}>
      <IconButton onClick={() => toggleDrawer(true)} sx={{ padding: 0 }}>
        <MenuIcon sx={{ color: "primary", fontSize: "25px" }} />
      </IconButton>
      <Drawer open={drawerState} onClose={() => toggleDrawer(false)}>
        <LeftSidebar />
      </Drawer>
    </Stack>
  );
};

export default HiddenSidebar;
