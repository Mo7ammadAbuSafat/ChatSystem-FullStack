import React, { useContext, useEffect } from "react";
import { useState, createContext } from "react";
import SignalRService from "../../Services/SignalRService";
import AuthContext from "./AuthProvider";

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [service, setService] = useState(null);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetch = async () => {
      const signalRService = new SignalRService(token);

      await signalRService.startConnection();
      signalRService.registerReceiveMessageHandler(
        (userId, receivedMessage) => {
          // setMessages((prevMessages) => [...prevMessages, receivedMessage]);
          console.log(userId, receivedMessage);
        }
      );
      setService(signalRService);
    };
    fetch();
  }, []);

  const handleSendMessage = (message) => {
    if (selectedUser) {
      service.sendMessage(selectedUser.id, message);
    }
  };

  return (
    <ChatContext.Provider
      value={{ selectedUser, setSelectedUser, handleSendMessage }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
