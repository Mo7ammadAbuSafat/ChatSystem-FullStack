import { Stack } from "@mui/material";
import React from "react";

const NoChatSelected = () => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"} height={"90vh"}>
      <img
        alt=""
        src="/Assets/Start Chat-1.png"
        style={{ width: "40%", objectFit: "contain", opacity: "50%" }}
      />
    </Stack>
  );
};

export default NoChatSelected;
