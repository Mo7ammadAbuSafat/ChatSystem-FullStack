import { Drawer, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import Content from "./Content";

const HiddenUserInformation = () => {
  const [drawerState, setDrawerState] = useState(false);
  const toggleDrawer = (newState) => setDrawerState(newState);

  return (
    <Stack justifyContent={"center"}>
      <IconButton
        type="button"
        sx={{ marginRight: "10px" }}
        onClick={() => setDrawerState(true)}
      >
        <InfoIcon sx={{ color: "#03AC1390", fontSize: "30px" }} />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={drawerState}
        onClose={() => toggleDrawer(false)}
        sx={{ padding: 2 }}
      >
        <Stack p={2}>
          <Content closeDrawer={() => setDrawerState(false)} />
        </Stack>
      </Drawer>
    </Stack>
  );
};

export default HiddenUserInformation;
