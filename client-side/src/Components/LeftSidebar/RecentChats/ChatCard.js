import { Stack, Typography } from "@mui/material";
import React from "react";
import MyAvatar from "../../UserCard/MyAvatar";
import GetTime from "../../Utils/GetTime";
import styled from "@emotion/styled";

const StyledTypography = styled(Typography)({
  color: "#5a5858",
  fontSize: "16px",
  fontWeight: "bold",
});

const StyledTypography2 = styled(Typography)({
  color: "#757575",
  fontSize: "14px",
});

const ChatCard = ({ chat }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
      height={"60px"}
    >
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <MyAvatar src={chat.user.image?.imagePath} />
        <Stack>
          <StyledTypography variant="h6">{chat.user.username}</StyledTypography>
          <StyledTypography2>{chat.lastMessage.textBody}</StyledTypography2>
        </Stack>
      </Stack>
      <StyledTypography2>
        {GetTime(chat.lastMessage.creationDate)}
      </StyledTypography2>
    </Stack>
  );
};

export default ChatCard;
