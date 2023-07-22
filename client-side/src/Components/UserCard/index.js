import { Badge, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import MyAvatar from "./MyAvatar";
import styled from "@emotion/styled";
import { ChatContext } from "../Contexts/ChatProvider";

const UserCard = ({ size, textColor = "#757575", user }) => {
  const StyledTypography = styled(Typography)({
    color: textColor,
    fontSize: "16px",
    fontWeight: "bold",
  });

  return (
    <Stack direction="row" spacing={2} alignItems={"center"}>
      <MyAvatar user={user} size={size} />
      <StyledTypography>{user.username}</StyledTypography>
    </Stack>
  );
};

export default UserCard;
