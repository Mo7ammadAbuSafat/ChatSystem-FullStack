import React, { useContext } from "react";
import LayoutContainer from "../../Components/ThreeColumnLayout/LayoutContainer";
import LeftItem from "../../Components/ThreeColumnLayout/LeftItem";
import MiddleItem from "../../Components/ThreeColumnLayout/MiddleItem";
import LeftSidebar from "../../Components/LeftSidebar";
import SimpleBackdrop from "../../Components/SimpleBackdrop";
import AuthContext from "../../Components/Contexts/AuthProvider";
import ChatContextProvider from "../../Components/Contexts/ChatProvider";
import Chat from "../../Components/Chat";

const Home = () => {
  const { user } = useContext(AuthContext);
  return user === null ? (
    <SimpleBackdrop />
  ) : (
    <ChatContextProvider>
      <LayoutContainer>
        <LeftItem>
          <LeftSidebar />
        </LeftItem>
        <MiddleItem>
          <Chat />
        </MiddleItem>
      </LayoutContainer>
    </ChatContextProvider>
  );
};

export default Home;
