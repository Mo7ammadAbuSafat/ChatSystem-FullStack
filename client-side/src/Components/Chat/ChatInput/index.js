import { IconButton, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import MessageInputField from "./MessageInputField";
import SendIcon from "@mui/icons-material/Send";
import { ChatContext } from "../../Contexts/ChatProvider";

const ChatInput = () => {
  const { handleSendMessage } = useContext(ChatContext);
  const [textMessage, setTextMessage] = useState("");

  const handleTextMessageChange = (e) => {
    setTextMessage(e.target.value);
  };

  return (
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
  );
};

export default ChatInput;
