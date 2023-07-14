import { Divider, IconButton, Stack } from "@mui/material";
import React, { useContext } from "react";
import { ChatContext } from "../Contexts/ChatProvider";
import MessageInputField from "./MessageInputField";
import SendIcon from "@mui/icons-material/Send";
import NoChatSelected from "./NoChatSelected";
import ChatHeader from "./ChatHeader";

const Chat = () => {
  const { selectedUser, handleSendMessage } = useContext(ChatContext);

  return selectedUser === null ? (
    <NoChatSelected />
  ) : (
    <Stack paddingTop={"15px"}>
      <ChatHeader />
      <Divider sx={{ margin: "15px 0 0 0" }} />
      <Stack height={"calc(100vh - 200px)"}></Stack>
      <Divider />
      <Stack height={"85px"} direction={"row"} alignItems={"center"}>
        <MessageInputField />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          onClick={handleSendMessage}
        >
          <SendIcon sx={{ color: "#03AC13", fontSize: "35px" }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Chat;
