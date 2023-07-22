import React, { useContext } from "react";
import { ChatContext } from "../Contexts/ChatProvider";
import { Stack, Tooltip } from "@mui/material";
import AuthContext from "../Contexts/AuthProvider";
import GetTime from "../Utils/GetTime";

const ChatMessages = () => {
  const { messages } = useContext(ChatContext);
  const { user } = useContext(AuthContext);
  return (
    <>
      {messages.map((message, index) => {
        var messageType = message.senderId === user.id ? "sended" : "received";
        return messageType === "sended" ? (
          <Tooltip title={GetTime(message.creationDate)} placement="left" arrow>
            <Stack
              key={index}
              color={"white"}
              bgcolor={"#03AC13"}
              p={1}
              borderRadius={"15px"}
              alignSelf={"end"}
              maxWidth={"80%"}
            >
              {message.textBody}
            </Stack>
          </Tooltip>
        ) : (
          <Tooltip
            title={GetTime(message.creationDate)}
            placement="right"
            arrow
          >
            <Stack
              key={index}
              bgcolor={"#75757550"}
              p={1}
              borderRadius={"15px"}
              alignSelf={"start"}
            >
              {message.textBody}
            </Stack>
          </Tooltip>
        );
      })}
    </>
  );
};

export default ChatMessages;
