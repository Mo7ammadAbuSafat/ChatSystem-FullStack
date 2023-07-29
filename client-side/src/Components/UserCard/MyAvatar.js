import styled from "@emotion/styled";
import { Avatar, Badge } from "@mui/material";
import React, { useContext } from "react";
import { ChatContext } from "../Contexts/ChatProvider";

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px white`,
  },
});

const MyAvatar = ({ size, user }) => {
  const { activeUsers } = useContext(ChatContext);

  const avatarDimensions =
    size === "small"
      ? "30px"
      : size === "medium"
      ? "40px"
      : size === "large"
      ? "45px"
      : "50px";

  const StyledAvatar = styled(Avatar)({
    width: avatarDimensions,
    height: avatarDimensions,
  });

  return activeUsers.includes(user.id) ? (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
    >
      <StyledAvatar src={user.image?.imagePath} />
    </StyledBadge>
  ) : (
    <StyledAvatar src={user.image?.imagePath} />
  );
};

export default MyAvatar;
