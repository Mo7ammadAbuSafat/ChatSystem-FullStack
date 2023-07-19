import React from "react";
import { useState, createContext } from "react";

const AlertContext = createContext();

export function AlertContextProvider(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const openAlert = (type, message) => {
    setIsOpen(true);
    setAlertType(type);
    setAlertMessage(message);
  };
  const closeAlert = () => {
    setIsOpen(false);
  };
  return (
    <AlertContext.Provider
      value={{
        isOpen,
        alertType,
        alertMessage,
        openAlert,
        closeAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
}

export default AlertContext;
