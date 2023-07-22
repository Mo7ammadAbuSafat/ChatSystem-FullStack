import { Divider, Stack } from "@mui/material";
import React, { useContext } from "react";
import { ChatContext } from "../Contexts/ChatProvider";
import NoChatSelected from "./NoChatSelected";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./Messages/ChatMessages";
import MessagesContainer from "./Messages/MessagesContainer";
import ChatInput from "./ChatInput";

const Chat = () => {
  const { selectedUser } = useContext(ChatContext);

  return selectedUser === null ? (
    <NoChatSelected />
  ) : (
    <Stack paddingTop={"15px"}>
      <ChatHeader />
      <Divider sx={{ marginTop: "15px" }} />
      <MessagesContainer>
        <ChatMessages />
      </MessagesContainer>
      <Divider />
      <ChatInput />
    </Stack>
  );
};

export default Chat;
