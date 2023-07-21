import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Contexts/AuthProvider";
import axios from "axios";
import {
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { ChatContext } from "../../Contexts/ChatProvider";
import ChatCard from "./ChatCard";

const RecentChats = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chats, setChats] = useState([]);
  const { token, user } = useContext(AuthContext);
  const { selectedUser, setSelectedUser, newMessage } = useContext(ChatContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await axios
        .get(`https://localhost:7271/api/users/${user.id}/recent-chats`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        })
        .then((response) => {
          setChats(response.data);
        });
      setIsLoading(false);
    };
    fetchData();
  }, [token, user]);

  useEffect(() => {
    if (newMessage) {
      const { senderId, receiverId } = newMessage;
      const chatUserId = senderId === user.id ? receiverId : senderId;
      const chatIndex = chats.findIndex((chat) => chat.user.id === chatUserId);

      if (chatIndex !== -1) {
        const updatedChats = [...chats];
        const newChat = { ...updatedChats[chatIndex], lastMessage: newMessage };
        updatedChats.splice(chatIndex, 1);
        updatedChats.unshift(newChat);
        setChats(updatedChats);
      }
    }
  }, [newMessage, chats, user.id]);

  return isLoading ? (
    <Box flex={4}>
      <CircularProgress color="inherit" size={16} />
    </Box>
  ) : (
    <List
      sx={{
        "&& .Mui-selected": {
          backgroundColor: "#75757520",
        },
      }}
    >
      {chats.map((chat, index) => {
        return (
          <ListItem
            disablePadding
            selected={selectedUser?.id === chat.user.id}
            key={index}
          >
            <ListItemButton
              key={index}
              onClick={() => setSelectedUser(chat.user)}
            >
              <ChatCard chat={chat} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default RecentChats;
