import React from "react";
import PhotoCard from "../components/PhotoCard";
import styled from "styled-components";
import "../modaltest/modal.css";

const Home = () => {
 
  return(
    <div>
      <HomeWholeFrame>
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
