import { Stack } from "@mui/material";
import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import FormChangePhoto from "./Forms/FormChangePhoto";
import FormChangeAbout from "./Forms/FormChangeAbout";
import FormChangePassword from "./Forms/FormChangePassword";

const AccountSettings = () => {
  const [tabValue, setTabValue] = useState("1");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Stack alignItems={"center"}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Basic" value="1" />
            <Tab label="security" value="2" />
            <Tab label="profile photo" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ width: "100%", marginTop: "10px" }}>
          <FormChangeAbout />
        </TabPanel>
        <TabPanel value="2" sx={{ width: "100%", marginTop: "10px" }}>
          <FormChangePassword />
        </TabPanel>
        <TabPanel value="3" sx={{ width: "100%", marginTop: "10px" }}>
          <FormChangePhoto />
        </TabPanel>
      </TabContext>
    </Stack>
  );
};

export default AccountSettings;
