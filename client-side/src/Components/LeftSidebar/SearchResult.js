import {
  Box,
  CircularProgress,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../UserCard";
import ChatIcon from "@mui/icons-material/Chat";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import AuthContext from "../Contexts/AuthProvider";
import { ChatContext } from "../Contexts/ChatProvider";

const SearchResult = ({ pageNumber, setPageNumber, searchText }) => {
  const [numOfPages, setNumOfPages] = useState(1);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { token, user: authUser } = useContext(AuthContext);
  const { setSelectedUser } = useContext(ChatContext);

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

  return (
    <>
      {isLoading && pageNumber === 1 ? (
        <Box flex={4}>
          <CircularProgress color="inherit" size={16} />
        </Box>
      ) : users.length === 0 ? (
        <Typography margin={"10px auto"}>no result</Typography>
      ) : (
        <Stack spacing={3} width={"100%"} p={2}>
          {users.map((user, index) => {
            return (
              <Stack
                key={index}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <UserCard user={user} />
                {user.id !== authUser.id && (
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
    </>
  );
};

export default SearchResult;
