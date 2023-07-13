import { Divider, Stack } from "@mui/material";
import React, { useState } from "react";
import LeftSidebarHeader from "./LeftSidebarHeader";
import MySearchTextField from "../Inputs/MySearchTextField";

const LeftSidebar = () => {
  const [searchText, setSearchText] = useState("");
  const onSearchTextChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
  };
  return (
    <Stack>
      <LeftSidebarHeader />
      <Divider />
      <MySearchTextField
        value={searchText}
        onChange={onSearchTextChange}
        placeholder={"search friends"}
      />
    </Stack>
  );
};

export default LeftSidebar;
