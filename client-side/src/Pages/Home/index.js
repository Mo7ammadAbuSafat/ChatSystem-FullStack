import React, { useContext } from "react";
import LayoutContainer from "../../Components/ThreeColumnLayout/LayoutContainer";
import LeftItem from "../../Components/ThreeColumnLayout/LeftItem";
import MiddleItem from "../../Components/ThreeColumnLayout/MiddleItem";
import RightItem from "../../Components/ThreeColumnLayout/RightItem";
import LeftSidebar from "../../Components/LeftSidebar";
import SimpleBackdrop from "../../Components/SimpleBackdrop";
import AuthContext from "../../Components/Contexts/AuthProvider";
import RightSidebar from "../../Components/RightSidebar";

const Home = () => {
  const { user } = useContext(AuthContext);
  return user === null ? (
    <SimpleBackdrop />
  ) : (
    <LayoutContainer>
      <LeftItem>
        <LeftSidebar />
      </LeftItem>
      <MiddleItem></MiddleItem>
      <RightItem>
        <RightSidebar />
      </RightItem>
    </LayoutContainer>
  );
};

export default Home;
