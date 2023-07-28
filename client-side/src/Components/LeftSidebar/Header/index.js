import { ListItemIcon, MenuItem, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import { Logout, Settings } from "@mui/icons-material";
import AuthContext from "../../Contexts/AuthProvider";
import UserCard from "../../UserCard";
import ClickMenu from "../../ClickMenu";
import PopupModal from "../../PopupModal";
import AccountSettings from "../../Settings";

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
