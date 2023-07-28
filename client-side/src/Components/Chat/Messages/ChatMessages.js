import React, { useContext } from "react";
import { ChatContext } from "../../Contexts/ChatProvider";
import AuthContext from "../../Contexts/AuthProvider";
import SendedMessage from "./SendedMessage";
import ReceivedMessage from "./ReceivedMessage";
import { IconButton } from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";

const ChatMessages = () => {
  const { messages, isThereMoreMessages, loadMessages } =
    useContext(ChatContext);
  const { user } = useContext(AuthContext);
  return (
    <>
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
      {messages.map((message, index) => {
        var messageType = message.senderId === user.id ? "sended" : "received";
        return messageType === "sended" ? (
          <SendedMessage message={message} index={index} />
        ) : (
          <ReceivedMessage message={message} index={index} />
        );
      })}
    </>
  );
};

export default ChatMessages;
