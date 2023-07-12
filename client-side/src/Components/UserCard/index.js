import { Stack, Typography } from "@mui/material";
import React from "react";
import MyAvatar from "./MyAvatar";
import styled from "@emotion/styled";

const UserCard = ({ size, textColor = "#757575", user }) => {
  const StyledTypography = styled(Typography)({
    color: textColor,
    fontSize: "18px",
    fontWeight: "bold",
  });

  return (
    <Stack direction="row" spacing={2} alignItems={"center"}>
      <MyAvatar src={user.image?.imagePath} size={size} />
      <StyledTypography>{user.username}</StyledTypography>
    </Stack>
  );
};

export default UserCard;
