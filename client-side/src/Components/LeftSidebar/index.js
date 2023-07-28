import { Divider, Stack } from "@mui/material";
import React, { useState } from "react";
import LeftSidebarHeader from "./Header";
import RecentChats from "./RecentChats";
import MySearchTextField from "../Inputs/MySearchTextField";
import SearchResult from "./SearchResult";

const LeftSidebar = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchText, setSearchText] = useState("");
  const onSearchTextChange = (event) => {
    setPageNumber(1);
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
        placeholder={"search people"}
      />
      <RecentChats displayState={searchText !== ""} />
      {searchText !== "" && (
        <SearchResult
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          searchText={searchText}
        />
      )}
    </Stack>
  );
};

export default LeftSidebar;
