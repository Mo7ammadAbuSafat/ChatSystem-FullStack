import { IconButton, Stack } from "@mui/material";
import React, { useContext } from "react";
import UserCard from "../UserCard";
import InfoIcon from "@mui/icons-material/Info";
import { ChatContext } from "../Contexts/ChatProvider";

const ChatHeader = () => {
  const { selectedUser } = useContext(ChatContext);
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <UserCard user={selectedUser} />
      <IconButton type="button" sx={{ p: "10px" }}>
        <InfoIcon sx={{ color: "#03AC1390", fontSize: "30px" }} />
      </IconButton>
    </Stack>
  );
};

export default ChatHeader;
