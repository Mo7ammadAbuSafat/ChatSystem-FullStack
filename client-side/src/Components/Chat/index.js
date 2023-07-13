import { Divider, Stack } from "@mui/material";
import React, { useContext } from "react";
import UserCard from "../UserCard";
import { ChatContext } from "../Contexts/ChatProvider";

const Chat = () => {
  const { selectedUser } = useContext(ChatContext);

  return selectedUser === null ? (
    <Stack alignItems={"center"} justifyContent={"center"} height={"90vh"}>
      <img
        alt=""
        src="/Assets/Start Chat-1.png"
        style={{ width: "40%", objectFit: "contain", opacity: "50%" }}
      />
    </Stack>
  ) : (
    <Stack paddingTop={"15px"} spacing={2}>
      <UserCard user={selectedUser} />
      <Divider />
    </Stack>
  );
};

export default Chat;
