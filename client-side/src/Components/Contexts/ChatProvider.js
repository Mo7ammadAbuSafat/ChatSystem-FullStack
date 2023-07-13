import React from "react";
import { useState, createContext } from "react";

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <ChatContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
