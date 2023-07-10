import React, { forwardRef, useContext } from "react";
import AlertContext from "../Contexts/AlertProvider";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

const MyAlert = () => {
  const { isOpen, alertType, alertMessage, closeAlert } =
    useContext(AlertContext);

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <>
      <Snackbar open={isOpen} autoHideDuration={3000} onClose={closeAlert}>
        <Alert
          onClose={closeAlert}
          severity={alertType}
          sx={{ width: "300px" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default MyAlert;
