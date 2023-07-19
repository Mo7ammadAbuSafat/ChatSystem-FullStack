import styled from "@emotion/styled";
import { Avatar } from "@mui/material";
import React from "react";

const MyAvatar = ({ size, src }) => {
  const avatarDimensions =
    size === "small"
      ? "30px"
      : size === "medium"
      ? "40px"
      : size === "large"
      ? "45px"
      : "50px";

  const StyledAvatar = styled(Avatar)({
    bgcolor: "#03AC13",
    width: avatarDimensions,
    height: avatarDimensions,
  });
  return <StyledAvatar src={src} />;
};

export default MyAvatar;
