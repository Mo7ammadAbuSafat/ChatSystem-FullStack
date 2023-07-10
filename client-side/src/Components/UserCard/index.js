import { Stack, Typography } from "@mui/material";
import React from "react";
import MyAvatar from "./MyAvatar";
import styled from "@emotion/styled";

const StyledTypography = styled(Typography)({
  color: "#03AC13",
  fontSize: "18px",
  fontWeight: "bold",
});

const UserCard = ({ size, user }) => {
  return (
    <Stack direction="row" spacing={2} alignItems={"center"}>
      <MyAvatar src={user.image?.imagePath} size={size} />
      <StyledTypography>{user.username}</StyledTypography>
    </Stack>
  );
};

export default UserCard;
