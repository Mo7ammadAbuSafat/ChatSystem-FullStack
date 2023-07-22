import { Stack, Tooltip } from "@mui/material";
import React from "react";
import GetTime from "../../Utils/GetTime";

const ReceivedMessage = ({ message, index }) => {
  return (
    <Tooltip title={GetTime(message.creationDate)} placement="left" arrow>
      <Stack
        key={index}
        color={"white"}
        bgcolor={"#03AC13"}
        p={1}
        borderRadius={"15px"}
        alignSelf={"end"}
        maxWidth={"80%"}
      >
        {message.textBody}
      </Stack>
    </Tooltip>
  );
};

export default ReceivedMessage;
