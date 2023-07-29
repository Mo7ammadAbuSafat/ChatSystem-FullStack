import { ListItemIcon, MenuItem, Stack, useTheme } from "@mui/material";
import React, { useContext, useState } from "react";
import { Logout, Settings } from "@mui/icons-material";
import AuthContext from "../../Contexts/AuthProvider";
import UserCard from "../../UserCard";
import ClickMenu from "../../ClickMenu";
import PopupModal from "../../PopupModal";
import AccountSettings from "../../Settings";
import { MUISwitch } from "./MuiSwitch";
import { ThemeStatusContext } from "../../Contexts/ThemeStatusProvider";

const LeftSidebarHeader = () => {
  const { user, logout } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [openSettingsPopup, setOpenSettingsPopup] = useState(false);
  const handleSettingsClick = () => {
    setOpenSettingsPopup(true);
    handleCloseMenu();
  };
  const handleClosSettingsPopup = () => {
    setOpenSettingsPopup(false);
  };

  const theme = useTheme();
  const { toggleTheme } = useContext(ThemeStatusContext);

  return (
    <Stack
      direction="row"
      p={2}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <UserCard user={user} textColor="#03AC13" size="xLarge" />
      <ClickMenu
        handleClick={handleClickMenu}
        handleClose={handleCloseMenu}
        anchorEl={anchorEl}
      >
        <MenuItem onClick={toggleTheme}>
          <MUISwitch theme={theme} checked={theme.palette.mode === "dark"} />
        </MenuItem>
        <MenuItem onClick={handleSettingsClick}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          logout
        </MenuItem>
      </ClickMenu>
      <PopupModal
        name={"Settings"}
        open={openSettingsPopup}
        fullWidth={true}
        handleClose={handleClosSettingsPopup}
      >
        <AccountSettings />
      </PopupModal>
    </Stack>
  );
};

export default LeftSidebarHeader;
