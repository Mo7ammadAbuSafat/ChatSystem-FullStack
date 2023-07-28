import { Stack, Typography } from "@mui/material";
import React from "react";
import MyAvatar from "./MyAvatar";
import styled from "@emotion/styled";

const UserCard = ({ size, textColor = "#757575", user }) => {
  const isSmallScreen = size === "small" || size === "medium";

  const StyledTypography = styled(Typography)({
    color: textColor,
    fontSize: isSmallScreen ? "14px" : "16px",
    fontWeight: "bold",
  });

  return (
    <Stack
      direction="row"
      spacing={isSmallScreen ? 1 : 2}
      alignItems={"center"}
    >
      <MyAvatar user={user} size={size} />
      <StyledTypography>{user.username}</StyledTypography>
    </Stack>
  );
};

export default UserCard;
