import { Stack, Tooltip } from "@mui/material";
import React from "react";
import GetTime from "../../Utils/GetTime";

const SendedMessage = ({ message, index }) => {
  return (
    <Tooltip title={GetTime(message.creationDate)} placement="right" arrow>
      <Stack
        key={index}
        p={1}
        borderRadius={"15px"}
        color={"white"}
        bgcolor={"#03AC13"}
        alignSelf={"end"}
        maxWidth={{ xs: "270px", sm: "400px", md: "500px", lg: "700px" }}
        sx={{
          wordWrap: "break-word",
          overflowWrap: "break-word",
        }}
      >
        {message.textBody}
      </Stack>
    </Tooltip>
  );
};

export default SendedMessage;
