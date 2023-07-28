import { Stack, Tooltip } from "@mui/material";
import React from "react";
import GetTime from "../../Utils/GetTime";

const ReceivedMessage = ({ message, index }) => {
  return (
    <Tooltip title={GetTime(message.creationDate)} placement="left" arrow>
      <Stack
        key={index}
        p={1}
        borderRadius={"15px"}
        bgcolor={"#75757550"}
        alignSelf={"start"}
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

export default ReceivedMessage;
