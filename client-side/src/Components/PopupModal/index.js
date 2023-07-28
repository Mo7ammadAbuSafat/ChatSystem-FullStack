import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const CustomHeader = ({ name, onClose }) => {
  return (
    <DialogTitle>
      {name}
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 12,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );
};

const PopupModal = ({ name, handleClose, open, fullWidth, children }) => {
  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={"sm"}
      open={open}
      onClose={handleClose}
    >
      <CustomHeader name={name} onClose={handleClose} />
      <DialogContent sx={{ minWidth: "200px" }}>{children}</DialogContent>
    </Dialog>
  );
};

export default PopupModal;
