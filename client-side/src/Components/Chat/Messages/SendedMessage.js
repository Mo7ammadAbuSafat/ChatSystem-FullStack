import { Stack, Tooltip } from "@mui/material";
import React from "react";
import GetTime from "../../Utils/GetTime";

const SendedMessage = ({ message, index }) => {
  return (
    <Tooltip title={GetTime(message.creationDate)} placement="right" arrow>
      <Stack
        key={index}
        bgcolor={"#75757550"}
        p={1}
        borderRadius={"15px"}
        alignSelf={"start"}
      >
        {message.textBody}
      </Stack>
    </Tooltip>
  );
};

export default SendedMessage;
