import { ListItemIcon, MenuItem, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import { Logout, Settings } from "@mui/icons-material";
import AuthContext from "../../Contexts/AuthProvider";
import UserCard from "../../UserCard";
import ClickMenu from "../../ClickMenu";
import PopupModal from "../../PopupModal";
import FormChangePhoto from "./FormChangePhoto";

const LeftSidebarHeader = () => {
  const { user, logout } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [openChangePhotoPopup, setOpenChangePhotoPopup] = useState(false);
  const handleChangePhotoClick = () => {
    setOpenChangePhotoPopup(true);
    handleCloseMenu();
  };
  const handleClosChangePhotoPopup = () => {
    setOpenChangePhotoPopup(false);
  };

  return (
    <Stack
      direction="row"
      p={2}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <UserCard user={user} />
      <ClickMenu
        handleClick={handleClickMenu}
        handleClose={handleCloseMenu}
        anchorEl={anchorEl}
      >
        <MenuItem onClick={handleChangePhotoClick}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          change photo
        </MenuItem>
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          logout
        </MenuItem>
      </ClickMenu>
      <PopupModal
        name={"Change Photo"}
        open={openChangePhotoPopup}
        fullWidth={false}
        handleClose={handleClosChangePhotoPopup}
      >
        <FormChangePhoto />
      </PopupModal>
    </Stack>
  );
};

export default LeftSidebarHeader;
