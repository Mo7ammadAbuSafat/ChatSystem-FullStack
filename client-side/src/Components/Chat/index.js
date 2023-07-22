import { Divider, IconButton, Stack } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "../Contexts/ChatProvider";
import MessageInputField from "./MessageInputField";
import SendIcon from "@mui/icons-material/Send";
import NoChatSelected from "./NoChatSelected";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import styled from "@emotion/styled";
import UpdateIcon from "@mui/icons-material/Update";

const StyledMessagesContainer = styled(Stack)({
  height: "calc(100vh - 200px)",
  overflowY: "auto",
  alignItems: "baseline",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "0.3em",
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
  const {
    selectedUser,
    handleSendMessage,
    messages,
    isThereMoreMessages,
    loadMessages,
  } = useContext(ChatContext);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [textMessage, setTextMessage] = useState("");
  const [firstMessageId, setFirstMessageId] = useState(null);

  const handleTextMessageChange = (e) => {
    setTextMessage(e.target.value);
  };

  const messagesContainerRef = useRef();

  useEffect(() => {
    if (messagesContainerRef && messagesContainerRef.current) {
      const { clientHeight, scrollHeight, scrollTop } =
        messagesContainerRef.current;
      if (scrollHeight - (scrollTop + clientHeight) < 200) {
        messagesContainerRef.current.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        });
      } else if (messages[0].id !== firstMessageId) {
        messagesContainerRef.current.scrollTo({
          top: scrollHeight - scrollPosition,
        });
        setFirstMessageId(messages[0].id);
      }
    }
  }, [messages]);

  const handleScrollChange = () => {
    const { scrollHeight, scrollTop } = messagesContainerRef.current;
    setScrollPosition(scrollHeight - scrollTop);
  };

  return selectedUser === null ? (
    <NoChatSelected />
  ) : (
    <Stack paddingTop={"15px"}>
      <ChatHeader />
      <Divider sx={{ marginTop: "15px" }} />
      <StyledMessagesContainer
        p={{ xs: "10px 5px", md: "10px 15px" }}
        ref={messagesContainerRef}
        spacing={0.5}
        onScroll={handleScrollChange}
      >
        {isThereMoreMessages && (
          <IconButton
            type="button"
            sx={{ margin: "auto" }}
            onClick={() => {
              loadMessages(false);
            }}
          >
            <UpdateIcon sx={{ color: "#757575", fontSize: "35px" }} />
          </IconButton>
        )}
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
