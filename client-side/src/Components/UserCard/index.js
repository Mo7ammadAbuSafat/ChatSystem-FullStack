import { Badge, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import MyAvatar from "./MyAvatar";
import styled from "@emotion/styled";
import { ChatContext } from "../Contexts/ChatProvider";

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px white`,
  },
});

const UserCard = ({ size, textColor = "#757575", user }) => {
  const StyledTypography = styled(Typography)({
    color: textColor,
    fontSize: "16px",
    fontWeight: "bold",
  });
  const { activeUsers } = useContext(ChatContext);
  return (
    <Stack direction="row" spacing={2} alignItems={"center"}>
      {activeUsers.includes(user.id) ? (
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <MyAvatar src={user.image?.imagePath} size={size} />
        </StyledBadge>
      ) : (
        <MyAvatar src={user.image?.imagePath} size={size} />
      )}
      <StyledTypography>{user.username}</StyledTypography>
    </Stack>
  );
};

export default UserCard;
