import { Stack, Typography } from "@mui/material";
import React from "react";
import MyAvatar from "../../UserCard/MyAvatar";
import { GetShortTime } from "../../Utils/GetTime";
import styled from "@emotion/styled";

const StyledTypography = styled(Typography)({
  fontWeight: "bold",
});

const StyledTypography2 = styled(Typography)({
  fontSize: "14px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "80%",
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
      <Stack direction={"row"} spacing={2} alignItems={"center"} width={"80%"}>
        <MyAvatar user={chat.user} />
        <Stack width={"80%"}>
          <StyledTypography variant="h6" fontSize={{ xs: "14px", md: "16px" }}>
            {chat.user.username}
          </StyledTypography>
          <StyledTypography2>{chat.lastMessage.textBody}</StyledTypography2>
        </Stack>
      </Stack>
      <Typography fontSize={{ xs: "10px", md: "14px" }}>
        {GetShortTime(chat.lastMessage.creationDate)}
      </Typography>
    </Stack>
  );
};

export default ChatCard;
