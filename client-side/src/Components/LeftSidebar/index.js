import { Divider, Stack, styled, useTheme } from "@mui/material";
import React, { useState } from "react";
import LeftSidebarHeader from "./Header";
import RecentChats from "./RecentChats";
import MySearchTextField from "../Inputs/MySearchTextField";
import SearchResult from "./SearchResult";

const StyledStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: "15px 10px",
  height: "100%",
}));

const LeftSidebar = () => {
  const theme = useTheme();
  const [pageNumber, setPageNumber] = useState(1);
  const [searchText, setSearchText] = useState("");
  const onSearchTextChange = (event) => {
    setPageNumber(1);
    const value = event.target.value;
    setSearchText(value);
  };
  return (
    <StyledStack theme={theme}>
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
    </StyledStack>
  );
};

export default LeftSidebar;
