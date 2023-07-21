import { IconButton, Stack } from "@mui/material";
import React, { useContext } from "react";
import UserCard from "../UserCard";
import InfoIcon from "@mui/icons-material/Info";
import { ChatContext } from "../Contexts/ChatProvider";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useContext(ChatContext);
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Stack direction={"row"} spacing={2}>
        <IconButton
          type="button"
          sx={{ p: "10px 0px", display: { xs: "block", md: "none" } }}
          onClick={() => setSelectedUser(null)}
        >
          <ArrowBackIosNewIcon sx={{ color: "#03AC13", fontSize: "30px" }} />
        </IconButton>
        <UserCard user={selectedUser} />
      </Stack>
      <IconButton type="button" sx={{ p: "10px" }} disabled>
        <InfoIcon sx={{ color: "#03AC1390", fontSize: "30px" }} />
      </IconButton>
    </Stack>
  );
};

export default ChatHeader;
