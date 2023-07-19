import {
  Box,
  CircularProgress,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../Contexts/AuthProvider";
import UserCard from "../UserCard";
import ChatIcon from "@mui/icons-material/Chat";
import { ChatContext } from "../Contexts/ChatProvider";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import MySearchTextField from "../Inputs/MySearchTextField";

const RightSidebar = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useContext(AuthContext);
  const { setSelectedUser } = useContext(ChatContext);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      var data = { pageNumber, pageSize: 7, searchText };
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
          pageNumber > 1
            ? setUsers([...users, ...response.data.users])
            : setUsers(response.data.users);
          setNumOfPages(response.data.numOfPages);
        });
      setIsLoading(false);
    };
    fetchData();
  }, [pageNumber, searchText, token]);

  const onSearchTextChange = (event) => {
    setPageNumber(1);
    const value = event.target.value;
    setSearchText(value);
  };

  return (
    <Stack alignItems={"center"} paddingTop={"10px"}>
      <MySearchTextField
        value={searchText}
        onChange={onSearchTextChange}
        placeholder={"search people"}
      />
      {isLoading && pageNumber === 1 ? (
        <Box flex={4}>
          <CircularProgress color="inherit" size={16} />
        </Box>
      ) : (
        <Stack spacing={3} width={"85%"} marginTop={"15px"}>
          {users.map((user, index) => {
            return (
              <Stack
                key={index}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <UserCard user={user} size="large" />
                {user.id !== authContext.user.id && (
                  <Tooltip title="start a chat" arrow>
                    <IconButton onClick={() => setSelectedUser(user)}>
                      <ChatIcon sx={{ color: "#03AC1390" }} />
                    </IconButton>
                  </Tooltip>
                )}
              </Stack>
            );
          })}
          {pageNumber < numOfPages &&
            (!isLoading ? (
              <IconButton onClick={() => setPageNumber(pageNumber + 1)}>
                <ExpandCircleDownIcon
                  sx={{ color: "#03AC1390", fontSize: "45px", margin: "auto" }}
                />
              </IconButton>
            ) : (
              <CircularProgress color="inherit" size={16} />
            ))}
        </Stack>
      )}
    </Stack>
  );
};

export default RightSidebar;
