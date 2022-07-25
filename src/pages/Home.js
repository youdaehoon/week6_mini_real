import React from "react";
import PhotoCard from "../components/PhotoCard";
import styled from "styled-components";
import "../modaltest/modal.css";

const Home = ({ ModalInfo }) => {
  const [ModalLogin, SetModalLogin] = ModalInfo.slice(0, 2);
  const [ModalLoginOrSignup, SetModalLoginOrSignup] = ModalInfo.slice(2.2);
  return(
    <div>
      <HomeWholeFrame
      onClick={() => {
        SetModalLogin(true);
        SetModalLoginOrSignup("detail");
      }}
      >
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
      </HomeWholeFrame>
    </div>
  );
};

const HomeWholeFrame = styled.div`
  display: flex;
  max-width: calc(1206px);
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;



export default Home;
