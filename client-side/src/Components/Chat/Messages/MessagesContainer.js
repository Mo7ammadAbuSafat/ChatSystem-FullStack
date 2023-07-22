import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "../../Contexts/ChatProvider";

const StyledMessagesContainer = styled(Stack)({
  height: "calc(100vh - 200px)",
  overflowY: "auto",
  alignItems: "baseline",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "0.3em",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#75757550",
    borderRadius: "8px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#75757590",
  },
});

const MessagesContainer = ({ children }) => {
  const messagesContainerRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [firstMessageId, setFirstMessageId] = useState(null);
  const { messages } = useContext(ChatContext);

  const handleScrollChange = () => {
    const { scrollHeight, scrollTop } = messagesContainerRef.current;
    setScrollPosition(scrollHeight - scrollTop);
  };

  useEffect(() => {
    if (messagesContainerRef && messagesContainerRef.current) {
      const { clientHeight, scrollHeight, scrollTop } =
        messagesContainerRef.current;
      if (scrollHeight - (scrollTop + clientHeight) < 200) {
        messagesContainerRef.current.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        });
      } else if (messages[0].id !== firstMessageId) {
        messagesContainerRef.current.scrollTo({
          top: scrollHeight - scrollPosition,
        });
        setFirstMessageId(messages[0].id);
      }
    }
  }, [messages]);
  return (
    <StyledMessagesContainer
      p={{ xs: "10px 5px", md: "10px 15px" }}
      ref={messagesContainerRef}
      spacing={0.5}
      onScroll={handleScrollChange}
    >
      {children}
    </StyledMessagesContainer>
  );
};

export default MessagesContainer;
