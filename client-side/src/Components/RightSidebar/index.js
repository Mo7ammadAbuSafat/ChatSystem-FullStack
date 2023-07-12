import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import PeopleSearchField from "./PeopleSearchField";
import AuthContext from "../Contexts/AuthProvider";
import UserCard from "../UserCard";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const RightSidebar = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      var data = { pageNumber, pageSize: 10, searchText };
      await axios
        .get("https://localhost:7271/api/users", {
          params: data,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        })
        .then((response) => {
          setUsers(response.data.users);
          setNumOfPages(response.data.numOfPages);
        });
      setIsLoading(false);
    };
    fetchData();
  }, [pageNumber, searchText]);

  const onSearchTextChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
  };

  return (
    <Stack alignItems={"center"} paddingTop={"10px"}>
      <PeopleSearchField
        searchText={searchText}
        onChange={onSearchTextChange}
      />
      {isLoading ? (
        <Box flex={4}>Loading...</Box>
      ) : (
        <Stack spacing={3} width={"85%"} marginTop={"15px"}>
          {users.map((user) => {
            return (
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <UserCard user={user} size="large" />
                <Tooltip title="start a chat" arrow>
                  <IconButton>
                    <ChatBubbleIcon sx={{ color: "#03AC13" }} />
                  </IconButton>
                </Tooltip>
              </Stack>
            );
          })}
        </Stack>
      )}
    </Stack>
  );
};

export default RightSidebar;
