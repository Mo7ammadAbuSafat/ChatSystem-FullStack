import { Divider, IconButton, Stack } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "../Contexts/ChatProvider";
import MessageInputField from "./MessageInputField";
import SendIcon from "@mui/icons-material/Send";
import NoChatSelected from "./NoChatSelected";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import styled from "@emotion/styled";

const StyledMessagesContainer = styled(Stack)({
  height: "calc(100vh - 200px)",
  overflowY: "auto",
  alignItems: "baseline",
  padding: "0 5px 2px 5px",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    background: "#75757530",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#75757550",
    borderRadius: "8px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#75757590",
  },
});

const Chat = () => {
  const { selectedUser, handleSendMessage, messages } = useContext(ChatContext);
  const [textMessage, setTextMessage] = useState("");
  const handleTextMessageChange = (e) => {
    setTextMessage(e.target.value);
  };

  const messagesContainerRef = useRef();

  useEffect(() => {
    if (messagesContainerRef && messagesContainerRef.current) {
      const { clientHeight, scrollHeight } = messagesContainerRef.current;
      messagesContainerRef.current.scrollTo({
        left: 0,
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return selectedUser === null ? (
    <NoChatSelected />
  ) : (
    <Stack paddingTop={"15px"}>
      <ChatHeader />
      <Divider sx={{ marginTop: "15px" }} />
      <StyledMessagesContainer ref={messagesContainerRef} spacing={0.5}>
        <ChatMessages />
      </StyledMessagesContainer>
      <Divider />
      <Stack height={"85px"} direction={"row"} alignItems={"center"}>
        <MessageInputField
          textMessage={textMessage}
          setTextMessage={setTextMessage}
          onChange={handleTextMessageChange}
          handleSendMessage={handleSendMessage}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          onClick={() => {
            handleSendMessage(textMessage);
            setTextMessage("");
          }}
        >
          <SendIcon sx={{ color: "#03AC13", fontSize: "35px" }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Chat;
